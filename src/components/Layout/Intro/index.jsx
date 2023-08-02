import "./index.scss";
import { useState } from "react";
import cardImg from "../../../assets/images/cardImg.png";
import cardImg2 from "../../../assets/images/cardImg2.png";
import cardImg3 from "../../../assets/images/cardImg3.png";
import cardImg4 from "../../../assets/images/cardImg4.png";
import cardImg5 from "../../../assets/images/cardImg5.png";
import cardImg6 from "../../../assets/images/cardImg6.png";
const Index = () => {
  
  const [card, setCard] = useState(
    [
    {
      image: cardImg,
      title: "Helmut Lang celebrates taxi drivers worldwide in latest campaign",
      auth: "ByAlessandra Ortiz",
      description: "Photography",
    },
    {
      image: cardImg2,
      title:
        "Bowlcut launch a new summer collection that pays homage to “UK legends”",
      auth: "ByRosanna Ondricka",
      description: "Photography",
    },
    {
      image: cardImg3,
      title:
        "Thousands of previously unseen photographs by Andy Warhol will be made public this Autumn",
      auth: "ByAnnie Lueilwitz",
      description: "Photography",
    },
    {
      image: cardImg4,
      title: "London-based Yinka Ilori’s storytelling furniture",
      auth: "ByAnnie Lueilwitz",
      description: "Interactive Design",
    },
    {
      image: cardImg5,
      title:
        "Anonymous Israeli art collective Broken Fingaz direct music video for U2 and Beck",
      auth: "BySimeon Brekke",
      description: "Graphic Design",
    },
    {
      image: cardImg6,
      title:
        "Suzanne Saroff’s meticulously arranged photographs alter perceptions",
      auth: "ByReta Torphy",
      description: "Architecture",
    },
  ]
  )

  return (
    <>
      <section>
        <div className="container">
          <div className="mainBox">
            {card.map((el, index) => (
              <div className="card">
                <img src={el.image} alt="cardImg" key={index} />
                <div className="card-body">
                  <span key={index}>{el?.description}</span>
                  <h1 key={index}>{el?.title}</h1>
                  <p key={index}>{el?.auth}</p>
                </div>
              </div>
            ))}
            <div className="line"></div>
            {card.map((el, index) => (
              <div className="card">
                <img src={el.image} alt="cardImg" key={index} />
                <div className="card-body">
                  <span key={index}>{el?.description}</span>
                  <h1 key={index}>{el?.title}</h1>
                  <p key={index}>{el?.auth}</p>
                </div>
              </div>
            ))}
            <button className="btnIntro">view all latest posts</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
