const target_file = `/foxsi5/foxsi5_launch_days/foxsi5_daily_launch_targets/targets_${m}${d}.txt`
const notes_file = `/foxsi5/foxsi5_launch_days/foxsi5_daily_launch_targets/notes_${m}${d}.txt`
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
        const [name, position] = line.split(': ');
        const [direction, coords] = position.split(' ')
        const note = notes[i];  // matching line by index
        
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${name}</td>
            <td>${direction}<br>${coords}</td>
            <td>${note}</td>
            `;
        tbody.appendChild(tr);
    });
});