import React from 'react'
import PremiumProduct from '../components/PremiumProduct';
import PageMenu from '../components/PageMenu';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import withTracker from '../utils/withTracker';

function product() {
  const router = useRouter();

  return (
    <>
      <main>
        <PageMenu />
        {router.query.slug !== undefined && <PremiumProduct slug={router.query.slug} />}
      </main>
      <Footer />
    </>
  )
}

export default withTracker(product)
