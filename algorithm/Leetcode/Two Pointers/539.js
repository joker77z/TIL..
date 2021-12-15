function solution(timePoints) {
  timePoints.sort();
  console.log(timePoints);
  let minPoints = timePoints.map(t => Number(t[0] + t[1]) * 60 + Number(t[3] + t[4]));
  console.log(minPoints);
  let min = Number.MAX_VALUE;
  for (let i = 1; i < minPoints.length; i++) {
    min = Math.min(minPoints[i] - minPoints[i - 1], min);
    if (min == 0) return min;
  }
  console.log(min);

  return Math.min(1440 - minPoints.pop() + minPoints[0], min);
}
function solution(timePoints) {
  let min = Number.MAX_SAFE_INTEGER;

  timePoints.sort();

  function getMinutes(hour) {
    return hour * 60;
  }

  let timeToMinutes = timePoints.map(time => {
    let [hour, minutes] = time.split(':');
    return getMinutes(hour) + Number(minutes);
  });
  console.log(timeToMinutes);

  for (let i = 1; i < timePoints.length; i++) {
    min = Math.min(timeToMinutes[i] - timeToMinutes[i - 1], min);
    if (min === 0) return min;
  }
  console.log(min);

  min = Math.min(min, 1440 + timeToMinutes[0] - timeToMinutes[timeToMinutes.length - 1]);

  return min;
}
// console.log(solution(['23:59', '00:00']));
// console.log(solution(['00:00', '23:59']));
// console.log(solution(['00:00', '23:59', '00:00']));
// console.log(solution(['00:00', '04:00', '22:00']));
console.log(solution(['05:31', '22:08', '00:35']));
// console.log(solution(['12:12', '00:13']));
