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
        return response.text()
    })
    .then(function(html) {
        setCustomHTML(html)
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });
    setLoader(false)
  }

  useEffect(() => {
    renderCustomPage('')
  }, [])

  return(
    <>
      <Seo title="404: Not found" />
      {loader && <div>Loading...</div>}
      <div dangerouslySetInnerHTML={{__html: customHTML}}></div>
    </>
  )
}

export default NotFoundPage
