import React from "react"
import { Container, Card } from "react-bootstrap"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "windowsTools" }}>
    <SEO title="Windows Tools" keywords={[`Windows`, `Tools`, `PowerShell`]} />
    
    <Container className="text-center">
      <h2>Windows Tools</h2>

      <p className="text-left">
        These are some of the Windows based tools I've used in both my professional life and in the various projects I've done as hobbies. 
      </p>

      <div className="card-columns">
      <Link to="/tutorials/windowsTools/powershell" className="link-no-style" style={styles.cardLink}>
          <Card style={styles.cardSize}>
            <Card.Body>
              <Card.Title className="font-weight-bold">PowerShell</Card.Title>
              <Card.Text className="text-left">
                This will give you an overview of some useful PowerShell commands.
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
