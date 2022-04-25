import React from 'react'

const Props = (props) => {
    console.log(props);
  return (
    <div>Merhaba benim adım {props.ad}, {props.yas} yaşındayım</div>
  )
}

export default Props