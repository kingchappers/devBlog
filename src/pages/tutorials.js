import React from "react"
import { Container, Card } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      <h2>Tutorials</h2>

      <h2 style={{marginTop: '2rem', marginBottom: '1.5rem'}}>Work in Progress</h2>
      <div className="d-flex flex-row justify-content-around">
        <Card style={{width: '20rem'}}>
          <Card.Body>
            <Card.Title>Tutorials Coming Soon!</Card.Title>
            <Card.Subtitle></Card.Subtitle>
            <Card.Text></Card.Text>
          </Card.Body>
        </Card>
      </div>

    </Container>
  </Layout>
)

export default IndexPage
