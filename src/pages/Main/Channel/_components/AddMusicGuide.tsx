import Guide from '@/components/Atoms/Badge/Guide';
import styled from 'styled-components';
import { AddMusicGuideProps } from './AddMusicGuide.type';

export default function AddMusicGuide({ musicList }: AddMusicGuideProps) {
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
`;
