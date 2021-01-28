'use strict';

// Hours of each store:
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// Object Literals
// Seattle Object
let seattle = {
  name: 'Seattle',
  minMaxCustomerEachHour: [23, 65],
  averageCookieSalesPerCustomer: 6.3,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,
  // A method to calculate random number of customers per hour
  randomCustomerEachHour: function() {
    return Math.floor(Math.random() * (this.minMaxCustomerEachHour[1] - this.minMaxCustomerEachHour[0] + 1) + this.minMaxCustomerEachHour[0]);
  },
  // A method to calculate and populate our number of cookies sold per hour array
  calcCookiesSoldEachHour: function() {
    for (let i = 0; i < hours.length; i++) {
      var cookiesSoldPerHour = Math.ceil(this.randomCustomerEachHour() * this.averageCookieSalesPerCustomer);
      this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
      this.dailyStoreTotal += cookiesSoldPerHour;
    }
  },
  // A method to render created lists
  render: function() {
    this.calcCookiesSoldEachHour();
    // Get the Seattle Div from the sales.html
    let storeListElement = document.querySelector('#seattle-store');
    // Create a header for each store
    let newHeader = document.createElement('h2');
    newHeader.textContent = `${this.name}`;
    storeListElement.appendChild(newHeader);
    // Create an list item, give it content and push to the dom
    let newList = document.createElement('ul');
    storeListElement.appendChild(newList);
    for(let i = 0; i < hours.length; i++){
      var newEl = document.createElement('li');
      newEl.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]}`;
      newList.appendChild(newEl);
    }
    // Create Total Row
    newEl = document.createElement('li');
    newEl.textContent = `Total: ${this.dailyStoreTotal}`;
    newEl.classList += 'total';
    newList.appendChild(newEl);
  },
};

// Tokyo Object
let tokyo = {
  name: 'Tokyo',
  minMaxCustomerEachHour: [3, 24],
  averageCookieSalesPerCustomer: 1.2,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,
  // A method to calculate random number of customers per hour
  randomCustomerEachHour: function() {
    return Math.floor(Math.random() * (this.minMaxCustomerEachHour[1] - this.minMaxCustomerEachHour[0] + 1) + this.minMaxCustomerEachHour[0]);
  },
  // A method to calculate and populate our number of cookies sold per hour array
  calcCookiesSoldEachHour: function() {
    for (let i = 0; i < hours.length; i++) {
      var cookiesSoldPerHour = Math.ceil(this.randomCustomerEachHour() * this.averageCookieSalesPerCustomer);
      this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
      this.dailyStoreTotal += cookiesSoldPerHour;
    }
  },
  // A method to render created lists
  render: function() {
    this.calcCookiesSoldEachHour();
    // Get the Seattle Div from the sales.html
    let storeListElement = document.querySelector('#tokyo-store');
    // Create a header for each store
    let newHeader = document.createElement('h2');
    newHeader.textContent = `${this.name}`;
    storeListElement.appendChild(newHeader);
    // Create an list item, give it content and push to the dom
    let newList = document.createElement('ul');
    storeListElement.appendChild(newList);
    for(let i = 0; i < hours.length; i++){
      var newEl = document.createElement('li');
      newEl.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]}`;
      newList.appendChild(newEl);
    }
    // Create Total Row
    newEl = document.createElement('li');
    newEl.textContent = `Total: ${this.dailyStoreTotal}`;
    newEl.classList += 'total';
    newList.appendChild(newEl);
  },
};

