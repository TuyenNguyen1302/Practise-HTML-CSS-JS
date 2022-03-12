var upload = document.querySelector('#myPicture');
var preview = document.querySelector('.preview');
var error = document.querySelector('.error');

upload.addEventListener('change', function (e) {
    // console.log(upload.files);
    var file = upload.files[0];

    if (!file) {
        return;
    } 

    // if (!file.name.endsWith('.jpg')) {
    //     console.log(file.name);
    //     error.innerHTML = 'Error Format';
    // }else if (!file.name.endsWith('.png')) {
    //     console.log(file.name);
    //     error.innerHTML = 'Error Format';
    // }else{
    //     console.log('ad');
    //     error.innerHTML = '';
    // }

    if (!file.size / (1024 * 1024) > 5) {
        error.innerHTML = 'Image over 5MB';
        return;
    } 
    var img = document.createElement('img');
    img.src = URL.createObjectURL(file);
    preview.appendChild(img);
})