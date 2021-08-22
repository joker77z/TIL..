function solution(s, e) {
    let answer=0;
    function BFS() {
        let ch=Array.from({length:10001}, ()=>0); // 또 방문하지 않도록.
        let queue=[];
        queue.push(s); // 0레벨값에 5넣고
        ch[s]=1; // ch배열에 5짜리 넣고 방문했다고 1표시.
        let L=0; // 레벨변수 답이될꺼 0으로 초기화
        
        while(queue.length) { // 비어서 0이되면 멈춘다.
            let len = queue.length; 
            for(let i=0; i<len; i++){
                let x = queue.shift();
                for(let nx of [x-1, x+1, x+5]) {// nx = nextx
                    if(nx===e) return L+1; 
                    if(nx>0 && nx<=10000 && ch[nx]===0)
                    ch[nx] = 1;
                    queue.push(nx);
                }
            }
            L++; 
        }
    }
    answer = BFS();
    return answer;
}

console.log(solution(5, 14))
// i for문은 vl의 개수만큼 돌고.
// 레벨의 개수를 세고 개수만큼 시프트 하고 for문을 돌고나면 그 레벨애들 다 빠지고
// 다음레벨애들 다 들어온다.

// 순서
//queue.push(5) // 5가 들어오고
// 한개를 꺼내고 x가 5.
// 자식들 3개를 맨 아래 for문 queue에다가 바로 3개 다 집어넣는다.
// 그러고 for문이 끝난다.

// 그러면 queue에는 1레벨애들만 있게 된다.
// 그러고 다시 while문으로 올라가서 len을 구한다. 3이다.
// len이 그 다음레벨의 개수다. 시프트할 개수.
// i for문 돌고나면 1레벨애들 다 꺼내고 2레벨애들 다 꽉찬다.
// 그 밑에 for문i가 돌면서 1레벨 애들 다 꺼내고 2레벨애들 넣는다.

// while문 끝나면 1레벨에서 2레벨되면서 레벨++

// distance만들어서 쓸 때는 2차원배열에서 퍼져나가면서 최단거리 구해야할때는 쓴다.
// 이런거는 그냥 상태트리에서 끝나는건 레벨로 끝난다.

