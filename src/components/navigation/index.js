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
            // const seconds = mount ? entry.length : exit.length

            return (
              <Spring
                to={{
                  height: mount && props.isHome ? '50%':'100px'
                }}
              >
                {props => 
                  <div className="bg-white border-bottom d-flex d-flex-row align-items-center" style={props}>
                      <div class="mr-auto p-2">
                        <Link to="/">HOME</Link>
                      </div>
                      <div class="p-2">
                        <SpringLink to="/about">About</SpringLink>
                      </div>
                      <div class="p-2">
                        <SpringLink to="/#projects">Work</SpringLink>
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