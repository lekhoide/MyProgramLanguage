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

    NLR() {
        if(this.root === null){
            return -1;
        } else{
            this.printNLR(this.root)
        }
    }

    printNLR(node){
        if(node === null){
            return -1;
        }
        console.log(node.key);
        this.printNLR(node.pLeft);
        this.printNLR(node.pRight);
    }

    LNR() {
        if(this.root === null) {
            return -1;
        } else {
            this.printLNR(this.root)
        }
    }

    printLNR(node) {
        if(node === null) {
            return -1;
        }
        this.printLNR(node.pLeft);
        console.log(node.key);
        this.printLNR(node.pRight);
    }

    LRN() {
        if(this.root === null) {
            return -1;
        } else {
            this.printLRN(this.root)
        }
    }

    printLRN(node) {
        if(node === null) {
            return -1;
        }
        this.printLRN(node.pLeft);
        this.printLRN(node.pRight)
        console.log(node.key)
    }

    demNutLa() {
        if(this.root) {
            if(this.root.pLeft == null && this.root.pRight == null) return 1;
        } else {
            return this.demNutLa(this.root.pLeft) + this.demNutLa(this.root.pRight);
        }
    }
}

let cayNhiPhan = new BinaryTree();
cayNhiPhan.insert(7)
cayNhiPhan.insert(3)
cayNhiPhan.insert(36)
cayNhiPhan.insert(1)
cayNhiPhan.insert(6)
cayNhiPhan.insert(4)
cayNhiPhan.insert(15)
cayNhiPhan.insert(40)
// cayNhiPhan.NLR();
// cayNhiPhan.LNR();
// cayNhiPhan.LRN();
cayNhiPhan.demNutLa()