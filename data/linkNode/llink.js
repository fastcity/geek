
function Node(element) {
    this.element = element;
    this.prev = null;
    this.next = null;
}

class llink {

    constructor() {
        this.head = new Node('head');
        // this.find = find;
        // this.insert = insert;
        // this.display = display;
        // this.remove = remove;
        // this.findLast = findLast;
        // this.dispReverse = dispReverse;
    }

    find(item) {
        var current = this.head;
        while (current.element != item) {
            current = current.next
        }
        return current;
    }
    //双向链表的插入与单向链表类似，但需设置新节点的prev属性，使其指向该节点的前驱。
    insert(item, element) {
        var current = this.find(item);
        var node = new Node(element);

        node.prev = current;
        node.next = current.next;
        current.next = node;
    }

    //双向链表的插入与单向链表类似，但需设置新节点的prev属性，使其指向该节点的前驱。
    insertEnd(element) {
        var current = this.findLast();
        var node = new Node(element);

        node.prev = current;
        node.next = current.next;
        current.next = node;
    }

    // 双向链表的删除比单向链表效率更高，因为不需要再查找前驱节点。
    // 首先需要在链表中找出存储带删除数据的节点，然后设置该节点前驱的next属性，使其指向待删除节点的后继。
    // 设置该节点后继的previous属性，使其指向待删除节点的前驱。
    remove(item) {
        var current = this.find(item);
        if (!(current.next == null)) {
            current.prev.next = current.next;
            current.next.prev = current.prev;
            current.next = null;
            current.prev = null;
        }
    }
    // 查找最后的节点，同时避免从前往后遍历链表。
    findLast() {
        var current = this.head;
        if (!current) {
            return null
        }
        while (!(current.next == null)) {
            current = current.next;
        }
        return current;
    }
    // 以反序显示链表中元素
    dispReverse() {
        var current = this.head;
        current = this.findLast();
        while (!(current.prev == null)) {
            console.log(current.element);
            current = current.prev;
        }
    }

    display() {
        var current = this.head;
        while (!(current.next == null)) {
            console.log(current.next.element)
            current = current.next;
        }

    }
    print() {
        console.log(this.head)
    }
}

const l = new llink()

l.insertEnd(0)
l.insertEnd(1)

l.print()