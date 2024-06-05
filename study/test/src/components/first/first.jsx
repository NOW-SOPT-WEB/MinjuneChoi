import { foodimage } from '../assets/constant/food.js';
import { useState, useEffect } from 'react';

const App = () => {
  const [koreanFoods, setKoreanFoods] = useState([]);

  useEffect(() => {
    filterKoreanFoods(); 
  }, []);

  const filterKoreanFoods = () => {
    const filteredFoods = foodimage.filter(food => food.country === 'korean');
    setKoreanFoods(filteredFoods);
  };

  return (
    <div>
      <button onClick={filterKoreanFoods}>한식</button>
      
    </div>
  );
};

export default App;


