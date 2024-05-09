import React, { useState, FormEvent, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();
  const { memberId } = useParams<{ memberId?: string }>(); 

  useEffect(() => {
    
    if (memberId) {
      setUserId(memberId);
    }
  }, [memberId]);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://34.64.233.12:8080/member/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ authenticationId: userId, password: password }),
      });

      if (!response.ok) {
        const error = await response.json();
        alert(`로그인 실패: ${error.message}`);
        return;
      }

      const memberId = response.headers.get("Location");
      if (memberId) {
        console.log(`로그인 성공. 회원 ID: ${memberId}`);
        navigate(`/home/${memberId}`);
      } else {
        throw new Error("Location 헤더가 없습니다.");
      }
    } catch (error) {
      console.error("서버 내부 오류입니다.", error);
      alert("서버 내부 오류입니다: ");
    }
  };

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
      <form onSubmit={handleLogin}>
        <img src="./햄스터.jpg" alt="로그인 이미지" />
        <label>
          ID:
          <input
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </label>
        <label>
          PW:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">로그인</button>
        <button type="button" onClick={() => navigate("/signup")}>
          회원가입
        </button>
      </form>
    </>
  );
};

export default LoginPage;