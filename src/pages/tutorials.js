import React from "react"
import { Container, Card } from "react-bootstrap"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="tutorials" keywords={[`gatsby`, `react`, `bootstrap`]} />
    
    <Container className="text-center">
      <h2>Tutorials</h2>

      <p className="text-left">
        These tutorials have been put together by me, and have been gathered from various works/projects I've worked on personally. I've placed them here mainly so I don't have to keep flicking through the little black book I keep on my desk every time I need to re-use something I've done before, but if they help someone else along the way then that's great too.</p>

      <p className="text-left">
        As always if you have any questions about the content on this page feel free to get in touch. I'm no expert but I'll try to help.
      </p>

      <h2 style={{marginTop: '2rem', marginBottom: '1.5rem'}}>Security & Pen Test Tools</h2>
      <div className="card-columns">
        <Link to="/tutorials/hydra" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Hydra</Card.Title>
              <Card.Text className="text-left">
                Hydra is a tool used for brute forcing passwords. Please do not use this tool for anything other than testing, or where you have explicit permission to do so.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>

      <h2 style={{marginTop: '2rem', marginBottom: '1.5rem'}}>Linux Tools</h2>
      <div className="card-columns">
        <Link to="/tutorials/miscLinux" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Miscellaneous Linux Tools</Card.Title>
              <Card.Text className="text-left">
                Some tips for Linux that didn't really fit anywhere else.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/networking" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Networking Tools</Card.Title>
              <Card.Text className="text-left">
                This will show you how to use some of the networking tools in Linux, such as ip and netctl.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/textManipulation" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Text Manipulation</Card.Title>
              <Card.Text className="text-left">
                This will show you to manipulate text using the tr command.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/mountConfigFormatDrive" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Mounting, Configuring and Formatting Drives</Card.Title>
              <Card.Text className="text-left">
                This will show you how to mount configure and format drives in Linux.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>        

        <Link to="/tutorials/secureConnect" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Secure Connections Hosts via SSH</Card.Title>
              <Card.Text className="text-left">
                This will show you the basics of securely connecting to hosts via SSH.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/find" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Find Command</Card.Title>
              <Card.Text className="text-left">
                This is a basic guide to the find command. This is a useful utility for finding files in Linux.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/sift" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">SIFT Forensic Linux Distro</Card.Title>
              <Card.Text className="text-left">
                This is more informational than a tutorial. SIFT is a Linux distribution that contains a number of useful forensic tools.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      </div>

      <h2 style={{marginTop: '2rem', marginBottom: '1.5rem'}}>Linux Configuration</h2>
      <div className="card-columns">
        <Link to="/tutorials/xorgConfiguration" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Xorg Config</Card.Title>
              <Card.Text className="text-left">
                This is small set of fairly basic tutorials regarding the setup of keyboards, monitors, and mice for the Xorg display server.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      
        <Link to="/tutorials/archTips" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Arch Tips/Tricks</Card.Title>
              <Card.Text className="text-left">
                This is small set of fairly basic tutorials regarding different hints and tips you can use to configure a fresh installation of Arch, or some other lightweight distro.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/addPartitionToGrub" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Add a New Disk to GRUB</Card.Title>
              <Card.Text className="text-left">
                This will show you how to add a partition on a separate drive. The tutorial looks at a Windows drive but it can be changed for any OS.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      
        <Link to="/tutorials/displaysvrAndDisplaymgr" className="link-no-style" style={styles.cardLink}>
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
    //height: '12rem',
    margin: '1rem',
  },

};

export default IndexPage
