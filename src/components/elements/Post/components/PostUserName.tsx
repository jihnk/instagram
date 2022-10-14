import Link from 'next/link';
import { ReactElement } from 'react';

import { usePostContext } from '../context';

const PostUserName = (): ReactElement | null => {
  const { author } = usePostContext();

  return (
    <Link href={`/${author?.nickname}`}>
      <button type="button">{author?.name}</button>
    </Link>
  );
};

export { PostUserName };
