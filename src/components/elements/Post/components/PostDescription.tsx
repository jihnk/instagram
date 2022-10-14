import { ReactElement } from 'react';

import { usePostContext } from '../context';

const PostDescription = (): ReactElement | null => {
  const { description } = usePostContext();

  return <span>{description}</span>;
};

export { PostDescription };
