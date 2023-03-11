import React from 'react';
import Flashcard from './components/Flashcard';
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
  let [currCard, setCurrCard] = useState(flashcardPairs[Math.floor(Math.random() * flashcardPairs.length)]);

  // Go to next card (random)
  const changeCard = () => {
    setCurrCard(currCard = flashcardPairs[Math.floor(Math.random() * flashcardPairs.length)]);
    console.log(currCard)
  }

  return (
    <div className='App'>
      <div className='game-description'>
        <h1>What's This Dog?</h1>
        <h3>Do you consider yourself to be a guru in dog breeds? Play this game to find out how well you know dogs!</h3>
        <h3>Guess each dog's breed and then click on the card to check your answer!</h3>
        <h3>Number of cards: {flashcardPairs.length}</h3>
      </div>

      <Flashcard answer={currCard.breed} question={currCard.picture} difficulty={currCard.difficulty} />
      <button onClick={changeCard} title="Generate next flashcard">Next</button>
    </div>
  )
}

export default App;
