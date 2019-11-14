import React from 'react';
import Footer from '../components/Footer';
import Home from '../components/Home';
import PageHeader from '../components/PageHeader';
import ContentPage from '../components/ContentPage';
import PageMenu from '../components/PageMenu';
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
        <Footer />}
      </div>
    </>
  );
}

export default withTracker(Index);