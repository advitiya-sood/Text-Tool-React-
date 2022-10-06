import React from 'react'



export default function Alert(props) {
  return (  

     props.alt &&
     <>
     <div className={`alert alert-${props.alt.type}`} role="alert">
      {props.capital(props.alt.type)}: {props.alt.msg}  {/* capital function in app.js component, implimented using props */}
    </div> 
    </>
     
    
  )
}
