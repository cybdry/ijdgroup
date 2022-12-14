import styled from "styled-components";

const Banner=styled.div`
    &:after{
        content: "";
        display: flex;
				flex-direction:column;
        height: ${props => (props.parallax ? "80vh" : "100vh")}; 
        width: 100%;
        background-image: ${props => (props.different ? "url('crop-architect-opening-blueprint.jpg')" :
        "url('beautiful.jpg')")};
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        background-attachment: ${props => (props.parallax ? "fixed" : "scroll")};
        filter: grayscale(80%) blur(1px);
    }
`;
const TextWrapper=styled.div`
    position: absolute;
    z-index: 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    div {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
     }
     h2 {
        font-size: 5rem;
        opacity: 1;
        padding: 0.35em 1em;
        border-top: 2px solid white;
        border-bottom: 2px solid white;
        text-transform: uppercase;
        margin: 0;
     }
     
    a {
   background-color: #21b2a6;
   box-shadow: none;
   color: #ffffff;
   border-radius: 3px;
   border: 0;
   cursor: pointer;
   font-size: 1.5rem;
   font-weight: 600;
   letter-spacing: 0.225em;
   padding: 1.8rem 0.8rem;
   text-align: center;
   text-decoration: none;
   text-transform: uppercase;
    }


`;

const MoreText=styled.div`
    position: absolute;
    color: #ffffff;
    text-transform:uppercase;
    text-align: center; 
    letter-spacing: 0.225em;
    font-weight: 600;
    font-size: 1.2rem;
    z-index: 1;
    left: 50%;
    bottom: 10%;
    transform: translate(-50%, -50%);
    &:after {
        content: "";
        display: block;
        height: 2rem;
        width: 2rem;
        left: 50%;
        position: absolute;
        margin: 1em 0 0 -0.75em;
        background-image: url("arrow.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
     }
`;

const Mission=styled.div`
background-color:#ffffff;
text-align: center;
padding: 10rem 0;
div {
   width: 66%;
   margin: 0 auto;
}


h5 {
   font-size: 1.4rem;
   line-height: 2rem;
   color: #ffffff;
   border-bottom: 2px solid #1d9c91;
   font-weight: 800;
   letter-spacing: 0.225em; 
   padding-bottom: 0.5rem;
   margin-bottom: 5rem;
}
`

const SectionThree=styled.section` 
    background-color: ${props => (props.white ? "#ffffff" : " #1d242a")};
    color: #ffffff;
`
const FlexBoxIndex=styled.div`
    display: flex;
    .image {
        width: ${props => (props.inverse ? "60%" : "40%")};
    }
    img {
        width: 100%;
    }
    .text_section3 {
        width: ${props => (props.inverse ? "40%" : "60%")};
        display: flex;
        padding-left:10px;
        padding-right:10px;
        justify-content: center; 
        align-items: center;
        flex-direction: column;
				background-color:#ffffff;
    }
    
    p {
        
        color: #000000;
        text-align: left;
        font-size: 1.5rem;
}
`
const GenericPara=styled.p`
    text-align: left;
    letter-spacing: ${props => (props.lessSpacing ? "0.075em" : "0.225em")};
    font-size: ${props => (props.lessSize ? "1.5rem" : "2.5rem")};
    line-height: ${props => (props.lessSize ? "2rem" : "3rem")};
    color: ${props => (props.grey ? "#c8ece9": props.black ? "#000000 ": "#ffffff")};
    background-color:${props => (props.active ? "rgb(242, 242, 242,0.5)":"none")};
    padding:20px;
    border-radius:50px;
    /*text-transform: uppercase;*/
    p {
        text-transform: uppercase;
        text-align:center;
        letter-spacing: 0.225em;
        font-size: 2.5rem;
    }
`

const GenericH2 =styled.h2`
font-size: 3rem;
padding: ${props => (props.none ? "0" : "1.35em 0")};
color: #000000;
border-bottom: ${props => (props.none ? "0" : "2px solid #1d9c91")};
text-transform: uppercase;
letter-spacing: 0.6rem;
margin: ${props => (props.some ? "5rem 0 0 0" : "0")};
`
const FormFive = styled.div`
position: absolute;
z-index: 1;
width: 80%;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
color: white;
form > .fields {
   display: grid;
   grid-template-columns: 1fr;
   grid-gap: 1rem;
}
input[type="text"],
input[type="email"],
textarea {
    appearance: none;
    font-size: 2rem;
    background-color: #ffffff;
    border-radius: 3px;
    border: none;
 }
 input[type="text"],
 input[type="email"] {
    height: 2.75em;
    padding: 0.75em 1em;
 }
 textarea {
    padding: 0.75em 1em;
 }
 .button__primary {
    background-color:#21b2a6;
    box-shadow: none;
    color: #ffffff;
    border-radius: 3px;
    border: 0;
    cursor: pointer;
    font-size: 1.5rem;
    font-weight: 600;
    letter-spacing: 0.225em;
    padding: 1.8rem 0.8rem;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
 }
 `;

const Footer = styled.footer`
padding: 6em 0 4em 0;
background-color: #1d242a;
text-align: center;
.icons > * {
   cursor: pointer;
   margin-right: 1rem;
   color: rgba(255, 255, 255, 0.5);
}
.copyright {
   color: rgba(255, 255, 255, 0.5);
   font-size: 1.2rem;
   letter-spacing: 0.225em;
   padding: 0;
   text-transform: uppercase;
   margin-top: 1rem;
}
`

const Header = styled.header`
display: flex;
justify-content: space-between;
align-items: center;
width: 100%;
height: 80px;
background-color:#ffffff;
color: #ffffff;
padding: 3rem 0;
margin-bottom:50px;
z-index: 1000;
position: fixed;
top:0;
left:0;
.menu__items {
   display: flex;
}
.menu__items > * {
    margin-right: 1rem;
 }
 img{
    height:83px;
    width:100px;
    padding-bottom:0;

 }
 @media only screen and(max-width:600px){
 margin-bottom:50px;
 }
 `
 const Works = styled.div`
 background-color: #ffffff;
 color: #4e4852;
 padding: 2em 0 1em 0 !important;
 .gallery__flex {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 20px;
    justify-items: center;
 }
 `
 const GenericH3 = styled.h3`
 font-size: 3rem;
 padding: ${props => (props.none ? "0" : "1.35em 0")};
 color: ${props => (props.dark ? "#4E4852" : "#ffffff")};
 border-bottom: ${props => (props.none ? "0" : "2px solid #1d9c91")};
 text-transform: uppercase;
 letter-spacing: 0.6rem;
 margin: 0;
 `
const GenereicParaAbout = styled.p`
  text-transform: uppercase;
  text-align: center;
  letter-spacing: ${props => (props.lessSpacing ? "0.075em" : "0.225em")};
  font-size: ${props => (props.lessSize ? "1.5rem" : "2.5rem")};
  line-height: ${props => (props.lessSize ? "2rem" : "3rem")};
  color: ${props => (props.grey ? "#4E4852" : "#ffffff")};
`

export{
	Banner,
	TextWrapper,
	MoreText,
	Mission,
	SectionThree,
	FlexBoxIndex,
	GenericPara,
	GenericH2,
	FormFive,
	Footer,
	Header,
	Works,
	GenericH3,
	GenereicParaAbout}
