// ===============================
// Burger menu toggle
// ===============================
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

if (burger && mobileMenu) {
  burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // ✅ Tutup otomatis setelah klik link di mobile menu
  document.querySelectorAll("#mobileMenu a").forEach(link => {
    link.addEventListener("click", () => {
      mobileMenu.classList.add("hidden");
    });
  });
}

// ===============================
// Typing effect
// ===============================
var typed = new Typed("#typed", {
  strings: ["Teknik Informatika","UNISKA (Universitas Islam Kalimantan)"],
  typeSpeed: 80,
  backSpeed: 50,
  loop: true,
});

// ===============================
// Fade-in on scroll
// ===============================
const faders = document.querySelectorAll(".fade-in");
const appearOptions = { threshold: 0.2 };

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((fader) => appearOnScroll.observe(fader));

// ===============================
// Lottie Animation
// ===============================
lottie.loadAnimation({
  container: document.getElementById("hero-anim"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "assets/animasi/GoLife.json",
});

// ===============================
// ScrollSpy untuk navbar
// ===============================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
const header = document.querySelector("nav");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(current)) {
      link.classList.add("active");
    }
  });

  // ✅ Navbar behavior
  if (window.innerWidth > 768) {
    // Desktop → transparan saat scroll
    if (window.scrollY > 50) {
      header.style.background = "rgba(15, 23, 42, 0.8)";
      header.style.backdropFilter = "blur(12px)";
    } else {
      header.style.background = "rgba(15, 23, 42, 0.3)";
      header.style.backdropFilter = "blur(12px)";
    }
  } else {
    // Mobile → selalu solid
    header.style.background = "rgba(15, 23, 42, 0.95)";
    header.style.backdropFilter = "blur(12px)";
  }
});

// ===============================
// Animasi Rise on Scroll
// ===============================
const riseElements = document.querySelectorAll(".rise");

const riseObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });

riseElements.forEach((el) => riseObserver.observe(el));

// ===============================
// Counter Animation
// ===============================
const counters = document.querySelectorAll(".counter");
const speed = 200;

const animateCounters = () => {
  counters.forEach((counter) => {
    const updateCount = () => {
      const target = +counter.getAttribute("data-target");
      const count = +counter.innerText;
      const increment = Math.ceil(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 40);
      } else {
        counter.innerText = target;
      }
    };
    updateCount();
  });
};

const counterObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateCounters();
      observer.disconnect();
    }
  });
}, { threshold: 0.4 });

counters.forEach(counter => counterObserver.observe(counter));

// ===============================
// Tab Portfolio
// ===============================
const tabBtns = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    tabBtns.forEach((b) => b.classList.remove("active"));
    tabContents.forEach((c) => c.classList.add("hidden"));

    btn.classList.add("active");
    const target = document.getElementById(btn.dataset.tab);
    if (target) target.classList.remove("hidden");
  });
});

// ===============================
// Show More / Show Less Certificates
// ===============================
const showMoreBtn = document.getElementById("showMoreBtn");
const extras = document.querySelectorAll(".extra");

if (showMoreBtn) {
  showMoreBtn.addEventListener("click", () => {
    extras.forEach((cert) => cert.classList.toggle("hidden"));
    showMoreBtn.textContent =
      showMoreBtn.textContent === "Show More" ? "Show Less" : "Show More";
  });
}

// === Show More Projects ===
const showMoreProjectsBtn = document.getElementById("showMoreProjects");
const projectsGrid = document.querySelector("#projects");
const extraProjects = projectsGrid ? projectsGrid.querySelectorAll(".extra") : [];

if (extraProjects.length > 0 && showMoreProjectsBtn) {
  showMoreProjectsBtn.addEventListener("click", () => {
    extraProjects.forEach((proj) => proj.classList.toggle("hidden"));
    showMoreProjectsBtn.textContent =
      showMoreProjectsBtn.textContent === "Show More" ? "Show Less" : "Show More";
  });
} else if (showMoreProjectsBtn) {
  // sembunyikan tombol jika tidak ada project lebih dari 3
  showMoreProjectsBtn.style.display = "none";
}

// ===============================
// Modal Certificates with Animation
// ===============================
const certModal = document.getElementById("certModal");
const certImage = document.getElementById("certImage");
const caption = document.getElementById("caption");
const closeBtn = document.querySelector(".close");

document.querySelectorAll(".cert-img").forEach((img) => {
  img.addEventListener("click", () => {
    certImage.src = img.src;
    caption.textContent = img.alt;

    certModal.classList.remove("hidden", "hide");
    certModal.classList.add("show");
  });
});

function closeCertModal() {
  certModal.classList.remove("show");
  certModal.classList.add("hide");

  setTimeout(() => {
    certModal.classList.add("hidden");
    certModal.classList.remove("hide");
  }, 300);
}

if (closeBtn) {
  closeBtn.addEventListener("click", closeCertModal);
}

if (certModal) {
  certModal.addEventListener("click", (e) => {
    if (e.target === certModal) closeCertModal();
  });
}


