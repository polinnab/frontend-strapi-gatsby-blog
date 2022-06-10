import React, {useEffect, useState} from "react"
import { useLocation } from "@reach/router"
import Seo from "../components/seo"

const NotFoundPage = (props) => {
  const [customHTML, setCustomHTML] = useState(null)
  const [blob, setBlob] = useState(null)
  const [loader, setLoader] = useState(false)
  const { pathname } = useLocation()
  console.log('pathname: ', pathname)

  function renderCustomPage(path) {
    setLoader(true)
    fetch(`https://anadea.info`)
    .then(function(response) {
      const headers = [...response.headers]
      const index = headers.findIndex(el => el[0] === 'content-type' && el[1] === 'image/jpeg')
      if (index === -1) {
        return response.text()
      } else {
        return response.blob()
      }
    })
    .then(function(resp) {
      if (typeof(resp) === 'string') {
        setCustomHTML(resp)
        return
      } 
      var objectURL = URL.createObjectURL(resp)
      console.log(objectURL)
      setBlob(objectURL)
    })
    .catch(function(err) {  
        console.log('Failed to fetch page: ', err);  
    });
    setLoader(false)
  }

  useEffect(() => {
    renderCustomPage('')
  }, [])

  if (blob) {
    return(
      <>
        <img src={blob} alt="" />
      </>
    )
  }

  return(
    <>
      <Seo title="404: Not found" />
      {loader && <div>Loading...</div>}
      <div dangerouslySetInnerHTML={{__html: customHTML}}></div>
    </>
  )
}

export default NotFoundPage
