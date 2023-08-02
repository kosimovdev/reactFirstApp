import "./index.scss";
import { useState } from "react";
import postImg from "../../../assets/images/postImg.png";
import postImg2 from "../../../assets/images/postImg2.png";
import postImg3 from "../../../assets/images/postImg3.png";
import postImg4 from "../../../assets/images/postImg4.png";

const Index = () => {
  const [card, setCard] = useState([
    {
      image: postImg,
      title: "A Brief History of the FIFA World Cup Logo",
      auth: "ByClem Onojeghuo",
      description: "Graphic Design",
    },
    {
      image: postImg2,
      title:
        "Need a guide to LA’s graphic design scene? Shoplifters’ new issue has got your back",
      auth: "ByAlessandra Ortiz",
      description: "Graphic Design",
    },
    {
      image: postImg3,
      title: "Fred Rowson directs film for Years and Years",
      auth: "ByCoby Gottliebz",
      description: "Photography",
    },
    {
      image: postImg4,
      title:
        "M&C Saatchi and Fontsmith collaborate on font collection for House of St Barnabas",
      auth: "ByAnnie Lueilwitz",
      description: "Illustration",
    },
  ]);
  return (
    <>
      <section>
        <div className="container">
          <div className="line"></div>
          <div className="mainBox">
            {card.map((el, index) => (
              <div className="cardPosts">
                <img src={el.image} alt="cardImg" key={index} />
                <div className="card-body">
                  <span key={index}>{el?.description}</span>
                  <h1 key={index}>{el?.title}</h1>
                  <p key={index}>{el?.auth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
