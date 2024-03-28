import "./TopSection.css";
import Arrow from "./assets/Arrow.png"

export const TopSection = () => {
  return (
    <div className="TopSection-wrapper">
      <div className="intro">
        <h3>Hi, I'm Ida Sabic</h3>
        <h1>Web Developer</h1>
        <div className="imgtext">
        <img src="src\Components\TopSection\monkey.jpeg" alt="profile-img" className="ProfileImg" />
        <p> blablablablablabla somethingsomething.</p>
        </div>
      </div>
      <div id="arrow-container">
      <img src={Arrow} alt="arrow-icon" className="ArrowIcon" /></div>
      </div>
      
  );
};
