let map = L.map('map').setView([16.433, 82.312], 11);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19
}).addTo(map);

let counter = 1;

function simulateSOS() {

    // Fake fisherman location
    let lat = 16.40 + Math.random() * 0.05;
    let lon = 82.30 + Math.random() * 0.05;

    let battery = Math.floor(Math.random() * (100 - 25) + 25);
    let time = new Date().toLocaleTimeString();

    // Create marker on map
    L.marker([lat, lon]).addTo(map)
        .bindPopup(`<b>SOS Alert #${counter}</b><br>
                    Battery: ${battery}%<br>
                    Time: ${time}`)
        .openPopup();

    // Add to log
    let list = document.getElementById("alertList");
    let item = document.createElement("li");
    item.innerHTML = `
        <b>Alert ${counter}</b><br>
        📍 Location: ${lat.toFixed(5)}, ${lon.toFixed(5)}<br>
        🔋 Battery: ${battery}%<br>
        🕒 Time: ${time}<br>
        📡 Status: Delivered via LoRa mesh → Gateway → Cloud
    `;
    list.prepend(item);

    counter++;
}
