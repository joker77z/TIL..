/**
 * 1시간 동안 3번이상 키카드 찍으면 경고보낸다.
 * 경고 받은 사람들 리스트 제공.
 *
 * ! 정답 : daniel
 */

function solution(keyName, keyTime) {
  const log = [];
  const ans = new Set();

  function getTime(time) {
    let [hours, minutes] = time.split(':');
    return hours * 60 + Number(minutes);
  }

  for (let i = 0; i < keyName.length; i++) {
    // let name = keyName[i];
    // let time = keyTime[i];
    // log.push({ name, time });
    log.push([keyName[i], getTime(keyTime[i])]);
  }
  log.sort((a, b) => a[0].localeCompare(b[0]) || a[1] - b[1]);
  console.log(log);
  for (let i = 2; i < keyName.length; i++) {
    let diff = log[i][1] - log[i - 2][1];
    console.log('diff: ', diff);

    if (diff > 0 && diff <= 60 && log[i][0] === log[i - 2][0]) {
      ans.add(log[i][0]);
    }
  }
  return [...ans];
}

// console.log(
//   solution(
//     ['daniel', 'daniel', 'daniel', 'luis', 'luis', 'luis', 'luis'],
//     ['10:00', '10:40', '11:00', '09:00', '11:00', '13:00', '15:00']
//   )
// );

// console.log(solution(['john', 'john', 'john'], ['23:58', '23:59', '00:01']));

// console.log(
//   solution(
//     ['leslie', 'leslie', 'leslie', 'clare', 'clare', 'clare', 'clare'],
//     ['13:00', '13:20', '14:00', '18:00', '18:51', '19:30', '19:49']
//   )
// );
