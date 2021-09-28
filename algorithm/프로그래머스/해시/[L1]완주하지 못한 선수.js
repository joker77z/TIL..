/*
    마라톤 한명 제외 모두 완주.
    완주하지 못한 사람 return

    Pseudo Code
    참가자 map에 다 넣고
    완주자 하나씩 빼면서
    참가자 중에서 남은 거 출력
*/

function solution(participant, completion) {
    let answer = "";
    let partMap = new Map();
    // let sM = new Map();
    // for(let x of participant) {
    //     sM.set(x, sM.get(x)+1 || 1);
    // }

    for(let part of participant) {
        partMap.set(part, partMap.get(part)+1 || 1);
    }

    for(let comp of completion) {
        partMap.set(comp, partMap.get(comp)-1);
        if(partMap.get(comp) === 0) {
            partMap.delete(comp);
        }
    }
    for(let [key] of partMap) {
        answer = key;
    }
    return answer
}
console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"])); // leo
// console.log(solution([["mislav", "stanko", "mislav", "ana"]], [["stanko", "ana", "mislav"]])); // mislav






// try1
// function solution(part, comp) {
//     // 맵 선언
//     const sH = new Map();
    
//     for(let x of part) {
//         sH.set(x, sH.get(x)+1 || 1);
//     }
    
//     for(let x of comp) {
//         if(sH.has(x)) {
//             sH.set(x, sH.get(x)-1);
//         }
//     }
    
//     for(let [key, value] of sH) {
//         if(value>0) {
//             return key
//         }
//     }
// }