

// ? Tìm kiếm tuyến tính: tập dữ liệu bất kỳ
// ? Tìm kiếm nhị phân: tập dữ liệu đã được sắp xếp

// Todo 1: Cho dãy số a giá trị tìm X = 8. Dùng tìm kiếm tuyến tính và tìm kiếm nhị phân
a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function linearSearch(a, n, key) {
    let i = 0;
    n = a.length
    while (key != a[i]) {
        i++;
    }
    if (i == n) {
        return -1;
    }
    return i;
}
// console.log(linearSearch(a, a.length, 8));
function binarySearch(a, n, key) {
    n = a.length
    let left = 0, right = n - 1, mid;
    while(left <= right) {
        mid = Math.round((left + right) / 2); // Lấy điểm giữa
        if(a[mid] == key) {       // Nếu tìm được
            return mid;
        }
        if(a[mid] < key) { // Tìm đoạn bên phải mid
            left = mid + 1;
        } else {
            right = mid - 1;      // Tìm đoạn bên trái mid
        }
    }
    return -1;                    // Không tìm được
}
// console.log(binarySearch(a, a.length, 1))

/**
 * Todo 2: Sinh mảng ngẫu nhiên gồm n số nguyên,
 * mỗi số a[i] có giá trị thuộc (0, 100)
 * n: nhập
 * A[i]: sinh
 * Xuất mảng
 * Tìm phẩn tử X trong mảng, nếu có trả về vị trí tìm thấy
 * (X nhập từ bàn phím). Sử dụng 2 phương pháp tuần tự và tìm
 * nhị phân
 * Yêu cầu: chương trình tổ chức theo menu chức năng
 */

let arr = [];
let loop = true;
var readlineSync = require('readline-sync');

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

function sortArr(arr) {
    var arr = arr.sort((a, b) => a - b);
    return arr;
}

function createArr(arr) {
    let n = parseInt(readlineSync.question('n = '));
    while(arr.length < n) {
        arr.push(getRandomIntInclusive(0, 100))
    }
    return arr;
}

function showArr(arr) {
    let printArr = arr.toString();
    console.log('[' + printArr + ']');
}

function showMenu() {
    var options = [
        'Xuat mang',
        'Tim kiem X bang phuong phap tuan tu',
        'Tim kiem X bang phuong phap nhi phan'
    ];
    while(loop == true) {
        var chooseOption = readlineSync.keyInSelect(options, 'Choose option', null, { cancel: 'No $<lastItem>' });
        switch (chooseOption) {
            case 0:
                showArr(arr);
                break;
            case 1:
                var key = readlineSync.question('Nhap X can tim: ');
                console.log(linearSearch(arr, arr.length, key));
                break;
            case 2:
                sortArr(arr);
                showArr(arr);
                var key = parseInt(readlineSync.question('Nhap X can tim: '));
                console.log(binarySearch(arr, arr.length, key));
                break;
            case -1:
                loop = false;
                console.log("Goodbye!");
                break;
            default:
                console.log("Wrong option");
                break;
        }
    }
}

function main() {
    createArr(arr)
    showMenu();
}

// main();


/**
 * Todo 3: Viết chương trình quản lý DSSV, thông tin của mỗi
 * sinh viên gồm (mã sv, họ tên, điểm trung bình)
 * Chương trình có các chức năng sau
 * Nhập dssv
 * Xuất dssv
 * Tìm sinh viên theo họ tên bằng pp tuyến tính
 * Tìm sv theo mã bằng pp tìm nhị phân
 * Sắp xếp danh sách sv tăng dần theo mã sv
 */

var students = [];

function createDSSV() {
    var maSV = readlineSync.question('Nhap ma sv: ');
    var hoTen = readlineSync.question('Nhap ho ten: ');
    var dtb = readlineSync.question('Nhap diem trung binh: ');
    var student = {
        id : parseInt(maSV),
        name: hoTen,
        gpa: parseFloat(dtb)
    };
    students.push(student);
}

function showDSSV() {
    for(var student of students) {
        console.log(`${student.id}. ${student.name} - ${student.gpa}`);
    };
}

function linearSearchDSSV(students, key) {
    let i = 0;
    while(students[i].name != key) {
        i++;
    };
    if (i == students.length) {
        return -1;
    }
    return `${students[i].id}. ${students[i].name} - ${students[i].gpa}`;
}

