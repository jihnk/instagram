import { createContext, useContext } from 'react';

import { Post } from '@type/post';

const PostContext = createContext<null | Partial<Post>>(null);

const usePostContext = (): Partial<Post> => {
  const post = useContext(PostContext);
  if (!post) {
    throw Error('Post 컴포넌트의 child로 사용하세요');
  }
  return post;
};

export { usePostContext };

export default PostContext;
