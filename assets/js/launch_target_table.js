const target_file = `/foxsi5/foxsi5_launch_days/foxsi5_daily_launch_targets/${m}${d}_targets.txt`
const notes_file = `/foxsi5/foxsi5_launch_days/foxsi5_daily_launch_targets/${m}${d}_notes.txt`
console.log(target_file);
console.log(notes_file);

Promise.all([
    fetch(target_file).then(res => res.text()),
    fetch(notes_file).then(res => res.text())
])
.then(([targetText, notesText]) => {
    const targets = targetText.trim().split('\n');
    const notes = notesText.trim().split('\n');
    const tbody = document.querySelector('tbody');
    
    targets.forEach((line, i) => {
        const [ARnumber, position] = line.split(': ');
        const [direction, coords] = position.split(' ')
        const [id, note] = notes[i].split("|");  // matching line by index
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${id}</td>
            <td>${ARnumber}</td>
            <td>${direction}<br>${coords}</td>
            <td>${note}</td>
            `;
        tbody.appendChild(tr);
    });
});