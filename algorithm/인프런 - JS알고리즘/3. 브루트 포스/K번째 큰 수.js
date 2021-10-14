/*
    1~100사이 N장의 카드.
    같은 숫자 여러장 가능.

    3장을 뽑아서 각 카드에 적힌 수 합한 값 기록.
    K번째로 큰 수 출력.

    ex
    큰 수 부터 만들어진 수가 아래와 같을 때
    25 25 23 23 22 20 19 ...

    K가 3이면 3번째로 큰 수이니 22출력.

    Pseudo Code
    주어진 수들 3장씩 더한 값을 배열에 저장.
    set을 사용해서 중복값 제거.
    k번째 반환.

*/
function solution(nums, m) {
    // let arr = [];
    let tmp = new Set();
    for(let i=0; i<nums.length; i++) {
        for(let j=i+1; j<nums.length; j++) {
            for(k=j+1; k<nums.length; k++) {
                tmp.add(nums[i] + nums[j] + nums[k]);
            }
        }
    }
    // arr = [...tmp];
    // arr.sort((a, b) => b-a);
    let a = Array.from(tmp).sort((a, b) => b-a);
    answer = arr[m-1];
    return answer;
}



console.log(solution([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3)); // 143