// Dummy data untuk simulasi monitoring
let lampStatus = false; // Lampu off secara default

// Fungsi untuk toggle lampu
function toggleLamp() {
    lampStatus = !lampStatus;
    document.getElementById('lamp-status-text').innerText = lampStatus ? "ON" : "OFF";
    document.getElementById('lamp-status').style.backgroundColor = lampStatus ? "#d4edda" : "#f8d7da";
}

// Fungsi untuk update suhu dan kelembapan secara berkala
function updateSensorData() {
    // Simulasi suhu (random antara 20 - 35 °C)
    const temperature = (Math.random() * 15 + 20).toFixed(1);
    document.getElementById('temperature').innerText = temperature;

    // Simulasi kelembapan (random antara 40 - 80 %)
    const humidity = (Math.random() * 40 + 40).toFixed(1);
    document.getElementById('humidity').innerText = humidity;
}

// Jalankan updateSensorData setiap 5 detik
setInterval(updateSensorData, 5000);

// Jalankan pertama kali
updateSensorData();
toggleLamp();
