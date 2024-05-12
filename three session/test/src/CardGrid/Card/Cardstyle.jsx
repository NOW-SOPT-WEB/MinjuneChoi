import { styled } from 'styled-components';
import { theme } from '../../thema';

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

const CardInner = styled.div<{ flipped }>`
  transform: ${({ flipped }) => (flipped ? 'rotateY(180deg)' : 'none')};
`;

const CardFace = styled.div`
  backface-visibility: hidden;
  position: absolute;
  width: 8rem;
  height: 150px;
  border-radius: 20px;
  box-shadow: 0 5px 10px ${theme.colors.shadow};
`;

const CardBack = styled(CardFace)`
  background: ${theme.colors.primary};
`;

const CardFront = styled(CardFace)`
  background: ${theme.colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0;
  color: white;
  transform: rotateY(180deg);
  background-size: cover; // 이미지가 카드 크기에 맞게 조절
  background-position: center;
`;

const Card = ({ card, handleChoice, flipped }: {}) => {
  return (
    <StyledCard onClick={() => handleChoice(card)}>
      <CardInner flipped={flipped}>
        <CardFront style={{ backgroundImage: `url(${card.src})` }} alt="Card front" />
        <CardBack>?</CardBack>
      </CardInner>
    </StyledCard>
  );
};

export default Card;