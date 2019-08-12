import React from "react"
// import { Link } from "gatsby"
// import {SpringLink} from '../components/navigation/springLink'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from "../layouts/page"
import SEO from "../components/seo"

const Attensa = () => (
  <Layout>
    <SEO title="About Noel" />
    <Container className='my-5'>
        <Row>
          <Col>
            <h1>Attensa</h1>
            <p>This is where I grew as a visual designer.</p>
          </Col>
        </Row>
    </Container>
  </Layout>
)

export default Attensa
