function solution(string) {
    string = string.split(', ');
    let [stringA, stringB] = string;

    let stringAmap = new Map();
    for (let x of stringA) {
        stringAmap.set(x, stringAmap.get(x) + 1 || 1);
    }

    stringB = stringB.split('');
    for (let x of stringB) {
        if (!stringAmap.has(x) || stringAmap.get(x) === 0) {
            return "NO";
        }
        stringAmap.set(x, stringAmap.get(x) - 1);
    }

    return "YES"
}
// console.log(solution("AbaAeCe, baeeACA")); // YES
console.log(solution("abaCC, Caaab")); // NO