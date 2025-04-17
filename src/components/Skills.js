import React, { useState, useEffect } from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";

import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const skillData = [
    { name: "HTML", value: 100, speed: 0.25 },
    { name: "CSS", value: 95, speed: 0.3 },
    { name: "Bootstrap", value: 95, speed: 0.3 },
    { name: "Tailwind CSS", value: 90, speed: 0.2 },
    { name: "JavaScript", value: 85, speed: 0.1 },
    { name: "jQuery", value: 85, speed: 1 },
    { name: "React", value: 60, speed: 4 },
    { name: "PHP", value: 75, speed: 3 },
    { name: "WordPress", value: 80, speed: 0.1 },
    { name: "Figma", value: 90, speed: 0.2 },
    { name: "Photoshop", value: 85, speed: 0.1 },
    { name: "VS code", value: 100, speed: 0.25 }
  ];

  const [progressValues, setProgressValues] = useState(skillData.map(() => 0));
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      const intervals = skillData.map((skill, index) =>
        setInterval(() => {
          setProgressValues(prev =>
            prev.map((val, i) =>
              i === index
                ? val < skill.value
                  ? val + 1
                  : val
                : val
            )
          );
        }, skill.speed)
      );

      return () => intervals.forEach(clearInterval);
    }
  }, [inView]);

  return (
    <section className="skill" id="skills" ref={ref}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills and Tools</h2>
              <p>These are the tools and technologies I use to bring ideas to life. Each skill <br/>represents my dedication to creating efficient, scalable, and visually appealing solutions.</p>
              <Carousel
                responsive={responsive}
                infinite={true} // Enable looping
                autoPlay={true} // Enable auto sliding
                autoPlaySpeed={3000} // Set speed of auto sliding (in milliseconds)
                className="owl-carousel owl-theme skill-slider"
                keyBoardControl={true}
              >
                {skillData.map((skill, index) => (
                  <div className="item" key={index} style={{ width: "200px", margin: "0 auto", textAlign: "center" }}>
                    <CircularProgressbar
                      value={progressValues[index]}
                      text={`${progressValues[index]}%`}
                      styles={buildStyles({
                        textColor: "#fff",
                        pathColor: "url(#gradient)",
                        trailColor: "#2e2e2e"
                      })}
                    />
                    <h5 style={{ marginTop: "20px", color: "#fff" }}>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>

              {/* Gradient Definition */}
              <svg style={{ height: 0 }}>
                <defs>
                  <linearGradient id="gradient" gradientTransform="rotate(90)">
                    <stop offset="0%" stopColor="#cf2eeb" />
                    <stop offset="100%" stopColor="#5753e4" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
