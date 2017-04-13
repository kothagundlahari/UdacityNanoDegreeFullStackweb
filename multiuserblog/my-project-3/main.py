
import webapp2
form = """
<form method="post">
What is your Birthday?
<br>
<label>Month
<input type="text" name="month">
</label>
<label>Date
<input type="text" name="day">
</label>
<label>Year
<input type="text" name="year">
</label>

<br>
<br>
  <input <input type="submit">
</form>
"""


class MainHandler(webapp2.RequestHandler):
    def valid_month(self,month):
        months = ['January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December']
        if month:
            cap_month = month.capitalize()
            if cap_month in months:
                return cap_month
    def valid_day(self,day):
        if day and day.isdigit():
            day = int(day)
        if day>0 and day <= 31:
            return day
    def valid_year(self,year):
        if year and year.isdigit():
            year = int(year)
            if year > 1990 and year < 2020:
                return year

    def get(self):
        self.response.write(form)

    def post(self):
        user_month = self.valid_month(self.request.get('month'))
        user_year = self.valid_year(self.request.get('year'))
        user_day = self.valid_day(self.request.get('day'))

        if not(user_month and user_day and user_year):
            self.response.out.write("Invalid")
        else:
            self.response.out.write("Thanks. This is a valid syntax")


app = webapp2.WSGIApplication([('/', MainHandler)], debug=True)
