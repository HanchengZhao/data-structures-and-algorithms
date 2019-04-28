/**
 * @arr array of integers
 */
function InsertionSort(arr) {
  if (arr.length <= 1) {
    return;
  }
  for (let i = 1; i < arr.length; ++i) {
    let value = arr[i];
    let j = i - 1;
    for (; j >= 0; --j) {
      if (arr[j] > value) {
        // move the element one position behind
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = value;
  }
}

module.exports = InsertionSort;
