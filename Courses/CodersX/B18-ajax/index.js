var url = 'http://localhost:8000/db.json';
var fs

// GET REQUEST
function getTodos() {
    axios
        .get(url, {
            params: {
                _limit: 5
            },
            timeout: 5000
        })
        .then(function (res) {
            var todos = res.data.todos;
            showOutPut(todos);
        })
        .catch(err => console.log(err));
}

// POST REQUEST
function addTodo() {
    var input = document.getElementById('new-item');

    axios
        .get(url)
        .then(function (res) {
            var todos = res.data.todos;
            todos.push({id: 4, content: input.value})
            showOutPut(todos);
            input.value = ''
        })
        .catch(err => console.log(err))
}

// PUT/PATCH REQUEST
function updateTodo(items) {
    var htmlList = document.getElementById('todo-list');
    var content = items.map(function (item) {
        return '<li>' + item.content + '</li>';
    });
    htmlList.innerHTML = content.join('');
}

// Show output in browser
function showOutPut(todos) {
    var list = document.getElementById('todo-list');
    var arrList = todos.map(function (todo) {
        return `<li> ${JSON.stringify(todo.id)} - ${JSON.stringify(todo.content)} </li>`
    })
    list.innerHTML = arrList.join('');
}

// Event listeners
document.getElementById('get-btn').addEventListener('click', getTodos)
document.getElementById('add-btn').addEventListener('click', addTodo)
document.getElementById('update-btn').addEventListener('click', updateTodo)