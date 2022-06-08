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
      let node = new Node(val);
      if (!this.head) {
         this.head = node;
         this.tail = node;
      } else {
         this.tail.next = node;
         this.tail = node;
      }
      this.length++;
   }

   traverse() {
      let current = this.head;
      while (current) {
         console.log(current.val);
         current = current.next;
      }
   }

   pop() {
      if (!this.head) {
         return undefined;
      } else {
         let prev = this.head;
         let curr = this.head.next;
         while (curr && curr.next) {
            prev = curr;
            curr = curr.next;
         }
         prev.next = null;
         this.tail = prev;
         this.length--;
         if (this.length == 0) {
            this.head = null;
            this.tail = null;
         }
         return curr;
      }
   }
}

var list = new SinglyLinkedList();
list.push('Hello');
list.push('Goodnight!');
list.push('Ahoy');
list.pop();