// Shop Maker
function Shop(minMaxCustomer = [0,0], avgCookiesSale) {
  this.minCustomers = minMaxCustomer[0];
  this.maxCustomers = minMaxCustomer[1];
  this.avgCookiesSale = avgCookiesSale;
  this.customersPerHours = () => {}; // TODO add random number generation
  this.cookiesPerHourArray = []; // TODO Calc this on creation
  this.totalCookiesPerDay = 0;
}

// Display the values of each shop.cookiesPerHourArray in the index.html

let seattle = new Shop([23, 65], 6.3);
let tokyo = new Shop([3, 24], 1.2);
let dubai = new Shop([11, 38], 3.7);
let paris = new Shop([20, 38], 2.3);
let Lima = new Shop([2, 16], 4.6);
var shops = [seattle, tokyo, dubai, paris, Lima];
console.log(shops);
