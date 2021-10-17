function solution(n1, n2) {
  let starting = (n1 + n2) % 24 ? (n1 + n2) % 24 : 0;
  let students = Array.from({ length: 24 }, (_, i) => i + 1);
  let studentsClass = Array.from({ length: 3 }, () => []);
  let divideClass = [];
  // init
  for (let i = 0; i < starting - 1; i++) {
    students.push(students.shift());
  }
  divideClass.push(students.shift());

  // 5번째마다 나누기 전 반에 넣기
  let cnt = 0;
  while (students.length > 0) {
    cnt++;
    if (cnt === 5) {
      divideClass.push(students.shift());
      cnt = 0;
    } else {
      students.push(students.shift());
    }
  }

  // 반 나누기
  while (divideClass.length > 0) {
    for (let i = 0; i < 3; i++) {
      studentsClass[i].push(divideClass.shift());
    }
  }
  studentsClass.map(room => room.sort((a, b) => a - b));

  // 출력
  for (let i = 0; i < 3; i++) {
    console.log(`${i + 1}반 : ${studentsClass[i].join(' ')}`);
  }
}
solution(7, 20);
