const dark = document.getElementById("dark");
const light = document.getElementById("light");

//----------------------------impressum and resume mobile view body doesn't change

lightMode = () => {
  var styles = `
html,
.cinemapp-heading,
.project-container,
.project-list__item h3,
.project-list__item a,
.pokedex,
.pokedex-bootstrap,
.quote,
.markdown,
.to-do{
  filter: invert(1);
}

@meida and (max-width: 1199px){
#workHtml,
#impressumBody {
  background-image: linear-gradient( to bottom right, #fff, #fff );
}
}

@media and (max-width: 1200px){
#impressumBody {
  background-image: linear-gradient( to bottom right, #fff, #fff );
}
}

.project-description {
  color: #888;
}

.image-hero-area {
  background-image: url(img/bg-homeoffice-inverted.png) center center no-repeat;
  background-size: cover;
}

.#main-bg {
  background-color: #fff;
}

.information {
  background-image: url(img/cover-photo-inverted.png);
  filter: invert(1);
}

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
  .cinemapp-heading,
  .project-container,
  .project-description,
  .project-list__item h3,
  .project-list__item a,
  .meetME,
  .pokedex,
  .pokedex-bootstrap,
  .quote,
  .markdown,
  .to-do{
    filter: invert(0);
  }
  
  @meida and (max-width: 1199px){
    #workHtml,
    #impressumBody {
      background-image: linear-gradient( to bottom right, rgba(6, 1, 1, 0.9), rgba(6, 1, 1, 0.95) );
    }
    }
    
    @media and (max-width: 1200px){
    #impressumBody,
    .impressum{
      background-image: linear-gradient( to bottom right, rgba(6, 1, 1, 0.9), rgba(6, 1, 1, 0.95) );
    }
    }

  .image-hero-area {
    background-image: url(img/bg-homeoffice.png) center center no-repeat;
    background-size: cover;
  }
  
  .#main-bg {
    background-color: #222;
  }
 
  .project-description {
    color: #ccc;
  }
  
  .information {
    background-image: url(img/cover-photo.png);
    filter: invert(0);
  }

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
