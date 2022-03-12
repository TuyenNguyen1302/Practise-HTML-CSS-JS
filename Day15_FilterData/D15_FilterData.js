fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        var products = document.querySelector('.products');
        products.innerHTML = '';
        data.forEach(item => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('product');
            newProduct.innerHTML = `<img src="${item.image}" alt="No Image">
                            <div class="info">
                                <div class="name">${item.title}</div>
                                <div class="price">${item.price}</div>
                            </div>`;

            products.appendChild(newProduct);
        })
    })

var searchInput = document.querySelector('.search input');
searchInput.addEventListener('input', function(e){
    // console.log(e.target);
    // console.log(this);

    let txtSearch = e.target.value.trim().toLowerCase();
    let listProducts = document.querySelectorAll('.product');
    listProducts.forEach(item=>{
        //item gồm ảnh, title, price
        // innerText lấy giá trị của ảnh, title, price
        // toLowerCase() không phân biệt hoa thường
        if(item.innerText.toLowerCase().includes(txtSearch)){
            item.classList.remove('hide');
        }else{
            item.classList.add('hide');
        }
    })
})


// var mockData = [
//     {
//         img: 'image/1.png',
//         name: 'Pancake',
//         price: '$10'
//     },
//     {
//         img: 'image/2.png',
//         name: 'Pancake',
//         price: '$9'
//     },
//     {
//         img: 'image/3.png',
//         name: 'Pancake',
//         price: '$13'
//     },
//     {
//         img: 'image/4.png',
//         name: 'Pancake',
//         price: '$15'
//     },
//     {
//         img: 'image/5.png',
//         name: 'Pancake',
//         price: '$8'
//     },
//     {
//         img: 'image/6.png',
//         name: 'Pancake',
//         price: '$11'
//     }
// ];

// var products = document.querySelector('.products');

// // Khởi tạo data
// products.innerHTML = '';
// mockData.forEach(item => {
//     let newProduct = document.createElement('div');
//     newProduct.classList.add('product');
//     newProduct.innerHTML = `<img src="${item.img}" alt="No Image">
//                             <div class="info">
//                                 <div class="name">${item.name}</div>
//                                 <div class="price">${item.price}</div>
//                             </div>`;

//     products.appendChild(newProduct);
// })