



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
        // let 

        if (!this.head.next || !this.head.next.next) {
            return this.head.data
        }

        let doubble = this.head.next.next
        let current = this.head


        while (doubble && doubble.next) {
            current = current.next
            doubble = doubble.next.next
        }

        console.log(current.data);

        return current.data

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

// 1. 构建
const link = new linkNode()

link.add(link.createNode(1))
link.add(link.createNode(2))
link.add(link.createNode(3))
link.add(link.createNode(4))
link.add(link.createNode(5))


link.reverse()

link.add(link.createNode(5))
link.add(link.createNode(10))

link.print()

link.midNode()

// 单链表反转

// 链表中环的检测

// 两个有序的链表合并

// 删除链表倒数第 n 个结点

// 求链表的中间结点