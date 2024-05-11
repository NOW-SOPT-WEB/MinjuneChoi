import { useState, useEffect } from 'react';

import { createGlobalStyle, ThemeProvider, styled } from 'styled-components';
import React from 'react';
import GameStatusBar from './GameStatusBar/GameStatusBar';
import { theme } from './thema';
import CardGrid from './CardGrid/CardGrid';
import cardImages from './card';

const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
    margin: 0;
    font-family: 'Comic Sans MS', 'Arial', sans-serif;
    background: #pink;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${theme.colors.modalBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: ${theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px ${theme.colors.shadow};
  text-align: center;
`;

/*Card.propTypes = {
   card: PropTypes.shape({
     src: PropTypes.string.isRequired,
     matched: PropTypes.bool.isRequired,
     id: PropTypes.number.isRequired,
   }),
   handleChoice: PropTypes.func.isRequired,
   flipped: PropTypes.bool.isRequired,
};*/

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choices, setChoices] = useState([]); // choiceOne과 choiceTwo를 하나의 배열로 관리
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const resetTurn = () => {
    setChoices([]);
    setTurns(prevTurns => prevTurns + 1);
  };

  const handleShuffleCards = () => {
    const selectedCardImages = [...cardImages].sort(() => 0.5 - Math.random()).slice(0, 5);

    const shuffledCards = [...selectedCardImages, ...selectedCardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index, flipped: false }));

    setChoices([]);
    setMatchedPairs(0);
    setCards(shuffledCards);
    setTurns(0);
    setShowModal(false);
  };

  useEffect(() => {
    if (choices.length === 2) {
      const [firstChoice, secondChoice] = choices;
      if (firstChoice.heat === secondChoice.heat) {
        setCards(prevCards =>
          prevCards.map(card => (card.heat === firstChoice.heat ? { ...card, matched: true } : card)),
        );
        setMatchedPairs(prev => prev + 1);
        setTimeout(() => resetTurn(), 1000);
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choices]);

  useEffect(() => {
    if (matchedPairs === 5) {
      setShowModal(true);
    }
  }, [matchedPairs]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        {showModal && (
          <Modal>
            <ModalContent>
              <h2>추카추카 게임 Clear!</h2>
              <button onClick={handleShuffleCards}>다시 시작</button>
            </ModalContent>
          </Modal>
        )}
        <GameStatusBar matchedPairs={matchedPairs} cardsLength={cards.length} onHandle={handleShuffleCards} />
        <CardGrid cards={cards} choices={choices} setChoices={setChoices} />
        <p>턴 수: {turns}</p>
      </div>
    </ThemeProvider>
  );
}

export default App;

