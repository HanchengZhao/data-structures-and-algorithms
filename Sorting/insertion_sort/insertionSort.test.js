const InsertionSort = require("./insertionSort");

test("should sort the array in ascending order", () => {
  let arr = [6, 5, 4, 3, 2, 1];
  InsertionSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
});
