// POINT: 한쪽이 아무것도 안더한 sum으로 가기 때문에 sum > total/2로 하면 끝날수가 없었다.!!

// function solution(nums) {
//     let answer = "NO";
//     let total = nums.reduce((acc, v) => acc+v, 0);
//     let mid = total/2;
//     let n = nums.length;
//     function DFS(L, sum) {
//         if(sum>mid) {
//             return;
//         }
//         else {
//             DFS(L+1, sum + nums[L]);
//             DFS(L+1, sum);
//         }
//     }
//     let L = 0;
//     let sum = 0;
//     DFS(L, sum);
//     return answer;
// } 
// console.log(solution([1, 3, 5, 6, 7, 10]));

// function solution(arr){
//     let answer="NO", flag=0;
//     let total=arr.reduce((a, b)=>a+b, 0);
//     let n=arr.length;
//     function DFS(L, sum){
//         if(sum>total/2) return;
//         if((total-sum)===sum){
//             answer="YES";
//             return;
//         }
//         else{
//             DFS(L+1, sum+arr[L]);
//             DFS(L+1, sum);
//         }
//     }
//     DFS(0, 0);
//     return answer;
// }

// let arr=[1, 3, 5, 6, 7, 10];
// console.log(solution(arr));

