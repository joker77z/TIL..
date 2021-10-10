/*
    - 아이디 길이는 3자 ~ 15자 
    - 아이디는 소문자, 숫자, -, _, . 총 5가지만 사용 가능
    - 마침표는 처음과 끝에 사용 불가, 연속 사용 불가


    1. 소문자로 치환
    2. 소문자, 숫자, -, _, . 제외 모든 문자 제거
    3. .. 두번 이상 연속 부분 . 로 치환
    4. . 가 처음이나 끝에 위치하면 제거
    5. 빈 문자열이면 a를 대입
    6. 16자 이상이면 앞에부터 15개 문자 제외한 모든 문자제거
        만약 이 떄 .가 끝에 위치하면 끝에 위치한 . 제거
    7. 아이디 길이 2개 이하면 마지막 문자를 길이가 3개 될때까지 끝에 붙인다.
*/

// \. 임의의 문자

const recommandId = newId => {
    let result = newId.toLowerCase()
    .replace(/[^a-z0-9-_.]/g, '')
    // 점이 3개와 2개가 1개로 바뀐다.
    .replace(/\.{2,}/g, '.')
    // 처음과 끝에 위치한 .제거
    .replace(/^\.|\.$/g, '')
    // 빈 문자열이면 a를 대입
    .replace(/^$/g, 'a')
    // 0-15자만 출력
    .slice(0, 15)
    // 끝에 위치한 .제거
    .replace(/\.$/g, '');
    while(result.length<=2) {
        result += result[result.length-1];
    }
    return result;
}
console.log(recommandId('...!@BaT#*..y.abcdefghijklm'));
console.log(recommandId('"z-+.^."'));
console.log(recommandId(''));
console.log(recommandId('b'));
console.log(recommandId('abcdefghijklmn.p'));