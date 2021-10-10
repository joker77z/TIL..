const getFirstDayOfMonth = (year, month) => {
  const getDate = new Date(year, month);
  console.log(getDate.getDay());
};

getFirstDayOfMonth(2021, 0); // 5
