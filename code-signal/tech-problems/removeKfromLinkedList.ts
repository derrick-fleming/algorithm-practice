// Singly-linked lists are already defined with this interface:
// class ListNode<T> {
//   value: T;
//   next: ListNode<T>;
//
//   constructor(value: T) {
//     this.value = value;
//     this.next = null;
//   }
// }
//

function removeKFromLinkList(l: ListNode<number>, k: number): ListNode<number> {

  if (!l) return null;

  while (l.value === k) {
    l = l.next;
    if (!l) {
      return null;
    }
  }

  let current = l;

  while (current.next !== null) {
    if (current.next.value === k) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return l;
}
