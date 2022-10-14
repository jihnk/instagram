import React, { ReactElement } from 'react';

import PostCard from '@modules/post/Post';
import { Post } from '@type/post';

import { PostListWrapper } from './styled';

const PostList = (): ReactElement => {
  const postInfo: Partial<Post> = {
    author: {
      email: 'dd',
      id: '122',
      isMe: false,
      name: '가짜 username',
      nickname: '닉네임',
      postCount: 1,
      posts: [],
      profileImage: 'dd',
      quotes: 'dd'
    },
    description: '가짜 description',
    likeCount: 12,
    medias: [
      { height: 300, width: 300, src: '/fake.jpg', type: 'Image' },
      { height: 300, width: 300, src: '/fake.jpg', type: 'Image' }
    ],
    commentCount: 12,
    comments: [
      {
        author: {
          email: 'dd',
          id: '122',
          isMe: false,
          name: 'dd',
          nickname: 'asd',
          postCount: 1,
          posts: [],
          profileImage: 'dd',
          quotes: 'dd'
        },
        createdAt: '22022-10-13',
        id: 'dd',
        description: '가짜코멘트',
        likeCount: 1,
        isLike: false,
        isMine: false,
        likeMembers: [],
        subCommentCount: 0
      }
    ]
  };

  return (
    <PostListWrapper>
      <PostCard postInfo={postInfo} />
    </PostListWrapper>
  );
};

export default PostList;
