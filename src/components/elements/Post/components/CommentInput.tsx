import { ReactElement } from 'react';

const CommentInput = (): ReactElement | null => {
  return (
    <form>
      <input placeholder="댓글 달기..." />
    </form>
  );
};

export { CommentInput };
