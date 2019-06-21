import React from "react"
import { Row, Col, Container, ListGroup, Card } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      <h2>Projects</h2>

      <h2 style={{marginTop: '2rem', marginBottom: '1.5rem'}}>Work in Progress</h2>
      <div className="d-flex flex-row justify-content-around">
        <Card style={{width: '10rem'}}>
          <Card.Body>
            <Card.Title>Test Card</Card.Title>
            <Card.Subtitle>test</Card.Subtitle>
            <Card.Text>this is a test card</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{width: '20rem'}}>
          <Card.Body>
            <Card.Title>Test Card2</Card.Title>
            <Card.Subtitle>test</Card.Subtitle>
            <Card.Text>this is a test cardhhhhhhhhhhh</Card.Text>
          </Card.Body>
        </Card>
      </div>

      <h2 style={{marginTop: '3rem', marginBottom: '1.5rem'}}>Finished Projects</h2>
      <div className="d-flex flex-row justify-content-around">
        <Card style={{width: '10rem'}}>
          <Card.Body>
            <Card.Title>Test Card</Card.Title>
            <Card.Subtitle>test</Card.Subtitle>
            <Card.Text>this is a test card</Card.Text>
          </Card.Body>
        </Card>

        <Card style={{width: '20rem'}}>
          <Card.Body>
            <Card.Title>Test Card2</Card.Title>
            <Card.Subtitle>test</Card.Subtitle>
            <Card.Text>this is a test cardhhhhhhhhhhh</Card.Text>
          </Card.Body>
        </Card>
      </div>

    </Container>
  </Layout>
)

export default IndexPage
