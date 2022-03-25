/*
seed file for project info...
*/
import cdImg from "../assets/cd_screen.png";
import hotSauceImg from "../assets/hotsauce_screen.png";
import starballImg from "../assets/starball_screen.png";
import githubLogo from "../assets/icons8-github-50.png";
import youtubeLogo from "../assets/icons8-youtube-50.png";
import herokuLogo from "../assets/icons8-heroku-50.png";


const projects = [
  {
    name: "City Diary",
    type: "mobile",
    description:
      "City Diary is a mobile app that allows you to interact with and explore a user generated sound map.  Users can choose to publicly or privately share their audio on the City Diary Map, to revisit anytime.",
    tech: "React Native, Expo, Firebase",
    image: cdImg,
    github: githubLogo,
    repo: "HCJM/City-Diary",
    link: youtubeLogo,
    path: "https://tinyurl.com/cityDiaryDemo"
  },
  {
    name: "Hot 'n' Saucy",
    type: "e-commerce",
    description:
      "Hot 'N' Saucy is an e-commerce web app that provides customers with a variety of artisanal hot sauces. There are features for guests, returning customers with secure and persistent profiles, as well as administrators with access to product inventory and customer data.",
    tech: "Node.js, JavaScript, React, Redux, Axios, Express, pg, Sequelize, PostgreSQL, Heroku",
    image: hotSauceImg,
    github: githubLogo,
    repo: "HotnSaucy/HotSauces",
    link: herokuLogo,
    path: "https://hotnsaucy.herokuapp.com/"
  },
  {
    name: "Starball",
    type: "game",
    description:
      "Starball is a playful and creative coding exploration using p5.js.  Our friend, Starball, is a happy little sprite that loves to chase shiny things and munch on star candies.  However, all that star candy tends to make them act a little rowdy, to the chagrin of the alien sprites, their only neighbors in the sparkle cloud galaxy.",
    tech: "JavaScript, p5.js, p5 play library",
    image: starballImg,
    github: githubLogo,
    repo: "HTHR-WHT/p5-StarBall",
    link: youtubeLogo,
    path: "https://youtu.be/OggzhuV33VI"
  },
];

export default projects;
