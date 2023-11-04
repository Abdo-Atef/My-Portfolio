/*------------------NavBar ----------------------- */
const lists =  document.querySelectorAll('.mainSection .list button')
const sections =  document.querySelectorAll('.mainSection section')

for (let i = 0; i < lists.length; i++) {
  lists[i].addEventListener('click', ()=>{
    for (let i = 0; i < lists.length; i++) {
      lists[i].classList.remove('active');
      sections[i].classList.add('d-none');
    }
    lists[i].classList.add('active');
    sections[i].classList.remove('d-none');
    window.scrollTo(0, 0);
  })
}


const aside = document.querySelector('aside')
const contactsToggle = document.querySelector('aside .showContactsToggle')
const contactDetails = document.querySelector('aside .contactDetails')
const showContactsToggleIcon = document.querySelector('aside .showContactsToggleIcon')

contactsToggle.addEventListener('click', ()=>{
  aside.classList.toggle('active')
  contactDetails.classList.toggle('opacity-100')
  showContactsToggleIcon.classList.toggle('fa-angle-up')
})





































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