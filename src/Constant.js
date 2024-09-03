import backgroundImg1 from "../src/Assets/backgroundImg1.png";
import backgroundImg2 from "../src/Assets/backgroundImg2.png";
import clientImg from "../src/Assets/clientImg.png";
import projectImg from "../src/Assets/projectImg.png";
import aboutImg from "../src/Assets/aboutImg.png";
import mypicture1 from "../src/Assets/mypicture1.png";

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
import achivementImg from "../src/Assets/achivementImg.png";
import experienceImg from "../src/Assets/experienceImg.png";
//Social Media Img
import fbImg from "../src/Assets/fbImg.png";
import instagramImg from "../src/Assets/instagramImg.png";
import linkedinImg from "../src/Assets/linkedinImg.png";
//Serive
import webImg from "../src/Assets/webImg.png";
import seoImg from "../src/Assets/seoImg.png";
import mobileImg from "../src/Assets/mobileImg.png";
import figmaImg from "../src/Assets/figmaImg.png";
import graphicImg from "../src/Assets/graphicImg.png";
import bannerImg from "../src/Assets/bannerImg.png";
const navbarData = [
  { id: 1, title: "HOME", hrefKey: "#Home" },
  { id: 2, title: "ABOUT", hrefKey: "#About" },
  { id: 3, title: "SKILLS", hrefKey: "#Skills" },
  { id: 4, title: "SERVICES", hrefKey: "#Services" },
  { id: 5, title: "PROJECT", hrefKey: "#Projects" },
  { id: 6, title: "CONTACT", hrefKey: "#Contact" },
];
const Images = {
  backgroundImg1: backgroundImg1,
  backgroundImg2: backgroundImg2,
  clientImg: clientImg,
  projectImg: projectImg,
  aboutImg: aboutImg,
  mypicture1: mypicture1,
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
  achivementImg: achivementImg,
  experienceImg: experienceImg,
  fbImg: fbImg,
  instagramImg: instagramImg,
  linkedinImg: linkedinImg,
  graphicImg,
  figmaImg,
  mobileImg,
  seoImg,
  webImg,
  bannerImg,
};
const statsData = [
  { id: 1, title: "PROJECT COMPLETE", img: Images.clientImg, numbers: 3 },
  { id: 2, title: "HAPPY CLIENTS", img: Images.projectImg, numbers: 3 },
  { id: 3, title: "CUPS OF COFFEE", img: Images.achivementImg, numbers: 1 },
  {
    id: 4,
    title: "YEARS EXPERIENCED",
    img: Images.experienceImg,
    numbers: new Date().getFullYear() - 2021,
  },
];
const aboutData = [
  { id: 1, titleKey: "Name:", titleValue: "Aditya Singh" },
  { id: 2, titleKey: "Date of birth:", titleValue: "May 11, 1998" },
  { id: 3, titleKey: "Address:", titleValue: "Jabalpur India" },
  { id: 4, titleKey: "Email:", titleValue: "adisadis1234@gmail.com" },
  { id: 5, titleKey: "Phone:", titleValue: "+91-9144774111" },
];
const hobbyData = [
  { id: 1, hobby: "Camping", hobbyImg: campingImg },
  { id: 2, hobby: "Listing Music", hobbyImg: musicImg },
  { id: 3, hobby: "Traveling", hobbyImg: travelImg },
  { id: 4, hobby: "Watching Movies", hobbyImg: movieImg },
];

const skillsData = [
  {
    id: 1,
    skillTitle: "REACT",

    skillRate: 90,
  },
  {
    id: 2,
    skillTitle: "REACT-NATIVE",
    skillRate: 70,
  },
  {
    id: 3,
    skillTitle: "HTML/CSS",
    skillRate: 80,
  },
  {
    id: 4,
    skillTitle: "Material UI",
    skillRate: 81,
  },
  {
    id: 5,
    skillTitle: "JavaScript",
    skillRate: 82,
  },
];

