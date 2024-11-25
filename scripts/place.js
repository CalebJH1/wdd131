const windSpeed = document.getElementById('wind-speed').textContent.split(" ")[0];
const temperature = document.getElementById('temperature').textContent.split(" ")[0];

const windChill = calculateWindChill(windSpeed, temperature);

document.getElementById('wind-chill').textContent = windChill;

function calculateWindChill(windSpeed, temperature) {
    if (windSpeed > 4.8 && temperature <= 10) {
        const windChill = 13.21 + .6215 * temperature - 11.37 * windSpeed ** .16 + .3965 * temperature * windSpeed ** .16;
        return `${Math.round(windChill * 10) / 10} ℃`;
    } else {
        return 'N/A';
    }
}