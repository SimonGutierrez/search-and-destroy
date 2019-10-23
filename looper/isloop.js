'use strict';


// let nextTracker = {};
// //Complete this algo
// const isLoop = (linkedlist) => {

//     let currNode;

//     if (linkedlist.head) {
//         currNode = linkedlist.head;
//     } else {
//         currNode = linkedlist.next;
//     }
//     if (!currNode.next) {
//         return false;
//     }

//     let nextVal = currNode.next.value;

//     if (nextTracker[nextVal]) {
//        return true;
//     } else {
//         nextTracker[nextVal] = 1;
//     }

//     return isLoop(currNode);

// };


//Complete this algo
const isLoop = (linkedlist) => {
    let nextTracker = {};
    let firstNode = linkedlist.head;

    const helper = (node) => {
        let currNode = node.next;
        if (!currNode.next) {
            return false;
        }

        let nextVal = currNode.next.value;

        if (nextTracker[nextVal]) {
        return true;
        } else {
            nextTracker[nextVal] = 0;
        }

        return helper(currNode);

    }
    return helper(firstNode);
};


/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = isLoop
