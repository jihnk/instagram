import Link from 'next/link';
import { ReactElement } from 'react';

import { usePostContext } from '../context';

const CommentSection = (): ReactElement | null => {
  const { commentCount, id } = usePostContext();

  return <Link href={`/${id}`}>댓글 {commentCount}개 모두 보기</Link>;
};

export { CommentSection };
