/*=========================================
        LOVE JOURNAL
=========================================*/

const container =
document.getElementById("lettersContainer");

const search =
document.getElementById("searchLetter");

/*=========================================
        DISPLAY LETTERS
=========================================*/

function displayLetters(keyword = ""){

    container.innerHTML = "";

    const filtered = letters.filter(letter =>

        letter.title.toLowerCase().includes(keyword.toLowerCase()) ||

        letter.message.toLowerCase().includes(keyword.toLowerCase())

    );

    if(filtered.length === 0){

        container.innerHTML = `

        <div class="letter-card">

            <h2>No Love Letters Found 💔</h2>

            <p>
                Try another search.
            </p>

        </div>

        `;

        return;

    }

    filtered.forEach(letter=>{

        container.innerHTML += `

        <div class="letter-card">

            <h2>

                ${letter.title}

            </h2>

            <small>

                ${letter.date}

            </small>

            <p>

                ${letter.message}

            </p>

        </div>

        `;

    });

}

/*=========================================
        SEARCH
=========================================*/

search.addEventListener("keyup",(e)=>{

    displayLetters(e.target.value);

});

/*=========================================
        START
=========================================*/

displayLetters();