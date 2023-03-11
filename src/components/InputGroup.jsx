import React, { useState } from 'react';

const InputGroup = ({cardFlipped, correctAnswer, cardChanged,setCardChanged}) => {
    const [userGuess, setUserGuess] = useState('');
    let [answer, setAnswer] = useState('new');

    const handleChange = (e) => {
        setUserGuess(e.target.value)
    }

    const handleGuess = () => {
        let answerLowerCase = correctAnswer.toLowerCase();
        const userGuessLowerCase = userGuess.toLowerCase();
        if (userGuessLowerCase.length == 0) {
            alert('Please, put your answer in the input box below.');
            setAnswer('incorrect');
        }
        else if(cardFlipped == false && answerLowerCase.includes(userGuessLowerCase)) {
            setAnswer('correct');
        }
        else if(cardFlipped == true && answerLowerCase.includes(userGuessLowerCase)) {
            alert('Correct answer, but you already saw it :)');
            setAnswer('incorrect');
        }
            
        else {
            setAnswer('incorrect');
        }
        setCardChanged(false);
    }

    return (
        <form id='input-container'>
            <input 
            id='input-box' 
            className={(answer == 'new' || cardChanged)? 'new': answer == 'correct'? 'correct': 'incorrect'}
            name='guess' 
            type='text' 
            placeholder='Make a guess...'
            onChange={handleChange}
            />
            <button 
            id='submit-btn' 
            type='button' 
            onClick={handleGuess}>
                Submit Guess
            </button>
        </form>
    )
}


export default InputGroup;