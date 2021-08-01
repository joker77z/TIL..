// maxheap의 변형버전.
// 08.01 comment : 주석은 변경하지 않음

class minHeap{
    constructor() {
        this.heap = []; // 빈배열만든다.
        this.heap.push(Number.MIN_SAFE_INTEGER) // 0번에 가장 큰 수를 넣어놓는다.
        // constructor는 이정도면 끝!
        // 설명 : maxheap을 호출하면 heap 객체가 만들어지고 maxheap에 아주 큰 숫자가 1개 들어가있다.
    }
    // MaxHeap 구조에 값 넣기
    insert(val) {
        this.heap.push(val); // 무조건 일단 끝에 추가하는거다.
        this.upheap(this.heap.length-1) // index번호가 pos(position)
    }

    // upHeap =====================================
    upheap(pos) { // insert로 부터 끝에 추가된 index번호를 pop에 넣는다.
        let tmp = this.heap[pos]; // pos에 있는 값을 tmp에 넣어둔다.
        // 올라간다.
        while(tmp < this.heap[parseInt(pos/2)]) {// tmp라는 값이 부모보다 크면 올라간다. 같으면 냅둔다. 같으면 똑같다. pos가 tmp였던 지점.
            this.heap[pos] = this.heap[parseInt(pos/2)]// 바로 부모에 있던 것이p os지점으로 내려온다.
            pos=parseInt(pos/2) // position(index)값을 2로 나눠서 부모 index로 바꿔준다.
            // 그리고 또 부모값이 push했던 tmp보다 큰지 다음 while문에서 확인한다.
        }
        this.heap[pos] = tmp;
    }

    // downHeap ==================================
    get() {
        // 계속비워지다가 0번은 엄청큰거있는거고 1번 하나 남아있다면?
        // 그다음 heap을 비워버려야 된다.
        if(this.heap.length===2) { // 2인게 자료하나 딸랑남은 상태.
            return this.heap.pop();
        }

        let res = this.heap[1]; // 있다가 res를 리턴하기 위해 초기화 해놓음. 일단 root를 꺼내버림.

        this.heap[1] = this.heap.pop();// 1번(root)에다가 맨 마지막 넣으라 그랬다. 맨 마지막은 없어지는 자료.
        this.downheap(1, this.heap.length-1);

        

        return res; // 아까 빼놨던 것을 얻어야되니까.        
    }
    downheap(pos, len){ // len이 마지막 자료가 있는 index. pos는 len/2까지 가야 된다. //pos는 마지막 자료의 부모까지 내려가야 한다.
        let tmp = this.heap[pos]// 루트에 있던 3을 저장해놓자.
        let child // 자식 index는 child
        while(pos<=parseInt(len/2)) { // len/2 = 마지막부모의 인덱스. 여기까지 pos가 내려간다.
            child=pos*2; // pos라는 부모의 child는 왼쪽 자식의 인덱스.
            if(child<len && this.heap[child]>this.heap[child+1]) child++; //child는 둘 중 큰 애를 가리키고 있다. len은 마지막 자료가 있는 인덱스. 이것보다 작아야 옆을 본다. 최소 1개는 child가 작아야 한다. 최소 마지막 자료 앞까지는 해야 한다. 왜냐면 자료1개라면 왼쪽을 바라보고 있는데 오른쪽에 없는 것을 바라보면 indexoutofrange가 다른언어에서는 뜬다.
            if(tmp<=this.heap[child]) break;// 이러면 while문 멈춘다. 이퀄은. 같으면 멈춰야 한다.
            // pos가 현재는 tmp 자리. 큰 child가 부모자리로 올라온다. tmp는 이제 자식으로 가야한다.
            this.heap[pos] = this.heap[child]
            pos = child;
        }
        this.heap[pos] = tmp;
    }

    size() {
        return this.heap.length-1; // 0번에다가 큰거 넣어놨으니까 그거 빼야된다.
    }
    show() { // 우리가 확인해봐야 되니까.
        // 0번 냅두고 1번부터다.
        for(let i=1; i<=this.size(); i++) {
            console.log(this.heap[i]);
        }
        return true; 
    }
}

function solution(nums) {
    let minH = new minHeap(); // 객체 생성.
    for(let x of nums) {
        minH.insert(x);
    }
    console.log(minH.get()) // 제일작은 2를 꺼낸다.
     
    minH.show();
}

console.log(solution([5, 4, 3, 6, 7, 2, 9])) // 2 5 3 6 7 4 9