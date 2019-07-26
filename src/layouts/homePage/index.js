import React from "react"
import PropTypes from "prop-types"

import Navigation from "../../components/navigation"
import Footer from "../../components/footer"

import "bootstrap/dist/css/bootstrap.css"
import "./home-layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
        <main className={['d-flex','flex-column']}>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
