/*
    로그인 화면.
    사용자가 어디에서 왔는지에 따라 다른 문구.
    어디서 왔는지 쿼리문자열로 주어짐.

    ?from=main : 메인화면에서 진입

    Q. 쿼리문자열을 객체로 파싱하는 함수 parseSearch를 작성해라.

    ex1
    in : ""
    out : {}

    ex2
    in : "?from=twitter"
    out : {"from": "twitter"}

    ex3
    in : ?range=1&range=8
    out : { "range": ["1", "8"]}
*/

function parseSearch(search) {
    /* 쿼리 문자열 `search`를 파싱하는 함수를 작성해주세요. */
    let obj = {};
    let answer = "";
    if(search[0] === '?') {
        search = search.slice(1, search.length).split('=');
        // obj[search[0]] = search[1]
        // console.log(obj)
        return `{"${search[0]}":"${search[1]}"}`
    }
    return {};
}

console.log(parseSearch("?from=twitter"))

/*
 * NOTE: 아래 코드는 코드 동작을 확인하기 위한 코드입니다. 수정하지 말아주세요.
 */
// function solution(search) {
//     var query = parseSearch(search);
//     return submit(query);
// }

// function submit(answer) {
//     return JSON.stringify(answer);
// }

