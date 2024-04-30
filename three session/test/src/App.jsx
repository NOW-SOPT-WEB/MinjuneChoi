import  { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider, styled } from 'styled-components';

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
  width: 150px;
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
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [matchedPairs, setMatchedPairs] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const cardImages = [
    { src: "./img/가렌1.jpg", matched: false },
    { src: "./img/다이애나1.jpg", matched: false }, 
    { src: "./img/요네1.jpg", matched: false },
    { src: "./img/유미1.jpg", matched: false },
    { src: "./img/티모1.jpg", matched: false },
    { src: "./img/그웬1.jpg", matched: false},
    {src : "./img/케이틀린.jpg", matched : false}
  ];//객체 배열~바꾸는 것이 좋다.

  useEffect(() => {
    shuffleCards();
  }, []);

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
    if (matchedPairs ===5) { 
      setShowModal(true);
      console.log('matchedPairs', matchedPairs);
    }
    console.log('cardImages.length', cardImages.length);
  }, [matchedPairs]);

  


const shuffleCards = () => {
  // 무작위로 5장의 카드 이미지를 선택하고 중복시킵니다.
  const selectedCardImages = [...cardImages]
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);
  
  const shuffledCards = [...selectedCardImages, ...selectedCardImages]
    .sort(() => Math.random() - 0.5)
    .map((card, index) => ({ ...card, id: index, flipped: false }));

    // 게임 상태를 초기화합니다.
    setChoiceOne(null);
    setChoiceTwo(null);
    setMatchedPairs(0);
    setCards(shuffledCards);
    setTurns(0);
    setShowModal(false);
};


  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(prevTurns => prevTurns + 1);
  };

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div className="App">
        <GameStatusBar>
          <h1>카드 맞추기 게임</h1>
          <span>{matchedPairs} / {cards.length / 2}</span>
          <button onClick={shuffleCards}>Reset</button>
        </GameStatusBar>
        <CardGrid>
          {cards.map(card => (
            <Card key={card.id} card={card} handleChoice={handleChoice} flipped={card === choiceOne || card === choiceTwo || card.matched} />
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