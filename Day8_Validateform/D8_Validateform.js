var username = document.querySelector('#username');
var email = document.querySelector('#email');
var password = document.querySelector('#password');
var confirmPass = document.querySelector('#confirm-password');
var form = document.querySelector('form');
var input = document.querySelector('form input');

// Hàm hiển thị khi lỗi input
// -> thẻ small: dòng chữ báo bỗi
// ->thẻ span: border-bottom red lỗi
function showError(input, message) {
    let parent = input.parentElement;
    let small = parent.querySelector('small');
    parent.classList.add('error');
    small.innerText = message;
}

// Hàm hiển thị thành công -> thẻ small, span báo lỗi biến mất
function showSuccess(input, message) {
    let parent = input.parentElement
    let small = parent.querySelector('small');
    parent.classList.remove('error');
    small.innerText = '';
}

// Hàm kiểm tra input đó có để trống hay không?
// Duyệt qua hết tất cả phần tử trong form
// giá trị của input bị rỗng -> báo lỗi
function checkEmptyError(listInput) {
    let isEmptyError = false; // Để check lỗi tất cả các input

    listInput.forEach(input => {
        input.value = input.value.trim();

        if (!input.value) {
            isEmptyError = true; // 1 input trống -> true (có lỗi)
            // showError(input, 'Không được để trống!');
            showError(input, `Bắt buộc nhập ${getFieldName(input)}`);
        } else {
            showSuccess(input);
        }
    });

    return isEmptyError;
}

// Hàm kiểm tra email hợp lệ không? 
// Dùng regexEmail đã được cộng đồng mạng chuẩn hóa
function checkEmailError(input) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    input.value = input.value.trim();
    let isEmailError = !regexEmail.test(input.value);

    if (regexEmail.test(input.value)) {
        showSuccess(input);
    } else {
        showError(input, 'Email không hợp lệ!');
    }

    return isEmailError;
}

// Hàm kiểm tra độ dài của password
function checkLengthError(input, min, max) {
    input.value = input.value.trim();

    if (input.value.length < min) {
        showError(input, `Phải có ít nhất ${min} ký tự!`);
        return true;
    }
    if (input.value.length > max) {
        showError(input, `Chỉ được nhiều nhất ${max} ký tự!`);
        return true;
    }

    showSuccess(input);
    return false;
}

// Hàm kiểm tra password nhập lại có khớp không?
function checkMatchPassError(passwordInput, cPassInput) {
    if (passwordInput.value !== cPassInput.value) {
        showError(cPassInput, 'Password không trùng nhau!')
        return true;
    }
    return false;
}

// Hàm lấy tên id của input để -> báo lỗi ở input trống
function getFieldName(input) {
	return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Bắt sự kiện click submit
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Khi click vào btn submit kh bị load lại trang
    
    if (!checkEmptyError([username, email, password, confirmPass])) {
        checkEmailError(email);
        checkLengthError(password, 3, 10);
        checkMatchPassError(password, confirmPass);
    }
})