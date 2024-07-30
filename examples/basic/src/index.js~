
export default function generateJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('joke').innerText = data.value;
        });
}

generateJoke()

