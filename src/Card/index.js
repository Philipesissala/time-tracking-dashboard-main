import "./styles.css";

import selfcareImg from "../images/icon-self-care.svg";
import ellipsisImg from "../images/icon-ellipsis.svg";

const Card = ({ title, current, previous, img, color }) => {
  return (
    <>
      <div className="card">
        <div className="card-header" style={{ backgroundColor: color }}>
          <img src={img} alt="" />
        </div>
        <div className="card-body">
          <div className="activities">
            <h2>{title}</h2>
            <img src={ellipsisImg} alt="" />
          </div>
          <div className="time">
            <h2>{current}</h2>
            <p>Last Week - {previous}hrs</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
