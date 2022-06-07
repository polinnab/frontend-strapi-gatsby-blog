import React, {useEffect, useState} from "react"
import { useLocation } from "@reach/router"
import Seo from "../components/seo"

const NotFoundPage = (props) => {
  const [customHTML, setCustomHTML] = useState(null)
  const [loader, setLoader] = useState(false)
  const { pathname } = useLocation()
  console.log('pathname: ', pathname)

  function renderCustomPage(path) {
    setLoader(true)
    fetch(`https://anadea.info/${path}`)
    .then(function(response) {
      debugger
        return response.text()
    })
    .then(function(html) {
      debugger
        setCustomHTML(html)
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });
    setLoader(false)
  }

  // blob

  //render image without <img />

  useEffect(() => {
    renderCustomPage('')
  }, [])

  return(
    <>
      <Seo title="404: Not found" />
      {loader && <div>Loading...</div>}
      <div dangerouslySetInnerHTML={{__html: customHTML}}>{customHTML}</div>

    </>
  )
}

export default NotFoundPage
