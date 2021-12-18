import React from "react"
import { Container, Card } from "react-bootstrap"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "linuxConfiguration" }}>
    <SEO title="Linux Configuration" keywords={[`Linux`, `Tools`, `Bash`]} />
    
    <Container className="text-center">
      <h2>Linux Configuration</h2>

      <p className="text-left">
        These offer some fairly simple tips and tricks regarding the configuration of Linux. These are especially useful when configuring an OS like Arch from scratch.
      </p>

      <div class="row row-cols-1 row-cols-md-3 g-4">
      <Link to="/tutorials/linuxConfiguration/xorgConfiguration" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Xorg Config</h5>
              <p class="card-text">
                This is small set of fairly basic tutorials regarding the setup of keyboards, monitors, and mice for the Xorg display server.
              </p>
            </div>
          </div>
        </Link>
      
        <Link to="/tutorials/linuxConfiguration/archTips" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Arch Tips/Tricks</h5>
              <p class="card-text">
                This is small set of fairly basic tutorials regarding different hints and tips you can use to configure a fresh installation of Arch, or some other lightweight distro.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/tutorials/linuxConfiguration/addPartitionToGrub" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Add a New Disk to GRUB</h5>
              <p class="card-text">
                This will show you how to add a partition on a separate drive. The tutorial looks at a Windows drive but it can be changed for any OS.
              </p>
            </div>
          </div>
        </Link>
      
        <Link to="/tutorials/linuxConfiguration/displaysvrAndDisplaymgr" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Install Display Server and Display Manager</h5>
              <p class="card-text">
                This will show you how to install a display server and display manager on lightweight distros. 
              </p>
            </div>
          </div>
        </Link>
        
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
