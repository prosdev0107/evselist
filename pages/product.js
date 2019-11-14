import React from 'react'
import PremiumProduct from '../Components/PremiumProduct';
import PageMenu from '../Components/PageMenu';
import Footer from '../Components/Footer';
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
