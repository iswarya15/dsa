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
}

var list = new SinglyLinkedList();
list.push('Hi');
list.push('You');
list.push(12);
list.push(38);
list.push(45);
list.get(3);