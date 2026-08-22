/* =========================
   MOBILE NAVIGATION
========================= */

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");

  const icon = menuToggle.querySelector("i");

  if (nav.classList.contains("active")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav a").forEach(link => {

  link.addEventListener("click", () => {

    nav.classList.remove("active");

    const icon = menuToggle.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  });

});


/* =========================
   HEADER ON SCROLL
========================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 60) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* =========================
   MENU DATA
========================= */

const menuData = {

  starters: [

    {
      name: "Burrata & Roasted Tomatoes",
      description: "Creamy burrata, roasted tomatoes, basil oil.",
      price: "$16"
    },

    {
      name: "Crispy Calamari",
      description: "Lemon aioli, herbs, roasted pepper.",
      price: "$15"
    },

    {
      name: "Truffle Parmesan Fries",
      description: "Parmesan, herbs, truffle aioli.",
      price: "$11"
    },

    {
      name: "Seasonal Soup",
      description: "Chef's seasonal preparation.",
      price: "$10"
    }

  ],

  mains: [

    {
      name: "Charred Filet",
      description: "Herb butter, roasted vegetables, red wine jus.",
      price: "$38"
    },

    {
      name: "Seared Salmon",
      description: "Lemon beurre blanc, asparagus, crispy potatoes.",
      price: "$32"
    },

    {
      name: "Wild Mushroom Risotto",
      description: "Parmesan, roasted mushrooms, fresh herbs.",
      price: "$26"
    },

    {
      name: "Herb Roasted Chicken",
      description: "Garden vegetables, roasted potatoes, jus.",
      price: "$28"
    }

  ],

  desserts: [

    {
      name: "Chocolate Torte",
      description: "Dark chocolate, vanilla cream, seasonal berries.",
      price: "$12"
    },

    {
      name: "Vanilla Bean Cheesecake",
      description: "Berry compote, toasted almond.",
      price: "$11"
    },

    {
      name: "Seasonal Fruit Tart",
      description: "Fresh fruit, pastry cream, honey glaze.",
      price: "$10"
    }

  ],

  drinks: [

    {
      name: "Signature Lemon Spritz",
      description: "Citrus, sparkling water, fresh herbs.",
      price: "$9"
    },

    {
      name: "Berry Mojito",
      description: "Fresh berries, mint, lime, soda.",
      price: "$11"
    },

    {
      name: "Sparkling Citrus",
      description: "Fresh citrus, sparkling water.",
      price: "$7"
    },

    {
      name: "Espresso",
      description: "Freshly brewed premium espresso.",
      price: "$4"
    }

  ]

};


/* =========================
   RENDER MENU
========================= */

const menuItems = document.getElementById("menuItems");
const menuTabs = document.querySelectorAll(".menu-tab");

function renderMenu(category) {

  menuItems.innerHTML = "";

  menuData[category].forEach(item => {

    const element = document.createElement("article");

    element.className = "menu-item";

    element.innerHTML = `

      <div>
        <h3>${item.name}</h3>
        <p>${item.description}</p>
      </div>

      <span class="menu-price">
        ${item.price}
      </span>

    `;

    menuItems.appendChild(element);

  });

}

renderMenu("starters");


/* Menu tabs */

menuTabs.forEach(tab => {

  tab.addEventListener("click", () => {

    menuTabs.forEach(button => {
      button.classList.remove("active");
    });

    tab.classList.add("active");

    renderMenu(tab.dataset.category);

  });

});


/* =========================
   GALLERY LIGHTBOX
========================= */

const galleryItems = document.querySelectorAll(".gallery-item");
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

galleryItems.forEach(item => {

  item.addEventListener("click", () => {

    const image = item.querySelector("img");

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

  });

});


function closeLightbox() {

  lightbox.classList.remove("active");

  document.body.style.overflow = "";

}


lightboxClose.addEventListener("click", closeLightbox);

lightbox.addEventListener("click", event => {

  if (event.target === lightbox) {
    closeLightbox();
  }

});


document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeLightbox();
  }

});


/* =========================
   RESERVATION FORM
========================= */

const reservationForm =
  document.getElementById("reservationForm");

const formMessage =
  document.getElementById("formMessage");


reservationForm.addEventListener("submit", event => {

  event.preventDefault();

  const name =
    document.getElementById("name").value.trim();

  if (!name) {
    formMessage.textContent =
      "Please enter your name.";

    return;
  }


  formMessage.textContent =
    `Thank you, ${name}! Your reservation request has been received. We'll be in touch shortly.`;

  reservationForm.reset();

});


/* =========================
   DATE VALIDATION
========================= */

const dateInput = document.getElementById("date");

const today = new Date();

const year = today.getFullYear();

const month =
  String(today.getMonth() + 1).padStart(2, "0");

const day =
  String(today.getDate()).padStart(2, "0");

dateInput.min = `${year}-${month}-${day}`;


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
  document.querySelectorAll(".reveal");


const revealObserver =
  new IntersectionObserver(

    entries => {

      entries.forEach(entry => {

        if (entry.isIntersecting) {

          entry.target.classList.add("visible");

          revealObserver.unobserve(entry.target);

        }

      });

    },

    {
      threshold: 0.12
    }

  );


revealElements.forEach(element => {

  revealObserver.observe(element);

});


/* =========================
   BACK TO TOP
========================= */

const backToTop =
  document.getElementById("backToTop");


window.addEventListener("scroll", () => {

  if (window.scrollY > 700) {

    backToTop.classList.add("show");

  } else {

    backToTop.classList.remove("show");

  }

});


backToTop.addEventListener("click", () => {

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

});


/* =========================
   VIDEO FALLBACK
========================= */

const videos =
  document.querySelectorAll("video");


videos.forEach(video => {

  video.addEventListener("error", () => {

    video.style.display = "none";

  });

});


/* =========================
   SMOOTH ANCHOR FALLBACK
========================= */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const targetId =
      link.getAttribute("href");

    if (
      targetId === "#" ||
      !document.querySelector(targetId)
    ) {
      return;
    }

    event.preventDefault();

    document.querySelector(targetId).scrollIntoView({
      behavior: "smooth"
    });

  });

});
