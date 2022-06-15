import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const InformationPage = () => {

  const seo = {
    metaTitle: "Information",
    metaDescription: "Information page",
  }

  return (
    <Layout>
      <Seo seo={seo} />
      <div className="container">
        <span className="information-text">This is information page</span> 
      </div>
    </Layout>
  )
}

export default InformationPage