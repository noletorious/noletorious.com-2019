/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React,{Component} from "react"
import PropTypes from "prop-types"

import Navigation from "../../components/navigation"
import HomePageSection from "../../components/homePageSection"
import Footer from "../../components/footer"

import { Spring } from 'react-spring/renderprops'
import { TransitionState } from 'gatsby-plugin-transition-link'

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
        <TransitionState>
          {({ transitionStatus }) => {
            const mount = [ 'entering','entered'].includes(transitionStatus)
            const exitStatus = [ 'exiting','exited'].includes(transitionStatus)
            const transitionStatusPop = transitionStatus === 'POP' ? true : false
            return (
              <Spring
                from={{
                  opacity: mount ? 0 : 0,
                  transform: `translateY(${exitStatus ? '10px' : 0})`
                }}
                to={{
                  opacity: mount || transitionStatusPop ? 1 : 0,
                  transform: `translateY(${mount ? 0 : '10px'})`
                }}
              >
                {props =>
                  <div> 
                    {this.state.checkIsHomePage ? 
                      <div className='vh-100 d-flex flex-column'>
                          <Navigation isHome = {this.state.checkIsHomePage}/>
                          <HomePageSection style={props} />
                      </div>
                      : <Navigation isHome = {this.state.checkIsHomePage}/>
                    }
                    <main className={['d-flex','flex-column'].join(' ')} style={props} >
                      {this.props.children}
                    </main>
                  </div>
              }
              </Spring>
            )
          }}
        </TransitionState>
        <Footer />
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
