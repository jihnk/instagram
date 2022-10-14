import { ReactElement } from 'react';

import Post, { PostProps } from '@elements/Post';

const PostCard = ({ postInfo }: PostProps): ReactElement => {
  return (
    <Post postInfo={postInfo}>
      <Post.PostHeader />
      <Post.PostContent />
      <Post.PostAction />
      <Post.PostLike />
      <Post.PostDesc />
    </Post>
  );
};

export default PostCard;
