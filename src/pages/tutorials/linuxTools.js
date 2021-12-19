import React from "react"
import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "linixtools" }}>
    <SEO title="Linux Tools" keywords={[`Linux`, `Tools`, `Bash`]} />
    
    
      <h2>Linux Tools</h2>

      <p className="text-left">
        Linux is a great operating system, but it can be fairly daunting going into an environment that's very command line heavy. The tutorials here should give you a little more knowledge of some of the tools available in a Linux environment. These are ones that I have personally struggled with at least.
      </p>

      <div class="row row-cols-1 row-cols-md-3 g-4">
      <Link to="/tutorials/linuxTools/miscLinux" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Miscellaneous Linux Tools</h5>
              <p class="card-text">
                Some tips for Linux that didn't really fit anywhere else.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/tutorials/linuxTools/networking" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Networking Tools</h5>
              <p class="card-text">
                This will show you how to use some of the networking tools in Linux, such as ip and netctl.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/tutorials/linuxTools/textManipulation" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Text Manipulation</h5>
              <p class="card-text">
                This will show you to manipulate text using different tools and commands.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/tutorials/linuxTools/processMonitoring" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Process Monitoring</h5>
              <p class="card-text">
                This will show you how to monitor processes in Linux. This is important for various monitoring and maintenance tasks when you've created your own tools.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/tutorials/linuxTools/mountConfigFormatDrive" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Mounting, Configuring and Formatting Drives</h5>
              <p class="card-text">
                This will show you how to mount configure and format drives in Linux.
              </p>
            </div>
          </div>
        </Link>        

        <Link to="/tutorials/linuxTools/secureConnect" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Secure Connections Hosts via SSH</h5>
              <p class="card-text">
                This will show you the basics of securely connecting to hosts via SSH.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/tutorials/linuxTools/find" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Find Command</h5>
              <p class="card-text">
                This is a basic guide to the find command. This is a useful utility for finding files in Linux.
              </p>
            </div>
          </div>
        </Link>

        <Link to="/tutorials/linuxTools/screen" class="text-decoration-none" style={styles.cardLink}>
          <div class="card" style={styles.cardSize}>
            <div class="card-body">
              <h5 class="card-title">Screen Command</h5>
              <p class="card-text">
                This is a simple tutorial regarding the use of the Screen command. Screen is useful where you are using distributions that do not have a GUI. You can use the command to have multiple terminal sessions at once.
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
