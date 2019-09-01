import React from "react"
import { Container, Card } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      <h2>Projects</h2>

      <h2 style={{marginTop: '2rem', marginBottom: '1.5rem'}}>Work in Progress</h2>
      <div className="card-columns">
        <Card style={styles.cardSize}>
          <Card.Body>
            <Card.Title className="font-weight-bold">Auto-Cyber-Range</Card.Title>
            <Card.Text>The aim of this project is to allow people to configure and use a cyber range without having to go through the painstaking process of building a virtual network from scratch. In the initial stages I'll be creating a basic docker network, then I'll work on auto configuring some virtual machines, and finally move to make a front-end for the project.</Card.Text>

            <a className="nav-link mx-5" href="https://github.com/kingchappers/auto-cyber-range" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color='black'/> <span className="sr-only"></span></a>
          </Card.Body>
        </Card>
      </div>

      <h2 style={{marginTop: '3rem', marginBottom: '1.5rem'}}>Finished Projects</h2>
      <div className="card-columns">
        <Card style={styles.cardSize}>
          <Card.Body>
            <Card.Title className="font-weight-bold">GatsbyJS</Card.Title>
            <Card.Text>GatsbyJS is the framework I've used for this site. I used the <a href="https://www.gatsbyjs.org/starters/jaxx2104/gatsby-starter-bootstrap/" target="_blank" rel="noopener noreferrer">gatsby-starter-bootstrap  </a> starter, it's a fairly basic starter that incorporates bootstrap. The starter was created by <a href="https://github.com/jaxx2104" target="_blank" rel="noopener noreferrer">jaxx2104</a> so they deserve credit.</Card.Text>

            <a className="nav-link mx-5" href="https://github.com/kingchappers/devBlog" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color='black'/> <span className="sr-only"></span></a>
          </Card.Body>
        </Card>

        <Card style={styles.cardSize}>
          <Card.Body>
            <Card.Title className="font-weight-bold">rEFInd Theme - DM-Outrun</Card.Title>
            <Card.Text className="text-left">rEFInd is a boot manager available for systems using UEFI. I created a theme for the loader based on <a href="https://github.com/mustaqimM/dm" target="_blank" rel="noopener noreferrer">mustaqimM's DM</a> theme. All I've really done to the theme is made it a little more Outrun.</Card.Text>

            <a className="nav-link mx-5" href="https://github.com/kingchappers/dm-outrun" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color='black'/> <span className="sr-only"></span></a>
          </Card.Body>
        </Card>
      </div>

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
