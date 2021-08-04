// 카카오 출제가능성 높다. 문제 변형해서
// 코로나라 사람 거리띄우기로

// stables : 마굿간
function count(stables, dist) {
    let cnt=1, ep=stables[0]; //ep : endpoint 첫번째 말 넣어놓고 출발.
    for(let i=1; i<stables.length; i++) {
        //i번 좌표에 넣을 수 있는지.
        if(stables[i]-ep>=dist) {// 방금 전 마굿간에 말 넣은 좌표. ep
            cnt++;
            ep=stables[i] //endpoint 바꿔준다.
        }
    }
    return cnt; // 말의 마리수가 배치되는 것.
}
function solution(stables, c) {
    let answer;
    stables.sort((a, b) => a-b);
    let lt=1;
    let rt=stables[stables.length-1];
    while(lt<=rt) {
        let mid=parseInt((lt+rt)/2);
        if(count(stables, mid)>=c){
            answer=mid;
            lt=mid+1;
        }
        else rt=mid-1;
    }
    return answer;
}

console.log(solution([1, 2, 8, 4, 9], 3))