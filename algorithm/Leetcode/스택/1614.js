/**
 *  ! 괄호 최대 중첩 깊이 구하기
 */

var rangeSumBST = function (root, L, R) {
  var sum = 0;
  if (root == null) {
    return sum;
  }

  if (root.val > L) {
    sum += rangeSumBST(root.left, L, R);
  }
  if (root.val <= R && root.val >= L) {
    sum += root.val;
  }
  if (root.val < R) {
    sum += rangeSumBST(root.right, L, R);
  }

  return sum;
};
console.log(rangeSumBST([10, 5, 15, 3, 7, null, 18], 7, 15));
