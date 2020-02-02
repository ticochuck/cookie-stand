'use strict';
var hoursOperation = [' 6am',' 7am',' 8am',' 9am','10am','11am','12pm',' 1pm',' 2pm',' 3pm',' 4pm',' 5pm',' 6pm',' 7pm'];
var locationsAll = [];

for (var i = 0; i < hoursOperation.length; i++) {
  
  var parentEl = document.getElementById('sales'); 
  var liEl = document.createElement('th');
    liEl.textContent = hoursOperation[i];
    parentEl.appendChild(liEl);  

  };
  liEl.textContent = 'Daily Location Total';
  parentEl.appendChild(liEl);


  function Store(Location, minCustPerHour, maxCustPerHour, avgCookiePerCust, soldCookiesPerHour, totalCookies) {
  this.Location = Location;
  this. minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerCust = avgCookiePerCust;
  this.soldCookiesPerHour = soldCookiesPerHour;
  this.totalCookies = totalCookies;
  locationsAll.push(this);
};

var seattle = new Store('Seattle', 23, 65, 6.3, [], 0);
var tokyo = new Store('Tokyo', 3, 24, 1.2, [], 0);
var dubai = new Store('Dubai', 11, 38, 3.7, [], 0);
var paris = new Store('Paris', 20, 37, 2.3, [], 0);
var lima = new Store('Lima', 2, 16, 4.6, [], 0);

//generate random customers per hour
Store.prototype.custPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; 
};

//generate total cookies sold per hour
Store.prototype.cookiesPerHour = function() {
  for (var i = 0; i < hoursOperation.length; i++) {
    this.soldCookiesPerHour[i] = Math.round(this.soldCookiesPerHour[i] = this.avgCookiePerCust * this.custPerHour());
    this.totalCookies += this.soldCookiesPerHour[i];
  }
  return this.soldCookiesPerHour;
};

Store.prototype.table2 = function () {
  var table = document.getElementById("sales");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  cell1.textContent = this.totalCookies;
  for (var i = hoursOperation.length - 1; i >= 0; i--) {
    var cell1 = row.insertCell(0);
    cell1.textContent = this.cookiesPerHour()[i];
    
  }
  cell1.textContent = this.Location;
};

// Store.prototype.renderHours = function () {
//   var parentEl = document.getElementById('sales'); 
//   var liEl = document.createElement('th');
//   for(var i = 0; i < hoursOperation.length; i++){
//     var tdElement = document.createElement('td');
//     tdElement.textContent = hoursOperation[i];
//     parentEl.appendChild(tdElement);
//   }
//   liEl = document.createElement('td');
//   liEl.textContent = 'Daily Location Total';
//   parentEl.appendChild(liEl);
// };
// seattle.renderHours();

//calling all the prototypes
for (var x = 0; x < locationsAll.length; x++) {
  locationsAll[x].cookiesPerHour();
  locationsAll[x].table2();
}


//Object SEATTLE
// var seattleLocation = {
//   Location: 'Seattle',
//   minCustPerHour: 23,
//   maxCustPerHour: 65,
//   avgCookiePerCust: 6.3,
//   soldCookiesPerHour: [],
//   totalCookies: 0,
//   custPerHour: function getRandomInt() {
//     return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; 
//   },
//   cookiesPerHour: function() {    
//     var locationElement = document.getElementById('seattle')
//     var listLocationElement = document.createElement('h2');
//     listLocationElement.textContent = this.Location;
//     locationElement.appendChild(listLocationElement);
//     for (var i = 0; i < hoursOperation.length; i++) {
//       this.soldCookiesPerHour[i] = Math.ceil(this.soldCookiesPerHour[i] = this.avgCookiePerCust * this.custPerHour());
//       this.totalCookies = this.totalCookies + this.soldCookiesPerHour[i]; 
//       var listElement = document.createElement('li');
//       listElement.textContent = `${hoursOperation[i]} ${this.soldCookiesPerHour[i]} cookies`;
//       locationElement.appendChild(listElement);
//     }
//     listElement.textContent = `Total: ${this.totalCookies} cookies`;
//     locationElement.appendChild(listElement);
//     return this.soldCookiesPerHour;
//   }
// };
// seattleLocation.cookiesPerHour();

