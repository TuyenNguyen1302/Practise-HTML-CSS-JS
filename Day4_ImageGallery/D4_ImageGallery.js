var images = document.querySelectorAll('.image img');
var left = document.querySelector('.left');
var right = document.querySelector('.right');
var close = document.querySelector('.close');
var galleryImg = document.querySelector('.gallery-inner img');
var gallery = document.querySelector('.gallery');
// Khai báo vị trí ban đầu của ảnh là 0
var currentIndex = 0;
// Hàm hiển thị ảnh to lên màn hình
function showGallery(){
    if(currentIndex==0){
        left.classList.add('hide') // Khi đang ở bức ảnh đầu tiên -> icon bên trái mất đi (vì kh còn ảnh phía trước)
    }else{
        left.classList.remove('hide') // Ngược lại -> icon bên trái hiển thị để click lùi ảnh về trước
    }

    if(currentIndex == images.length - 1){
        right.classList.add('hide') // Khi đang ở bức ảnh cuối -> icon bên phải mất đi
    }else{
        right.classList.remove('hide') // Ngược lại -> icon bên phải hiển thị để click next ảnh
    }

    //display img
    galleryImg.src = images[currentIndex].src
    gallery.classList.add('show')
}
// Bắt sự kiện cho tất cả các ảnh khi được click vào
images.forEach((item, index)=>{
    item.addEventListener('click', function(){
        currentIndex = index
        showGallery()
    });
});
// Đóng ảnh đang phóng to đi
close.addEventListener('click', function(){
    gallery.classList.remove('show')
})
// Bắt sự kiện bàn phím nút ESC -> thoát ảnh phóng to
document.addEventListener('keydown', function(e){
    if(e.keyCode == 27){                            //27 = ESC ở bàn phím
        gallery.classList.remove('show')
    }
})
// Lùi về ảnh trước
left.addEventListener('click', function(){
    if(currentIndex > 0){
        currentIndex--
        showGallery()
    }
})
// Next ảnh tiếp theo
right.addEventListener('click', function(){
    if(currentIndex < images.length - 1){
        currentIndex++
        showGallery()
    }
})