function binarySearchDSSV(students, key) {
    var left = 0 , right = students.length - 1 , mid;
    while(left <= right) {
        mid = Math.round((left + right) / 2);
        if(students[mid].id == key) {
            return `${students[mid].id}. ${students[mid].name} - ${students[mid].gpa}`;
        }
        if(students[mid].id < key) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return -1;
}

function sortAscDSSV(){
    var sortAsc = students.sort((a,b) => a.id - b.id);
    for(var student of sortAsc) {
        console.log(`${student.id}. ${student.name} - ${student.gpa}`);
    };
}

function menuDSSV(){
    var options = [
        'Nhap DSSV',
        'Xuat DSSV',
        'Tim sinh vien theo ho ten bang pp tuyen tinh',
        'Tim sinh vien theo ma bang pp nhi phan',
        'Sap xep DSSV tang dan theo ma sv'
    ];

    while(loop == true) {
        var chooseOption = readlineSync.keyInSelect(options, 'Choose option', null, { cancel: 'No $<lastItem>' });
        switch(chooseOption) {
            case 0:
                createDSSV();
                break;
            case 1:
                showDSSV();
                break;
            case 2:
                var timHoTen = readlineSync.question('Nhap ho ten sinh vien: ');
                console.log(linearSearchDSSV(students, timHoTen));
                break;
            case 3:
                var timMa = parseInt(readlineSync.question('Nhap ma sinh vien: '));
                console.log(binarySearchDSSV(students, timMa));
                break;
            case 4:
                sortAscDSSV();
                break;
            case -1:
                loop = false;
                console.log('Goodbye');
                break;
            default:
                console.log('Wrong Option');
                break;
        }
    }
}

function mainDSSV(){
    menuDSSV();
}

// mainDSSV();

/**
 * Todo 4: Cho cấu trúc Sách
 * Mã sách: int
 * Tên sách: char
 * Giá: long
 * 
 * Nhập, xuất danh sách gồm N cuốn sách
 * Tìm cuốn sách có mã là X
 * Tìm cuốn sách có tên là X
 * Liệt kê thông tin các cuốn sách có giá > 5000
 * Tìm cuốn sách có giá lớn nhất
 */

var books = [];

function createBook(){
    var maSach = readlineSync.question('Nhap ma sach: ');
    var tenSach = readlineSync.question('Nhap ten sach: ');
    var giaSach = readlineSync.question('Nhap gia sach: ');
    var book = {
        id: parseInt(maSach),
        name: tenSach,
        price: parseFloat(giaSach)
    };
    books.push(book);
}

function showBooks(){
    books.forEach(book => console.log(`${book.id}. ${book.name} - ${book.price}`));
}

function searchBook(books, key){
    var i = 0;

    if(typeof(key) == 'string') {
        while(books[i].name != key){
            i++;
        }
    } else {
        while(books[i].id != key){
            i++;
        }
    }

    if(i == books.length) {
        return -1;
    }
    return `${books[i].id}. ${books[i].name} - ${books[i].price}`;
}

function priceHigh5000(){
    var filter = books.filter(x => (x.price > 5000) ? console.log(`${x.id}. ${x.name} - ${x.price}`) : '');
    return filter;
}

function priceMax(){
    var book = Math.max.apply(Math, books.map(function(book) { return book.price; }))
    
    let i = 0;
    while(book != books[i].price){
        i++
    }
    if(books.length == i) {
        return -1
    }
    
    return `${books[i].id}. ${books[i].name} - ${books[i].price}`;
}

function menuBook(){
    var options = [
        'Nhap sach',
        'Xuat danh sach',
        'Tim cuon sach theo ten',
        'Tim cuon sach theo ma',
        'Liet ke cac cuon sasch co gia 5000',
        'Tim cuon sach co gia lon nhat'
    ];

    while(loop == true) {
        var chooseOption = readlineSync.keyInSelect(options, 'Choose options: ', null, {cancel:'No $<lastItem>'});
        switch(chooseOption) {
            case 0:
                createBook();
                break;
            case 1:
                showBooks();
                break;
            case 2:
                var timTheoTen = readlineSync.question('Nhap ten cuon sach can tim: ');
                console.log(searchBook(books, timTheoTen));
                break;
            case 3:
                var timTheoMa = parseInt(readlineSync.question('Nhap ma cuon sach can tim: '));
                console.log(searchBook(books, timTheoMa));
                break;
            case 4:
                priceHigh5000();
                break;
            case 5:
                console.log(priceMax());
                break;
            case -1:
                loop = false;
                console.log('Goodbye');
                break;
            default:
                console.log('Wrong option');
                break;
        }
    }
}

function mainBook(){
    menuBook();
}

mainBook();