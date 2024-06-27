// Language toggle functionality
const languageToggle = document.getElementById("languageToggle");
let currentLanguage = "en";

languageToggle.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "es" : "en";
  updateLanguage();
  languageToggle.textContent = currentLanguage === "en" ? "ES" : "EN";
});

function updateLanguage() {
  document.querySelectorAll("[data-en]").forEach((elem) => {
    elem.textContent = elem.getAttribute(`data-${currentLanguage}`);
  });
}

// Welcome message
function getGreeting() {
  const hour = new Date().getHours();
  let greeting;

  if (currentLanguage === "en") {
    if (hour < 12) {
      greeting = "Good morning";
    } else if (hour < 18) {
      greeting = "Good afternoon";
    } else {
      greeting = "Good evening";
    }
    console.log(`${greeting}! Thanks for visiting my portfolio.`);
  } else {
    if (hour < 12) {
      greeting = "Buenos días";
    } else if (hour < 18) {
      greeting = "Buenas tardes";
    } else {
      greeting = "Buenas noches";
    }
    console.log(`${greeting}! Gracias por visitar mi portafolio.`);
  }
}

// Initial call to set the greeting
getGreeting();

// Update greeting when language changes
languageToggle.addEventListener("click", getGreeting);

// PDF Download functionality
const downloadPDF = document.getElementById("downloadPDF");

downloadPDF.addEventListener("click", () => {
  const element = document.getElementById("portfolio-content");
  const opt = {
    margin: 10,
    filename: "portfolio.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  // Temporarily hide elements not needed in PDF
  const elementsToHide = document.querySelectorAll("nav");
  elementsToHide.forEach((el) => (el.style.display = "none"));

  // Generate PDF
  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .then(() => {
      // Restore hidden elements
      elementsToHide.forEach((el) => (el.style.display = ""));
    });
});
