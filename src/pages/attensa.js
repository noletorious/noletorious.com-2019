import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layouts/page"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import attensaLogoAnimation from '../images/attensa-animation.gif'
// import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
// import {faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'

const Attensa = () => {
  const data = useStaticQuery(graphql`
  query {
    sketchImage: file(relativePath: { eq: "attensa-sketch.png" }) {
      childImageSharp {
        fluid(
          quality: 100
        ) {
          ...GatsbyImageSharpFluid
        }
      }
  }
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
    <SEO title="Attensa" />
    <Container className='mt-5 text-light'>
      {/* Job Description */}
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
            <h5>Tools:</h5>
            <p>Sketch, Invsion, Adobe CS, HubSpot, Github, Slack</p>
            &nbsp;
          </Col>
        </Row>
        {/* Image */}
        <Row>
          <Col sm={{span:12}} md={{span:12}}>
            <Img fluid={data.shoulderImage.childImageSharp.fluid} fadeIn={true}/>
          </Col>
        </Row>
        {/* Intro */}
        <Row>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
          &nbsp;
          <h3 className="mt-5">People and their topics of interest</h3>
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
          <p>Give topic experts a platform to manage information sources and give them the power to control how their content is recieved by their audience.</p>
          <Img fluid={data.solOneImage.childImageSharp.fluid} className="mt-5" fadeIn={true}/>
          <div className="mb-5 rounded-circle" style={{background:"#797979"}}>
            <Img fluid={data.solTwoImage.childImageSharp.fluid} fadeIn={true}/>
          </div>
          &nbsp;
          <h3 className="mt-5">Strategy/Design:</h3>
          <p>During my time at Attensa, I helped design the Topic view segment of the app. A Topic is essentially a container managed by content curators, where consumers can subscribe or be assigned to depending on how the organization setup. I collaborated closely with product managers on working through and exploring UX flows on main tasks as well as micro-interactions.</p>
          &nbsp;
          <p>This does not reflect the current product. But here are a few screen mockups I created to demonstrate the new feature at the time, the Topic View. Heres what I can share:</p>
          </Col>
        </Row>
        {/* Topic View Image */}
        <Row>
          <Col sm={{span:12}} md={{span:12}}>
            <div className="w-100 py-4">
              <Img className='mx-auto' fluid={data.topicViewImage.childImageSharp.fluid} style={{maxWidth:'900px'}} fadeIn={true}/>
              <p className="small text-muted text-center">Topic View on the consumer side</p>
            </div>            
          </Col>
        </Row>
        <Row>
          <Col xs={{span:6}} sm={{span:6}} md={{span:3}}>
            <div className="w-100 py-4">
              <Img className='mx-auto' fluid={data.mobileLoginImage.childImageSharp.fluid} style={{maxWidth:'900px'}} fadeIn={true}/>
              <p className="small text-muted text-center">App Login Screen</p>
            </div>            
          </Col>
          <Col xs={{span:6}} sm={{span:6}} md={{span:3}}>
            <div className="w-100 py-4">
              <Img className='mx-auto' fluid={data.mobileMyTopicsImage.childImageSharp.fluid} style={{maxWidth:'900px'}} fadeIn={true}/>
              <p className="small text-muted text-center">My Topics View displaying relevancy</p>
            </div>            
          </Col>
          <Col xs={{span:6}} sm={{span:6}} md={{span:3}}>
            <div className="w-100 py-4">
              <Img className='mx-auto' fluid={data.mobileReadViewImage.childImageSharp.fluid} style={{maxWidth:'900px'}} fadeIn={true}/>
              <p className="small text-muted text-center">Reading View Example</p>
            </div>            
          </Col>
          <Col xs={{span:6}} sm={{span:6}} md={{span:3}}>
            <div className="w-100 py-4">
              <Img className='mx-auto' fluid={data.mobileTopicViewImage.childImageSharp.fluid} style={{maxWidth:'900px'}} fadeIn={true}/>
              <p className="small text-muted text-center">Topic View of NYT Example</p>
            </div>            
          </Col>
        </Row>
        <Row>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
          &nbsp;
          <h3 className="mt-5">Research:</h3>
          &nbsp;
          <p>As I used the product myself, I started to really understand the luxuries of having content curated for me with artificial intelligence, on top of that having the granular control of how and when my content is delivered to me.</p>
          &nbsp;
          <p>The process of learning how our users used Attensa I learned first hand. On a few occasions, I was sent over to a client locations to meet their content librarians to demonstrate any new product features, and address any issues I could clarify while at there. The experience greatly influenced my approach to design.</p> 
          &nbsp;
          <p>With out access to a researcher I acted at times as a one. This direct communication I had was extemely useful as the designer because immediately then I understood what tasks users found unintuitive. Certain feedback required just an explainantion to realign our customer's workflow but most times it required me relaying feedback to our development team to refine a feature set in the app. This rapid feedback then feature change environment was extremely fun and we saw much progress in customer satisfaction.</p>
          &nbsp;
          </Col>
        </Row>
        <Row>
          <Col sm={{span:12}} md={{span:12}} className="mb-5">
            <Img fluid={data.sketchImage.childImageSharp.fluid} fadeIn={true}/>
          </Col>
        </Row>
        <Row>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
          <h3 className="mt-5">Visual Design</h3>
          &nbsp;
          <p>On the visual production side, I greatly enjoyed my time designing responsive email templates for new customer instances, creating infographics as long-tail content for marketing, building customer guideline pages, setting 2015's brand style guidelines and wireframing landing pages for team buy off, as well as building the landing page itself.</p>
          &nbsp;
          <Img fluid={data.landingPageImage.childImageSharp.fluid} className="my-5" fadeIn={true}/>
          </Col>
        </Row>
    </Container>
    <Container fluid style={{background:"#323232",marginTop:'-8em',paddingTop:'100px',paddingBottom:'100px'}}>
      <Row>
          <Col sm={{span:12}} md={{span:12}}>
            &nbsp;
            <img src={attensaLogoAnimation} className="mx-auto img-fluid d-block" alt="Attensa Motion" />
          </Col>
        </Row>
    </Container>
  </Layout>
  )
}

export default Attensa
