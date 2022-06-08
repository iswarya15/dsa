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
         this.tail = node;
         this.head = node;
      } else {
         this.tail.next = node;
         this.tail = node;
      }
      this.length++;
   }
   pop() {
      if (!this.head) {
         return 'LIST EMPTY!!!'
      } else {
         let prev = this.head;
         let curr = this.head.next;
         // 1 2  3 4 5
         while (curr && curr.next) {
            prev = curr;
            curr = curr.next
         }
         prev.next = null;
         this.tail = prev;
         this.length--;
         if (this.length == 0) {
            this.head = null;
            this.tail = null;
         } else {
            return prev;
         }
      }
   }
   shift() {
      if (!this.head) {
         return null;
      } else {
         var node = this.head;
         this.head = this.head.next;
         this.length--;
         if (this.length == 0) {
            this.tail = null;
         }
      }
      return node;
   }
   unshift(val) {
      let node = new Node(val);
      if (!this.head) {
         this.head = node;
         this.tail = node;
      } else {
         node.next = this.head;
         this.head = node;
         this.length++;
      }
      return this;
   }
   get(index) {
      if (index < 0 || index >= this.length) {
         return null;
      }
      let curr = this.head;
      for (let i = 0; i < index; i++) {
         curr = curr.next;
      }
      return curr;
   }
   set(index, value) {
      let curr = this.get(index);
      if (curr) {
         curr.val = value;
      } else {
         return 'invalid index'
      }
   }
   insert(index, value) {
      if (index < 0 || index > this.length) {
         return false;
      }
      if (index == 0) {
         this.unshift(value);
      }
      else if (index == this.length) {
         this.push(value);
      } else {
         let node = new Node(value);
         let prev = this.get(index - 1);
         node.next = prev.next;
         prev.next = node;
         this.length++;
         return true;
      }
   }

   remove(index) {
      if (index < 0 || index >= this.length) {
         return false;
      }
      if (index == this.length - 1) {
         this.pop();
      } else {
         let prev = this.get(index - 1);
         let removedNode = prev.next;
         prev.next = removedNode.next;
         this.length--;
      }
      return this;
   }
   reverse() {
      let node = this.head;
      this.head = this.tail;
      this.tail = node;
      let prev = null;
      let next;
      for (let i = 0; i < this.length; i++) {
         next = node.next; //temp place to store next elem
         node.next = prev;
         prev = node;
         node = next;
      }
      return this
   }
}

var list = new SinglyLinkedList();
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)