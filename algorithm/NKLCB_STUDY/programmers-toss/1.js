/*
    Q.
    코드 주인 정보를 바탕으로
    특정 디렉토리의 코드 주인 목록을 계산해라.

    입력
    첫번째 인자 : 전체 코드 주인 정보, 두번째 인자: 계산할 디렉토리

    - 첫번째 인자
    const codeOwnersMap = {
        "scripts": ["배수진"],
        "services": {
            "business-ledger": ["고찬균", "배수진"],
            "toss-card": ["채주민", "유재섭"],
            "payments": ["유재섭"],
    }
    >> 1이상 5이하 깊이의 객체 디렉토리 구조 다룬다.
    >> services는 코드 주인을 가지지 않는다.(하위 디렉토리를 가져서)
        > 하위 디렉토리를 가지지 않는 디렉토리만 코드 주인을 가진다.
    
    - 두번째 인자
    >> 폴더 구분자로 '/'를 사용하는 문자열로 주어짐
    >> 코드 주인이 존재하는 디렉토리만 가리킴.

    1. tmp = /로 나눈다.
    2. 
}
*/

function solution(codeOwnersMap, directory) {
    let tmp = directory.split('/');
    console.log(codeOwnersMap[tmp[0]])    
    
    
}
const codeOwnersMap = {
    "scripts": ["배수진"],
    "services": {
        "business-ledger": ["고찬균", "배수진"],
        "toss-card": ["채주민", "유재섭"],
        "payments": ["유재섭"],
    }
}
// console.log(solution(codeOwnersMap, 'scripts')); // ['배수진']
console.log(solution(codeOwnersMap, 'services/business-ledger')); // ['고찬균', '배수진']
// console.log(solution(codeOwnersMap, 'services/payments')); // ['유재섭']