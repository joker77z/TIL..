// 두 날짜 사이 일수 구하기
const diffDays = (date1, date2) => {
  const diff = date2.getTime() - date1.getTime();
  return Math.abs(diff / 24 / 60 / 60 / 1000);
};

console.log(diffDays(new Date('2021/01/01'), new Date('2021/12/31'))); // 364
console.log(diffDays(new Date('2021/12/31'), new Date('2021/01/01'))); // 364
