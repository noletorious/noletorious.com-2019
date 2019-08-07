import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'


const SpringLink = ({ to, children }) => (
  <TransitionLink 
    to={to} 
    exit={{ length:.75 }}
    entry={{ delay:.75,length: .75}}
    >
      {children}
  </TransitionLink>
)

export { SpringLink }