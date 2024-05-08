import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styledComponents';
import GlobalStyle from './styles/GlobalStyle';
import theme from './styles/theme';
import Card from './components/cards'; 
import GameStatusBar from './components/GameStatusBar';
import Modal from './components/Modal';
import { CardGrid as StyledCardGrid } from './styles/styledComponents';

function App({ cardImages }) {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choices, setChoices] = useState([null, null]); // Refactor to use a single array
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    const [choiceOne, choiceTwo] = choices;
    if (choiceOne && choiceTwo) {
      if (choiceOne.src === choiceTwo.src) {
        setCards(prevCards => prevCards.map(card => card.src === choiceOne.src ? { ...card, matched: true } : card));
        setMatchedPairs(prev => prev + 1);
        setTimeout(() => resetTurn(), 1000);
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choices]);

  useEffect(() => {
    if (matchedPairs === cards.length / 2) { 
      setShowModal(true);
    }
  }, [matchedPairs, cards.length]);

  const shuffleCards = () => {
    const selectedCardImages = [...cardImages]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
    const shuffledCards = [...selectedCardImages, ...selectedCardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index, flipped: false }));

    setChoices([null, null]);
    setMatchedPairs(0);
    setCards(shuffledCards);
    setTurns(0);
    setShowModal(false);
  };

  const resetTurn = () => {
    setChoices([null, null]);
    setTurns(prevTurns => prevTurns + 1);
  };

  const handleChoice = (card) => {
    const [choiceOne, choiceTwo] = choices;
    setChoices(choiceTwo ? [card, null] : [choiceOne, card]);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <GameStatusBar matchedPairs={matchedPairs} totalPairs={cards.length / 2} turns={turns} onReset={shuffleCards} />
        <StyledCardGrid>
          {cards.map(card => (
            <Card
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choices[0] || card === choices[1] || card.matched}
            />
          ))}
        </StyledCardGrid>
        {showModal && <Modal onReset={shuffleCards} />}
      </div>
    </ThemeProvider>
  );
}

App.propTypes = {
  cardImages: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string.isRequired,
    id: PropTypes.number,
    matched: PropTypes.bool,
    flipped: PropTypes.bool
  })).isRequired
};

export default App;
