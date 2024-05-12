import { Dispatch, SetStateAction } from 'react';
import { styled } from 'styled-components';
import Card from './Card/Cardstyle';

const MainContain = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;

const CardGrid = ({ cards, choices, setChoices }) => {
  const handleChoice = card => {
    if (choices.length < 2) {
      setChoices([...choices, card]);
    }
  };

  return (
    <MainContain>
      {cards.map(card => (
        <Card key={card.id} card={card} handleChoice={handleChoice} flipped={choices.includes(card) || card.matched} />
      ))}
    </MainContain>
  );
};

export default CardGrid;