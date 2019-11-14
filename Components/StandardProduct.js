import React from 'react'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'
import { graphCmsImageUrl } from '../utils/lib'
import Link from 'next/link'
import './Product.css'
import { Label, Grid, Icon } from 'semantic-ui-react'

const StandardProduct = ({ data: { error, product } }) => {
  if (error) return <h1>Error fetching the Product!</h1>
  return (
    <article>
      <Grid.Row>
        <Grid.Column>
          <Link href="/"><a className="close-search">Go Back</a></Link>
          <Icon name='share alternate' size='big' style={{ float: 'right' }} />
        </Grid.Column>
      </Grid.Row>
      <main>
        {product ?
          (<div className='Product-placeholder'>
            {product.image.length > 0 ? (
              <img
                className="center"
                alt={product.name}
                src={graphCmsImageUrl(product.image[0].handle, { height: 650, width: 366, fit: 'crop' })}
              />) : (<img tag='alternative image' class="center" src='https://media.springernature.com/lw410/springer-cms/rest/v1/img/10046734/v2/4by3?as=jpg' />)}
            <h3>{product.name}</h3>
            <div className='description-product container'>{product.description}</div>
            <div className='Product-tags-view'>
              {product.tags.map(tag => {
                return <Link key={tag.slug} href={`/tag/${tag.slug}`} >
                  <a className='tag'>
                    <Label style={{ margin: '5px' }}> {tag.name} </Label>
                  </a>
                </Link>
              })}
            </div>
            <div className='row'>
              <h4 className='company-name'>{product.company.name}</h4>
            </div>
          </div>)
          : <div>Error Message</div>
        }
      </main>
    </article>
  )
}

export const singleProduct = gql`
  query singleProduct($id: ID!)  {
    product(where: {id: $id})  {
      id
      slug
      name
      image {
        handle
      }
      tags {
        name
        slug
      }
      company {
        name
        id
        logo{
          handle
        }
      } 
      description
    }
  }
`

export default graphql(singleProduct, {
  options: ({ match }) => ({
    variables: {
      id: match.params.slug
    }
  })
})(StandardProduct)

