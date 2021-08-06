// Trie 자료구조.

class Node{
    constructor(){
        this.end = false;
        this.child = {};
        this.cnt = 0;
    }
}

class Trie{
    constructor() {
        this.root = new Node();
    }
    // insert
    insert(word) {
        let cur = this.root;
        for(let x of word) {
            if(cur.child[x] === undefined) { // 없다면
                cur.child[x] = new Node();
            }
            cur = cur.child[x];
            cur.cnt++; // child로 가고나서 (즉, 내려갈 때마다 cnt++ 된다.)
        }
        cur.end = true;
    }

    getCount(word) {
        // cnt가 1일 때 멈춘다.
        let cur = this.root; // 항상 시작점은 root.
        let count = 0;
        for(let x of word) {
            count++;
            cur=cur.child[x] // root에서 한개 증가시키고 자식으로 내려갔다.
            if(cur.cnt === 1) return count;
        }
        return count;
    }
}

function solution(words) {
    let answer = 0;
    const mT = new Trie();

    for(let word of words) {
        mT.insert(word);
    }
    for(let word of words) {
        answer += mT.getCount(word);
    }

    return answer;
}

console.log(solution(["go", "gone", "guild"])) // 7
