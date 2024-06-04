import styled from '@emotion/styled';
import { useState } from 'react';

const App = () => {
  const [recommend, setRecommend] = useState('');
  const [foodType, setFoodType] = useState(false);
  const [selectedFoodType, setSelectedFoodType] = useState('');

  const handleRecommendation = (type) => {
    setRecommend(type);
  };

  const handleStartButtonClick = () => {
    setFoodType(true); 
  };

  const handleFoodSelection = (food) => {
    setSelectedFoodType(food);
  };

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
            onClick={() => handleRecommendation('taste')}
          >
            취향대로 추천
          </Button>
        ) : null}
        <SmallButtonWrapper>
          {!recommend || recommend === 'random' ? (
            <Button
              selected={recommend === 'random'}
              onClick={() => handleRecommendation('random')}
            >
              랜덤 추천
            </Button>
          ) : null}
        </SmallButtonWrapper>
      </ButtonWrapper>
      {recommend && (
        <StartButton onClick={handleStartButtonClick}>
          Start
        </StartButton>
      )}
      {foodType && (
        <div>
          <ButtonFoodType selected={selectedFoodType === 'Korean'} onClick={() => handleFoodSelection('Korean')}>한식</ButtonFoodType>
          <ButtonFoodType selected={selectedFoodType === 'Chinese'} onClick={() => handleFoodSelection('Chinese')}>중식</ButtonFoodType>
          <ButtonFoodType selected={selectedFoodType === 'Japanese'} onClick={() => handleFoodSelection('Japanese')}>일식</ButtonFoodType>
        </div>
      )}
      {selectedFoodType && (
        <div>
          <Button onClick={() => {}}>다음으로</Button>
        </div>
      )}
    </Body>
  );
};

export default App;

const Button = styled.button`
  cursor: pointer;
  background:  blue;
  color: black;
  padding: ${(props) => props.selected ? '30px 45px' : '20px 30px'};
  margin: 8px;
  font-weight: bold;
  &:hover {
    background-color: white;
    color: gray;
  }
`;

const StartButton = styled(Button)`
  padding: 10px 20px;
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
`;

const SmallButtonWrapper = styled.div`
  display: flex;
`;

const ButtonFoodType = styled(Button)`
  background: ${(props) => props.selected ? 'white' : 'blue'};
  color: ${(props) => props.selected ? 'gray' : 'black'};
`

