//  //Карта при помощи Leaflet API с конкретным местом положения
// let center = [50.466048, 30.515125];

// // Создаём карту
// let map2 = L.map('map2').setView(center, 20);

// // Настраиваем OSM
// L.tileLayer(
//     'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         maxZoom: 18
//     }).addTo(map2);

// // добавляем маркер в указанном месте
// L.marker(center).addTo(map2);

//  //Карта при помощи Leaflet API с текущим местом положения
function success(position) {
    let map2, marker,
        latitude = position.coords.latitude,
        longitude = position.coords.longitude;

    // Получаем карту с использованием leaflet
    map2 = L.map('map2').setView([latitude, longitude], 13);

    L.tileLayer(
        'https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18
        }).addTo(map2);


    // Маркер с использованием leaflet
    marker = L.marker([latitude, longitude]).addTo(map2);
}

function error() {
    alert('Получить текущую позицию не удалось. Пожалуйста, разрешите доступ к геолокации.');
}
navigator.geolocation.getCurrentPosition(success, error);