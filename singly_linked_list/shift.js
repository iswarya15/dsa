class Node {
   constructor(val) {
      this.val = val;
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

   shift() {
      if (!this.head) {
         return null;
      } else {
         let node = this.head;
         this.head = node.next;
         this.length--;
         if (this.length == 0) {
            this.head = null;
            this.tail = null;
         }
         return node;
      }
   }
}

var list = new SinglyLinkedList();
list.push('Hi');
list.push('You');
list.shift()