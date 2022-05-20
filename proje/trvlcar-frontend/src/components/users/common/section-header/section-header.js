import React from 'react'
import "./section-header.css";

const SectionHeader = ({title, desc}) => {
  return (
    <div className="section-header">
        <h3>{title}</h3>
        <p>{desc}</p>
        <span>{title}</span>
    </div>
  )
}

export default SectionHeader