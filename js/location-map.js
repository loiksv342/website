const map = L.map('map').setView([51.887195165267684, 20.86018556724497], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// dodawanie pinezki i etykiety Amis
const marker = L.marker([51.887195165267684, 20.86018556724497]).addTo(map);
marker.bindPopup("Amis Piotr Ryński <br> Fabryczna 1A 05-600 Grójec").openPopup();
