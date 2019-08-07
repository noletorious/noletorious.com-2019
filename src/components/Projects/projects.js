import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import {Link} from "gatsby"

import Image from "../images/image"

const Projects = () => (
        <Container className="vh-100" id='projects' fluid>
            <Row className="h-100">
                <Col xs={{span:4}} className={['text-white','d-flex','justify-content-center', 'align-items-center','flex-column','bg-danger'].join(' ')}>
                <h3>This should be a Project</h3>
                <Link to="/evolution-of-my-portfolio">Link to latest blog post</Link>
                </Col>
                <Col xs={{span:8}} className={['d-flex','align-items-center'].join(' ')}>
                <div className={['w-100'].join(' ')} style={{ width:`100%`}}>
                    <Image />
                </div>
                </Col>
            </Row>
        </Container>
)

export default Projects



