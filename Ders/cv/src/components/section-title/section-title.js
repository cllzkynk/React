import React from 'react'

const SectionTitle = (props) => {
  return (
    <div className="heading text-center">
        <h2>{props.title}</h2>
        <p>{props.desc}</p>
    </div>
  )
}

export default SectionTitle