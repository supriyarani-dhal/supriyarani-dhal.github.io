document.getElementById("toggleBtn").addEventListener("click", function () {
  const projectItems = document.querySelectorAll(".project-item");
  const isShowingMore = this.textContent === "Show Less";

  // Show or hide additional projects
  projectItems.forEach((item, index) => {
    if (index >= 4) {
      item.classList.toggle("d-none", isShowingMore); // Hide if 'Show Less'
    }
  });

  // Toggle button text
  this.textContent = isShowingMore ? "Show More" : "Show Less";
});
