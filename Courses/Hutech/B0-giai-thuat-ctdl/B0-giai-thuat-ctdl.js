/**
 * *Đối tượng dữ liệu    =>  Thao tác xử lý      =>  Kết quả mong muốn
 * *                         Xây dựng giải thuật
 * 
 * *Chương trình(Cấu trúc dữ liệu, giải thuật) {
 * *     Cấu trúc dữ liệu AND Giải thuật
 * *}
 * 
 * ! Đối tượng xử lý của giải thuật là dữ liệu
 * ! Khi CTDL thay đổi thì GT cũng thay đổi tránh xử lý gượng ép, thiếu tự nhiên
 * 
 * Todo: Tiêu chuẩn đánh giá CTDL
 * - Phản ánh đúng thực tế: thể hiện đầy đủ thông tin nhập xuất của bài toán
 * - Phù hợp với thao tác xử lý
 * - Tiết kiệm tài nguyên hệ thống
 * 
 * ? Giải thuật xây dựng tên CTDL
 * - Một bộ dữ liệu vào
 * - Sau một số hữu hạn bước thực hiện thao tác chỉ ra
 * - Kết quả đạt được theo mục tiêu đã định
 * 
 * Todo: Đặc trưng của thuật toán
 * 1. Tính đơn nghĩa: đơn định, ngẫu nhiên
 * 2. Tính dừng
 * 3. Tính đúng
 * 4. Tính phổ dụng
 * 5. Tính khả thi
 * 
 * ? Giải thuật
 * Output
 * Input
 * Euclide: B1, B2, B3
 * 
 * Todo: Các bước tiếp cận
 * 1. Mô hình hóa bài toán
 * 2. Tìm giải thuật trên mô hình đó
 * 3. Hình thức hóa giải thuật thông qua các thủ tục hay mã giả
 * 4/ Cài đặt giải thuật trên NNLT cụ thể
 * 
 * 
 * ? Kiểu dữ liệu sơ cấp
 * ? Kiểu dữ liệu cấu trúc - cấu trúc dữ liệu
 * ? Kiểu dữ liệu dựng sẵn - kiểu dữ liệu cơ bản
 * 
* ? Kiểu dữ liệu trừu tượng(Abstract Data Type)
 * Mô tả dữ liệu
 * Mô tả tác vụ
 * function Plus(a, b) {
 *      Nhập
 *      Xuất
 * }
 * ? ADT là gì: mô hình toán học với các phép toán, kiểu dữ liệu định nghĩa ở mức khái niệm, chưa được cài đặt bằng ngôn ngữ lập trình
 */

/**
 * Todo 1: Quản lý điểm sinh viên
 * Expect: Xuất điểm số các môn của từng sinh viên
 */

var data = [
    {
        HocSinh : 'SV1',
        MonHoc : {
            Mon1 : 7,
            Mon2 : 9,
            Mon3 : 5,
            Mon4 : 6
        }
    },
    {
        HocSinh : 'SV2',
        MonHoc : {
            Mon1 : 9,
            Mon2 : 5,
            Mon3 : 8,
            Mon4 : 7
        }
    },
    {
        HocSinh : 'SV3',
        MonHoc : {
            Mon1 : 8,
            Mon2 : 6,
            Mon3 : 9,
            Mon4 : 5
        }
    }
]

function XuatDiem(data) {
    // ? Giải thuật A: dùng mảng 1 chiều
    for(let i = 0 ; i < data.length ; i++) {
        for(var mon in data[i].MonHoc) {
            console.log(`Điểm ${mon} của ${data[i].HocSinh} là ${data[i].MonHoc[mon]}`);
        }
    }
}

// XuatDiem(data);

/**
 * Todo 2: Khai báo CTDL cho một SV gồm các thông tin
 * MaSV: int
 * HoTen: string
 * NamSinh: int
 * Diem: float
 * 
 * Cài đặt các hàm sau
 * 1. Nhập vào mảng một chiều a gồm n SV
 * 2. Xuất ra toàn bộ thông tin của các sinh viên
 * 3. Tìm sinh viên có MaSV = x
 * 4. Tìm SV có tên là x (nếu có nhiều SV thì chỉ cần tìm SV đầu tiên)
 * 5. In ra màn hình tất cả các SV có năm sinh = 1989
 */

