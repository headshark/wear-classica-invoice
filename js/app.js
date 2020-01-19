let currentTab = 0;
let customer = [];
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
let tab = document.querySelectorAll('.tab');

document.addEventListener('DOMContentLoaded', (event) => {
    populateProvinceDatalist();
    showTab(currentTab);
    customer.totalAmount = 0;
});
nextBtn.addEventListener('click', () => {
    nextPrev(1);
});
prevBtn.addEventListener('click', () => {
    nextPrev(-1);
});
addItemBtn.addEventListener('click', () => {
    addItem();
});
shippingFeeTxt.addEventListener('change', () => {
    if (customer.shippingFee) updateTotalAmount(-customer.shippingFee);
    updateTotalAmount(shippingFeeTxt.value);
});

populateProvinceDatalist = () => {
    let options = '';
    for (let i = 0; i < provinces.length; i++)
        options += '<option value="' + provinces[i] + '" />';
        
    document.getElementById('provinceDatalist').innerHTML = options;
}

showTab = (n) => {
    tab[n].style.display = 'block';
    
    if (n === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'inline';
    }

    if (n === (tab.length - 1)) {
        nextBtn.innerHTML = 'Submit';
        populateInvoiceDetails();
    } else {
        nextBtn.innerHTML = 'Next';
    }
}

nextPrev = (n) => {
    if (n == 1 && !validateForm()) return false;

    tab[currentTab].style.display = "none";
    currentTab = currentTab + n;
    console.log(customer);

    showTab(currentTab);
}

validateForm = () => {
    let valid = true;
    
    if (currentTab === 0 || currentTab == 2) {
        let inputs = tab[currentTab].getElementsByTagName('input');
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];

            if (input.value === '' && input.className.includes('required')) {
                // input.className += ' invalid';
                alert(input.name + ' is a required field.');
                valid = false;
            } else {
                customer[input.name] = input.value;
            }
        }
    }

    if (currentTab === 1) {
        if (items.length === 0) {
            alert('please add an item.');
            valid = false;
        }
    }

    if (currentTab === 3) {
        let payments = document.getElementsByName('payment');
        for (let i = 0; i < payments.length; i++) {
            let payment = payments[i];

            if (payment.checked) {
                customer.paymentMethod = payment.value;
                valid = true;
                test = true;

                break;
            } else {
                valid = false;
            }
        }

        if (!valid) {
            alert('please select a payment method');
        }
    }
    
    return valid;
}

addItem = () => {
    let item = {};
    let itemTable = document.getElementById('itemTable');
    let itemDescTxt = document.getElementById('itemDescTxt');
    let itemAmountTxt = document.getElementById('itemAmountTxt');

    if (itemDescTxt.value !== '' && itemAmountTxt.value !== '') {
        let row = itemTable.insertRow(itemTable.rows.length);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        
        updateTotalAmount(itemAmountTxt.value);
        cell1.innerHTML = itemDescTxt.value;
        cell2.innerHTML = itemAmountTxt.value;
        item.description = itemDescTxt.value;
        item.amount = itemAmountTxt.value;
        items.push(item);
        customer.items = items;
    
        // reset input
        itemDescTxt.value = '';
        itemAmountTxt.value = '';
    } else {
        alert('please enter the item description and amount.');
    }
}

updateTotalAmount = (n) => {
    customer.totalAmount += parseFloat(n);
    document.getElementById('totalAmount').innerHTML = customer.totalAmount;
}

populateInvoiceDetails = () => {
    let itemTable = '<table>';
    for (let i = 0; i < customer.items.length; i++) {
        let item = customer.items[i];
        
        itemTable += '<tr>';
        itemTable += '<td>' + item.description + '</td>';
        itemTable += '<td>' + item.amount + '</td>';
        itemTable += '</tr>';
    }
    itemTable += '</table>';

    document.getElementById('customerDetails').innerHTML = customer.name + ' ' + customer.address;
    document.getElementById('itemDetails').innerHTML = itemTable;
    document.getElementById('shippingDetails').innerHTML = customer.shippingFee;
    document.getElementById('paymentDetails').innerHTML = customer.paymentMethod;
}
