import { ReactComponent as FacebookIcon } from "../../Assets/icons/facebook-outline.svg";
import { ReactComponent as TwitterIcon } from "../../Assets/icons/twitter-outline.svg";
import "./footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-links">
        <span>
          <a href="">Newsletter</a>
          <a href="">Contact</a>
          <a href="">Press Room</a>
        </span>
        <span>
          <FacebookIcon className="icon" fill="white" />
          <TwitterIcon className="icon" fill="white" />
        </span>
      </div>
      <hr />
      <address className="Footer-contactDetails">
        <p>ART GALLERY</p>
        <p>38-40 Southwark Streey</p>
        <p>London SE1 1UN</p>
        <a href="tel:+44 20 74905337">Telephone +44 20 74905337</a>
      </address>
      <hr />
      <p>&#169; 2022 EC1 GALLERY</p>
    </footer>
  );
};

export default Footer;
