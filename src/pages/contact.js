import React from "react"
import { Container, Card } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faMicrosoft } from "@fortawesome/free-brands-svg-icons"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      <h2>Contact</h2>

      <p className="text-left">If you'd like to contact me about anything my details are below. I'm happy to answer questions about anything on this site, whether it's something broken on the site, or some questions about the content. I'm happy to take suggestions if there are any best practices I've not considered, or if there is a better method to do something. I currently work in security so I understand a number of the tools I post about, but am by no means an expert.</p>

      <a className="nav-link mx-5 text-left" href="https://github.com/kingchappers" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color='black'/> My Github page. <span className="sr-only"></span></a>

      <a className="nav-link mx-5 text-left" href="https://www.linkedin.com/in/sam-chapman-26558993" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size='2x' color='black'/> My Linkedin page. <span className="sr-only"></span></a>

      <a className="nav-link mx-5 text-left" href="mailto:sam.chapman@outlook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faMicrosoft} size='2x' color='black'/> Email: sam.chapman@outlook.com <span className="sr-only"></span></a>

    </Container>
  </Layout>
)

const styles ={
  cardSize: {
    maxWidth: '20rem',
    //height: '12rem',
    margin: '1rem',
  },

};

export default IndexPage
