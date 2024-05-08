import PropTypes from 'prop-types';
import { GameStatusBar as StyledGameStatusBar } from '../styles/styledComponents';

function GameStatusBar({ matchedPairs, totalPairs, onReset }) {
  return (
    <StyledGameStatusBar>
      <h1>카드 맞추기 게임</h1>
      <span>{matchedPairs} / {totalPairs}</span>
      <button onClick={onReset}>Reset</button>
    </StyledGameStatusBar>
  );
}

GameStatusBar.propTypes = {
  matchedPairs: PropTypes.number.isRequired,
  totalPairs: PropTypes.number.isRequired,
  onReset: PropTypes.func.isRequired
};

export default GameStatusBar;

