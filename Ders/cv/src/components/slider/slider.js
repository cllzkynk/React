import React from 'react'
import Slide from './slide'

const Slider = () => {
  return (
    <section id="home">
      <div className="banner-container">
        <img src="assets/images/banner-bg.jpg" alt="banner" />
        <div className="container banner-content">
          <div id="da-slider" className="da-slider">
          
          <Slide title="Webdesigner" desc="Amazing free responsive website for free, enjoy!!!"/>
          <Slide title="UX/UI Developer" desc="I develop website using Bootstrap front-end framework.."/>
          <Slide title="HTML5/CSS3" desc="HTML5 is a markup language used for structuring and presenting Web."/>
          <Slide title="JavaScript/jQuery" desc="jQuery: Write Less, Do More..."/>
        
        
          </div>
        </div>
      </div>
    </section>
    


  )
}

export default Slider