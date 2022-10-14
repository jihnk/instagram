import { ReactElement } from 'react';
import styled from 'styled-components';

import { Heart, Message, Bookmark, Comment } from '@icons';

const PostActionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

const PostActionLeft = styled.div`
  display: flex;
  flex: 0 1 100px;
  justify-content: space-between;
`;

const PostAction = (): ReactElement | null => {
  return (
    <PostActionWrapper>
      <PostActionLeft>
        <button type="button">
          <Heart height={24} width={24} />
        </button>
        <button type="button">
          <Comment height={24} width={24} />
        </button>
        <button type="button">
          <Message height={24} width={24} />
        </button>
      </PostActionLeft>
      <button type="button">
        <Bookmark height={24} width={24} />
      </button>
    </PostActionWrapper>
  );
};

export { PostAction };
