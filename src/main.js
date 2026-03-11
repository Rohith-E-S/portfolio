import './style.css';

// Theme Configuration
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;

// Function to get the preferred theme
function getPreferredTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    return savedTheme;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

// Set initial theme
function setTheme(theme) {
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
}

// Initialize theme on load
setTheme(getPreferredTheme());

// Listen for toggle clicks
themeToggle.addEventListener('click', () => {
  const isDark = root.classList.contains('dark');
  setTheme(isDark ? 'light' : 'dark');
});

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches ? 'dark' : 'light');
  }
});

// Smooth scrolling behavior for navigation links
document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    // Only handle smooth scrolling if we are on the same page
    const targetUrl = new URL(this.href);
    if (targetUrl.pathname === window.location.pathname) {
      const targetId = targetUrl.hash;
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        e.preventDefault();
        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
        // Update URL hash without jumping
        history.pushState(null, null, targetId);
      }
    }
  });
});

// Run once on load to handle direct visits to anchor links
window.addEventListener('load', () => {
  if (window.location.hash) {
    const targetSection = document.querySelector(window.location.hash);
    if (targetSection) {
      setTimeout(() => {
        targetSection.scrollIntoView({ behavior: 'smooth' });
      }, 0);
    }
  }
});
