import React from "react";
import ReactSlidy from 'react-slidy'
import 'react-slidy/lib/styles.css'
import Slider1 from './slider1.jpg'
import Slider2 from './slider2.jpg'
import Slider3 from './slider3.jpg'


const Homepage = () => {
 return(
     <div className='Home'>
         <div className='slider'>
         <ReactSlidy infiniteLoop>
             <img style={{maxHeight: '250px'}} src= {Slider1} alt='' />
             <img style={{maxHeight: '250px'}} src= {Slider2} alt=''/>
             <img style={{maxHeight: '250px'}} src= {Slider3} alt=''/>
         </ReactSlidy>
         </div>
     </div>
 )
}

export default Homepage

