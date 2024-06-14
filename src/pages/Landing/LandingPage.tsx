import { Link } from 'react-router-dom';

export default function LandingPage() {
  return (
    <>
      <h1>랜딩 페이지입니다</h1>
      <br />
      <Link to='/signIn'>로그인</Link>
      <br />
      <Link to='/signUp'>회원가입</Link>
      <br />
      <Link to='/main'>메인 페이지</Link>
      <br />
      <Link to='/main/myPage'>마이 페이지</Link>
    </>
  );
}
