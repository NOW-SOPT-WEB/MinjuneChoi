import { useState, useEffect } from 'react';
import './App.css';

const cardImages = [
  { src: "./img/가렌1.jpg", matched: false },
  { src: "./img/다이애나1.jpg", matched: false }, 
  { src: "./img/요네1.jpg", matched: false },
  { src: "./img/유미1.jpg", matched: false },
  { src: "./img/티모1.jpg", matched: false },
];

function Card({ card, handleChoice, flipped }) {
  const handleClick = () => handleChoice(card);
  return (
    <div className="card" onClick={handleClick}>
      <div className={!flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="Card front" />
        <div className="back">?</div>
      </div>
    </div>
  );
}

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map(card => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setMatchedPairs(0);
    setCards(shuffledCards);
    setTurns(0);
    setShowModal(false);
  };

  useEffect(() => {
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => prevCards.map(card => card.src === choiceOne.src ? { ...card, matched: true } : card));
        setMatchedPairs(prev => prev + 1);
        setTimeout(() => resetTurn(), 1000);
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (matchedPairs === cardImages.length) {
      setShowModal(true);
    }
  }, [matchedPairs]);

  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  return (
    <div className="App">
      <div className="game-status-bar">
        <h1>카드 맞추기 게임</h1>
        <span>{matchedPairs} / {cards.length / 2}</span>
        <button onClick={shuffleCards}>Reset</button>
      </div>
      <div className="card-grid">
        {cards.map(card => (
          <Card key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} />
        ))}
      </div>
      <p>턴 수: {turns}</p>
      
    </div>
  );
}

export default App;

 