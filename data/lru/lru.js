

// LRU 算法简单实现---------

// 数组 实现 思路： 找到之后放到最后一个，满了之后删除第一个
class LRU {
    constructor(maxlen) {
        this.maxlen = maxlen // 定义最大长度
        this.arr = []
    }

    push(num) {
        const index = this.arr.indexOf(num)

        if (index !== -1) {  // 找到了 把 这个元素放在最后一个，把其他的下标减一
            const first = this.arr.slice(0, index) // 左闭右开
            const sec = this.arr.slice(index + 1, this.arr.length)
            this.arr = first.concat(sec)
            this.arr.push(num)

        } else {
            if (this.arr.length >= this.maxlen) {
                this.arr.shift() // 到达上限长度, 删除第一个元素
            }
            this.arr.push(num)
        }
    }

    find(num) {
        const index = this.arr.indexOf(num)
        return index
    }
    print() {
        console.log(this.arr);
    }

}


const lru = new LRU(3)

lru.push(1)
lru.push(2)
lru.push(3)
lru.push(2)
lru.push(4)
lru.push(2)

// lru.print()




//  单链表实现   思路：新进来的插入到链表最后，到达上限删除第一个元素，匹配到元素之后，把该元素排到链表尾部
class linkNode {
    constructor(maxLen = 0) {
        this.head = null
        this.len = 0
        this.maxLen = maxLen
    }

    createNode(data) {
        return {
            data,
            next: null
        }
    }

    add(node) {
        if (this.maxLen === 0) {
            return
        }

        if (this.maxLen == 1) {
            this.head = node
            this.len = 1
            return
        }

        if (this.head == null) {
            this.head = node
            this.end = node
            this.len++
            return

        }

        const ex = this.findAndReSort(node)
        if (ex) {
            // 有且重排就推出
            return
        }

        if (this.len >= this.maxLen) {
            // 删除第一个
            this.head = this.head.next
            // return
        }

        let current = this.head
        while (current.next) {
            current = current.next
        }
        current.next = node

        this.len++
    }


    findAndReSort(node) {

        const { data } = node
        if (this.head.data === data) { // 判断第一个元素是不是该元素
            //放到最后
            this.head = this.head.next
            this.len--
            this.add(node)
            return true
        }

        let pre = this.head
        let current = this.head.next
        let temp


        if (!current) {
            return false
        }

        while (current.next) {
            if (current.data === data) {
                pre.next = current.next // 匹配到了该元素 ，该元素的前一个指针的next 直接指向 该元素的next 即可
                temp = true
            }
            pre = pre.next
            current = current.next
        }

        if (temp) { // 找了 
            current.next = node // 插入到最后一个
        } else if (current.data === data) {
            // 没找到 需要判断 current ，（刚好是最后一个匹配到了） 不用做什么操作
            return true
        }

        return temp
    }


    print() {

        console.log(this.len, "--", this.head);
    }
}

const link = new linkNode(3)

link.add(link.createNode(1))
link.add(link.createNode(2))
link.add(link.createNode(2))
link.add(link.createNode(4))
link.add(link.createNode(5))
link.add(link.createNode(5))
link.add(link.createNode(6))
// link.print()



// 改进版
class linkNode2 {
    constructor(maxLen = 0) {
        this.head = null
        this.end = null
        this.len = 0
        this.maxLen = maxLen
    }

    createNode(data) {
        return {
            data,
            next: null
        }
    }

    add(node) {
        if (this.maxLen === 0) {
            return
        }

        if (this.maxLen == 1) {
            this.head = node
            this.len = 1
            return
        }

        if (this.head == null) {
            this.head = node
            this.end = node
            this.len++
            return

        }

        const ex = this.findAndReSort(node)
        if (ex) {
            // 有且重排就推出
            if (ex !== 1) { // 1 代表最后一个匹配到了,不做操作
                this.end.next = node
                this.end = node
            }

            return
        }

        if (this.len >= this.maxLen) {
            // 删除第一个
            this.head = this.head.next
            // return
        }
        this.end.next = node
        this.end = node

        this.len++
    }


    findAndReSort(node) {

        const { data } = node
        if (this.head.data === data) { // 判断第一个元素是不是该元素
            //如果是第一个元素 ，直接把head 直接指向 head.next
            this.head = this.head.next
            return true
        }

        let pre = this.head
        let current = this.head.next

        if (!current) {
            return false
        }

        while (current.next) {
            if (current.data === data) {
                pre.next = current.next // 匹配到了该元素 ，该元素的前一个指针的next 直接指向 该元素的next 即可
                return true
            }
            pre = pre.next
            current = current.next
        }

        if (current.data === data) {
            // 没找到 需要判断 current ，（刚好是最后一个匹配到了） 不用做什么操作
            return 1
        }

    }

    print() {
        console.log(this.len, "--", this.head);
    }
}


const link2 = new linkNode2(3)

link2.add(link2.createNode(1))
link2.add(link2.createNode(2))
link2.add(link2.createNode(2))
link2.add(link2.createNode(2))
link2.add(link2.createNode(4))
link2.add(link2.createNode(5))
link2.add(link2.createNode(5))
link2.add(link2.createNode(6))

link2.print()
