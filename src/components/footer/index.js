import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"

const Footer = () => (
    <footer className={['bg-warning'].join(' ')}>
        <Container>
            <Row>
                <Col>
                    <div className={['d-flex', 'align-items-center','justify-content-center'].join(' ')} style={{height:'200px'}}>
                        <ul className={['mb-0','ml-0','list-group','list-group-horizontal'].join(' ')}>
                            <li className="list-group-item">List item</li>
                            <li className="list-group-item">List item</li>
                            <li className="list-group-item">List item</li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div className={['d-flex', 'align-items-center','justify-content-center'].join(' ')} style={{height:'200px'}}>
                        <p className="mb-0">Insert contact</p>
                    </div>
                </Col>
                <Col>
                    <div className={['d-flex', 'align-items-center','justify-content-center'].join(' ')} style={{height:'200px'}}>
                        <p className="mb-0">Insert copyright</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer
