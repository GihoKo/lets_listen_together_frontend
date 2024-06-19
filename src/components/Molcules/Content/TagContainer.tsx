import styled from 'styled-components';

interface TagContainerProps {
  tags: string[] | undefined;
}

export default function TagContainer({ tags }: TagContainerProps) {
  return <Container>{tags?.map((tag) => <Tag key={tag}>{tag}</Tag>)}</Container>;
}

const Container = styled.div`
  display: flex;
  gap: 8px;
`;

const Tag = styled.div`
  padding: 4px 8px;
  border-radius: 12px;
  background-color: var(--gray8);
  font-size: 12px;
  color: #333;

  cursor: pointer;
`;
