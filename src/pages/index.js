import React from "react"
import { Container, Card  } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />

      <p class="left">I wanted to create a page that showcases some of the I'm either working on or have finished. I'll post the code to most of these projects on GitHub. I hope you like them, and if you have any suggestions for improvements/features please get in touch.</p>
      <p className="text-left">I'll also be posting tutorials. These tutorials will be on a variety of topics; mostly things that I've personally worked on and in some cases struggled with myself. Again please feel free to get in touch if you have any trouble with them or want some futher information on some of the topics. I wouldn't call myself an expert on most of the topics, but where I can help I will</p>

      <h2 class="text-center" style={{marginTop: '2rem', marginBottom: '1.5rem'}}>Work in Progress</h2>
      
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <a href="https://github.com/kingchappers/adUserProvisioner" className="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Ad User Provisioner</h5>
              <p class="card-text">The idea of this program is to help automate the creation of users in Active Directory. This tool will use a configuration file allowing people to select from a list of approved options when it comes to things like department, office, etc. This should ensure that there is less chance of a user's configuration being a problem in the future. </p>

              <a className="nav-link mx-5" href="https://github.com/kingchappers/adUserProvisioner" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color='black'/> <span className="sr-only"></span></a>
            </div>
          </div>
        </a>
      </div>

      <h2 class="text-center" style={{marginTop: '3rem', marginBottom: '1.5rem'}}>Finished Projects</h2>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <a href="https://github.com/kingchappers/devBlog" className="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">GatsbyJS</h5>
              <p class="card-text">GatsbyJS is the framework I've used for this site. I used the <a href="https://www.gatsbyjs.org/starters/jaxx2104/gatsby-starter-bootstrap/" target="_blank" rel="noopener noreferrer">gatsby-starter-bootstrap  </a> starter, it's a fairly basic starter that incorporates bootstrap. The starter was created by <a href="https://github.com/jaxx2104" target="_blank" rel="noopener noreferrer">jaxx2104</a> so they deserve credit.</p>

              <a className="nav-link mx-5" href="https://github.com/kingchappers/devBlog" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color='black'/> <span className="sr-only"></span></a>
            </div>
          </div>
        </a>

        <a href="https://github.com/kingchappers/dm-outrun" className="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">rEFInd Theme - DM-Outrun</h5>
              <p class="card-text">rEFInd is a boot manager available for systems using UEFI. I created a theme for the loader based on <a href="https://github.com/mustaqimM/dm" target="_blank" rel="noopener noreferrer">mustaqimM's DM</a> theme. All I've really done to the theme is made it a little more Outrun.</p>

              <a className="nav-link mx-5" href="https://github.com/kingchappers/dm-outrun" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color='black'/> <span className="sr-only"></span></a>
            </div>
          </div>
        </a>
      </div>

      <h2 class="text-center" style={{marginTop: '3rem', marginBottom: '1.5rem'}}>Discontinued Projects</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <a href="https://github.com/kingchappers/auto-cyber-range" className="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Athena</h5>
              <p class="card-text">The aim of this project is to allow people to configure and use a cyber range without having to go through the painstaking process of building a virtual network from scratch. In the initial stages I'll be creating a basic docker network, then I'll work on auto configuring some virtual machines, and finally move to make a front-end for the project. This one got discontinued as I found out about the GNS3 project which mostly did what I intended to do with this, I figured I'd move onto other things as I didn't want to replicate other peoples work.</p>

              <a className="nav-link mx-5" href="https://github.com/kingchappers/auto-cyber-range" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size='2x' color='black'/> <span className="sr-only"></span></a>
            </div>
          </div>
          </a>
      </div>



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
