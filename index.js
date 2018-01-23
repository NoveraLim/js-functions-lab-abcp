function happyHolidays(string) {
  return happyHolidays('Happy holidays!')
  expect (happyHolidays()).toEqual('Happy holidays!')
}
function happyHolidaysTo(string) {
  return happyHolidaysTo('`Happy holidays, ${name}!`')
  expect (happyHolidaysTo('Maria')).toEqual('Happy holidays, Maria!')
}
function happyHolidayTo(string) {
  return happyHolidayTo('`Happy ${holiday}, ${name}!`')
  expect(happyHolidayTo('Independence Day', 'Maria')).toEqual('Happy Independence Day, Maria!')
}
function holidayCountdown(string) {
  return holidayCountdown('`It\s ${days} days until ${holiday}!`')
  expect(holidayCountdown("Mother's Day", 20)).toEqual("It's 20 days until Mother's Day!")
}