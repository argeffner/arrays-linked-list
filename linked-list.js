/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
    this.tail.next = newNode;
    this.tail = newNode; 
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);

    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    // make sure to cover for empty array
    if (this.length === 0){
      this.tail = this.head;
    }

    this.length +=1;
  }

  /** pop(): return & remove last item. */

  pop() {
    return this.removeAt(this.length -1);
  }

  /** shift(): return & remove first item. */

  shift() {
    return this.removeAt(0)
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let i = this.head;
    let count = 0;

    if (idx < 0 || idx >= this.length) {
      throw new Error('choose a valid index')
    }

    while (i !== null && count != idx) {
      count += 1;
      i = i.next;
    }
    return i.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let i = this.head;
    let count = 0;

    if (idx < 0 || idx >= this.length) {
      throw new Error('choose a valid index')
    }
    while (i !== null && count != idx) {
      count += 1;
      i = i.next;
    }

    i.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let i = this.head;
    let count = 0;

    if (idx < 0 || idx >= this.length) {
      throw new Error('choose a valid index')
    }
    if (idx === 0) return this.unshift(val);
    if (idx === this.length) return this.push(val);
    // need to add node to previous idx
    idx = idx - 1
    while (i !== null && count != idx) {
      count += 1;
      i = i.next;
    }

    let newNode = new Node(val);
    newNode.next = i.next;
    i.next = newNode;
    // don't forget to increase array size
    this.length += 1;
  }



  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let i = this.head;
    let count = 0;

    if (idx < 0 || idx >= this.length) {
      throw new Error('choose a valid index')
    }

    // for removing the head (first item)
    if (idx === 0){
      let val = this.head.val;
      this.head = this.head.next;
      this.length -= 1;
      if (this.length < 2) {
        this.tail = this.head;
      }
      return val;
    }
    
    indx = idx - 1 //this way it won't affect idx
    while (i !== null && count != indx) {
      count += 1;
      i = i.next;
    }

    // removing the tail (last item)
    if (idx === this.length -1){
      let val = i.next.val;
      i.next = null;
      this.tail = i;
      this.length -= 1;
      return val;
    }

    // primary case
    let val = i.next.val;
    i.next = null;
    this.length -= 1;
    return val;
  }

  /** average(): return an average of all values in the list */

  average() {
    let i = this.head;
    let total = 0;

    // case of empty array
    if (this.length === 0) {
      return 0;
    }

    while (i < this.length) {
      total += i.val;
      i = i.next;
    }
    
    return total / this.length
  }
}

module.exports = LinkedList;
