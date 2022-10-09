import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faTwitter,faFacebook,faInstagram,faLinkedin,faYoutube} from '@fortawesome/free-brands-svg-icons';
import {Footer,Header,GenericH2,GenericPara} from '../styles/IndexStyles';
import { Link } from "gatsby";

export default({children}) =>(
    <div>
        <Header>
            <GenericH2 none>
               <Link to="/" style={{color:'#fff'}}>
								<img src="logo.png"/>   
              </Link>
            </GenericH2>
            <div className="menu__items">
                <Link to="/works"><GenericPara lessSize lessSpacing black>Travaux</GenericPara></Link>
                <Link to="/about"><GenericPara lessSize lessSpacing black>A Propos</GenericPara></Link>
            </div>
        </Header>
        {children}
        <Footer>
            <div className="icons">
               <FontAwesomeIcon icon={faTwitter} size="2x" fixedWidth />
               <FontAwesomeIcon icon={faFacebook} size="2x" fixedWidth />
               <FontAwesomeIcon icon={faInstagram} size="2x" fixedWidth />
               <FontAwesomeIcon icon={faLinkedin} size="2x" fixedWidth />
               <FontAwesomeIcon icon={faYoutube} size="2x" fixedWidth />
            </div>
           <div className="copyright">
           <span>&copy; 2022 | IJD-GROUP </span>
           </div> 
        </Footer>
    </div>
)
