var x = document.getElementById("moto1");
var y = document.getElementById("moto2");
var z = document.getElementById("moto3");
var t = document.getElementById("title");
var body = document.querySelector("body");
var btn = document.querySelectorAll("button");
var color = document.querySelectorAll(".card_color span");

var currentIndex = 0;
color.forEach((item, index) => {
    currentIndex = index;
    item.addEventListener('click', function () {
        console.log(color[index]);
        console.log(index);
        switch (index) {
            case 0:
                x.style.display = "block";
                y.style.display = "none";
                z.style.display = "none";
                t.style.color = "#D36B13";
                btn[0].style.background = "#D36B13";
                btn[1].style.background = "#D36B13";
                body.style.background = "linear-gradient(to right, #c9b626, #c57b46)";
                break;
            case 1:
                x.style.display = "none";
                y.style.display = "block";
                z.style.display = "none";
                t.style.color = "#346bc3"
                btn[0].style.background = "#346bc3";
                btn[1].style.background = "#346bc3";
                body.style.background = "linear-gradient(to right, #373B44, #4286f4)";
                break;
            case 2:
                x.style.display = "none";
                y.style.display = "none";
                z.style.display = "block"; t.style.color = "#525252";
                body.style.background = "linear-gradient(to right, #525252, #243B55)";
                btn[0].style.background = "#525252";
                btn[1].style.background = "#525252";
                break;
        }
    })
});