import "./styles/Feedback.css";
import Marquee from "react-fast-marquee";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  tag: string;
  stat: string;
  avatar: string;
}

const testimonialsRow1: Testimonial[] = [
  {
    id: 1,
    name: "David Sterling",
    role: "Luxury Real Estate Broker",
    quote:
      "The virtually staged video listing was a game changer for our vacant $1.8M property. The transitions between empty rooms and furnished designs blew our seller away. Sold in just 8 days!",
    tag: "Virtual Staging",
    stat: "140K+ Views",
    avatar: "DS",
  },
  {
    id: 2,
    name: "Sarah Jenkins",
    role: "Real Estate Agent, Compass",
    quote:
      "Abdul Nafay knows exactly how to hook the viewer! Our image-to-video listing reels have 3x more engagement than standard photo slideshows. Best investment for our team's brand.",
    tag: "Image to Video",
    stat: "3x Engagement",
    avatar: "SJ",
  },
  {
    id: 3,
    name: "Marcus Vance",
    role: "Top Producer, EXP Realty",
    quote:
      "Cinematic color grading and smooth transitions give our luxury property tours a Netflix-level feel. Clients constantly ask who does our video marketing. Absolutely unmatched quality!",
    tag: "Cinematic Listing",
    stat: "$3.2M Sold",
    avatar: "MV",
  },
  {
    id: 4,
    name: "Elena Rostova",
    role: "Real Estate & Finance Creator",
    quote:
      "My talking head videos went from boring static shots to dynamic, scroll-stopping reels with clean motion graphics and typography. My follower count doubled in two months!",
    tag: "Talking Head",
    stat: "+50K Followers",
    avatar: "ER",
  },
];

const testimonialsRow2: Testimonial[] = [
  {
    id: 5,
    name: "James Thornton",
    role: "Host, RE Insider Podcast",
    quote:
      "We send raw 2-hour podcast recordings and get back viral shorts with engaging B-roll and punchy captions. The attention to detail and turnaround speed is incredible.",
    tag: "Podcast Clips",
    stat: "500K+ Reach",
    avatar: "JT",
  },
  {
    id: 6,
    name: "Chloe Bennett",
    role: "Boutique Brokerage Owner",
    quote:
      "Finding a video editor who actually understands real estate marketing and pacing is rare. Abdul Nafay doesn't just edit; he creates high-converting assets that win listing presentations!",
    tag: "RE Marketing",
    stat: "100% Win Rate",
    avatar: "CB",
  },
  {
    id: 7,
    name: "Michael Chang",
    role: "Commercial Broker",
    quote:
      "Transforming our vacant commercial spaces into vibrant, animated concepts helped prospective tenants visualize the layout immediately. Leased out our entire floor in a record 14 days!",
    tag: "Virtual Staging",
    stat: "Leased in 14 Days",
    avatar: "MC",
  },
  {
    id: 8,
    name: "Jessica Morales",
    role: "Luxury Property Specialist",
    quote:
      "The cinematic pacing and voiceover integration elevated our waterfront listing to another level. Generated over 200k organic views across Instagram and YouTube within a week.",
    tag: "Cinematic Listing",
    stat: "200K+ Views",
    avatar: "JM",
  },
];

const Feedback = () => {
  return (
    <div className="feedback-section section-container" id="feedback">
      <h2>
        What <span>Clients Say</span>
      </h2>
      <p className="feedback-subtitle">
        Trusted by top-producing real estate agents, brokers, and content creators to deliver scroll-stopping, high-converting video content.
      </p>

      {/* Trust / Metrics Ribbon */}
      <div className="feedback-metrics">
        <div className="metric-item">
          <div className="metric-icon">⭐</div>
          <div className="metric-text">
            <h4>5.0 / 5.0</h4>
            <p>Average Client Rating</p>
          </div>
        </div>
        <div className="metric-divider"></div>
        <div className="metric-item">
          <div className="metric-icon">📈</div>
          <div className="metric-text">
            <h4>50M+</h4>
            <p>Organic Views Generated</p>
          </div>
        </div>
        <div className="metric-divider"></div>
        <div className="metric-item">
          <div className="metric-icon">🤝</div>
          <div className="metric-text">
            <h4>100+</h4>
            <p>Agents & Creators Served</p>
          </div>
        </div>
        <div className="metric-divider"></div>
        <div className="metric-item">
          <div className="metric-icon">⚡</div>
          <div className="metric-text">
            <h4>24-48 Hours</h4>
            <p>Average Turnaround Speed</p>
          </div>
        </div>
      </div>

      {/* Infinite Scrolling Testimonial Marquees */}
      <div className="feedback-marquee-wrapper">
        <Marquee pauseOnHover={true} speed={35} gradient={false}>
          {testimonialsRow1.map((item) => (
            <div className="feedback-card" key={item.id}>
              <div className="card-top">
                <div className="stars">★★★★★</div>
                <span className="project-tag">{item.tag}</span>
              </div>
              <p className="quote-text">"{item.quote}"</p>
              <div className="card-footer">
                <div className="client-info">
                  <div className="client-avatar">{item.avatar}</div>
                  <div className="client-details">
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
                <span className="client-stat">{item.stat}</span>
              </div>
            </div>
          ))}
        </Marquee>

        <Marquee pauseOnHover={true} speed={35} direction="right" gradient={false}>
          {testimonialsRow2.map((item) => (
            <div className="feedback-card" key={item.id}>
              <div className="card-top">
                <div className="stars">★★★★★</div>
                <span className="project-tag">{item.tag}</span>
              </div>
              <p className="quote-text">"{item.quote}"</p>
              <div className="card-footer">
                <div className="client-info">
                  <div className="client-avatar">{item.avatar}</div>
                  <div className="client-details">
                    <h4>{item.name}</h4>
                    <p>{item.role}</p>
                  </div>
                </div>
                <span className="client-stat">{item.stat}</span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Feedback;
