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


// ------------------ Projects Section -----------------------
const projectsCo = document.getElementById("projectsCo");
const projectsFilter = document.getElementById("projectsFilter");

const getProjectCategory = (project) => {
  const lang = project.lang.toLowerCase();

  if (lang.includes("next")) return "next.js";
  if (lang.includes("react js")) return "react.js";
  if (lang.includes("react native")) return "react-native";
  if (lang.includes("html")) return "html-css-js";

  return "";
};

const parseProjectDate = (value) => {
  const [month, year] = value.split("/").map(Number);
  return new Date(year, month - 1, 1).getTime();
};

const renderProjects = (filter = "all") => {
  if (!projectsCo) return;

  let visibleProjects = [...ProjectsData];

  if (filter === "react.js") {
    visibleProjects = visibleProjects.filter(
      (project) => getProjectCategory(project) === "react.js"
  );
  } else if (filter === "next.js") {
    visibleProjects = visibleProjects.filter(
      (project) => getProjectCategory(project) === "next.js"
  );
  } else if (filter === "react-native") {
    visibleProjects = visibleProjects.filter(
      (project) => getProjectCategory(project) === "react-native"
  );
  } else if (filter === "html-css-js") {
    visibleProjects = visibleProjects.filter(
      (project) => getProjectCategory(project) === "html-css-js"
    );
  } else if (filter === "date") {
    visibleProjects.sort(
      (a, b) => parseProjectDate(b.createdAt) - parseProjectDate(a.createdAt)
    );
  }

  projectsCo.innerHTML = `
    ${visibleProjects
      .map(
        (project) => `
          <div class="project-card">
            <figure>
              <img src="${project.imgSrc}" class="w-100 rounded-3" lazy="loading" alt="${project.name}">
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
            <div class="project-info">
              <h6>${project.name}</h6>
              <div class="project-details">
                <p>${project.lang}</p>
                <div class="project-date">
                  <i class="bi bi-calendar2-week"></i>
                  ${project.createdAt}
                </div>
              </div>
            </div>
          </div>
        `
      )
      .join("")}
  `;
};

renderProjects();

if (projectsFilter) {
  projectsFilter.addEventListener("change", (event) => {
    renderProjects(event.target.value);
  });
}

