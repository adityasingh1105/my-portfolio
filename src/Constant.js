import backgroundImg1 from "../src/Assets/backgroundImg1.png";
import backgroundImg2 from "../src/Assets/backgroundImg2.png";
import clientImg from "../src/Assets/clientImg.png";
import projectImg from "../src/Assets/projectImg.png";
import aboutImg from "../src/Assets/aboutImg.png";

import campingImg from "../src/Assets/campingImg.png";
import movieImg from "../src/Assets/movieImg.png";
import musicImg from "../src/Assets/musicImg.png";
import travelImg from "../src/Assets/travelImg.png";
import projectImgUser from "../src/Assets/projectImgUser.png";
import projectOneImg from "../src/Assets/projectOneImg.png";
import projectTwoImg from "../src/Assets/projectTwoImg.png";
import quoteLeftImg from "../src/Assets/quoteLeftImg.png";
import clientOne from "../src/Assets/clientOne.png";
import clientTwo from "../src/Assets/clientTwo.png";
import clientThree from "../src/Assets/clientThree.png";
import phoneImg from "../src/Assets/phoneImg.gif";
import locationImg from "../src/Assets/locationImg.gif";
import emailImg from "../src/Assets/emailImg.gif";

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
  projectImgUser: projectImgUser,
  projectOneImg: projectOneImg,
  projectTwoImg: projectTwoImg,
  quoteLeftImg: quoteLeftImg,
  clientOne: clientOne,
  clientTwo: clientTwo,
  clientThree: clientThree,
  phoneImg: phoneImg,
  locationImg: locationImg,
  emailImg: emailImg,
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
const skillsData = [
  {
    id: 1,
    skillTitle: "REACT",
    lastweek: "10%",
    lastMonth: "97%",
    skillRate: 90,
  },
  {
    id: 2,
    skillTitle: "REACT-NATIVE",
    lastweek: "10%",
    lastMonth: "43%",
    skillRate: 89,
  },
  {
    id: 3,
    skillTitle: "HTML",
    lastweek: "10%",
    lastMonth: "43%",
    skillRate: 80,
  },
  {
    id: 4,
    skillTitle: "CSS",
    lastweek: "10%",
    lastMonth: "43%",
    skillRate: 81,
  },
  {
    id: 5,
    skillTitle: "JavaScript",
    lastweek: "10%",
    lastMonth: "43%",
    skillRate: 92,
  },
];
const servicesData = [
  {
    id: 1,
    serviceTitle: "Web Design",
    serviceDescriptions:
      "A small river named Duden flows by their place and supplies.",
    serviceImg: musicImg,
  },
  {
    id: 2,
    serviceTitle: "Web Application",
    serviceDescriptions:
      "A small river named Duden flows by their place and supplies.",
    serviceImg: musicImg,
  },
  {
    id: 3,
    serviceTitle: "Web Development",
    serviceDescriptions:
      "A small river named Duden flows by their place and supplies.",
    serviceImg: musicImg,
  },
  {
    id: 4,
    serviceTitle: "Banner Design",
    serviceDescriptions:
      "A small river named Duden flows by their place and supplies.",
    serviceImg: musicImg,
  },
  {
    id: 5,
    serviceTitle: "Branding",
    serviceDescriptions:
      "A small river named Duden flows by their place and supplies.",
    serviceImg: musicImg,
  },
  {
    id: 6,
    serviceTitle: "Icon Design",
    serviceDescriptions:
      "A small river named Duden flows by their place and supplies.",
    serviceImg: musicImg,
  },
  {
    id: 7,
    serviceTitle: "Graphic Design",
    serviceDescriptions:
      "A small river named Duden flows by their place and supplies.",
    serviceImg: musicImg,
  },
];
const projectData = [
  {
    id: 1,
    description: "Branding & Illustration Design",
    img: Images.projectOneImg,
    title: "Web Design",
  },
  {
    id: 2,
    description: "Branding & Illustration Design",
    img: Images.projectTwoImg,
    title: "Web Design",
  },
  {
    id: 3,
    description: "Branding & Illustration Design",
    img: Images.projectOneImg,
    title: "Web Design",
  },
  {
    id: 2,
    description: "Branding & Illustration Design",
    img: Images.projectTwoImg,
    title: "Web Design",
  },
  {
    id: 3,
    description: "Branding & Illustration Design",
    img: Images.projectOneImg,
    title: "Web Design",
  },
];
const testimoniesData = [
  {
    id: 1,
    description:
      "Far far away, behind the word nountains, far from the countries Vokalia and Consonantia, there live the blind rexts.",
    clientImg: clientOne,
    clientName: "Aditya",
    clientPosition: "Web Design",
  },
  {
    id: 2,
    description:
      "Far far away, behind the word nountains, far from the countries Vokalia and Consonantia, there live the blind rexts.",
    clientImg: clientTwo,
    clientName: "Aditya",
    clientPosition: "Web Design",
  },
  {
    id: 3,
    description:
      "Far far away, behind the word nountains, far from the countries Vokalia and Consonantia, there live the blind rexts.",
    clientImg: clientThree,
    clientName: "Aditya",
    clientPosition: "Marketing Manager",
  },
  {
    id: 2,
    description:
      "Far far away, behind the word nountains, far from the countries Vokalia and Consonantia, there live the blind rexts.",
    clientImg: clientOne,
    clientName: "Aditya",
    clientPosition: "Web Design",
  },
  {
    id: 3,
    description:
      "Far far away, behind the word nountains, far from the countries Vokalia and Consonantia, there live the blind rexts.",
    clientImg: clientTwo,
    clientName: "Aditya",
    clientPosition: "Web Design",
  },
];
const demoData = [
  {
    id: 1,
    projectTitle: "Field Management Services hello worldworldworldworld",
    projectOwner: "By Rahul jain",
    date: "Oct 24, 2033",
    serviceImg: musicImg,
    price: 15,
  },
  {
    id: 2,
    projectTitle: "Field Management Services hello worldworldworldworld",
    projectOwner: "By Rahul jain",
    date: "Oct 24, 2033",
    serviceImg: musicImg,
    price: 12.21,
  },
  {
    id: 3,
    projectTitle: "Field Management Services hello worldworldworldworld",
    projectOwner: "By Rahul jain",
    date: "Oct 24, 2033",
    serviceImg: musicImg,
    price: 8,
  },
];
const demoDataTwo = [
  {
    id: 1,
    status: "Wrok in progress",
    priceTxt: "$0.32",
  },
  {
    id: 2,
    status: "In review",
    priceTxt: "$0.32",
  },
  {
    id: 3,
    status: "Pending",
    priceTxt: "$0.32",
  },
];
export {
  navbarData,
  Images,
  statsData,
  aboutData,
  hobbyData,
  skillsData,
  servicesData,
  projectData,
  testimoniesData,
  demoData,
  demoDataTwo,
};
