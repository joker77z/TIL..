const getLastDateOfMonth = (year, month) => {
  const lastDate = new Date(year, month, 0);
  console.log(lastDate);
  return lastDate.getDate();
};
console.log(getLastDateOfMonth(2021, 0)); // 31
