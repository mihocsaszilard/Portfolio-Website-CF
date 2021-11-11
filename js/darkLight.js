const dark = document.getElementById("dark");
const light = document.getElementById("light");

lightMode = () => {
  var styles = `
html,
.social-info,
.cinemapp-heading {
  filter: invert(1);
}

.project-list__item,
.information,
.image-hero-area,
#poster,
#hero,
.cinemapp-study-img,
.cinemapp-study-logo,
.resume-img,
.profile__picture-wrapper {
  filter: invert(1);
}
`;

  var styleSheet = document.createElement("style");
  styleSheet.innerHTML = styles;
  document.head.appendChild(styleSheet);
};

darkMode = () => {
  var styles = `
  html,
  .social-info,
  .cinemapp-heading {
    filter: invert(0);
  }
  
  .project-list__item,
  .information,
  .image-hero-area,
  #poster,
  #hero,
  .cinemapp-study-img,
  .cinemapp-study-logo,
  .resume-img,
  .profile__picture-wrapper {
    filter: invert(0);
  }
  `;

  var styleSheet = document.createElement("style");
  styleSheet.innerHTML = styles;
  document.head.appendChild(styleSheet);
};
