import { Link } from 'react-router-dom';
import styled from 'styled-components';

import logoImg from '../../../../src/images/logo.png';

export default function Logo() {
  return (
    <Wrapper to='/main'>
      <img src={logoImg} alt='로고 이미지' />
    </Wrapper>
  );
}

const Wrapper = styled(Link)`
  height: 48px;

  cursor: pointer;

  img {
    width: 100%;
    height: 100%;

    cursor: pointer;
  }
`;
