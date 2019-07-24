import React from "react"
import { Container, Card } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      <h2>Contact</h2>

      <h2 style={{marginTop: '2rem', marginBottom: '1.5rem'}}>Work in Progress</h2>
      <div className="card-columns">
        <Card style={styles.cardSize}>
          <Card.Body>
            <Card.Title>Test Card</Card.Title>
            <Card.Subtitle>test</Card.Subtitle>
            <Card.Text>this is a test card</Card.Text>
          </Card.Body>
        </Card>
      </div>

    </Container>
  </Layout>
)

const styles ={
  cardSize: {
    maxWidth: '20rem',
    //height: '12rem',
    margin: '1rem',
  },

};

export default IndexPage
