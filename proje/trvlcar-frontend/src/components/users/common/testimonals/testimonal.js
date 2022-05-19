import React from 'react'

const Testimonal = ({title, name, message}) => {
  return (
    <div className="testimonal">
        <p>{message}</p>
        <h5>{name}</h5>
        <em>{title}</em>
    </div>
  )
}

export default Testimonal