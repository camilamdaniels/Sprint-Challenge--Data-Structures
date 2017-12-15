// A special array class that can only store the number of items specified by the `limit` argument
class LimitedArray {
  constructor(limit) {
    // You should not be directly accessing this array from your hash table methods
    // Use the getter and setter methods included in this class to manipulate data in this class
    this.storage = [];
    this.limit = limit;
  }

  checkLimit(index) {
    if (typeof index !== 'number') throw new Error('The supplied index needs to be a number');
    if (this.limit <= index) {
      throw new Error('The supplied index lies out of the array\'s bounds');
    }
  }

  each(cb) {
    for (let i = 0; i < this.storage.length; i++) {
      cb(this.storage[i], i);
    }
  }
  // Use this getter function to fetch elements from this class
  get(index) {
    this.checkLimit(index);
    return this.storage[index];
  }

  get length() {
    return this.storage.length;
  }
  // Use this setter function to add elements to this class
  set(index, value) {
    this.checkLimit(index);
    this.storage[index] = value;
  }

  incrementLength() {
    this.storage.length++;
  }
}
/* eslint-disable no-bitwise, operator-assignment */
// This is hash function you'll be using to hash keys
// There's some bit-shifting magic going on here, but essentially, all it is doing is performing the modulo operator
// on the given `str` arg (the key) modded by the limit of the limited array
// This simply ensures that the hash function always returns an index that is within the boundaries of the limited array
const getIndexBelowMax = (str, max) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash;
    hash = Math.abs(hash);
  }
  return hash % max;
};

/* eslint-disable class-methods-use-this */
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    // Do not modify anything inside of the constructor
  }
  
  addToTail(key, value) {
    const newVal = {};
    newVal.value = [key, value];
    newVal.next = null;

    if (this.head === null && this.tail === null) {
      this.head = newVal;
      this.tail = newVal;
      this.head.next = this.tail;
      this.tail.next = null;
    } else if (this.head !== null && this.tail !== null) { 
      this.head.next = this.tail;
      this.head.next.next = newVal;
      this.tail = newVal;
      this.tail.next = null;
    }
    
  }
  
  removeHead() {
    const removed = this.head;
    if (this.head !== null) {
      this.head = this.head.next;
    } else if (this.head === null) {
      return null;
    }
    return removed.value;
  }
  
  contains(key) {
    let isFound = false;
    let checker = this.head;
    while (checker) {
      if (checker.value[0] === key) {
        isFound = true;
      }
      checker = checker.next;
    }
    return isFound;
  }

  retrieveValue(key) {
    let value;
    let checker = this.head;
    while (checker) {
      if (checker.value[0] === key) {
        value = checker.value[1];
      }
      checker = checker.next;
    }
    return value;
  }

  size() {
    let count;
    let checker = this.head;
    while (checker) {
      checker = checker.next;
      count++;
    }
    return count;
  }

}

const test = new LinkedList();

// test.addToTail(1);
// console.log(test.tail.value);
// test.addToTail(2);
// console.log(test.tail.value);

// test.addToTail(1);
// console.log(test.head.value);
// test.addToTail(2);
// console.log(test.head.value);

// test.addToTail(1);
// test.addToTail(2);
// test.addToTail('hello');
// test.addToTail(true);
// console.log(test.contains('hello'));
// console.log(test.contains('asdf'));

// test.addToTail(1);
// test.addToTail(2);
// console.log(test.head.value);
// test.removeHead();
// console.log(test.head.value);
// test.removeHead();
// console.log(test.head);

// test.addToTail(1);
// console.log(test.removeHead());


module.exports = {
  LinkedList,
  LimitedArray,
  getIndexBelowMax,
};
