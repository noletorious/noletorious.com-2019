import React,{Component} from "react"
import PropTypes from "prop-types"
import Navigation from "../../components/navigation"
import Footer from "../../components/footer"

import "bootstrap/dist/css/bootstrap.css"
import "./home-layout.css"

class HomeLayout extends Component {

  constructor(props) {
    super(props);
      this.state = {
        isHome: true
      };
  }

  render(){
    return (
      <>
        <div className={['position-absolute','w-100'].join(' ')}>
          <Navigation checkHome={this.state.isHome}/>
        </div>
        <main>{this.props.children}</main>
        <Footer />
      </>
    )
  }
}

HomeLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default HomeLayout
