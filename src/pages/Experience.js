import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import CheckIcon from "@material-ui/icons/Check";

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor="#3e497a">
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2010 - 2012"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Km/Km/Al-manar central college, Maruthamunai
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Advanced Level</h4>
          <p> Physics-B, Combined Maths-C, Chemistry-C</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          date="2015 - 2019"
          iconStyle={{ background: "#3e497a", color: "#fff" }}
          icon={<SchoolIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Sabaragamuwa University of Sri Lanka, Belihuloya.
          </h3>

          <h4 className="vertical-timeline-element-subtitle">
            Bachelor's Degree (Special)
          </h4>

          <p> Computing & Information Systems</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019 - 2022"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer - Cyber Actions
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Maruthamunai, Sri Lanka
          </h4>
          <p>Developed the frontend & backend infrastructure for projects.</p>
          <p style={{ fontWeight: 400 }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li style={{ display: "flex", alignItems: "start" }}>
                <CheckIcon style={{ marginRight: 5 }} />
                Crypto Currency Related Financial Investment Website.
              </li>
              <li style={{ display: "flex", alignItems: "start" }}>
                <CheckIcon style={{ marginRight: 5 }} />
                Wordpress Based Ecommerce Website.
              </li>
              <li style={{ display: "flex", alignItems: "start" }}>
                <CheckIcon style={{ marginRight: 5 }} />
                Worked with API s to integrate payment gateway for Perfect Money
                and USDT digital currencies.
              </li>
            </ul>
          </p>
          <p>
            <span style={{ fontWeight: "normal" }}>Used Technologies:</span>
            <br />
            PHP, HTML, CSS, JavaScript, JQuery, Ajax, Bootstrap, MySQL,
            WordPress
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Full Stack Engineer - Alpha Health Group
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Maruthamunai, Sri Lanka
          </h4>
          <p>Developed the frontend & backend infrastructure for projects.</p>
          <p style={{ fontWeight: 400 }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li style={{ display: "flex", alignItems: "start" }}>
                <CheckIcon style={{ marginRight: 5 }} />
                Career Portal Website.
              </li>
              <li style={{ display: "flex", alignItems: "start" }}>
                <CheckIcon style={{ marginRight: 5 }} />
                Online Booking Medical Consultancy Website.
              </li>
            </ul>
          </p>
          <p>
            <span style={{ fontWeight: "normal" }}>Used Technologies:</span>
            <br />
            PHP, Codeigniter4, HTML, CSS, JavaScript, JQuery, Ajax, Bootstrap,
            MySQL
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022 - present"
          iconStyle={{ background: "#e9d35b", color: "#fff" }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Founder & CEO - adsin.lk
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Maruthamunai, Sri Lanka
          </h4>
          <p>Established a Classified Advertising Agency.</p>
          <p style={{ fontWeight: 400 }}>
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              <li style={{ display: "flex", alignItems: "start" }}>
                <CheckIcon style={{ marginRight: 5 }} />
                Designed & Developed a website as a full stack developer.
              </li>
              <li style={{ display: "flex", alignItems: "start" }}>
                <CheckIcon style={{ marginRight: 5 }} />
                Google Adsense.
              </li>
              <li style={{ display: "flex", alignItems: "start" }}>
                <CheckIcon style={{ marginRight: 5 }} />
                Google Analytics.
              </li>
              <li style={{ display: "flex", alignItems: "start" }}>
                <CheckIcon style={{ marginRight: 5 }} />
                Digital Marketing.
              </li>
            </ul>
          </p>
          <p>
            <span style={{ fontWeight: "normal" }}>Used Technologies:</span>
            <br />
            React JS, PHP, HTML, SCSS, JavaScript, NPM, JSX, MySQL
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
}

export default Experience;