// dubai Object
let dubai = {
  name: 'Dubai',
  minMaxCustomerEachHour: [11, 38],
  averageCookieSalesPerCustomer: 3.7,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,
  // A method to calculate random number of customers per hour
  randomCustomerEachHour: function() {
    return Math.floor(Math.random() * (this.minMaxCustomerEachHour[1] - this.minMaxCustomerEachHour[0] + 1) + this.minMaxCustomerEachHour[0]);
  },
  // A method to calculate and populate our number of cookies sold per hour array
  calcCookiesSoldEachHour: function() {
    for (let i = 0; i < hours.length; i++) {
      var cookiesSoldPerHour = Math.ceil(this.randomCustomerEachHour() * this.averageCookieSalesPerCustomer);
      this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
      this.dailyStoreTotal += cookiesSoldPerHour;
    }
  },
  // A method to render created lists
  render: function() {
    this.calcCookiesSoldEachHour();
    // Get the Seattle Div from the sales.html
    let storeListElement = document.querySelector('#dubai-store');
    // Create a header for each store
    let newHeader = document.createElement('h2');
    newHeader.textContent = `${this.name}`;
    storeListElement.appendChild(newHeader);
    // Create an list item, give it content and push to the dom
    let newList = document.createElement('ul');
    storeListElement.appendChild(newList);
    for(let i = 0; i < hours.length; i++){
      var newEl = document.createElement('li');
      newEl.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]}`;
      newList.appendChild(newEl);
    }
    // Create Total Row
    newEl = document.createElement('li');
    newEl.textContent = `Total: ${this.dailyStoreTotal}`;
    newEl.classList += 'total';
    newList.appendChild(newEl);
  },
};

// Paris Object
let paris = {
  name: 'Paris',
  minMaxCustomerEachHour: [20, 38],
  averageCookieSalesPerCustomer: 2.3,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,
  // A method to calculate random number of customers per hour
  randomCustomerEachHour: function() {
    return Math.floor(Math.random() * (this.minMaxCustomerEachHour[1] - this.minMaxCustomerEachHour[0] + 1) + this.minMaxCustomerEachHour[0]);
  },
  // A method to calculate and populate our number of cookies sold per hour array
  calcCookiesSoldEachHour: function() {
    for (let i = 0; i < hours.length; i++) {
      var cookiesSoldPerHour = Math.ceil(this.randomCustomerEachHour() * this.averageCookieSalesPerCustomer);
      this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
      this.dailyStoreTotal += cookiesSoldPerHour;
    }
  },
  // A method to render created lists
  render: function() {
    this.calcCookiesSoldEachHour();
    // Get the Seattle Div from the sales.html
    let storeListElement = document.querySelector('#paris-store');
    // Create a header for each store
    let newHeader = document.createElement('h2');
    newHeader.textContent = `${this.name}`;
    storeListElement.appendChild(newHeader);
    // Create an list item, give it content and push to the dom
    let newList = document.createElement('ul');
    storeListElement.appendChild(newList);
    for(let i = 0; i < hours.length; i++){
      var newEl = document.createElement('li');
      newEl.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]}`;
      newList.appendChild(newEl);
    }
    // Create Total Row
    newEl = document.createElement('li');
    newEl.textContent = `Total: ${this.dailyStoreTotal}`;
    newEl.classList += 'total';
    newList.appendChild(newEl);
  },
};

// Lima Object
let lima = {
  name: 'Lima',
  minMaxCustomerEachHour: [2, 16],
  averageCookieSalesPerCustomer: 4.6,
  cookiesSoldPerHourArray: [],
  dailyStoreTotal: 0,
  // A method to calculate random number of customers per hour
  randomCustomerEachHour: function() {
    return Math.floor(Math.random() * (this.minMaxCustomerEachHour[1] - this.minMaxCustomerEachHour[0] + 1) + this.minMaxCustomerEachHour[0]);
  },
  // A method to calculate and populate our number of cookies sold per hour array
  calcCookiesSoldEachHour: function() {
    for (let i = 0; i < hours.length; i++) {
      var cookiesSoldPerHour = Math.ceil(this.randomCustomerEachHour() * this.averageCookieSalesPerCustomer);
      this.cookiesSoldPerHourArray.push(cookiesSoldPerHour);
      this.dailyStoreTotal += cookiesSoldPerHour;
    }
  },
  // A method to render created lists
  render: function() {
    this.calcCookiesSoldEachHour();
    // Get the Seattle Div from the sales.html
    let storeListElement = document.querySelector('#lima-store');
    // Create a header for each store
    let newHeader = document.createElement('h2');
    newHeader.textContent = `${this.name}`;
    storeListElement.appendChild(newHeader);
    // Create an list item, give it content and push to the dom
    let newList = document.createElement('ul');
    storeListElement.appendChild(newList);
    for(let i = 0; i < hours.length; i++){
      var newEl = document.createElement('li');
      newEl.textContent = `${hours[i]}: ${this.cookiesSoldPerHourArray[i]}`;
      newList.appendChild(newEl);
    }
    // Create Total Row
    newEl = document.createElement('li');
    newEl.classList += 'total';
    newEl.textContent = `Total: ${this.dailyStoreTotal}`;
    newList.appendChild(newEl);
  },
};

// Call Render Methods
seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
