const fsfw_click = document.getElementById("fsfw-click");
const sat_click = document.getElementById("sat-click");
const sat_content = document.getElementById("sat-rs-content");
const fsfw_content = document.getElementById("fsfw-content");

fsfw_click.addEventListener("click", () => {
  fsfw_content.style.display = "flex";
  sat_content.style.display = "none";
});

sat_click.addEventListener("click", () => {
  fsfw_content.style.display = "none";
  sat_content.style.display = "flex";
});
