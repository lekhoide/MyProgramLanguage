/**
 * Viết chương trình quản lý danh sách sinh viên (sử dụng DSLKĐ), thông tin mỗi sv gồm:​
 * Mã sv: chuỗi tối đa 10 kí tự​
 * Họ tên: chuỗi tối đa 40 kí tự​
 * Điểm trung bình: số thực​
 * Chương trình có các chức năng sau:​
    * Tạo 1 danh sách gồm n SV (n nhập từ bàn phím, thông tin của mỗi sv nhập từ bàn phím)​
    * Xuất danh sách sinh viên​
    * Xuất thông tin các sv có DTB>5​
    * Tìm sinh viên có tên là X
    * Thêm vào cuối danh sách​
    * Sắp xếp danh sách theo phương pháp Interchange Sort​
    * Xác định vị trí của node x trong danh sách​
    * Xác định kích thước của danh sách (số phần tử)​
    * Tìm nút có khóa X. Thêm một nút vào sau nút tìm được​
    * Chèn một phần tử có khoá x vào vị trí pos trong ds​
    * Xoá 1 phần tử có khoá là x​
    * Thêm phần tử x vào ds đã có thứ tự (tăng) sao cho sau khi thêm vẫn có thứ tự (tăng) (*)​
    * Xoá các phần tử trùng nhau trong danh sách, chỉ giữ lại duy nhất một phần tử (*)​
    * Trộn hai danh sách có thứ tự tăng thành một danh sách cũng có thứ tự tăng. (*)
 */

 class SinhVien{
    constructor(ma, ten, dtb){
        this.ma = ma;
        this.ten = ten;
        this.dtb = dtb;
        this.next = null;
    }
}

class QuanLySinhVien{
    constructor(){
        this.head = null;
        this.size = 0;
    }

    // Check List Null
    checkListNull(){
        return this.head == null;
    }
    // Check Node Null
    checkNodeNull(node){
        return node == null;
    }
    // Check Number is Float
    checkNumberIsFloat(key){
        return Number(key) === key && key % 1 !== 0;
    }
    // Size List
    sizeList(){
        return this.size;
    }
    // Create Node
    createNode(ma, ten, dtb){
        var newNode = new SinhVien(ma, ten, dtb);
        return newNode; 
    }
    // Read Node
    readNode(){
        var node = this.head;
        if(this.checkListNull()){
            console.log('List null');
        }
        this.sortNode();
        while(!this.checkNodeNull(node)){
            console.log(`${node.ma}. ${node.ten} - ${node.dtb}`);
            node = node.next;
        }
    }
    // Print Sinhvien has dtb > 5
    readGreaterThanFive(){
        var node = this.head;
        while(!this.checkNodeNull(node)){
            if(node.dtb > 5){
                console.log(`${node.ma}. ${node.ten} - ${node.dtb}`);
            }
            node = node.next;
        }
    }
    // Update Node
    updateNode(pos,ma){
        var node = this.head;
        var count = 1;
        while(!this.checkNodeNull(node)){
            if (typeof(ma) == 'string' && node.ten.toUpperCase() == ma.toUpperCase()) {
                return -1;
            } else if(typeof(ma) == 'number'){
                if(node.dtb == ma && ma <= 10 && this.checkNumberIsFloat(ma) == true){
                    return -1;
                } else if(pos == count){
                    node.ma = ma;
                }
            }
            node = node.next;
            count++;
        }
    }

    // Delete Node
    deleteNode(key){
        var node = this.head;
        while(!this.checkNodeNull(node)){
            if (typeof(key) == 'string' && node.ten.toUpperCase() == key.toUpperCase()) {
                return -1;
            } else if(typeof(key) == 'number'){
                if(node.dtb == key && key <= 10 && this.checkNumberIsFloat(key) == true){
                    return -1;
                } else if (node.next.ma == key) {
                    var q = node.next;
                    node.next = q.next;
                    return delete q.ma;
                }
            }
            node = node.next;
        }
        this.size--;
    }
    // Delete node duplicated as ma
    deleteNodeDuplicated(){
        var nodeA = this.head;
        while(!this.checkNodeNull(nodeA)){
            var nodeB = nodeA.next;
            while(!this.checkNodeNull(nodeB)){
                if(nodeA.ma == nodeB.ma){
                    nodeA.next = nodeB.next;
                    // nodeB = nodeA.next;
                    this.size--;
                }
                nodeB = nodeB.next;
            }
            nodeA = nodeA.next;
        }
    }

