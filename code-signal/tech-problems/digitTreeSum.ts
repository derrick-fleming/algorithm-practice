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
function solution(t: Tree<number>): number {

  let output = 0;

  const arr = [];

  function treeTraversal(t: Tree<number>, total: string) {

    if (!t) return;

    total += t.value;



    if (!t.left && !t.right) {
      arr.push(total);
      return;
    }

    treeTraversal(t.left, total);
    treeTraversal(t.right, total);


    return;

  }

  treeTraversal(t.left, `${t.value}`);
  treeTraversal(t.right, `${t.value}`);

  if (arr.length < 1) return t.value;

  arr.forEach(number => output += +number);

  return output;



}
