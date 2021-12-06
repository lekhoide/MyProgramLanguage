// Todo JSON object
// 1. stringify - Convert an object to a JSON string
// 2. parse - Convert a JSON string to an object
// var myDog = { new: 'Milu', age: 1, dead: false };
// var myDogString = JSON.stringify(myDog);

// var myCatString = '{"name": "Tom", "age": 2, "dead": true}';
// var myCat = JSON.parse(myCatString)
// console.log(myCat);

// Todo Exercise
// 1. Show all students
// 2. Create a new Student
// 3. Save & Exit
// > 1.
// Save to ./data.json => fs.readFileSync, JSON.parse
// > 2.
// > Your name?
// > Your age?
// > Your class?
// > 3.

var arr = [];
var loop = true
var fs = require('fs');
var Student = require('./student');
var readlineSync = require('readline-sync');

var items = [
    'Show all students',
    'Create a new Student',
    'Save & Exit'
];

while (loop == true) {
    var index = readlineSync.keyInSelect(items, null, {cancel: 'No $<lastItem>'});
    var docFile = fs.readFileSync('./data.json')
    var objFile = JSON.parse(docFile);
    switch (index >= -1) {
        case index == 0:
            console.log(objFile);
            break;
        case index == 1:
            var ten = readlineSync.question("Your name: ");
            var tuoi = parseInt(readlineSync.question('Your age: '));
            while (isNaN(tuoi)) {
                console.log('Tuổi không phải là số. Mời nhập lại!!')
                tuoi = parseInt(readlineSync.question('Your age: '));
            }
            var lop = readlineSync.question('Your class: ');
            var student = JSON.parse(JSON.stringify(new Student(ten, tuoi, lop)));
            arr.push(student);
            break;
        case index == 2:
            objFile.push(arr);
            var stringFile = JSON.stringify(objFile);
            fs.writeFileSync('D:/Projects/MyProgramLanguage/Courses/CodersX/B22-json/data.json', stringFile);
            loop = false;
            console.log('Save success!');
            break;
        case index == -1:
            loop = false;
            console.log('Goodbye');
            break;
        default:
            break;
    }
}

