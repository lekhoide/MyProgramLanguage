/**
 * Ví dụ về ngăn xếp: chồng sách, chồng áo sơ mi
 * Gồm nhiều phần tử có thứ tự
 * Hoạt động theo cơ chế "Vào sauu - ra trước" (LIFO - Last in First Out)
 * Phần tử được đặt cuối cùng vào ngăn xếp sẽ được lấy ra đầu tiên
 * Các phần tử đi vào và lấy ra ở cùng một đầu top
 * 
 * Có 2 cách để xây dựng ngăn xếp
 * - Sử dụng mảng 1 chiều: tốn chi chí cấp phát
 * - Danh sách liên kết đơn: phức tạp khi triển khai
 * 
 * Ứng dụng của Stack:
 * - Lưu đường đi quay lui trong giải thuật tìm đường
 */

class Data {
    constructor(data) {
        this.data = data;
    }
}

class Stack {
    // Khởi tạo Stack rỗng
    constructor() {
        this.stkArray = [];
        this.stkMax = 0;
        this.stkTop = 0;
    }

    initStack(maxItems) {
        if(this.stkArray === null){
            return 0;
        }
        this.stkMax = maxItems;
        this.stkTop = -1;
        return 1;
    }

    // Kiểm tra Stack rỗng
    isEmpty() {
        if(this.stkTop === -1) {
            return 1; // Stack rỗng
        }
        return 0; // Stack không rỗng
    }

    // Kiểm tra Stack đầy
    isFull() {
        if (this.stkTop === this.stkMax - 1) {
            return 1; // Stack đầy
        }
        return 0; // Stack chưa đầy
    }

    // Thêm 1 phần tử vào Stack
    push(newItem) {
        if(this.isFull()) {
            return 0; // Stack đầy, không thể thêm
        }
        this.stkTop++;
        this.stkArray[this.stkTop] = newItem;
        return 1; // thêm thành công
    }

    // Lấy ra 1 phần tử Stack
    pop() {
        if(this.isEmpty()) {
            return 0; // Stack rỗng không lấy ra được
        }
        let outItem = this.stkArray[this.stkTop];
        this.stkTop--;

        // Removed by setting the length
        this.stkArray.length = this.stkTop + 1;

        return 1; // lấy ra thành công
    }

    // Kiểm tra phần tử đầu Stack
    stackTop() {
        if(this.isEmpty()) {
            return 0; // Stack rỗng, không lấy ra được
        }
        let outItem = this.stkArray[this.stackTop];
        return 1; // lấy ra thành công
    }
}

let nganXep = new Stack();
nganXep.initStack(3);
nganXep.isEmpty();
nganXep.isFull();
nganXep.push(50);
nganXep.push(100);
nganXep.push(150);
nganXep.push(200);
nganXep.pop();

