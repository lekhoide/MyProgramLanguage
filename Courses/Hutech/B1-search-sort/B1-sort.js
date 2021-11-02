/**
 * Todo Selection Sort
 * Chọn phần từ có khóa nhỏ nhất trong N phần tử ban đầu
 * Đổi chỗ phần từ vừa chọn với phần tử đầu dãy
 * Xem dãy hiện hành chỉ còn N-1 phần tử(không xét phần tử đầu)
 * Bắt đầu từ vị trí thứ hau
 * Lặp quá trình trên cho dãy hiện hành ... đến khi dãy hiện
 * hành chỉ còn một phần tử
 * 
 * B1: i = 0
 * B2: Tìm phần tử nhỏ nhất a[min] trong dãy hiện hành từ a[i] đến a[n-1]
 * B3: Hoán vị a[i] và a[min]
 * B4: Nếu i < n - 2 thì i = i + 1; => Lặp B2
 *      Ngược lại => dừng
 *  B1
    i = 0 ; i < 2 ; i++
    vtmin = 0
    B2
    j = 1 ; j < 3 ; j++
    arr[j] = 2 < arr[vtmin] = 3 => vtmin = 1
    j = 2 ; j < 3 ; j++
    arr[j] = 1 < arr[vtmin] = 2 => vtmin = 2
    j = 3 ; j < 3 ; j++ => stop
    B3
    (vtmin = 2) !== (i = 0)
    temp = 1
    arr[vtmin] = 3
    arr[i] = 1
    [3, 2, 1] => [1, 2, 3]

    ---
    B1
    i = 1 ; i < 2 ; i++
    vtmin = 1
    B2
    j = 2 ; j < 3 ; j++
    arr[j] = 3 < arr[vtmin] = 2 => false
    j = 3 ; j < 3 ; j++ => stop
    B3
    (vtmin = 1) !== (i = 1) => false
 */

arr = [12, 2, 8, 5, 1, 6, 4, 15];

