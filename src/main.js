// Theme Configuration
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

// --- Theme Logic ---

function applyTheme(theme) {
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }
}

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme) {
    applyTheme(savedTheme);
  } else {
    applyTheme(getSystemTheme());
  }
}

// Initialize on load
initTheme();

// Toggle theme on button click
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const isDark = root.classList.contains('dark');
    const newTheme = isDark ? 'light' : 'dark';
    applyTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  });
}

// Listen for system theme changes (only if no manual override)
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('theme')) {
    applyTheme(e.matches ? 'dark' : 'light');
  }
});

// --- Mobile Menu Logic ---

if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    // Optional: Add aria-expanded attribute toggle
    const isExpanded = !mobileMenu.classList.contains('hidden');
    mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
  });
}

// --- Smooth Scroll Logic ---

document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    const targetUrl = new URL(this.href);
    // Only handle smooth scrolling if we are on the same page
    if (targetUrl.pathname === window.location.pathname) {
      const targetId = targetUrl.hash;
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        e.preventDefault();
        
        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          if (mobileMenuBtn) mobileMenuBtn.setAttribute('aria-expanded', 'false');
        }

        targetSection.scrollIntoView({
          behavior: 'smooth'
        });
        // Update URL hash without jumping
        history.pushState(null, null, targetId);
      }
    }
  });
});

// Handle initial hash on load
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
