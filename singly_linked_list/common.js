// piece of data => val
// reference to next => next

class Node{
   constructor(val){
       this.val = val;
       // initially next is going to be null
       this.next = null;
   }
}

class SinglyLinkedList{
   constructor(){
       this.length = 0;
       this.head = null;
       this.tail = null;
   }
   push(val){
 
   }
}



// var first = new Node('Hi')
// first.next = new Node('there')
// first.next.next = new Node('How')
// first.next.next.next = new Node('are')
// first.next.next.next.next = new Node('you')