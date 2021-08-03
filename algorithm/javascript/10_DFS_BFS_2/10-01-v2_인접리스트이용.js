
// 얘는 속도가 더 빠르다.
// 학생이 만명있는데 1번과 2번이 친구면 2번과 3번도 친구다. 이런식으로 연결되있고
// 이런 문제.


// 09-01 파일로 확인해본다.

// graph(인접행렬)을 n+1로 잡아야 한다.
function solution(n, edges) {
    let answer=0;
    let graph=Array.from(Array(n+1), () => Array()); // 빈배열 n+1개 만든다. 여기다가 이제 push하면 된다.
    let ch=Array.from({length:n+1}, ()=>0); // 체크배열은 있어야 된다.
    for(let [a, b] of edges) {
        graph[a].push(b); // push로 바꿔준다.
    }
    let path=[];

    function DFS(v){ // 인접리스트로 도는 걸 보자.
        if(v===n) {
            answer++;
            console.log(path);
        }
        else {
            // 다 지우고 다시 써보자.
            for(let nv of graph[v]) { // next 볼텍스 of v행에서 갈 수 있는 애들 (v에서 nv로)
                if(ch[nv]===0) {// 방문한적 없을 때만
                    ch[nv]=1;
                    path.push(nv); // 패스도 한번 봐보자.
                    DFS(nv); // 가는데가 정점이니 정점 찍어주자.
                    ch[nv]=0;
                    path.pop();
                }
            }
        }
    }
    ch[1]=1; 
    path.push(1);
    DFS(1);
    return answer;
}

let arr =  [[1, 2], [1, 3], [1, 4], [2, 1], [2, 3], [2, 5], [3, 4], [4, 2], [4, 5]]

console.log(solution(5, arr))
// 6
