
// 希尔排序 改进版的插入排序
// 参考:https://www.cxyxiaowu.com/2026.html
function sort(nums) {
    let p = nums.length
    p = Math.floor(p / 2)
    while (p > 0) {
        for (let i = p; i < nums.length; i++) {
            let current = nums[i], offset = i - p

            while (offset >= 0) {
                if (nums[offset] > current) {
                    nums[offset + p] = nums[offset]
                    offset -= p
                } else {
                    break;
                }
            }
            nums[offset + p] = current
        }
        p = Math.floor(p / 2)
    }
    return nums
}


console.log(sort([2, 5, 8, 3, 9, 4]));



function sqrt(num) {

    let low = 0, high = num / 2 + 1
    let mid = (low + high) / 2
    while (Math.abs(mid * mid - num) > 0.001) {
        if (mid * mid < num) {
            low = mid
        } else {
            high = mid
        }
        mid = (low + high) / 2
    }
    return low

}

console.log(sqort(4));
