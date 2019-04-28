/**
 * https://en.wikipedia.org/wiki/Bubble_sort
 * @param arr array of integers
 * Bubble sort compares adjacent elements, and eventually
 * swaps the elements in the right position
 * Worst Time complexity: O(n^2)
 * Space complexity: O(1)
 */

function BubbleSort(arr) {
  if (arr.length <= 1) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    // use a flag to determine if the array is sorted to avoid unnecessary loop
    let swapped = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (!swapped) break;
  }
}

module.exports = BubbleSort;
