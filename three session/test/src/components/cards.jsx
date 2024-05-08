
import PropTypes from 'prop-types';
import { StyledCard, CardInner, CardFront, CardBack } from '../styles/styledComponents';

function Card({ card, handleChoice, flipped }) {
  return (
    <StyledCard onClick={() => handleChoice(card)}>
      <CardInner flipped={flipped}>
        <CardFront style={{ backgroundImage: `url(${card.src})` }} />
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

export default Card;

