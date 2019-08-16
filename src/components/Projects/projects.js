import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import {SpringLink} from "../navigation/springLink"
import Img from "gatsby-image"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import { useStaticQuery, graphql } from "gatsby"

import projectStyles from './projects.module.css'


const Projects = () => {
    const data = useStaticQuery(graphql`
    query {
      trimetImage: file(relativePath: { eq: "trimet-front.jpg" }) {
        childImageSharp {
          fluid(
            quality: 100
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      trimetLogo: file(relativePath: { eq: "trimet-rosette.png" }) {
        childImageSharp {
          fluid(
            quality: 100
            maxWidth: 50
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      attensaImage: file(relativePath: { eq: "attensa-front.png" }) {
        childImageSharp {
          fluid(
            quality: 100
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      attensaLogo: file(relativePath: { eq: "attensa-single.png" }) {
        childImageSharp {
          fluid(
            quality: 100
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hopImage: file(relativePath: { eq: "hopreader-front.png" }) {
        childImageSharp {
          fluid(
            quality: 100
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      hopLogo: file(relativePath: { eq: "hop-fastpass-circle.png" }) {
        childImageSharp {
          fluid(
            quality: 100
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ctImage: file(relativePath: { eq: "ct-front.png" }) {
        childImageSharp {
          fluid(
            quality: 100
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      ctLogo: file(relativePath: { eq: "ct-logo.png" }) {
        childImageSharp {
          fluid(
            quality: 100
          ) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);
  const trimetBg={
      backgroundImage:`url(${data.trimetImage.childImageSharp.fluid.src })`,
      backgroundSize:`cover`,
      backgroundPosition: `bottom center`
    }  ;  
  const attensaBg={
      backgroundImage:`url(${data.attensaImage.childImageSharp.fluid.src })`,
      backgroundSize:`cover`,
      backgroundPosition: `center center`
    };
    const hopBg={
      backgroundImage:`url(${data.hopImage.childImageSharp.fluid.src })`,
      backgroundSize:`cover`,
      backgroundPosition: `center center`
    };
    const ctBg={
      backgroundImage:`url(${data.ctImage.childImageSharp.fluid.src })`,
      backgroundSize:`cover`,
      backgroundPosition: `center center`
    };
    return(
        <Container className="vh-100" id='work' fluid>
            <Row className="h-50">
                <Col xs={{span:12}} sm={{span:6}} className={['text-white','pb-3'].join(' ')} >
                  <SpringLink to="/trimet" >
                    <div className={['h-100','d-flex','flex-column', projectStyles.projectTitleLogo].join(' ')} style={trimetBg}>
                      <div className={['p-2','d-flex','flex-row','mb-auto', projectStyles.projectTitleLogo].join(' ')}>
                        <div className="align-self-center">
                          <span className="h5">TriMet</span> <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
                        </div>
                        <div className="ml-auto align-self-center">
                          <Img fluid={data.trimetLogo.childImageSharp.fluid} style={{width:'35px'}}/>
                        </div>
                      </div>
                      <div className="d-flex">
                        <p className={['pt-1','px-2','small', projectStyles.perProjectText].join(' ')}>UX Design, Visual Design, Motion Graphics, Video/Content Production, Animation Storytelling, React Front-end Development, Photography</p>
                      </div>
                    </div>
                  </SpringLink>
                </Col>
                <Col xs={{span:12}} sm={{span:6}} className={['text-white','pb-3'].join(' ')}>
                  <SpringLink to="/attensa" >
                    <div className="d-flex flex-column h-100" style={attensaBg}>
                      <div className={['p-2','d-flex','flex-row','mb-auto', projectStyles.projectTitleLogo].join(' ')}>
                        <div className="align-self-center">
                          <span className="h5">Attensa</span> <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
                        </div>
                        <div className="ml-auto align-self-center">
                          <Img fluid={data.attensaLogo.childImageSharp.fluid} style={{width:'35px'}}/>
                        </div>
                      </div>
                      <div className="d-flex">
                        <p className={['pt-1','px-2','small', projectStyles.perProjectText].join(' ')}>UX Design, Visual Design, Content/Strategic Marketing</p>
                      </div>
                    </div>
                  </SpringLink>
                </Col>
            </Row>
            <Row className="h-50">
                <Col xs={{span:12}} sm={{span:6}} className={['text-white','pb-3'].join(' ')}>
                  <SpringLink to="/attensa" >
                    <div className="d-flex flex-column h-100" style={ctBg}>
                      <div className={['p-2','d-flex','flex-row','mb-auto', projectStyles.projectTitleLogo].join(' ')}>
                        <div className="align-self-center">
                          <span className="h5">Cascadia Threads</span> <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
                        </div>
                        <div className="ml-auto align-self-center">
                          <Img fluid={data.ctLogo.childImageSharp.fluid} style={{width:'45px'}}/>
                        </div>
                      </div>
                      <div className="d-flex">
                        <p className={['pt-1','px-2','small', projectStyles.perProjectText].join(' ')}>Design Lead</p>
                      </div>
                    </div>
                  </SpringLink>
                </Col>
                <Col xs={{span:12}} sm={{span:6}} className={['text-white','pb-3'].join(' ')}>
                  <SpringLink to="/hop" >
                    <div className="d-flex flex-column h-100"  style={hopBg}>
                      <div className={['p-2','d-flex','flex-row','mb-auto', projectStyles.projectTitleLogo].join(' ')}>
                        <div className="align-self-center">
                          <span className="h5">Hop Fastpass</span> <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
                        </div>
                        <div className="ml-auto align-self-center">
                          <Img fluid={data.hopLogo.childImageSharp.fluid} style={{width:'35px'}}/>
                        </div>
                      </div>
                      <div className="d-flex">
                        <p className={['pt-1','px-2','small', projectStyles.perProjectText].join(' ')}>Hand modeling, video production, motion graphics, 2D animation, UI Design</p>
                      </div>
                    </div>
                  </SpringLink>
                </Col>
            </Row>
        </Container>
        )
}

export default Projects



