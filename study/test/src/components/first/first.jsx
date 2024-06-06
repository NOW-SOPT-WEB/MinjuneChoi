import { foodimage } from '../assets/constant/food.js';
import { useState, useEffect } from 'react';

const App = () => {
  const [koreanFoods, setKoreanFoods] = useState([]);
  const [japaneseFoods, setJapaneseFoods] = useState([]);
  const [chineseFoods, setChineseFoods] = useState([]);

  useEffect(() => {
    filterChineseFoods();
  }, []);

  useEffect(() => {
    filterJapaneseFoods();
  }, []);

  useEffect(() => {
    filterKoreanFoods();
  }, []);

  const filterKoreanFoods = () => {
    const filteredFoods = foodimage.filter(food => food.country === 'korea');
    setKoreanFoods(filteredFoods);
  };

  const filterJapaneseFoods = () => {
    const filteredFoods = foodimage.filter(food => food.country === 'japan');
    setJapaneseFoods(filteredFoods);
  };

  const filterChineseFoods = () => {
    const filteredFoods = foodimage.filter(food => food.country === 'china');
    setChineseFoods(filteredFoods);
  };

  return (
    <div>
      <button onClick={filterKoreanFoods}>한식</button>
      <button onClick={filterJapaneseFoods}>일식</button>
      <button onClick={filterChineseFoods}>중식</button>
   
      <div>
        {koreanFoods.map(food => (
          <div key={food.id}>{food.name}</div>
        ))}
      </div>
      
      <div>
        {japaneseFoods.map(food => (
          <div key={food.id}>{food.name}</div>
        ))}
      </div>

      <div>
        {chineseFoods.map(food => (
          <div key={food.id}>{food.name}</div>
        ))}
      </div>
    </div>
  );
};

export default App;



