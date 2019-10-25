//回文判断 12321

// 1. 字符串 如 "12321" 
//  1.1直接从倒叙拼接判断相等就行

function isPalindromeStr(str) {
    const len = str.length
    let strNew = ''
    for (let i = len - 1; i >= 0; i--) {
        strNew += str[i]
    }

    if (strNew === str) {
        return true
    }
    return false
}


// console.log(isPalindromeStr('12321'));


// 1. 数字 如 12321
//  1.1直接从倒叙拼接判断相等就行

function isPalindromeNum(num) {

    let numNew = 0, numOld = num, key = 1
    while (num / 10 > 0) {
        let i = num % 10
        numNew += i * key
        key = key * 10
        num = Math.floor(num / 10)
    }

    return numNew === numOld

}

console.log(isPalindromeNum(121));



