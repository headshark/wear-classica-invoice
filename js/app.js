let currentTab = 0;
let items = [];
let customer = {};
const shippingRate = {
    'Abra': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Agusan del Norte': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Agusan del Sur': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Aklan': {expressLetter: 128, onePounder: 156, threePounder: 298},
    'Albay': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Antique': {expressLetter: 128, onePounder: 156, threePounder: 298},
    'Apayao': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Aurora': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Basilan': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Bataan': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Batanes': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Batangas': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Benguet': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Biliran': {expressLetter: 128, onePounder: 156, threePounder: 298},
    'Bohol': {expressLetter: 128, onePounder: 156, threePounder: 298},
    'Bukidnon': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Bulacan': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Cagayan': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Camarines Norte': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Camarines Sur': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Camiguin': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Capiz': {expressLetter: 128, onePounder: 156, threePounder: 298},
    'Catanduanes': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Cavite': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Cebu': {expressLetter: 128, onePounder: 156, threePounder: 298},
    'Compostela Valley': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Davao del Norte': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Davao del Sur': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Davao Oriental': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Dinagat Islands': {expressLetter: 128, onePounder: 156, threePounder: 298},
    'Eastern Samar': {expressLetter: 0, onePounder: 0, threePounder: 0}, // 0 on jrs rates
    'Guimaras': {expressLetter: 128, onePounder: 156, threePounder: 298},
    'Ifugao': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Ilocos Norte': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Ilocos Sur': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Iloilo': {expressLetter: 128, onePounder: 156, threePounder: 298},
    'Isabela': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Kalinga': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'La Union': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Laguna': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Lanao del Norte': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Lanao del Sur': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Leyte': {expressLetter: 128, onePounder: 156, threePounder: 298},
    'Maguindanao': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Marinduque': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Masbate': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Metro Manila': {expressLetter: 120, onePounder: 145, threePounder: 266},
    'Misamis Occidental': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Misamis Oriental': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Mountain Province': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Negros Occidental': {expressLetter: 128, onePounder: 156, threePounder: 298},
    'Negros Oriental': {expressLetter: 128, onePounder: 156, threePounder: 298},
    'North Coabato': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Northern Samar': {expressLetter: 128, onePounder: 156, threePounder: 298},
    'Nueva Ecija': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Nueva Vizcaya': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Occidental Mindoro': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Oriental Mindoro': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Palawan': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Pampanga': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Pangasinan': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Quezon': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Quirino': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Rizal': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Romblon': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Samar': {expressLetter: 128, onePounder: 156, threePounder: 298},
    'Sarangani': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Shariff Kabunsuan': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Siquijor': {expressLetter: 128, onePounder: 156, threePounder: 298},
    'Sorsogon': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'South Cotabato': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Southern Leyte': {expressLetter: 128, onePounder: 156, threePounder: 298},
    'Sultan Kudarat': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Sulu': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Surigao del Norte': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Surigao del Sur': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Tarlac': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Tawi-Tawi': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Zambales': {expressLetter: 107, onePounder: 130, threePounder: 238},
    'Zamboanga del Norte': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Zamboanga del Sur': {expressLetter: 132, onePounder: 162, threePounder: 311},
    'Zamboanga Sibugay': {expressLetter: 132, onePounder: 162, threePounder: 311}
};
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
let addressTxt = document.getElementById('addressTxt');
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
    console.log('test');
    updateFeeAndTotal(shippingFeeTxt.value);
});

addressTxt.addEventListener('change', () => {
    document.getElementById('shipTo').innerHTML = addressTxt.value;
    for (let [key, value] of Object.entries(shippingRate)) {
        if (addressTxt.value.toLowerCase() === key.toLowerCase() ||
            addressTxt.value.toLowerCase().includes(key.toLowerCase())) {
            
            shippingFeeTxt.value = value.expressLetter;
        }
    }
});

let rates = document.getElementsByName('rate');
for (let i = 0; i < rates.length; i++) {
    rates[i].addEventListener('change', (e) => {
        let id = rates[i].id;
        let rate;

        for (let [key, value] of Object.entries(shippingRate)) {
            if (customer.address.toLowerCase() === key.toLowerCase() ||
                customer.address.toLowerCase().includes(key.toLowerCase())) {
                
                if (id === 'expressLetter') {
                    rate = value.expressLetter;
                    shippingFeeTxt.disabled = true;
                } else if (id === 'onePounder') {
                    rate = value.onePounder;   
                    shippingFeeTxt.disabled = true;
                } else if (id === 'threePounder') {
                    rate = value.threePounder;
                    shippingFeeTxt.disabled = true;
                } else {
                    // if custom shipping rate
                    rate = '';
                    shippingFeeTxt.disabled = false;
                    shippingFeeTxt.focus();
                }

                shippingFeeTxt.value = rate;
                updateFeeAndTotal(rate);
            }
        }
    });
}

populateProvinceDatalist = () => {
    let provinces = [];
    let options = '';

    for (let [key, value] of Object.entries(shippingRate))
        provinces.push(key);

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

let updated = false;
nextPrev = (n) => {
    if (n == 1 && !validateForm()) return false;

    tab[currentTab].style.display = "none";
    currentTab = currentTab + n;
    console.log(customer);

    if (currentTab === 2 && !updated) {
        updateFeeAndTotal(shippingFeeTxt.value);
        updated = true;
    }

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
                return;
            } else {
                customer[input.name] = input.value;
            }
        }

        // check if address is valid
        for (let [key, value] of Object.entries(shippingRate)) {
            if (addressTxt.value.toLowerCase().includes(key.toLowerCase())) {
                valid = true;
                break;
            } else {
                valid = false;
            }
        }

        if (!valid) {
            alert('invalid address.');
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

updateFeeAndTotal = (n) => {
    if (n !== '') {
        if (customer.shippingFee) {
            if (n !== customer.shippingFee) {
                updateTotalAmount(-customer.shippingFee);
            }
        }
        updateTotalAmount(n);
        customer.shippingFee = n;
    } else {
        updateTotalAmount(-customer.shippingFee);
        customer.shippingFee = 0;
    }
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
            item.description.toLowerCase().includes('coat') ||
            item.description.toLowerCase().includes('cardigan')) {
            itemTable += '<td class="col-2"><img src="images/blazer.png" alt="Item"></td>';
        } else if (item.description.toLowerCase().includes('bottom') ||
            item.description.toLowerCase().includes('pants') ||
            item.description.toLowerCase().includes('trouser') ||
            item.description.toLowerCase().includes('trousers') ||
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
        } else if (item.description.toLowerCase().includes('skirt') ||
            item.description.toLowerCase().includes('skirt')) {
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
    itemTable += '<tr class="row align-items-center pt-0">';
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
    // location.reload();
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