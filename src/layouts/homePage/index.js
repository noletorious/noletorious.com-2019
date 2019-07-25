/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

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
      <div className={['d-flex','flex-column','flex-grow-1'].join(' ')}>
          <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
