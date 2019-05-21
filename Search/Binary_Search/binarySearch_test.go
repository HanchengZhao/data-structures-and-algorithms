package binarysearch

import "testing"

func TestBinarySearch(t *testing.T) {
	arr := []int{1,2,3,4,5,6,7,8}
	value := 5
	if binarySearch(arr, value) != 4 {
		t.Error("BinarySearch tests failed")
	}

	value2 := 10
	if binarySearch(arr, value2) != -1 {
		t.Error("BinarySearch should return -1 if no value found")
	}

	emptyArray := []int{}
	if binarySearch(emptyArray, value2) != -1 {
		t.Error("BinarySearch should return -1 if no value found")
	}

}

func TestBinarySearchRecursion(t *testing.T) {
	arr := []int{1,2,3,4,5,6,7,8}
	value := 5
	if binarySearchRecursion(arr, value) != 4 {
		t.Error("BinarySearch tests failed")
	}

	value2 := 10
	if binarySearchRecursion(arr, value2) != -1 {
		t.Error("BinarySearch should return -1 if no value found")
	}

	emptyArray := []int{}
	if binarySearchRecursion(emptyArray, value2) != -1 {
		t.Error("BinarySearch should return -1 if no value found")
	}

}