import React from "react"
// import { Link } from "gatsby"
// import {SpringLink} from '../components/navigation/springLink'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from "../layouts/page"
import SEO from "../components/seo"

const Trimet = () => (
  <Layout>
    <SEO title="About Noel" />
    <Container className='my-5'>
        <Row>
          <Col>
            <h1>TriMet</h1>
            <p>As their web designer, I work on anything involved with a screen.</p>
          </Col>
        </Row>
    </Container>
  </Layout>
)

export default Trimet
