import { ReactElement } from 'react';
import styled from 'styled-components';

import { usePostContext } from '../context';

const Wrapper = styled.div`
  padding: 0 12px;
  margin: 0 0 8px;
`;

const PostLike = (): ReactElement | null => {
  const { likeCount } = usePostContext();

  return (
    <Wrapper>
      <span>좋아요 </span>
      <span>{`${likeCount}개`}</span>
    </Wrapper>
  );
};

export { PostLike };
