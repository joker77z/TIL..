// 두 날짜 사이 일수 구하기
const diffDays = (date1, date2) => {
  const diff = date2.getTime() - date1.getTime();
  console.log(Math.abs(diff / 24 / 60 / 60 / 1000));
};

diffDays(new Date('2021/01/01'), new Date('2021/12/31')); // 364
diffDays(new Date('2021/12/31'), new Date('2021/01/01')); // 364
