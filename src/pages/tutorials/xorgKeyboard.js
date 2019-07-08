import React from "react"
import { Container } from "react-bootstrap"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`gatsby`, `react`, `bootstrap`]} />
    
    <Container className="text-left">
      <h2>Xorg Keyboard</h2>

      <p>
        This is a fairly basic tutorial regarding the setup of a keyboard for the Xorg display server.
      </p>

      <p>
        As always if you have any questions about the content on this page feel free to get in touch. I'm no expert but I'll try to help.
      </p>

      <h2 style={{marginTop: '2rem', marginBottom: '1.5rem'}}>Create the file</h2>


    </Container>
  </Layout>
)

export default IndexPage
