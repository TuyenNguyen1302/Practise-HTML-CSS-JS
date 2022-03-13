$(document).ready(function () {
    $(".image-slider").slick({
        slidesToShow: 4,
        slidesToScroll: 1, //move 1 lần ? ảnh (default: 1)
        infinite: true, //lặp lại vô tận -> tới cuối quay lại đầu
        autoplay: true,
        autoplaySpeed: 1000, // 2s tự động move

        // Custom nút prev, next
        arrows: true, //xuất hiện nút prev, next
        prevArrow: "<button type='button' class='slick-prev slick-arrow'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next slick-arrow'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",

        dots: true, //dấu chấm ở dưới (default: number)

        draggable: false, // dùng chuột -> move ảnh

        responsive: [
            {
                breakpoint: 1025, // độ rộng thiết bị
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
})