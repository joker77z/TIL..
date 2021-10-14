/*
    - 음악 제목, 재생이 시작되고 끝난 시각, 악보
    - 네오가 기억한 멜로디, 악보에 사용되는 음
    C, C#, D, D#, E, F, F#, G, G#, A, A#, B (12개)
    - 각 음은 1분에 1개씩 재생. 음악은 반드시 처음부터 재생. 음악보다 재생 시간이 길 때는 음악 끊김없이
    처음부터 반복재생. 음악 길이보다 재생시간 짧을 때는 처음부터 재생시간만큼 재생.
    - 조건이 일치하는 음악이 여러 개일 때에는 라디오에서 재생된 시간이 제일 긴 음악 제목을 반환한다. 재생된 시간도 같을 경우 먼저 입력된 음악 제목을 반환한다.
    - 일치하는 거 없으면 None

    - 각각 곡 정보는 [음악이 시작한 시각, 끝난 시각, 음악 제목, 악보 정보]
    - 조건과 일치하는 음악 제목 출력
*/

function solution(music, musicinfos) {
  let answer = '';
  let flag = false;
  // musicinfos를 하나씩 받으면서 music이 들어있나 확인한다.
  for (let i = 0; i < musicinfos.length; i++) {
    let musicinfo = musicinfos[i].split(',')[3];
    for (let i = 0; i < musicinfo.length; i++) {
      if (musicinfo[i] !== music[i]) {
        // flag = true;
        break;
      }
      //   if (flag) {
      answer = musicinfos[i].split(',')[2];
      // flag = false;
      //   }
    }
  }
  return answer;
}
console.log(solution('ABCDEFG', ['12:00,12:14,HELLO,CDEFGAB', '13:00,13:05,WORLD,ABCDEF'])); // HELLO
