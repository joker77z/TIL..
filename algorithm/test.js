{
  function solution(codeOwnersMap, directory) {
    let dir = directory.split('/');
    let dirLength = dir.length;
    console.log(dirLength);

    // codeOwnersMap = codeOwnersMap[dir[0]]
    // console.log(codeOwnersMap[dir[1]]);

    for (let i = 0; i < dirLength; i++) {
      codeOwnersMap = codeOwnersMap[dir[i]];
      console.log(codeOwnersMap);
      if (i === dirLength - 1) {
        return codeOwnersMap;
      }
    }

    return answer;
  }

  const codeOwnersMap = {
    scripts: ['배수진'],
    services: {
      'business-ledger': ['고찬균', '배수진'],
      'toss-card': ['채주민', '유재섭'],
      payments: ['유재섭'],
    },
  };

  /* 예시 실행 결과 */
  // ['배수진']

  console.log(solution(codeOwnersMap, 'scripts'));

  // ['고찬균', '배수진']
  console.log(solution(codeOwnersMap, 'services/business-ledger'));

  // ['유재섭']
  // solution(codeOwnersMap, "services/payments");
}
