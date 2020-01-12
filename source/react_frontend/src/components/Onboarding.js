  import React from 'react';
  import Swiper from 'react-id-swiper';
  import 'swiper/css/swiper.css';

  function Onboarding(){
    const params = {
      pagination: {
        el: '.swiper-pagination',
        clickable: false,
          //ako viem stylovat ked importujem z library css???
      }
    };
    return (
      <Swiper {...params}>
        <div style={{height:"100%"}}>Slide #1</div>
        <div>Slide #2</div>
        <div>Slide #3</div>
        <div>Slide #4</div>
        <div>Slide #5</div>
      </Swiper>
    )
  }
  export default Onboarding;