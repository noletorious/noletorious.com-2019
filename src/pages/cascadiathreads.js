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
          <h3 className="mt-3">Sharp edge design, soft material</h3>
          &nbsp;
          <p>In 2015, I had the pleasure to work on trendy Pacific Northwest project. It was a priviledge because retrospectively, I realized a lot of what I contributed was my creative expression and not following an already set format of designing a brand. As you can imagine, in a small team of three you need to take on many roles and responsibitlities; and as the Design Lead I was involved with apparel design/production, content marketing, photography and developing the online store. </p>
          &nbsp;
          <p>Unfortunately, the company was unsustainable due to the fact that everyone involved in the project could not commit to the time to developing the brand. We all understood that it is the nature of life and setting priorities.</p>
          &nbsp;
          <h4>Problem:</h4>
          &nbsp;
          <p>The startup e-commerce company needed a jump start on their web presence.</p>
          &nbsp;
          <h4>Strategy</h4>
          &nbsp;
          <ul>
            <li>Build content and products for the audience we know, young adults, 20-40 year olds, that like wearing minimal, stark colors.</li>
            <li>Cater to those near us, other Pacific Northwesterns.</li>
            <li>Differentiate ourselves and create our own niche by appealing to the tech industry.</li>
          </ul>
          &nbsp;
          <h4>Design</h4>
          &nbsp;
          <p><em>Dark and stark.</em> That was our three word description of how to approach any design. The point was to treat the design with a focus, a theme you could say, to help with design direction or concepts of other future designs.</p>
          &nbsp;
          <h5>Apparel and Collaborations</h5>
          &nbsp;
          <p>[insert image of WeWork photoshoot</p>
          &nbsp;
          <p>Worked with a local and in my opinion the best photographer and screen printing company in Portland. Oregon Screen Impressions, in 2015 we had them print our designs on organic cottom, all made in the USA. </p>
          &nbsp;
          <p>In 2016, we did a photoshot at the WeWork Custom house with Blackprints. I was a honor to work with the talented Nesrin at such a photogenic location. My role was to hire our models and make sure the photoshoot went accoringly.</p>
          &nbsp;
          <h5>Web &amp; and Digital</h5>
          &nbsp;
          <p>The website was built with Wordpress and the backend store Woocommerce. The best rule when designing a store is to keep the clear what we are selling, so the design needed to accomplish that. We used white space generously, used accents and muted colors on text to avoid having everything bold, and made sure the mobile experience was comparable.</p>
          &nbsp;
          <p>Designing the user flows of the website, here are a few examples of a few critical pages and what it would be like if users were working through them: From the front page, to a single product page, to a checkout rundown page.</p>
          &nbsp;
          <p>[insert low fidelity flow of pages described above]</p>
          &nbsp;
          <h5>The Future</h5>
          &nbsp;
          <p>As low fidelity designs got the thumbs up from others on the team, we started to develop but brought the site down late 2018. As a last thought, I really do hope we back the brand, I honestly think it has the potential to be picked up by a niche community in Portland. Enjoy a mockup of the single product page:</p>
          &nbsp;
          <p>[Insert high fidelity of product page in a browser ]</p>
          &nbsp;
          </Col>
        </Row>
    </Container>
    <Container fluid style={{background:"#323232",paddingTop:'100px',paddingBottom:'100px'}}>
      <Row>
          <Col sm={{span:12}} md={{span:12}}>
            &nbsp;
            {/* <img src={attensaLogoAnimation} className="mx-auto d-block" style={{maxWidth:'600px'}} alt="Attensa Motion" /> */}
            <p className="text-center text-light">[Insert we work photography shoot]</p>
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
