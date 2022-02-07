import React, { useState } from 'react';

const Game = () => {
    const [userInput, setUserInput] = useState('')
    const [result, setResult] = useState('')

    const vowels = ['a', 'e', 'i', 'o', 'u'];

    const handleChange = (e) => {
        setUserInput(e.target.value)
    }

    const process = () => {
        const firstChar = userInput.charAt(0)
        if(!vowels.includes(firstChar)){
            let input = userInput
            input = userInput.replace(firstChar, '')
            input = input + firstChar + "ay"
            console.log(input)
            setResult(input)
        }
        else{
            setResult(userInput)
        }
    }

    return(
        <div>
            <input type="text" value={userInput} name="userInput" onChange={handleChange}/>
            <button onClick={process}> Process </button>
            <span>{result}</span>
        </div>
    )
}

export default Game;