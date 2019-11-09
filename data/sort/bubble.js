

//1. 冒泡排序是 两两比较交换，每一轮会比较出一个
// 参考：https://www.cxyxiaowu.com/5163.html
function sort(array) {
    const len = array.length
    let temp;
    for (let i = 0; i < len; i++) {

        // 每一轮排出一个有序的，每一轮都是从0开始比较，所以j<array.length-i,因为 arr[j]跟 arr[j+1]比较，所以 j<array.length-i-1
        for (let j = 0; j < len - i - 1; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j + 1]
                array[j + 1] = array[j]
                array[j] = temp
            }
        }
    }
    return array
}





console.log(sort([1, 9, 3, 8, 4, 7]));

// 对于 1, 9, 4, 5, 6, 7 这样的 （ 4, 5, 6, 7 ）都是有序的
function sort2(array) {
    const len = array.length
    let temp, lastChangeIndex = 0, jLen = len - 1;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < jLen; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j + 1]
                array[j + 1] = array[j]
                array[j] = temp
                lastChangeIndex = j // 无序的最后一个index
            }
        }

        jLen = lastChangeIndex
    }
    return array
}


console.log(sort2([1, 9, 4, 5, 6, 7]));


// 对于 5，8，6，3，9，2，1，7 ,最后几轮排序时，数组已经有序，无需继续排序
function sort3(array) {
    const len = array.length
    let temp, lastChangeIndex = 0, isSort = true, jLen = len - 1;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < jLen; j++) {
            if (array[j] > array[j + 1]) {
                temp = array[j + 1]
                array[j + 1] = array[j]
                array[j] = temp
                lastChangeIndex = j // 无序的最后一个index
                isSort = false
            }
        }
        if (isSort) {
            break;
        }
        jLen = lastChangeIndex
    }
    return array
}


console.log(sort3([5, 8, 6, 3, 9, 2, 1, 7]));
