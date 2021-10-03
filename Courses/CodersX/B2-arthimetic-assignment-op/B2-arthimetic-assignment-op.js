/*
    * Arithmetic Operators(Phép toán số học)
1. ++ -- (increment decrement)
2. * / %
3. + -

- Thực hiện từ trái sang phải
- Thực hiện theo thứ tự ưu tiên

*/

var a = 5
var b = 10
var c = 13
var d = 6 / 2
var e = 5 % 2

var f = 5
f = f++ + ++f - --c + c--
// 5 + ++f - 14 + a-- (f=6,a=14)
// 5 + 7 - 14 + 14 (f=7,a=14)
// 12 - 0 = 12(f=7,a=15)
console.log(f)

var g = a++ * b-- + --a * ++b
// 5 * 10 + --a * ++b (a=6,b=9)
// 50 + 5 * 10 (a=5,b=10)
// 100
console.log(g)

// Trả về giá trị trước khi nó cộng một đơn vị
f++
// Trả về giá trị khi đã cộng một đơn vị
++f

/*
    Assignment Operators(phép gán)
    Các phép gán
    4. = += -= *= /=
*/

var a = 5

var b = a+=5
console.log(b)