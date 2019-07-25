import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

const Footer = () => (
    <footer className={['d-flex','flex-column'].join(' ')}>
        <Container>
            <Col>
                <Row>
                    <p>THis is the footer!</p>
                </Row>
            </Col>
        </Container>
    </footer>
)

export default Footer
