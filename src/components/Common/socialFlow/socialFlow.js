import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./socialFlow.css"
import {
  faFacebook,
  faTwitter,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

export  default function SocialFlow (){
     return(
        <div>
        <p className="social-container">
        <a
          href="https://www.facebook.com/learnbuildteach/"
          className="facebook social"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        
        <a 
           href="https://wwww.twitter.com" 
           className="twitter social"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>

        <a 
           href="https://wwww.twitter.com"
           className="whatsapp social"
        >
           <FontAwesomeIcon icon={faWhatsapp} size="2x"/>
        </a>
      </p>
    </div>
  );
}

  