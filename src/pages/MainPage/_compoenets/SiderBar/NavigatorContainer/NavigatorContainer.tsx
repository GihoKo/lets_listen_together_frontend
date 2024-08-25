// libraries
import styled from 'styled-components';

// hooks
import useNavigatorContainer from './NavigatorContainer.hook';

// components
import Navigator from './Navigator/Navigator';

// types
import { NavigatorContainerProps } from './NavigatorContainer.type';

export default function NavigatorContainer({ isOpen }: NavigatorContainerProps) {
  // logics
  const { location, SIDEBAR_NAVIGATORS } = useNavigatorContainer();

  // view
  if (!SIDEBAR_NAVIGATORS) return null;

  return (
    <Container>
      {SIDEBAR_NAVIGATORS.map((item) => {
        const isFocused = location.pathname === item.path;
        item.icon = isFocused ? item.icon[1] : item.icon[0];
        return <Navigator key={item.name} isOpen={isOpen} {...item} isFocused={isFocused} />;
      })}
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 1px solid var(--grey-grey300);

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding-bottom: 8px;

  @media (max-width: 768px) {
    padding: 8px;
  }
`;
