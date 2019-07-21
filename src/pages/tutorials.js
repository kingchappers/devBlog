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

      <h2 style={{marginTop: '2rem', marginBottom: '1.5rem'}}>Linux Configuration</h2>
      <div className="d-flex flex-row justify-content-around">
        <Link to="/tutorials/xorgConfiguration" className="link-no-style" style={styles.cardLink}>
          <Card style={{width: '20rem'}}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Xorg Config</Card.Title>
              <Card.Subtitle></Card.Subtitle>
              <Card.Text className="text-left">
                This is small set of fairly basic tutorials regarding the setup of keyboards, monitors, and mice for the Xorg display server.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>
      
        <Link to="/tutorials/archTips" className="link-no-style" style={styles.cardLink}>
          <Card style={{width: '20rem'}}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Arch Tips/Tricks</Card.Title>
              <Card.Subtitle></Card.Subtitle>
              <Card.Text className="text-left">
                This is small set of fairly basic tutorials regarding different hints and tips you can use to configure a fresh installation of Arch, or some other lightweight distro.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/addPartitionToGrub" className="link-no-style" style={styles.cardLink}>
          <Card style={{width: '20rem'}}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Add a New Disk to GRUB</Card.Title>
              <Card.Subtitle></Card.Subtitle>
              <Card.Text className="text-left">
                This will show you how to add a partition on a separate drive. The tutorial looks at a Windows drive but it can be changed for any OS.
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

};

export default IndexPage
