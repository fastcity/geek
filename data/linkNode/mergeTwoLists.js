function ListNode(val) {
    this.val = val;
    this.next = null;
}


// leetcode 21   合并两个有序数组
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
    if (!l1) {
        return l2
    }
    if (!l2) {
        return l1
    }
    let a = l1, b = l2
    let link
    if (a.val >= b.val) {
        link = new ListNode(b.val)
        b = b.next

    } else {
        link = new ListNode(a.val)
        a = a.next
    }

    let end = link
    while (a && b) {

        if (a.val > b.val) {
            end.next = new ListNode(b.val)
            b = b.next
        } else {
            end.next = new ListNode(a.val)
            a = a.next
        }
        end = end.next
    }

    if (a) {
        end.next = a
    } else {
        end.next = b
    }
    return link
};

const l1 = new ListNode(1)

l1.next = new ListNode(2)

l1.next.next = new ListNode(4)

const l2 = new ListNode(1)

l2.next = new ListNode(3)

l2.next.next = new ListNode(4)

mergeTwoLists(l1, l2)