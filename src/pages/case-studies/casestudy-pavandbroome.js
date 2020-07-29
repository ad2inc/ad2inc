import React from 'react'
// import Navbar from '../../components/Navbar'
import Layout from '../../components/Layout'
// import Footer from '../../components/Footer'
import { graphql, useStaticQuery } from 'gatsby'
// import { Link } from 'gatsby'
// import ScrollAnimation from 'react-animate-on-scroll'
// import Image from '../../components/Image'
import styled from "styled-components"
import CaseMenu from '../../components/CaseMenu'
// import { FiZoomIn } from 'react-icons/fi'



import Gallery from '../../components/Gallery'


const CustomBox = styled.div`

#casestudies {
  background: #da071c ;
}

// .intro:before{
// 	content: "Ad2 Portfolio";
// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// font-size:480%; color:#f8f8fc; text-shadow: 12px 7px 15px  #000 ;
// }

// .intro:after{
//   content: "logo";
// position:absolute;
// display: flex;
// align-items: center;
// justify-content: center;
// }

.container2 {
	overflow-y: scroll;
  // scroll-snap-type: y mandatory;
  // height:100vh;
}

section {
	scroll-snap-align: start;
  border-bottom:0px solid red !important;
 
  // height:100vh;
}

.slider1{
  position:fixed; 
  top:0;
  width:100vw;
  height:100vh;
  display:block;
  background-size:cover;
  min-height:100vh;
}


@media (hover: hover) {
.gatsby-image-wrapper{transform: scale(1.25);}

.gatsby-image-wrapper{transform: scale(1.25);}

	.gatsby-image-wrapper:after{
	content: "+ click to zoom";
	position:absolute; bottom:10px; right:10px;
	color:#fff;
	}
}

`



const CaseStudy1 = graphql`
  query CaseStudy1 {
    allFile(filter: { relativeDirectory: { eq: "case1" } }) {
      edges {
        node {
          childImageSharp {
            original {
              width
              height
            }
            fluid {
              ...GatsbyImageSharpFluid
              originalName
              originalImg
            }
          }
        }
      }
    }
  }
`

