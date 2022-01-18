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

    /**
     * Node lá là node có bậc = 0
     * Kiểm tra node truyền vào undefined ==> node = this.root
     */
    demNutLa(node) {
        if(node === undefined) {
            node = this.root
            if(node) {
                if(node.pLeft === null && node.pRight === null) {
                    return 1;
                }
                else {
                    return this.demNutLa(node.pLeft) + this.demNutLa(node.pRight);
                }
            } else {
                return 0;
            }
        } else {
            if(node) {
                if(node.pLeft === null && node.pRight === null) {
                    return 1;
                }
                else {
                    return this.demNutLa(node.pLeft) + this.demNutLa(node.pRight);
                }
            } else {
                return 0;
            }
        }
    }

    demNut1Con(node) {
        if(node === undefined) {
            node = this.root;

            if(node) {
                let d = this.demNut1Con(node.pLeft) + this.demNut1Con(node.pRight);
                if((node.pLeft != null && node.pRight == null) || (node.pLeft==null && node.pRight != null)) {
                    return d+1;
                } else {
                    return d;
                }
            } else {
                return 0;
            }
        } else {
            if(node) {
                let d = this.demNut1Con(node.pLeft) + this.demNut1Con(node.pRight);
                if((node.pLeft != null && node.pRight == null) || (node.pLeft==null && node.pRight != null)) {
                    return d+1;
                } else {
                    return d;
                }
            } else {
                return 0;
            }
        }
    }

    doCaoCay(node) {
        if (node === undefined) {
            node = this.root

            if(node) {
                let t1 = this.doCaoCay(node.pLeft);
                let t2 = this.doCaoCay(node.pRight);
                return Math.max(t1, t2) + 1;
            } else {
                return 0;
            }
        } else {
            if(node) {
                let t1 = this.doCaoCay(node.pLeft);
                let t2 = this.doCaoCay(node.pRight);
                return Math.max(t1, t2) + 1;
            } else {
                return 0;
            }
        }
    }

    inMuck(node, k=2, m=0) {
        if(node === undefined) {
            node = this.root

            if(node) {
                if(m == k) {
                    console.log(node.key);
                    return;
                } else {
                    m++;
                    this.inMuck(node.pLeft,k,m)
                    this.inMuck(node.pRight,k,m)
                }
            }
        } else {
            if(node) {
                if(m == k) {
                    console.log(node.key);
                    return;
                } else {
                    m++;
                    this.inMuck(node.pLeft,k,m)
                    this.inMuck(node.pRight,k,m)
                }
            }
        }
    }

    demNut1ConPhai(node) {
        if(node === undefined) {
            node = this.root;
            if(node) {
                let d = this.demNut1ConPhai(node.pLeft) + this.demNut1ConPhai(node.pRight)
                if(node.pLeft == null && node.pRight != null) {
                    return d+1;
                } else {
                    return d
                }
            } else {
                return 0;
            }
        } else {
            if(node) {
                let d = this.demNut1ConPhai(node.pLeft) + this.demNut1ConPhai(node.pRight)
                if(node.pLeft == null && node.pRight != null) {
                    return d+1;
                } else {
                    return d
                }
            } else {
                return 0;
            }
        }
    }

    timKiem(node, x=36) {
        if(node === undefined) {
            node = this.root;

            if(node != null) {
                if(node.key == x) {
                    return node;
                }
                if(x < node.key) {
                    return this.timKiem(node.pLeft, x)
                } else {
                    return this.timKiem(node.pRight, x)
                }
            }
            return null;
        } else {
            if(node != null) {
                if(node.key == x) {
                    return node;
                }
                if(x < node.key) {
                    return this.timKiem(node.pLeft, x)
                } else {
                    return this.timKiem(node.pRight, x)
                }
            }
            return null;
        }
    }

    min(){
        let node = this. root
        while(node.pLeft != null) {
            node = node.pLeft
        }
        return node;
    }

    huyNut(node, x=1) {
        if(node === undefined) {
            node = this.root;

            if(node != null) {
                if(x < node.key) {
                    this.huyNut(node.pLeft)
                } else {
                    if(x > node.key) {
                        this.huyNut(node.pRight, x)
                    } else {
                        let newNode = node;
                        if(node.pLeft == null) {
                            node = node.pRight;
                        } else {
                            if(node.pRight == null) {
                                node = node.pLeft
                            } else {
                                this.timTheMang(newNode, node.pRight);
                            }
                        }
                        delete newNode.key;
                    }
                }
            }
        } else {
            if(node != null) {
                if(x < node.key) {
                    this.huyNut(node.pLeft)
                } else {
                    if(x > node.key) {
                        this.huyNut(node.pRight, x)
                    } else {
                        let newNode = node;
                        if(node.pLeft == null) {
                            node = node.pRight;
                        } else {
                            if(node.pRight == null) {
                                node = node.pLeft
                            } else {
                                this.timTheMang(newNode, node.pRight);
                            }
                        }
                        delete newNode.key;
                    }
                }
            }
        }
    }

    timTheMang(newNode, node) {
        if(node.pLeft) {
            this.timTheMang(newNode, node.pLeft);
        } else {
            newNode.key = node.key;
            newNode = node;
            node = node.pRight;
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
console.log(cayNhiPhan.demNutLa())
console.log(cayNhiPhan.demNut1Con())
console.log(cayNhiPhan.doCaoCay())
cayNhiPhan.inMuck()
console.log(cayNhiPhan.demNut1ConPhai())
console.log(cayNhiPhan.timKiem())
console.log(cayNhiPhan.min())
cayNhiPhan.huyNut()
cayNhiPhan.NLR()