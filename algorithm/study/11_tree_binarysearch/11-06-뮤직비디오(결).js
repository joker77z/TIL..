/*
    얘랑 비스무리하다. 다.
    컨베이어 벨트 등.

    point: 얘 문제 코드 잘 알고있으면 결정알고리즘 왠만하면 다푼다.
*/

//일단 dvd한장을 지금 쓴다. 그래서 cnt =1
// function count(songs, capacity) {
//     let cnt=1, sum=0;
//     for(let x of songs) {
//         // 아직넣은 건아니고 더해보기만 한다.들어갈 수 있는지
//         // 현재 dvd에서 이번에 곡도 들어갈 수 있는지.
//         // 확인해보니 넘어가더라. 새로운 장이 필요하다.
//         if(sum+x > capacity) {
//             cnt++;
//             sum=x; // sum은 이 노래부터 시작한다.
//         }
//         else { // sum에다가 다 누적된다. 노래할 수 있따는거니까.
//             sum+=x;
//         }
//         return cnt; // 이게 필요한 장수다. 
//     }
// }
// function solution(songs, m) {
//     let answer;
//     let lt = Math.max(...songs);
//     let rt = songs.reduce((a, b)=>a+b, 0);
//     while(lt<=rt) {
//         let mid = parseInt((lt+rt)/2);
//         if(count(songs, mid)<=m) {
//             answer=mid;
//             rt=mid-1;
//         }
//         else {
//             lt=mid+1;
//         }
//     }
//     return answer;
// }

// console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3))



// 위에 답 이상하게 나옴.

function solution(nums,m){
    let answer;
    let lt=Math.max(...nums);
    let rt=nums.reduce((acc,curr)=>acc+=curr,0);

    function count(songs,capacity){
        let cnt=1;
        let sum=0;

        for(let x of songs){
            if(sum+x>capacity){
                cnt++;
                sum=x;
            }
            else sum+=x;
        }
        return cnt;
    }

    while(lt<=rt){
        let mid=parseInt((lt+rt)/2);

        if(count(nums, mid)<=m){
            answer=mid;
            rt=mid-1;
        } else lt=mid+1;
    }

    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9], 3));