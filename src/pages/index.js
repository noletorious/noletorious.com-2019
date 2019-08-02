import React from "react"
import {Link} from 'gatsby'
import HomePageLayout from "../layouts/homePage"
import Image from "../components/image"
import SEO from "../components/seo"
import Footer from "../components/footer"
import TriMetProject from "../components/Projects/TriMet.js"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const IndexPage = () => (
  <HomePageLayout>
    <SEO title="Noel Torres Portfolio"/>
    <Container className='h-100' fluid="true">
      <Row className='h-100'>
        <Col xs={{span:12}} sm={{span:6}} className={['text-white','d-flex','justify-content-center', 'align-items-center','bg-accent','flex-column'].join(' ')}>
          <h3>
            <span role='img' aria-label="golfer">🏌️</span> My name is Noel, I create digital experiences for people.
          </h3>
          <p><Link to="/evolution-of-my-portfolio">latest blog post</Link></p>
          <p><Link to="#trimet">⬇</Link></p>
        </Col>
        <Col xs={{span:12}} sm={{span:6}} className={['d-flex','align-items-center'].join(' ')}>
          <div className={['m-auto','img-fluid','w-100'].join(' ')}>
            <Image />
          </div>
        </Col>
      </Row>
    </Container>
    <TriMetProject />
    <Footer />
  </HomePageLayout>
)

export default IndexPage
