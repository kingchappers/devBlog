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

      <div className="card-columns">
      <Link to="/tutorials/linuxConfiguration/xorgConfiguration" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Xorg Config</Card.Title>
              <Card.Text className="text-left">
                This is small set of fairly basic tutorials regarding the setup of keyboards, monitors, and mice for the Xorg display server.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      
        <Link to="/tutorials/linuxConfiguration/archTips" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Arch Tips/Tricks</Card.Title>
              <Card.Text className="text-left">
                This is small set of fairly basic tutorials regarding different hints and tips you can use to configure a fresh installation of Arch, or some other lightweight distro.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/linuxConfiguration/addPartitionToGrub" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Add a New Disk to GRUB</Card.Title>
              <Card.Text className="text-left">
                This will show you how to add a partition on a separate drive. The tutorial looks at a Windows drive but it can be changed for any OS.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      
        <Link to="/tutorials/linuxConfiguration/displaysvrAndDisplaymgr" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Install Display Server and Display Manager</Card.Title>
              <Card.Text className="text-left">
                This will show you how to install a display server and display manager on lightweight distros. 
              </Card.Text>
            </Card.Body>
          </Card>
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
