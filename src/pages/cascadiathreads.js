import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layouts/page"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import ctAnimation from '../images/ct-animation.gif'
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
          <p>I’ve had the pleasure to work on such a trendy project. </p>
          &nbsp;
          <h4>Problem:</h4>
          <p>The startup e-commerce company needed a jump start on their web presence.</p>
          &nbsp;
          <h4>Strategy</h4>
          <ul>
            <li>Build content and products for the audience we know, young adults, 20-40 year olds, that like wearing minimal, stark colors.</li>
            <li>Cater to those near us, other Pacific Northwesterns.</li>
            <li>Differentiate ourselves and create our own niche by appealing to the tech industry.</li>
          </ul>
          &nbsp;
          <h4>Design</h4>
          <p>Being the only web designer and developer on the team, I lead the creative direction. </p>
          &nbsp;
          <p>[Image of low fidelity of homepage to product page]</p>
          &nbsp;
          <p>Then moved to higher fidelity after a few discussions and iterations.</p>
          &nbsp;
          <p>[Image of high fidelity of homepage to product page]</p>
          &nbsp;
          </Col>
        </Row>
    </Container>
    <Container fluid style={{background:"#323232",paddingTop:'100px',paddingBottom:'100px'}}>
      <Row>
          <Col sm={{span:12}} md={{span:12}}>
            &nbsp;
            {/* <img src={attensaLogoAnimation} className="mx-auto d-block" style={{maxWidth:'600px'}} alt="Attensa Motion" /> */}
            <p className="text-center text-light">[Instert ct bumper gif]</p>
          </Col>
        </Row>
    </Container>
    <Container fluid style={{background:"#000",paddingTop:'100px',paddingBottom:'100px'}}>
      <Row>
          <Col xs={{span:12}} sm={{span:8, offest:2}} md={{span:6, offset:3}}>
            &nbsp;
            <img src={ctAnimation} className="mx-auto d-block"  alt="Cascadia Threads Motion" />
          </Col>
        </Row>
    </Container>
  </Layout>
  )
}

export default cascadiaThreads
