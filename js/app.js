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

addItem = () => {
    let itemTable = document.getElementById('itemTable');
    let itemDesc = document.getElementById('itemDescTxt');
    let itemAmount = document.getElementById('itemAmountTxt');
    let row = itemTable.insertRow(itemTable.rows.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    
    cell1.innerHTML = itemDesc.value;
    cell2.innerHTML = itemAmount.value;
}