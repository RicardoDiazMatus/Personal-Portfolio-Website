/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName("skills__content");
skillsHeader = document.querySelectorAll(".skills__header");

function toggleSkills() {
  let itemClass = this.parentNode.className;

  for (i = 0; i < skillsContent.length; i++) {
    skillsContent[i].className = "skills__content skills__close";
  }
  if (itemClass === "skills__content skills__close") {
    this.parentNode.className = "skills__content skills__open";
  }
}

skillsHeader.forEach((el) => {
  el.addEventListener("click", toggleSkills);
});

/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll("[data-target]"),
  tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("qualification__active");
    });
    target.classList.add("qualification__active");

    tabs.forEach((tab) => {
      tab.classList.remove("qualification__active");
    });
    tab.classList.add("qualification__active");
  });
});

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll(".services__modal"),
  modalBtns = document.querySelectorAll(".services__button"),
  modalCloses = document.querySelectorAll(".services__modal-close");

let modal = function (modalClick) {
  modalViews[modalClick].classList.add("active-modal");
};

modalBtns.forEach((modalBtn, i) => {
  modalBtn.addEventListener("click", () => {
    modal(i);
  });
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener("click", () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove("active-modal");
    });
  });
});

/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
  loop: true,
  grabCursor: true,
  spaceBetween: 48,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  breakpoints: {
    568: {
      slidesPerView: 2,
    },
  },
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    const navLink = document.querySelector(".nav__menu a[href*=" + sectionId + "]");

    if (navLink) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add("active-link");
      } else {
        navLink.classList.remove("active-link");
      }
    }
  });
}

window.addEventListener("scroll", scrollActive);

/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
  const nav = document.getElementById("header");
  // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
  if (this.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

/*==================== SHOW SCROLL UP ====================*/
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the tag with the scroll
  if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "uil-sun";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "uil-moon" : "uil-sun";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "uil-moon" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});

// // Send Email
// const contactForm = document.getElementById('contact-form'),     
//       contactMessage = document.getElementById('contact-message')

// const sendEmail =(e) =>{
//   e.preventDefault()

//                     //serviceID -- templateID  -- #form -- publickKey
//   emailjs.sendForm ('service_p0t6ggn','template_31znfe8','#contact-form','_a4CMPTvrfoUThyjd')
//   .then(() =>{

//       contactMessage.textContent = 'Mensaje Enviado Correctamente ✅'

//       setTimeout(() =>{
//             contactMessage.textContent=''
//       }, 5000)

//       contactForm.reset()
  
//     },() =>{
//       contactMessage.textContent = 'Mensaje No Enviado (Error de Servicio) ❌'

//     })


// }

// contactForm.addEventListener('submit', sendEmail)

// Send Email
const contactForm = document.getElementById('contact-form');
const contactMessage = document.getElementById('contact-message');

const sendEmail = (e) => {
  e.preventDefault();

  // serviceID -- templateID -- #form -- publicKey
  emailjs.sendForm('service_p0t6ggn', 'template_31znfe8', '#contact-form', '_a4CMPTvrfoUThyjd')
    .then(() => {
      // Muestra el mensaje de éxito
      contactMessage.textContent = 'Mensaje Enviado Correctamente ✅';
      contactMessage.style.display = 'block';

      // Oculta el mensaje después de 5 segundos (5000 milisegundos)
      setTimeout(() => {
        contactMessage.style.display = 'none';
        contactMessage.textContent = '';
      }, 5000);

      // Reinicia el formulario
      contactForm.reset();
    }, () => {
      // Muestra el mensaje de error
      contactMessage.textContent = 'Mensaje No Enviado (Error de Servicio) ❌';
      contactMessage.style.display = 'block';

      // Oculta el mensaje después de 5 segundos (5000 milisegundos)
      setTimeout(() => {
        contactMessage.style.display = 'none';
        contactMessage.textContent = '';
      }, 5000);
    });
}

contactForm.addEventListener('submit', sendEmail);

