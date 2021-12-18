import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "tutorials" }}>
    <SEO title="tutorials" keywords={[`gatsby`, `react`, `bootstrap`]} />
    
    
      <h2>Tutorials</h2>

      <p className="text-left">
        These tutorials have been put together by me, and have been gathered from various works/projects I've worked on personally. I've placed them here mainly so I don't have to keep flicking through the little black book I keep on my desk every time I need to re-use something I've done before, but if they help someone else along the way then that's great too.</p>

      <p className="text-left">
        As always if you have any questions about the content on this page feel free to get in touch. I'm no expert but I'll try to help.
      </p>

      <div class="row row-cols-1 row-cols-md-3 g-4">
        <Link to="/tutorials/securitypentesttools" className="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Security & Pen Test Tools</h5>
              <p class="card-text">
              The tools in this set of tutorials are all useful for security or penetration testing. Most of them are useful for different circumstances, some more than others, and each have their specific use cases. I hope it goes without saying but please do not use any of the material here for malicious purposes, or without explicit permission from the owner of the site/devices you are testing on.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/tutorials/linuxTools" className="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Linux Tools</h5>
              <p class="card-text">
                Linux is a great operating system, but it can be fairly daunting going into an environment that's very command line heavy. The tutorials here should give you a little more knowledge of some of the tools available in a Linux environment. These are ones that I have personally struggled with at least.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/tutorials/linuxConfiguration" className="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Linux Configuration</h5>
              <p class="card-text">
                These offer some fairly simple tips and tricks regarding the configuration of Linux. These are especially useful when configuring an OS like Arch from scratch.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/tutorials/miscellany" className="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Miscellany</h5>
              <p class="card-text">
              Here are some tools that didn't really fit anywhere else, and are mostly operating system agnostic and do not fit in the other areas.
              </p>
            </div>
          </div>
        </Link>
       
        <Link to="/tutorials/windowsTools" className="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Windows Tools</h5>
              <p class="card-text">
                These are some of the Windows based tools I've used in both my professional life and in the various projects I've done as hobbies. 
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
