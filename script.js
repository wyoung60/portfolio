const profileLinks = document.querySelectorAll(".profileLinks");
const bodyContent = document.querySelector(".bodyContent");

for (link of profileLinks) {
  link.addEventListener("click", function () {
    switch (this.getAttribute("value")) {
      case "bio":
        bioLayout();
        break;
      case "projects":
        projectLayout();
        break;
      case "contact":
        contactLayout();
        break;
      default:
        break;
    }
  });
}

function bioLayout() {}

function projectLayout() {}

function contactLayout() {}
