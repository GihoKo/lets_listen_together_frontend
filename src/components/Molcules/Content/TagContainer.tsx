import styled from 'styled-components';

interface TagContainerProps {
  tags: string[] | undefined;
}

export default function TagContainer({ tags }: TagContainerProps) {
  return <Container>{tags?.length === 0 ? <VoidTag /> : tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}</Container>;
}

const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 8px;

  overflow-x: hidden;
`;

const VoidTag = styled.div`
  height: 20px;
`;

const Tag = styled.div`
  padding: 4px 8px;
  border-radius: 12px;
  background-color: var(--grey-grey150);
  font-size: 12px;
  color: var(--grey-grey600);
  white-space: nowrap;

  cursor: pointer;

  &:hover {
    color: var(--yellow-galaxyYellow);
  }
`;
