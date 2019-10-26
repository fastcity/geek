



class linkNode {

    constructor() {
        this.head = null
        this.end = null
        this.len = 0
    }
    createNode(data) {
        return {
            data,
            next: null
        }
    }

    add(node) {
        if (this.head === null) {
            this.head = node
            this.end = node
            this.len++
            return
        }

        this.end.next = node
        this.end = node
        this.len++

    }

    // 反转
    reverse() {
        if (this.len <= 1) {
            return
        }

        let headTemp = this.createNode(this.head.data) // 创建一个头部
        this.end = headTemp //尾部指针修改

        let current = this.head.next

        while (current) {
            const { data } = current
            const node = this.createNode(data)
            node.next = headTemp
            headTemp = node
            current = current.next

        }

        this.head = headTemp

    }

    // 获取中间节点 。双指针 一个1 走 一个每次走2
    midNode() {

        if (!this.head.next || !this.head.next.next) {
            return this.head.data
        }

        let doubble = this.head.next.next
        let current = this.head


        while (doubble) {
            current = current.next
            doubble = doubble.next ? doubble.next.next : null
        }

        return current.data

    }


    // 删除倒数第n个  双指针 隔N ge
    deleteNode(n) {

        let start = this.head.next
        let pre = this.head

        let i = 0, end = this.head
        while (i <= n) {
            end = end.next
            i++
        }

        while (end) {
            pre = pre.next
            start = start.next
            end = end.next
        }

        pre.next = start.next
    }

    print() {
        if (this.head == null) {
            console.log("empty link");
            return
        }
        let str = this.head.data + '--->'

        let current = this.head.next

        while (current) {
            str += current.data + '--->'
            current = current.next
        }

        console.log(str);

    }
}


function createNode(data) {
    return {
        data,
        next: null
    }
}

function mergeLink(link1, link2) {

    if (!link1) {
        return link2
    }
    if (!link2) {
        return link1
    }

    let first, sec
    const link = new linkNode()

    if (link1.data >= link2.data) {
        first = link2.next
        sec = link1

        link.add(link.createNode(link2.data))

    } else {
        first = link1.next
        sec = link2

        link.add(link.createNode(link1.data))
    }

    while (first && sec) {

        if (first.data > sec.data) {
            link.add(link.createNode(sec.data))
            sec = sec.next
        } else {
            link.add(link.createNode(first.data))
            first = first.next
        }
    }

    if (first) {
        link.end.next = first

    } else {
        link.end.next = sec
    }

    return link
}

// 1. 构建
// const link = new linkNode()

// link.add(link.createNode(1))
// link.add(link.createNode(2))
// link.add(link.createNode(3))
// link.add(link.createNode(4))
// link.add(link.createNode(5))


// link.reverse()

// link.add(link.createNode(5))
// link.add(link.createNode(10))

// link.print()

// link.midNode()

// link.deleteNode(3)

// link.print()

// 单链表反转

// 链表中环的检测

// 两个有序的链表合并

const link1 = new linkNode()

link1.add(link1.createNode(1))
link1.add(link1.createNode(2))
link1.add(link1.createNode(6))
link1.add(link1.createNode(10))



const link2 = new linkNode()

link2.add(link2.createNode(5))
link2.add(link2.createNode(6))
link2.add(link2.createNode(7))

// link2.print()

mergeLink(link2.head, link1.head)

// 删除链表倒数第 n 个结点

// 求链表的中间结点





