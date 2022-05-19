import React from 'react'
import "./page-header.css";

const PageHeader = ({title}) => {
  return (
    <div className="page-header">
        <h1>{title}</h1>
    </div>
  )
}

export default PageHeader