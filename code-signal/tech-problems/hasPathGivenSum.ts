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
function hasPathGivenSum(t: Tree<number>, s: number): boolean {

  if (!t) return false;


  function checkPath(tree: Tree<number>, sum: number) {

    const newSum = sum + tree.value;


    if (!tree.left && !tree.right && newSum === s) {
      return true;
    }

    let leftPath = false;
    if (tree.left) {
      leftPath = checkPath(tree.left, newSum);
    }

    let rightPath = false;
    if (tree.right) {
      rightPath = checkPath(tree.right, newSum);
    }

    return leftPath || rightPath

  }

  const sumPath = checkPath(t, 0);

  if (!sumPath) return false;
  return true;

}
