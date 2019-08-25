import React from "react"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../layouts/page"
import SEO from "../components/seo"
import Img from 'gatsby-image'
import hopWhereToGet from "../images/hop-wheretoget.gif"
import hopLogoAnimation from "../images/hop-animation.gif"
import hopGoogleVC from "../images/hop-googleVC.gif"
import hopWhatsMyFare from "../images/hop-whatsmyfare.gif"
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
  hopWebsiteImage: file(relativePath: { eq: "myhopcard.com.png" }) {
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
    name: 'Hopster Animations',
    status: 'Video',
    anchorLink: 'hopHopsterAnimmations'
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
    <SEO title="Hop Fastpass" />
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
              <h3>Whats your fare questionnare</h3>
              <p className="text-muted small">August 2019</p>
              &nbsp;
              <img className="my-3" src={hopWhatsMyFare} alt="Hop Fastpass: Whats my fare"/>
              &nbsp;
              <p>With the all the different payment options riders have, which one fits them the best? We came up with a questionare workflow that helps every kind of rider.</p>
              &nbsp;
              <h5 className="mb-5">The Workflow</h5>
              <Img className="my-5" fluid={data.hopWhatsmyfareImage.childImageSharp.fluid} fadeIn={true}/>
              &nbsp;
              <p className="mb-5">Collaborating with our senior web designer and our content strategist, we found a relatively short path to figuring out what kind of payment option fits any kind of rider. My main responsibility was to build the experience, I used a Gastbyjs which is a wonderful framework built with Reactjs that is perfect for this project.</p>
              &nbsp;
              <a target="_blank" rel="noopener noreferrer" href="https://trimet.org/whatsmyfare/">Figure out your fare <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
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
              <Img fluid={data.hopVCTapImage.childImageSharp.fluid} fadeIn={true} className="my-5"/>
              &nbsp;
              <p className="mb-5">Worked directly with Apple’s marketing team on producing videos that demonstrated how to install and use Hop’s virtual hop card on iOS. My main roles on this project was that I be the hand model talent for print and video content and collaborated with our videographer to produce how-to videos.</p>
              <p>
              <a target="_blank" rel="noopener noreferrer" className="d-block" href="https://www.youtube.com/watch?v=44fJcKEdTQs&list=PLtJW_Q-z9fw9uq4MPaXuk8S8opJ3IeXTA">What the how-to videos (00:09 Me!) <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
              </p>
              <p>
                <a target="_blank" rel="noopener noreferrer" href="https://trimet.org/applepay/">Learn more about it <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
              </p>
              &nbsp;
              
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
             <img src={hopGoogleVC} alt="Virtual Hopster Card Animation" style={{maxWidth:'200px'}} />
              &nbsp;
              <p className="mb-5">This project I was tasked to create something never done in the space of a Google Pay payment option. Working with developers, I provided them an animation to include on the virtual card when the card is selected. It turned out to be subtle, cute, and retrospectively we realized the motion was a great way to indicate a valid fare</p>
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
        <Row className="my-5" id="hopHopsterAnimations">
          <Col sm={{span:12}} md={{span:8, offset:2}}>
              <h4>Hopster Animations</h4>
              <p className="text-muted small">July 2017</p>
              &nbsp;
              {/* <Img fluid={data.hopsterVCImage.childImageSharp.fluid} fadeIn={true}/> */}
              <img src={hopWhereToGet} alt="hopster animations" className="rounded mt-3 mb-5" />
              <h4>Animation Design:</h4>
              &nbsp;
              <p>Adding motion to these characters meant adding rules to their behavior. During the early stages I got to ask questions never asked yet such as, "Can hopsters run?", "Can hopsters talk?". Setting these design constraints were important for the types of videos I eventually was instructed to create.</p>
              &nbsp;
              <p className="mb-5">During the launch I created two commercials. One six second ad that played on Youtube videos and a 30 second ad that was aired on television at the time. From the launch I've created one-off animations for social ad campaigns.</p>
              <a className="d-block"  target="_blank" rel="noopener noreferrer" href="https://youtu.be/rEfZ9AhD1yw?list=PLtJW_Q-z9fw84dtHW2sraG_q_MzS_b-A8">View the video playlist <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
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
              <Img fluid={data.hopWebsiteImage.childImageSharp.fluid} fadeIn={true}/>
              &nbsp;
              <p>Although I did not design the website, I contributed by providing motion graphic deliverables as well as design references for developers.</p>
              &nbsp;
              <a  target="_blank" rel="noopener noreferrer" className="d-block" href="https://myhopcard.com">Go to myhopcard.com <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
    </Container>
    <Container fluid style={{background:"#000",paddingTop:'100px',paddingBottom:'100px'}}>
      <Row>
          <Col xs={{span:12}} sm={{span:8,offset:2}} md={{span:6, offset:3}}>
            &nbsp;
            <img src={hopLogoAnimation} className="mx-auto img-fluid d-block" alt="Hop Motion" />
          </Col>
        </Row>
    </Container>
  </Layout>
  )
}

export default Hop