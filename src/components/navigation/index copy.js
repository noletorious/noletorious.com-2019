import React,{useState} from "react"
import {Link} from 'gatsby'
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons'
import {useSpring, animated} from 'react-spring'
import navigationStyle from './navigation.module.css'

const Navigation = (props) => {  
    const [isHome, setIsHome] = useState(props.isHome)
    console.log('navigation======checkIsHomePage===== '+isHome +"===props==="+props.isHome)
    const isHomeStyle = useSpring({
        height: isHome ? '50vh':'auto',
        background: isHome ? '#fff':'#eee'
    })

    return(
        <animated.div class={['d-flex','border-bottom'].join(' ')} style={isHomeStyle}>
                <Navbar collapseOnSelect expand="sm" variant="light" >
                    <Container>
                        <Nav className='d-flex w-100 flex-row' >
                            {!props.isHome ? 
                                <Nav.Link title="Go back" 
                                    onSelect={(e)=>{
                                        window.history.back()
                                    }} href='#' 
                                    className={['align-items-center','d-flex'].join(' ')}>
                                        <FontAwesomeIcon icon={faCaretLeft} size="lg"/>
                                </Nav.Link> 
                                : null}
                            <Nav.Link 
                            className={['align-items-center','d-flex','mx-2'].join(' ')}
                            href="/">
                                <Link onSelect={()=>setIsHome(false)} to="/">
                                    <span aria-label="noletorious" role='img' className={navigationStyle.n}>🏌️</span>
                                </Link>
                            </Nav.Link>
                            <Nav.Link href="#" disabled className="">
                                <p 
                                className='mb-0 text-dark'
                                style={{
                                    fontSize:'120%'
                                }}>Noel Torres</p>
                                <h6 className='mb-0 text-dark'>Web Designer · Portland, Oregon</h6>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to ="/about">About</Link>
                            </Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>
                <button onClick={(e)=>{
                    e.preventDefault();
                    setIsHome(!isHome);
                }}>Notttttt</button>
        </animated.div>
        
    )
}


export default Navigation
