/* eslint-disable quotes */
/* eslint-disable array-callback-return */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const toggleMenu = document.querySelector(".toggle");
const navlinks = document.querySelector(".navlinks");
let menuOpen = false;

toggleMenu.addEventListener("click", (e) => {
  if (!menuOpen) {
    toggleMenu.classList.add("open");
    menuOpen = true;
  } else {
    toggleMenu.classList.remove("open");
    menuOpen = false;
  }

  navlinks.classList.toggle("open");
});

function closeMenu() {
  toggleMenu.classList.remove("open");
  navlinks.classList.remove("open");
  menuOpen = false;
}

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

const section = ["intro", "portfolio", "about"];
const footer = ["contact", "copyright"];

const title = [
  {
    cls: "title",
    h2: "My Recent Works",
  },
];

const plchdr = [
  {
    cls: "plchdr",
    cls1: "img",
    src: "../images/plc-img.jpg",
    alt: "A woman doing yoga",
    cls2: "text",
    h2: "Multi-Post-Stories",
    para: "A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.",
    list: ["css", "html", "bootstrap", "ruby"],
    btn: "See Project",
    cls3: "cProject",
  },
];

const cards = [
  {
    cls: "card cd1",
    cls1: "card cd2",
    cls2: "card cd3",
    cls3: "card cd4",
    cls4: "card cd5",
    cls5: "card cd6",
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
    entity1: "\u25a0",
    entity2: "\u25cf",
    h3: "Languages",
    h31: "Frameworks",
    h32: "Skills",
    list: ["Javascript", "Ruby", "HTML", "CSS"],
    list1: ["Bootstrap", "Ruby on Rails", "RSpec", "CapyBara", "Salenium"],
    list2: ["Codekit", "Github", "Codepen", "Gitlab", "Terminal"],
  },
];

const form = [
  {
    cls: "contact-text",
    para: "I'm always interested in hearing about new projects, so if you'd like to chat please get in touch.",
    cls2: "form",
    action: "https://formspree.io/f/xpznwejk",
    method: "post",
    cls3: "names",
    cls4: "input-grp firstN",
    type: "text",
    id: "firstName",
    name: "firstName",
    plchdr: "First Name",
    cls5: "input-grp lastN",
    id1: "lastName",
    name1: "lastName",
    plchdr1: "Last name",
    cls6: "input-grp",
    type1: "email",
    id2: "email",
    name2: "email",
    plchdr2: "Email address",
    name3: "msg",
    id3: "msg",
    cols: 30,
    rows: 10,
    minL: 30,
    plchdr3: "Enter text here",
    btn: "Get in touch",
    type2: "submit",
    id4: "fullName",
    name4: "fullName",
    plchdr4: "Full name",
    plchdr5: "name@gmail.com",
  },
];

const copyright = [
  {
    icns: [
      "fa-brands fa-github",
      "fa-brands fa-linkedin-in",
      "fa-brands fa-twitter",
      "fa-solid fa-m",
    ],
  },
];

const popUp = [{}];

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
    const icon = document.createElement("i");
    icon.className = icn;
    aTag.appendChild(icon);
    li.appendChild(aTag);
    ul.appendChild(li);
    div.appendChild(ul);
  });
  return div;
});

// title

const tlsData = title.map((elem) => {
  const div = document.createElement("div");
  div.className = elem.cls;
  const h2 = document.createElement("h2");
  h2.innerHTML = elem.h2;
  div.appendChild(h2);
  const hr = document.createElement("hr");
  div.append(hr);
  return div;
});

// placeholder


// cards
const cardData1 = cards.map((elem) => {
  const div = document.createElement("div");
  div.className = elem.cls;
  const h3 = document.createElement("h3");
  h3.innerHTML = elem.h3;
  div.appendChild(h3);
  const para = document.createElement("p");
  para.innerHTML = elem.para;
  div.appendChild(para);
  const ul = document.createElement("ul");
  elem.list.map((item) => {
    const li = document.createElement("li");
    const aTag = document.createElement("a");
    aTag.innerHTML = item;
    li.appendChild(aTag);
    ul.appendChild(li);
    div.appendChild(ul);
  });
  const btn = document.createElement("button");
  btn.innerHTML = elem.btn;
  div.appendChild(btn);

  return div;
});
const cardData2 = cards.map((elem) => {
  const div = document.createElement("div");
  div.className = elem.cls1;
  const h3 = document.createElement("h3");
  h3.innerHTML = elem.h3;
  div.appendChild(h3);
  const para = document.createElement("p");
  para.innerHTML = elem.para;
  div.appendChild(para);
  const ul = document.createElement("ul");
  elem.list.map((item) => {
    const li = document.createElement("li");
    const aTag = document.createElement("a");
    aTag.innerHTML = item;
    li.appendChild(aTag);
    ul.appendChild(li);
    div.appendChild(ul);
  });
  const btn = document.createElement("button");
  btn.innerHTML = elem.btn;
  div.appendChild(btn);
  return div;
});
const cardData3 = cards.map((elem) => {
  const div = document.createElement("div");
  div.className = elem.cls2;
  const h3 = document.createElement("h3");
  h3.innerHTML = elem.h3;
  div.appendChild(h3);
  const para = document.createElement("p");
  para.innerHTML = elem.para;
  div.appendChild(para);
  const ul = document.createElement("ul");
  elem.list.map((item) => {
    const li = document.createElement("li");
    const aTag = document.createElement("a");
    aTag.innerHTML = item;
    li.appendChild(aTag);
    ul.appendChild(li);
    div.appendChild(ul);
  });
  const btn = document.createElement("button");
  btn.innerHTML = elem.btn;
  div.appendChild(btn);
  return div;
});
const cardData4 = cards.map((elem) => {
  const div = document.createElement("div");
  div.className = elem.cls3;
  const h3 = document.createElement("h3");
  h3.innerHTML = elem.h3;
  div.appendChild(h3);
  const para = document.createElement("p");
  para.innerHTML = elem.para;
  div.appendChild(para);
  const ul = document.createElement("ul");
  elem.list.map((item) => {
    const li = document.createElement("li");
    const aTag = document.createElement("a");
    aTag.innerHTML = item;
    li.appendChild(aTag);
    ul.appendChild(li);
    div.appendChild(ul);
  });
  const btn = document.createElement("button");
  btn.innerHTML = elem.btn;
  div.appendChild(btn);
  return div;
});
const cardData5 = cards.map((elem) => {
  const div = document.createElement("div");
  div.className = elem.cls4;
  const h3 = document.createElement("h3");
  h3.innerHTML = elem.h3;
  div.appendChild(h3);
  const para = document.createElement("p");
  para.innerHTML = elem.para;
  div.appendChild(para);
  const ul = document.createElement("ul");
  elem.list.map((item) => {
    const li = document.createElement("li");
    const aTag = document.createElement("a");
    aTag.innerHTML = item;
    li.appendChild(aTag);
    ul.appendChild(li);
    div.appendChild(ul);
  });
  const btn = document.createElement("button");
  btn.innerHTML = elem.btn;
  div.appendChild(btn);
  return div;
});

