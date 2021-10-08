import Card from "./Card/index";
import Profile from "./Profile/index";
import "./global.css";

import exerciseImg from "./images/icon-exercise.svg";
import playImg from "./images/icon-play.svg";
import selfCare from "./images/icon-self-care.svg";
import socialImg from "./images/icon-social.svg";
import studyImg from "./images/icon-study.svg";
import workImg from "./images/icon-work.svg";

function App() {
  return (
    <div className="App">
      <div className="wrapper-profile">
        <Profile />
      </div>
      <div className="wrapper-cards">
      <Card
        title="Work"
        current="32"
        previous="36"
        img={workImg}
        color={"hsl(15, 100%, 70%)"}
      />
      <Card
        title="Play"
        current="32"
        previous="36"
        img={playImg}
        color={"hsl(195, 74%, 62%)"}
      />
      <Card
        title="Study"
        current="32"
        previous="36"
        img={studyImg}
        color={"hsl(348, 100%, 68%)"}
      />
      <Card
        title="Exercise"
        current="32"
        previous="36"
        img={exerciseImg}
        color={"hsl(145, 58%, 55%)"}
      />
      <Card
        title="Social"
        current="32"
        previous="36"
        img={socialImg}
        color={"hsl(264, 64%, 52%)"}
      />
      <Card
        title="Self Care"
        current="32"
        previous="36"
        img={selfCare}
        color={"hsl(43, 84%, 65%)"}
      />
      </div>
    </div>
  );
}

export default App;
