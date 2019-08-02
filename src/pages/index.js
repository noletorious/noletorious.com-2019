import React from "react"
import {Link} from 'gatsby'
import HomePageLayout from "../layouts/homePage"
import Image from "../components/image"
import SEO from "../components/seo"
// import Footer from "../components/footer"
import TriMetProject from "../components/Projects/projects"
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowAltDown} from '@fortawesome/free-solid-svg-icons'

const HomePage = () => (
  <HomePageLayout>
    <SEO title="Noel Torres Portfolio"/>
    <Container fluid="true" className={['vh-100'].join(' ')}>
      <Row className='h-100'>
        <Col xs={{span:12}} sm={{span:6}} className={['border-right','d-sm-flex','justify-content-center','align-items-center','flex-column'].join(' ')}>
          <h3>My name is Noel, <br />I create digital experiences for people.</h3>
          <p><Link to="#projects"><FontAwesomeIcon icon={faLongArrowAltDown} size="lg"/></Link></p>
        </Col>
        <Col xs={{span:12}} sm={{span:6}} className={['d-flex','align-items-center'].join(' ')}>
          <div className={['m-auto','img-fluid','w-100'].join(' ')}>
            <Image />
          </div>
        </Col>
      </Row>
    </Container>
    <TriMetProject />
    {/* <Footer /> */}
  </HomePageLayout>
)

export default HomePage
