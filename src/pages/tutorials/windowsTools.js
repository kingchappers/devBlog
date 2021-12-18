import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "windowsTools" }}>
    <SEO title="Windows Tools" keywords={[`Windows`, `Tools`, `PowerShell`]} />
    
    
      <h2>Windows Tools</h2>

      <p className="text-left">
        These are some of the Windows based tools I've used in both my professional life and in the various projects I've done as hobbies. 
      </p>

      <div class="row row-cols-1 row-cols-md-3 g-4">
      <Link to="/tutorials/windowsTools/powershell" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">PowerShell</h5>
              <p class="card-text">
                This will give you an overview of some useful PowerShell commands.
              </p>
            </div>
          </div>
        </Link>
        
      </div>    


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
