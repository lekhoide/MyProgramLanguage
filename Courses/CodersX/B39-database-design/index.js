// database design
var classes = [
    {
        id: 0,
        name: '1A',
        teacher: 0
    },
    {
        id: 1,
        name: '2A',
        teacher: 1
    },
    {
        id: 2,
        name: '3A',
        teacher: 2
    },
    {
        id: 3,
        name: '4A',
        teacher: 3
    },
    {
        id: 4,
        name: '5A',
        teacher: 4
    }
];

var teachers = [
    { id: 0, name: 'Quynh', age: 30 },
    { id: 1, name: 'Chinh', age: 30 },
    { id: 2, name: 'Nguyet', age: 30 },
    { id: 3, name: 'Huong', age: 30 },
    { id: 4, name: 'Hai', age: 50 }
];

var students = [
    { id: 0, name: 'Minh', height: '120', class: 0 },
    { id: 1, name: 'Minh', height: '120', class: 0 },
    { id: 2, name: 'Minh', height: '120', class: 0 },
    { id: 3, name: 'Minh', height: '120', class: 1 }
]

function getStudentInClass(className) {
    var classObject = classes.find(function(x){
        return x.name === className;
    });

    var studentInClass = students.filter(function(student){
        return student.class === classObject.id;
    })

    return studentInClass;
}

var studentInClass = getStudentInClass('2A');
console.log(studentInClass);

// Design database for a e-magazine website
// Chuyên mục, bài báo, bài báo nằm trong chuyên mục, tác giả bài báo

// Design database for a e-commerce
// Người mua, sản phẩm, danh mục

// using node table to make the previous app look nicer