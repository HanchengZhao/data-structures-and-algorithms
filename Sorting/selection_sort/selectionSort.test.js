const SelectionSort = require("./SelectionSort");

test("should sort the array in ascending order", () => {
  let arr = [6, 5, 4, 3, 2, 1];
  SelectionSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
});

test("handles array with duplicate elements well", () => {
  let arr = [6, 5, 4, 3, 3, 3, 2, 2, 1];
  SelectionSort(arr);
  expect(arr).toEqual([1, 2, 2, 3, 3, 3, 4, 5, 6]);
});
