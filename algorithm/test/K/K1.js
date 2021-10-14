/*
    한번만 사용한 문자를 찾고자 한다.
    한번만 사용한 문자 중 먼저 나타난 문자 인덱스를 리턴한다.
    인덱스는 1부터 시작하고, 사용한 문자가 없으면 -1을 리턴한다.

    PseudoCode
    Map을 사용해서 value가 0인 key를 answer배열에 더하자.
*/
function solution(string) {
    const answer = [];
    const stringMap = new Map();
    string = string.split('');

    string.forEach(character => stringMap.set(character, stringMap.get(character)+1 || 1));
    stringMap.forEach((value, key) => value===1 ? answer.push(key) : '');

    return answer;
}
console.log(solution('statistics'));
