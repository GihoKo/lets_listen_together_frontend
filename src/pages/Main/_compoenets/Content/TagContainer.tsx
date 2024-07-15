// libraries
import styled from 'styled-components';

// types
import { TagContainerProps } from './TagContainer.type';

export default function TagContainer({ tags }: TagContainerProps) {
  // view
  if (!tags || tags?.length === 0) {
    return <EmptyTag />;
  }

  return <Container>{tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}</Container>;
}

const Container = styled.div`
  width: 100%;

  display: flex;
  gap: 8px;

  overflow-x: hidden;
`;

const EmptyTag = styled.div`
  height: 20px;
`;

const Tag = styled.div`
  border-radius: 12px;

  padding: 4px 8px;
  background-color: var(--grey-grey150);
  font-size: 12px;
  color: var(--grey-grey600);
  white-space: nowrap;
  cursor: pointer;

  &:hover {
    color: var(--yellow-galaxyYellow);
  }
`;