    // Insert Node
    insertNode(ma, ten, dtb){
        var node = this.createNode(ma, ten, dtb);
        if(this.checkListNull()){
            this.head = node;
        } else{
            node.next = this.head.next;
            this.head.next = node;
        }
        this.size++;
    }
    insertNodeFirst(ma, ten, dtb){
        var node = this.createNode(ma, ten, dtb);
        if(this.checkListNull()){
            this.head = node;
        } else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    insertNodeLast(ma, ten, dtb){
        var node = this.createNode(ma, ten, dtb);
        var lastNode = this.head;
        if(this.checkListNull()){
            this.head = node;
        } else{
            while(!this.checkNodeNull(lastNode.next)){
                lastNode = lastNode.next;
            }
            lastNode.next = node;
        }
        this.size++;
    }
    insertNodeAt(ma,ten,dtb,key){
        var nodeData = this.createNode(ma,ten,dtb);
        var node = this.head;
        if(this.checkNodeNull(node)){
            this.head = nodeData;
        } else{
            while(!this.checkNodeNull(node)){
                if (typeof(key) == 'string' && node.ten.toUpperCase() == key.toUpperCase()) {
                    return -1;
                } else if(typeof(key) == 'number'){
                    if(node.dtb == key && key <= 10 && this.checkNumberIsFloat(key) == true){
                        return -1;
                    } else if(node.ma == key){
                        if(this.checkNodeNull(node.next)){
                            node.next = nodeData;
                        } else{
                            nodeData.next = node.next;
                            node.next = nodeData;
                        }
                    }
                }
                node = node.next;
            }
        }
        this.size++;
    }
    insertList(listNode){
        this.size+=listNode.size;
        listNode = listNode.head;
        var lastNode = this.head;
        if(this.checkListNull()){
            this.head = listNode;
        } else{
            while(!this.checkNodeNull(lastNode.next)){
                lastNode = lastNode.next;
            }
            lastNode.next = listNode;
        }
    }
    // Search Node
    searchNode(key){
        var node = this.head;
        var newNode = [];
        while (!this.checkNodeNull(node)) {
            if (typeof(key) == 'string' && node.ten.toUpperCase() == key.toUpperCase()) {
                newNode.push(node);
            } else if(typeof(key) == 'number'){
                if(node.dtb == key && key <= 10 && this.checkNumberIsFloat(key) == true){
                    newNode.push(node);
                } else if(node.ma == key){
                    newNode.push(node);
                }
            }
            node = node.next;
        }
        return newNode;
    }
    searchData(key){
        var data = this.searchNode(key);
        if(!data.length){
            console.log('Dữ liệu không có!');
        } else{
            data.forEach(function(node){
                console.log(`${node.ma}. ${node.ten} - ${node.dtb}`);
            });
        }
    }
    indexNode(key){
        var node = this.head;
        var count = 0;
        while(!this.checkNodeNull(node)){
            if (typeof(key) == 'string' && node.ten.toUpperCase() == key.toUpperCase()) {
                console.log(`${node.ma}. ${node.ten} - ${node.dtb} nằm ở vị trí ${count}`);
            } else if(typeof(key) == 'number'){
                if(node.dtb == key && key <= 10 && this.checkNumberIsFloat(key) == true){
                    console.log(`${node.ma}. ${node.ten} - ${node.dtb} nằm ở vị trí ${count}`);
                } else if(node.ma == key){
                    console.log(`${node.ma}. ${node.ten} - ${node.dtb} nằm ở vị trí ${count}`);
                }
            }
            node = node.next;
            count++;
        }
    }
    // Sort Node
    sortNode(){
        var node = this.head;
        while(!this.checkNodeNull(node)){
            var headNode = node;
            var secondNode = node;
            while(!this.checkNodeNull(secondNode)){
                if(headNode.ma > secondNode.ma){
                    headNode = secondNode;
                }
                secondNode = secondNode.next;
            }
            var tempMa = node.ma;
            var tempTen = node.ten;
            var tempDtb = node.dtb;

            node.ma = headNode.ma;
            node.ten = headNode.ten;
            node.dtb = headNode.dtb;

            headNode.ma = tempMa;
            headNode.ten = tempTen;
            headNode.dtb = tempDtb;

            node = node.next;
        }
    }
}

console.log('Danh sách Sinh Vien Khối A')
var danhSachSinhVienA = new QuanLySinhVien();
danhSachSinhVienA.insertNode(9,'Bạn 9', 9); // [10]
danhSachSinhVienA.insertNodeFirst(10, 'Bạn 10', 10); // [10,9] => [9,10]
danhSachSinhVienA.insertNodeLast(1, 'Bạn 1', 1); // [10,9,1] => [1,9,10]
danhSachSinhVienA.insertNodeAt(2,'Bạn 2', 2, 1); //[10,9,1,2] => [1,2,9,10]
danhSachSinhVienA.insertNodeAt(2,'Bạn 2', 2, 1); //[10,9,1,2,2] => [1,2,2,9,10]
danhSachSinhVienA.deleteNodeDuplicated();

console.log('Danh sách Sinh Vien Khối B')
var danhSachSinhVienB = new QuanLySinhVien();
danhSachSinhVienB.insertNode(19,'Bạn 19', 9);
danhSachSinhVienB.insertNodeFirst(20, 'Bạn 20', 10);
danhSachSinhVienB.insertNodeLast(5, 'Bạn 5', 1);
danhSachSinhVienB.insertNodeAt(4,'Bạn 4', 2, 5);
danhSachSinhVienB.insertNodeAt(4,'Bạn 4', 2, 5);
danhSachSinhVienB.deleteNodeDuplicated();

var danhSachSinhVien = new QuanLySinhVien();
danhSachSinhVien.insertList(danhSachSinhVienA);
danhSachSinhVien.insertList(danhSachSinhVienB);
danhSachSinhVien.readNode();
console.log(danhSachSinhVien.sizeList());