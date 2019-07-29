import React from "react"
import PropTypes from "prop-types"
import Navigation from "../../components/navigation"

import "bootstrap/dist/css/bootstrap.css"
import "./home-layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className={['h-100','d-flex','flex-column'].join(' ')}>
        <Navigation />
        <main className={['bg-secondary','flex-grow-1'].join(' ')}>{children}</main>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
