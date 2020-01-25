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
    address: 'Macabebe, Pampanga'
};
const account = {
    bpi: {title: 'BPI', accountName: 'Meri Mocalyn Cruz', accountNumber: '1899 7768 83', accountAddress: ''},
    bdo: {title: 'BDO', accountName: user.name, accountNumber: '0013 1124 6388', accountAddress: ''},
    gcash: {title: 'GCash', accountName: user.name, accountNumber: user.phone, accountAddress: ''},
    lbc: {title: 'LBC', accountName: user.name, accountNumber: user.phone, accountAddress: user.address},
    cebuana: {title: 'Cebuana Lhuillier', accountName: user.name, accountNumber: user.phone, accountAddress: user.address},
    palawan: {title: 'Palawan Express', accountName: user.name, accountNumber: user.phone, accountAddress: user.address}
};
let header = document.getElementById('header');
let logo = document.getElementById('logo');
let totalAmountLabel = document.getElementById('totalAmountLabel');
let totalAmountTxt = document.getElementById('totalAmountTxt');
let invoiceImg = document.getElementById('invoiceImg');
let prevBtn = document.getElementById('prevBtn');
let nextBtn = document.getElementById('nextBtn');
let addItemBtn = document.getElementById('addItemBtn');
let itemTable = document.getElementById('itemTable');
let shippingFeeTxt = document.getElementById('shippingFeeTxt');
let paymentMethodTxt = document.getElementById('paymentMethodTxt');
let tab = document.querySelectorAll('.tab');

document.addEventListener('DOMContentLoaded', (event) => {
    populateProvinceDatalist();
    showTab(currentTab);
    customer.totalAmount = 0;
    totalAmountTxt.style.display = 'none';
});
logo.addEventListener('click', () => {
    if (nextBtn.style.display === 'none') {
        nextBtn.style.display = 'inline';
    } else {
        nextBtn.style.display = 'none';
    }
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
        nextBtn.innerHTML = 'New Invoice';
        nextBtn.style.display = 'none';
        header.style.display = 'none';
        populateInvoiceDetails();
    } else {
        header.style.display = 'inline';
        nextBtn.innerHTML = 'Next';
    }
}

nextPrev = (n) => {
    if (n == 1 && !validateForm()) return false;

    tab[currentTab].style.display = "none";
    currentTab = currentTab + n;
    console.log(customer);

    if (currentTab >= tab.length) {
        resetForm();
        return false;
    }

    showTab(currentTab);
}

