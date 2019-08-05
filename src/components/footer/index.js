import React from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import {Link} from 'gatsby'
import Container from "react-bootstrap/Container"
import footerStyle from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
    <footer className={['bg-footer'].join(' ')}>
        <Container>
            <Row>
                <Col>
                    <div className={['d-flex', 'align-items-center','justify-content-center'].join(' ')} style={{height:'200px'}}>
                        <ul className={['mb-0','ml-0','list-group','list-group-horizontal'].join(' ')}>
                            <li className={['list-group-item', footerStyle.footerItem].join(' ')}>
                                <a href="//dribbble.com/noletorious">
                                    <FontAwesomeIcon icon={faDribbble} size="lg"/>  
                                </a>
                            </li>
                            <li className={['list-group-item', footerStyle.footerItem].join(' ')}>
                                <a href="//github.com/noletorious">
                                    <FontAwesomeIcon icon={faGithub} size="lg"/>  
                                </a>
                            </li>
                            <li className={['list-group-item', footerStyle.footerItem].join(' ')}>
                                <a href="//linkedin.com/noletorious">
                                    <FontAwesomeIcon icon={faLinkedin} size="lg"/>  
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div className={['d-flex', 'align-items-center','justify-content-center'].join(' ')} style={{height:'200px'}}>
                        <p className={['mb-0','text-white'].join(' ')}>Get in touch? <a href="mailto:hello@noletorious.com">Email</a> is a quick way.</p>
                    </div>
                </Col>
                <Col>
                    <div className={['d-flex', 'align-items-center','justify-content-center'].join(' ')} style={{height:'200px'}}>
                        <p className={['mb-0','text-white','text-mute',].join(' ')}>Insert weather widget<Link to="/about">About</Link></p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
)

export default Footer
