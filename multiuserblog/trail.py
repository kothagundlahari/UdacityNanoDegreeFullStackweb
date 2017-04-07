
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
          
def valid_month(month):
    if month:
        cap_month = month.capitalize
        if cap_month in months:
            return cap_month


print valid_month("january") 
# => "January"    
# print valid_month("January") 
# => "January"
# print valid_month("foo")
# => None
# print valid_month("")
# => None