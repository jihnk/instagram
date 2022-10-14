import type { NextPage } from 'next';

import { getApolloServerSideProps } from '@apollo/withApollo';
import DefaultLayout from '@layouts/Default';
import PostList from '@modules/post/PostList';

const Home: NextPage = () => {
  const login = true;

  if (login) {
    return (
      <>
        <DefaultLayout>Home</DefaultLayout>
        <PostList />
      </>
    );
  }
  return <div> needs login</div>;
};

export default Home;

export const getServerSideProps = getApolloServerSideProps(async client => {
  console.log(client);
  // await client.query({
  //   query: GET_DIE
  // });
});
