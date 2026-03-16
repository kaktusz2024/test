// Fantastic JavaScript Code

// Interactive feature: Toggle dark mode
const toggleDarkMode = () => {
    document.body.classList.toggle('dark-mode');
};

// Animation: Smooth scroll
const smoothScroll = (target) => {
    const element = document.getElementById(target);
    element.scrollIntoView({ behavior: 'smooth' });
};

// Fun utility: Random color generator
const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
};

// Event listeners for interactive features
document.getElementById('darkModeButton').addEventListener('click', toggleDarkMode);

// Example usage of smooth scroll
document.getElementById('scrollButton').addEventListener('click', () => smoothScroll('targetElement'));

// Example usage of random color
document.getElementById('colorButton').addEventListener('click', () => {
    document.body.style.backgroundColor = getRandomColor();
});
