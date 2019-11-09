

// 归并排序 
// 思路：把数组不停分成两份，直到一个，然后合并即可（合并类似于合并两个有序链表）
function sort(nums) {
    if (nums.length <= 1) {
        return nums// 只有一个数了，没必要继续了
    }
    const mid = Math.floor(nums.length / 2)
    const left = nums.slice(0, mid)
    const right = nums.slice(mid)
    return merge(sort(left), sort(right))

}


function merge(left, right) {

    let leftIndex = 0, rightIndex = 0, temp = []

    while (left.length > leftIndex && right.length > rightIndex) {
        if (left[leftIndex] <= right[rightIndex]) {
            temp.push(left[leftIndex])
            leftIndex++
        } else {
            temp.push(right[rightIndex])
            rightIndex++
        }
    }
    return temp.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
}



console.log(sort([3, 8, 1, 9, 4, 10]));
