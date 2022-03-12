var content = document.querySelector('.content');
var input = document.querySelector('.content input');
var btn = document.querySelector('.removeAll');

var tags = ['ảo ma lazada', 'bánh đa', 'bánh chuối'];

//Hàm khi nhập text trong input -> nhấn Enter -> hiện text lên tags (value cuae t)
function render() {
    content.innerHTML = ''; //Ban đầu cho thẻ div .content rỗng
    for(let i = 0; i < tags.length; i++){
        const tag = tags[i];
        //Thêm tags từ phần tử 0 vào thẻ t và nút close
        content.innerHTML += `<li>${tag}
                                <i class="fa-solid fa-xmark" onclick="removeTag(${i})">
                                </li>`;
    }
    //Thêm input text vào sau tags và focus vào input
    content.appendChild(input);
    input.focus();
}
render();

// Bắt sự kiện bàn phím 'keydown'
// Nhấn phím Enter -> gửi text trong input lên tags
input.addEventListener('keydown', function(event){
    if(event.key == 'Enter'){
        if(event.key != ''){
            tags.push(input.value.trim()); //trim(): loại bỏ khoảng trắng thừa 
            input.value = '';
            render();
        }
    }
})

// Hàm xóa từng phần tử trong tags
// splice(): phương thức thêm/xóa phần tử trong mảng
// splice(index, howmany, item1, item2,...) 
// -> index: tại vị trí thứ mấy
// -> howmany: xóa bn phần tử (0 là giữ nguyên)
// -> index1, index2: sau vị trí index thêm item vào mảng
function removeTag(index){
    tags.splice(index, 1); 
    render();
}

// Bắt sự kiện nút btn Remove All Tags
btn.addEventListener('click', function(){
    tags = [];
    render();
})