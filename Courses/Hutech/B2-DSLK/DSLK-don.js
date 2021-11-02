/**
 * Danh sách liên kết:
 * - Cấp phát động lúc chạy chương trình
 * - Các phần tử nằm rải rác ở nhiều nơi trong bộ nhớ
 * - Kích thước danh sách chỉ bị giới hạn do RAM
 * - Thao tác thêm xóa đơn giản
 * 
 * Danh sách liên kết đơn:
 * - Một danh sách
 * - Mỗi phần tử gồm 2 thành phần
 * - Phần chứa dữ liệu là Data
 * - Phần chỉ vị trí của phần tử tiếp theo trong danh sách là Next
 * - Mỗi phần tử được gọi là một Node
 * - Phần next là con trỏ, trỏ đến node kế tiếp
 */

// Todo 1: Tạo danh sách liên kết đơn, mỗi phần tử là một số nguyên. Xuất danh sách
/**
 * 1. Hai Class: Một Class Node và Một Class danh sách
 * 2. Class Node: Khai báo constructor chứa các data(thông tin) và bắt buộc phải có this.head = null cuối constructor
 * 3. Class danh sách: Khai báo constructor chỉ chứa hai thành phần: this.head = null và this.size = 0.
 * 4. Các chức năng cơ bản:
 * - Kiểm tra danh sách rỗng
 * - Tạo Node
 * - Chèn Node lên đầu / phía cuối
 * - Xóa Node đầu / cuối cùng
 * - Xóa tất cả Node
 * - In tất cả Node
 * - Tìm kiếm Node X
 * - Sắp xếp danh sách
 */
// User defined class node
class Node {
    // constructor
    constructor(soNguyen)
    {
        this.soNguyen = soNguyen;
        this.next = null
    }
}

class DanhSachSoNguyen {
    // *Init
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // *IsEmpty
    isEmpty(){
        return this.head == null;
    }

    // 
    createNode(soNguyen){
        var node = new Node(soNguyen);
        return node;
    }

    // *InsertFirst
    insertFirst(soNguyen){
        var node = this.createNode(soNguyen);
        if(this.head == null){
            this.head = node;
        } else{
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }
    // *InsertAfter
    insertAfter(soNguyen){
        if(this.head == null){
            var node = this.createNode(soNguyen);
            this.head = node;
        } else{
            var tam = this.createNode(soNguyen);
            tam.next = this.head.next;
            this.head.next = tam;
        }
        this.size++;
    }
    // *Delete First
    deleteFirst(){
        if(this.isEmpty(this.head)){
            console.log('List is empty')
        } else{
            var node = this.head;
            this.head = this.head.next;
            delete node.soNguyen;
        }
        this.size--;
    }
    // *Delete After
    deleteAfter(){
        if(this.head.next == null){
            console.log("Can't delete node");
        } else{
            var q = this.head.next;
            this.head.next = q.next;
            delete q.soNguyen;
        }
        this.size--;
    }
    // *Delete All
    deleteAll(){
        while(this.head !== null){
            var node = this.head;
            this.head = node.next;
            delete node.soNguyen;
            this.size--;
        }
    }

    // *ShowList
    showNode(node){
        console.log(`Số nguyên: ${node.soNguyen}`);
    }
    showList(){
        var node = this.head;
        while (node !== null) {
            this.showNode(node);
            node = node.next;
        }
    }
    // *Search
    search(soNguyen){
        var node = this.head;
        while( (node !== null) && (node.soNguyen != soNguyen) ){
            node = node.next;
        }
        return node;
    }
    // *Sort
    sort(){
        var node = this.head;
        while(node !== null){
            var min = node;
            var q = node;
            while(q !== null){
                if(q.soNguyen < min.soNguyen){
                    min = q;
                }
                q = q.next;
            }
            var temp = node.soNguyen;
            node.soNguyen = min.soNguyen;
            min.soNguyen = temp;
            node = node.next;
        }
    }
    
    // functions to be implemented
    // add(element)
    // insertAt(element, location)
    // removeFrom(location)
    // removeElement(element)
  
    // Helper Methods
    // isEmpty
    // size_Of_List
    // PrintList
}

/**
 * Todo 2: Viết chương trình quản lý danh sách sinh viên (sử dụng DSLKĐ), thông tin mỗi sv gồm:​
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
        while(!this.checkNodeNull(node)){
            console.log(`${node.ma}. ${node.ten} - ${node.dtb}`);
            node = node.next;
        }
    }
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
                        //1. Node Data
                        //2. Node next
                        //3. Node Before
                        //4. Node After
                        //5. Node null
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

var danhSachSinhVien = new QuanLySinhVien();
danhSachSinhVien.insertNode(3,'Lê Khôi A',5);
danhSachSinhVien.insertNodeLast(2,'Lê Khôi B',6);
danhSachSinhVien.insertNodeLast(1,'Lê Khôi C',8.5);
danhSachSinhVien.insertNodeFirst(4,'Lê Khôi Đệ',8.5);
danhSachSinhVien.sortNode();
danhSachSinhVien.insertNodeAt(5,'Le Khoi C',7,3);
danhSachSinhVien.updateNode(5,6);
danhSachSinhVien.deleteNode(5);
danhSachSinhVien.readNode();

