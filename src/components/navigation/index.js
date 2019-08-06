import React,{useState} from 'react'
import { useSpring, animated } from 'react-spring/renderprops'
import { TransitionPortal} from 'gatsby-plugin-transition-link'

const Navigation = (props) => {
    const[isHome, setIsHome] = useState(props.isHome)
    const isHomeToggle = useSpring({
        height: isHome ? '50vh' : 'auto'
    })

    return (
        <>
            <TransitionPortal level="top">
                <animated.div className="d-flex flex-column p-5 bg-warning" style={isHomeToggle}>
                    {props.isHome ? <p>true</p> : <p>false</p>}
                </animated.div>
            </TransitionPortal>
      </>
    )
}

export default Navigation