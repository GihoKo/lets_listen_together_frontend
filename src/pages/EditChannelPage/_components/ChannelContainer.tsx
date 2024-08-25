// libraries
import styled from 'styled-components';

// components
import useChannelContainer from './ChannelContainer.hook';
import Channel from './Channel';

export default function ChannelContainer() {
  //logic
  const { channels } = useChannelContainer();

  // view
  return (
    <Container>
      <ContentTitle>List</ContentTitle>
      {!channels || channels.length === 0 ? (
        <NoChannels>
          채널이 존재하지 않습니다.
          <br /> 채널을 생성해주세요.
        </NoChannels>
      ) : (
        channels.map((channel) => <Channel key={channel.id} channel={channel} />)
      )}
    </Container>
  );
}

const NoChannels = styled.div`
  font-size: 16px;
  color: var(--grey-grey600);
`;

const Container = styled.ul`
  flex-grow: 1;
  border-radius: 16px;
  border: 1px solid var(--grey-grey300);
  max-width: 640px;

  display: flex;
  flex-direction: column;
  gap: 8px;

  padding: 32px;

  background-color: var(--grey-grey150);

  @media (max-width: 992px) {
    width: 100%;
    max-width: none;

    padding: 16px;
  }
`;

const ContentTitle = styled.h2`
  font-size: 20px;

  margin-bottom: 8px;
`;
