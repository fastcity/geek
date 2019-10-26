
// 1. 栈

// 数组实现

class stackArrary {
    constructor(max = 10) {
        this.max = max
        this.count = 0
        this.arr = []
    }

    push(item) {
        if (this.max == this.count) {
            console.log('stack full');
            return
        }
        this.arr[this.count] = item

        this.count++
    }

    pop() {
        if (this.count == 0) {
            console.log('empty stack');
            return
        }
        this.count--

        const str = this.arr[this.count]
        this.arr[this.count] = 0

        return str
    }
}

// test 
const stack1 = new stackArrary()

stack1.push(1)
stack1.push(2)
stack1.push(3)

let pr = stack1.pop()
while (pr) {
    console.log(pr);
    pr = stack1.pop()
}

// 链表实现

class stackLink {
    constructor(max = 10) {
        this.max = max
        this.count = 0
        this.head = null
    }

    createNode(data) {
        return {
            data,
            next: null
        }
    }

    push(data) {
        if (this.count === this.max) {
            console.log('stack full');
            return
        }
        const node = this.createNode(data)

        node.next = this.head

        this.head = node
        this.count++

    }

    pop() {
        if (this.count === 0) {
            console.log('empty stack');
            return
        }

        const data = this.head.data

        this.head = this.head.next

        this.count--

        return data

    }
}


// test 

const stack2 = new stackLink()

stack2.push(1)
stack2.push(2)
stack2.push(3)

let pr2 = stack2.pop()
while (pr2) {
    console.log('stackLink', pr2);
    pr2 = stack2.pop()
}

// 简单运算 2+6*4 -1
// 思路 1. 两个栈 ，一个数字 一个 运算符    2. 遇到比自己低级的运算符压栈 ，比自己高级的，就出栈先运算一下，在压栈

function opNum(str) {

    const stack1 = []
    const stack2 = []

    const isHigth = (op1, op2) => {
        const higth = ['*', '/']
        const lower = ['+', "-"]

        if (higth.includes(op1) && lower.includes(op2)) {
            return true
        }

    }

    const yunsuan = {
        '+': (num1, num2) => Number(num1) + Number(num2),
        '-': (num1, num2) => Number(num1) - Number(num2),
        '*': (num1, num2) => Number(num1) * Number(num2),
        '/': (num1, num2) => Math.floor(num1 / num2),
    }

    const op = ['+', '-', '*', '/']

    for (const item of str) {
        if (op.includes(item)) {
            const pre = stack2[0]
            if (isHigth(pre, item)) {// 需要stack1 出栈运算
                const num1 = stack1.shift()
                const num2 = stack1.shift()
                stack2.shift()

                const res = yunsuan[pre](num1, num2)
                stack1.unshift(res)
                stack2.unshift(item)

            } else {
                stack2.unshift(item)
            }

        } else {
            stack1.unshift(item)
        }

    }



    let res
    while (stack1.length > 0) {
        const num1 = stack1.shift()
        const num2 = stack1.shift()
        const item = stack2.shift()

        res = yunsuan[item](num2, num1)

        if (stack1.length > 0) {
            stack1.unshift(res)
        }

    }



    return res

}


// test 

console.log('2+6*4-1', opNum('2+6*4-1'));



// 括号匹配 '{[()]}'


