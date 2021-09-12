/*
    키가 작은 학생부터 일렬로 줄.(오름차순)
    일렬로 세운다음에 k+1번호와 자리 바꾸기.

    현수 반 번호, 짝꿍 번호 return
    120 125 152 130 135 135 143 127 160
    3, 8

    PseudoCode
    주어진 배열과 sort한 배열을 비교해서 다른 부분을 answer에 push하면 쉽게 풀 수 있다.
    집중력이 떨어졌는지 이 생각을 못했다.
*/

function solution(students) {
    let answer =[];
    let sortStudents = [...students].sort((a, b) => a-b);
    for(let i=0; i<students.length; i++) {
        if(students[i] !== sortStudents[i]) {
            answer.push(i+1);
        }
    }
    return answer.join(' ');
} 
console.log(solution([120, 125, 152, 130, 135, 135, 143, 127, 160]));