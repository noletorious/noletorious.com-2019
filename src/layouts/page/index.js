/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React,{Component} from "react"
import PropTypes from "prop-types"

import Navigation from "../../components/navigation"
// import HomePageSection from "../../components/homePageSection"
import Footer from "../../components/footer"

import "bootstrap/dist/css/bootstrap.css"


class Layout extends Component {

  constructor(props) {
    super(props);
    this.state = {
      checkIsHomePage: this.props.page ? true : false
    };
  }

  render(){
    return (
      <>
        <Navigation isHome = {this.state.checkIsHomePage}/>
        {/* {this.state.checkIsHomePage ? 
          <div className='vh-100 d-flex flex-column bg-primary'>
              <Navigation isHome = {this.state.checkIsHomePage}/>
              <HomePageSection />
          </div>
          : <Navigation isHome = {this.state.checkIsHomePage}/>
        } */}
        <main className={['d-flex','flex-column'].join(' ')}>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
