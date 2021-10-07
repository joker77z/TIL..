const getLastDayOfMonth = (year, month) => {
  const getDate = new Date(year, month + 1, 0);
  console.log(getDate);
  return getDate.getDay();
};

console.log(getLastDayOfMonth(2021, 0)); // 0
console.log(getLastDayOfMonth(2021, 11)); // 5
