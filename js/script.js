document.addEventListener("DOMContentLoaded", function () {

  const links = document.querySelectorAll(".sidebar a");
  const pages = document.querySelectorAll(".page");
  const sidebar = document.getElementById("sidebar");

  // ✅ Restore last selected topic
  const savedPage = localStorage.getItem("currentPage") || "introduction";
  showPage(savedPage);

  // ✅ Restore sidebar state (collapsed or not)
  const sidebarState = localStorage.getItem("sidebarCollapsed");
  if (sidebarState === "true") {
    sidebar.classList.add("collapsed");
  }

  // ✅ Sidebar link click
  links.forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault();

      const pageId = this.getAttribute("data-page");
      showPage(pageId);

      // Auto close sidebar on mobile
      if (window.innerWidth <= 1024) {
        sidebar.classList.remove("show");
      }
    });
  });

  // ✅ Close sidebar if clicked outside (mobile)
  document.addEventListener("click", function (e) {
    if (
      window.innerWidth <= 1024 &&
      sidebar.classList.contains("show") &&
      !sidebar.contains(e.target) &&
      !e.target.classList.contains("hamburger")
    ) {
      sidebar.classList.remove("show");
    }
  });

});


// ✅ Show Page Function
function showPage(pageId) {

  const links = document.querySelectorAll(".sidebar a");
  const pages = document.querySelectorAll(".page");

  links.forEach(l => l.classList.remove("active"));
  pages.forEach(p => p.classList.remove("active"));

  const activeLink = document.querySelector(`[data-page="${pageId}"]`);
  const activePage = document.getElementById(pageId);

  if (activeLink && activePage) {
    activeLink.classList.add("active");
    activePage.classList.add("active");
    localStorage.setItem("currentPage", pageId);
  }
}


// ✅ Hamburger Toggle (Desktop + Mobile)
function toggleSidebar() {

  const sidebar = document.getElementById("sidebar");

  if (window.innerWidth <= 1024) {
    // Mobile → Slide open
    sidebar.classList.toggle("show");
  } else {
    // Desktop → Collapse mode
    sidebar.classList.toggle("collapsed");

    // Save state
    const isCollapsed = sidebar.classList.contains("collapsed");
    localStorage.setItem("sidebarCollapsed", isCollapsed);
  }
}


// ✅ Open Editor Function
function openEditorFromExample(button, topic) {

  const exampleBox = button.closest(".example-box");
  const codeBlock = exampleBox.querySelector("pre");

  const temp = document.createElement("textarea");
  temp.innerHTML = codeBlock.innerHTML.trim();
  const cleanCode = temp.value;

  localStorage.setItem("editorCode", cleanCode);
  localStorage.setItem("currentPage", topic);

  window.location.href = "editor.html";
}