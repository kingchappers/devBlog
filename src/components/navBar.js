import React from "react"
import { Link } from "gatsby"

import Image from '../images/pipe1.png'

const CustomNavbar = ({ pageInfo }) => {
  console.log(pageInfo)
  
  return (
    <>
    <div className="justify-content container">     
        <div className="d-flex flex-column justify-content container p-0" style={styles.container}> 
          <Link to="/" className="link-no-style">
            <div className="jumbotron jumbotron-fluid img-fluid rounded-top" style={styles.jumbo}> 
              <div className="container">
                <h1 className="display-1 strong" style={styles.title} >Sam Chapman .Dev</h1>
              </div>
            </div>
          </Link>

          <nav className="navbar navbar-dark navbar-expand-md justify-content-center rounded-bottom" style={styles.navbar}>
            <div className="navbar-collapse collapse justify-content-between align-items-center w-100" id="collapsingNavbar2">
              <ul className="navbar-nav mx-auto text-center">
                <li className="nav-item nav-link"><Link to="/" className="link-no-style" style={styles.title}>Home</Link></li>
                <li className="nav-item nav-link"><Link to="/tutorials" className="link-no-style" style={styles.title}>Tutorials</Link></li>
                <li className="nav-item nav-link"><Link to="/projects" className="link-no-style" style={styles.title}>Projects</Link></li>
                <li className="nav-item nav-link"><Link to="/contact" className="link-no-style" style={styles.title}>Contact</Link></li>
                <li className="nav-item nav-link"><a href="https://github.com/kingchappers" target="_blank" rel="noopener noreferrer" className="link-no-style" style={styles.title}>GitHub</a></li>
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

  container: {
    backgroundColor: "#ffffff",
    position: "relative",
    minHeight: "100%",
    width: 1500,
  },

  title: {
    color: "#f2f2f2",
    marginRight: "5rem"
  },

  navbar: {
    backgroundColor: "#531A53",
  }
};

export default CustomNavbar
