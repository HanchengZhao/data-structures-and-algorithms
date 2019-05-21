package binarysearch
// Binary Search takes a sorted array and the value to be found
// It separates the array into half to locate the divition that the value is in
func binarySearch(arr []int, value int) (position int) {
	low := 0
	high := len(arr) - 1

	for low <= high {
		mid := low + (high - low) / 2
		if arr[mid] == value {
			return mid
		}
		if arr[mid] < value {
			low = mid + 1
		} else {
			high = mid - 1
		}
	}
	// doesn't exist
	return -1
}


func binarySearchRecursion(arr []int, value int) (position int) {
	return helper(arr, 0, len(arr) - 1, value)
}

func helper(arr []int, start int, end int, value int) (position int) {
	if start > end {
		return -1
	}
	mid := start + (end - start) / 2
	if arr[mid] == value {
		return mid
	}
	if arr[mid] < value {
		return helper(arr, mid + 1, end, value)
	} else {
		return helper(arr, start, mid - 1, value)
	}
}