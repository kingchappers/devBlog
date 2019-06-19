/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import { StaticQuery, graphql } from "gatsby"

import { Container, Row, Col } from "react-bootstrap"

import Navbar from "./navBar"

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="justify-content" style={styles.pageBackground}>
          <Container fluid className="px-0 main">
            <Row noGutters className="justify-content-center">
              {/* COMMENTED AREA NOT IN USE */}
              {/* <Col>
                <Header siteTitle={data.site.siteMetadata.title} />
              </Col> */}
            </Row>
            <Navbar pageInfo={pageInfo} />
            <Row noGutters>
              <Col>
                <Container className="mt-5">
                  <main>{children}</main>
                </Container>
              </Col>
            </Row>
          </Container>
          <Container fluid className="px-0">
            <Row noGutters>
              <Col className="footer-col">
                <footer style={styles.navbar}>
                  <span>
                    © {new Date().getFullYear()}, Built with
                    {` `}
                    <a href="https://www.gatsbyjs.org">Gatsby</a>
                  </span>
                </footer>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    )}
  />
)

const styles ={
  navbar: {
    backgroundColor: "#531A53",
  },

  pageBackground:{
    backgroundColor: "#e8e3ea",
  },
};

export default Layout
