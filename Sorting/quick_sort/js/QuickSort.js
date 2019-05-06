function quickSort(array) {
  quickSort_range(array, 0, array.length - 1);
}

/**
 * quick sort helper in range(p -> r)
 * @param {array} array array to be sorted
 * @param {number} p start index
 * @param {number} r end index
 */
function quickSort_range(array, p, r) {
  if (p >= r) return;
  // get partition point
  const q = partition(array, p, r);
  quickSort_range(array, 0, q - 1);
  quickSort_range(array, q + 1, r);
}

/**
 * partition helper, returns the partition position
 * @param {array} array array to be sorted
 * @param {number} p start
 * @param {number} r end
 */
function partition(array, p, r) {
  const pivot = array[r];
  let i = p;
  for (let j = p; j < r; j++) {
    if (array[j] < pivot) {
      swap(array, j, i);
      i++;
    }
  }
  // put the pivot in the right position
  swap(array, i, r);
  return i;
}

function swap(array, p, r) {
  const temp = array[p];
  array[p] = array[r];
  array[r] = temp;
}

module.exports = quickSort;
