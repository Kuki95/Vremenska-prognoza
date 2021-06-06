const apiKey = "b6bb58313643481fa7b152504210306"

const wheaterKey = "http://api.weatherapi.com/v1/current.json?key="

function wheater(city) {
    var xhr = new XMLHttpRequest();
    var url = wheaterKey + apiKey + '&q=' + city + '&aqi=no'
    console.log(url);
    xhr.open('GET', url)
    xhr.onreadystatechange = function () {
        if (this.readyState === 4) {
            let response = JSON.parse(this.response)
            console.log(response);
            document.getElementById('temperatura').innerHTML = 'Temperatura: ' + response.current.temp_c + '°C'
            document.getElementById('mjesto').innerHTML = 'Grad: ' + response.location.name
            document.getElementById('slika').src = response.current.condition.icon

        }
    }
    xhr.send()
}


document.getElementById('btn').addEventListener('click', function () {
    let city = document.getElementById('grad').value;
    wheater(city)
})