import { ReactElement } from 'react';
import styled from 'styled-components';

import { usePostContext } from '../context';

const PostCommentList = styled.div`
  padding: 0 12px;
`;

const PostComment = (): ReactElement | null => {
  const { description } = usePostContext();

  return (
    <PostCommentList>
      <span>{description}</span>
    </PostCommentList>
  );
};

export { PostComment };
