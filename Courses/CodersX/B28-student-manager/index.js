// Requirements:
// A student management app that is able to:
// - Show current student list
// - Add new students

// 1. Show all students
// 2. Create a new student
// 3. Save & Exit

var loop = true;
var fs = require('fs');
var readlineSync = require('readline-sync');

var students = [];

function loadData() {
    var fileContent = fs.readFileSync('./data.json');
    students = JSON.parse(fileContent);
}

function showStudents() {
    for (var student of students) {
        console.log(student);
    }
}

function showCreateStudent() {
    var ten = readlineSync.question('Ten: ');
    var tuoi = readlineSync.question('Tuoi: ');
    var lop = readlineSync.question('Lop: ');
    var student = {
        name: ten,
        age: parseInt(tuoi),
        lop: lop
    };
    students.push(student);
}

function saveAndExit() {
    var content = JSON.stringify(students);
    fs.writeFileSync('./data.json', content, { encoding: 'utf8' });
    loop = false;
    console.log('Save success. Goodbye!')
}

function showMenu() {
    var options = [
        'Show all students',
        'Create a new Student',
        'Save & Exit'
    ];
    while (loop == true) {
        var chooseOption = readlineSync.keyInSelect(options, 'Choose option', null, { cancel: 'No $<lastItem>' });
        switch (chooseOption) {
            case 0:
                showStudents();
                break;
            case 1:
                showCreateStudent();
                break;
            case 2:
                saveAndExit();
                break;
            case -1:
                loop = false;
                console.log('Goodbye!');
                break;
            default:
                console.log('Wrong option');
                break;
        }
    }
}

function main() {
    loadData();
    showMenu();
}

main();