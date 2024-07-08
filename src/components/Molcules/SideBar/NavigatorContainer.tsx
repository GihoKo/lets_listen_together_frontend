import styled from 'styled-components';
import NavigatorItem from './NavigatorItem';
import personSvg from '../../../images/svg/person.svg';
import personFocusedSvg from '../../../images/svg/person-focused.svg';
import homeSvg from '../../../images/svg/home.svg';
import homeFocusedSvg from '../../../images/svg/home-focused.svg';
import { useLocation } from 'react-router-dom';

interface NavigatorContainerProps {
  isOpen: boolean;
}

interface SideBarLink {
  name: string;
  path: string;
  icon: string[] | string;
}

export default function NavigatorContainer({ isOpen }: NavigatorContainerProps) {
  const location = useLocation();
  const sideBarNavigator: SideBarLink[] = [
    {
      name: 'Home',
      path: '/main',
      icon: [homeSvg, homeFocusedSvg], // [default, focused]
    },
    {
      name: 'MyPage',
      path: '/main/myPage',
      icon: [personSvg, personFocusedSvg],
    },
  ];
  return (
    <Container>
      {sideBarNavigator.map((item) => {
        const isFocused = location.pathname === item.path;
        item.icon = isFocused ? item.icon[1] : item.icon[0];
        return <NavigatorItem key={item.name} isOpen={isOpen} {...item} isFocused={isFocused} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
