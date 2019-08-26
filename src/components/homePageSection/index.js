import React from 'react'
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowAltDown} from '@fortawesome/free-solid-svg-icons'
import Scrollchor from 'react-scrollchor'
import HomeAnimation from '../../images/home-animation.mp4'

const HomePageSection = () => {
    return(
        <>
            <Container fluid="true" className={['flex-grow-1'].join(' ')}>
                <Row className='h-100 d-flex'>
                    <Col xs={{span:12}} sm={{span:8,offset:2}} className={['d-flex','align-items-center'].join(' ')}>
                        <div className={['img-fluid','w-100'].join(' ')} style={{marginTop:'-6em'}}>
                        <video loop className="w-100" autoplay="true">
                            <source src={HomeAnimation} type="video/mp4" />
                        </video>
                        </div>
                    </Col>
                    <Col xs={{span:12}} className={['d-flex','justify-content-center','align-items-center','flex-column','text-center','text-light'].join(' ')}>
                    <h3>My name is Noel, <br />I create digital experiences for people.</h3>
                    <p>
                        <Scrollchor to="#work">
                            <FontAwesomeIcon icon={faLongArrowAltDown} size="lg"/>
                        </Scrollchor>
                    </p>
                    </Col>
                    
                </Row>
            </Container>
        </>
    )
}

export default HomePageSection