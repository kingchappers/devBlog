import React from "react"
import { Row, Col, Container, ListGroup, Card } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    <Container className="text-center">
      <p className="text-left">I wanted to create a page that showcases some of the I'm either working on or have finished. I'll post the code to most of these projects on GitHub. I hope you like them, and if you have any suggestions for improvements/features please get in touch.</p>
      <p className="text-left">I'll also be posting tutorials. These tutorials will be on a variety of topics; mostly things that I've personally worked on and in some cases struggled with myself. Again please feel free to get in touch if you have any trouble with them or want some futher information on some of the topics. I wouldn't call myself an expert on most of the topics, but where I can help I will</p>

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
