import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons'

import navigationStyle from './navigation.module.css'

const Navigation = (props) => (    
        <Navbar collapseOnSelect expand="lg" variant="light" className={navigationStyle.navbar}>
            <Container>
                <Nav className='d-flex' >
                    {!props.checkHome ? <Nav.Link onSelect={(e)=>{window.history.back()}} href='#' className={['align-items-center','d-flex'].join(' ')}><FontAwesomeIcon icon={faCaretLeft} size="lg"/></Nav.Link> : null}
                    <Nav.Link 
                    className={['align-items-center','d-flex'].join(' ')}
                    href="/">
                        <span aria-label="noletorious" role='img' className={navigationStyle.n}>🏌️</span>
                    </Nav.Link>
                    <Nav.Link href="#" disabled>
                        <p 
                        className='mb-0 text-dark'
                        style={{
                            fontSize:'115%'
                        }}>Noel Torres</p>
                        <h6 className='mb-0 text-dark'>Web Designer · Portland, Oregon</h6>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
)

export default Navigation