// ASC
function selectionSortAsc(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var vtmin = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[vtmin]) {
        vtmin = j;
      }
    }
    if (vtmin != i) {
      let temp = arr[vtmin];
      arr[vtmin] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

// DESC
function selectionSortDesc(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    var vtmin = i;
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] > arr[vtmin]) {
        vtmin = j;
      }
    }
    if (vtmin !== i) {
      let temp = arr[vtmin];
      arr[vtmin] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

// console.log(selectionSortAsc(arr))
// console.log(selectionSortDesc(arr));

/**
 * Todo: Bubble Sort
 * Xuất phát từ cuối dãy, đổi chỗ các cặp phần tử kế cận
 * để đưa phần từ nhỏ hơn về đầu
 * Sau đó bước tiếp theo không xét phần tử đó nữa. Do vậy
 * lần xử lý thứ i sẽ có vị trí đầu dãy là i
 * Lặp lại xử lý trên cho đến khi không còn cặp phần tử nào
 * được xét
 *
 * B1 i = 0 // lần xử lý đầu tiên
 * B2 j = n -1 // duyệt từ cuối dãy ngược về vị trí i
 * Trong khi (j-1) thực hiện:
 * Nếu a[j] < a[j-1]: Hoán đổi a[j] và a[j-1]
 * j = j - 1;
 * B3 i = i + 1; // lần xử lý kế tiếp
 * Nếu i > n - 2: Hết dẫy => Dừng
 * Ngược lại: quay lại B2
 *
 * [12,2,8,5,1,6,4,15] => [1,2,4,5,6,8,12,15]
 *
 * i = 0 ; i < 7 ; i++
 * j = 7 ; j > i (7 > 0) ; j--
 * arr[j] < arr[j-1] (15 < 4) => false
 * j = 6 ; j > i (6 > 0) ; j--
 * arr[j] < arr[j-1] (4 < 6) => [12,2,8,5,1,4,6,15]
 */

function bubbleSortAsc(arr) {
  for (var i = 0; i < arr.length - 1; i++) {
    for (var j = arr.length - 1; j > i; j--) {
      if (arr[j] < arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}

function bubbleSortDesc(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = arr.length - 1; j > i; j--) {
      if (arr[j] > arr[j - 1]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
}

// console.log(bubbleSortAsc(arr));
// console.log(bubbleSortDesc(arr));

/**
 * Todo: Insertion Sort
 * Cho dãy ban đầu a[0], a[1], ..., a[n-1], ta có thể xem dãy con gồm một phần tử a[0] đã được sắp
 * Sau đó thê a[1] vào đoạn a[0] sao cho a[0] a[1] được sắp
 * Cho đến khi thêm xong a[n-1] vào đoạn a[0]a[1]...a[n-2]
 * => đoạn a[0]a[1]...a[n-2]a[n-1] được sắp
 *
 * B1 i = 1 //giả sử có đoạn a[0] đã được sắp
 * B2 x = a[i] //tìm được vị trí cần chèn x vào là pos
 * B3 Dời chõ các phần tử từ a[pos] => a[i-1] sang phải một vị trí để dành chỗ cho a[i].
 * B4 a[pos] = x //có đoạn a[0]...a[i] được sắp
 * B5 i+=1;
 * Nếu i < n lặp lại B2
 * Ngược lại dừng => dãy đã được sắp
 *
 * i = 1 ; i < 7 ; i++
 * x = arr[i] = 2
 * pos = i - 1 = 0
 * pos = 0 >= 0 && arr[pos] = 12 > x = 2
 * => arr[pos+1] = arr[pos] = 12
 * => pos--
 */
function insertionSortAsc(arr) {
  for (var i = 1; i < arr.length; i++) {
    var x = arr[i];
    var pos = i - 1;
    while (pos >= 0 && arr[pos] > x) {
      arr[pos + 1] = arr[pos];
      pos--;
    }
    arr[pos + 1] = x;
  }
  return arr;
}

function insertionSortDesc(arr) {
  for (var i = 1; i < arr.length; i++) {
    var x = arr[i];
    var pos = i - 1;
    while (pos >= 0 && arr[pos] < x) {
      arr[pos + 1] = arr[pos];
      pos--;
    }
    arr[pos + 1] = x;
  }
  return arr;
}

// console.log(insertionSortAsc(arr));
// console.log(insertionSortDesc(arr));

/**
 * Todo Quick Sort
 * Thuật toán do Hoare đề xuất
 * Tốc độ trung bình nhanh hơn thuật toán khác
 * QS phân hoạch dãy ban đầu thành hai phần dựa vào một giá trị x
 * Dãy 1: gồm các phần từ a[i] ko lớn hơn x
 * Dãy 2: gồm các phần tử a[i] ko nhỏ hơn x
 */

function quickSortAsc(arr, left, right) {
  var x = arr[Math.round((left + right) / 2)];
  var i = left;
  var j = right;
  do {
    while (arr[i] < x) {
      i++;
    }
    while (arr[j] > x) {
      j--;
    }
    if (i <= j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  } while (i < j);
  if (left < j) {
    quickSort(arr, left, j);
  }
  if (right > i) {
    quickSort(arr, i, right);
  }
  return arr;
}

function quickSortDesc(arr, left, right) {
  var x = arr[Math.round((left + right) / 2)];
  var i = left;
  var j = right;
  do {
    while (arr[i] > x) {
      i++;
    }
    while (arr[j] < x) {
      j--;
    }
    if (i <= j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      i++;
      j--;
    }
  } while (i < j);
  if (left < j) {
    quickSortDesc(arr, left, j);
  }
  if (right > i) {
    quickSortDesc(arr, i, right);
  }
  return arr;
}

// console.log(quickSortAsc(arr, 0, arr.length-1));
// console.log(quickSortDesc(arr, 0, arr.length-1));

// ? Bài tập 1: Sắp xếp mảng giảm dần qua 4 thuật toán trên.
// ! done
// ? Bài tập 2: Cài đặt mảng các cuốn sách. Sắp xếp theo mã sách. Sắp xếp theo tên sách
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
let loop = true;
var readlineSync = require("readline-sync");

function createBook() {
  var maSach = readlineSync.question("Nhap ma sach: ");
  var tenSach = readlineSync.question("Nhap ten sach: ");
  var giaSach = readlineSync.question("Nhap gia sach: ");
  var book = {
    id: parseInt(maSach),
    name: tenSach,
    price: parseFloat(giaSach),
  };
  books.push(book);
}

function showBooks(books) {
  return books.forEach((book) =>
    console.log(`${book.id}. ${book.name} - ${book.price}`)
  );
}

function searchBook(books, key) {
  var i = 0;

  if (typeof key == "string") {
    while (books[i].name != key) {
      i++;
    }
  } else {
    while (books[i].id != key) {
      i++;
    }
  }

  if (i == books.length) {
    return -1;
  }
  return `${books[i].id}. ${books[i].name} - ${books[i].price}`;
}

function priceHigh5000() {
  var filter = books.filter((x) =>
    x.price > 5000 ? console.log(`${x.id}. ${x.name} - ${x.price}`) : ""
  );
  return filter;
}

function priceMax() {
  var vtmin = 0;
  for (var i = 1; i < books.length; i++) {
    if (books[i].price > books[vtmin].price) {
      vtmin = i;
    }
  }
  return `${books[vtmin].id}. ${books[vtmin].name} - ${books[vtmin].price}`;
}

function sortBooksId(books){
  for(var i = 0 ; i < books.length-1 ; i++){
    var vtmin = i;
    for(var j = i+1 ; j < books.length ; j++){
      if(books[j].id > books[vtmin].id){
        vtmin = j;
      }
    }
    if(vtmin !== i){
      let temp = books[vtmin];
      books[vtmin] = books[i];
      books[i] = temp;
    }
  }
  return showBooks(books);
}

function sortBooksName(books) {
  var sortName = books.sort(function(a,b){
    nameA = a.name.toUpperCase();
    nameB = b.name.toUpperCase();
    if(nameA > nameB){
      return 1;
    }
    //A-Z
    if(nameA < nameB){
      return -1;
    }
    return 0;
  })
  return sortName;
}

function menuBook() {
  var options = [
    "Nhap sach",
    "Xuat danh sach",
    "Tim cuon sach theo ten",
    "Tim cuon sach theo ma",
    "Liet ke cac cuon sach co gia 5000",
    "Tim cuon sach co gia lon nhat",
    "Sap xep ma sach giam dan",
    "Sap xep theo ten sach A-Z",
  ];

  while (loop == true) {
    var chooseOption = readlineSync.keyInSelect(
      options,
      "Choose options: ",
      null,
      { cancel: "No $<lastItem>" }
    );
    switch (chooseOption) {
      case 0:
        createBook();
        break;
      case 1:
        showBooks(books);
        break;
      case 2:
        var timTheoTen = readlineSync.question("Nhap ten cuon sach can tim: ");
        console.log(searchBook(books, timTheoTen));
        break;
      case 3:
        var timTheoMa = parseInt(
          readlineSync.question("Nhap ma cuon sach can tim: ")
        );
        console.log(searchBook(books, timTheoMa));
        break;
      case 4:
        priceHigh5000();
        break;
      case 5:
        console.log(priceMax());
        break;
      case 6:
        sortBooksId(books);
        break;
      case 7:
        console.log(sortBooksName(books));
        break;
      case -1:
        loop = false;
        console.log("Goodbye");
        break;
      default:
        console.log("Wrong option");
        break;
    }
  }
}

function mainBook() {
  menuBook();
}

mainBook();
