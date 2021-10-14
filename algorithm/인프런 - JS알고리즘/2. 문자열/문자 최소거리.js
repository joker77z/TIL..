/*
    두번째 파라미터로 주어진 변수와
    다른 문자들의 최소거리

    Pseudo Code
    try1 : fail
    가상의 배열을 하나 만든다. 이 배열은 0으로 초기화한다.
    for(x of str)
        e가 아니면 cnt++ 이후 해당 가상 배열에 cnt를 추가한다.
        e를 만나면 cnt=0 으로 초기화 한다.

    try2
    try1의 연장선으로 반대에서 출발하는 for문을 하나 더 만들어서
    해당 배열 요소에 Math.min을 사용해서 최소값이 들어갈 수 있게 한다.
    
    시간복잡도는 O(n)
*/
function solution(str, k) {
    let answer = [];
    let graph = Array.from({length:str.length}, () => 1001);
    let cnt = 0;
    for(let i=0; i<str.length; i++) {
        if(str[i] === k) {
            cnt = 0;
            graph[i] = cnt;
        } else {
            cnt++;
            graph[i] = cnt;
        }
    }
    cnt=0;
    for(let i=str.length-1; i>=0; i--) {
        if(str[i] === k) {
            cnt=0;
        } else {
            cnt++;
            graph[i] = Math.min(graph[i], cnt);
        }
    }
    answer = graph;
    return answer;
}

console.log(solution("teachermode", "e"));