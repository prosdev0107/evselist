import React from 'react'
import AddProductPage from '../components/AddProductPage';
import PageMenu from '../components/PageMenu';
import Footer from '../components/Footer';
import withTracker from '../utils/withTracker';

function add() {
  return (
    <div>
      <main>
        <PageMenu />
        <AddProductPage />
      </main>
      <Footer />
    </div>
  )
}

export default withTracker(add)