validateForm = () => {
    let valid = true;
    
    if (currentTab === 0) {
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

    if (currentTab === 2) {
        if (shippingFeeTxt.value === '' && shippingFeeTxt.className.includes('required')) {
            alert(shippingFeeTxt.name + ' is a required field.');
            valid = false;
            return;
        } else {
            customer[shippingFeeTxt.name] = shippingFeeTxt.value;
        }

        if (paymentMethodTxt.value === '' && paymentMethodTxt.className.includes('required')) {
            alert(paymentMethodTxt.name + ' is a required field.');
            valid = false;
        } else {
            for (let [key, value] of Object.entries(account)) {
                if (key === paymentMethodTxt.value) {
                    customer.paymentDetails = value;
                }
            }
        }
    }
    
    return valid;
}

addItem = () => {
    let item = {};
    let itemDescTxt = document.getElementById('itemDescTxt');
    let itemAmountTxt = document.getElementById('itemAmountTxt');

    if (itemDescTxt.value !== '' && itemAmountTxt.value !== '') {
        let row = itemTable.insertRow(itemTable.rows.length);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        
        updateTotalAmount(itemAmountTxt.value);
        cell1.innerHTML = itemDescTxt.value;
        cell2.innerHTML = '₱' + itemAmountTxt.value;
        row.className = 'row';
        cell1.className = 'col-8';
        cell2.className = 'col-4 text-right';
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
    totalAmountLabel.innerHTML = 'Total Amount';
    totalAmountTxt.innerHTML = '₱' + customer.totalAmount;
    totalAmountTxt.style.display = 'block';
    invoiceImg.style.display = 'none';
}

populateInvoiceDetails = () => {
    let currentDate = new Date();
    let formattedDate = ("0" + (currentDate.getMonth() + 1)).slice(-2) + '-'
        + ("0" + currentDate.getDate()).slice(-2) + '-'
        + currentDate.getFullYear();
    // document.getElementById('date').innerHTML = formattedDate;

    let itemTable = '<table class="table">';
    for (let i = 0; i < customer.items.length; i++) {
        let item = customer.items[i];
        
        itemTable += '<tr class="row align-items-center">';

        if (item.description.toLowerCase().includes('top') ||
            item.description.toLowerCase().includes('long sleeve')) {
            if (item.description.toLowerCase().includes('tank')) {
                itemTable += '<td class="col-2"><img src="images/tank.png" alt="Item"></td>';
            } else {
                itemTable += '<td class="col-2"><img src="images/top.png" alt="Item"></td>';
            }
        } else if (item.description.toLowerCase().includes('sweater') ||
            item.description.toLowerCase().includes('sweatshirt') ||
            item.description.toLowerCase().includes('sweat') ||
            item.description.toLowerCase().includes('pullover')) {
            itemTable += '<td class="col-2"><img src="images/sweater.png" alt="Item"></td>';
        } else if (item.description.toLowerCase().includes('jacket') ||
            item.description.toLowerCase().includes('hoodie')) {
            itemTable += '<td class="col-2"><img src="images/hoodie.png" alt="Item"></td>';
        } else if (item.description.toLowerCase().includes('blazer') ||
            item.description.toLowerCase().includes('cardigan')) {
            itemTable += '<td class="col-2"><img src="images/blazer.png" alt="Item"></td>';
        } else if (item.description.toLowerCase().includes('bottom') ||
            item.description.toLowerCase().includes('pants') ||
            item.description.toLowerCase().includes('jean') ||
            item.description.toLowerCase().includes('jeans') ||
            item.description.toLowerCase().includes('denim') ||
            item.description.toLowerCase().includes('corduroy')) {
            itemTable += '<td class="col-2"><img src="images/bottom.png" alt="Item"></td>';
        } else if (item.description.toLowerCase().includes('short') ||
            item.description.toLowerCase().includes('shorts')) {
            itemTable += '<td class="col-2"><img src="images/shorts.png" alt="Item"></td>';
        } else if (item.description.toLowerCase().includes('dress')) {
            itemTable += '<td class="col-2"><img src="images/dress.png" alt="Item"></td>';
        } else if (item.description.toLowerCase().includes('skirt')) {
            itemTable += '<td class="col-2"><img src="images/skirt.png" alt="Item"></td>';
        } else {
            itemTable += '<td class="col-2"><img src="images/top.png" alt="Item"></td>';
        }

        itemTable += '<td class="col-8">' + item.description + '</td>';
        itemTable += '<td class="col-2 text-right">₱' + item.amount + '</td>';
        itemTable += '</tr>';
    }
    itemTable += '<tr class="row align-items-center">';
    itemTable += '<td class="col-2"><img src="images/truck.png" alt="Truck"></td>';
    itemTable += '<td class="col-8">Shipping</td>';
    itemTable += '<td class="col-2 text-right">₱' + customer.shippingFee + '</td>';
    itemTable += '</tr>';
    itemTable += '<hr>';
    itemTable += '<tr class="row align-items-center">';
    itemTable += '<td class="col-9 text-right total">Total</td>';
    itemTable += '<td class="col-3 text-right total">₱' + customer.totalAmount + '</td>';
    itemTable += '</tr>';
    itemTable += '</table>';
    
    document.getElementById('customerName').innerHTML = customer.name;
    document.getElementById('customerAddress').innerHTML = customer.address;
    document.getElementById('itemDetails').innerHTML = itemTable;
    document.getElementById('title').innerHTML = customer.paymentDetails.title;
    document.getElementById('accountName').innerHTML = customer.paymentDetails.accountName;
    document.getElementById('accountNumber').innerHTML = customer.paymentDetails.accountNumber;
    document.getElementById('accountAddress').innerHTML = customer.paymentDetails.accountAddress;
}

resetForm = () => {
    document.getElementById('form').reset();
    currentTab = 0;
    items = [];
    customer = [];
    customer.totalAmount = 0;
    
    showTab(currentTab);
    itemTable.innerHTML = '';
    totalAmountLabel.innerHTML = 'Invoice';
    totalAmountTxt.style.display = 'none';
    invoiceImg.style.display = 'inline';
}