// //Object TOKYO
// var tokyoLocation = {
//   Location: 'Tokyo',
//   minCustPerHour: 3,
//   maxCustPerHour: 24,
//   avgCookiePerCust: 1.2,
//   soldCookiesPerHour: [],
//   totalCookies: 0,
//   custPerHour: function getRandomInt() {
//     return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; 
//   },
//   cookiesPerHour: function() {    
//     var locationElement = document.getElementById('tokyo')
//     var listLocationElement = document.createElement('h2');
//     listLocationElement.textContent = this.Location;
//     locationElement.appendChild(listLocationElement);
//     for (var i = 0; i < hoursOperation.length; i++) {
//       this.soldCookiesPerHour[i] = Math.ceil(this.soldCookiesPerHour[i] = this.avgCookiePerCust * this.custPerHour());
//       this.totalCookies = this.totalCookies + this.soldCookiesPerHour[i]; 
//       var listElement = document.createElement('li');
//       listElement.textContent = `${hoursOperation[i]} ${this.soldCookiesPerHour[i]} cookies`;
//       locationElement.appendChild(listElement);
//     }
//     listElement.textContent = `Total: ${this.totalCookies} cookies`;
//     locationElement.appendChild(listElement);
//     return this.soldCookiesPerHour;
//   }
// };
// tokyoLocation.cookiesPerHour();

// //Object DUBAI
// var dubaiLocation = {
//   Location: 'Dubai',
//   minCustPerHour: 11,
//   maxCustPerHour: 38,
//   avgCookiePerCust: 3.7,
//   soldCookiesPerHour: [],
//   totalCookies: 0,
//   custPerHour: function getRandomInt() {
//     return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; 
//   },
//   cookiesPerHour: function() {    
//     var locationElement = document.getElementById('dubai')
//     var listLocationElement = document.createElement('h2');
//     listLocationElement.textContent = this.Location;
//     locationElement.appendChild(listLocationElement);
//     for (var i = 0; i < hoursOperation.length; i++) {
//       this.soldCookiesPerHour[i] = Math.ceil(this.soldCookiesPerHour[i] = this.avgCookiePerCust * this.custPerHour());
//       this.totalCookies = this.totalCookies + this.soldCookiesPerHour[i]; 
//       var listElement = document.createElement('li');
//       listElement.textContent = `${hoursOperation[i]} ${this.soldCookiesPerHour[i]} cookies`;
//       locationElement.appendChild(listElement);
//     }
//     listElement.textContent = `Total: ${this.totalCookies} cookies`;
//     locationElement.appendChild(listElement);
//     return this.soldCookiesPerHour;
//   }
// };
// dubaiLocation.cookiesPerHour();

// // Object PARIS
// var parisLocation = {
//   Location: 'Paris',
//   minCustPerHour: 20,
//   maxCustPerHour: 37,
//   avgCookiePerCust: 2.3,
//   soldCookiesPerHour: [],
//   totalCookies: 0,
//   custPerHour: function getRandomInt() {
//     return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; 
//   },
//   cookiesPerHour: function() {    
//     var locationElement = document.getElementById('paris')
//     var listLocationElement = document.createElement('h2');
//     listLocationElement.textContent = this.Location;
//     locationElement.appendChild(listLocationElement);
//     for (var i = 0; i < hoursOperation.length; i++) {
//       this.soldCookiesPerHour[i] = Math.ceil(this.soldCookiesPerHour[i] = this.avgCookiePerCust * this.custPerHour());
//       this.totalCookies = this.totalCookies + this.soldCookiesPerHour[i]; 
//       var listElement = document.createElement('li');
//       listElement.textContent = `${hoursOperation[i]} ${this.soldCookiesPerHour[i]} cookies`;
//       locationElement.appendChild(listElement);
//     }
//     listElement.textContent = `Total: ${this.totalCookies} cookies`;
//     locationElement.appendChild(listElement);
//     return this.soldCookiesPerHour;
//   }
// };
// parisLocation.cookiesPerHour();

// //Object LIMA
// var limaLocation = {
//   Location: 'Lima',
//   minCustPerHour: 2,
//   maxCustPerHour: 16,
//   avgCookiePerCust: 4.6,
//   soldCookiesPerHour: [],
//   totalCookies: 0,
//   custPerHour: function getRandomInt() {
//     return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; 
//   },
//   cookiesPerHour: function() {    
//     var locationElement = document.getElementById('lima')
//     var listLocationElement = document.createElement('h2');
//     listLocationElement.textContent = this.Location;
//     locationElement.appendChild(listLocationElement);
//     for (var i = 0; i < hoursOperation.length; i++) {
//       this.soldCookiesPerHour[i] = Math.ceil(this.soldCookiesPerHour[i] = this.avgCookiePerCust * this.custPerHour());
//       this.totalCookies = this.totalCookies + this.soldCookiesPerHour[i]; 
//       var listElement = document.createElement('li');
//       listElement.textContent = `${hoursOperation[i]} ${this.soldCookiesPerHour[i]} cookies`;
//       locationElement.appendChild(listElement);
//     }
//     listElement.textContent = `Total: ${this.totalCookies} cookies`;
//     locationElement.appendChild(listElement);
//     return this.soldCookiesPerHour;
//   }
// };
// limaLocation.cookiesPerHour();