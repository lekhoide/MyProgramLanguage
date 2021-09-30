// function as a parameter (callback)
// dùng function như một tham số
function sum(a, b) {
    return a + b;
}
console.log(sum(5, 2)) // number, string, true, array, object

var coffeeMachine = {
    makeCoffee: function (onFinish) {
        console.log('Making coffee...')
        return onFinish();
    }
};

var beep = function () {
    return 'tít tít';
};

console.log(coffeeMachine.makeCoffee(beep))

coffeeMachine.makeCoffee(function () {
    console.log("Bíp bíp")
})

/**
 * Câu 01
 * 1. Viết hàm double nhận vào 1 số bất kì, trả về  số đó nhân đôi 
 *  Vd: double(2) === 4
 * 2. Viết hàm sumAndDo nhận vào 1 array và 1 callback function. 
 * Hàm sumAndDo làm nhiệm vụ tính tổng array đó, 
 * sau đó gọi callback function với tham số là kết quả tổng vừa tính
 * 3. Nếu mảng trống trả về giá trị 0
 * Vd: sumAndDo([1, 2, 3], double) === 12
 */

function double(num) {
    return num * 2;
};

function sumAndDo(nums, callback) {
    tong = 0;
    for (var i of nums) {
        tong += i
    }
    return callback(tong)
}

let arr = [2,4]

console.log(sumAndDo(arr,double))


/**
 * Câu 2
 * 1. Viết hàm transform nhận vào 1 array gồm các số và 1 function callback. 
 * Nội dung của hàm bao gồm:
 * - Khai báo 1 biến result có giá trị là 1 empty array
 * - Lặp qua từng phần tử trong array, với mỗi phần tử, gọi hàm callback và truyền vào phần tử đó, 
 * được kết quả bao nhiêu thì push vào array khai báo ở trên
 * - Trả về result array
 */

//  transform([21, 11, 5], double)
//  [42, 22, 10]

function transform(numbers, callback) {
    // Viết nội dung hàm ở đây 
    array = []
    for(var i of numbers){
        array.push(callback(i))
    }
    return array;
}

function double(num) {
    return num*2
}


console.log(transform(arr,double))

