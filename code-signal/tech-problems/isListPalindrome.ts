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
function isListPalindrome(l: ListNode<number>): boolean {

  let slowList = l;
  let fastList = l;

  while (fastList && fastList.next) {
    slowList = slowList.next;
    fastList = fastList.next.next;
  }

  let prev = null;
  let current = slowList;

  while (current) {
    const nextNode = current.next;
    current.next = prev;
    prev = current;
    current = nextNode;
  }

  while (prev) {
    if (prev.value !== l.value) {
      return false;
    }
    prev = prev.next;
    l = l.next;
  }

  return true;

}
