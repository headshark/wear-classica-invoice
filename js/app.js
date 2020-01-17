let currentTab = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    showTab(currentTab); 
});

showTab = (n) => {
    let tab = document.querySelectorAll('.tab');
    tab[n].style.display = 'block';
    
    if (n === 0) {
        document.getElementById('prevBtn').style.display = 'none';
    } else {
        document.getElementById('prevBtn').style.display = 'inline';
    }

    if (n == (tab.length - 1)) {
        document.getElementById('nextBtn').innerHTML = 'Submit';
    } else {
        document.getElementById('nextBtn').innerHTML = 'Next';
    }
}

nextPrev = (n) => {
    let tab = document.querySelectorAll('.tab');
    
    tab[currentTab].style.display = "none";
    currentTab = currentTab + n;
    
    showTab(currentTab);
}