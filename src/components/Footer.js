import SocialMediaLinks from "./SocialMediaLinks";
import '../style/Footer.css';
import Logo from "./Logo";
import NavButtons from "./NavButtons";

function Footer () {
  return (
    <footer>
      <div id="sec1">
        <Logo />
        <SocialMediaLinks />
        <NavButtons />
      </div>
      <div id="separator"></div>
      <p id="copyright">Copyright {new Date().getFullYear()} teo-101.github.io</p>
    </footer>
  )
}

export default Footer;