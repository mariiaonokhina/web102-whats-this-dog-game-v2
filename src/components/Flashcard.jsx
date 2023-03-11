import React from 'react';
import { useState } from 'react';

const Flashcard = ({difficulty, answer, question}) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const flipCards = () => {
        setShowAnswer(!showAnswer);
    }

    return (
        <div title={difficulty} 
            className='flashcard' 
            id={difficulty} 
            onClick={flipCards}>

            {showAnswer? "": <h2>What's this breed?</h2>}
            {showAnswer ? <h1>{answer}</h1> : <img src={question} />}
        </div>
    )
}

export default Flashcard;