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

   get(index) {
      let curr = this.head;
      for (let i = 0; i < index; i++) {
         curr = curr.next;
      }
      return curr;
   }

   set(index, value) {
      let curr = this.get(index);
      //set is not insert just update the value in current index 
      if (curr) {
         curr.val = value;
      } else {
         return 'INDEX NOT VALID'
      }
      return this;
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

   remove(index) {
      if (index < 0 || index >= this.length) {
         return false;
      }
      // if(index == 0){
      //     this.shift()
      // }
      if (index == this.length - 1) {
         this.pop();
      } else {
         let prev = this.get(index - 1);
         let removedNode = prev.next;
         prev.next = removedNode.next;
         this.length--;
      }
      return true;

   }
}

var list = new SinglyLinkedList();
list.push('Hi');
list.push('You');
list.push(12);
list.push(38);
list.push(45);
