const GIST_ID = "fce9b41b568ed17aa79d06b7c613a260";
const FILENAME = "foxsi5.txt";
const TOKEN = "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";

function fetchLetter() {
    fetch(`https://api.github.com/gists/${GIST_ID}`, {
        headers: {
        "Authorization": `Bearer ${TOKEN}`,
        "X-GitHub-Api-Version": "2022-11-28"
        }
    })
        .then(res => res.json())
        .then(data => {
        const text = data.files[FILENAME].content;
        document.getElementById("my-letter").textContent = text.trim();
        
        if (text.trim()==""){
            document.getElementById("picking-up-count").textContent = "No";
            document.getElementById("picking-up-count").style.color = "red";
        }
        else{
            document.getElementById("picking-up-count").textContent = "YES";
            document.getElementById("picking-up-count").style.color = "green";
        }
    });
}

fetchLetter();                  // run immediately on load
setInterval(fetchLetter, 1000);
