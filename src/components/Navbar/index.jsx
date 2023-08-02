import "./index.scss";
import logoImg from "../../assets/icons/logo.svg"
const Index = () => {
    return (
      <>
        <div className="navbar">
          <div className="container">
            <nav>
              <a className="logo" href="#">
                <img src={logoImg} alt="#" />
              </a>
              <ul className="nav__item">
                <li className="nav__list">
                  <a className="nav__title" href="#">
                    Home
                  </a>
                </li>
                <li className="nav__list">
                  <a className="nav__title" href="#">
                    Latest
                  </a>
                </li>
                <li className="nav__list">
                  <a className="nav__title" href="#">
                    About
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </>
    );
};

export default Index;
