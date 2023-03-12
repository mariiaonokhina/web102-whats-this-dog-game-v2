import React from 'react';
import Flashcard from './components/Flashcard';
import InputGroup from './components/InputGroup';
import { useState } from 'react';

// Flashcard pairs of picture/answers
const flashcardPairs = [
  // Easy
  {picture: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/11/american-bulldog-puppy-outdoors-in-autumn.jpg', breed: 'Bulldog', difficulty: 'easy'},
  {picture: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/golden-retrievers.jpeg.jpg', breed: 'Golden Retriever', difficulty: 'easy'},
  {picture: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/dalmatian-700x700.jpg', breed: 'Dalmatian', difficulty: 'easy'},
  {picture: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/siberian-huskies-on-the-beach-1.jpg', breed: 'Siberian Husky', difficulty: 'easy'},
  {picture: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/dachshunds.jpeg.jpg', breed: 'Dachshund', difficulty: 'easy'},

  // Medium
  {picture: 'https://bowwowinsurance.com.au/wp-content/uploads/2021/02/shutterstock_1444833281-American-Foxhound-in-a-public-park-thumbnail-Bow-Wow-Meow-Pet-Insurance.jpg', breed: 'American Foxhound', difficulty: 'medium'},
  {picture: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/chow-chow-standing2.jpeg.jpg', breed: 'Chow Chow', difficulty: 'medium'},
  {picture: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/shutterstock_1791183953_ed-Toy-poodles-on-a-retro-background.jpg', breed: 'Poodle', difficulty: 'medium'},
  {picture: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/shutterstock_34564123-ed-a-Border-Collie-stand-on-grass.jpeg', breed: 'Border Collie', difficulty: 'medium'},
  {picture: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/happy-maltese-running-over-lawn.jpg', breed: 'Maltese', difficulty: 'medium'},

  // Hard
  {picture: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/beagle-standing.jpg', breed: 'Beagle', difficulty: 'hard'},
  {picture: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/newfoundland-black-white.jpg', breed: 'Newfoundland', difficulty: 'hard'},
  {picture: 'https://bowwowinsurance.com.au/wp-content/uploads/2019/01/content-and-happy-japanese-spitz-sitting-outddors-on-grass-meadow.jpg', breed: 'Japanese Spitz', difficulty: 'hard'},
  {picture: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/akita-standing-in-snow.jpg.jpg', breed: 'Akita', difficulty: 'hard'},
  {picture: 'https://bowwowinsurance.com.au/wp-content/uploads/2018/10/whippet-700x700.jpg', breed: 'Whippet', difficulty: 'hard'},
]

const App = () => {
  let [cardFlipped, setCardFlipped] = useState(false);
  let [currCardIndex, setCurrCardIndex] = useState(0);
  let [currCard, setCurrCard] = useState(flashcardPairs[currCardIndex]);
  let [cardChanged, setCardChanged] = useState(false);
  let [longestStreak, setLongestStreak] = useState(0);
  let [currStreak, setCurrStreak] = useState(0);
  let [numOfCards, setNumOfCards] = useState(flashcardPairs.length);

  const handleAddStreak = () => {
    setCurrStreak(currStreak += 1);
  }

  const handleEndStreak = () => {
    if (longestStreak < currStreak) {
      setLongestStreak(currStreak)
    }
    setCurrStreak(0);
  }

  // Go to previous card in order
  const previousCard = () => {
    setCardFlipped(false);
    setCardChanged(true);

    if (currCardIndex == 0) {
      setCurrCardIndex(flashcardPairs.length - 1);
    }
    else {
      setCurrCardIndex(currCardIndex--);
    }
    setCurrCard(flashcardPairs[currCardIndex]);
  }

  // Go to next card in order
  const nextCard = () => {
    setCardFlipped(false);
    setCardChanged(true);

    if (currCardIndex == flashcardPairs.length - 1) {
      setCurrCardIndex(0);
    }
    else {
      setCurrCardIndex(currCardIndex++);
    }
    setCurrCard(flashcardPairs[currCardIndex]);
  }

  // Check if the user already tried to see the answer
  const detectFlip = () => {
    setCardFlipped(true);
  }

  // Shuffle flashcards and generate next card
  const shuffleCards = () => {
    for (let i = 0; i < flashcardPairs.length; i++) {
      let randIndex = Math.floor(Math.random() * flashcardPairs.length);

      let temp = flashcardPairs[randIndex];
      flashcardPairs[randIndex] = flashcardPairs[i];
      flashcardPairs[i] = temp;
    }
    nextCard();
  }

  const removeMastered = () => {
    flashcardPairs.splice(currCardIndex, 1);
    setNumOfCards(numOfCards -= 1);
    nextCard();
  }

  return (
    <div className='App'>
      <div className='game-description'>
        <h1>What's This Dog?</h1>
        <h3>Do you consider yourself to be a guru in dog breeds? Play this game to find out how well you know dogs!</h3>
        <h3>Guess each dog's breed and then click on the card to check your answer!</h3>
        <h3>Number of cards: {numOfCards} | Current streak: {currStreak} | Longest streak: {longestStreak}</h3>
      </div>

      <div className='flashcard-container' onClick={detectFlip}>
        {numOfCards == 0? <h1 id='good-job-msg'>Good job!</h1> : <Flashcard answer={currCard.breed} question={currCard.picture} difficulty={currCard.difficulty} />}
      </div>
      
      {numOfCards == 0? 
      ""
      : <InputGroup 
      cardFlipped={cardFlipped} 
      correctAnswer={currCard.breed} 
      cardChanged={cardChanged} 
      setCardChanged={setCardChanged} 
      shuffleCards={shuffleCards}
      handleAddStreak={handleAddStreak}
      handleEndStreak={handleEndStreak}
      removeMastered={removeMastered}/>}

      {/* Control buttons */}
      <button id='direction-button-previous' onClick={previousCard} title="Generate next flashcard">←</button>
      <button id='direction-button-next' onClick={nextCard} title="Generate next flashcard">→</button>
    </div>
  )
}

export default App;