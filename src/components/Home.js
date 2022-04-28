import React from "react";

function Home() {
    return(
        <>
        <h2>How to Play</h2>
        <p>
            Use the hint to guess the word. <b>Pro Tip</b>: start with vowels. 
        </p>
        <p>
            Simply press a key on your keyboard to get started. 
            If it's in the word, it'll show up wherever it belongs, e.g.,
            a _ _ _ e (for the word 'apple').
        </p>
        <p>
            If it's not, a stickman will be progressively drawn with every mistake 
            until he becomes, well, a hangman.
        </p>

        {/* takes user to <Levels /> */}
        <button>Let's Get Started</button>
        </>
    )
}

export default Home;