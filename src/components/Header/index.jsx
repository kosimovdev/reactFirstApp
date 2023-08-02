import "./index.scss";
import mainImg from "../../assets/images/mainImg.jpg";

const index = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="mainBox">
            <div className="leftBox">
              <img src={mainImg} alt="mainImg" />
            </div>
            <div className="rightBox">
              <span>Illustration</span>
              <h1>
                Japan House opens in mountainside to foster peak creativity.
              </h1>
              <p>
                Enim omittam qui id, ex quo atqui dictas complectitur. Nec ad
                timeam accusata, hinc justo falli id eum, ferri novum molestie
                eos cu.
              </p>
              <strong>By Reta Torphy</strong>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default index;
