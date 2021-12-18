import React from "react"
import { Container, Card } from "react-bootstrap"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "tutorials" }}>
    <SEO title="tutorials" keywords={[`gatsby`, `react`, `bootstrap`]} />
    
    <Container className="text-center">
      <h2>Tutorials</h2>

      <p className="text-left">
        These tutorials have been put together by me, and have been gathered from various works/projects I've worked on personally. I've placed them here mainly so I don't have to keep flicking through the little black book I keep on my desk every time I need to re-use something I've done before, but if they help someone else along the way then that's great too.</p>

      <p className="text-left">
        As always if you have any questions about the content on this page feel free to get in touch. I'm no expert but I'll try to help.
      </p>

      <div className="card-columns">
        <Link to="/tutorials/securitypentesttools" className="text-decoration-none" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Security & Pen Test Tools</Card.Title>
              <Card.Text className="text-left">
              The tools in this set of tutorials are all useful for security or penetration testing. Most of them are useful for different circumstances, some more than others, and each have their specific use cases. I hope it goes without saying but please do not use any of the material here for malicious purposes, or without explicit permission from the owner of the site/devices you are testing on.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/linuxTools" className="text-decoration-none" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Linux Tools</Card.Title>
              <Card.Text className="text-left">
                Linux is a great operating system, but it can be fairly daunting going into an environment that's very command line heavy. The tutorials here should give you a little more knowledge of some of the tools available in a Linux environment. These are ones that I have personally struggled with at least.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/linuxConfiguration" className="text-decoration-none" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Linux Configuration</Card.Title>
              <Card.Text className="text-left">
                These offer some fairly simple tips and tricks regarding the configuration of Linux. These are especially useful when configuring an OS like Arch from scratch.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/miscellany" className="text-decoration-none" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Miscellany</Card.Title>
              <Card.Text className="text-left">
              Here are some tools that didn't really fit anywhere else, and are mostly operating system agnostic and do not fit in the other areas.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
       
        <Link to="/tutorials/windowsTools" className="text-decoration-none" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Windows Tools</Card.Title>
              <Card.Text className="text-left">
                These are some of the Windows based tools I've used in both my professional life and in the various projects I've done as hobbies. 
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