const servicesData = [
  {
    id: 1,
    serviceTitle: "Website Development",
    serviceDescriptions:
      "We create responsive and visually appealing websites tailored to your business needs, ensuring a seamless user experience across all devices.",
    serviceImg: webImg,
  },
  {
    id: 2,
    serviceTitle: "Mobile Application Development",
    serviceDescriptions:
      "Our team develops custom mobile applications for both iOS and Android platforms, focusing on performance, security, and user engagement.",
    serviceImg: mobileImg,
  },
  {
    id: 3,
    serviceTitle: "Figma Designs",
    serviceDescriptions:
      "We design intuitive and user-friendly interfaces using Figma, ensuring your digital products are both functional and aesthetically pleasing.",
    serviceImg: figmaImg
  },
  {
    id: 4,
    serviceTitle: "Banner Design",
    serviceDescriptions:
      "Our creative team designs eye-catching banners that effectively communicate your brand message and attract your target audience.",
    serviceImg: bannerImg,
  },
  {
    id: 5,
    serviceTitle: "SEO",
    serviceDescriptions:
      "We optimize your website to rank higher on search engines, driving organic traffic and improving your online visibility.",
    serviceImg: seoImg,
  },
  {
    id: 7,
    serviceTitle: "Graphic Design",
    serviceDescriptions:
      "Our graphic design services include creating visually appealing logos, brochures, and other marketing materials to enhance your brand identity.",
    serviceImg: graphicImg,
  },
];

const projectData = [
  {
    id: 1,
    title: "Sanatandhram",
    description: "Application design for Sanatandhram.",
    img: Images.projectOneImg,
    technologies: ["HTML", "CSS", "JavaScript"],
    client: "Sanatandhram Organization",
    completionDate: "2023-05-15",
    testimonials: [
      "Great job on the website design! Very professional.",
      "Easy to navigate and visually appealing.",
    ],
  },
  {
    id: 2,
    title: "Design Process",
    description: "Website development for Design Process.",
    img: Images.projectTwoImg,
    technologies: ["React Native", "Firebase"],
    client: "Design Process Inc.",
    completionDate: "2023-08-20",
    testimonials: [
      "The mobile app exceeded our expectations! Highly recommended.",
      "Smooth user experience and intuitive design.",
    ],
  },
  {
    id: 3,
    title: "New Staff Onboarding",
    description: "Website Design for New Staff Onboarding.",
    img: Images.projectOneImg,
    technologies: ["Adobe Illustrator", "Adobe Photoshop"],
    client: "ABC Company",
    completionDate: "2022-12-10",
    testimonials: [
      "The branding and illustrations perfectly capture our company's identity. Amazing work!",
    ],
  },
];

const testimoniesData = [
  {
    id: 1,
    description:
      "Great job on the website design! Very professional. Easy to navigate and visually appealing.",
    clientImg: clientOne,
    clientName: "John",
    clientPosition: "Sanatandhram",
  },
  {
    id: 2,
    description:
      "The mobile app exceeded our expectations! Highly recommended. Excellent Work!",
    clientImg: clientTwo,
    clientName: "Jame",
    clientPosition: "Design Process",
  },
  {
    id: 3,
    description:
      "The branding and illustrations perfectly capture our company's identity. Amazing work!",
    clientImg: clientThree,
    clientName: "Honey",
    clientPosition: "Marketing Manager",
  },
  {
    id: 1,
    description:
      "Great job on the website design! Very professional. Easy to navigate and visually appealing.",
    clientImg: clientOne,
    clientName: "John",
    clientPosition: "Sanatandhram",
  },
  {
    id: 2,
    description:
      "The mobile app exceeded our expectations! Highly recommended. Excellent Work!",
    clientImg: clientTwo,
    clientName: "Jame",
    clientPosition: "Design Process",
  },
  {
    id: 3,
    description:
      "The branding and illustrations perfectly capture our company's identity. Amazing work!",
    clientImg: clientThree,
    clientName: "Honey",
    clientPosition: "Marketing Manager",
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
