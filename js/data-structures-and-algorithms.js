//Frequency Counter

// TODO: Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency pattern OR the multiple pointers pattern.

//Example:
areThereDuplicates(1, 2, 3); // false
areThereDuplicates(1, 2, 2); // true
areThereDuplicates('a', 'b', 'c', 'a'); // true

function areThereDuplicates() {
    //1. Create a frequency counter (object).
    let frequencyCounter = {};

    // 2. Loop through the arguments.
    for(let i in arguments) {
        //     a. If that argument is in the object, add 1 to it.
        //     b. If it's not in the object, create it in the object.
        frequencyCounter[arguments[i]] = (frequencyCounter[arguments[i]] || 0) + 1;
    }

    // 3. Check the newly made argument by looping through it to see if there are duplicates.
    for(let keys in frequencyCounter) {
        //     a. If a keys value has more than 1 count, then there duplicates, return true
        if(frequencyCounter[keys] > 1) {
            return true;
        }
    }
    // 4. If we finish the loop without returning anything, then there are no duplicates. Return false
    return false;
}


function areThereDuplicatesV2() {
    // Ask: Can we turn our arguments into a sorted array?
    // Yes
    let arr = Array.from(arguments).sort();

    // 1. Create our first point of reference starting at 1.
    let j = 1;

    // 2. Loop through sorted array to create the second point of reference starting at the beginning of the array (0).
    for(let val in arr) {
        //     a. If an element is equal to the next element, return true.
        if(arr[i] === arr[j]) {
            return true;
        } else {
            //     b. If not, then continue adding to our points.

            j++;
        }
    }
    // 3. If by the end of our looping we haven't found a duplicate, then looks like there aren't any so return false.
    return false;
}


// Multiple Pointers

// TODO: Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Sample Input
averagePair([1,2,3], 2.5); // true
averagePair([1,3,3,5,6,7,10,12,19], 8); // true
averagePair([-1,0,3,4,5,6], 4.1); // false
averagePair([], 4); // false

function averagePair(arr, targetAvg) {
    let start = 0;
    let end = arr.length - 1;
    let currentAvg;

    if(arr.length === 0) {
        return false;
    }

    while(start < end) {
        currentAvg = (arr[start] + arr[end]) / 2;
        if(currentAvg === targetAvg) {
            return true;
        } else if(currentAvg > targetAvg) {
            end--;
        } else {
            start++;
        }
    }
    return false;
}