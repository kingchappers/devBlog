import React from "react"
import { Container, Card  } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      <p className="text-left">I wanted to create a page that showcases some of the I'm either working on or have finished. I'll post the code to most of these projects on GitHub. I hope you like them, and if you have any suggestions for improvements/features please get in touch.</p>
      <p className="text-left">I'll also be posting tutorials. These tutorials will be on a variety of topics; mostly things that I've personally worked on and in some cases struggled with myself. Again please feel free to get in touch if you have any trouble with them or want some futher information on some of the topics. I wouldn't call myself an expert on most of the topics, but where I can help I will</p>

      <h2 style={{marginTop: '2rem', marginBottom: '1.5rem'}}>Work in Progress</h2>
      
      <div className="card-columns">
        <a href="https://github.com/kingchappers/adUserProvisioner" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Ad User Provisioner</Card.Title>
              <Card.Text>The idea of this program is to help automate the creation of users in Active Directory. This tool will use a configuration file allowing people to select from a list of approved options when it comes to things like department, office, etc. This should ensure that there is less chance of a user's configuration being a problem in the future. </Card.Text>

              <a className="nav-link mx-5" href="https://github.com/kingchappers/adUserProvisioner" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color='black'/> <span className="sr-only"></span></a>
            </Card.Body>
          </Card>
        </a>
      </div>

      <h2 style={{marginTop: '3rem', marginBottom: '1.5rem'}}>Finished Projects</h2>
      <div className="card-columns">
        <a href="https://github.com/kingchappers/devBlog" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">GatsbyJS</Card.Title>
              <Card.Text className="text-left">GatsbyJS is the framework I've used for this site. I used the <a href="https://www.gatsbyjs.org/starters/jaxx2104/gatsby-starter-bootstrap/" target="_blank" rel="noopener noreferrer">gatsby-starter-bootstrap  </a> starter, it's a fairly basic starter that incorporates bootstrap. The starter was created by <a href="https://github.com/jaxx2104" target="_blank" rel="noopener noreferrer">jaxx2104</a> so they deserve credit.</Card.Text>

              <a className="nav-link mx-5" href="https://github.com/kingchappers/devBlog" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color='black'/> <span className="sr-only"></span></a>
            </Card.Body>
          </Card>
        </a>

        <a href="https://github.com/kingchappers/dm-outrun" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">rEFInd Theme - DM-Outrun</Card.Title>
              <Card.Text className="text-left">rEFInd is a boot manager available for systems using UEFI. I created a theme for the loader based on <a href="https://github.com/mustaqimM/dm" target="_blank" rel="noopener noreferrer">mustaqimM's DM</a> theme. All I've really done to the theme is made it a little more Outrun.</Card.Text>

              <a className="nav-link mx-5" href="https://github.com/kingchappers/dm-outrun" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color='black'/> <span className="sr-only"></span></a>
            </Card.Body>
          </Card>
        </a>
      </div>

      <h2 style={{marginTop: '3rem', marginBottom: '1.5rem'}}>Discontinued Projects</h2>
      <div className="card-columns">
        <a href="https://github.com/kingchappers/auto-cyber-range" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Auto-Cyber-Range</Card.Title>
              <Card.Text>The aim of this project is to allow people to configure and use a cyber range without having to go through the painstaking process of building a virtual network from scratch. In the initial stages I'll be creating a basic docker network, then I'll work on auto configuring some virtual machines, and finally move to make a front-end for the project. This one got discontinued as I found out about the GNS3 project which mostly did what I intended to do with this, I figured I'd move onto other things as I didn't want to replicate other peoples work.</Card.Text>

              <a className="nav-link mx-5" href="https://github.com/kingchappers/auto-cyber-range" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color='black'/> <span className="sr-only"></span></a>
            </Card.Body>
          </Card>
          </a>
      </div>


    </Container>
  </Layout>
)

const styles ={
  cardLink: {
    color: "#000000",
  },
  cardSize: {
    maxWidth: '20rem',
    margin: '1rem',
  },

};

export default IndexPage
