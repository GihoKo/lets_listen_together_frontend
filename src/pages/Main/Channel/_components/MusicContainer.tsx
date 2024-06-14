import styled from 'styled-components';
import { Music } from '../_types/interface';
import MusicItem from './MusicItem';

interface MusicContainerProps {
  data: Music[];
  selectMusic: (music: Music) => void;
}

export default function MusicContainer({ data, selectMusic }: MusicContainerProps) {
  return (
    <Container>
      {data.map((music) => (
        <MusicItem key={music.id} music={music} selectMusic={selectMusic} />
      ))}
    </Container>
  );
}

const Container = styled.div`
  border-bottom: 1px solid #000;
  width: 100%;
  flex-grow: 1;

  display: flex;
  flex-direction: column;
  gap: 8px;

  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
