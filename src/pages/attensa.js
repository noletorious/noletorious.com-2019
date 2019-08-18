import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layouts/page"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import attensaLogoAnimation from '../images/attensa-animation.gif'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

const Attensa = () => {
  const data = useStaticQuery(graphql`
  query {
    standupImage: file(relativePath: { eq: "attensa-standup.jpg" }) {
      childImageSharp {
        fluid(
          quality: 100
        ) {
          ...GatsbyImageSharpFluid
        }
      }
  }
  attensaWhiteImage: file(relativePath: { eq: "attensa-white.png" }) {
    childImageSharp {
      fluid(
        quality: 100
      ) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  silosImage: file(relativePath: { eq: "attensa-silos.png" }) {
    childImageSharp {
      fluid(
        quality: 100
      ) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  solOneImage: file(relativePath: { eq: "attensa-solOne.png" }) {
    childImageSharp {
      fluid(
        quality: 100
      ) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  solTwoImage: file(relativePath: { eq: "attensa-solTwo.png" }) {
    childImageSharp {
      fluid(
        quality: 100
      ) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  shoulderImage: file(relativePath: { eq: "attensa-shoulder.jpg" }) {
    childImageSharp {
      fluid(
        quality: 100
      ) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  topicViewImage: file(relativePath: { eq: "attensa-topicView.png" }) {
    childImageSharp {
      fluid(
        quality: 100
      ) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  mobileLoginImage: file(relativePath: { eq: "attensa-mobLogin.png" }) {
    childImageSharp {
      fluid(
        quality: 100
      ) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  mobileMyTopicsImage: file(relativePath: { eq: "attensa-mobMyTopics.png" }) {
    childImageSharp {
      fluid(
        quality: 100
      ) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  mobileReadViewImage: file(relativePath: { eq: "attensa-mobReadView.png" }) {
    childImageSharp {
      fluid(
        quality: 100
      ) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  mobileTopicViewImage: file(relativePath: { eq: "attensa-mobTopicView.png" }) {
    childImageSharp {
      fluid(
        quality: 100
      ) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  landingPageImage: file(relativePath: { eq: "attensa-LP.png" }) {
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
            <Img fluid={data.attensaWhiteImage.childImageSharp.fluid} style={{maxWidth:'200px',marginBottom:'.5em', marginLeft:'-.5em'}}/>
            <h5>Portland, Oregon</h5>
            &nbsp;
            <h5>Role:</h5>
            <p>Visual/UI Designer <span className="text-muted small">2014-2017</span></p>
            &nbsp;
            <h5>Day to day responsibilities:</h5>
            <p>Product, UX, Visual Design, Branding, Infographics, and Content Marketing</p>
            &nbsp;
          </Col>
        </Row>
        {/* Image */}
        <Row>
          <Col sm={{span:12}} md={{span:12}}>
            <Img fluid={data.shoulderImage.childImageSharp.fluid} fadeIn={true}/>
          </Col>
        </Row>
        <Row>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
          &nbsp;
          <h3>People and their topics of interest</h3>
          &nbsp;
          <p>Getting the right information, to the right people, at the right time—that's what Attensa does well. On a typical day, I collaborated with strategic marketers, engineers and product managers. My main role was to build visual content that helped educate on the problem Attensa is solving, along with prototyping high fidelity proof of concept user flows for exploration or as a design reference to hand off to developers for discussions/implementation.</p> 
          &nbsp;
          <h3>Problem:</h3>
          &nbsp;
          <div className="rounded mb-4">
            <Img fluid={data.silosImage.childImageSharp.fluid} fadeIn={true}/>
          </div>
          <p>Disseminating information within a company is a lot easier said than done. Especially if your company is a large enterprise with different departments with siloed communication channels.</p>
          &nbsp;
          <h3>Attensa Solution:</h3>
          &nbsp;
          <p>Give topic experts a platform to manage information sources and give them the power control over how their content is recieved by their audience.</p>
          <Img fluid={data.solOneImage.childImageSharp.fluid} className="my-5" fadeIn={true}/>
          <Img fluid={data.solTwoImage.childImageSharp.fluid} className="my-5" fadeIn={true}/>
          &nbsp;
          <h3 className="mt-5">Strategy/Design:</h3>
          <p>During my time at Attensa, I helped design the Topic view segment of the app. A Topic is essentially a container managed by content curators, that consumers can subscribe or be assigned to depending on how the organization setup. I collaborated closely with product managers on working through and exploring UX flows on main tasks as well as micro-interactions.</p>
          &nbsp;
          <p>This does not reflect the current product, but here are a few screen mockup I can share:</p>
          </Col>
        </Row>
        <Row>
          <Col sm={{span:12}} md={{span:12}}>
            <div className="w-100 py-4">
              <Img className='mx-auto' fluid={data.topicViewImage.childImageSharp.fluid} style={{maxWidth:'900px'}} fadeIn={true}/>
              <p className="small text-muted text-center">Topic View on the consumer side</p>
            </div>            
          </Col>
        </Row>
        <Row>
          <Col xs={{span:2}} sm={{span:3}}>
            <div className="w-100 py-4">
              <Img className='mx-auto' fluid={data.mobileLoginImage.childImageSharp.fluid} style={{maxWidth:'900px'}} fadeIn={true}/>
              <p className="small text-muted text-center">App Login Screen</p>
            </div>            
          </Col>
          <Col xs={{span:2}} sm={{span:3}}>
            <div className="w-100 py-4">
              <Img className='mx-auto' fluid={data.mobileMyTopicsImage.childImageSharp.fluid} style={{maxWidth:'900px'}} fadeIn={true}/>
              <p className="small text-muted text-center">My Topics View displaying relevancy</p>
            </div>            
          </Col>
          <Col xs={{span:2}} sm={{span:3}}>
            <div className="w-100 py-4">
              <Img className='mx-auto' fluid={data.mobileReadViewImage.childImageSharp.fluid} style={{maxWidth:'900px'}} fadeIn={true}/>
              <p className="small text-muted text-center">Reading View Example</p>
            </div>            
          </Col>
          <Col xs={{span:2}} sm={{span:3}}>
            <div className="w-100 py-4">
              <Img className='mx-auto' fluid={data.mobileTopicViewImage.childImageSharp.fluid} style={{maxWidth:'900px'}} fadeIn={true}/>
              <p className="small text-muted text-center">Topic View of NYT Example</p>
            </div>            
          </Col>
        </Row>
        <Row>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
          &nbsp;
          <h3 className="mt-5">Visual Design:</h3>
          <p>As I used the product myself, I started to really understand the luxuries of having content curated for me with AI and delivered to me when I specify. This taught me to design with empathy toward what users want. Not only product design but also for pages for potential customers.</p>
          &nbsp;
          <Img fluid={data.landingPageImage.childImageSharp.fluid} className="my-5" fadeIn={true}/>
          &nbsp;
          <p>I spent most of my time designing responsive email templates for each customer instance, infographics as long-tail content for marketing purposes, and mockup landing pages for team buy off as well as the landing page itself.</p>
          &nbsp;
          </Col>
        </Row>
    </Container>
    <Container fluid style={{background:"#323232",paddingTop:'100px',paddingBottom:'100px'}}>
      <Row>
          <Col sm={{span:12}} md={{span:12}}>
            &nbsp;
            <img src={attensaLogoAnimation} className="mx-auto d-block" style={{maxWidth:'600px'}} alt="Attensa Motion" />
          </Col>
        </Row>
    </Container>
  </Layout>
  )
}

export default Attensa
