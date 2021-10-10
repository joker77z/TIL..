const isPalindrome = string => {
  const temp = string.toLowerCase().replace(/[^a-z0-9]/g, '');
  console.log(temp === temp.split('').reverse().join(''));
};

isPalindrome('A man, a plan, a canal: Panama'); // true
isPalindrome('race a car'); // false
