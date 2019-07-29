import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

import Image from "../image"

const TriMetProject = () => (
        <Container className='h-100' fluid>
            <Row className='h-100'>
                <Col xs={{span:6}} className={['text-white','d-flex','justify-content-center', 'align-items-center','flex-column','bg-danger'].join(' ')}>
                <h3>This should be a Project</h3>
                </Col>
                <Col xs={{span:6}} className={['d-flex','align-items-center'].join(' ')}>
                <div className={['m-auto'].join(' ')} style={{ minWidth:`300px`, marginBottom: `1.45rem` }}>
                    <Image />
                </div>
                </Col>
            </Row>
        </Container>
)

export default TriMetProject



