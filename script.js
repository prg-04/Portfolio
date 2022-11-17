/* eslint-disable no-cond-assign */
/* eslint-disable no-plusplus */
/* eslint-disable no-constant-condition */
/* eslint-disable quotes */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
const toggleMenu = document.querySelector(".toggle");
const navlinks = document.querySelector(".navlinks");
let menuOpen = false;

toggleMenu.addEventListener("click", () => {
  if (!menuOpen) {
    toggleMenu.classList.add("open");
    menuOpen = true;
  } else {
    toggleMenu.classList.remove("open");
    menuOpen = false;
  }

  navlinks.classList.toggle("open");
});

const intro = [
  {
    cls: "intro-text",
    h1: "Hey There",
    h1h: "I'm Evans",
    h2: "I'm a software Developer",
    para: "I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.",
    cls1: "socials",
    icns: [
      "fa-brands fa-github",
      "fa-brands fa-linkedin-in",
      "fa-brands fa-twitter",
      "fa-solid fa-m",
    ],
  },
];

const section = ["intro", "portfolio", "contact", "about"];
const footer = ["contact", "copyright"];

const title = [
  {
    cls: "title",
    h2: "My Recent Works",
  },
];

const plchdr = [
  {
    cls: "img",
    src: "../images/plc-img.jpg",
    alt: "A woman doing yoga",
    cls1: "text",
    h2: "Multi-Post-Stories",
    para: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    list: ["css", "html", "bootstrap", "ruby"],
    btn: "See Project",
  },
];

const cards = [
  {
    cls: [
      "card cd1",
      "card cd2",
      "card cd3",
      "card cd4",
      "card cd5",
      "card cd6",
    ],
    h3: "Professional Art Printing Data",
    para: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard",
    list: ["css", "html", "bootstrap"],
    btn: "See Project",
  },
];

const about = [
  {
    cls: "about",
    h2: "About me",
    para: "Hello I’m a software developer! I can help you build a product , feature or website Look through some of my work and experience! If you like what you see and have a project you need coded, don’t hestiate to contact me.",
    btn: "Get My Resume",
    cls1: "skillset",
    cls2: ["specifics one", "specifics two", "specifics three"],
    entity: "\u2666",
    entity1: "\u2610",
    entity2: "\u25cf",
    h3: "Languages",
    h31: "Frameworks",
    h32: "Skills",
    list: ["Javascript", "Ruby", "HTML", "CSS"],
    list1: ["Bootstrap", "Ruby on Rails", "RSpec", "CapyBara", "Salenium"],
    list2: ["Codekit", "Github", "Codepen", "Gitlab", "Terminal"],
  },
];

// intro

const introData = intro.map((item) => {
  const div = document.createElement("div");
  div.className = item.cls;

  const h1 = document.createElement("h1");
  h1.textContent = item.h1;
  const br = document.createElement("br");
  h1.appendChild(br);
  h1.innerHTML += item.h1h;
  div.appendChild(h1);
  const para = document.createElement("p");
  para.innerHTML = item.para;
  div.appendChild(para);
  return div;
});

// socials

const socials = intro.map((item) => {
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  div.className = item.cls1;
  item.icns.map((icn) => {
    const li = document.createElement("li");
    const aTag = document.createElement("a");
  });
});

// section
const secData = section.map((elem) => {
  const section = document.createElement("section");
  section.id = elem;
  if (section.id === "intro") {
    introData.map((e) => {
      section.appendChild(e);
    });
  }

  document.body.appendChild(section);
});
