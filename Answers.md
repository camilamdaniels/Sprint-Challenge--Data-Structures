Questions

1. What are the order of insertions/removals for the following data structures?
	~ Stack
		- The last element inserted into the Stack is the first element removed from the Stack.
	~ Queue
		- The first element inserted into the Queue is the first element removed from the Queue.
2. What is the retrieval time complexity for the following data structures?
	~ Linked List
		- Linear. The amount of time it takes to retrieve a value in the worst case is directly proportional to the length of the list.
	~ Hash Table
		- Constant. If we know the key associated wiht the value, we only have to perform one operation to retrieve it.
	~ Binary Search Trees
		- Logarithmic. After each iteration, the amount of data we have to traverse in order to locate our target value reduces by half. This relationship is best modeled by a logarithmic function.
3. What are some advantages to using a Hash Table over an array in JavaScript? 
	~ The retrieval time complexity for Hash Tables is constant, while it is linear for an array. This makes it much faster to search for data in a Hash Table than in an array.