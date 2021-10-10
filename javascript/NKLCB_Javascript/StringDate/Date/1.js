const formatDate = date =>
  console.log(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`);

formatDate(new Date('2021/07/24'));
