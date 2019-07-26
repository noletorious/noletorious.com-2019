import React from "react"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"

const Navigation = () => (
    
        <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Container>
                <Nav>
                    <Nav.Link href="#">&larr;</Nav.Link>
                    <Nav.Link href="#">N</Nav.Link>
                    <Nav.Link href="#">
                        <span>Noel Torres</span><br />
                        <span>Web Designer</span>
                    </Nav.Link>
                    
                </Nav>
            </Container>
        </Navbar>
)

export default Navigation
