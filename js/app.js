let currentTab = 0;
let totalAmount = 0;
let items = [];
const provinces = [
    'Abra', 'Agusan del Norte', 'Aklan', 'Albay', 'Antique', 'Apayao', 'Aurora',
    'Basilan', 'Bataan', 'Batanes', 'Benguet', 'Biliran', 'Bukidnon', 'Bulacan',
    'Cagayan', 'Camarines Norte', 'Camarines Sur', 'Camiguin', 'Capiz', 'Catanduanes',
    'Cavite', 'Cebu', 'Compostela Valley', 'Davao del Norte', 'Davao del Sur',
    'Davao Oriental', 'Dinagat Islands', 'Eastern Samar', 'Guimaras', 'Ifugao',
    'Ilocos Norte', 'Ilocos Sur', 'Iloilo', 'Isabela', 'Kalinga', 'La Union',
    'Laguna', 'Lanao del Norte', 'Lanao del Sur', 'Leyte', 'Maguindanao', 'Marinduque',
    'Masbate', 'Metro Manila', 'Misamis Occidental', 'Misamis Oriental', 'Mountain Province',
    'Negros Occidental', 'Negros Oriental', 'North Coabato', 'Northern Samar', 'Nueva Ecija',
    'Nueva Vizcaya', 'Occidental Mindoro', 'Oriental Mindoro', 'Palawan', 'Pampanga',
    'Pangasinan', 'Quezon', 'Quirino', 'Rizal', 'Romblon', 'Samar', 'Sarangani', 'Shariff Kabunsuan',
    'Siquijor', 'Sorsogon', 'South Cotabato', 'Southern Leyte', 'Sultan Kudarat', 'Sulu',
    'Surigao del Norte', 'Surigao del Sur', 'Tarlac', 'Tawi-Tawi', 'Zambales', 'Zamboanga del Norte',
    'Zamboanga del Sur', 'Zamboanga Sibugay'
];
const user = {
    name: 'Soniella Therese Yumang',
    phone: '+63 977 105 9115',
    address: 'Pampanga'
};
const paymentMethod = {
    bdo: {accountName: 'Soniella Therese Yumang', accountNumber: ''},
    bpi: {accountName: 'Meri Mocalyn Cruz', accountNumber: '1899776883'},
    gcash: {accountName: 'Meri Mocalyn Cruz', accountNumber: ''},
    lbc: {accountName: 'Soniella Therese Yumang', accountNumber: ''},
    cebuana: {accountName: 'Soniella Therese Yumang', accountNumber: ''},
    palawan: {accountName: 'Soniella Therese Yumang', accountNumber: ''}
};
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let addItemBtn = document.getElementById('addItemBtn');
let shippingFeeTxt = document.getElementById('shippingFeeTxt');

document.addEventListener('DOMContentLoaded', (event) => {
    populateDataList();
    showTab(currentTab);
});
prevBtn.addEventListener('click', () => {
    nextPrev(-1);
});
nextBtn.addEventListener('click', () => {
    nextPrev(1);
});
addItemBtn.addEventListener('click', () => {
    addItem();
});
shippingFeeTxt.addEventListener('change', () => {
    updateTotalAmount(shippingFeeTxt.value);
});

populateDataList = () => {
    let options = '';
    for (let i = 0; i < provinces.length; i++)
        options += '<option value="' + provinces[i] + '" />';
        
    document.getElementById('provinceDataList').innerHTML = options;
}

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
    
    updateTotalAmount(itemAmount.value);
    cell1.innerHTML = itemDesc.value;
    cell2.innerHTML = itemAmount.value;
    item.description = itemDesc.value;
    item.amount = itemAmount.value;
    items.push(item);

    // reset input
    itemDesc.value = '';
    itemAmount.value = '';
}

updateTotalAmount = (n) => {
    totalAmount += parseFloat(n);
    document.getElementById('totalAmount').innerHTML = totalAmount;
}