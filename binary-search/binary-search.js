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

// const binarySearch = (array, target, midPt) => {
// 	if (!midPt) {
// 		midPt = Math.floor(array.length / 2);
// 	}
// 	console.log(midPt);

// 	if (array[midPt] === target) {
// 		console.log('true!', array[midPt])
// 		return true;
// 	}
// 	if (midPt === 1 || midPt === array.length - 1) {
// 		return false;
// 	}

// 	if (target < array[midPt]) {
// 		console.log('current val:', array[midPt])
// 		console.log('if target < midpt, idx is: ', Math.floor(midPt - midPt/2))
// 		return binarySearch(array, target, Math.floor(midPt/2))
// 	}

// 	if (target > array[midPt]) {
// 		console.log('current val:', array[midPt])
// 		console.log('if target > midpt, idx is: ', Math.floor(midPt + midPt/2))
// 		return binarySearch(array, target, midPt + Math.floor(midPt/2))
// 	}
// };

/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch
