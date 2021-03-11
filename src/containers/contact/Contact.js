import React, {useContext} from "react";
import "./Contact.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {Fade} from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="prof.title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>

            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              <h2 className="bio-text"> Data Scientist | NLP Engineer | BCI Enthusiast </h2>
              <div className="location-div">
                <span className="desc-prof">
                  <svg
                    viewBox="0 0 12 16"
                    version="1.1"
                    width="20"
                    height="18"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                    ></path>
                  </svg>
                  London, United Kingdom
                </span>
              </div>
              <div className="location-div">
                <span className="desc-prof">
                  <svg
                    viewBox="0 0 12 16"
                    version="1.1"
                    width="20"
                    height="18"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 0C2.69 0 0 2.5 0 5.5 0 10.02 6 16 6 16s6-5.98 6-10.5C12 2.5 9.31 0 6 0zm0 14.55C4.14 12.52 1 8.44 1 5.5 1 3.02 3.25 1 6 1c1.34 0 2.61.48 3.56 1.36.92.86 1.44 1.97 1.44 3.14 0 2.94-3.14 7.02-5 9.05zM8 5.5c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"
                    ></path>
                  </svg>
                  TamilNadu, India
                </span>
              </div>
              <div className="opp-div">
              <span className="desc-prof">
                Open for opportunities: Yes
              </span>
            </div>
            <a className="contact-detail" href={"tel:" + contactInfo.number1 }>
                {"UK: " + contactInfo.number1 + ", "}
            </a>
            <a className="contact-detail" href={"tel:" + contactInfo.number2}>
                {"IND: " + contactInfo.number2}
            </a>
              <br />
              <br />
              <a
                className="contact-detail-email"
                href={"mailto:" + contactInfo.email_address}
              >
                {contactInfo.email_address}
              </a>
              <br />
              <br />
              <SocialMedia />
            </div>

          </div>
          <div className="image-content-profile">
            <img
              src={require("../../assets/images/headshot.jpeg")}
              alt="My Avatar"
              className="profile-image"
            />
          </div>
        </div>
      </div>

    </Fade>
  );
}
