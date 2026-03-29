fetch("pastas.json")
    .then(response => response.json())
    .then(pastas => {
        let out = '';
        pastas.reverse();

        pastas.forEach(pasta => {
            out += `
                <div class="box">
                    <p>${pasta.text}</p>
                </div>
            `;
        });

        document.getElementById("pastasHere").innerHTML = out;
    })
    .catch(err => console.error("error: ", err))