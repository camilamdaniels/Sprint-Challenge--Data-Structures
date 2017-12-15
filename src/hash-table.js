/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
const { LimitedArray, getIndexBelowMax, LinkedList } = require('./hash-table-helpers');
// If you take a look at the hash-table.js file you'll notice that it has solution code in it.
// You'll also notice that if you run the tests, they all pass.
// Your job is to refactor this hash table solution to use linked lists for buckets instead of arrays.
// You're welcome to add another class the the helper file, following the pattern used with LimitedArray.
class HashTable {
  constructor(limit = 8) {
    this.limit = limit;
    this.storage = new LimitedArray(this.limit);
    // Do not modify anything inside of the constructor
  }

  insert(key, value) {
    const newLL = new LinkedList();
    newLL.addToTail(key, value);

    if (!isNaN(key) && key < this.limit) {
      this.storage.set(key, newLL);
      this.storage.incrementLength();
    } else if (typeof this.storage.get(getIndexBelowMax(key, this.limit)) === 'LinkedList') {
      // const current = this.storage.get(getIndexBelowMax(key), this.limit);
      console.log('working1');
      console.log(this.storage.get(getIndexBelowMax(key, this.limit)).retrieveValue(key));
      this.storage.get(getIndexBelowMax(key), this.limit).addToTail(key, newLL);
      console.log(this.storage.get(getIndexBelowMax(key, this.limit)).retrieveValue(key));
      this.storage.incrementLength();
    } else {
      console.log('working2');
      // console.log(getIndexBelowMax(key, this.limit));
      this.storage.set(getIndexBelowMax(key, this.limit), newLL);
      this.storage.incrementLength();
    }
    if (this.storage.length >= (0.75 * this.limit)) {
      this.limit *= 2;
    }
  }
  // Removes the key, value pair from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Remove the key, value pair from the bucket
  remove(key) {
    this.storage.set(getIndexBelowMax(key, this.limit), undefined);
    if (this.storage.get(getIndexBelowMax(key, this.limit)) === undefined) {
      return undefined;
    }
  }
  // Fetches the value associated with the given key from the hash table
  // Fetch the bucket associated with the given key using the getIndexBelowMax function
  // Find the key, value pair inside the bucket and return the value
  retrieve(key) {
    if (!isNaN(key)) {
      return this.storage.get(key).retrieveValue(key);
    } 
    // console.log(this.storage.get(getIndexBelowMax(key, this.limit)).contains(key));
    if (this.storage.get(getIndexBelowMax(key, this.limit)) !== undefined && this.storage.get(getIndexBelowMax(key, this.limit)).contains(key)) {
      return this.storage.get(getIndexBelowMax(key, this.limit)).retrieveValue(key);
    } 
    return undefined;
    // if (this.storage.get(getIndexBelowMax(key, this.limit)) !== undefined) {
    //   return this.storage.get(getIndexBelowMax(key, this.limit)).value[1];  
    // }
  }
}

module.exports = HashTable;

const test = new HashTable();
// console.log(Object.getPrototypeOf(test).hasOwnProperty('insert'));
// console.log(Object.getPrototypeOf(test).hasOwnProperty('remove'));
// console.log(Object.getPrototypeOf(test).hasOwnProperty('retrieve'));

// console.log(test.storage);
// test.insert('hello', 'there');
// console.log(test.storage);
// console.log(test.retrieve('hello'));

// test.insert('Ben', 'Nelson');
// console.log(test.retrieve('Ben'));
// test.remove('Ben');
// console.log(test.retrieve('Ben'));

// console.log(test.retrieve('Sean'));
// console.log(test.remove('Sean'));

// test.insert(0, 'First Value');
// test.insert(1, 'Second Value');
// console.log(test.retrieve(0));
// console.log(test.retrieve(1));

// test.insert(0, 'First Value');
// test.insert(0, 'Second Value');
// console.log(test.retrieve(0));

test.insert('B', 'First Value');
test.insert('HI!', 'Second Value');
console.log(test.retrieve('B'));
console.log(test.retrieve('HI!'));

