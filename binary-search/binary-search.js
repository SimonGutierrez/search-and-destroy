'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	const midPt = Math.floor(array.length / 2);

	if (array[midPt] === target) {
		return true;
	}

	if (array.length === 0) {
		return false;
	}

	if (target < array[midPt]) {
		return binarySearch(array.slice(0, midPt))
	}

	if (target > array[midPt]) {
		return binarySearch(array.slice(midPt))
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
