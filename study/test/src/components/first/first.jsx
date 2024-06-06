import { foodimage } from '../assets/constant/food.js';
import { useState, useEffect } from 'react';

const App = () => {
  const [koreanFoods, setKoreanFoods] = useState([]);

  useEffect(() => {
    filterKoreanFoods();
  }, []); // 의존성 배열.. 나중에 생각후에 추가

  const filterKoreanFoods = () => {
    const filteredFoods = foodimage.filter(food => food.country === 'korean');
    setKoreanFoods(filteredFoods);
  };

  return (
    <div>
      <button onClick={filterKoreanFoods}>한식</button>
      <ul>
        {koreanFoods.map(food => (
          <li key={food.id}>{food.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;



