var imgFeature = document.querySelector('.img-feature');
var listImg = document.querySelectorAll('.list-image img');
var btnLeft = document.querySelector('.left');
var btnRight = document.querySelector('.right');

var currentIndex = 0;

//Hàm hiển thị ảnh lên ImgFeature
function updateImageByIndex(index) {
    //Xóa khung bg của div chứa image trong list image
    document.querySelectorAll('.list-image div').forEach(item => {
        item.classList.remove('active');
    })

    //Lấy vị trí ảnh trong listImg -> hiển thị lên ImgFeature
    currentIndex = index;
    imgFeature.src = listImg[index].getAttribute('src');

    //Thêm khung bg thẻ div chứa img[index]-> biết ảnh nào đang được chọn
    listImg[index].parentElement.classList.add('active');
}
// sự kiện vào từng ảnh trong listImg -> hiển thị lên imgFeature có hiệu ứng opacity
listImg.forEach((imgElement, index) => {
    imgElement.addEventListener('click', function (e) {

        imgFeature.style.opacity = '0';

        setTimeout(() => {
            // imgFeature.src = e.target.getAttribute('src');
            updateImageByIndex(index);
            imgFeature.style.opacity = '1';
        }, 300);

    })
})
//sự kiện click chuyển sang ảnh bên trái có hiệu ứng slide
btnLeft.addEventListener('click', function () {

    imgFeature.style.animation = '';

    if (currentIndex == 0) {
        currentIndex = listImg.length - 1;
    } else {
        currentIndex--;
    }

    setTimeout(() => {
        updateImageByIndex(currentIndex);
        imgFeature.style.animation = 'slideLeft 0.5s ease-in-out forwards';
    }, 100)
})
//sự kiện click chuyển sang ảnh bên phải có hiệu ứng slide
btnRight.addEventListener('click', function () {

    imgFeature.style.animation = '';

    if (currentIndex == listImg.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }

    setTimeout(() => {
        updateImageByIndex(currentIndex);
        imgFeature.style.animation = 'slideRight 0.5s ease-in-out forwards';
    }, 100)

})