const cardData6 = cards.map((elem) => {
  const div = document.createElement("div");
  div.className = elem.cls5;
  const h3 = document.createElement("h3");
  h3.innerHTML = elem.h3;
  div.appendChild(h3);
  const para = document.createElement("p");
  para.innerHTML = elem.para;
  div.appendChild(para);
  const ul = document.createElement("ul");
  elem.list.map((item) => {
    const li = document.createElement("li");
    const aTag = document.createElement("a");
    aTag.innerHTML = item;
    li.appendChild(aTag);
    ul.appendChild(li);
    div.appendChild(ul);
  });
  const btn = document.createElement("button");
  btn.innerHTML = elem.btn;
  div.appendChild(btn);
  return div;
});

// about

const abtData = about.map((elem) => {
  const div = document.createElement("div");
  div.className = elem.cls;
  const h2 = document.createElement("h2");
  h2.innerHTML = elem.h2;
  div.appendChild(h2);
  const para = document.createElement("p");
  para.innerHTML = elem.para;
  div.appendChild(para);
  const btn = document.createElement("button");
  btn.innerHTML = elem.btn;
  div.appendChild(btn);
  return div;
});

// skillset
const sklSet = about.map((elem) => {
  const div = document.createElement("div");
  div.className = elem.cls1;
  elem.cls2.map((e) => {
    const div1 = document.createElement("div");
    div1.className = e;
    if (div1.className === "specifics one") {
      const h3 = document.createElement("h3");
      const span = document.createElement("span");
      span.innerHTML = elem.entity;
      h3.appendChild(span);
      h3.innerHTML += elem.h3;
      div1.appendChild(h3);
      const ul = document.createElement("ul");
      elem.list.map((item) => {
        const li = document.createElement("li");
        li.innerHTML = item;
        ul.appendChild(li);
        div1.appendChild(ul);
      });
    } else if (div1.className === "specifics two") {
      const h3 = document.createElement("h3");
      const span = document.createElement("span");
      span.innerHTML = elem.entity1;
      h3.appendChild(span);
      h3.innerHTML += elem.h3;
      div1.appendChild(h3);
      const ul = document.createElement("ul");
      elem.list1.map((item) => {
        const li = document.createElement("li");
        li.innerHTML = item;
        ul.appendChild(li);
        div1.appendChild(ul);
      });
    } else if (div1.className === "specifics three") {
      const h3 = document.createElement("h3");
      const span = document.createElement("span");
      span.innerHTML = elem.entity2;
      h3.appendChild(span);
      h3.innerHTML += elem.h3;
      div1.appendChild(h3);
      const ul = document.createElement("ul");
      elem.list2.map((item) => {
        const li = document.createElement("li");
        li.innerHTML = item;
        ul.appendChild(li);
        div1.appendChild(ul);
      });
    }

    div.appendChild(div1);
  });

  return div;
});

// section
const secData = section.map((elem) => {
  const section = document.createElement("section");
  section.id = elem;
  if (section.id === "intro") {
    introData.map((e) => {
      section.appendChild(e);
    });
    socials.map((e) => {
      section.append(e);
    });
  } else if (section.id === "portfolio") {
    tlsData.map((e) => {
      section.appendChild(e);
    });
    plchdrData.map((e) => {
      section.appendChild(e);
    });
    cardData1.map((e) => {
      section.appendChild(e);
    });
    cardData2.map((e) => {
      section.appendChild(e);
    });
    cardData3.map((e) => {
      section.appendChild(e);
    });
    cardData4.map((e) => {
      section.appendChild(e);
    });
    cardData5.map((e) => {
      section.appendChild(e);
    });
    cardData6.map((e) => {
      section.appendChild(e);
    });
  } else {
    abtData.map((e) => {
      section.appendChild(e);
    });
    const hr = document.createElement("hr");
    section.appendChild(hr);
    sklSet.map((e) => {
      section.appendChild(e);
    });
  }
  document.body.appendChild(section);
});
const pWindow = document.querySelector(".pWindow");

const seeProject = document.querySelector(".cProject");

seeProject.addEventListener("click", () => {
  pWindow.classList.add("open");
});

const closePopUp = document.querySelector(".fa-x");

closePopUp.addEventListener("click", () => {
  pWindow.classList.remove("open");
});
