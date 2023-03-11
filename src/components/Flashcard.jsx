import React from 'react';
import { useState } from 'react';

const Flashcard = (props) => {
    const [showAnswer, setShowAnswer] = useState(false);

    const flipCards = () => {
        setShowAnswer(!showAnswer);
    }

    return (
        <div title={props.difficulty} className='flashcard' id={props.difficulty} onClick={flipCards}>
            {showAnswer? "": <h2>What's this breed?</h2>}
            {showAnswer ? <h1>{props.answer}</h1> : <img src={props.question} />}
        </div>
    )
}

export default Flashcard;