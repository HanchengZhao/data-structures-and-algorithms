const CountingSort = require("./CountingSort");

test("should sort the array in ascending order", () => {
  let arr = [6, 5, 4, 3, 2, 1];
  CountingSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
});

test("handles array with duplicate elements well", () => {
  let arr = [6, 5, 4, 3, 3, 3, 2, 2, 1];
  CountingSort(arr);
  expect(arr).toEqual([1, 2, 2, 3, 3, 3, 4, 5, 6]);
});

test("works correctly with only one element", () => {
  let arr = [1];
  CountingSort(arr);
  expect(arr).toEqual([1]);
});
