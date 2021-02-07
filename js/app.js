'use strict';

// Create 'hours' & 'stores' Array
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const stores = JSON.parse(localStorage.getItem('Store_List')) || [];
let totalSaleMatrix = [];

// Store Constructor
function Store(name, minMaxCustomerEachHour, averageCookieSalesPerCustomer) {
  this.name = name;
  this.minMaxCustomerEachHour = minMaxCustomerEachHour;
  this.averageCookieSalesPerCustomer = averageCookieSalesPerCustomer;
  this.cookieSalesPerStore = [];
  this.dailyStoreTotal = 0;
  this.render();
}

//ProtoTypes
Store.prototype.randomCustomerEachHour = function() {
  return Math.floor(Math.random() * (this.minMaxCustomerEachHour[1] - this.minMaxCustomerEachHour[0] + 1) + this.minMaxCustomerEachHour[0]);
};

Store.prototype.calcCookiesSoldEachHour = function() {
  for (let i = 0; i < hours.length; i++) {
    var cookiesSoldPerHour = Math.ceil(this.randomCustomerEachHour() * this.averageCookieSalesPerCustomer);
    this.cookieSalesPerStore.push(cookiesSoldPerHour);
    this.dailyStoreTotal += cookiesSoldPerHour;
  }
};

Store.prototype.render = function() {
  this.calcCookiesSoldEachHour();
  stores.push(this);
  localStorage.setItem('Store_List', JSON.stringify(stores));
};

// Create Store Objects If Not Present In localStorage - Name, [minCustomerPerHour, maxCustomerPerHour], avgCookiesSoldPerCustomer
if (localStorage.getItem('Store_List') === null) {
  new Store('Seattle', [23, 65], 6.3);
  new Store('Tokyo', [3, 24], 1.2);
  new Store('Dubai', [11, 38], 3.7);
  new Store('Paris', [20, 38], 2.3);
  new Store('Lima', [2, 16], 4.6);
}

// Calculate Totals Using A Matrix
function calcStoreTotals(localStores = JSON.parse(localStorage.getItem('Store_List')), storeHours = hours) {
  totalSaleMatrix = [];
  let hourlyTotals = [];
  // Create Our Matrix Of Values
  for (let i = 0; i < localStores.length; i++) {
    // Calculate Store Total Sales
    let totalSales = 0;
    for (let j = 0; j < storeHours.length; j ++) {
      totalSales += localStores[i].cookieSalesPerStore[j];
    }
    // Check That We're Not Pushing Additional Columns
    if (localStores[i].cookieSalesPerStore.length <= storeHours.length) {
      // Push Total Sales to Relevant Cookie Store
      localStores[i].cookieSalesPerStore.push(totalSales);
    }
    totalSaleMatrix.push(localStores[i].cookieSalesPerStore);
  }
  // Sum All Stores Hourly Total Per Hour
  for(let i = 0; i < totalSaleMatrix[0].length; i++) {
    let hourlyTotal = 0;
    for (let j = 0; j < totalSaleMatrix.length; j++) {
      hourlyTotal += totalSaleMatrix[j][i];
    }
    hourlyTotals.push(hourlyTotal);
  }
  // Sum All Sales Totals Per Store
  totalSaleMatrix.push(hourlyTotals);
}

// Render Table Header
function renderHeader(storeHours = hours, localTotalSaleMatrix = totalSaleMatrix) {
  let storeTableHeader = document.querySelector('#sales-table thead');
  let newHeader = document.createElement('th');
  storeTableHeader.append(newHeader);
  for (let i = 0; i < storeHours.length; i++) {
    newHeader = document.createElement('th');
    newHeader.innerHTML = storeHours[i];
    storeTableHeader.append(newHeader);
  }
  if (storeHours.length + 1 === localTotalSaleMatrix[0].length) {
    newHeader = document.createElement('th');
    newHeader.classList += 'total';
    newHeader.innerText = 'Total';
    storeTableHeader.append(newHeader);
  }
}

