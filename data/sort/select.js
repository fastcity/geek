function sort(nums) {
    if (!sort || sort.length < 1) {
        return
    }
    let min = 0, temp;
    for (let i = 0; i < nums.length; i++) {
        min = i
        for (let j = i; j < nums.length; j++) {
            if (nums[j] < nums[min]) {
                min = j
            }
        }

        temp = nums[i]
        nums[i] = nums[min]
        nums[min] = temp

    }
    return nums
}


console.log(sort([3, 9, 2, 5]));
