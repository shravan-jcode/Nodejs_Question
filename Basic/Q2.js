// Q2. Find the largest and second-largest elements in an array.


function findLargestAndSecondLargest(arr) {
    if (arr.length < 2) {
        return "Array must contain at least two elements";
    }

    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] < largest) {
            secondLargest = arr[i];
        }
    }

    if (secondLargest === -Infinity) {
        return "No second-largest distinct element";
    }

    return { largest, secondLargest };
}

console.log(findLargestAndSecondLargest([10, 5, 20, 8, 15]));
// { largest: 20, secondLargest: 15 }

console.log(findLargestAndSecondLargest([5, 5, 3]));
// { largest: 5, secondLargest: 3 }
