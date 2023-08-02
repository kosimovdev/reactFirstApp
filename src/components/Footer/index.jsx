import './index.scss';
import logo from '../../assets/icons/whitelLogo.svg'

const Index = () => {
  return (
    <>
      <footer>
        <div className="container">
          <a href="#">
            <img src={logo} alt="logo" />© 2018 Noiceland™, all rights reserved
          </a>
          <div className="line2"></div>
          <div className="mainBox">
            <div className="flexBox">
              <p>Categories</p>
              <h6>Subscribe to newsletter</h6>
            </div>
            <div className="listBox">
              <div className="flexDiv">
                <a href="#">Animation</a>
                <a href="#">Interactive Design</a>
              </div>
              <div className="flexDiv">
                <a href="#">Architecture</a>
                <a href="#">Architecture</a>
              </div>
              <div className="flexDiv">
                <a href="#">Graphic Design</a>
                <a href="#">Photography</a>
              </div>
              <div className="flexDiv">
                <a href="#">Illustration</a>
                <a href="#">Product Design</a>
              </div>
              <div className="flexDiv">
                <a href="#">Animation</a>
                <a href="#">Interactive Design</a>
              </div>
              <div className="flexDiv">
                <input type="text" placeholder="Email address" />
                <button>send</button>
              </div>
            </div>
            <ul>
              <li>
                <p>Information</p>
                <a href="#">about</a>
                <a href="#">contact</a>
                <a href="#">terms</a>
              </li>
              <li>
                <p>follow us</p>
                <a href="#">instagram</a>
                <a href="#">facebook</a>
                <a href="#">twitter</a>
              </li>
              <li>
                <p>Template</p>
                <a href="#">Image License Info</a>
                <a href="#">Powered by Webflow</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Index;
