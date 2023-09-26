import backgroundImg1 from "../src/Assets/backgroundImg1.png";
import backgroundImg2 from "../src/Assets/backgroundImg2.png";
import clientImg from "../src/Assets/clientImg.png";
import projectImg from "../src/Assets/projectImg.png";
import aboutImg from "../src/Assets/aboutImg.png";

import campingImg from "../src/Assets/campingImg.png";
import movieImg from "../src/Assets/movieImg.png";
import musicImg from "../src/Assets/musicImg.png";
import travelImg from "../src/Assets/travelImg.png";

const navbarData = [
  { id: 1, title: "HOME", hrefKey: "#Home" },
  { id: 2, title: "ABOUT", hrefKey: "#About" },
  { id: 3, title: "SKILLS", hrefKey: "#Skills" },
  { id: 4, title: "SERVICES", hrefKey: "#Services" },
  { id: 5, title: "PROJECT", hrefKey: "#Projects" },
  { id: 6, title: "BLOG", hrefKey: "#Blog" },
  { id: 7, title: "CONTACT", hrefKey: "#Contact" },
];
const Images = {
  backgroundImg1: backgroundImg1,
  backgroundImg2: backgroundImg2,
  clientImg: clientImg,
  projectImg: projectImg,
  aboutImg: aboutImg,
};
const statsData = [
  { id: 1, title: "PROJECT COMPLETE", img: Images.clientImg, numbers: 5 },
  { id: 2, title: "HAPPY CLIENTS", img: Images.projectImg, numbers: 3 },
  { id: 3, title: "CUPS OF COFFEE", img: Images.clientImg, numbers: 10 },
  { id: 4, title: "YEARS EXPERIENCED", img: Images.projectImg, numbers: 3 },
];
const aboutData = [
  { id: 1, titleKey: "Name:", titleValue: "Aditya Singh" },
  { id: 2, titleKey: "Date of birth:", titleValue: "May 11, 1998" },
  { id: 3, titleKey: "Address:", titleValue: "Jabalpur India" },
  { id: 4, titleKey: "Email:", titleValue: "aditya@gmail.com" },
  { id: 5, titleKey: "Phone:", titleValue: "+91-9144774111" },
];
const hobbyData = [
  { id: 1, hobby: "Music", hobbyImg: musicImg },
  { id: 2, hobby: "Travel", hobbyImg: travelImg },
  { id: 3, hobby: "Movie", hobbyImg: movieImg },
  { id: 4, hobby: "Camping", hobbyImg: campingImg },
];
export { navbarData, Images, statsData, aboutData, hobbyData };
