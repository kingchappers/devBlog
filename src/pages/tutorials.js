import React from "react"
import { Container, Card } from "react-bootstrap"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    
    <Container className="text-center">
      <h2>Tutorials</h2>

      <p className="text-left">
        These tutorials have been put together by me, and have been gathered from various works/projects I've worked on personally. I've placed them here mainly so I don't have to keep flicking through the little black book I keep on my desk every time I need to re-use something I've done before, but if they help someone else along the way then that's great too.</p>

      <p className="text-left">
        As always if you have any questions about the content on this page feel free to get in touch. I'm no expert but I'll try to help.
      </p>

      <h2 style={{marginTop: '2rem', marginBottom: '1.5rem'}}>Work in Progress</h2>
      <div className="d-flex flex-row justify-content-around">
        <Link to="/tutorials/xorgKeyboard" className="link-no-style" style={styles.cardLink}>
          <Card style={{width: '20rem'}}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Xorg Keyboard</Card.Title>
              <Card.Subtitle></Card.Subtitle>
              <Card.Text className="text-left">
                This is a basic tutorial for configuring the Xorg display server to allow for the correct language.
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
