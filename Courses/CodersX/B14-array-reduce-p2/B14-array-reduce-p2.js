var numbers = [1,2,3,4];

var sum = numbers.reduce(function(a,b){
    console.log(a, b)
    return a + b;
}, 0);

console.log(sum);

/**
 * arr.reduce(function(item1, item2){
 *  //calculation
 * return x
 * }, init);
 * 
 * Tạo thêm một bước ở ban đầu
 * Không có code vẫn chạy bình thường và kết quả ý hệt
 *  */

 var products = [
    { name: 'A', quantity: 2, unitPrice: 100, category: 'Phone' },
    { name: 'B', quantity: 1, unitPrice: 400 , category: 'Laptop'},
    { name: 'C', quantity: 5, unitPrice: 15 , category: 'Kitchen'}
];

var total = products.reduce(function(currentTotal, product){
    return currentTotal + product.quantity * product.unitPrice;
}, 0);

console.log(total)

// loop 1 currentTotal = 0, product[0];
// 0 + 2 * 10 = 20
// loop 2 currentTotal = 20, product[1];
// 20 + 3 * 20 = 20 + 60 = 80
// loop 3: currentTotal = 80, product[2];
// 80 + 5 * 15 = 80 + 80 = 160

var items = ['Toms', 'Bill', 'Kim']
// C1 :use reduce to make this result
// <Tom><Bill><Kim>
// console.log('<' + '>');
// C2: use map and join
var reduceItems = items.reduce(function(total,currentValue,index,arr){
  return total  + ('<' + currentValue + '>')
},'');
console.log(reduceItems)

// Given an array of arrays, flatten them into a single array

/**
 * Example: 
 * var arrays = [
 *    ["1", "2", "3"],
 *    [true],
 *    [4, 5, 6]
 *  ];
 * 
 * flatten(arrays) // ["1", "2", "3", true, 4, 5, 6];
 */

 function flatten(arr) {
    // viết code ở đây.
    reduceArr = arr.reduce(function(total,currentValue){
      return  total.concat(currentValue)
    },[]);
    return reduceArr
  }

// arr = [["1", "2", "3"], [true], [4, 5, 6] ]
// console.log(flatten(arr))

//   flatten([["1", "2", "3"], [true], [4, 5, 6] ])


//   ["1", "2", "3", true, 4, 5, 6]

// flatten([["1", "2", "3"], [true], [4, 5, false] ])


// ["1", "2", "3", true, 4, 5, false]


/**
 * Count the occurrences of each element inside an array using reduce
 * @params {array}
 * @return {object}
 * Example: 
 * countOccurrences(['a', 'b', 'c', 'b', 'a']) // { a: 2, b: 2, c: 1 };
}
*/

function countOccurrences(arr) {
    // viết code ở đây.
    var countArr = arr.reduce(function(total,currentValue){
      if (currentValue in total){
        total[currentValue]++;
      }
      else{
        total[currentValue] = 1
      }
      return total
    },{});
    return countArr
  }

arr1 = ['a', 'b', 'c', 'b', 'a']
console.log(countOccurrences(arr1))

//   countOccurrences(['a', 'b', 'c', 'b', 'a'])


//   { a: 2, b: 2, c: 1 }

// countOccurrences([1, 1, 2, 3, 2])


// { "1": 2, "2": 2, "3": 1 }

// countOccurrences(['a', 'b', 'x', 'b', 'a'])


// { a: 2, b: 2, x: 1 }