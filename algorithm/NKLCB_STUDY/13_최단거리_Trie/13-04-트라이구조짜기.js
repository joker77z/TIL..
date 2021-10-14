// Trie 자료구조.

class Node{
    constructor(){
        this.end = false;
        this.child = {};
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
        }
        cur.end = true;
    }

    // search
    search(word) {
        let cur = this.root;
        for(let x of word) {
            if(cur.child[x] === undefined) {
                return false;
            }
            cur = cur.child[x];
        }
        return cur.end;
    }

    //접두어 prefixS
    prefixS(str) {
        let cur = this.root;
        for(let x of str) {
            if(cur.child[x] === undefined) return false;
            cur = cur.child[x];
        }
        return true;
    }
}

const trie = new Trie();

trie.insert('book');
trie.insert('bocd');

console.log(trie.search('book'))
console.log(trie.prefixS('b'))