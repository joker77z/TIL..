const getFirstDayOfMonth = (year, month) => {
  const getDate = new Date(year, month);
  console.log(getDate);
  return getDate.getDay();
};

console.log(getFirstDayOfMonth(2021, 0)); // 5
