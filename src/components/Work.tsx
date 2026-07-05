import "./styles/Work.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    // Clean up (optional, good practice)
    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div>
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <h2>
            My <span>Work</span>
          </h2>
          <div className="work-flex">
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>01</h3>
                  <div>
                    <h4>Virtually Staged Listing</h4>
                    <p>Real Estate</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Images to Video, Virtual Staging, Smooth Transitions, Captions</p>
              </div>
              <div className="work-image">
                <div className="work-image-in" style={{ height: "450px", aspectRatio: "9/16", width: "auto", minHeight: "auto" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1206750157?badge=0&autopause=1&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&quality_selector=1&quality=2k&title=0&byline=0&portrait=0"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    title="video_1_virtually_staged"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>02</h3>
                  <div>
                    <h4>Image to Video Listing</h4>
                    <p>Real Estate</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Images to Video, Virtual Staging, Smooth Transitions, Captions</p>
              </div>
              <div className="work-image">
                <div className="work-image-in" style={{ height: "450px", aspectRatio: "9/16", width: "auto", minHeight: "auto" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1203833414?badge=0&autopause=1&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&quality_selector=1&quality=2k&title=0&byline=0&portrait=0"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    title="Image to Video Listing"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>03</h3>
                  <div>
                    <h4>Talking Head</h4>
                    <p>Video Editing</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Motion Graphics, Typography, Captions, Color Grading</p>
              </div>
              <div className="work-image">
                <div className="work-image-in" style={{ height: "450px", aspectRatio: "9/16", width: "auto", minHeight: "auto" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1207065825?badge=0&autopause=1&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&quality_selector=1&quality=2k&title=0&byline=0&portrait=0"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    title="Viral Realtors"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>04</h3>
                  <div>
                    <h4>Podcast Clip</h4>
                    <p>Video Editing</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Typography, B-Rolls, Motion Cuts, Captions</p>
              </div>
              <div className="work-image">
                <div className="work-image-in" style={{ height: "450px", aspectRatio: "9/16", width: "auto", minHeight: "auto" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1204166396?badge=0&autopause=1&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&quality_selector=1&quality=2k&title=0&byline=0&portrait=0"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    title="Podcast Clip"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>05</h3>
                  <div>
                    <h4>Cinematic Luxury Listing</h4>
                    <p>Real Estate</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Voiceover, Cinematic Edits, Color Grading, Smooth Transitions</p>
              </div>
              <div className="work-image">
                <div className="work-image-in" style={{ height: "450px", aspectRatio: "9/16", width: "auto", minHeight: "auto" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1204169450?badge=0&autopause=1&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&quality_selector=1&quality=2k&title=0&byline=0&portrait=0"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    title="Cinematic Luxury Listing"
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="work-box">
              <div className="work-info">
                <div className="work-title">
                  <h3>06</h3>
                  <div>
                    <h4>Podcast Clip 2</h4>
                    <p>Video Editing</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>Typography, B-Rolls, Motion Cuts, Captions</p>
              </div>
              <div className="work-image">
                <div className="work-image-in" style={{ height: "450px", aspectRatio: "9/16", width: "auto", minHeight: "auto" }}>
                  <iframe
                    src="https://player.vimeo.com/video/1204172473?badge=0&autopause=1&player_id=0&app_id=58479&autoplay=1&loop=1&muted=1&quality_selector=1&quality=2k&title=0&byline=0&portrait=0"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                    title="Podcast Clip"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
