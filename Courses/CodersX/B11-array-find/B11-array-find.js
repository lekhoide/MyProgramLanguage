/*
    array.find
    Trả về giá trị True thì dừng lại không tìm kiếm tiếp
    Trả về một phần tử

    array.find(function(item){
        //filter
        return x // True or False
    });
*/

var number = [1, 2, 3, 4]

number.find(function (item) {
    console.log(item)
    return item % 2 === 0;
});


// Viết hàm trả về số chẵn đầu tiên trong mảng sử dụng find method
// Nếu không tìm thấy số chẵn nào thì trả về undefined
/*
findFirstEvenNumber([11, 13, 25, 29, 40])
40

findFirstEvenNumber([33, 23, 17])
undefined

findFirstEvenNumber([999, 23, 2, 887])
2
*/

function findFirstEvenNumber(array) {
    // your code here
    var arrFind = array.find(function (item) {
        if (item % 2 == 0) {
            return item;
        }
    })
    if (arrFind === undefined) {
        return undefined;
    }
    return arrFind;
}

// array = [11,13,25,29,40];
// array = [33,23,17];
// var array = [999,23,2,887]
// findFirstEvenNumber(array);


/**
 * viết hàm tìm số chia hết cho x đầu tiên có trong mảng
 * @params {array} array - Mảng các chữ số
 * @params {number} x - Số bị chia
 * Nếu không có trả về undefined
 * Example: 
 * findDivisibleNum([1, 3, 4], 2) => 4
 */

/**
findDivisibleNum([1, 3, 4], 2)


4

findDivisibleNum([1, 3, 4], 5)


undefined

findDivisibleNum([12, 2, 5, 7], 7)


7


 */

function findDivisibleNum(array, x) {
    // viết code ở đây.
    var arrFind = array.find(function (item) {
        if (item % x == 0) {
            console.log(item);
            return item;
        }
    });
    if (arrFind == undefined) {
        return undefined
    }
    return arrFind;
}

array = [1,3,4]
array = [12,2,5,7]
findDivisibleNum(array,7);
