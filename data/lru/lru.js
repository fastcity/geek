

// 数组 实现 思路： 找到之后放到最后一个，满了之后删除第一个
class LRU {
    constructor(len) {
        this.len = len
        this.arr = []
    }

    push(num) {
        const index = this.arr.indexOf(num)

        if (index !== -1) {
            // 找到了 把 这个元素放在最后一个，把其他的下标减一
            const first = this.arr.slice(0, index) // 左闭右开
            const sec = this.arr.slice(index + 1, this.arr.length)


            this.arr = first.concat(sec)
            this.arr.push(num)

        } else {
            if (this.arr.length >= this.len) {
                // [].shift()
                this.arr.shift()
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

        if (this.head == null) {
            this.head = node
            this.end = node
        } else {
            let current = this.head

            while (current.next) {
                current = current.next
            }
            current.next = node 

            // this.end.next = node
            // this.head.next = this.end
            // this.end = node
        }
        // this.head = current
        this.len++
    }

    delete(data) {

    }

    print() {
        console.log("--", this.head);

    }
}

const link = new linkNode()


link.add(link.createNode(1))

link.add(link.createNode(2))
link.add(link.createNode(3))
link.add(link.createNode(4))

link.print()