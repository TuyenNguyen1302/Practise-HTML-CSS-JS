var btnSuccess = document.querySelector('.success');
var btnWarn = document.querySelector('.warning');
var btnError = document.querySelector('.error');

btnSuccess.addEventListener('click', function () {
    createToast('success');
})

btnWarn.addEventListener('click', function () {
    createToast('warning');
})

btnError.addEventListener('click', function () {
    createToast('error');
})


function createToast(status) {
    let templateInner = `<i class="fa-solid fa-circle-check"></i>
                        <span>This is success measage</span>`;

    switch (status) {
        case 'success':
            templateInner = `<i class="fa-solid fa-circle-check"></i>
                            <span>This is success measage</span>`;
            break;
        case 'warning':
            templateInner = `<i class="fa-solid fa-circle-exclamation"></i>
                            <span>This is warning measage</span>`;
            break;
        case 'error':
            templateInner = ` <i class="fa-solid fa-triangle-exclamation"></i>
                            <span>This is error measage</span>`;
            break;
    }

    var toast = document.createElement('div'); //tao the html
    toast.classList.add('toast'); // thêm class='toast' cho thẻ div và có định dạng css
    toast.classList.add(status);

    toast.innerHTML = `${templateInner}
                    <span class="count-down"></span>`;

    var toasts = document.getElementById('toasts');
    toasts.appendChild(toast);
// Nhảy lên
    setTimeout(function(){
        toast.remove();
    }, 2000)
}