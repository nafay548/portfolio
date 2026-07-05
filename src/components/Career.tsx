import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My <span>Experience</span>
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Video Editor</h4>
                <h5>NSOL BPO</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              • Edit and produce high-quality videos for social media, ads, and marketing campaigns<br />
              • Work with U.S.-based clients including real estate agents, business coaches, and content creators<br />
              • Handle multiple content formats including talking head videos, short-form reels, and promotional content<br />
              • Apply advanced editing techniques such as speed ramping, motion cuts, and AI-assisted workflows<br />
              • Manage multiple projects while meeting tight deadlines
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Video Editor & Content Creator</h4>
                <h5>Freelance</h5>
              </div>
              <h3>2022</h3>
            </div>
            <p>
              • Edited long-form videos into high-performing short-form content using CapCut Pro and AI tools<br />
              • Created engaging talking head videos, reels, and social media ads with strong hooks and retention strategies<br />
              • Specialized in color correction, grading, audio syncing, and background noise reduction<br />
              • Worked across multiple niches including coaches, real estate agents, and digital brands<br />
              • Managed Instagram, TikTok, and Facebook pages targeting U.S. audiences<br />
              • Applied viral content research strategies to improve reach, engagement, and watch time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
