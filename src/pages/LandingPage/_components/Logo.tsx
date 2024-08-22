import styled from 'styled-components';
import logo from '../../../images/logo.png';

export default function Logo() {
  return (
    <Wrapper>
      <img src={logo} alt='로고 이미지' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  border-radius: 50%;
  width: 160px;
  height: 160px;

  box-shadow: 0 0 20px 0 var(--mint4);

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
  }
`;
