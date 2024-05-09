import React, { useState, useEffect, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

interface UserDetails {
  id: string;
  nickname: string;
  phone: string;
}

const Page: React.FC = () => {
  const { memberId } = useParams<{ memberId: string }>();
  const [userDetails, setUserDetails] = useState<UserDetails>({
    id: "",
    nickname: "",
    phone: "",
  });
  const [password, setPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [showPasswordForm, setShowPasswordForm] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await fetch(`http://34.64.233.12:8080/member/info`, {
          method: "GET",
          headers: {
            memberId: `${memberId}`,
            Accept: "application/json", // API가 JSON 응답을 반환한다고 가정할 때
          },
        });
        if (response.ok) {
          const result = await response.json();
          setUserDetails({
            id: result.data.authenticationId,
            nickname: result.data.nickname,
            phone: result.data.phone,
          });
        } else {
          throw new Error(
            `Failed to fetch: ${response.status} ${response.statusText}`
          );
        }
      } catch (err) {
        setError("에러발생");
        console.error("error:", err); // 브라우저 콘솔에 오류 로깅
      }
    };

    fetchUserDetails();
  }, [memberId]);

  const handlePasswordChange = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!password || !newPassword || !confirmPassword) {
      alert("모든 필드를 입력해야 합니다.");
      return;
    }
    if (newPassword !== confirmPassword) {
      alert("입력한 두 비밀번호가 일치하지 않습니다.");
      return;
    }

    try {
      const response = await fetch("http://34.64.233.12:8080/member/password", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          memberId: memberId!,
        },
        body: JSON.stringify({
          previousPassword: password,
          newPassword: newPassword,
          newPasswordVerification: newPassword,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        alert(result.message); // 비밀번호 변경 성공 메시지
        setShowPasswordForm(false); // 폼 숨기기
        setPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        const errorResponse = await response.json();
        alert(errorResponse.message); // 오류 메시지 표시
      }
    } catch (error: unknown) {
      alert("내부서버오류?!.");
    }
  };
  return (
    <div>
      <h1>My Page</h1>
      {error && (
        <p className="error" style={{ color: "red" }}>
          {error}
        </p>
      )}
      <p>ID: {userDetails.id}</p>
      <p>닉네임: {userDetails.nickname}</p>
      <p>핸드폰 번호: {userDetails.phone}</p>
      <button
        onClick={() => setShowPasswordForm(!showPasswordForm)}
        className="toggleButton"
      >
        비밀번호 변경
      </button>
      {showPasswordForm && (
        <form onSubmit={handlePasswordChange}>
          <input
            type="password"
            placeholder="기존 비밀번호"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="새 비밀번호"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <input
            type="password"
            placeholder="새 비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <button type="submit">비밀번호 변경</button>
        </form>
      )}
      <button onClick={() => navigate("/home/:memberId")} className="homeButton">
        홈으로
      </button>
    </div>
  );
};

export default Page;