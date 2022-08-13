import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from "@material-ui/icons/Instagram";
import {Helmet} from "react-helmet";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/myartworlld";
  };
  const visitInstagraM = () => {
    window.location = "https://instagram.com/mohammad.memon_";
  };
  return (
    <>
    <Helmet>
              <title>Myartworld/About</title>
              <meta name="description" content={`About US - Myartworld.in We sell • Alphabet Keychain • Couple Name Keychain • Phone case • Resin jewellery items • Resin Bookmark.`} />
              <meta name="keywords" content={`Myartworld.in, Alphabet Keychain, Couple Name Keychain, Phone case, Resin jewellery items, Resin Bookmark, Resin Art, Home decor, Myartworld, Myartworlld`} /
              >
        </Helmet>
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography component="h1">About Us</Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="https://res.cloudinary.com/myartworld/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1658951955/products/Myartworld_logo_ezfroj.jpg"
              alt="Founder"
            />
            <Typography>Iqra Memon | Myartworld</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
                Painting || Resin Art || Keychains
                    Shipping All Over India.
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2">Our Brands</Typography>
            <a
              href="https://www.youtube.com/channel/UChCZwSyHTEVW8PtxxImLAHA"
              target="blank"
            >
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/myartworlld" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="aboutSection2">
    <div></div>
    <div className="aboutSectionGradient"></div>
    <div className="aboutSectionContainer transform">
      <Typography component="h2">Designed & Developed By Mohammad Memon </Typography>

      <div>
        <div>
          <Avatar
            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
            src="https://res.cloudinary.com/myartworld/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1659024159/products/WhatsApp_Image_2022-07-28_at_9.30.44_PM_yq5gqr.jpg"
            alt="Founder"
          />
          <Typography>Mohammad Memon</Typography>
          <Button onClick={visitInstagraM} color="primary">
            Visit Instagram
          </Button>
          <span>
            Full Stack Developer, Specialized in
              ReactJs || NextJs || MongoDb
              ExpressJs || NodeJs
              .
          </span>
        </div>
        <div className="aboutSectionContainer2">
          <Typography component="h2">My Socials</Typography>
          <a
            href="https://www.linkedin.com/in/mohammed-memon-845261245"
            target="blank"
          >
            <LinkedInIcon className="linkedInSvgIcon" />
          </a>

          <a href="https://instagram.com/mohammad.memon_/" target="blank">
            <InstagramIcon className="instagramSvgIcon" />
          </a>
        </div>
      </div>
    </div>
  </div>
  </>
  );
};

export default About;