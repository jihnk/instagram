import styled from 'styled-components';

import { PostUserName } from '@elements/Post/components/PostUserName';

export const PostListWrapper = styled.div`
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 640px) {
    max-width: 470px;
  }
`;

export const Name = styled(PostUserName)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;

  @media screen and (max-width: 640px) {
    max-width: 470px;
  }
`;
