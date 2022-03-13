var animationElement = document.querySelectorAll('.show-on-scroll');

function showOnScroll(element) {
    var hrects = element.getClientRects()[0];
    var height = window.innerHeight;

    console.log(hrects);
    //kiểm tra element có nằm trong màn hình hiển thị client thấy hay kh?
    if (!(hrects.bottom < 0 || hrects.top > height)) {
        //nằm bên trong -> hiển thị 
        element.classList.add('start');
    } else {
        //nằm bên ngoài -> mất
        element.classList.remove('start');
    }
}

window.onscroll = function () {
    animationElement.forEach(e => {
        showOnScroll(e);
    });
}