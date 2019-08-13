import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import {Link} from "gatsby"
import Img from "gatsby-image"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import { useStaticQuery, graphql } from "gatsby"


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
                <Col xs={{span:12}} sm={{span:6}} className={['text-white'].join(' ')} style={trimetBg}>
                  <Link to="/trimet">
                    <div className="d-flex flex-row">
                      <div className="p-2 align-self-center">
                        TriMet <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
                      </div>
                      <div className="p-2 ml-auto">
                        <Img fluid={data.trimetLogo.childImageSharp.fluid} style={{width:'50px'}}/>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col xs={{span:12}} sm={{span:6}} className={['text-white'].join(' ')} style={attensaBg}>
                <Link to="/attensa">
                    <div className="d-flex flex-row">
                      <div className="p-2 align-self-center">
                        Attensa <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
                      </div>
                      <div className="p-2 ml-auto">
                        <Img fluid={data.attensaLogo.childImageSharp.fluid} style={{width:'50px'}}/>
                      </div>
                    </div>
                  </Link>
                </Col>
            </Row>
            <Row className="h-50">
                <Col xs={{span:12}} sm={{span:6}} className={[].join('bg-black')} style={ctBg}>
                <Link to="/trimet">
                    <div className="d-flex flex-row">
                      <div className="p-2 align-self-center">
                        Cascadia Threads <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
                      </div>
                      <div className="p-2 ml-auto">
                        <Img fluid={data.ctLogo.childImageSharp.fluid} style={{width:'50px'}}/>
                      </div>
                    </div>
                  </Link>
                </Col>
                <Col xs={{span:12}} sm={{span:6}} className={[].join(' ')} style={hopBg}>
                <Link to="/trimet">
                    <div className="d-flex flex-row">
                      <div className="p-2 align-self-center">
                        Hop Fastpass <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
                      </div>
                      <div className="p-2 ml-auto">
                        <Img fluid={data.hopLogo.childImageSharp.fluid} style={{width:'50px'}}/>
                      </div>
                    </div>
                  </Link>
                </Col>
            </Row>
        </Container>
        )
}

export default Projects



