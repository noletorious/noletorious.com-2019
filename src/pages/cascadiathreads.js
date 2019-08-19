import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layouts/page"
import SEO from "../components/seo"
import Img from 'gatsby-image'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

const cascadiaThreads = () => {
  const data = useStaticQuery(graphql`
  query {
    ctTextLogoImage: file(relativePath: { eq: "ct-text-logo.png" }) {
      childImageSharp {
        fluid(
          quality: 100
        ) {
          ...GatsbyImageSharpFluid
        }
      }
  }
  apparelTableImage: file(relativePath: { eq: "ct-apparelTable.jpg" }) {
    childImageSharp {
      fluid(
        quality: 100
      ) {
        ...GatsbyImageSharpFluid
      }
    }
}
}
`)

return (
  <Layout>
    <SEO title="About Noel" />
    <Container className='my-5 text-light'>
        <Row>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
            <Img fluid={data.ctTextLogoImage.childImageSharp.fluid} style={{maxWidth:'200px',marginBottom:".5em"}}/>
            <h5>Portland, Oregon</h5>
            &nbsp;
            <h5>Role:</h5>
            <p>Design Lead <span className="text-muted">(2015-2017)</span></p>
            &nbsp;
            <h5>Day to day</h5>
            <p>UX Design, Visual Design, Motion Graphics, Video/Content Production, Photography, Wordpress</p>
            &nbsp;
          </Col>
        </Row>
        {/* Image */}
        <Row>
          <Col sm={{span:12}} md={{span:12}}>
            <Img fluid={data.apparelTableImage.childImageSharp.fluid} fadeIn={true}/>
          </Col>
        </Row>
        <Row>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
          &nbsp;
          <h3>Sharp edge design, soft material</h3>
          &nbsp;
          <h4>Problem:</h4>
          <p>The startup e-commerce company needed a jump start on their web presence.</p>
          &nbsp;

          &nbsp;
          <div className="py-3"></div>
          &nbsp;
          <h3 id="otp">Design</h3>
          <p>The webstore .</p>
          <a href="http://modbeta.trimet.org/">Enjoy beta <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
    </Container>
  </Layout>
  )
}

export default cascadiaThreads
