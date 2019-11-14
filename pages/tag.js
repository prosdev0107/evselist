import React from 'react';
import Tag from '../components/Tag';
import Footer from '../components/Footer';
import PageMenu from '../components/PageMenu';
import { useRouter } from 'next/router';
import withTracker from '../utils/withTracker';

function tag() {
  const router = useRouter();

  return (
    <div>
      <main>
        <PageMenu />
        {router.query.slug !== undefined && <Tag slug={router.query.slug} />}
      </main>
      <Footer />
    </div>
  )
}

export default withTracker(tag)