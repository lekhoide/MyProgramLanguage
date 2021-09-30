//Array Reduce: giảm số lượng
/*
arr.reduce(function(item1, item2){
    //calculation
    return x;
});
*/

var numbers = [1, 2, 3, 4];
numbers.reduce(function (a, b) {
    console.log(a, b)
    return a + b;
});

//BÀI TẬP GIỎ HÀNG
var oders = [
    { name: 'A', quantity: 2, unitPrice: 100 },
    { name: 'B', quantity: 1, unitPrice: 400 },
    { name: 'C', quantity: 5, unitPrice: 15 },
];
//DÙNG REDUCE ĐỂ TÍNH TỔNG ĐƠN HÀNG

// NHÁP
// (A: 2*100 = 200) + (B: 1*400 = 400) = 600
// 600 + (C: 5*15 = 75) = 675

//--C0
// function sumOders(){
//     var sumOders = 0
//     for (var i = 0; i < oders.length; i++) {
//         sumOders += oders[i].quantity * oders[i].unitPrice
//     }
//     return sumOders
// }
// console.log(sumOders())
//--C1
// function sumOders(oders){
//     return oders.map(x => x.quantity*x.unitPrice).reduce((a,b)=>a+b)
// }
//--C2
// function sumOders(oders){
//     var a = oders.map(function(x){
//         var b = x.quantity * x.unitPrice
//         return b
//     })
//     var c = a.reduce(function(a,b){
//         return a + b
//     })
//     return c
// }
// console.log(sumOders(oders))


// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
var wishlist = [{
    title: "Tesla Model S",
    price: 90000
},
{
    title: "4 carat diamond ring",
    price: 45000
},
{
    title: "Fancy hacky Sack",
    price: 5
},
{
    title: "Gold fidgit spinner",
    price: 2000
},
{
    title: "A second Tesla Model S",
    price: 90000
}
];

// --C1
// var sumOders = 0
// for (var i = 0 ; i < wishlist.length ; i++){
//     sumOders += wishlist[i].price
// }
// console.log(sumOders)
// --C2
// function shoppingSpree(wishlist) {
//     return wishlist.map(x => x.price).reduce((a,b) => a+b);
// }
// console.log(shoppingSpree(wishlist))

// Given an array of all your wishlist items, returns an array of titles

var wishlist1 = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

// function arrayTitle(wishlist1) {
//     var get_title_wishlist = wishlist1.map(function (x) {
//         var title_wishlist = x.title
//         return title_wishlist
//     });
//     return get_title_wishlist
// }
// console.log(arrayTitle(wishlist1))

// Turn an array of voter objects into a count of how many people voted
var voters = [{
    name: 'Bob',
    age: 30,
    voted: true
  },
  {
    name: 'Jake',
    age: 32,
    voted: true
  },
  {
    name: 'Kate',
    age: 25,
    voted: false
  },
  {
    name: 'Sam',
    age: 20,
    voted: false
  },
  {
    name: 'Phil',
    age: 21,
    voted: true
  },
  {
    name: 'Ed',
    age: 55,
    voted: true
  },
  {
    name: 'Tami',
    age: 54,
    voted: true
  },
  {
    name: 'Mary',
    age: 31,
    voted: false
  },
  {
    name: 'Becky',
    age: 43,
    voted: false
  },
  {
    name: 'Joey',
    age: 41,
    voted: true
  },
  {
    name: 'Jeff',
    age: 30,
    voted: true
  },
  {
    name: 'Zack',
    age: 19,
    voted: false
  }
];

function totalVotes(arr) {
  var get_voted = arr.map(function(x) {
    var voted = x.voted
    if(voted == true){
        console.log(voted)
        return voted
    }
    return null
  });
  var voters_obj = get_voted.reduce(function(a, b) {
    return a + b
  })
  console.log(voters_obj)
  return voters_obj
}

// totalVotes(voters)
