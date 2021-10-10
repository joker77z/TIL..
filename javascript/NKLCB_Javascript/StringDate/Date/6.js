const isEqualDate = (date1, date2) => console.log(date1.getTime() === date2.getTime() ? 'true' : 'false');

isEqualDate(new Date('2021/07/24'), new Date('2021/07/24')); // true
