import { useEffect } from 'react';
import { styled } from 'styled-components';
import { theme } from 'thema';

const MainContain = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: ${theme.colors.secondary};
  border-radius: 10px;
  box-shadow: 0 5px 10px ${theme.colors.shadow};
  margin-bottom: 20px;
`;

const GameStatusBar = ({ matchedPairs, cardsLength, onHandle }) => {
  useEffect(() => {
    onHandle();
  }, []);

  return (
    <MainContain>
      <h1>카드 맞추기 게임</h1>
      <span>
        {matchedPairs} / {cardsLength / 2}
      </span>
      <button className="resetButton" onClick={onHandle}>
        Reset
      </button>
    </MainContain>
  );
};

export default GameStatusBar;
