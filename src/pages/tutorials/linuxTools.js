import React from "react"
import { Container, Card } from "react-bootstrap"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "linixtools" }}>
    <SEO title="Linux Tools" keywords={[`Linux`, `Tools`, `Bash`]} />
    
    <Container className="text-center">
      <h2>Linux Tools</h2>

      <p className="text-left">
        Linux is a great operating system, but it can be fairly daunting going into an environment that's very command line heavy. The tutorials here should give you a little more knowledge of some of the tools available in a Linux environment. These are ones that I have personally struggled with at least.
      </p>

      <div className="card-columns">
      <Link to="/tutorials/linuxTools/miscLinux" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Miscellaneous Linux Tools</Card.Title>
              <Card.Text className="text-left">
                Some tips for Linux that didn't really fit anywhere else.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/linuxTools/networking" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Networking Tools</Card.Title>
              <Card.Text className="text-left">
                This will show you how to use some of the networking tools in Linux, such as ip and netctl.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/linuxTools/textManipulation" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Text Manipulation</Card.Title>
              <Card.Text className="text-left">
                This will show you to manipulate text using the tr command.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/linuxTools/mountConfigFormatDrive" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Mounting, Configuring and Formatting Drives</Card.Title>
              <Card.Text className="text-left">
                This will show you how to mount configure and format drives in Linux.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>        

        <Link to="/tutorials/linuxTools/secureConnect" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Secure Connections Hosts via SSH</Card.Title>
              <Card.Text className="text-left">
                This will show you the basics of securely connecting to hosts via SSH.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/linuxTools/find" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Find Command</Card.Title>
              <Card.Text className="text-left">
                This is a basic guide to the find command. This is a useful utility for finding files in Linux.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/linuxTools/screen" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Screen Command</Card.Title>
              <Card.Text className="text-left">
                This is a simple tutorial regarding the use of the Screen command. Screen is useful where you are using distributions that do not have a GUI. You can use the command to have multiple terminal sessions at once.
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
