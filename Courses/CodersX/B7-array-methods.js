/*
    Các method của 1 array
    - a.concact(b): nối b đằng sau a nhưng ko thay đổi giá trị của 2 mảng
    - a.push(b): giá trị b sẽ cho vào cuối mảng a và chỉ xuất ra độ dài
    - a.pop(): đẩy ra giá trị nằm cuối mẳng và xuất phần tử bị đẩy
    - a.shift(): đẩy thằng đầu tiên ra khỏi mảng và xuất phần tử đó
    - a.unshift(): nhét vào vị trí đầu tiên chèn vào hàng và trả về độ dài mới của mảng
    Tham khảo: MDN
    Google keyword: array methods
    - a.slice
    - a.splice
    Bài sau: find, filter, sort, map, reduce
*/

var a = [1, 2, 3];
var b = [10, 20];
var c = a.concat(b)
var d = 5;
console.log(a[1]);
console.log(c)
console.log(a.push(d))
console.log(a.pop())
console.log(a.shift())
console.log(a.unshift(2))

/*
    Câu 1:
    Viết 1 chương trình xóa đi n phần tử cuối cùng của 1 array
*/

// Input: removeEnd([2, 3, 1, 8, 9, 7], 3)
// Output: [2, 3, 1]
// removeEnd([2, -3, 1, 3, -9, 7], 2)
// Output: [2, -3, 1, 3]

function removeEnd(arr, n) {
    for (var i = 0; i < n; i++) {
        arr.pop()
    }
    return arr
}
// arr = [2, 3, 1, 8, 9, 7]
// console.log(removeEnd(arr,3))

/**
 * Câu 2
 * Viết function trả về n phần tử đầu tiên có trong mảng.
*/
// first([1, 2, 3, 6, 2, -9], 2)
// [1, 2]

// first([1, -5, 6, 2, 3], 4)
// [1, -5, 6, 2]

function first(arr, n) {
    list = []
    for(var i=0;i<n;i++){
        lay = arr.shift()
        list.push(lay)
    }
    return list
}

arr = [1, 2, 3]
console.log(first(arr,2))

  // console.log(first([1, 2, 3], 2)); // expect [1, 2]

// 1. Tạo một Array
let traiCay = ['Táo','Chuối']

// 2. Đo length Array
traiCay.length

// 3. In giá trị ra màn hình qua chỉ số phần tử
traiCay[0]
traiCay[traiCay.length-1]

// 4. Vòng lặp Array in ra giá trị và số thứ tự trong mảng
traiCay.forEach(function(item,index,array){
  console.log(item,index)
})

// 5. Thêm giá trị vào cuối array
traiCay.push('Cam')

// 6. Loại bỏ giá trị ở cuối array
traiCay.pop()

// 7. Loại bổ giá trị ở đầu Array
traiCay.shift()

// 8. Thêm giá trị vào đầu Array
traiCay.unshift('Dâu tằm')

// 9. Tìm số thứ tự phần tử của giá trị muốn tìm
traiCay.indexOf('Chuối')

// 10. Xóa phần tử trong mảng qua 2 chỉ số: giá trị phần tử hoặc số thứ tự phần tử và muốn xóa bao nhiêu phần tử ở vị trí muốn xóa
traiCay.splice('Chuối',1)

// Ví dụ cho phần 10
let rauCu = ['Cà rốt','Khoai tây','Cà chua','Dưa leo']

let pos = 1
let n = 2
let xoaPhanTu = rauCu.splice(pos,n)

console.log(rauCu)
console.log(xoaPhanTu)

// 11. Copy một mảng
copyMang = rauCu.slice()
console.log(copyMang)


