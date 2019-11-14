import React from 'react';
import Footer from '../Components/Footer';
import Home from '../Components/Home';
import PageHeader from '../Components/PageHeader';
import ContentPage from '../Components/ContentPage';
import PageMenu from '../Components/PageMenu';
import { useRouter } from 'next/router';
import withTracker from '../utils/withTracker';

function Index() {
  const router = useRouter();
  return (
    <>
      <div>
        {router.query.slug === undefined && <PageHeader />}
        <PageMenu />
        <main>
          {router.query.slug === undefined && <Home />}
          {router.query.slug !== undefined && <ContentPage slug={router.query.slug} />}
        </main>
        <Footer />
      </div>
    </>
  );
}

export default withTracker(Index);