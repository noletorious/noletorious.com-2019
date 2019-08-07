import React from 'react'
import TransitionLink from 'gatsby-plugin-transition-link'


const SpringLink = ({ to, children }) => (
  <TransitionLink 
    to={to} 
    exit={{ length: 1, delay:0 }}
    entry={{ delay:1, length: 0}}
    >
      {children}
  </TransitionLink>
)

export { SpringLink }