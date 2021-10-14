var todoList;
var storageKey = 'todoList';
var dataString = localStorage.getItem(storageKey);

if (dataString) {
    todoList = JSON.parse(dataString);
} else {
    todoList = [];
}

var addBtn = document.getElementById('add-btn');
addBtn.addEventListener('click', addItem);

function addItem() {
    // get value of the input
    var input = document.getElementById('new-item');
    // add to todoList array
    todoList.push(input.value);
    // re-render
    render();
    // clear input
    input.value = '';
    // store date
    localStorage.setItem(storageKey, JSON.stringify(todoList));
}

function render() {
    var htmlList = document.getElementById('todo-list');
    var content = todoList.map(function (x) {
        return '<li>' + x + "<button id='delete-btn'>" + 'Delete' + '</button>' + '</li>';
    });
    htmlList.innerHTML = content.join('');
}

function deleteItem() {
    var buttonList = document.querySelectorAll('button#delete-btn');
    for (var i = 0; i < buttonList.length; i++) {
        buttonList[i].addEventListener('click', function () {
            var splitString = this.parentNode.innerText.split('');
            for(var i = 0 ; i < splitString.length ; i++) {
                if (splitString[i] === 'D') {
                    splitString.splice(i, 6);
                    break;
                }
            }
            var joinString = splitString.join('');
            for(var i = 0 ; i < todoList.length ; i++) {
                if(todoList[i] === joinString) {
                    todoList.splice(i, 1)
                }
            }
            localStorage.setItem(storageKey, JSON.stringify(todoList));
            this.parentNode.remove();
        })
    }
}

render();
deleteItem();