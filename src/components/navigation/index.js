import React from 'react'
import { SpringLink } from './springLink'
import { Spring } from 'react-spring/renderprops'
import {Link} from 'gatsby'
import { TransitionState } from 'gatsby-plugin-transition-link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCaretLeft} from '@fortawesome/free-solid-svg-icons'

import navigationStyle from './navigation.module.css'

const Navigation = (props) => {
    const isHomeStatus = props.isHome

    return (
      <>
        <TransitionState>
          {({ transitionStatus, exit, entry }) => {
            const mount = [ 'entering','entered'].includes(transitionStatus)
            // const exitStatus= [ 'exiting','exited'].includes(transitionStatus)
            // const seconds = mount ? entry.length : exit.length
            // console.log('exit object is', exit)
            // console.log('enter object is', entry)
            // console.log('exitSttus boolean is', exitStatus)
            // console.log('transitionstatus is', transitionStatus)
            // console.log('is Home Status is', isHomeStatus)
            // console.log('++++++++++++++++++++++++++++++++++++++++++')

            return (
              <Spring
                from={{
                  paddingTop: props.isHome && mount ? '15vh' :'2vh',
                  paddingBottom: props.isHome && mount ? '12vh' :'2vh'
                }}
                to={{
                  paddingTop: props.isHome && mount ? '15vh' : !props.isHome && mount ? '2vh' : '2vh',
                  paddingBottom: props.isHome && mount ? '12vh' : !props.isHome && mount ? '2vh' : '2vh'
                }}
              >
                {props => 
                    <div id='nav' className="bg-white d-flex d-flex-row flex-wrap align-items-center border-bottom" style={props}>
                        <Container>
                          <Row>
                            {/* Back, Home, Name and Title */}
                            <Col className="d-flex flex-row align-items-center pl-0 flex-xs-column" xs={{span:12}} sm={{span:8}}>
                              
                                <Spring
                                  from={{
                                    display: mount && isHomeStatus ? 'block' : mount && !isHomeStatus ? 'block':'block',
                                    opacity: mount && isHomeStatus ? 1 : mount && !isHomeStatus ? 1:1
                                  }}
                                  to={{
                                    display:mount && isHomeStatus ? 'none' : mount && !isHomeStatus ? 'block':'block',
                                    opacity: mount && isHomeStatus ? 0 : mount && !isHomeStatus ? 1:1
                                }}
                                >{prop=>
                                  <div className="p-2" style={prop}>
                                  <button 
                                  title="Go back" 
                                  onClick={()=>window.history.go(-1)} 
                                  className={['align-items-center','d-flex','px-0',navigationStyle.backBtn].join(' ')}
                                  >
                                    <FontAwesomeIcon icon={faCaretLeft} size="lg" />
                                </button>
                                </div>
                                }
                                  
                                </Spring> 

                              {/* Make the golfer logo way large on the home page.     */}
                              <Spring
                                from={{
                                  fontSize: mount && isHomeStatus ? '2.5em' : mount && !isHomeStatus ? '1em' :'1em' 
                                }}
                                to={{
                                  fontSize: mount && isHomeStatus ? '2.5em' : mount && !isHomeStatus ? '1em' :'1em'
                                }}
                              >
                                {props =>  
                                <>
                                  <div className="p-2" style={props}>
                                    <SpringLink to="/">
                                      <span aria-label="noletorious" role='img' className={navigationStyle.n}>🏌️</span>
                                    </SpringLink>
                                  </div>
                                  <div className="p-2" style={props}>
                                    <p className='mb-0 text-dark font-weight-bold'>Noel Torres</p>
                                    <h6 className='mb-0 text-dark'>Front-end Designer</h6>
                                  </div>
                                  </>
                              }
                              </Spring>
                              
                            </Col>
                            {/* About, Work */}
                            <Col className="d-flex align-items-center nav-items" xs={{span:12}} sm={{span:4}}>
                              
                              <div className="ml-auto p-2">
                                <SpringLink to="/about">About</SpringLink>
                              </div>
                              <div className="p-2">
                                <SpringLink to="/blog">Latest</SpringLink>
                              </div>
                              <div className="p-2">
                                <Link 
                                  to="/#work">Work
                                </Link>
                              </div>
                            </Col>
                          </Row>
                        </Container>
                    </div>
              }
              </Spring>
            )
          }}
        </TransitionState>
      </>
    )
}

export default Navigation