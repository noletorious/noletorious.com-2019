import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layouts/page"
import SEO from "../components/seo"
import Img from 'gatsby-image'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowDown, faExternalLinkAlt} from '@fortawesome/free-solid-svg-icons'
import Scrollchor from 'react-scrollchor';

const Hop = () => {
  const data = useStaticQuery(graphql`
  query {
    hopImage: file(relativePath: { eq: "hop-fastpass-circle.png" }) {
      childImageSharp {
        fluid(
          quality: 100
        ) {
          ...GatsbyImageSharpFluid
        }
      }
  }
  hopTapImage: file(relativePath: { eq: "hop-tap.jpg" }) {
    childImageSharp {
      fluid(
        quality: 100
      ) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  hopVCTapImage: file(relativePath: { eq: "hop-vc-tap.jpg" }) {
    childImageSharp {
      fluid(
        quality: 100
      ) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  hopsterVCImage: file(relativePath: { eq: "hop-vc.jpg" }) {
    childImageSharp {
      fluid(
        quality: 100
      ) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  hopWhatsmyfareImage: file(relativePath: { eq: "hop-whatsmyfare.jpg" }) {
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
const projects = [
  {
    year:'2019',
    name: 'Whats Your Fare Questionnaire',
    status: 'Website',
    anchorLink: 'whatsyourfare'
  },
  {
    year:'2019',
    name: 'Apple Virtual Card Launch',
    status: 'Campaign',
    anchorLink: 'virtualCard'
  },
  {
    year:'2018',
    name: 'Virtual Card Hopster Animation',
    status: 'Video',
    anchorLink: 'hopsterVCAnimation'
  },
  {
    year:'2017',
    name: 'Hopster Launch Commercials',
    status: 'Video',
    anchorLink: 'hopLaunchAnimation'
  },
  {
    year:'2017',
    name: 'How to tap',
    status: 'Video',
    anchorLink: 'howToTap'
  },
  {
    year:'2017',
    name: 'Website Launch',
    status: 'Website',
    anchorLink: 'website'
  }
]
return (
  <Layout>
    <SEO title="About Noel" />
    <Container className='my-5 text-light'>
        <Row>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
            <Img fluid={data.hopImage.childImageSharp.fluid} style={{maxWidth:'100px'}}/>
            <h5 className="mt-2">Portland, Oregon</h5>
            &nbsp;
            <h5>Role:</h5>
            <p>Web Designer/Developer <span className="text-muted">(Current)</span></p>
            &nbsp;
            <h5>Day to day</h5>
            <p>Hand modeling, video production, motion graphics, 2D animation, UI Design</p>
            &nbsp;
          </Col>
        </Row>
        {/* Image */}
        <Row>
          <Col sm={{span:12}} md={{span:12}}>
            <Img fluid={data.hopTapImage.childImageSharp.fluid} fadeIn={true}/>
          </Col>
        </Row>
        {/* Introduction */}
        <Row>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
          &nbsp;
          <h2 className="mt-5">Remeber to tap ever time</h2>
          &nbsp;
          <p className="mb-5">My first year working with TriMet, we launched our separate fare system Hop Fastpass. During this project I worked heavily on animating the <em>hopster</em> trio, building micro-websites for marketing campaigns, along with providing design references for developers to implement.</p>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Year</th>
                <th>Project</th>
                <th>Type</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project)=>(
                <tr>
                  <td>{project.year}</td>
                  <td>{project.name}</td>
                  <td>{project.status}</td>
                  <td className="text-center">
                    <Scrollchor to={'#'+project.anchorLink}>
                      <FontAwesomeIcon icon={faArrowDown}></FontAwesomeIcon>
                    </Scrollchor>
                  </td>
                </tr>
              ))
              }
            </tbody>
          </Table>
          &nbsp;
          </Col>
        </Row>
        {/* whatsyourfare */}
        <Row className="my-5" id="virtualCard">
          <Col sm={{span:12}} md={{span:8, offset:2}}>
              <h4>Whats your fare questionnare</h4>
              <p className="text-muted small">August 2019</p>
              &nbsp;
              {/* <Img fluid={data.hopVCTapImage.childImageSharp.fluid} fadeIn={true}/> */}
              <p>[insert gif of second to the last screen, animating to the a you-got-phone option - in browser]</p>
              &nbsp;
              <p>With the all the different payment options riders have, which one fits them the best? We came up with a questionare workflow that helps every kind of rider.</p>
          </Col>
        </Row>
        {/* Whatsmyfare Image */}
        <Row>
          <Col sm={{span:12}} md={{span:12}}>
            <h4 className="mb-5">The Workflow</h4>
            <Img className="my-5" fluid={data.hopWhatsmyfareImage.childImageSharp.fluid} fadeIn={true}/>
          </Col>
        </Row>
        {/* whatsmyfare continued */}
        <Row>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
              &nbsp;
              <p>Collaborating with our senior web designer and our content strategist, we found a relatively short path to figuring out what kind of payment option fits any kind of rider. My main responsibility was to build the experience, I used a Gastbyjs which is a wonderful framework built with Reactjs that is perfect for this project.</p>
              &nbsp;
              <a href="https://trimet.org/whatsmyfare/">Figure out your fare <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* Divider */}
        <Row className="my-5">
          <Col>
              <div className="border border-secondary border-bottom-0 border-right-0 border-left-0"></div>
          </Col>
        </Row>
        {/* Apple Virtual Card */}
        <Row className="my-5" id="virtualCard">
          <Col sm={{span:12}} md={{span:8, offset:2}}>
              <h4>Apple Virtual Card Launch</h4>
              <p className="text-muted small">July 2019</p>
              &nbsp;
              <Img fluid={data.hopVCTapImage.childImageSharp.fluid} fadeIn={true}/>
              &nbsp;
              <p>Worked directly with Apple’s marketing team on producing videos that demonstrated how to install and use Hop’s virtual hop card on iOS. My main roles on this project was that I be the hand model talent for print and video content and collaborated with our videographer to produce how-to videos.</p>
              <a className="d-block" href="https://www.youtube.com/watch?v=44fJcKEdTQs&list=PLtJW_Q-z9fw9uq4MPaXuk8S8opJ3IeXTA">What the how-to videos (00:09 Me!) <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
              &nbsp;
              <a href="https://trimet.org/applepay/">Learn more about it <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* Divider */}
        <Row className="my-5">
          <Col>
              <div className="border border-secondary border-bottom-0 border-right-0 border-left-0"></div>
          </Col>
        </Row>
        {/* Virtual Hopster Card Animation */}
        <Row className="my-5" id="hopsterVCAnimation">
          <Col sm={{span:12}} md={{span:8, offset:2}}>
              <h4>Virtual Hopster Card Animation</h4>
              <p className="text-muted small">July 2018</p>
              &nbsp;
              {/* <Img fluid={data.hopsterVCImage.childImageSharp.fluid} fadeIn={true}/> */}
              &nbsp;
              <p>[Insert hospter vc animation]</p>
              &nbsp;
              <p>For this project, I was tasked to create something never done in the space of Google Pay. Working with developers, I provided them an animation to include on the virtual card when the card is selected. It turned out to be subtle, cute, and retrospectively we realized the motion was a great way to indicate a valid fare</p>
              <a className="d-block" href="https://play.google.com/store/apps/details?id=org.trimet.mt.accounts">Download Hop for Android<FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* Divider */}
        <Row className="my-5">
          <Col>
              <div className="border border-secondary border-bottom-0 border-right-0 border-left-0"></div>
          </Col>
        </Row>
        {/* Hopster Launch Commercials */}
        <Row className="my-5" id="hopLaunchAnimation">
          <Col sm={{span:12}} md={{span:8, offset:2}}>
              <h4>Hopster Launch Commercials</h4>
              <p className="text-muted small">July 2017</p>
              &nbsp;
              {/* <Img fluid={data.hopsterVCImage.childImageSharp.fluid} fadeIn={true}/> */}
              &nbsp;
              <p>[Insert hopster in browser]</p>
              &nbsp;
              <p>During the launch I created two commercials. One six second ad that played on Youtube videos and a 30 second ad that was aired on television at the time.</p>
              &nbsp;
              <h4>Design:</h4>
              <p>Create a message that helps demonstrate what this new Hop Fastpass is and what it can do.</p>
              <a className="d-block" href="https://youtu.be/rEfZ9AhD1yw?list=PLtJW_Q-z9fw84dtHW2sraG_q_MzS_b-A8">View the video playlist <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* Divider */}
        <Row className="my-5">
          <Col>
              <div className="border border-secondary border-bottom-0 border-right-0 border-left-0"></div>
          </Col>
        </Row>
        {/* Virtual Hopster Card Animation */}
        <Row className="my-5" id="howToTap">
          <Col sm={{span:12}} md={{span:8, offset:2}}>
              <h4>How to tap</h4>
              <p className="text-muted small">July 2017</p>
              &nbsp;
              {/* <Img fluid={data.hopsterVCImage.childImageSharp.fluid} fadeIn={true}/> */}
              &nbsp;
              <p>[Insert how to tap video in browser]</p>
              &nbsp;
              <p>The Hop Fastpass at the time was a new fare system people would have to learn and hopefully adopt as a habit to use when paying for your fare. Creating videos that helped descibe that to users was essential. Not only to remind people to tap everytime they ride, but to educate people that this is a more cost-efficient way to take public transit.</p>
              &nbsp;
              <a className="d-block" href="https://youtu.be/rEfZ9AhD1yw?list=PLtJW_Q-z9fw84dtHW2sraG_q_MzS_b-A8">View the how-to play list <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* Divider */}
        <Row className="my-5">
          <Col>
              <div className="border border-secondary border-bottom-0 border-right-0 border-left-0"></div>
          </Col>
        </Row>
        {/* Website Launch */}
        <Row className="my-5" id="howToTap">
          <Col sm={{span:12}} md={{span:8, offset:2}}>
              <h4>Website Launch</h4>
              <p className="text-muted small">August 2017</p>
              &nbsp;
              {/* <Img fluid={data.hopsterVCImage.childImageSharp.fluid} fadeIn={true}/> */}
              &nbsp;
              <p>[Insert hop webiste video in browser]</p>
              &nbsp;
              <p>Although I did not design the website, I helped with providing motion to graphics on the site as well as design references for developers during our change orders to the website.</p>
              &nbsp;
              <a className="d-block" href="https://myhopcard.com">Go to myhopcard.com <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
    </Container>
    <Container fluid style={{background:"#323232",paddingTop:'300px',paddingBottom:'300px'}}>
      <Row>
          <Col xs={{span:12}} sm={{span:8,offset:2}} md={{span:6, offset:3}}>
            &nbsp;
            {/* <img src={attensaLogoAnimation} className="mx-auto d-block" style={{maxWidth:'600px'}} alt="Attensa Motion" /> */}
            <p className="text-center text-light">[Instert hop bumper gif]</p>
          </Col>
        </Row>
    </Container>
  </Layout>
  )
}

export default Hop