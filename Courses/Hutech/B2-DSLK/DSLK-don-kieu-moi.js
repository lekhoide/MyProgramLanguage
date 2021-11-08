/**
 * Một dãy tuần tự các nút (Node)
 * Giữa hai nút có 1 con trỏ liên kết, các liên kết hướng theo 1 chiều
 * Có thể mở rộng tùy ý giới hạn bởi dung lượng bộ nhớ
 * Thao tác Chèn/Xóa không cần phải dịch chuyển phần tử mà chỉ cần thay đổi mối liên kết
 * Quản lý phần tử đầu tiên bằng cn trở pHead
 * 
 * Tạo lập bằng cách cấp phát bộ nhớ động
 * Mỗi nút có 2 thông tin:
 * - Dữ liệu data
 * - Con trỏ liên kết đến phần tử kế tiếp trong danh sách
 * Nếu không trỏ đến phần tử nào thì con trỏ Next = NULL
 * - Một nút có thể có nhiều field dữ liệu
 * 
 * Quản lý toàn bộ danh sách liên kết thông qua con trỏ đầu pHead
 * pHead không phải là 1 nút là chỉ là một con trỏ đến nút đầu của danh sách
 * 
 * Quản lý thêm phần tử cuối của danh sách bằng con trỏ cuối pTail
 * pTail không phải là 1 nút mà chỉ là một con trỏ đến nút cuối danh sách
 */

class Node{
    constructor(data){
        this.data = data
        this.next = null
    }
}

class DanhSachNode{

    // Khởi tạo danh sách rỗng
    constructor(){
        this.head = null
        this.tail = null
        this.size = 0
    }

    // Kiểm tra danh sách rỗng
    isEmptyList(){
        return this.head == null && this.tail == null;
    }

    // Thêm 1 nút vào danh sách
    createNode(x){
        var pNew = new Node();
        if(pNew == null){
            console.log('Lỗi cấp phát vùng nhớ');
            return -1;
        }
        pNew.data = x;
        pNew.next = null;
        return pNew;
    }
    addHead(pNew){
        pNew.next = this.head;
        this.head = pNew;
    }
    addTail(pNew){
        this.tail.next = pNew;
        this.tail = pNew;
    }
    insertNode(x){
        var pNew = this.createNode(x);
        if(this.isEmptyList()){
            this.head = this.tail = pNew;
        } else if(this.size < 3){
            this.addHead(pNew);
        } else if(this.size >= 3){
            this.addTail(pNew);
        } else{
            var pPrev = this.head;
            pNew.next = pPrev.next;
            pPrev.next = pNew;
        }
        this.size++;
    }

    // Xóa 1 nút

    // Duyệt danh sách

    // Kiểm tra số phần tử của danh sách

    // Tìm 1 phần tử
}

var quanLyNode = new DanhSachNode();
quanLyNode.insertNode(5);
quanLyNode.insertNode(10);
quanLyNode.insertNode(15);
quanLyNode.insertNode(20);
quanLyNode.insertNode(25);