import React from 'react'

const StyleInline = () => {
    const id = "x";
    return (
    <div>
        <h2 style={{color: "red", backgroundColor: "black", paddingLeft: '2rem'}}>Hello World</h2>
        <p id="x" style={{textAlign: 'center', fontWeight:'bold'}}>slds skldfj ksdjfks ldjfksjkdlf jslkdfj klsdjfkl sjlkdfj skdfjksdjf klsdjkf lsjdklfj skldfj klsdfjkl s</p>
        <p id={id}>deneme</p>
    </div>
  )
}

export default StyleInline