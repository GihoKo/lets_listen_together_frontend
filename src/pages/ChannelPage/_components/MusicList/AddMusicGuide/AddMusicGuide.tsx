import Guide from '@/components/Atoms/Badge/Guide';
import useMusicListStore from '@/store/useMusicListStore';
import styled from 'styled-components';

export default function AddMusicGuide() {
  const { musicList } = useMusicListStore();

  return (
    <>
      {musicList.length === 0 ? (
        <Wrapper>
          <Guide>{`Add Music!`}</Guide>
        </Wrapper>
      ) : null}
    </>
  );
}

const Wrapper = styled.div`
  position: absolute;
  right: 48px;

  @media (max-width: 768px) {
    right: 56px;
  }
`;
