const getLastDayOfMonth = (year, month) => {
  const getDate = new Date(year, month + 1, 0);
  console.log(getDate.getDay());
};

getLastDayOfMonth(2021, 0); // 0
getLastDayOfMonth(2021, 11); // 5
