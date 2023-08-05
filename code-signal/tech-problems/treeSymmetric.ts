//
// Binary trees are already defined with this interface:
// class Tree<T> {
//   value: T;
//   left: Tree<T>;
//   right: Tree<T>;
//
//   constructor(value: T) {
//     this.value = value;
//     this.left = null;
//     this.right = null;
//   }
// }
function isTreeSymmetric(t: Tree<number>): boolean {

  if (!t) return true;

  function mirrorCheck(left: Tree<number>, right: Tree<number>) {

    if (!left && !right) return true;
    if (!right || !left) return false;

    if (left.value === right.value && mirrorCheck(left.left, right.right) && mirrorCheck(left.right, right.left)) {
      return true;
    } else {
      return false;
    }

  }

  const treeMirror = mirrorCheck(t.left, t.right);

  return treeMirror;

}