const CaseStudy_1 = () => {
  const data = useStaticQuery(CaseStudy1)
  return (
	  <CustomBox>
    <Layout>


    {/* <div className="zoomer" style={{display:'flex', alignItems:'center', justifyContent:'center', position:'relative', zIndex:'1', marginTop:'85px'}}>
      <h4 style={{display:'', color:'#fff', fontSize:'100%', textAlign:'center', backgroundColor:'#222', padding:'5px 10px', borderRadius:'10px', border:'1px solid #999', position:'fixed', bottom:'5vh', opacity:'.9',}}><FiZoomIn style={{fontSize:'150%', position:'relative', top:'0px', left:'-4px',}} />Click To Zoom</h4>
      </div> */}



      
     
      
  




 
      
 

  
<div className="container2" style={{position:'', top:'', height:'', display:''}}>

{/* <Navbar /> */}


	
    <div style={{marginTop:'80px'}}><CaseMenu /></div>


<section className="child" style={{position:'', height:'', overflow:'hiden'}}>

<h1 style={{textAlign:'center', borderBottom:'1px dashed', margin:'1rem 20vw 3rem 20vw'}}>Ad2 Case Study - Pav &amp; Broome</h1>

<div className="" style={{display:'flex', justifyContent:'space-around', alignItems:'', alignContent:'', verticalAlign:'top', flexWrap:'wrap',  width:'', margin:'0 auto', padding:'0 5vw', borderRadius:'', overflow:'',}}>

  
<div className="half" style={{width:'', margin:'0', padding:'', order:'1', verticalAlign:'top', alignContent:'top',}}>
<h2>Client:</h2><p style={{margin:'0', padding:'', fontSize:'', fontWeight:'bold'}}>Pav &amp; Broome Fine Jewelry </p>
<p><a href="https://pavandbroome.com">https://pavandbroome.com</a></p>
</div>


<div className="half" style={{border:'0px solid #fff', position:'relative', margin:'0 0 0 0', borderRadius:'0', width:'', padding:'0 2rem', overflow:'', order:'2', verticalAlign:'top', alignContent:'top',}}>
<h2>Objective:</h2>
<p>Overcome the perception that Pav &amp; Broome Diamond Jewelers had closed or gone out of business and increase first-quarter sales by 10% with no increase in the current budget.</p>
</div>


</div>{/* END SPLIT */}



<div style={{maxHeight:'40vh', overflow:'hidden'}}><Gallery
        photos={data.allFile.edges}
      /></div>
      
<div className="outer">
  <div className="container">


  
 



  
{/* <h2>Objective:</h2>
<p>Several pediatricians staffed at The Pediatric Center at Garden Park Medical Center left the Center to open their own clinics, taking many of their patients with them. Ad2 was hired to introduce the new pediatricians and replenish the customer base.</p> */}

<h2>Directive:</h2>
<p>In order to accurately pinpoint the perception by Pav &amp; Broome’s customer base, Ad2 developed a direct mail survey, which included an offer as an incentive for a high rate of response. The survey was mailed out to more than 3,000 customers with a response rate of more than 3%. This gave us a great sampling of the market and provided us with tons of useful information for the marketing plan.</p>

<p>The first step was to shift the existing advertising budget to minimize costs and maximize results. We budgeted for a :60 television commercial, which would then be spliced into :30’s, :15’s and :10’s and later used for holiday and general marketing spots.</p>

<p>The TV spot was meant to tell the story of Pav &amp; Broome Diamond Jewelers and their 30-year history. It was a warm spot that families could relate to and remember why they trusted the local jewelers.</p>



<h2>Accomplishments:</h2>
<p>The shift in the existing advertising budget increased the reach of their target market from 47% to 78.4% and increased first-quarter sales by 11.4%.  The television spot created just the kind of emotion we were hoping to stir with people “coming in that hadn’t been in in a while” and some even admitting the commercial “brought a tear to [their] eyes”. We were once again able to maximize their advertising dollars by using the footage shot for this commercial in other later spots.</p>

</div>

<div className="outer">
<div className="container" style={{padding:'2rem 10vw', textAlign:'center', background:'', }}>
  <h3>Ad2 Spotlight</h3>
  <iframe title="Pav &amp; Broome Commercial" width="100%" height="300" src="https://www.youtube.com/embed/gqR2lzlurKI?controls=1" frameorder="0" style={{border:'4px solid red', padding:'6px', borderRadius:'12px'}}></iframe>
  </div></div>
  
</div>





{/* <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} delay={0} offset={0} style={{zIndex:'-5', position:'', top:'0', backgroundColor:'light pink'}}>    

<Image className="slider1" alt="Todd Stars" filename="ad2-home-banner.jpg" />
</ScrollAnimation> */}
  </section>
{/* END Panel 1 */}




  {/* <section className="child" style={{position:'', height:'100vh'}}>
  <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} animatePreScroll={false} delay={0} style={{zIndex:'-4', position:'', top:'0'}}>

</ScrollAnimation>
</section> */}
{/* END Panel 2 */}



  {/* <section className="child" style={{position:'', height:'100vh'}}>
 <ScrollAnimation animateIn="fadeIn" animateOut="fadeOut" animateOnce={false} animatePreScroll={false} delay={0} style={{zIndex:'-3', position:'', top:'0'}}>

</ScrollAnimation>
</section> */}
{/* END Panel 3 */}





{/* CONTACT PANEL  */}
   {/* <div className="outer"> <Contact /></div> */}
{/* END CONTACT PANEL */}
{/* <div className="spacer33"></div> */}



{/* <div className="spacer99"></div>
<div className="spacer66"></div> */}





{/* <Footer /> */}
</div>





    

      
       

<CaseMenu />
      
      
    </Layout>
    </CustomBox>  
    )
}

export default CaseStudy_1
