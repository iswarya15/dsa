class Node {
   constructor(val) {
      this.val = val;
      // inititally next is going to be null
      this.next = null;
   }
}

class SinglyLinkedList {
   constructor() {
      this.length = 0;
      this.head = null;
      this.tail = null;
   }
   push(val) {
      // take the last Item, point it to the new Item
      let node = new Node(val)
      if (!this.head) { //set head and tail to new node if list is empty
         this.head = node;
         this.tail = node;
      } else {
         this.tail.next = node
         this.tail = node;
      }
      this.length++;
   }
   print() {
      var arr = [];
      var current = this.head;
      while (current) {
         arr.push(current.val);
         current = current.next;
      }
      console.log(arr)

   }

   reverse() {
      var node = this.head;
      this.head = this.tail;
      this.tail = node;
      var next;
      var prev = null;
      for (let i = 0; i < this.length; i++) {
         next = node.next; // 2 3 4 5 null
         node.next = prev; // null 1 2 3 4
         prev = node;      // 1 2 3 4 5
         node = next       // 2 3 4 5 null
      }
   }
}
var list = new SinglyLinkedList();
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)