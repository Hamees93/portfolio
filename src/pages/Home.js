import React, { useEffect, useRef } from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";
import "../styles/Home.css";
import AnimatedPage from "../components/AnimatedPage";
import {
  animationControls,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import { PhoneAndroidOutlined, WhatsApp } from "@material-ui/icons";

function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const animation = useAnimation();

  useEffect(() => {
    if (isInView) {
      animation.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
    }
    if (!isInView) {
      animation.start({
        x: -100,
        opacity: 0,
      });
    }
    console.log("Element is in view: ", isInView);
  }, [isInView]);

  return (
    <AnimatedPage>
      <div className="home">
        <div className="about">
          <motion.h2
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ type: "spring", bounce: 0.4, duration: 1 }}
          >
            {" "}
            Hi, I'm Hamees MJM
          </motion.h2>
          <div className="prompt">
            <p>
              A full stack developer with a passion for learning and creating.
            </p>
            <a
              href="https://www.linkedin.com/in/hamees-mjm-a38b5a129/"
              target="blank"
            >
              <LinkedInIcon />
            </a>
            <a href="https://www.facebook.com/mohamed.hamees.96" target="blank">
              <FacebookIcon />
            </a>
            <a href="https://github.com/Hamees93" target="blank">
              <GithubIcon />
            </a>
          </div>
          <a href="hamees_cv_22.pdf" className="cvButton" target="blank">
            Download CV
          </a>
        </div>
        <div className="skills">
          <h1> Skills</h1>
          <motion.ol className="list" ref={ref} animate={animation}>
            <li className="item">
              <h2> Front-End</h2>
              <span>
                ReactJS, Redux, HTML, CSS,SCSS, React Native, NPM, BootStrap,
                MaterialUI, Tailwind, Context API
              </span>
            </li>
            <li className="item">
              <h2>Back-End</h2>
              <span>Codeigniter, Laravel, MySQL, Wordpress</span>
            </li>
            <li className="item">
              <h2>Languages</h2>
              <span>JavaScript, PHP</span>
            </li>
            <li className="item">
              <h2>Tools</h2>
              <span>VS code, Photoshop, Illustrator, Git</span>
            </li>
          </motion.ol>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Home;
