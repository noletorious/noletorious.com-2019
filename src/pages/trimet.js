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

const Trimet = () => {
  const data = useStaticQuery(graphql`
  query {
    tilikumImage: file(relativePath: { eq: "tilikum.jpg" }) {
      childImageSharp {
        fluid(
          quality: 100
        ) {
          ...GatsbyImageSharpFluid
        }
      }
  }
  trimetWhiteImage: file(relativePath: { eq: "trimet-white.png" }) {
    childImageSharp {
      fluid(
        quality: 100
      ) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  otpPreviewImage: file(relativePath: { eq: "trimet-otp-preview.png" }) {
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
    name: 'Open Trip Planner',
    status: 'WIP',
    anchorLink: 'otp'
  },
  {
    year:'2019',
    name: 'New Onsite Transit Tracker',
    status: 'WIP',
    anchorLink: 'onsite'
  },
  {
    year:'2019',
    name: 'Google Earth Flythroughs',
    status: 'Ongoing',
    anchorLink: 'flythroughs'
  },
  {
    year:'2019',
    name: 'Photography: Instagram',
    status: 'Ongoing',
    anchorLink: 'insta'
  },
  {
    year:'2018',
    name: 'PDX Arrival Screens',
    status: 'Phase II',
    anchorLink: 'pdxArrivals'
  },
  {
    year:'2018',
    name: 'New Club, New Blog',
    status: 'Complete',
    anchorLink: 'ridersClub'
  },
  {
    year:'2017',
    name: 'Web Style Guide Lines',
    status: 'Ongoing',
    anchorLink: 'stylesGuide'
  }
]
return (
  <Layout>
    <SEO title="About Noel" />
    <Container className='my-5 text-light'>
        {/* Job description */}
        <Row>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
            <Img fluid={data.trimetWhiteImage.childImageSharp.fluid} style={{maxWidth:'200px', marginLeft:'-.5em'}}/>
            <h5>Portland, Oregon</h5>
            &nbsp;
            <h5>Role:</h5>
            <p>Web Designer/Developer <span className="text-muted small">(Current)</span></p>
            &nbsp;
            <h5>Day to day responsibilities:</h5>
            <p>UX Design, Visual Design, Motion Graphics, Video/Content Production, Animation Storytelling, React Front-end Development, Photography</p>
            &nbsp;
            <h5>Tools:</h5>
            <p>Adobe CS, Gitlab, VSCode, Sourcetree, WebexTeams, Slack</p>
            &nbsp;
          </Col>
        </Row>
        {/* Image */}
        <Row>
          <Col sm={{span:12}} md={{span:12}}>
            <Img fluid={data.tilikumImage.childImageSharp.fluid} fadeIn={true}/>
          </Col>
        </Row>
        <Row className='my-5'>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
          &nbsp;
          <h3>RiderComm</h3>
          &nbsp;
          <p>I work in a team that speaks directly to our customers which are public transit riders. However, riders can range from frequent riders to even non-riders. Understanding how we communicate to each type is vital to the role. At TriMet, we take the time to listen and understand customer feedback by conducting surveys, asking Twitter polls, and sending nice emails directly to them. Through this process we build rider personas that we try to speak to through our messaging and design. </p>
          <p>On a day to day basis my work can range from developing MAX arrival screens for the Portland International Airport, to taking photos for our instagram on my way to work, to animating traffic patterns when there are road changes or improvements, to designing logos. My work environment allows me to pursue projects I'm interested in.</p>
          <p>Here are some projects I’m able to share:</p>
          &nbsp;
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Year</th>
                <th>Project</th>
                <th>Status</th>
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
        {/* Open Trip Planner */}
        <Row className='my-5'>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
          <h3 id="otp">Open Trip Planner</h3>
          <Img fluid={data.otpPreviewImage.childImageSharp.fluid} fadeIn={true} />
          <p>This project is still on going so I’m limited to what I can share. This project deserves its own page.</p>
          <a href="https://trimet.org/newplanner/">Enjoy beta <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* Divider */}
        <Row className="my-5">
          <Col>
              <div className="border border-secondary border-bottom-0 border-right-0 border-left-0"></div>
          </Col>
        </Row>
        {/* Onsite Transit Tracker */}
        <Row className='my-5'>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
          <h3 id="onsite">New Onsite Transit Tracker</h3>
          <p>[Insert Image of solari screen]</p>
          <p>Improving the UI to arrival information for riders is just straight up fun. It is great to be involved in a design that has such high visibility within the town I live in.</p>
          &nbsp;
          <h4>Problem:</h4>
          <p>With the consideration of upgrading our display screens out in the public, we needed a refresh to the new design. With new infrastructure came new capabilities.</p>
          <p>[insert image of current tracker - use onsite example]</p>
          <h5>Research:</h5>
          <p>Questions we asked our riders:</p>
          <Row>
            <Col xs={{span:12}} sm={{span:6}}>
              <div className="p-3 my-3 rounded bg-dark border">
                <h5 className="mb-3"><em>Is the current transit tracker useful?</em></h5>
                <p className="small"><strong>Purpose of asking:</strong> So we can get a sense of any immediate red flags that people dislike about it. </p>
                <p className="mb-0 small"><strong>Results:</strong> Yes, turns out people trust the information as being more reliable than third-party apps.</p>
              </div>
            </Col>
            <Col xs={{span:12}} sm={{span:6}}>
              <div className="p-3 my-3 rounded bg-dark border">
                <h5 className="mb-3"><em>What other information would they like to know at their stop?</em></h5>
                <p className="small"><strong>Purpose of asking:</strong> So we can get a sense of what people want to generally know when looking at these screens.</p>
                <p className="mb-0 small"><strong>Results:</strong>The top want is, vehicle location and it’s relation to where they are.</p>
              </div>
            </Col>
          </Row>
          <h4>Design:</h4>
          <p>With the knowledge we gained by simply asking riders, jump started the design. The two big improvements I wanted to solve was:</p>
          <ul>
            <li>Visibility, increasing contrast and improving the ADA compliance score.</li>
            <li>Context, at a glance users should understand where they are and where their next vehicle is.</li>
            <li>Design, create something elegant.</li>
          </ul>
          <p>[insert image of new tracker</p>
          <p>Hopefully the new design speaks for itself. But to summarize, in order to design reach new design requirements:</p>
          <ul>
            <li>I continued down the dark scheme path because of how it does perform better with outside displays.</li>
            <li>I've included a <em>you are here</em> marker on a map to give users a sense of where they are and where their vehicle is if in the bounded area.</li>
          </ul>
          <a href="#">Enjoy the XD prototype <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* Divider */}
        <Row className="my-5">
          <Col>
              <div className="border border-secondary border-bottom-0 border-right-0 border-left-0"></div>
          </Col>
        </Row>
        {/* Google Earth Fly Throughs */}
        <Row className='my-5'>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
          <h3 id="flythroughs">Google Earth Flythroughs</h3>

          <p>[Insert gif of after effects replaying going over keyframes]</p>  

          <p>My manager walks up to me one day and said,“I think it would be cool to have a visual for new service lines. Like a top down fly through.” Immediately I thought of the Google Earth fly through tour feature.</p>
          &nbsp;
          <h4>Problem:</h4>
          <p>We needed a visually engaging way to show people about new service and how it connects people within the neighborhood to points of interest along the route. </p>
          &nbsp;
          <h4>Solution:</h4>
          <p>Using Google Earth fly through, produce a video highlighting the new service route along with useful place highlights along the way.</p>
          &nbsp;
          <h4>Process</h4>
          <p>Building the initial video was quite the challenge but having gone through the process, the second and third time around became much easier.</p> 
          <ol>
            <li>First challenge was making sure I spoke to the right people and stakeholders involved with marketing or building the service route; I needed to understand who the route was made for which influenced what exactly to highlight on the map given the video format.</li>
            <li>Second, I wasn’t sure on the most efficient way to record and produce a fly through video. I had gone through a lot of trial and error working between Google Earth and After Effects but eventually I established workflow and a style/pattern for animating objects.</li>
          </ol>
          <p>My favorite part was syncing it up all together with music.</p>
          <a href="https://www.youtube.com/watch?v=BO72XAPARzM&list=PLtJW_Q-z9fw8Q2b5tdBReibFKAVfOJEy6">Enjoy the Youtube playlist <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* Divider */}
        <Row className="my-5">
          <Col>
              <div className="border border-secondary border-bottom-0 border-right-0 border-left-0"></div>
          </Col>
        </Row>
        {/* Instagram Photo */}
        <Row className='my-5'>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
            <h3 id="insta">Instagram Photo</h3>
            <p>[Insert image of instagram page in device]</p>
            <p>Proud of this one because it is probably the coolest photo I’ve ever captured. But the real props goes to the person that made TriMet’s such a respected account, <a href="https://www.brianklum.com/">Brian K. Lum</a>.</p>
            <a href="http://modbeta.trimet.org/">Enjoy the photo <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* Divider */}
        <Row className="my-5">
          <Col>
              <div className="border border-secondary border-bottom-0 border-right-0 border-left-0"></div>
          </Col>
        </Row>
        {/* PDX Arrival Screens */}
        <Row className='my-5'>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
            <h3 id="pdxArrival">PDX Arrival Screens</h3>
            <p>This project involved working with The Port of Portland and our internal IT department. My main role in this project was UX design and to support our senior developer with front-end development.</p>
            &nbsp;
            <h4>Problem:</h4>
            <p>At PDX, TriMet’s Red Line services people between the airport and downtown Portland. Prior to the project we did not have any arrival/departure times for the MAX.</p>
            &nbsp;
            <h4>Solution:</h4>
            <p>Give people arrival information in specific locations, near the arrivals exit at the ground floor baggage claim and upstairs departures which is right above the MAX. </p>
            <p>[Insert image of map of locations]</p>
            &nbsp;
            <h4>Design</h4>
            <p>The way our process went, warranted two phase implementation of design. First to test feasibility, second to apply more data to the sreen.</p>
            &nbsp;
            <h4>Minimal viable product</h4>
            <p>We landed on this design for the first phase. This included iconography of MAX Light rail, arrival times,current time and TriMet branding.</p>
            <p>[Insert image of phase one]</p>
            &nbsp;
            <h4>More branding, plus alerts</h4>
            <p>The second phase we had new considerations that affected the design. </p>
            <ul>
              <li>People at arriving at PDX, may not recognize the light rail symbol. Use the flat illustration of the vehicle instead. </li>
              <li>People may not know that they are looking at realtime information. Include a pulsing dot in vehicle in has an estimated arrival.</li>
              <li>We have alert information! Created two alert layouts, one for a regular alert, another for a priority alert.</li>
              <li>People are viewing this from a far, we need to account for that. Changed each arrival to have their own capsule, went darker on the background color but not pure black.</li>
            </ul>
            &nbsp;
            <h4>Result:</h4>
            <p>In the end, we wanted something simple and effective. We already have plans for phase #3, maps, real-time vehicle locations, and more. It’s optimized for a typical wide 16:9 screen:</p>
            <a href="http://modbeta.trimet.org/">Enjoy the prototype for Phase II design <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* Divider */}
        <Row className="my-5">
          <Col>
              <div className="border border-secondary border-bottom-0 border-right-0 border-left-0"></div>
          </Col>
        </Row>
        {/* New Club, New Blog */}
        <Row className='my-5'>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
            <h3 id="ridersClub">New Club, New Blog</h3>
            <p>As we prepare for a new marketing strategy, we needed a refresh from our old blog. </p>
            <p>[Side by side comparison of old]</p>
            &nbsp;
            <h4>Strategy</h4>
            <p>Before designing we considered a few things:</p>
            <ul>
              <li>We noticed people don’t search for content by filtering content by category</li>
              <li>People usually find our post from a direct link from social or email</li>
              <li>We weren't giving the signup for Riders Club the prominence it deserved</li>
            </ul>
            &nbsp;
            <h4>Design:</h4>
            <p>So what we did was make a lot of decisions before and committed to those constraints in the design in order to keep the blog as clean as possible. For example:</p>
            <ul>
              <li>In addition to not including a category list as navigation, we decided we didn’t need a menu either. This kept it clean at the top.</li>
              <li>We decided to keep getting rid of sharing options on blog post pages.</li>
              <li>We wanted to leverage our awesome pictures, so images needed to work well with text.</li>
              <li>Created a more large and in charge section for Riders Club signups</li>
            </ul>
            &nbsp;
            <h4>Results:</h4>
            <p>An increased rate of Rider Club signups from the blog:</p>
            <a href="http://blog.trimet.org/">Follow and enjoy the blog <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
        {/* Divider */}
        <Row className="my-5">
          <Col>
              <div className="border border-secondary border-bottom-0 border-right-0 border-left-0"></div>
          </Col>
        </Row>
        {/* Web Style Guide Lines */}
        <Row className='my-5'>
          <Col sm={{span:12}} md={{span:8, offset:2}}>
            <h3 id="stylesGuide">Web Style Guide Lines</h3>
            <p>[Insert preview image of style guide]</p>
            <p>Before working at TriMet, there was a style guide for print and general messaging but none specifically for digital design. This was my chance to establish a TriMet Design System.</p>
            &nbsp;
            <h4>Problem:</h4>
            <p>Putting myself in the shoes of a new hire or a web contractor that is assigned to a project, we didn’t have an official place describing an agreed upon style guidelines. </p>
            &nbsp;
            <h4>Strategy:</h4>
            <p>Work with my manager to develop a style guideline that worked in parallel with our messaging. With our design drive the direction with our development team to use StoryboardJs to have an official place to manage our React UI components.</p>
            <a href="http://modbeta.trimet.org/">Enjoy our preview style guide <FontAwesomeIcon icon={faExternalLinkAlt}></FontAwesomeIcon></a>
          </Col>
        </Row>
    </Container>
    <Container fluid style={{background:"#323232",paddingTop:'300px',paddingBottom:'300px'}}>
      <Row>
          <Col sm={{span:12}} md={{span:12}}>
            &nbsp;
            {/* <img src={attensaLogoAnimation} className="mx-auto d-block" style={{maxWidth:'600px'}} alt="Attensa Motion" /> */}
            <p className="text-center text-light">[Instert trimet bumper gif]</p>
          </Col>
        </Row>
    </Container>
  </Layout>
  )
}

export default Trimet
