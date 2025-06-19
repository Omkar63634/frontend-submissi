document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const themeStyle = document.getElementById('theme-style');
    
    // Check for saved user preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    // Set initial theme
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        darkModeToggle.checked = (savedTheme === 'dark');
    } else if (systemPrefersDark) {
        document.documentElement.setAttribute('data-theme', 'dark');
        darkModeToggle.checked = true;
        localStorage.setItem('theme', 'dark');
    }
    
    // Toggle theme when switch is clicked
    darkModeToggle.addEventListener('change', function() {
        if (this.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
        
        // Force redraw to prevent transition issues
        document.body.style.display = 'none';
        document.body.offsetHeight; // Trigger reflow
        document.body.style.display = '';
    });
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
        if (!localStorage.getItem('theme')) { // Only if user hasn't set preference
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            darkModeToggle.checked = e.matches;
        }
    });
});