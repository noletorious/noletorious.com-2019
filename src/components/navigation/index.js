import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

const Navigation = (props) => (    
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light" >
            <Container>
                <Nav className='d-flex' >
                    {props.checkHome ? <Nav.Link href='#'>&larr;</Nav.Link> : null}
                    <Nav.Link 
                    className={['align-items-center','d-flex'].join(' ')}
                    href="/">
                        <span style={{
                            width:'50px',
                            height:'50px',
                            paddingTop:'13px',
                            textAlign:'center',
                            color:'#fff',
                            background:'#FF377B',
                            borderRadius:'5em'
                        }}>N</span>
                    </Nav.Link>
                    <Nav.Link href="#">
                        <span>Noel Torres</span>
                        <h6 className='mb-0'>Web Designer</h6>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
)

export default Navigation
