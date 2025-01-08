const darkModeButton = document.getElementById('darkModeButton');
const lightModeButton = document.getElementById('lightModeButton');

// if (localStorage.getItem('dark-mode') === 'enabled') {
//     document.body.classList.add('dark-mode');
//     lightModeButton.style.display = 'inline-block';  
// } else {
//     darkModeButton.style.display = 'inline-block'; 
// }


darkModeButton.addEventListener('click', () => {
    document.body.classList.add('dark-mode');
    localStorage.setItem('dark-mode', 'enabled');
    // darkModeButton.style.display = 'none';
    // lightModeButton.style.display = 'inline-block';
});

lightModeButton.addEventListener('click', () => {
    document.body.classList.remove('dark-mode');
    localStorage.removeItem('dark-mode');
    // darkModeButton.style.display = 'inline-block'; 
    // lightModeButton.style.display = 'none';
});
