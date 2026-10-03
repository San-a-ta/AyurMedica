/**
 * AyurMedica - Main Application Controller
 * Handles Navigation, State Persistence, Academic Year Filters, and Global Search
 */
window.App = {
  state: {
    activeYear: localStorage.getItem("bams_active_year") || "All",
    activeTab: "practicals",
    searchQuery: "",
    isDarkMode: localStorage.getItem("bams_dark_mode") === "true",
    bookmarkedIds: new Set(JSON.parse(localStorage.getItem("bams_bookmarks") || "[]"))
  },

  init: function() {
    // Apply Dark Mode Preference
    if (this.state.isDarkMode) {
      document.body.classList.add("dark-mode");
    }

    this.setupEventListeners();
    this.updateYearPillsUI();
    this.renderCurrentView();
  },

  setupEventListeners: function() {
    const self = this;

    // Year Selector Buttons
    document.querySelectorAll(".year-pill").forEach(btn => {
      btn.addEventListener("click", function() {
        const year = this.getAttribute("data-year");
        self.setYear(year);
      });
    });

    // Navigation Tab Buttons
    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      btn.addEventListener("click", function() {
        const tab = this.getAttribute("data-tab");
        self.switchTab(tab);
      });
    });

    // Global Search Input
    const searchInput = document.getElementById("global-search-input");
    if (searchInput) {
      searchInput.addEventListener("input", function(e) {
        self.state.searchQuery = e.target.value;
        self.renderCurrentView();
      });
    }

    // Clear Search Button
    const clearSearchBtn = document.getElementById("btn-clear-search");
    if (clearSearchBtn) {
      clearSearchBtn.addEventListener("click", function() {
        if (searchInput) searchInput.value = "";
        self.state.searchQuery = "";
        self.renderCurrentView();
      });
    }

    // Theme Toggle (Dark/Light)
    const themeBtn = document.getElementById("btn-theme-toggle");
    if (themeBtn) {
      themeBtn.addEventListener("click", function() {
        self.state.isDarkMode = !self.state.isDarkMode;
        localStorage.setItem("bams_dark_mode", self.state.isDarkMode);
        if (self.state.isDarkMode) {
          document.body.classList.add("dark-mode");
        } else {
          document.body.classList.remove("dark-mode");
        }
      });
    }

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById("btn-mobile-menu");
    const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
    if (mobileMenuBtn && mobileNavDrawer) {
      mobileMenuBtn.addEventListener("click", function() {
        mobileNavDrawer.classList.toggle("hidden");
      });
    }

    // Print Button
    const printBtn = document.getElementById("btn-print-page");
    if (printBtn) {
      printBtn.addEventListener("click", function() {
        window.print();
      });
    }
  },

  setYear: function(year) {
    this.state.activeYear = year;
    localStorage.setItem("bams_active_year", year);
    this.updateYearPillsUI();
    this.renderCurrentView();
  },

  updateYearPillsUI: function() {
    const currentYear = this.state.activeYear;
    document.querySelectorAll(".year-pill").forEach(btn => {
      if (btn.getAttribute("data-year") === currentYear) {
        btn.classList.add("active");
        btn.classList.remove("bg-white", "dark:bg-[#1c2922]", "text-gray-700", "dark:text-gray-300");
      } else {
        btn.classList.remove("active");
        btn.classList.add("bg-white", "dark:bg-[#1c2922]", "text-gray-700", "dark:text-gray-300");
      }
    });

    const activeYearIndicator = document.getElementById("active-year-label");
    if (activeYearIndicator) {
      activeYearIndicator.textContent = currentYear === "All" ? "All Professional Years" : currentYear;
    }
  },

  switchTab: function(tabName, optionalParam) {
    this.state.activeTab = tabName;

    // Update Tab Buttons UI
    document.querySelectorAll(".nav-tab-btn").forEach(btn => {
      if (btn.getAttribute("data-tab") === tabName) {
        btn.classList.add("active");
      } else {
        btn.classList.remove("active");
      }
    });

    // Close mobile menu if open
    const mobileNavDrawer = document.getElementById("mobile-nav-drawer");
    if (mobileNavDrawer && !mobileNavDrawer.classList.contains("hidden")) {
      mobileNavDrawer.classList.add("hidden");
    }

    this.renderCurrentView(optionalParam);
    window.scrollTo({ top: 0, behavior: "smooth" });
  },

  renderCurrentView: function(extraArg) {
    const contentArea = "main-content-area";
    const year = this.state.activeYear;
    const query = this.state.searchQuery;

    switch (this.state.activeTab) {
      case "practicals":
        if (window.PracticalViewer) {
          window.PracticalViewer.render(contentArea, year, query);
        }
        break;

      case "demos":
        if (window.DemoPlayer) {
          window.DemoPlayer.render(contentArea, year, extraArg);
        }
        break;

      case "pyqs":
        if (window.PYQViewer) {
          window.PYQViewer.render(contentArea, year, query);
        }
        break;

      case "summaries":
        if (window.SummaryViewer) {
          window.SummaryViewer.render(contentArea, year, query);
        }
        break;

      case "syllabus":
        if (window.SyllabusViewer) {
          window.SyllabusViewer.render(contentArea, year);
        }
        break;

      case "flashcards":
        if (window.FlashcardsViewer) {
          window.FlashcardsViewer.render(contentArea, year);
        }
        break;

      case "dictionary":
        if (window.DictionaryViewer) {
          window.DictionaryViewer.render(contentArea, year, query);
        }
        break;

      default:
        if (window.PracticalViewer) {
          window.PracticalViewer.render(contentArea, year, query);
        }
    }
  }
};

// Bootstrap on DOM Ready
document.addEventListener("DOMContentLoaded", () => {
  window.App.init();
});
