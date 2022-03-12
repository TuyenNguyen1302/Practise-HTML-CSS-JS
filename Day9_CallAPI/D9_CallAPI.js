var search = document.querySelector('.search');
var city = document.querySelector('.city');
var country = document.querySelector('.country');
var value = document.querySelector('.value span');
var shortDesc = document.querySelector('.short-desc');
var visibility = document.querySelector('.visibility span');
var wind = document.querySelector('.wind span');
var sun = document.querySelector('.sun span');
var time = document.querySelector('.time');
var content = document.querySelector('.content');
var body = document.querySelector('body');

async function changeWeatherUI(capitalSearch) {
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${capitalSearch}&appid=d78fd1588e1b7c0c2813576ba183a667`

    let data = await fetch(apiURL).then(res => res.json());
    if (data.cod == 200) {
        content.classList.remove('hide');
        console.log(data);
        city.innerText = data.name;
        country.innerText = data.sys.country;
        visibility.innerText = data.visibility + ' (m)';
        wind.innerText = data.wind.speed + ' (m/s)';
        sun.innerText = data.main.humidity + ' (%)';
        let temp = Math.round(data.main.temp - 273.15);
        value.innerText = temp;
        shortDesc.innerText = data.weather[0] ? data.weather[0].main : ''; //check fault thằng đầu lỗi -> thằng sau
        time.innerText = new Date().toLocaleString('vi');

        body.setAttribute('class', 'hot');
        if (temp <= 25) {
            body.setAttribute('class', 'cool');
        }
        if (temp <= 22) {
            body.setAttribute('class', 'warm');
        }
        if (temp <= 19) {
            body.setAttribute('class', 'cold');
        }

    } else {
        console.log('not found');
        content.classList.add('hide');
    }
}
// async , await -> đồng bộ

search.addEventListener('keypress', function (e) {
    if (e.code === 'Enter') {
        let capitalSearch = search.value.trim();
        changeWeatherUI(capitalSearch);
    }
})
changeWeatherUI('my tho');