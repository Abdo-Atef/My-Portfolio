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
  $(".contactDetails").slideToggle();
  showContactsToggleIcon.classList.toggle("fa-angle-up");
});


const projectsCo = document.getElementById("projectsCo");
const ProjectsData = [
  {
    name: "KinderLink Dashboard",
    lang: "React js",
    imgSrc: "assets/kinderLink_Dashboard.png",
    codeSrc: "https://github.com/Abdo-Atef/Daycare-dashboard",
    benaceSrc: "https://www.behance.net/gallery/202417727/Kinder-Link-Dashboard",
    youtubeSrc: "https://youtu.be/tWICZ91ybsw?si=Tk_jONNxOLTh1ypG",
  },
  {
    name: "KinderLink App (Mobile App)",
    lang: "React Native",
    imgSrc: "assets/kinderLink_app.png",
    codeSrc: "https://github.com/Abdo-Atef/Daycare-dashboard",
    benaceSrc: "https://www.behance.net/gallery/202515891/Kinder-Link-Mobile-App",
    youtubeSrc: "https://youtu.be/tWICZ91ybsw?si=Tk_jONNxOLTh1ypG",
  },
  {
    name: "Exclusive E-commerce",
    lang: "React js",
    imgSrc: "assets/Exclusive.webp",
    codeSrc: "https://github.com/Abdo-Atef/Exclusive",
    hostSrc: "https://exclusive-store1.vercel.app",
  },
  {
    name: "Pharmacy management system",
    lang: "React js",
    imgSrc: "assets/Pharmacy.webp",
    codeSrc:"https://github.com/Abdo-Atef/Pharmacy-inventory-management-system",
    youtubeSrc: "https://www.youtube.com/watch?v=T1TxiPJPPQg",
  },
  {
    name: "Movix",
    lang: "Next.js, Typescript, Tailwind",
    imgSrc: "assets/movix.webp",
    codeSrc: "https://github.com/Abdo-Atef/Movix",
    hostSrc: "https://movix1.vercel.app/",
  },
  {
    name: "Induz",
    lang: "React js, Tailwind",
    imgSrc: "assets/Induz.webp",
    codeSrc: "https://github.com/Abdo-Atef/Induz",
    hostSrc: "https://induz-ten.vercel.app/",
  },
  {
    name: "Notion",
    lang: "React Native",
    imgSrc: "assets/Notion.webp",
    codeSrc: "https://github.com/Abdo-Atef/Notion",
  },
  {
    name: "Hemma-Itqan",
    lang: "HTML, CSS, JS",
    imgSrc: "assets/hemma-itqan.webp",
    hostSrc: "https://hemma-itqan.com/",
  },
  {
    name: "To-Do-List App",
    lang: "HTML, CSS, JS",
    imgSrc: "assets/Todo.webp",
    codeSrc: "https://github.com/Abdo-Atef/To-Do-List",
    hostSrc: "https://abdo-atef.github.io/To-Do-List/",
  },

  {
    name: "AbdoFolio",
    lang: "HTML, CSS",
    imgSrc: "assets/AbdoFolio.webp",
    codeSrc: "https://github.com/Abdo-Atef/AbdoFolio",
    hostSrc: "https://abdo-atef.github.io/AbdoFolio/",
  },
  {
    name: "Simple Dashboard",
    lang: "HTML, CSS",
    imgSrc: "assets/Dashboard.webp",
    codeSrc: "https://github.com/Abdo-Atef/Dashboard",
    hostSrc: "https://abdo-atef.github.io/Dashboard/",
  },
  {
    name: "DevFolio",
    lang: "HTML, CSS, Bootstrap",
    imgSrc: "assets/DevFolio.webp",
    codeSrc: "https://github.com/Abdo-Atef/DevFolio",
    hostSrc: "https://abdo-atef.github.io/DevFolio/",
  },
  {
    name: "Danials",
    lang: "HTML, CSS, Bootstrap",
    imgSrc: "assets/Danials.webp",
    codeSrc: "https://github.com/Abdo-Atef/Danials",
    hostSrc: "https://abdo-atef.github.io/Danials/",
  },
  {
    name: "Games Website",
    lang: "HTML, CSS, JS",
    imgSrc: "assets/Game.webp",
    codeSrc: "https://github.com/Abdo-Atef/Game-oop",
    hostSrc: "https://abdo-atef.github.io/Game-oop/",
  },
  {
    name: "Yummy",
    lang: "HTML, CSS, JS",
    imgSrc: "assets/yummy.webp",
    codeSrc: "https://github.com/Abdo-Atef/Yummy",
    hostSrc: "https://abdo-atef.github.io/Yummy/",
  },
  {
    name: "Quiz App",
    lang: "HTML, CSS, JS",
    imgSrc: "assets/Quiz.webp",
    codeSrc: "https://github.com/Abdo-Atef/Quiz-App",
    hostSrc: "https://abdo-atef.github.io/Quiz-App/",
  },
  {
    name: "Bookmark App",
    lang: "HTML, CSS, JS",
    imgSrc: "assets/Bookmark.webp",
    codeSrc: "https://github.com/Abdo-Atef/Bookmark",
    hostSrc: "https://abdo-atef.github.io/Bookmark/",
  },
  {
    name: "Weather App",
    lang: "HTML, CSS, JS",
    imgSrc: "assets/Weather.webp",
    codeSrc: "https://github.com/Abdo-Atef/Weather-Project",
    hostSrc: "https://abdo-atef.github.io/Weather-Project/",
  },
  {
    name: "NFT_MarketPlace",
    lang: "React Native",
    imgSrc: "assets/NFT.webp",
    codeSrc: "https://github.com/Abdo-Atef/NFT_MarketPlace",
  },
  {
    name: "Kasper",
    lang: "HTML, CSS",
    imgSrc: "assets/Kasper.webp",
    codeSrc: "https://github.com/Abdo-Atef/Kasper",
    hostSrc: "https://abdo-atef.github.io/Kasper/",
  },
  {
    name: "Leon",
    lang: "HTML, CSS",
    imgSrc: "assets/Leon.webp",
    codeSrc: "https://github.com/Abdo-Atef/Leon",
    hostSrc: "https://abdo-atef.github.io/Leon/",
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
            </a> `
                : ""
            }
              
            ${
              project.codeSrc
                ? `
            <a href="${project.codeSrc}" target="_blank">
              <i class="bi bi-code-slash"></i>
            </a>`
                : ""
            }
              
            ${
              project.youtubeSrc
                ? `
            <a href="${project.youtubeSrc}" target="_blank">
              <i class='bx bxl-youtube fs-5'></i>
            </a>`
                : ""
            }

            ${
              project.benaceSrc
                ? `
            <a href="${project.benaceSrc}" target="_blank">
              <i class='bx bx-image fs-5' ></i>
            </a>`
                : ""
            }
                
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
