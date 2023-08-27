import { FaThermometer, FaSun, FaEye } from "react-icons/fa";
import { HiCheck } from "react-icons/hi";
export const navLinks = [
  {
    id: "services",
    title: "Services",
  },
  {
    id: "product",
    title: "Product",
  },
  {
    id: "about",
    title: "About",
  },
  {
    id: "login",
    title: "Login",
  },
];

export const clients = [
  {
    id: "boldo",
    title: "Boldo",
    logo: "/assets/boldo.png",
  },
  {
    id: "presto",
    title: "Presto",
    logo: "/assets/presto.png",
  },
];


export const sliderItems = [
  { src: "/assets/boldo.png", name: "Boldo" },
  { src: "/assets/presto.png", name: "Presto" },
  { src: "/assets/boldo.png", name: "Boldo" },
  { src: "/assets/presto.png", name: "Presto" },
  { src: "/assets/boldo.png", name: "Boldo" },
  { src: "/assets/presto.png", name: "Presto" },
  { src: "/assets/boldo.png", name: "Boldo" },
  { src: "/assets/presto.png", name: "Presto" },
  { src: "/assets/boldo.png", name: "Boldo" },
  { src: "/assets/presto.png", name: "Presto" },
  { src: "/assets/boldo.png", name: "Boldo" },
  { src: "/assets/presto.png", name: "Presto" },
  { src: "/assets/boldo.png", name: "Boldo" },
  { src: "/assets/presto.png", name: "Presto" },
];



export const duplicatedClients = [];

for (let i = 0; i < 3; i++) {
  duplicatedClients.push(...clients);
}

export const services = [
  {
    id: "services-1",
    Image: "/assets/services01.png",
    title: "Cool feature title",
    content: "Learning curve network effects return on investment.",
    link: "https://boldo.com/services/",
  },
  {
    id: "services-2",
    Image: "/assets/services02.png",
    title: "Cool feature title",
    content: "Learning curve network effects return on investment.",
    link: "https://boldo.com/services/",
  },
  {
    id: "services-3",
    Image: "/assets/services03.png",
    title: "Cool feature title",
    content: "Learning curve network effects return on investment.",
    link: "https://boldo.com/services/",
  },
];

export const secondService = [
  {
    id: "services-1",
    Image: "/assets/servicesGB1.png",
    title:
      "We connect our customers with the best, and help them keep up-and stay open.",
    link: "https://boldo.com/services/",
    content: [
      {
        icon: HiCheck,
        content: "We connect our customers with the best.",
      },
      {
        icon: HiCheck,
        content: "Advisor success customer launch party.",
      },
      {
        icon: HiCheck,
        content: "Business-to-consumer long tail.",
      },
    ],
  },
  {
    id: "services-2",
    Image: "/assets/servicesGB2.png",
    title:
      "We connect our customers with the best, and help them keep up-and stay open.",
    link: "#",
    content: [
      {
        icon: FaThermometer,
        content: "We connect our customers with the best.",
      },
      {
        icon: FaEye,
        content: "Advisor success customer launch party.",
      },
      {
        icon: FaSun,
        content: "Business-to-consumer long tail.",
      },
    ],
  },
];

export const thirdService = [
  {
    id: "servicesC-1",
    Image: "/assets/servicesc01.png",
    title:
      "We connect our customers with the best, and help them keep up-and stay open.",
    content: [
      {
        icon: HiCheck,
        sub: "We connect our customers with the best?",
      },
      {
        icon: HiCheck,
        sub: "Android research & development rockstar?",
      },
    ],
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Buyer buzz partner network disruptive non-disclosure agreement business.",
    name: "Albus Dumbledore",
    title: "Manager @ Howarts",
    Image: "/assets/people01.png",
  },
  {
    id: "feedback-2",
    content:
      "Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.",
    name: "Severus Snape",
    title: "Manager @ Slytherin",
    Image: "/assets/people02.png",
  },
  {
    id: "feedback-3",
    content:
      "Release facebook responsive web design business model canvas seed money monetization.",
    name: "Harry Potter",
    title: "Team Leader @ Gryffindor",
    Image: "/assets/people03.png",
  },
];

export const products = [
  {
    id: "products-1",
    type: "Category",
    date: "November 21, 2021",
    content: "Pitch termsheet backing validation focus release.",
    person: "Chandler Bing",
    Image: "/assets/person01.png",
    ImageProduct: "/assets/prod01.png",
  },
  {
    id: "products-2",
    type: "Category",
    date: "November 22, 2021",
    content:
      "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    person: "Rachel Green",
    Image: "/assets/person02.png",
    ImageProduct: "/assets/prod02.png",
  },
  {
    id: "products-3",
    type: "Category",
    date: "November 23, 2021",
    content:
      "Beta prototype sales iPad gen-z marketing network effects value proposition",
    person: "Monica Geller",
    Image: "/assets/person03.png",
    ImageProduct: "/assets/prod03.png",
  },
];

export const footerLinks = [
  {
    title: "Landings",
    links: [
      {
        name: "Home",
        link: "#",
      },
      {
        name: "Products",
        link: "#",
      },
      {
        name: "Services",
        link: "#",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "Home",
        link: "#",
      },
      {
        name: "Careers",
        info: "Hiring!",
        link: "#",
      },
      {
        name: "Services",
        link: "#",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Blog",
        link: "#",
      },
      {
        name: "Products",
        link: "#",
      },
      {
        name: "Services",
        link: "#",
      },
    ],
  },
];
