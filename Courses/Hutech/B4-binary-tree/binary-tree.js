/**
 * Khái niệm: một cấu trúc dữ liệu quan trọng để biểu diễn và lưu trữ
 *            dữ liệu trong bộ nhớ và mang tính kế thừa
 * Tính chất:
 *  - Nút gốc không có nút cha
 *  - Mỗi nút khác chỉ có 1 nút cha
 *  - Mỗi nút có thể có nhiều nút con
 *  - Không có chu trình
 * 
 * Có 2 cách tổ chức cây nhị phân
 *  - Lưu trữ bằng mảng
 *  - Lưu trữ bằng con trỏ cấu trúc
 *  -> Sử dụng con trỏ cấu trúc DSLK tối ưu hơn
 */

class Node {
    constructor(key) {
        this.key = key;
        this.pLeft = null;
        this.pRight = null;
    }
}

class BinaryTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        if(this.root == null) {
            return 1;
        }
        return 0;
    }

    themNut(root, data) {
        if(root !== null) {
            if(data === root.key) {
                return 0;
            } else {
                if(data < root.key) {
                    this.themNut(root.pLeft, data);
                } else {
                    this.themNut(root.pRight, data)
                }
            }
        } else {
            root = new Node(data)
            if(root === null) {
                return -1;
            }
            return 1;
        }
    }

    insert(data) {
        let newNode = new Node(data);
        if(this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(node, newNode) {
        if(newNode.key < node.key) {
            if(node.pLeft === null) {
                node.pLeft = newNode;
            } else {
                this.insertNode(node.pLeft, newNode)
            }
        } else {
            if(node.pRight === null) {
                node.pRight = newNode;
            } else {
                this.insertNode(node.pRight, newNode);
            }
        }
    }
}

let cayNhiPhan = new BinaryTree();
// cayNhiPhan.themNut(cayNhiPhan.root, 7)
// cayNhiPhan.themNut(cayNhiPhan.root, 3)
// cayNhiPhan.themNut(cayNhiPhan.root, 36)
// cayNhiPhan.themNut(cayNhiPhan.root, 1)
cayNhiPhan.insert(7)
cayNhiPhan.insert(3)
cayNhiPhan.insert(36)
cayNhiPhan.insert(1)