import React from "react"

import HomePageLayout from "../layouts/homePage"
import Image from "../components/image"
import SEO from "../components/seo"

import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

const IndexPage = () => (
  <HomePageLayout>
    <SEO title="Noel Torres Portfolio"/>
    <Container className='h-100 bg-primary' fluid="true">
      <Row className='h-100'>
        <Col xs={{span:6}} className={['h-100','text-white','d-flex','justify-content-center', 'align-items-center','bg-accent'].join(' ')}>
          <h3><span role='img' aria-label="golfer">🏌️</span> My name is Noel, I create digital experiences for people.</h3>
        </Col>
        <Col xs={{span:6}} className={['d-flex','align-items-center'].join(' ')}>
          <div className={['m-auto'].join(' ')} style={{ minWidth:`300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Col>
      </Row>
      <Row className='h-100'>
        <Col xs={{span:6}} className={['text-white','d-flex','justify-content-center', 'align-items-center','flex-column','bg-danger'].join(' ')}>
          <h3>This should be a Project</h3>
        </Col>
        <Col xs={{span:6}} className={['d-flex','align-items-center'].join(' ')}>
          <div className={['m-auto'].join(' ')} style={{ minWidth:`300px`, marginBottom: `1.45rem` }}>
            <Image />
          </div>
        </Col>
      </Row>
    </Container>
    
  </HomePageLayout>
)

export default IndexPage
