let currentTab = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    showTab(currentTab); 
});

showTab = (n) => {
    let tab = document.querySelectorAll('.tab');
    tab[n].style.display = 'block';
}
