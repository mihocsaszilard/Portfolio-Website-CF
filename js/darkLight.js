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
.to-do, 
.information,
.social-info h1,
.social-info a  {
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
  border-bottom: 1px solid  rgb(187, 55, 62, 0.3);
  
}

.project-wrapper,
.information {
  box-shadow: rgb(187, 55, 62, 0.3) 5px 5px 15px !important;
}

.image-hero-area {
  background: url(img/bg-homeoffice.png) center center no-repeat;
  background-image: url(img/bg-homeoffice.png) center center no-repeat;
  background-size: cover;
  filter: invert(1);
}

.#main-bg {
  background-color: #fff;
}

.information {
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
  .to-do, 
  .information,
  .social-info img,
  .social-info h1,
  .social-info a {
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
    background: url(img/bg-homeoffice.png) center center no-repeat;
    background-image: url(img/bg-homeoffice.png) center center no-repeat;
    background-size: cover;
  }
  
  .#main-bg {
    background-color: #222;
  }
 
  .project-description {
    color: #ccc;
    border-bottom: 1px solid var(--turquoise-hightight);
  }

  .project-wrapper,
  .information {
    box-shadow: rgb(55, 187, 180, 0.3) 5px 5px 15px !important;
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
