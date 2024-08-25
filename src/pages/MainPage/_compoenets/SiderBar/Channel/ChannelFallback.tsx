// libraries
import styled from 'styled-components';

export default function ChannelFallback() {
  const ChannelList = [0, 1, 2, 3, 4];

  return (
    <ChannelContainer>
      {ChannelList.map((channel) => (
        <Channel key={channel} />
      ))}
    </ChannelContainer>
  );
}

const ChannelContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  gap: 8px;
`;

const Channel = styled.div`
  border-radius: 12px;

  width: 100%;
  height: 40px;

  background-color: var(--grey-grey200);
`;
