import React,{useState} from 'react'
import { useSpring, animated } from 'react-spring'
import { TransitionPortal} from 'gatsby-plugin-transition-link'
import {SpringLink} from './springLink'

const Navigation = (props) => {
    const[isHome, setIsHome] = useState(props.isHome)
    const isHomeToggle = useSpring({
        height: isHome ? '50vh' : 'auto'
    })

    return (
        <>
            <TransitionPortal level="top">
                <animated.div className="d-flex flex-column p-5 bg-warning" style={isHomeToggle}>
                    <SpringLink to='/'>
                        {props.isHome ? <p>true</p> : <p>false</p>}
                    </SpringLink>
                </animated.div>
            </TransitionPortal>
      </>
    )
}

export default Navigation