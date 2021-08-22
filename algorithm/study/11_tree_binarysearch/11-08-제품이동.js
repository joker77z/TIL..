/*
    문제
    N개의 섬.
    섬들은 다리로 연결.
    각 다리는 무게제한이 있다.

    넘어가는 무게면 다리 무너진다.

    엘리트 무역회사는 섬 중 2곳에 공장이 있다.
    항상 서로 제품 이동한다.

    섬의 개수 N과 각 섬을 연결하는 다리 정보가 주어지면
    한번의 이동으로 옮길 수 있는 제품 최대 무게를 구하라.

    
*/

function solution(n, edges, s, e) {
    let answer=0, lt=1, rt=0;
    //인접리스트 그래프부터 만들기.
    let graph = Array.from(Array(n+1), ()=>Array());
    for(let [a, b, c] of edges) {
        graph[a].push([b, c]);
        graph[b].push([a, c]);
        rt=Math.max(rt, c); // c중에 제일 큰값을 rt에 넣는다.
    }

    function BFS(w) {
        let ch = Array.from({length: n+1}, ()=>0);
        let queue=[];
        ch[s]=1;
        queue.push(s);
        //이렇게하고 뻗어나간다.
        while(queue.length) {
            let a = queue.shift();
            // a정점하고 연결된거 갈 수 있는거 찾는다.
            // a라는 행을 다 뒤진다. b, c 있을거니까
            // b에서 b가는데 가중치가 c다.
            for(let [b, c] of graph[a]) {
                //c라는 가중치가 내가 정한 트럭의 무게보다 크거나 같아야지 트럭이 지나갈 수 있다.
                if(c>=w && ch[b]===0) {
                    ch[b] = 1;
                    queue.push(b); // a에서 b정점으로 가니까.
                }
            }
        }
        return ch[e]; // 여기로 갔더라면 1로 되있을꺼고 못갔다라면 0그대로 있을꺼다. BFS가 참이면 답이 될꺼고 아니면 답이 안되니까.
    }


    // 이분 검색을 하면서 BFS호출.
    // mid가 제품의 무게.
    while(lt<=rt) {
        let mid=parseInt((lt+rt)/2);
        if(BFS(mid)) {
            answer = mid;
            lt = mid+1;
        }
        else {
            rt=mid-1
        }
    }
    return answer;
}

console.log(solution(5, [[1, 2, 5], [1, 3, 3], [1, 4, 2], [2, 4, 2], [3, 4, 4], [4, 5, 3]], 1, 5))