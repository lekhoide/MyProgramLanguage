/**
 * Ví dụ: xếp hàng mua vé
 * Gồm nhiều phần tử có thứ tự
 * Hoạt động theo cơ chế "Vào trước, ra trước" (FIFO - First In First Out)
 * Phần tử được đặt vào hàng đợi sớm nhất sẽ được lấy ra đầu tiên
 * 
 * Có 2 cách để xây dựng hàng đợi:
 * - Mảng 1 chiều
 * - Danh sách liên kết đơn
 *
 * Ứng dụng của Queue
 * - Quản lý việc thực hiện các tác vụ (task) trong môi trường xử lý song song
 * - Hàng đợi in ấn các tài liệu
 * - Vùng nhớ đệm (buffer) dùng cho bàn phím
 * - Quản lý thang máy
 */

class Queue {
    constructor() {
        // Mảng chứa các phần tử
        this.qArray = [];
        // Số phần tử tối đa trong hàng đợi
        this.qMax = 0;
        // Xác định vị trí đầu hàng đợi
        this.qFront = 0;
        // Xác định vị trí cuối hàng đợi
        this.qRear = 0;
        // Số phần tử hiện có trong hàng đợi
        this.qNumItems = 0;
    }

    // Khởi tạo Queue rỗng
    initQueue(maxItem) {
        if(this.qArray === null) {
            return 0; // không đủ bộ nhớ
        }
        this.qMax = maxItem;
        this.qNumItems = 0;
        this.qFront = this.qRear = -1;
        return 1; // thành công
    }

    // Kiểm tra hàng đợi rỗng
    isEmpty() {
        if(this.qNumItems === 0) {
            return 1; // rỗng
        }
        return 0; // không rỗng
    }

    // Kiểm tra hàng đợi đầy
    isFull() {
        if(this.qMax === this.qNumItems) {
            return 1; // đầy
        }
        return 0; // không đầy
    }

    // Thêm một phần tử vào cuối hàng đợi
    enQueue(newItem) {
        if(this.isFull()) {
            return 0; // Queue đầy, không thêm vào được
        }
        this.qRear++;
        if(this.qRear === this.qMax) { // "tràn giả"
            this.qRear = 0; // Quay trở về đầu mảng
        }
        this.qArray[this.qRear] = newItem; // Thêm phần tử vào cuối Queue
        if(this.qNumItems === 0) {
            this.qFront = 0;
        }
        this.qNumItems++;
        return 1; // Thêm thành công

    }

    // Lấy ra một phần tử từ đầu Queue
    deQueue(itemOut) {
        if(this.isEmpty()) {
            return 0; // Queue rỗng, không lấy ra được
        }
        itemOut = this.qArray[this.qFront] // lấy phần tử đầu ra
        // Xóa phần tử đầu
        this.qArray.shift()
        this.qFront++;
        this.qNumItems--;
        if(this.qFront === this.qMax) { // nếu đi hết mảng ..
            this.qFront = 0; // ... quay trở về đầu mảng
        }
        if(this.qNumItems === 0) {
            this.qFront = this.qRear = -1; // khởi tạo lại Queue
        }
        return 1; // lấy ra thành công
    }

    // Kiểm tra phần tử đầu và phần tử cuối
    queueFront(itemOut) {
        if(this.isEmpty()) {
            return 0; // Queue rỗng, không kiểm tra
        }
        // lấy phần tử đầu ra
        itemOut = this.qArray[this.qFront];
        return 1;
    }
    queueRear(itemOut) {
        if(this.isEmpty()) {
            return 0; // Queue rỗng, không kiểm tra
        }
        // lấy phần tử cuối ra
        itemOut = this.qArray[this.qRear]
        return 1;
    }
}

// 1. Khởi tạo Queue rỗng tối đa 3 phần tử
let hangDoi = new Queue();
hangDoi.initQueue(3)
// 2. Thêm 3 phần tử vào Queue
hangDoi.enQueue(1)
hangDoi.enQueue(9)
hangDoi.enQueue(9)
// 3. Kiểm tra phần tử đầu và cuối
hangDoi.queueFront()
hangDoi.queueRear()
// 4. Thêm phần tử thứ 4 và kiểm tra hàng đợi đầy
hangDoi.enQueue(6)
// 5. Lấy ra 3 phần tử và kiểm tra hàng đợi rỗng
hangDoi.deQueue()
hangDoi.deQueue()
hangDoi.deQueue()
hangDoi.deQueue()