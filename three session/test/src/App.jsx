import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider, styled } from 'styled-components';
import cardImages from './card';



const GlobalStyle = createGlobalStyle`
  body, html {
    height: 100%;
    margin: 0;
    font-family: 'Comic Sans MS', 'Arial', sans-serif;
    background: #EED1D1;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const theme = {
  colors: {
    primary: '#FFC1C1',
    secondary: '#FFF3F3',
    text: '#333',
    modalBackground: 'rgba(0, 0, 0, 0.5)',
    white: 'white',
    shadow: 'rgba(0,0,0,0.1)'
  },
  fonts: {
    main: 'Comic Sans MS, Arial, sans-serif'
  }
};

const StyledCard = styled.div`
  perspective: 1000px;
  cursor: pointer;

  & > div {
    width: 150px;
    height: 150px;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.5s;
  }
`;

const CardInner = styled.div`
  transform: ${props => props.flipped ? 'rotateY(180deg)' : 'none'};
`;

const CardFace = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 8rem;
  height: 150px;
  border-radius: 20px;
  box-shadow: 0 5px 10px ${props => props.theme.colors.shadow};
`;

const CardBack = styled(CardFace)`
  background: ${props => props.theme.colors.primary};
`;

const CardFront = styled(CardFace)`
  background: ${props => props.theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  color: white;
  transform: rotateY(180deg);
  background-size: cover; // 이미지가 카드 크기에 맞게 조절 
  background-position: center; 
`;

const GameStatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${props => props.theme.colors.secondary};
  border-radius: 10px;
  box-shadow: 0 5px 10px ${props => props.theme.colors.shadow};
  margin-bottom: 20px;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.modalBackground};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px ${props => props.theme.colors.shadow};
  text-align: center;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

function Card({ card, handleChoice, flipped }) {
  return (
    <StyledCard onClick={() => handleChoice(card)}>
      <CardInner flipped={flipped}>
        <CardFront style={{ backgroundImage: `url(${card.src})` }} alt="Card front" />
        <CardBack>?</CardBack>
      </CardInner>
    </StyledCard>
  );
}

Card.propTypes = {
  card: PropTypes.shape({
    src: PropTypes.string.isRequired,
    matched: PropTypes.bool.isRequired,
    id: PropTypes.number.isRequired
  }),
  handleChoice: PropTypes.func.isRequired,
  flipped: PropTypes.bool.isRequired
};

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choices, setChoices] = useState([]); // choiceOne과 choiceTwo를 하나의 배열로 관리
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    shuffleCards();
  }, []);

  useEffect(() => {
    if (choices.length === 2) {
      const [firstChoice, secondChoice] = choices;
      if (firstChoice.heat === secondChoice.heat) {
        setCards(prevCards => prevCards.map(card => card.heat === firstChoice.heat ? { ...card, matched: true } : card));
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

  const shuffleCards = () => {
    const selectedCardImages = [...cardImages]
      .sort(() => 0.5 - Math.random())
      .slice(0, 5);
  
    const shuffledCards = [...selectedCardImages, ...selectedCardImages]
      .sort(() => Math.random() - 0.5)
      .map((card, index) => ({ ...card, id: index, flipped: false }));

    setChoices([]);
    setMatchedPairs(0);
    setCards(shuffledCards);
    setTurns(0);
    setShowModal(false);
  };

  const resetTurn = () => {
    setChoices([]);
    setTurns(prevTurns => prevTurns + 1);
  };

  const handleChoice = (card) => {
    if (choices.length < 2) {
      setChoices([...choices, card]);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <GameStatusBar>
          <h1>카드 맞추기 게임</h1>
          <span>{matchedPairs} / {cards.length / 2}</span>
          <button className="resetButton" onClick={shuffleCards}>Reset</button>
        </GameStatusBar>
        <CardGrid>
          {cards.map(card => (
            <Card key={card.id} card={card} handleChoice={handleChoice} flipped={choices.includes(card) || card.matched} />
          ))}
        </CardGrid>
        <p>턴 수: {turns}</p>
        {showModal && (
          <Modal>
            <ModalContent>
              <h2>추카추카 게임 Clear!</h2>
              <button onClick={shuffleCards}>다시 시작</button>
            </ModalContent>
          </Modal>
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;
