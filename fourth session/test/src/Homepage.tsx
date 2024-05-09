
import React from 'react';
import { Link, useParams } from 'react-router-dom';

const HomePage: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();


  return (
    <>
      <style>
        {`
          
          img {
            width: 150px;  
            height: auto;  
            display: block; 
            margin: 0 auto 20px;
          }
        `}
      </style>
      <div>
        <img src="/솝트.jpg" alt="Welcome Image" />
        <h1>Main Page</h1>
        <Link to="/signup">회원가입</Link>
        <Link to={`/page/${memberId}`}>내정보</Link>   {/* 이제 memberId를 제대로 사용 */}
      </div>
    </>
  );
}

export default HomePage;