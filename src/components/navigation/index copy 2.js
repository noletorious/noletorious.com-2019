import React from 'react'
import { SpringLink } from './react-spring-animation'
import { Spring } from 'react-spring/renderprops'
import { TransitionState } from 'gatsby-plugin-transition-link'

const Navigation = (props) => {
    return (
        <TransitionState>
        {({ transitionStatus, exit, entry }) => {
          const mount = ['entering', 'entered'].includes(transitionStatus)
          const seconds = mount ? entry.length : exit.length
        
    
          return (
            <Spring
              to={{
                transform: `translateY(${mount ? 0 : '100px'})`,
                opacity: mount ? 1 : 0,
              }}
              config={{
                duration: seconds * 1000,
              }}
            >
              {props => 
                <div style={props}>
                  <p>This is what is animated, it has its own state: </p>
                  <p><SpringLink to="/about">SpringLink to About</SpringLink></p> 
                </div>
            }
            </Spring>
          )
        }}
      </TransitionState>
    )
}

export default Navigation