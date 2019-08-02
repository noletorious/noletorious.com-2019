import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

import Image from "../image"

const TriMetProject = () => (
        <Container id='projects' fluid>
            <Row>
                <Col xs={{span:4}} className={['text-white','d-flex','justify-content-center', 'align-items-center','flex-column','bg-danger'].join(' ')}>
                <h3>This should be a Project</h3>
                </Col>
                <Col xs={{span:8}} className={['d-flex','align-items-center'].join(' ')}>
                <div className={['w-100'].join(' ')} style={{ width:`100%`}}>
                    <Image />
                </div>
                </Col>
            </Row>
        </Container>
)

export default TriMetProject



