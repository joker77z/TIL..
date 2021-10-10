const getLastDateOfMonth = (year, month) => {
  const lastDate = new Date(year, month, 0);
  console.log(lastDate.getDate());
};
getLastDateOfMonth(2021, 0); // 31
