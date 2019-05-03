class InsertionSort:
    def insertionSort(self, arr):
        if len(arr) <= 1:
            return arr
        for i in range(1, len(arr)):
            val = arr[i]
            j = i - 1
            while j >= 0:
                if arr[j] > val:
                    arr[j+1] = arr[j]
                else:
                    break
                j -= 1
            arr[j+1] = val
        return arr
