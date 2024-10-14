import '../style/Hero.css';
import SocialMediaLinks from './SocialMediaLinks';
import Logo from './Logo'

function Hero() {
  return(
    <div id="hero">
      <div id="title">
        <section>
          <div>
            <p>create with passion</p>
            <h1>Design & Develop<br></br>Applications</h1>
            <p>tailored to all your needs and desires</p>
            <section id="socialMediaContainer">
              <a className="socialMediaLinks" href="https://github.com/teo-101" title="Github"><img alt="Github" src="github.png"></img></a>
              <a className="socialMediaLinks" href="https://www.instagram.com/teoiacob_/" title="Instagram"><img alt="Instagram" src="instagram.png"></img></a>
              <a className="socialMediaLinks" href="" title="Linkten (Coming Soon)"><img alt="Linkten" src="linkedin.png"></img></a>
            </section>
          </div>
        </section>

        <section>
          <Logo style="scale: 1.25!important;" />
        </section>
      </div>
    </div>
  );
}

export default Hero;