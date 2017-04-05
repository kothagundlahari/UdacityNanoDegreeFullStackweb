# Copyright 2014 Google Inc. All Rights Reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
"""Command for attaching a disk to an instance."""

from googlecloudsdk.api_lib.compute import base_classes
from googlecloudsdk.api_lib.compute import csek_utils
from googlecloudsdk.api_lib.compute import instance_utils
from googlecloudsdk.calliope import base
from googlecloudsdk.command_lib.compute import flags
from googlecloudsdk.command_lib.compute import scope as compute_scopes
from googlecloudsdk.command_lib.compute.instances import flags as instance_flags

MODE_OPTIONS = {
    'ro': 'Read-only.',
    'rw': (
        'Read-write. It is an error to attach a disk in read-write mode to '
        'more than one instance.'),
}

DETAILED_HELP = {
    'DESCRIPTION': """\
        *{command}* is used to attach a disk to an instance. For example,

          $ gcloud compute instances attach-disk example-instance --disk DISK --zone us-central1-a

        attaches the disk named 'DISK' to the instance named
        'example-instance' in zone ``us-central1-a''.
        """,
}


def _CommonArgs(parser):
  """Add parser arguments common to all tracks."""

  instance_flags.INSTANCE_ARG.AddArgument(parser)

  parser.add_argument(
      '--device-name',
      help=('An optional name that indicates the disk name the guest '
            'operating system will see. (Note: Device name does not '
            'correspond to mounted volume name)'))

  parser.add_argument(
      '--disk',
      help='The name of the disk to attach to the instance.',
      required=True)

  parser.add_argument(
      '--mode',
      choices=MODE_OPTIONS,
      default='rw',
      help='Specifies the mode of the disk.')

  csek_utils.AddCsekKeyArgs(parser, flags_about_creation=False)


@base.ReleaseTracks(base.ReleaseTrack.BETA, base.ReleaseTrack.GA)
class AttachDisk(base_classes.NoOutputAsyncMutator):
  """Attach a disk to an instance."""

  @staticmethod
  def Args(parser):
    _CommonArgs(parser)

  @property
  def service(self):
    return self.compute.instances

  @property
  def method(self):
    return 'AttachDisk'

  @property
  def resource_type(self):
    return 'instances'

  def ParseDiskRef(self, args, instance_ref):
    return instance_utils.ParseDiskResource(self.resources, args.disk,
                                            instance_ref.zone,
                                            compute_scopes.ScopeEnum.ZONE)

  def CreateRequests(self, args):
    """Returns a request for attaching a disk to an instance."""
    instance_ref = instance_flags.INSTANCE_ARG.ResolveAsResource(
        args, self.resources, scope_lister=flags.GetDefaultScopeLister(
            self.compute_client, self.project))

    disk_ref = self.ParseDiskRef(args, instance_ref)

    if args.mode == 'rw':
      mode = self.messages.AttachedDisk.ModeValueValuesEnum.READ_WRITE
    else:
      mode = self.messages.AttachedDisk.ModeValueValuesEnum.READ_ONLY

    allow_rsa_encrypted = self.ReleaseTrack() in [base.ReleaseTrack.ALPHA,
                                                  base.ReleaseTrack.BETA]
    csek_keys = csek_utils.CsekKeyStore.FromArgs(args, allow_rsa_encrypted)
    disk_key_or_none = csek_utils.MaybeLookupKeyMessage(csek_keys, disk_ref,
                                                        self.compute)

    request = self.messages.ComputeInstancesAttachDiskRequest(
        instance=instance_ref.Name(),
        project=self.project,
        attachedDisk=self.messages.AttachedDisk(
            deviceName=args.device_name,
            mode=mode,
            source=disk_ref.SelfLink(),
            type=self.messages.AttachedDisk.TypeValueValuesEnum.PERSISTENT,
            diskEncryptionKey=disk_key_or_none),
        zone=instance_ref.zone)

    if self.ReleaseTrack() == base.ReleaseTrack.ALPHA:
      request.forceAttach = args.force_attach

    return [request]


@base.ReleaseTracks(base.ReleaseTrack.ALPHA)
class AttachDiskAlpha(AttachDisk):
  """Attach a disk to an instance."""

  @staticmethod
  def Args(parser):
    instance_flags.AddDiskScopeFlag(parser)
    parser.add_argument(
        '--force-attach',
        default=False,
        action='store_true',
        hidden=True,
        help="""\
Attach the disk to the instance even if there is another instance currently
attached to it. The server will attempt to detach the disk cleanly from the
existing instance but will force attach to the new instance if that's not
possible and will continue to try to detach from the previous instance in the
background.""")
    _CommonArgs(parser)

  def ParseDiskRef(self, args, instance_ref):
    if args.disk_scope == 'regional':
      return instance_utils.ParseDiskResource(self.resources, args.disk,
                                              instance_ref.zone,
                                              compute_scopes.ScopeEnum.REGION)
    else:
      return super(AttachDiskAlpha, self).ParseDiskRef(args, instance_ref)


AttachDisk.detailed_help = DETAILED_HELP
AttachDiskAlpha.detailed_help = DETAILED_HELP
