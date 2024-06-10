/*------------------NavBar ----------------------- */
const lists = document.querySelectorAll(".mainSection .list button");
const sections = document.querySelectorAll(".mainSection section");

for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener("click", () => {
    for (let i = 0; i < lists.length; i++) {
      lists[i].classList.remove("active");
      sections[i].classList.add("d-none");
    }
    lists[i].classList.add("active");
    sections[i].classList.remove("d-none");
    window.scrollTo(0, 0);
  });
}

const aside = document.querySelector("aside");
const contactsToggle = document.querySelector("aside .showContactsToggle");
const contactDetails = document.querySelector("aside .contactDetails");
const showContactsToggleIcon = document.querySelector(
  "aside .showContactsToggleIcon"
);

contactsToggle.addEventListener("click", () => {
  aside.classList.toggle("active");
  contactDetails.classList.toggle("opacity-100");
  showContactsToggleIcon.classList.toggle("fa-angle-up");
});

const projectsCo = document.getElementById("projectsCo");
const ProjectsData = [
  {
    name: "Exclusive E-commerce",
    lang: "React js",
    imgSrc: "../assets/exclusive.webp",
    codeSrc: "https://github.com/Abdo-Atef/Exclusive",
    hostSrc: "https://exclusive-store1.vercel.app",
  },
  {
    name: "Pharmacy management system",
    lang: "React js",
    imgSrc: "../assets/pharmacy.webp",
    codeSrc:
      "https://github.com/Abdo-Atef/Pharmacy-inventory-management-system",
    hostSrc: "https://www.youtube.com/watch?v=T1TxiPJPPQg",
  },
  {
    name: "Induz",
    lang: "React js, Tailwind",
    imgSrc: "../assets/induz.webp",
    codeSrc: "https://github.com/Abdo-Atef/Induz",
    hostSrc: "https://induz-ten.vercel.app/",
  },
  {
    name: "Notion",
    lang: "React Native",
    imgSrc: "../assets/notion.webp",
    codeSrc: "https://github.com/Abdo-Atef/Notion",
    hostSrc: "",
  },
  {
    name: "To-Do-List App",
    lang: "HTML, CSS, JS",
    imgSrc: "../assets/todo.webp",
    codeSrc: "https://github.com/Abdo-Atef/To-Do-List",
    hostSrc: "https://abdo-tech.me/To-Do-List/",
  },
  {
    name: "NFT_MarketPlace",
    lang: "React Native",
    imgSrc: "../assets/nft2.webp",
    codeSrc: "https://github.com/Abdo-Atef/NFT_MarketPlace",
    hostSrc: "",
  },
  {
    name: "AbdoFolio",
    lang: "HTML, CSS",
    imgSrc: "../assets/Abdofolio.webp",
    codeSrc: "https://github.com/Abdo-Atef/AbdoFolio",
    hostSrc: "https://abdo-atef.github.io/AbdoFolio/",
  },
  {
    name: "Simple Dashboard",
    lang: "HTML, CSS",
    imgSrc: "../assets/Dashboard.webp",
    codeSrc: "https://github.com/Abdo-Atef/Dashboard",
    hostSrc: "https://abdo-tech.me/Dashboard/",
  },
  {
    name: "Weather App",
    lang: "HTML, CSS, JS",
    imgSrc: "../assets/weather.webp",
    codeSrc: "https://github.com/Abdo-Atef/Weather-Project",
    hostSrc: "https://abdo-atef.github.io/Weather-Project/",
  },
  {
    name: "Games Website",
    lang: "HTML, CSS, JS",
    imgSrc: "../assets/game.webp",
    codeSrc: "https://github.com/Abdo-Atef/Game-oop",
    hostSrc: "https://abdo-tech.me/Game-oop/",
  },
  {
    name: "Danials",
    lang: "HTML, CSS, Bootstrap",
    imgSrc: "../assets/danials.webp",
    codeSrc: "https://github.com/Abdo-Atef/Danials",
    hostSrc: "https://abdo-tech.me/Danials/",
  },

  {
    name: "Quiz App",
    lang: "HTML, CSS, JS",
    imgSrc: "../assets/quiz.webp",
    codeSrc: "https://github.com/Abdo-Atef/Quiz-App",
    hostSrc: "https://abdo-tech.me/Quiz-App/",
  },

  {
    name: "Bookmark App",
    lang: "HTML, CSS, JS",
    imgSrc: "../assets/Bookmark.webp",
    codeSrc: "https://github.com/Abdo-Atef/Bookmark",
    hostSrc: "https://abdo-tech.me/Bookmark/",
  },

  {
    name: "DevFolio",
    lang: "HTML, CSS, Bootstrap",
    imgSrc: "../assets/DevFolio.webp",
    codeSrc: "https://github.com/Abdo-Atef/DevFolio",
    hostSrc: "https://abdo-tech.me/DevFolio/",
  },
  {
    name: "Kasper",
    lang: "HTML, CSS",
    imgSrc: "../assets/kasper.webp",
    codeSrc: "https://github.com/Abdo-Atef/Kasper",
    hostSrc: "https://abdo-tech.me/Kasper/",
  },
  {
    name: "Leon",
    lang: "HTML, CSS",
    imgSrc: "../assets/Leon.webp",
    codeSrc: "https://github.com/Abdo-Atef/Leon",
    hostSrc: "https://abdo-tech.me/Leon/",
  },
];

projectsCo.innerHTML = `

  ${ProjectsData.map(
    (project) => `
      <div>
        <figure>
          <img src="${
            project.imgSrc
          }" class="w-100 rounded-3" lazy="loading" alt="${project.name}">
          <div class="resources_links">
            ${
              project.hostSrc
                ? `
            <a href="${project.hostSrc}" target="_blank">
              <i class="bi bi-eye"></i>
            </a>
            `
                : ""
            }
            <a href="${project.codeSrc}" target="_blank">
              <i class="bi bi-code-slash"></i>
            </a>
          </div>
        </figure>
        <h6>${project.name}</h6>
        <p>${project.lang}</p>
      </div>
    `
  ).join("")}

`;















/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assets/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 290,
      density: {
        enable: true,
        value_area: 1500,
      },
    },
    color: {
      value: "#ccc",
    },
    shape: {
      type: "triangle",
      stroke: {
        width: 0,
        color: "#000000",
      },
      polygon: {
        nb_sides: 10,
      },
      image: {
        src: "img/github.svg",
        width: 100,
        height: 100,
      },
    },
    opacity: {
      value: 0.5,
      random: false,
      anim: {
        enable: false,
        speed: 1,
        opacity_min: 0.1,
        sync: false,
      },
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: false,
        speed: 40,
        size_min: 0.1,
        sync: false,
      },
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: "#fec966",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: false,
        rotateX: 600,
        rotateY: 1200,
      },
    },
  },
  interactivity: {
    detect_on: "window",
    events: {
      onhover: {
        enable: true,
        mode: "repulse",
      },
      onclick: {
        enable: false,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      grab: {
        distance: 140,
        line_linked: {
          opacity: 1,
        },
      },
      bubble: {
        distance: 400,
        size: 100,
        duration: 2,
        opacity: 8,
        speed: 3,
      },
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        particles_nb: 4,
      },
      remove: {
        particles_nb: 2,
      },
    },
  },
  retina_detect: true,
});
