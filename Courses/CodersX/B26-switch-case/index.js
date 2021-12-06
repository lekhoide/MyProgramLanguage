// switch ... case
//
// Syntax:
// switch (expression) {
//     case value1:
//         do something;
//         break;
//     case value2:
//         do something;
//         break;
//     ...
//     default:
//         do something;
//         break;
// }

// Todo 1
/**
 * bronze, silver , gold, diamond
 * bronze: 2%
 * silver: 5%
 * gold: 8%
 * diamond: 10%
 */
var memberCard = {
    tier: 'gold'
}

function getTotal(price, card) {
    var discountRate;

    // if(card.tier === 'bronze') {
    //     discountRate = 0.02;
    // } else if (card.tier === 'silver') {
    //     discountRate = 0.05;
    // } else if (card.tier === 'gold') {
    //     discountRate = 0.08;
    // } else {
    //     discountRate = 0.1;
    // }

    switch (card.tier) {
        case 'bronze':
            discountRate = 0.02;
            break;
        case 'silver':
            discountRate = 0.05;
            break;
        case 'gold':
            discountRate = 0.08;
            break;
        case 'diamond':
            discountRate = 0.1;
            break;
        default:
            break;
    }

    return price * (1 - discountRate);
}

var total = getTotal(500000, memberCard);
console.log(total);

// Todo 2:
/**
 * red, green, orange
 */
var trafficLight = 'green';

function goOrNotInVietnam(lightValue) {
    switch (lightValue) {
        case 'green':
            console.log('go')
            break;
        case 'organe':
            console.log('slowy');
            break;
        case 'red':
            console.log('stop');
            break;
        default:
            break;
    }

}

goOrNotInVietnam(trafficLight);

// Todo 3:
/**
 * 1. List Students
 * 2. Create a new Student
 * 3. Save & Exit
 */

// Todo 4:
/**
 * Sử dụng switch case và map để chuyển đổi array các chữ thành các số tương ứng theo quy tắc:
 * 'A' hoặc 'a' -> 1
 * 'B' hoặc 'b' -> 2
 *  còn lại -> 0
 */

function transform(arr) {
    // your code here
    var newArr = []
    var change = arr.map(function (x) {
        switch (x) {
            case 'A':
            case 'a':
                newArr.push(1);
                break;
            case 'B':
            case 'b':
                newArr.push(2);
                break;
            default:
                newArr.push(0);
                break;
        }
    });
    return newArr;
}

arr = ['A', 'b', 'a', 'B', 'd'];
var result = transform(arr);
console.log(result);