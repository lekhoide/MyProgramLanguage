// Object methods: khi bạn gán vào một object thì gọi là methods

var myDog = {
    weight: 5,
    name: "Tip",
    age: 9,
    bark: function(){ // anonymous function
        console.log("Gâu gâu, my name is",this.name) //undefined
    },
    eat: function(bone){
        return this.weight+=bone.weight
    }
}
console.log("Tip trước khi ăn",myDog.weight)
// Cho tip ăn xương
var bone = {weight:0.5}
myDog.eat(bone)

console.log("Tip sau khi ăn",myDog.weight)

function bark(){
    console.log("Gâu gâu gâu")
}
console.log(bark())




