import React from "react"
import { Container, Card } from "react-bootstrap"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "miscellany" }}>
    <SEO title="Miscellany" keywords={[`Linux`, `Tools`, `Bash`]} />
    
    <Container className="text-center">
      <h2>Miscellany</h2>

      <p className="text-left">
        Here are some tools that didn't really fit anywhere else, and are mostly operating system agnostic and do not fit in the other areas.
      </p>

      <div className="card-columns">
      <Link to="/tutorials/miscellany/mySql" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">MySQL</Card.Title>
              <Card.Text className="text-left">
                This will give you an overview of MySQL and how to use it.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/miscellany/docker" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Docker</Card.Title>
              <Card.Text className="text-left">
                Docker is an incredibly useful tool for containerising applications. This tutorial will give you some of the basics for using the application and creating your own containers.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/miscellany/ping" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">Ping</Card.Title>
              <Card.Text className="text-left">
                This will give you an overview of the ping tool and how to use it.
              </Card.Text>
            </Card.Body>
          </Card>
        </Link>

        <Link to="/tutorials/miscellany/nslookup" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">nslookup</Card.Title>
              <Card.Text className="text-left">
                This will give you an overview of the nslookup tool and how to use it.
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
