
    const fsfw_click = document.getElementById("fsfw-click");
    const sat_click = document.getElementById("sat-click");
    const sat_content = document.getElementById("sat-rs-content");
    const fsfw_content = document.getElementById("fsfw-content");
  
    fsfw_click.addEventListener("click", () => {
        console.log("Clicked on FSFW");
        fsfw_content.classList.remove("hidden");
        fsfw_content.classList.add("visible");
      
        sat_content.classList.remove("visible");
        sat_content.classList.add("hidden");
      });
      
      sat_click.addEventListener("click", () => {
        console.log("Clicked on sat-rs"); // Check if the click event is triggered
        fsfw_content.classList.remove("visible");
        fsfw_content.classList.add("hidden");
      
        sat_content.classList.remove("hidden");
        sat_content.classList.add("visible");
        console.log("fsfw_content.classList:", fsfw_content.classList); // Check the class changes
      });
      