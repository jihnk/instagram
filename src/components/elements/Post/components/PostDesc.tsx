import { ReactElement } from 'react';
import styled from 'styled-components';

import { PostDescription } from './PostDescription';
import { PostUserName } from './PostUserName';

const PostDescWrapper = styled.div`
  padding: 0 12px;
`;

const PostDesc = (): ReactElement | null => {
  return (
    <PostDescWrapper>
      <PostUserName />
      <PostDescription />
    </PostDescWrapper>
  );
};

export { PostDesc };