// Render Table Body
function renderBody(localTotalSaleMatrix = totalSaleMatrix, localStores = JSON.parse(localStorage.getItem('Store_List'))) {
  let storeTableRowElement = document.querySelector('#sales-table tbody');
  // Store Names
  for (let i = 0; i < localStores.length; i++) {
    var newRow = document.createElement('tr');
    let newTd = document.createElement('th');
    newTd.innerHTML = `${localStores[i].name}`;
    newRow.append(newTd);
    storeTableRowElement.append(newRow);
    // Sales Data
    for(let j = 0; j < localTotalSaleMatrix[0].length; j++){
      let newCell = document.createElement('td');
      newCell.innerText = `${localTotalSaleMatrix[i][j]}`;
      // Add Classes To Total Column
      if (j === localTotalSaleMatrix[0].length - 1) {
        newCell.classList += 'total';
      }
      newRow.append(newCell);
    }
  }
}

// Render Table Footer
function renderFooter(localTotalSaleMatrix = totalSaleMatrix) {
  let storeTableFooter = document.querySelector('#sales-table tfoot');
  let newFooter = document.createElement('tr');
  let newTd = document.createElement('th');
  newTd.innerHTML = 'Total';
  newFooter.append(newTd);
  storeTableFooter.append(newFooter);
  for(let i = 0; i < localTotalSaleMatrix[0].length; i++) {
    var newFooterCell = document.createElement('td');
    newFooterCell.innerHTML = `${localTotalSaleMatrix[localTotalSaleMatrix.length - 1][i]}`;
    newFooterCell.classList += 'total';
    newFooter.append(newFooterCell);
  }
}

// Clear Existing Table Data
function clearTable(){
  const elementsToClear = [];
  let storeTableHeader = document.querySelector('#sales-table thead');
  let storeTableRowElement = document.querySelector('#sales-table tbody');
  let storeTableFooter = document.querySelector('#sales-table tfoot');
  elementsToClear.push(storeTableHeader, storeTableRowElement, storeTableFooter);
  for (let i = 0; i < elementsToClear.length; i++) {
    while (elementsToClear[i].lastChild) {
      elementsToClear[i].removeChild(elementsToClear[i].lastChild);
    }
  }
}

// Call All Table Methods
function renderAll() {
  renderHeader();
  renderBody();
  renderFooter();
}

// Invoke Calc And Renders First Time Through
calcStoreTotals();
renderAll();

// Handle Form Input
function handleSubmit(event){
  event.preventDefault();
  var errors = [];
  var storeName = event.target['store-name'].value;
  var minCustomerPerHour = +event.target['minimum-customer-per-hour'].value;
  var maxCustomerPerHour = +event.target['maximum-customer-per-hour'].value;
  var avgCookiesSoldPerCustomer = +event.target['average-cookies-per-customer'].value;
  // Validation Errors
  // Check For Duplicate Names
  for (let i = 0; i < stores.length; i++) {
    if (stores[i].name === storeName) {
      errors.push('Matching Name');
      break;
    }
  }
  // Check Min Customers Is Less Than Max
  if (maxCustomerPerHour < minCustomerPerHour) {
    errors.push('Minimum Customers Greater Than Maximum Customers');
  }
  // If Errors Array Is Empty
  if (errors.length === 0) {
    new Store(`${storeName}`, [minCustomerPerHour, maxCustomerPerHour], avgCookiesSoldPerCustomer);
    event.target.reset();
    clearTable();
    calcStoreTotals();
    renderAll();
  } else {
    // Error Handling #TODO Make Better
    if(errors.includes('Minimum Customers Greater Than Maximum Customers')) {
      let maxCustomer = document.querySelector('#maximum-customer-per-hour');
      let minCustomer = document.querySelector('#minimum-customer-per-hour');
      minCustomer.value = null;
      maxCustomer.value = null;
      alert('Please Set The Minimum Customers Below Or Equal To The Maximum Customers');
    }
    if(errors.includes('Matching Name')) {
      let storeName = document.querySelector('#store-name');
      storeName.value = null;
      alert('Please Enter a non-duplicate Store Name');
    }
  }
}

// Get Form Input
let myForm = document.querySelector('#store-management form');

// Add Form Event Listener
myForm.addEventListener('submit', handleSubmit);
