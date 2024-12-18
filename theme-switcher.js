document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    
    // Check for saved theme preference, default to light mode
    const savedTheme = localStorage.getItem('portfolio-theme');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        if (themeToggle) themeToggle.checked = true;
    }

    if (themeToggle) {
        themeToggle.addEventListener('change', () => {
            if (themeToggle.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('portfolio-theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.removeItem('portfolio-theme');
            }
        });
    }
});

// Add additional dark mode styles
document.addEventListener('DOMContentLoaded', () => {
    const styleSheet = document.createElement('style');
    styleSheet.textContent = `
        body.dark-mode {
            background-color: #121212;
            color: #ffffff;
        }
        .dark-mode .header {
            background-color: #1f1f1f;
        }
        .dark-mode .nav-menu a {
            color: #e0e0e0;
        }
        .dark-mode .footer {
            background-color: #1f1f1f;
        }
    `;
    document.head.appendChild(styleSheet);
});