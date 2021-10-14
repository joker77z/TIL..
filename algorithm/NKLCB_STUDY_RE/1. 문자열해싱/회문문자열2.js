/*
    문자 1개 지워서 회문 문자열되면 yes
    아니면 no

    //POINT: 배열을 비교할 때 join하고 비교해야 된다.
*/

function solution(strings) {
    let lt = 0;
    let rt = strings.length - 1;

    while (lt < rt) {
        if (strings[lt] !== strings[rt]) {
            let tmp = strings.slice().split('');
            console.log(tmp[lt])
            tmp.splice(lt, 1);
            console.log(tmp)
            if (tmp.join('') !== tmp.reverse().join('')) {
                return "NO"
            }
        }
        lt++;
        rt--;
    }
    return "YES";
}
console.log(solution("abcbdcba")); // YES
// console.log(solution("abcabbakcba")); // YES
// console.log(solution("abcacbakcba")); // YES