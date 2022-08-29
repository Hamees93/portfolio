import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import AnimatedPage from "../components/AnimatedPage";
import { motion } from "framer-motion";

function Home() {
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
              A software developer with a passion for learning and creating.
            </p>
            <LinkedInIcon />
            <EmailIcon />
            <GithubIcon />
          </div>
        </div>
        <div className="skills">
          <h1> Skills</h1>
          <ol className="list">
            <li className="item">
              <h2> Front-End</h2>
              <span>
                ReactJS, Redux, HTML, CSS, React Native, NPM, BootStrap,
                MaterialUI, StyledComponents, Context API, SCSS
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
              <span>VS code, Photoshop, Illustrator</span>
            </li>
          </ol>
        </div>
      </div>
    </AnimatedPage>
  );
}

export default Home;