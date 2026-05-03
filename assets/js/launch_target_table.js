const target_file = `/foxsi5/foxsi5_launch_days/foxsi5_daily_launch_targets/${m}${d}_targets.txt`
const notes_file = `/foxsi5/foxsi5_launch_days/foxsi5_daily_launch_targets/${m}${d}_notes.txt`
console.log(target_file);
console.log(notes_file);

Promise.all([
    fetch(target_file).then(res => res.text()).catch(error => {
                    throw(error);
                }),
    fetch(notes_file).then(res => res.text()).catch(error => {
                    throw(error);
                })
])
.then(([targetText, notesText]) => {
    const targets = targetText.trim().split('\n');
    const notes = notesText.trim().split('\n');
    const tbody = document.querySelector('tbody');
    
    targets.forEach((line, i) => {
        const [ARnumber, position] = line.split(': ');
        const coords = position
        const [id, note] = notes[i].split("|");  // matching line by index
        
        const tr = document.createElement('tr');
        tr.id = `row-${id}`;
        tr.innerHTML = `
            <td>${id}</td>
            <td>${ARnumber}</td>
            <td>${coords}</td>
            <td>${note}</td>
            `;
        tbody.appendChild(tr);
    });
});

document.getElementById('hmi-img').src = `/foxsi5/foxsi5_launch_days/foxsi5_daily_continuum/HMI_CONT_IMAGE_2026-${m}-${d}.png`;