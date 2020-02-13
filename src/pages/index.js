import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import imgLogo from "../images/srd_iconB.png"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <h1>
      Need your site redone?
    </h1>
    <div style={{ maxWidth: `75px`, marginBottom: `1.45rem` }}>
    <Image />
    </div>
    <p>will take your old out of date static webpage and 
      turn it into a super speed webpage using GatsbyJS.
    </p>
    <img src={imgLogo} alt="Logo" />

    {/*<Link to="/page-2/">Go to page 2</Link>*/}
  </Layout>
)

export default IndexPage
