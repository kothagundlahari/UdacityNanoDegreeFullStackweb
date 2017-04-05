
import webapp2

form = """
<form method="post">
What is your Birthday?
<label>Month
<input type="text" name="Month">
</label>
<label>Date
<input type="text" name="Date">
</label>
<label>Year
<input type="text" name="Year">
</label>

<br>
<br>
  <input <input type="submit">
</form>
"""


class MainHandler(webapp2.RequestHandler):

    def get(self):
       # self.response.headers['Content-Type'] = 'text/plain'
        self.response.write(form)
    def post(self):
         
        self.response.out.write("Thanks. This is a valid syntax")


app = webapp2.WSGIApplication([('/', MainHandler)], debug=True)
