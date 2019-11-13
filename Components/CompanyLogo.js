import React from 'react'
import { graphCmsImageUrl } from '../lib'

class CompanyLogo extends React.Component{
  render() {
    const company = this.props.company;
    const showLogo = this.props.showLogo;
    if( showLogo && company.logo) return <img className='company-logo'
      alt={company.name}
      src={graphCmsImageUrl(company.logo.handle, {height:60})} />
    if(company.name) return <div className='company-name'>{company.name}</div>
    return <div />
  }
}

export default CompanyLogo
