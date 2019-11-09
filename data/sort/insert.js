

// 插入排序 ,取一个数字，如果该数字比前面的大，就把大的数字依次后移1位，把当前数字插入到正确的位置

function sort(nums) {

    for (let i = 1; i < nums.length; i++) {

        let current = nums[i], offset = i - 1;

        while (offset >= 0) {
            if (nums[offset] > current) {
                nums[offset + 1] = nums[offset]
                offset--
            } else {
                break;
            }
        }
        nums[offset + 1] = current
    }
    return nums
}

console.log(sort([2, 5, 8, 3, 9, 4]));



function sort2(nums) {
    // 对于 1 3 2 , 从0-2 ，判断时从1-2
    for (let i = 0; i < nums.length - 1; i++) {
        let current = nums[i + 1], offset = i

        while (offset >= 0) { // 当前数据小，就前移
            if (nums[offset] > current) {
                nums[offset + 1] = nums[offset]
                offset--
            } else {
                break;
            }
        }
        nums[offset + 1] = current
    }
    return nums
}

console.log(sort2([2, 5, 8, 3, 9, 4]));
