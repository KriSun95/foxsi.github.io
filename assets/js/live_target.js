function fetchLetter() {
    fetch("https://foxsi.dannysun.workers.dev")
        .then(res => res.text())
        .then(text => {
            if (text==""){
                document.getElementById("my-letter").textContent = "";
            }
            else{
                document.getElementById("my-letter").textContent = `Live Target: ${text}`;
            }

            if (text==""){
                document.getElementById("picking-up-count").textContent = "No";
                document.getElementById("picking-up-count").style.color = "red";
                document.getElementById("picking-up-count").classList.remove('shake');
            }
            else{
                document.getElementById("picking-up-count").textContent = "YES";
                document.getElementById("picking-up-count").style.color = "green";
                document.getElementById("picking-up-count").classList.add('shake');
            }
        });
}

fetchLetter();
setInterval(fetchLetter, 2000);