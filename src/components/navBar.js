import React from "react"
import { Link } from "gatsby"

import Image from '../images/pipe1.png'

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  
  return (
    <>    
    {/* The below jumbotron will show on screens medium and larger (>768). This is what "d-none d-md-block" does*/}        
        <div className="justify-content container p-0" style={styles.container}>  

          <div className="d-none d-md-block">
            <Link to="/" className="text-decoration-none">
              <div className="jumbotron jumbotron-fluid img-fluid rounded-top" style={styles.jumbo}> 
                <div className="container">
                  <h1 className="display-1 strong" style={styles.title}>Sam Chapman .Dev</h1>
                </div>
              </div>
            </Link>

            <nav className="navbar navbar-dark navbar-expand rounded-bottom" style={styles.navbar}>
              <div className="navbar-collapse collapse align-items-center w-100">
                <ul className="navbar-nav mx-auto text-center justify-content-center">
                  <li className="nav-item nav-link col-5"><Link to="/" className="text-decoration-none" style={styles.title}>Home</Link></li>
                  <li className="nav-item nav-link col-5"><Link to="/tutorials" className="text-decoration-none" style={styles.title}>Tutorials</Link></li>
                  <li className="nav-item nav-link col-5"><Link to="/projects" className="text-decoration-none" style={styles.title}>Projects</Link></li>
                  <li className="nav-item nav-link col-5"><Link to="/contact" className="text-decoration-none" style={styles.title}>Contact</Link></li>
                  <li className="nav-item nav-link col-5"><a href="https://github.com/kingchappers" target="_blank" rel="noopener noreferrer" className="text-decoration-none" style={styles.title}>GitHub</a></li>
                </ul>
              </div>            
            </nav>
          </div>

          <div className="d-md-none">
            <Link to="/" className="text-decoration-none">
              <div className="jumbotron jumbotron-fluid img-fluid rounded-top" style={styles.jumboSmall}> 
                <div className="container">
                  <h1 className="display-5 strong" style={styles.title}>Sam Chapman .Dev</h1>
                </div>
              </div>
            </Link>
            
            
            <nav className="navbar navbar-dark navbar-expand rounded-bottom" style={styles.navbar}>
              <div className="navbar-collapse collapse align-items-center w-100">
                <ul className="navbar-nav mx-auto text-center justify-content-center">
                  <li className="nav-item nav-link col"><Link to="/" className="text-decoration-none" style={styles.title}>Home</Link></li>
                  <li className="nav-item nav-link col"><Link to="/tutorials" className="text-decoration-none" style={styles.title}>Tutorials</Link></li>
                  <li className="nav-item nav-link col"><Link to="/projects" className="text-decoration-none" style={styles.title}>Projects</Link></li>
                  <li className="nav-item nav-link col"><Link to="/contact" className="text-decoration-none" style={styles.title}>Contact</Link></li>
                  <li className="nav-item nav-link col"><a href="https://github.com/kingchappers" target="_blank" rel="noopener noreferrer" className="link-no-stylec" style={styles.title}>GitHub</a></li>
                </ul>
              </div>            
            </nav>
          </div>

         </div>     
    </>
  )
}

const styles ={
  jumbo: {
    backgroundImage: `url(${Image})`,
    height: 300,
    width: 1500,    
  },

  jumboSmall: {
    backgroundImage: `url(${Image})`,
    height: 150,
    width: 600,    
  },

  container: {
    backgroundColor: "#ffffff",
    position: "relative",
    minHeight: "100%",
    // width: 1500,
  },

  title: {
    color: "#f2f2f2",
  },

  navbar: {
    backgroundColor: "#531A53",
  },
};

export default CustomNavbar
