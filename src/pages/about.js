import React from "react"
import { Link } from "gatsby"
import {SpringLink} from '../components/navigation/springLink'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import Layout from "../layouts/page"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About Noel" />
    <Container className='my-5'>
        <Row>
          <Col>
            <h1>Full stack frontend designer</h1>
            <p>Famous for my hand modeling, I design and develop web interfaces. Creatively I'm a productionist, personally I am a INTP. As a web designer, I'd like to say I help solve problems and build helpful visual content that communicates a message. Learning and building web experiences that are meaningful and with thought is the fun in the challenge. </p>
          </Col>
          <Col>
            <h1>Noel Torres</h1>
            <p>Famous for my hand modeling, I design and develop web interfaces. Creatively I'm a productionist, personally I am a INTP. As a web designer, I'd like to say I help solve problems and build helpful visual content that communicates a message. Learning and building web experiences that are meaningful and with thought is the fun in the challenge. </p>
          </Col>
        </Row>
        
        <Link to="/">Go back to the homepage</Link>
        <SpringLink to="/evolution-of-my-portfolio">latest blog post</SpringLink>
    </Container>
  </Layout>
)

export default About
