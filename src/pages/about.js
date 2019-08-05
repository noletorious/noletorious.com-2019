import React from "react"
import { Link } from "gatsby"

import Layout from "../layouts/page"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About Noel" />
    <h1>Noel Torres</h1>
    <p>Famous for my hand modeling, I design and develop web interfaces. Creatively I'm a productionist, personally I am a INTP. As a web designer, I'd like to say I help solve problems and build helpful visual content that communicates a message. Learning and building web experiences that are meaningful and with thought is the fun in the challenge. </p>
    <Link to="/">Go back to the homepage</Link>
    <Link to="/evolution-of-my-portfolio">latest blog post</Link>
  </Layout>
)

export default About
