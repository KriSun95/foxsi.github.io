function fetchLetter() {
    fetch("https://foxsi.dannysun.workers.dev")
        .then(res => res.text())
        .then(text => {
            document.getElementById("my-letter").textContent = text;

            if (text==""){
                document.getElementById("picking-up-count").textContent = "No";
                document.getElementById("picking-up-count").style.color = "red";
            }
            else{
                document.getElementById("picking-up-count").textContent = "YES";
                document.getElementById("picking-up-count").style.color = "green";
            }
        });
}

fetchLetter();
setInterval(fetchLetter, 2000);