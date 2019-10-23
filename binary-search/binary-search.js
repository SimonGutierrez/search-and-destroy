/* eslint-disable no-debugger */
'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	const midPt = Math.floor(array.length / 2);
	if (array[midPt] === target) {
		return true;
	}

	if (array.length === 1 || array.length === 0) {
		return false;
	}

	if (target < array[midPt]) {
		return binarySearch(array.splice(0, midPt), target)
	}

	if (target > array[midPt]) {

		return binarySearch(array.splice(midPt), target)
	}
};

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
