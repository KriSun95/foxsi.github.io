
const now = new Date();
const y = now.getFullYear();
const m = String(now.getMonth() + 1).padStart(2, '0');
const month = now.toLocaleDateString('en-US', { month: 'long' });
const d = String(now.getDate()).padStart(2, '0');
const day = getOrdinal(d);
display_date = `${y}/${m}/${d}`;

function getOrdinal(day) {
    if (day > 3 && day < 21) return day + 'th'; // covers 11th, 12th, 13th etc.
    switch (day % 10) {
        case 1: return day + 'st';
        case 2: return day + 'nd';
        case 3: return day + 'rd';
        default: return day + 'th';
    }
}
    
    
document.getElementById('curr_date').textContent = `${month} ${day}, ${y}`;
document.getElementById('hmi-img').src = `/foxsi5/foxsi5_launch_days/foxsi5_daily_continuum/HMI_CONT_IMAGE_2026-${m}-${d}.png`;