import React from 'react'
import Container from "react-bootstrap/Container"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faLongArrowAltDown} from '@fortawesome/free-solid-svg-icons'
import Image from '../images/chromeMac'
// import {Link} from 'gatsby'
import SEO from "../../components/seo"
import Scrollchor from 'react-scrollchor';


const HomePageSection = () => {
    return(
        <>
            <SEO title="Noel Torres Portfolio"/>
            <Container fluid="true" className={['flex-grow-1'].join(' ')}>
                <Row className='h-100'>
                    <Col xs={{span:12}} sm={{span:6}} className={['d-flex','justify-content-center','align-items-center','flex-column','mt-3'].join(' ')}>
                    <h3>My name is Noel, <br />I create digital experiences for people.</h3>
                    <p>
                        <Scrollchor to="#work">
                            <FontAwesomeIcon icon={faLongArrowAltDown} size="lg"/>
                        </Scrollchor>
                    </p>
                    </Col>
                    <Col xs={{span:12}} sm={{span:6}} className={['d-flex','align-items-center'].join(' ')}>
                    <div className={['m-auto','img-fluid','w-100'].join(' ')}>
                        <Image />
                    </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default HomePageSection