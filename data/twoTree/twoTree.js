

class twoTree {
    constructor(root) {
        if (root) {
            this.root = this.createnode(root)
        }
    }

    createnode(value) {
        return {
            left: null,
            data: value,
            right: null,
        }
    }


    //  遍历 如果比节点的大，并且右子节点为空就插入右边 ，小且左子节点为空插入左节点
    insert(value) {
        if (!this.root) {
            this.root = this.createnode(value)
            return
        }
        let current = this.root

        while (current) {

            if (current.data > value) {
                if (!current.left) {
                    current.left = this.createnode(value)
                    return
                }
                current = current.left
            } else {
                if (!current.right) {
                    current.right = this.createnode(value)
                    return
                }
                current = current.right
            }
        }


    }

    find(value) {
        let current = this.root

        while (current) {
            if (current.data > value) {
                current = current.left
            } else if (current.data < value) {
                current = current.right
            } else {
                return current
            }
        }

    }

    delete(value) {

        // 1. 如果删除的接节点没有子节点 ，把其父节点对应的指向置为null 即可

        let current = this.root
        let parnet = current
        while (current) {
            if (current.data > value) {
                parnet = current
                current = current.left
            } else if (current.data < value) {
                parnet = current
                current = current.right
            } else {
                // 找到了 待改进
                let childCount = 0
                let childNode = null
                if (current.left) {
                    childCount += 1
                    childNode = current.left
                }
                if (current.right) {
                    childCount += 1
                    childNode = current.right
                }

                if (childCount === 0) {     //1. 找到的节点没有子节点
                    if (parnet.left == current) {
                        parnet.left = null
                    } else {
                        parnet.right = null
                    }
                    return
                } else if (childCount == 1) {  //2. 找到的节点只有一个子节点
                    if (parnet.left == current) {
                        parnet.left = childNode
                    } else {
                        parnet.right = childNode
                    }
                    return
                } else {  //2. 找到的节点有俩个子节点
                    // https://blog.csdn.net/isea533/article/details/80345507 参考这篇文章
                    // 两个子节点，应把排序二叉树中序遍历后该节点的后一个节点补上了，就是该节点的右子节点下的最小节点
                    // 这个树变成排序数组后该数值后面的哪一个数到该节点

                    let currentTwo = current.right
                    let parnetTwo = current

                    while (currentTwo.left) {
                        parnetTwo = currentTwo
                        currentTwo = currentTwo.left
                    }
                    if (parnetTwo.left == currentTwo) {
                        parnetTwo.left = null
                    } else {
                        parnetTwo.right = null
                    }

                    current.data = currentTwo.data

                }
            }
        }


    }


    //  改进版
    deleteV1(value) {

        // 1. 如果删除的接节点没有子节点 ，把其父节点对应的指向置为null 即可
        let current = this.root
        let parnet = current
        while (current && current.data != value) {
            if (current.data > value) {
                parnet = current
                current = current.left
            } else {
                parnet = current
                current = current.right
            }
        }
        //没找到
        if (!current) {
            return
        }

        // 找到了 待改进
        let childCount = 0
        let childNode = null
        if (current.left) {
            childCount += 1
            childNode = current.left
        }
        if (current.right) {
            childCount += 1
            childNode = current.right
        }

        if (childCount === 0) {     //1. 找到的节点没有子节点

        } else if (childCount == 1) {  //2. 找到的节点只有一个子节点

        } else {  //2. 找到的节点有俩个子节点
            // https://blog.csdn.net/isea533/article/details/80345507 参考这篇文章
            // 两个子节点，应把排序二叉树中序遍历后该节点的后一个节点补上了，就是该节点的右子节点下的最小节点
            // 这个树变成排序数组后该数值后面的哪一个数到该节点

            let currentTwo = current.right
            let parnetTwo = current

            while (currentTwo.left) {
                parnetTwo = currentTwo
                currentTwo = currentTwo.left
            }

            current.data = currentTwo.data
            parnet = parnetTwo
            current = currentTwo
            childNode = null
        }

        if (parnet.left == current) {
            parnet.left = childNode
        } else {
            parnet.right = childNode
        }

    }


    //  改进版
    deleteV2(value) {

        // 1. 如果删除的接节点没有子节点 ，把其父节点对应的指向置为null 即可
        let current = this.root
        let parnet = current
        while (current && current.data != value) {
            if (current.data > value) {
                parnet = current
                current = current.left
            } else {
                parnet = current
                current = current.right
            }
        }
        //没找到
        if (!current) {
            return
        }


        if (current.left && current.right) {
            //2. 找到的节点有俩个子节点
            // https://blog.csdn.net/isea533/article/details/80345507 参考这篇文章
            // 两个子节点，应把排序二叉树中序遍历后该节点的后一个节点补上了，就是该节点的右子节点下的最小节点
            // 这个树变成排序数组后该数值后面的哪一个数到该节点

            let currentTwo = current.right
            let parnetTwo = current

            while (currentTwo.left) {
                parnetTwo = currentTwo
                currentTwo = currentTwo.left
            }

            current.data = currentTwo.data
            parnet = parnetTwo
            current = currentTwo
        }

        let childNode = null
        if (current.left) {
            childNode = current.left  //2. 找到的节点只有一个子节点
        } else if (current.right) {
            childNode = current.right  //2. 找到的节点只有一个子节点
        } else {
            childNode = null   //1. 找到的节点没有子节点
        }

        if (parnet.left == current) {
            parnet.left = childNode
        } else {
            parnet.right = childNode
        }

    }

    getRoot() {
        return this.root
    }


    // 中序遍历
    inprint() {
        this._inprint(this.getRoot())
    }

    // 中序遍历
    _inprint(root) {

        if (!root) {
            return
        }

        console.log(root.data);

        this._inprint(root.left)
        this._inprint(root.right)
    }

    // 前序遍历
    preprint(root) {

        if (!root) {
            return
        }
        this.preprint(root.left)
        console.log(root.data);
        this.preprint(root.right)
    }

    // 后续遍历
    backprint(root) {

        if (!root) {
            return
        }

        this.backprint(root.left)
        this.backprint(root.right)
        console.log(root.data);
    }
}


const tt = new twoTree()

tt.insert(10)
tt.insert(8)
tt.insert(13)
tt.insert(11)
tt.insert(12)
tt.insert(15)
tt.insert(16)
tt.insert(14)

console.log(tt.find(8));

tt.inprint()

tt.deleteV2(13)

console.log('-----------------delete 11');

tt.inprint()
