import React from 'react'
import AddProductPage from '../Components/AddProductPage';
import PageMenu from '../Components/PageMenu';
import Footer from '../Components/Footer';
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
