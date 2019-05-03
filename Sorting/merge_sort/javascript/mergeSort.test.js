const mergeSort = require("./mergeSort");

test("should sort the array in ascending order", () => {
  let arr = [6, 5, 4, 3, 2, 1];
  let sorted = mergeSort(arr);
  expect(sorted).toEqual([1, 2, 3, 4, 5, 6]);
});
