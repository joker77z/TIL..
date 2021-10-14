/*
    풀이
    isUnique 함수를 만들어서 두 함수를 비교하는데 Unique면 true를 내보내는 식으로.
*/

function solution(words) {
    let answer = 0;
    // 우선 배열에 있는 것들을 오름차순 정렬한다.
    words.sort((a, b) => {
        return a.length - b.length;
    })
    
    
    for(let i=0; i<words.length-1; i++) {
        for(let j= i+1; j<words.length; j++) {
            if(isUnique(words[i], words[j])) {
               let tmp = words[i].length * words[j].length;
               answer = Math.max(answer, tmp)
            }
        }
    }

    function isUnique(a, b) {
        for(x of a) {
            if(b.includes(x)) { // 만약 b에 x원소를 가지고 있다면
                return false;
            }
        } // a에 있는 원소를 다 돌아봤는데도 겹치는게 안나왔다. 그러면 유니크하다.
        return true;
    }
    return answer;
}

console.log(solution(["skudy", "kstue", "time", "back", "good"]))