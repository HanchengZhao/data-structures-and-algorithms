/**
 * Counting sort is a linear time algorithm
 * @param {array} array an array containing non-negative integers
 */
function CountingSort(array) {
  const len = array.length;
  if (len <= 1) return;

  // get the max number
  let max = array[0];
  array.forEach(num => {
    if (num > max) {
      max = num;
    }
  });

  let count = new Array(max + 1);
  count.fill(0);
  array.forEach(num => {
    count[num]++;
  });
  // accumulate the count
  // the number on the index means the count of elements that is smaller than this index
  for (let i = 1; i < count.length; ++i) {
    count[i] = count[i - 1] + count[i];
  }
  let sorted = new Array(len);
  sorted.fill(0);

  for (let j = len - 1; j >= 0; --j) {
    const index = count[array[j]];
    sorted[index - 1] = array[j];
    count[array[j]]--;
  }
  // copy the sorted array back to the original array
  for (let i = 0; i < len; ++i) {
    array[i] = sorted[i];
  }
}

module.exports = CountingSort;
