var input = document.querySelector('input');
var button = document.querySelector('button');
var form = document.querySelector('form');
var todos = document.querySelector('.todos');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // tránh load lại trang, xóa đi các thuộc tính ban đầu
    let val = input.value.trim();

    if (val) {
        addTodoElement(
            {
                text: val
            })
        saveTodoList();
        // addTodoElement(
        //     {
        //     text: val,
        //     status: 'completed'
        // },
        // {
        //     text: val
        // })
    }

    input.value = ''; //mỗi lần submit xong -> giá trị trong input sẽ rỗng -> user nhập
})
//createElement -> tạo thẻ DOM
function addTodoElement(todo) {
    // 1 Object có
    // text:
    // status:
    let li = document.createElement('li');

    li.innerHTML = `<span>${todo.text}</span>
                    <i class="fa-solid fa-trash"></i>` //DOM

    if (todo.status === 'completed') {
        li.setAttribute('class', 'completed');
    }

    // tạo sự kiện click vào thẻ li -> khi todo đó hoàn thành/ chưa
    li.addEventListener('click', function () {
        this.classList.toggle('completed');
        saveTodoList();
    })
    // tạo sự kiện click vào thẻ i là icon thùng rác -> khi xóa todo
    li.querySelector('i').addEventListener('click', function () {
        this.parentElement.remove();
        saveTodoList();
    })

    todos.appendChild(li);
}
// Hàm lưu các todos vào Local Storage tạm thời của web
//JSON.parse -> xem value string
function saveTodoList() {
    let todoList = document.querySelectorAll('li');
    console.log(todoList);
    let todoStorage = [];
    todoList.forEach(function (item) {
        let text = item.querySelector('span').innerText;
        let status = item.getAttribute('class');

        todoStorage.push({
            text,
            status
        })
    })
    localStorage.setItem('todoList', JSON.stringify(todoStorage));
}

function init() {
    let data = JSON.parse(localStorage.getItem('todoList'));
    data.forEach(function (item) {
        addTodoElement(item);
    })
}

init();