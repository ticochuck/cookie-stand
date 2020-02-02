'use strict';
var hoursOperation = [' 6am',' 7am',' 8am',' 9am','10am','11am','12pm',' 1pm',' 2pm',' 3pm',' 4pm',' 5pm',' 6pm',' 7pm'];
var allStores = [];


//this is my Object Constructor 
function Store(Location, minCustPerHour, maxCustPerHour, avgCookiePerCust, soldCookiesPerHour, totalCookies) {
  this.Location = Location;
  this. minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerCust = avgCookiePerCust;
  this.soldCookiesPerHour = soldCookiesPerHour;
  this.totalCookies = totalCookies;
  allStores.push(this);
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

//renderInfo function is used to pass info to the sales.html page using 2 parameters: create.element and text.content
var renderInfo = function(tableElement, textContent) {
  var tableMain = document.getElementById('sales');
  var tableData = document.createElement(tableElement);
  tableData.textContent = textContent;
  tableMain.appendChild(tableData);  
};

//Render cookies per hour per Location
Store.prototype.rederData = function() {
  renderInfo('tr');
  for (var i = 0; i < hoursOperation.length; i++) {
    if (i === 0) {
      renderInfo('td', this.Location)
    }
    renderInfo('td', this.cookiesPerHour()[i])
  }
};

//render table headers
renderInfo('th')
for (var iHeaders = 0; iHeaders < hoursOperation.length; iHeaders++) {
  renderInfo('th', hoursOperation[iHeaders]);
}

//render info calculated in the prototypes
for (var renderAllStores = 0; renderAllStores < allStores.length; renderAllStores++) {
  allStores[renderAllStores].rederData();
  allStores[renderAllStores].cookiesPerHour();
};

