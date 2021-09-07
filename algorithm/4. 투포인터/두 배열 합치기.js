/*
    두 배열이 주어지면 두 배열을 오름차순으로 합쳐서 return.

    1, 3, 5
    2, 3, 6, 7, 9

    => 1, 2, 3, 3, 5, 6, 7, 9

    PseudoCode
    
*/

function solution(a, b) {
  tmp = a.concat(b);
  tmp.sort((a, b) => a - b);
  console.log(tmp);
}

// console.log(solution([1, 3, 5], [2, 3, 6, 7, 9]));



function solutionB(a, b) {
    let maxLength = Math.max(a.length, b.length);
    let answer = [];
    for(let i=0; i<maxLength; i++) {
      if(a[i] <= b[i]) {
        answer.push(a[i]);
        answer.push(b[i]);
      } else if (a[i] >= b[i]) {
        answer.push(b[i]);
        answer.push(a[i]);
      } else if(a[i] >0){
        answer.push(a[i])
      } else {
        answer.push(b[i])
      }
    }
    return answer;
}

// console.log(solutionB([1, 3, 5], [2, 3, 6, 7, 9]));



function solutionC(arr1, arr2) {
  let a1length = arr1.length;
  let a2length = arr2.length;
  let p1=p2=0;
  let ans = [];
  while(p1<a1length && p2<a2length) {
    if(arr1[p1] <= arr2[p2]) {
      ans.push(arr1[p1++]);
    } else {
      ans.push(arr2[p2++]);
    }
  }
  while(p1<a1length) {
    ans.push(arr1[p1++]);
  }
  while(p2<a2length) {
    ans.push(arr2[p2++]);
  }
  return ans;
}

console.log(solutionC([1, 3, 5], [2, 3, 6, 7, 9]));