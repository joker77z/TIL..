const isEqualDate = (date1, date2) => (date1.getTime() === date2.getTime() ? 'true' : 'false');

console.log(isEqualDate(new Date('2021/07/24'), new Date('2021/07/24'))); // true
