import React from 'react';
import { useRouter } from 'next/router';
import Header from 'components/organisms/home-header/home-header';
import { Content } from './home.style';

/**
 * This is the Home component
 * @returns {React.Component}
 */
const Home = () => {
  const router = useRouter();
  return (
    <>
      <Header />
      <Content>
        <div onClick={() => router.push('/complete-signup')}>oieeeee</div>
      </Content>
    </>
  );
};

export default Home;
