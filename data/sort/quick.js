

function sort(nums, left, right) {
    if (left < right) {
        let partitionIndex = partition(nums, left, right)
        sort(nums, left, partitionIndex - 1 < left ? left : partitionIndex - 1)
        sort(nums, partitionIndex + 1 > right ? right : partitionIndex + 1, right)
    }

    return nums
}

function partition(nums, left, right) {
    const pivot = right
    const pivotVal = nums[pivot]
    let startIndex = left
    for (let i = left; i < right; i++) {
        if (nums[i] < pivotVal) {
            swap(nums, i, startIndex)
            startIndex++
        }
    }
    swap(nums, startIndex, pivot)
    return startIndex
}

const swap = (arr, i, j) => {
    if (i === j) {
        return
    }
    const temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


const nums = [3, 8, 1, 9, 4, 10, 5]

console.log(sort(nums, 0, nums.length - 1));
