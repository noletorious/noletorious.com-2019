import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import {Link} from "gatsby"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowAltRight} from '@fortawesome/free-solid-svg-icons'
import Image from "../images/image"
// import TilikumBg from "../images/tilikum"
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
      attensaImage: file(relativePath: { eq: "attensa-front.png" }) {
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
    return(
        <Container className="vh-100" id='work' fluid>
            <Row className="h-50">
                <Col xs={{span:12}} sm={{span:6}} className={['text-white','d-flex','flex-column','justify-content-center', 'align-items-center'].join(' ')} style={trimetBg}>
                    <Link to="/trimet" className="text-center">
                        <h3 className="mb-0 mt-3">TriMet</h3>
                        <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
                    </Link>
                </Col>
                <Col xs={{span:12}} sm={{span:6}} className={['d-flex','align-items-center','justify-content-center', 'align-items-center'].join(' ')} style={attensaBg}>
                <div className={['w-100'].join(' ')} style={{ width:`100%`}}>
                  <Link to="/attensa" className="text-center">
                        <h3 className="mb-0 mt-3">Attensa</h3>
                        <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
                    </Link>
                </div>
                </Col>
            </Row>
            <Row className="h-50">
                <Col xs={{span:12}} sm={{span:6}} className={['text-white','d-flex','justify-content-center', 'align-items-center','flex-column','bg-danger'].join(' ')} >
                <h3>This should be a Project</h3>
                <Link to="/evolution-of-my-portfolio">Link to latest blog post</Link>
                </Col>
                <Col xs={{span:12}} sm={{span:6}} className={['d-flex','align-items-center','bg-success'].join(' ')}>
                <div className={['w-100'].join(' ')} style={{ width:`100%`}}>
                    <Image />
                </div>
                </Col>
            </Row>
        </Container>
        )
}

export default Projects



