
import styled from '@emotion/styled';
import { useState } from 'react';

const App = () => {
  const [recommend, setRecommend] = useState('');

  const Recommendation = (type) => {
    setRecommend(type);
  }

  return (
    <Body>
      <div>
        <h1>오늘의 점매추</h1>
        <h3>원하는 추천 방식을 골라줘</h3>
      </div>
      <ButtonWrapper>
        {!recommend || recommend === 'taste' ? (
          <Button
            selected={recommend === 'taste'}
            onClick={() => Recommendation('taste')}
          >
            취향대로 추천
          </Button>
        ) : null}
        <SmallButtonWrapper>
          {!recommend || recommend === 'random' ? (
            <Button
              selected={recommend === 'random'}
              onClick={() => Recommendation('random')}
            >
              랜덤 추천
            </Button>
          ) : null}
        </SmallButtonWrapper>
         
      </ButtonWrapper>
      {recommend && (
            <StartButton>
              Start
            </StartButton>
      )}
    </Body>
  );
};

export default App;

const Button = styled.button`
  cursor: pointer;
  background: blue;
  color: black;
  padding: ${(props) => props.selected ? '30px 45px' : '20px 30px'}; 
  margin: 8px;
  &:hover {
    background-color: white;
    color: gray;
  }
  font-weight: bold;
`;

const StartButton = styled(Button)` 
  padding : 10px 20px;
  background: red;
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SmallButtonWrapper = styled.div`
  display : flex;
`