import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Contact from '../components/Contact-inc'
import Image from '../components/Image'
// import { Link } from 'gatsby'
// import logo from '../img/ad2inc-logo-round.svg'
// import Intro from '../components/intro-home'
//  import Gallery1 from '../components/Gallery1'
import Layout from '../components/Layout'
import Install from '../components/Install'
// import Features from '../components/Features'
// import BlogRoll from '../components/BlogRoll'
import ScrollAnimation from 'react-animate-on-scroll'
// import { IoIosArrowDropdownCircle } from 'react-icons/io'
import { MdPlayArrow } from 'react-icons/md'
import { FiCornerRightDown } from 'react-icons/fi'
// import { FaTimesCircle } from 'react-icons/fa'
// import Intro3 from '../components/Intro3'

// import { FaAccessibleIcon, FaOdnoklassniki, FaBlind } from 'react-icons/fa'

// import PopMedical from '../components/PopMedical'
// import PopSemi from '../components/PopSemi'
// import PopNewsletter from '../components/PopNewsletter'
import styled from "styled-components"

const CustomBox = styled.div`
.spacer33{height:33vh; display:block;}
.spacer66{height:66vh; display:block;}
.spacer99{height:99vh; display:block;}
.progress{position:absolute; top:80vh; left:100px; border:1px solid yellow; z-index:1;}
.slide:nth-child(1) {
  -webkit-animation: fade 24s 0s infinite;
  z-index:2;
}
.slide:nth-child(2) {
  -webkit-animation: fade 24s 6s infinite;
  z-index:1;
}
.slide:nth-child(3) {
  -webkit-animation: fade 0s 0s infinite;
  z-index:0;
}
.slider{z-index:-1;}
//  SLIDE
#vidpop {
  display: block;
  text-align:center;
}
label + input[type=checkbox]{
display:none !important;
} 
 
input[type=checkbox]:checked + label div{
  transform:rotate(0) !important; transform: scale(1.2) !important; width:40vw !important; position:relative !important; top:-10vh !important; left:0 !important; transition: all 2s ease;
  z-index:1;
} 
input[type=checkbox]:checked + label div label{display:block !important; cursor:pointer;}
#vid-toggle:checked + #vidpop .sub{display:none !important;}
#vid-open{
  position:absolute; bottom:0; display:block; width:100%; height:100%;  z-index:1; cursor:pointer;
  // background:#fff;
}
// .container2 {
//   scroll-snap-type: y mandatory;
// }
// .child {
//   scroll-snap-align: start;
// }
.wrapper {
	display: flex;
}
// .container {
// 	flex-basis: 100%;
// 	max-height: 100vh;
// 	overflow-y: scroll;
// 	border: 0px solid gray;
// 	scroll-snap-type: y mandatory;
// 	&.proximity {
// 			scroll-snap-type: y proximity;
// 	}
// }
// .container2 {
//   scroll-snap-type: y mandatory;
//   scroll-padding-top: 0;
//   overflow-y: scroll;
// }
// section {
// 	scroll-snap-align: start;
// 	display: flex;
// 	flex-flow: column;
//   // justify-content: center;
//   min-height:100vh;
//   border-bottom:0px solid red !important;
// }
// .container2 {
// 	max-height: 100vh;
// 	overflow-y: scroll;
// 	scroll-snap-type: y mandatory;
// }
section {
	scroll-snap-align: start;
  min-height:100vh;
  border-bottom:0px solid red !important;
  
}
// section img{
//   display:block;
//   height:100vh;
//   width:100vw;
//   background-size:cover;
//   position:fixed;
//   top:0;
//   z-index:-1;
// }
`




const IndexPage = () => (
  
  
	

     
     <Layout>
     <CustomBox>
  
  <div className="container2">
  
  
 
  
   

  
  <div className="spacer99"></div>
  
  
  {/* <div className="spacer33"></div> */}
  </div>
    
    {/* CONTACT PANEL  */}
    <div className="outer" style={{margin:' 0'}}> <Contact /></div>
  {/* END CONTACT PANEL */}

  </CustomBox>
  <Install />
  </Layout>

)



export default IndexPage

