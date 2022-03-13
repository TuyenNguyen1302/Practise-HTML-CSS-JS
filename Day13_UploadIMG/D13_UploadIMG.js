var upload = document.querySelector('#myPicture');
var preview = document.querySelector('.preview');
var error = document.querySelector('.error');

upload.addEventListener('change', function () {
    var file = upload.files[0];

    if (!file) {
        return;
    } 
    // kiểm tra thuộc tính loại của tệp có bắt đầu bằng chuỗi 'image/' 
    if (!file.type.startsWith('image/'))
    { 
        error.innerHTML = 'Error Format';
    }else{
        error.innerHTML = '';
    }
    // kiểm tra kích thước tệp
    if (!file.size / (1024 * 1024) > 5) {
        error.innerHTML = 'Image over 5MB';
        return;
    } 

    var img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    preview.appendChild(img);
})