import React from 'react'
import gql from 'graphql-tag'
import {graphql} from 'react-apollo'
import ProductGrid from './ProductGrid'


const Home = ({data:{loading,error,products}}) => {
  if(error) return <div>Error</div>
  return <ProductGrid products={products} />
}

const productList = gql`
query products{
    products (orderBy: updatedAt_DESC first: 20) {
        name
        id
        premium
        slug
        tags {
            name
            slug
            description
          }
          company {
            name
            id
            premium
            logo{
              handle
            }
          }
        image{
          id
          handle
        }
        tagLine
        premium
    },
    productsConnection {
      aggregate {
        count
      }
    }
}
`

export default graphql(productList)(Home)
