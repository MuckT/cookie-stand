'use strict';

// Create 'hours' & 'stores' Array
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const stores = [];

function Store(name, minMaxCustomerEachHour, averageCookieSalesPerCustomer) {
  this.name = name;
  this.minMaxCustomerEachHour = minMaxCustomerEachHour;
  this.averageCookieSalesPerCustomer = averageCookieSalesPerCustomer;
  this.cookiesSoldPerHourArray = [];
  this.randomCustomerEachHour = function() {
    return Math.floor(Math.random() * (this.minMaxCustomerEachHour[1] - this.minMaxCustomerEachHour[0] + 1) + this.minMaxCustomerEachHour[0]);
  };
  this.calcCookiesSoldEachHour = function() {
    for (let i = 0; i < hours.length; i++) {
      var cookiesSoldPerHour = Math.ceil(this.randomCustomerEachHour() * this.averageCookieSalesPerCustomer);
      this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
      this.dailyStoreTotal += cookiesSoldPerHour;
    }
  };
  this.render = function() {
    this.calcCookiesSoldEachHour();
    // Get the table body from the 'sales.html'
    let storeTableRowElement = document.querySelector('#sales-table tbody');
    let newRow = document.createElement('tr');
    newRow.innerHTML = `${this.name}`;
    storeTableRowElement.append(newRow);
    for(let i = 0; i < hours.length; i++){
      let newCell = document.createElement('td');
      newCell.innerText = `${this.cookiesSoldPerHourArray[i]}`;
      newRow.append(newCell);
    }
  };
  stores.push(this);
  this.render();
}

// Create Store Objects - Name, [minCustomerPerHour, maxCustomerPerHour], avgCookiesSoldPerCustomer
let seattle = new Store('Seattle', [23, 65], 6.3);
let tokyo = new Store('Tokyo', [3, 24], 1.2);
let dubai = new Store('Dubai', [11, 38], 3.7);
let paris = new Store('Paris', [20, 38], 2.3);
let Lima = new Store('Lima', [2, 16], 4.6);


// Render Hours
function renderStoreHeaders(storeHours = hours) {
  let storeTableHeader = document.querySelector('#sales-table thead');
  let newHeader = document.createElement('th');
  storeTableHeader.append(newHeader);
  for (let i = 0; i < storeHours.length; i++) {
    newHeader = document.createElement('th');
    newHeader.innerHTML = storeHours[i];
    storeTableHeader.append(newHeader);
  }
}

function renderStoreFooter(storeHours = hours) {
  // Render Totals Do After Store Objects are Rendered
  let storeTableFooter = document.querySelector('#sales-table tfoot');
  let newFooter = document.createElement('tr');
  newFooter.innerHTML = 'Totals';
  storeTableFooter.append(newFooter);
  for (let i = 0; i < storeHours.length; i++) {
    var total = 0;
    var totalsToSum = document.querySelectorAll(`tbody tr td:nth-of-type(${i + 1})`);
    for (let j = 0; j < totalsToSum.length; j++) {
      total += +totalsToSum[j].innerHTML;
    }
    let newFooterCell = document.createElement('td');
    newFooterCell.innerHTML = `${total}`;
    newFooter.append(newFooterCell);
  }
}

renderStoreHeaders();
renderStoreFooter();
