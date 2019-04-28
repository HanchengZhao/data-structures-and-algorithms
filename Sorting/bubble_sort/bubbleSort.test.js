const BubbleSort = require("./bubbleSort");

test("should sort the array in ascending order", () => {
  let arr = [6, 5, 4, 3, 2, 1];
  BubbleSort(arr);
  expect(arr).toEqual([1, 2, 3, 4, 5, 6]);
});
