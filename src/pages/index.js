import React, {useState} from "react"
// import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import catImage from "../images/cat.jpeg";
import funnyCatImage from "../images/funny-cat.jpeg";


const IndexPage = () => {
  // const { allStrapiArticle, strapiGlobal } = useStaticQuery(graphql`
  //   query {
  //     allStrapiArticle {
  //       nodes {
  //         ...ArticleCard
  //       }
  //     }
  //     strapiGlobal {
  //       siteName
  //       siteDescription
  //     }
  //   }
  // `)

  const [isPressed, setPressed] = useState(false)

  return (
    <Layout>
      <Seo seo={{ metaTitle: "Home" }} />
      <main>
        <div className="container">
          <h4 className="content-title">It's a Home demo page and here we could see...</h4>
          <ul className="content-list">
            <li>
              <h5 className="content-list-text">Just An Image</h5>
              <img className="content-list-image" src={catImage} alt="cat" />
            </li>
            <li>
              <h5>Some Text:</h5>
              <p>There could be a funny joke about codding but I couldn't find it so... blah blah blah</p>
            </li>
            <li>
              <h5>Some Button with do nothing useful</h5>
              <button onClick={() => setPressed(prevState => !prevState)}>Press me</button>
              <img className="content-list-image" src={funnyCatImage} alt="funnycat" />
              {isPressed && <span className="content-list-hidden-text">Ha-ha-ha!</span>}
            </li>
          </ul>
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage