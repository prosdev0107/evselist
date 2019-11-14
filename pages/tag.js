import React from 'react';
import Tag from '../Components/Tag';
import Footer from '../Components/Footer';
import PageMenu from '../Components/PageMenu';
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