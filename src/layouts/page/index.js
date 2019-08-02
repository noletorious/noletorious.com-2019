/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React,{Component} from "react"
import PropTypes from "prop-types"

import Navigation from "../../components/navigation"
import Footer from "../../components/footer"

import "bootstrap/dist/css/bootstrap.css"


class Layout extends Component {

  constructor(props) {
    super(props);
      this.state = {
        isHome: true
      };
  }

  render(){
    return (
      <>
        <Navigation checkHome={this.state.isHome}/>
        <div className={['d-flex','flex-column','flex-grow-1'].join(' ')}>
            <main>{this.props.children}</main>
        </div>
        <Footer />
      </>
    )
  }
}








Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
