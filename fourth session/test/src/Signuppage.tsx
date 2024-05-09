import React, { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Container, FormCard, FormInput, FormButton, FromSmall } from './styles/signupstyles';

const SignUpPage: React.FC = () => {
  const [userId, setUserId] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const navigate = useNavigate();

  const handleSignUp = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const requestBody = {
      authenticationId: userId,
      password: password,
      nickname: nickname,
      phone: phone,
    };

    try {
      const response = await fetch("http://34.64.233.12:8080/member/join", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const locationHeader = response.headers.get("Location");
        const memberId = locationHeader
          ? locationHeader.split("/").pop()
          : null;

        if (memberId) {
          alert(`회원가입이 완료되었습니다: 회원 ID는 ${memberId}입니다.`);
          navigate(`/`);
        } else {
          alert("회원가입 실패: 서버에서 회원 ID를 반환하지 않았습니다.");
        }
      } else {
        const error = await response.json();
        alert(`회원가입 실패: ${error.message}`);
      }
    } catch (error) {
      alert("회원가입 중 오류가 발생!!");
    }
  };

  return (
    <Container>
      <FormCard>
        <h3>회원가입 페이지</h3>
        <form onSubmit={handleSignUp}>
          <label>ID: </label>
          <FormInput
            type="text"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
          <label>PW: </label>
          <FormInput
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <FromSmall>비밀번호 형식은 8자 이상, 숫자, 특수문자, 영어 알파벳이 포함되어야 합니다.</FromSmall>
          <div><label>닉네임: </label></div>
          <FormInput
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <label>핸드폰 번호: </label>
          <FormInput
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <FromSmall>전화번호 형식은 010-****-****입니다.</FromSmall>
          <FormButton type="submit">회원가입</FormButton>
        </form>
      </FormCard>
    </Container>
  );
};

export default SignUpPage;
