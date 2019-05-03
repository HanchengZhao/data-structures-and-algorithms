import unittest
from insertionSort import InsertionSort


class TestInsertionSort(unittest.TestCase):
    def test_insertionSort(self):
        array = [1, 4, 5, 3, 2]
        self.Isort = InsertionSort()
        new_arr = self.Isort.insertionSort(array)

        self.assertEqual(new_arr, [1, 2, 3, 4, 5])


if __name__ == "__main__":
    unittest.main()
