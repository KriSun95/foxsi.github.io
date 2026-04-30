function fetchLetter() {
    fetch("https://foxsi.dannysun.workers.dev")
        .then(res => res.text())
        .then(text => {
            if (text==""){
                document.getElementById("my-letter").textContent = "";
                document.getElementById("picking-up-count").textContent = "No";
                document.getElementById("picking-up-count").style.color = "red";
                document.getElementById("picking-up-count").classList.remove('shake');
                document.querySelectorAll('tr').forEach(row => row.className = '');
            }
            else{
                document.getElementById("my-letter").textContent = `Live Target: ${text}`;
                document.getElementById("picking-up-count").textContent = "YES";
                document.getElementById("picking-up-count").style.color = "green";
                document.getElementById("picking-up-count").classList.add('shake');
                document.querySelectorAll('tr').forEach(row => row.className = '');
                document.getElementById(`row-${text}`).classList.add('select');
            }
        });
}

fetchLetter();
setInterval(fetchLetter, 2000);