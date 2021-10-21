var url = "http://localhost:3000/todos";

var addBtn = document.getElementById("add-btn");
var htmlList = document.getElementById("todo-list");

// GET REQUEST
function getItems() {
  axios
    .get(url)
    .then((res) => render(res.data))
    .catch((err) => console.error(err));
}

// POST REQUEST
function addItem() {
  var input = document.getElementById("new-item");

  var newItem = {
    content: input.value,
  };
  
  axios.post(url, newItem).then(() => {
    input.value = '';
    getItems();
  });
}

// DELETE REQUEST
function deleteItem(event) {
  var button = event.target;
  var i = parseInt(button.dataset.id);

  axios.delete(url + '/' + i).then(() => {
    getItems();
  })
}

function render(items) {
  var todos = items.map(function (item) {
    return `<li>${item.content} <button data-id="${item.id}">Delete</button></li>`;
  });
  htmlList.innerHTML = todos.join("");
}

addBtn.addEventListener("click", addItem);
htmlList.addEventListener("click", deleteItem);
document.addEventListener("DOMContentLoaded", getItems);
