// true로 초기화
let result = true;
function isEqual(obj1, obj2) {
  // 인수가 0개일 때
  if (arguments.length === 0)
    expect(() => isEqual()).toThrow(`isEqual requires at least 2 argument, but only 0 were passed`);

  // 인수가 1개일 때
  if (arguments.length === 1)
    expect(() => isEqual(0)).toThrow(
      `isEqual requires at least 2 argument, but only 1 were passed`
    );

  // 객체를 제외하고 비교
  result = Object.is(obj1, obj2);

  // 객체 일 때 비교
  if (obj1 && obj2 && typeof obj1 === 'object' && typeof obj2 === 'object') {
    // {}, {}면 같은 객체. Object생성자 함수를 동일하게 가리키고 있는지 constructor로 테스트
    if (obj1.constructor === Object && obj2.constructor === Object) result = true;
    // [], []면 같은 배열. Array생성자 함수를 동일하게 가리키고 있는지 마찬가지로 테스트
    if (obj1.constructor === Array && obj2.constructor === Array) result = true;
    if (obj1.constructor === Date && obj2.constructor === Date) result = true;

    // new Date() 비교
    if (obj1.constructor === Date) {
      result = obj1 === obj2;
    }

    // 키의 개수를 비교해서 만약 다르다면 false
    const object1Key = Object.keys(obj1);
    const object2Key = Object.keys(obj2);
    if (object1Key.length !== object2Key.length) result = false;

    // 키를 가지고 있는 객체 중첩 확인 시작
    if (obj1 && obj2 && object1Key.length > 0 && object2Key.length > 0) {
      // obj1에 있는 키 들을 하나씩 확인
      for (const key in obj1) {
        // obj1에 들어있는 key값이 object가 아니라면 일치연산자로 그 값 자체 비교
        if (typeof obj1[key] !== 'object') {
          if (obj1[key] !== obj2[key]) {
            result = false;
          }
          if (key in obj2 === false) {
            result = false;
          }
          // obj1에 들어있는 key를 가진 값이 object라면 다음 isEqual함수에 인수로 객체 자체를 전달
        } else if (typeof obj1[key] === 'object') {
          isEqual(obj1[key], obj2[key]);
        }
      }
    }
  }
  return result;
}
export default isEqual;
