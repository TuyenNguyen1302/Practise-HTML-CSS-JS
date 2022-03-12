// Tao varible
var btnOpen = document.querySelector('.open-modal-btn');
var modal = document.querySelector('.modal');
var iconClose = document.querySelector('.modal-header i');
var btnClose = document.querySelector('.modal-footer button');

// toggel mở -> tắt; tắt -> mở
function toggleModal(e){
    console.log(e.target); //debug khi gặp vấn đề xem console trogn inspect
    modal.classList.toggle('hidden');
}
// Bat event -> click open Modal => Modal
btnOpen.addEventListener('click', toggleModal);
iconClose.addEventListener('click', toggleModal);
btnClose.addEventListener('click', toggleModal);

modal.addEventListener('click', (e) => {
    if(e.target == e.currentTarget) toggleModal(e);
});