import "./styles.css";

import jeremyImg from "../images/image-jeremy.png";

const Card = ({ children }) => {
  return (
    <>
      <div className="card-profile">
        <div className="card-body">
          <div className="card-header">
            <img src={jeremyImg} alt="" />
            <p>Report for</p>
            <h2>Jeremy Robson</h2>
          </div>
          <div className="links">
            <a href="#">Daily</a>
            <a href="#">Weekly</a>
            <a href="#">Monthly</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
