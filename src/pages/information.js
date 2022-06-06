import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const InformationPage = () => {
  const { strapiAbout } = useStaticQuery(graphql`
    query {
      strapiAbout {
        title
      }
    }
  `)
  const { title } = strapiAbout

  const seo = {
    metaTitle: title,
    metaDescription: title,
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