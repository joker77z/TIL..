const formatDate = date => {
  const answer = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  return answer;
};

console.log(formatDate(new Date('2021/07/24')));
