/**
 * merge sort uses divide and conquer method
 * @param array array of numbers
 */
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }
  const mid = Math.floor((0 + array.length) / 2);
  const left = array.slice(0, mid);
  const right = array.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
/**
 * merge the array back
 * @param left left array
 * @param right right array
 */
function merge(left, right) {
  let i = 0;
  let j = 0;
  let res = [];
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      res.push(left[i]);
      i++;
    } else {
      res.push(right[j]);
      j++;
    }
  }
  return res.concat(left.slice(i)).concat(right.slice(j));
}

module.exports = mergeSort;
