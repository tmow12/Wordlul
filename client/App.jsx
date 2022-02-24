import React, { useEffect, useState} from 'react';



const App = () => {
    const [guess, setGuess] = useState([]);

    useEffect(() => {

        function handleKeyDown({key}) {
        console.log(key)

        if (guess.length < 5) {
           const isChar = /^[a-z]$/.test(); 

           if (isChar) {
               setGuess((prev) => [...prev, key])
           } 
           console.log({key, isChar})
        }
    } 

    window.addEventListener('keydown', handleKeyDown);

    return () => {
        window.removeEventListener('keydown', handleKeyDown);
    }

    }, [guess.length])
    console.log(guess);

    return(
        <div>wordlul</div>
    )

}


export default App;