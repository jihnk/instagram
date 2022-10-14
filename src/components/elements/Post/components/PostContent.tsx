import Image from 'next/image';
import { ReactElement } from 'react';
import styled from 'styled-components';

import { usePostContext } from '../context';

import { Media } from '@type/resource';

const PostContentWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const PostContent = (): ReactElement | null => {
  const { medias } = usePostContext();

  return (
    <PostContentWrapper>
      {medias?.map((media: Media) => {
        return <Image layout="fill" src={media.src} key={media.src} />;
      })}
    </PostContentWrapper>
  );
};

export { PostContent };
