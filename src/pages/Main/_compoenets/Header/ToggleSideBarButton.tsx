import useSideBarStore from '@/store/useSideBarStore';
import SideBarOpenSvg from '@/images/svg/sidebar-open.svg';
import styled from 'styled-components';

export default function ToggleSideBarButton() {
  const { toggle } = useSideBarStore();
  return (
    <Wrapper>
      <img src={SideBarOpenSvg} alt='사이드바 오픈 이미지' onClick={toggle} />
    </Wrapper>
  );
}

const Wrapper = styled.button`
  width: 48px;
  height: 48px;

  display: none;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;

    cursor: pointer;
  }

  @media (max-width: 768px) {
    display: block;
  }
`;
