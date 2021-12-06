/**
 * Singly Linked List
 * - Cấp phát động lúc chạy chương trình
 * - Các phần tử nằm rải rác ở nhiều nơi trong bộ nhớ
 * - Kích thước danh sách chỉ bị giới hạn do RAM
 * - Thao tác thêm xóa đơn giản
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
}
