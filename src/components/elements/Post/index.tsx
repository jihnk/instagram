import type { HTMLAttributes, ReactElement } from 'react';
import type { Post as PostType } from 'src/type/post';

import { PostAction } from './components/PostAction';
import { PostContent } from './components/PostContent';
import { PostDesc } from './components/PostDesc';
import { PostHeader } from './components/PostHeader';
import { PostLike } from './components/PostLike';
import PostContext from './context';

export interface PostProps extends HTMLAttributes<HTMLDivElement> {
  postInfo: Partial<PostType>;
}

const Post = ({ postInfo, children }: PostProps): ReactElement => {
  return (
    <PostContext.Provider value={postInfo}>{children}</PostContext.Provider>
  );
};

export default Post;

Post.PostHeader = PostHeader;
Post.PostContent = PostContent;
Post.PostAction = PostAction;
Post.PostLike = PostLike;
Post.PostDesc = PostDesc;
