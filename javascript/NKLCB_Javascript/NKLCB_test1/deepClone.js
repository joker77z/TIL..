/*
    PseudoCode
    depth가 아무리 깊어도 재귀로 돌면서 복사한다.
    만약 객체가 아니면 그대로 복사하면 되고
    객체면 재귀돌면서 내부에 있는 값들까지 복사한다.
*/

const element = {
  type: 'h1',
  props: {
    className: 'app',
    children: [
      { type: 'li', props: { children: 'Hello' } },
      { type: 'li', props: { children: 'world' } }
    ]
  }
};

function deepClone(obj) {
  let cloneObject;
  // 객체가 아닐 때
  if (typeof obj !== 'object') {
    cloneObject = obj;
    return cloneObject;
  }
  // 객체인데 null 일 때
  if (typeof obj === 'object' && obj === null) {
    cloneObject = obj;
    return cloneObject;
  }
  // 객체인데 null이 아닐 때
  if (typeof obj === 'object' && obj !== null) {
    cloneObject = Array.isArray(obj) ? [] : {};
    for (const key in obj) {
      if (typeof obj === 'object') cloneObject[key] = deepClone(obj[key]);
      else cloneObject[key] = obj[key];
    }
  }

  return cloneObject;
}

export default deepClone;

console.log(deepClone(element));
