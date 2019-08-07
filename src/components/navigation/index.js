import React from 'react'
import { SpringLink } from './springLink'
import { Spring } from 'react-spring/renderprops'
import { TransitionState } from 'gatsby-plugin-transition-link'
import {Link} from 'gatsby'

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
            const exitStatus= [ 'exiting','exited'].includes(transitionStatus)
            // const seconds = mount ? entry.length : exit.length
            console.log('exit object is', exit)
            console.log('enter object is', entry)
            console.log('exitSttus boolean is', exitStatus)
            console.log('transitionstatus is', transitionStatus)
            console.log('++++++++++++++++++++++++++++++++++++++++++')

            return (
              <Spring
                from={{
                  height: props.isHome && mount ? '300px':'100px'
                }}
                to={{
                  height: props.isHome && mount ? '300px': !props.isHome && mount ? '100px' : '100px'
                }}
              >
                {props => 
                    <div className="bg-white d-flex d-flex-row flex-wrap-reverse align-items-center border-bottom" style={props}>
                        <div className="p-2">
                            {!isHomeStatus ?   
                              <Link 
                                title="Go back" 
                                onSelect={(e)=>{
                                  window.history.back()
                                  }
                                } 
                                href='#' 
                                className={['align-items-center','d-flex','pl-3'].join(' ')}
                                >
                                  <FontAwesomeIcon icon={faCaretLeft} size="lg"/>
                              </Link>
                            : null}
                        </div>
                        <div className="p-2">
                          <SpringLink to="/">
                            <span aria-label="noletorious" role='img' className={navigationStyle.n}>🏌️</span>
                          </SpringLink>
                        </div>
                        <div className="p-2">
                          <p 
                            className='mb-0 text-dark'
                            style={{
                                fontSize:'120%'
                            }}>Noel Torres</p>
                            <h6 className='mb-0 text-dark'>Web Designer · Portland, Oregon</h6>
                        </div>
                        <div className="ml-auto p-2">
                          <SpringLink to="/about">About</SpringLink>
                        </div>
                        <div className="p-2">
                          <Link to="/evolution-of-my-portfolio">Latest</Link>
                        </div>
                        <div className="p-2">
                          <Link to="/#projects">Work</Link>
                        </div>
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