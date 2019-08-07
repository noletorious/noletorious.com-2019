import React from 'react'
import { SpringLink } from './springLink'
import { Spring } from 'react-spring/renderprops'
import { TransitionState } from 'gatsby-plugin-transition-link'
import {Link} from 'gatsby'

const Navigation = (props) => {
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
                  height: exitStatus && props.isHome ? '100px':'50vh'
                }}
                to={{
                  height: mount && !props.isHome ? '100px':'100px'
                }}
              >
                {props => 
                    <div className="bg-white d-flex d-flex-row align-items-center border-bottom" style={props}>
                        <div className="mr-auto p-2">
                          <SpringLink to="/">HOME</SpringLink>
                        </div>
                        <div className="p-2">
                          <SpringLink to="/about">About</SpringLink>
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