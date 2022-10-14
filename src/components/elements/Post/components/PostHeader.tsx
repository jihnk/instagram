import { ReactElement } from 'react';
import styled from 'styled-components';

import Dots from 'src/icons/Dots';

import { PostUserName } from './PostUserName';

const PostHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: #c1c2c3;
  @media screen and (min-width: 640px) {
    height: 56px;
  }
`;

const PostHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PostHeader = (): ReactElement | null => {
  return (
    <PostHeaderWrapper>
      <PostHeaderLeft>
        <PostUserName />
      </PostHeaderLeft>

      <Dots height={24} width={24} />
    </PostHeaderWrapper>
  );
};

export { PostHeader };
