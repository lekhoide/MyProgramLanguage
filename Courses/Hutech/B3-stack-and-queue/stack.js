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
            return 1;
        }
        return 0;
    }

    // Kiểm tra Stack đầy

    // Thêm 1 phần tử vào Stack

    // Lấy ra 1 phần tử Stack

    // Kiểm tra phần tử đầu Stack
}

let nganXep = new Stack();
nganXep.initStack(10);
nganXep.isEmpty();

