// Count Items Matching a Rule
var countMatches = function (items, ruleKey, ruleValue) {
  console.log(items.length);
  let compare = {
    type: 0,
    color: 1,
    name: 2,
  };
  let answer = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i][compare[ruleKey]] === ruleValue) {
      answer++;
    }
  }
  return answer;
};

// console.log(
//   countMatches(
//     [
//       ['phone', 'blue', 'pixel'],
//       ['computer', 'silver', 'lenovo'],
//       ['phone', 'gold', 'iphone'],
//     ],
//     'color',
//     'silver'
//   )
// );
console.log(
  countMatches(
    [
      ['phone', 'blue', 'pixel'],
      ['computer', 'silver', 'phone'],
      ['phone', 'gold', 'iphone'],
    ],
    'type',
    'phone'
  )
);
