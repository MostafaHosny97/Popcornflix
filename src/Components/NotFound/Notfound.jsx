import React from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

export default function Notfound() {
  return <HelmetProvider>
    <Helmet>
      <title>Not Found 404</title>
    </Helmet>
  
    <div className="text-center w-100">
      <img src={require("../../images/404-Error-0.jpg")} className="w-100" alt=""/>
    </div>
  
  
  
  
  </HelmetProvider>
}
