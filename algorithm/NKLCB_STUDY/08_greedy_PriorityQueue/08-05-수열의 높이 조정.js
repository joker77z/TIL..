// 맥스힙하고 상관없다.
// 큰값 떨구고 작은 값 올리는거면 이것도 분명 정렬인데 어떻게 짜야하나?

// 배열의 인덱스 가지고 가볍게 처리할 수 있는 방법이 있다.
// 이건 나중에 얘기한다.

function solution(nums, m){
    let answer=0;
    nums.sort((a, b)=>a-b);
    for(let i=0; i<m; i++){
        nums[0]++;
        nums[nums.length-1]--;
        nums.sort((a, b)=>a-b);
        if(nums[0]===nums[nums.length-1]) break;
    }
    answer=nums[nums.length-1]-nums[0];
    return answer;
}
console.log(solution([2, 1, 3, 7, 5], 2));



// 개선된 코드
function solution(nums, m){
    let answer=0;
    let ch=Array.from({length:1001}, ()=>0);
    let maxH=Number.MIN_SAFE_INTEGER;
    let minH=Number.MAX_SAFE_INTEGER;
    for(let x of nums){
        ch[x]+=1;
        if(x>maxH) maxH=x;
        if(x<minH) minH=x;
    }
    for(let i=1; i<=m; i++){
        if(maxH===minH) return 0;
        if(ch[maxH]===1){
            ch[maxH]--;
            maxH--;
            ch[maxH]++;
        }
        else{
            ch[maxH]--;
            ch[maxH-1]++;
        }
        if(ch[minH]===1){
            ch[minH]--;
            minH++;
            ch[minH]++;
        }
        else{
            ch[minH]--;
            ch[minH+1]++;
        }
    }
    answer=maxH-minH;
    return answer;
}
console.log(solution([2, 1, 3, 7, 5], 2));