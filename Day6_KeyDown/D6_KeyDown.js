var eKey = document.querySelector('.card.key p:last-child');
var eLocation = document.querySelector('.card.location p:last-child');
var eWhich = document.querySelector('.card.which p:last-child');
var eCode = document.querySelector('.card.code p:last-child');
var btnAlert = document.querySelector('.alert');
var box = document.querySelector('.box');
var result = document.querySelector('.result');

// keydown: method bắt sự kiện bàn phím
document.addEventListener('keydown', e=>{
    btnAlert.classList.add('hide');
    box.classList.remove('hide');
    eKey.innerText = e.key;
    eLocation.innerText = e.location;
    eWhich.innerText = e.which;
    eCode.innerText = e.code;
    result.innerHTML = e.code;
})