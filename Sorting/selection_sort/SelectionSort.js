/**
 * Selection sort will select the minimum element
 * from the unsorted section and put it at the end of
 * the sorted section
 */

function SelectionSort(arr) {
  if (arr.length <= 1) {
    return;
  }
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    let temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
}

module.exports = SelectionSort;
