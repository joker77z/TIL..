const arr = ['apple', 'banana'];

// 특정 요소 제거하는 함수
function remove(arr, item) {
  const removeIndex = arr.indexOf(item);
  if (removeIndex !== -1) arr.splice(removeIndex, 1);
  // include로도 한번 스스로 짜봤다. 다 섞어 쓰니까 좀 더 보기불편한것 같기도 하다.
  // if (arr.includes(item)) arr.splice(arr.indexOf(item), 1);
}
remove(arr, 'banana');

console.log(arr);
