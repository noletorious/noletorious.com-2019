import React,{useEffect} from "react"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"
import Container from "react-bootstrap/Container"
import footerStyle from './footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDribbble, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {Request} from 'react-axios'
 
const Footer = () => {

    // const [weather, getWeather] = useState([])

    useEffect(()=>{
        <Request
            // instance={axios.create({})} /* custom instance of axios - optional */
            method="get" /* get, delete, head, post, put and patch - required */
            url="https://api.darksky.net/forecast/a53e596c83ef0fd5118f225df8571a85/45.523064,-122.676483" /*  url endpoint to be requested - required */
            // data={data} /* post data - optional */
            // params={} /* queryString data - optional */
            // config={} /* axios config - optional */
            // debounce={200} /* minimum time between requests events - optional */
            // debounceImmediate={true} /* make the request on the beginning or trailing end of debounce - optional */
            // isReady={true} /* can make the axios request - optional */
            onSuccess={(response)=>{
                console.log(response);
            }} /* called on success of axios request - optional */
            // onLoading={()=>{}} /* called on start of axios request - optional */
            // onError=(error)=>{} /* called on error of axios request - optional */
        />
    });
    return(
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
                        <p className={['mb-0','text-white','text-mute',].join(' ')}>{}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
    )
}

export default Footer
