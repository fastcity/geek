

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

lru.print()