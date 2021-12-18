import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "miscellany" }}>
    <SEO title="Miscellany" keywords={[`Linux`, `Tools`, `Bash`]} />
    
    
      <h2>Miscellany</h2>

      <p className="text-left">
        Here are some tools that didn't really fit anywhere else, and are mostly operating system agnostic and do not fit in the other areas.
      </p>

      <div class="row row-cols-1 row-cols-md-3 g-4">
      <Link to="/tutorials/miscellany/mySql" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">MySQL</h5>
              <p class="card-text">
                This will give you an overview of MySQL and how to use it.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/tutorials/miscellany/docker" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Docker</h5>
              <p class="card-text">
                Docker is an incredibly useful tool for containerising applications. This tutorial will give you some of the basics for using the application and creating your own containers.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/tutorials/miscellany/vagrant" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Vagrant</h5>
              <p class="card-text">
                Vagrant is a tool that can be used to automate the creation of virtual machines. This allows you to easily spin up and configure virtual environments. This is quite useful when you are unable to use a containerisation tools like Docker. I've used it for spinning up virtual machines that cannot utilise Docker, such as a pfsense environment that runs on freeBSD.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/tutorials/miscellany/ping" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Ping</h5>
              <p class="card-text">
                This will give you an overview of the ping tool and how to use it.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/tutorials/miscellany/nslookup" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">nslookup</h5>
              <p class="card-text">
                This will give you an overview of the nslookup tool and how to use it.
              </p>
            </div>
          </div>
        </Link>

      <Link to="/tutorials/miscellany/python" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Python</h5>
              <p class="card-text">
                This is just some me talking about Python. At the time of writing I've been going through the Black Hat Python book by Justin Seitz.
              </p>
            </div>
          </div>
        </Link>
        
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