//Fields Validation Name and Email
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contact-form');
  const contactMessage = document.getElementById('contact-message');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const nameSuccess = document.getElementById('name-success');
  const emailSuccess = document.getElementById('email-success');

  const regexPatterns = {
    name: /^[A-ZÁÉÍÓÚÑ][a-záéíóúñA-ZÁÉÍÓÚÑ\s]*$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  };

  const showError = (element, message) => {
    element.textContent = message;
  };

  const showSuccess = (element) => {
    element.innerHTML = '<i class="fa-solid fa-square-check" style="color: #1e9f4b;"></i>';
  };

  const clearFeedback = (errorElement, successElement) => {
    errorElement.textContent = '';
    successElement.innerHTML = '';
  };

  const validateName = () => {
    const nameValue = nameInput.value.trim();

    if (nameValue === '') {
      showError(nameError, 'Su Nombre Completo es requerido.');
      nameSuccess.innerHTML = '';
      return false;
   
    } else if (!regexPatterns.name.test(nameValue)) {
      showError(nameError, 'La Primer letra de su Nombre debe ser Mayúscula');
      nameSuccess.innerHTML = '';
      return false;
    } else if (nameValue.length < 3) {
      showError(nameError, 'Su Nombre mínimo 3 caracteres.');
      nameSuccess.innerHTML = '';
      return false;
    } else {
      clearFeedback(nameError, nameSuccess);
      showSuccess(nameSuccess);
      return true;
    }
  };

  const validateEmail = () => {
    const emailValue = emailInput.value.trim();

    if (emailValue === '') {
      showError(emailError, 'Su Email es requerido');
      emailSuccess.innerHTML = '';
      return false;
    } else if (!regexPatterns.email.test(emailValue)) {
      showError(emailError, 'Su Email NO es válido');
      emailSuccess.innerHTML = '';
      return false;
    } else {
      clearFeedback(emailError, emailSuccess);
      showSuccess(emailSuccess);
      return true;
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const isNameValid = validateName();
    const isEmailValid = validateEmail();

    if (isNameValid && isEmailValid) {
      emailjs.sendForm('service_p0t6ggn', 'template_31znfe8', '#contact-form', '_a4CMPTvrfoUThyjd')
        .then(() => {
          contactMessage.innerHTML = 'Mensaje Enviado Correctamente ✅';
          setTimeout(() => {
            contactMessage.textContent = '';
          }, 5000);
          contactForm.reset();
          clearFeedback(nameError, nameSuccess);
          clearFeedback(emailError, emailSuccess);
        }, () => {
          contactMessage.textContent = 'Mensaje No Enviado (Error de Servicio) ❌';
        });
    }
  };

  const adjustWidth = (element) => {
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.whiteSpace = 'nowrap';
    document.body.appendChild(span);
    span.innerHTML = element.value || element.placeholder;
    element.style.width = `${span.offsetWidth}px`;
    document.body.removeChild(span);
  };

  nameInput.addEventListener('input', (e) => {
    adjustWidth(e.target);
    validateName();
  });

  emailInput.addEventListener('input', (e) => {
    adjustWidth(e.target);
    validateEmail();
  });

  contactForm.addEventListener('submit', sendEmail);
});

//Efecto de Desplazamiento Scrollup desde la Derecha
const scrollUpButton = document.querySelector('.scrollup');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollUpButton.classList.add('active');
  } else {
    scrollUpButton.classList.remove('active');
  }
});

scrollUpButton.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   const contactForm = document.getElementById('contact-form');
//   const contactMessage = document.getElementById('contact-message');
//   const nameInput = document.getElementById('contact-name');
//   const emailInput = document.getElementById('contact-email');
//   const nameError = document.getElementById('name-error');
//   const emailError = document.getElementById('email-error');
//   const nameSuccess = document.getElementById('name-success');
//   const emailSuccess = document.getElementById('email-success');

//   const validateName = () => {
//     const nameValue = nameInput.value.trim();
//     const nameRegex = /^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/;
    
//     if (nameValue === '') {
//       nameError.textContent = 'Su Nombre Completo es requerido.';
//       nameSuccess.innerHTML = '';
//       return false;
//     } else if (!nameRegex.test(nameValue)) {
//       nameError.textContent = 'Su Nombre Completo NO es válido';
//       nameSuccess.innerHTML = '';
//       return false;
//     } else if (nameValue.length < 3) {
//       nameError.textContent = 'Su Nombre mínimo 3 caracteres.';
//       nameSuccess.innerHTML = '';
//       return false;
//     } else {
//       nameError.textContent = '';
//       nameSuccess.innerHTML = '<i class="fa-solid fa-square-check" style="color: #1e9f4b;"></i>';
//       return true;
//     }
//   };

//   const validateEmail = () => {
//     const emailValue = emailInput.value.trim();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (emailValue === '') {
//       emailError.textContent = 'Su Email es requerido.';
//       emailSuccess.innerHTML = '';
//       return false;
//     } else if (!emailRegex.test(emailValue)) {
//       emailError.textContent = 'Su Email NO es válido.';
//       emailSuccess.innerHTML = '';
//       return false;
//     } else {
//       emailError.textContent = '';
//       emailSuccess.innerHTML = '<i class="fa-solid fa-square-check" style="color: #1e9f4b;"></i>';
//       return true;
//     }
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();
    
//     const isNameValid = validateName();
//     const isEmailValid = validateEmail();

//     if (isNameValid && isEmailValid) {
//       // Lógica para enviar el formulario
//       emailjs.sendForm('service_p0t6ggn', 'template_31znfe8', '#contact-form', '_a4CMPTvrfoUThyjd')
//         .then(() => {
//           contactMessage.innerHTML = 'Mensaje Enviado Correctamente ✅';
//           setTimeout(() => {
//             contactMessage.textContent = '';
//           }, 5000);
//           contactForm.reset();
//           nameSuccess.innerHTML = '';
//           emailSuccess.innerHTML = '';
//         }, () => {
//           contactMessage.textContent = 'Mensaje No Enviado (Error de Servicio) ❌';
//         });
//     }
//   };
//   // Adjust email input width dynamically
//   const adjustWidth = (element) => {
//     const span = document.createElement('span');
//     span.style.visibility = 'hidden';
//     span.style.position = 'absolute';
//     span.style.whiteSpace = 'nowrap';
//     document.body.appendChild(span);
//     span.innerHTML = element.value || element.placeholder;
//     element.style.width = `${span.offsetWidth}px`;
//     document.body.removeChild(span);
//   };

//   nameInput.addEventListener('input', (e) => {
//     adjustWidth(e.target);
//     validateName();
//   });

//   emailInput.addEventListener('input', (e) => {
//     adjustWidth(e.target);
//     validateEmail();
//   }); 

//   contactForm.addEventListener('submit', sendEmail);
// });