import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          I help creators, businesses, and real estate agents transform their raw footage, long-form videos, or listing content into{" "}
          <span className="about-highlight">engaging, scroll-stopping short-form videos</span>{" "}
          for TikTok, Instagram Reels, and YouTube Shorts.
        </p>
        <div className="about-card">
          <p className="about-card-text">
            No complicated shoots. No wasted content. Just{" "}
            <strong>high-performing videos that get views and engagement.</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
