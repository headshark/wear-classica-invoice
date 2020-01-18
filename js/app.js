let currentTab = 0;
let items = [];

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

        let html = '<table>';
        for (let i = 0; i < items.length; i++) {
            let item = items[i];
            
            html += '<tr>';
            html += '<td>' + item.description + '</td>';
            html += '<td>' + item.amount + '</td>';
            html += '</tr>';
        }
        html += '</table>';

        let paymentDetails = '';
        let paymentMethod = document.getElementsByName('payment');
        for (let i = 0; i < paymentMethod.length; i++) {
            if (paymentMethod[i].checked) {
                paymentDetails = paymentMethod[i].value;

                break;
            }
        }

        document.getElementById('customerDetails').innerHTML = document.getElementById('nameTxt').value;
        document.getElementById('itemDetails').innerHTML = html;
        document.getElementById('shippingDetails').innerHTML = document.getElementById('shippingFeeTxt').value;
        document.getElementById('paymentDetails').innerHTML = paymentDetails;
        
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
    let item = {};
    let itemTable = document.getElementById('itemTable');
    let itemDesc = document.getElementById('itemDescTxt');
    let itemAmount = document.getElementById('itemAmountTxt');
    let row = itemTable.insertRow(itemTable.rows.length);
    let cell1 = row.insertCell(0);
    let cell2 = row.insertCell(1);
    
    cell1.innerHTML = itemDesc.value;
    cell2.innerHTML = itemAmount.value;
    item.description = itemDesc.value;
    item.amount = itemAmount.value;
    items.push(item);

    // reset input
    itemDesc.value = '';
    itemAmount.value = '';
}