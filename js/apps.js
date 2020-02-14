'use strict';

var hoursOperation = [' 6am',' 7am',' 8am',' 9am','10am','11am','12pm',' 1pm',' 2pm',' 3pm',' 4pm',' 5pm',' 6pm',' 7pm'];
var allStores = [];
var totalsPerHour = [];
var grandTotalPerHour = [];

//this is my Object Constructor 
function Store(Location, minCustPerHour, maxCustPerHour, avgCookiePerCust, [], totalCookies) {
  this.Location = Location;
  this. minCustPerHour = minCustPerHour;
  this.maxCustPerHour = maxCustPerHour;
  this.avgCookiePerCust = avgCookiePerCust;
  this.soldCookiesPerHour = [];
  this.totalCookies = totalCookies;
  allStores.push(this);
};

//create Stores for different locations
new Store('Seattle', 23, 65, 6.3, [], 0);
new Store('Tokyo', 3, 24, 1.2, [], 0);
new Store('Dubai', 11, 38, 3.7, [], 0);
new Store('Paris', 20, 38, 2.3, [], 0);
new Store('Lima', 2, 16, 4.6, [], 0);

// create new Store from User Input 
var userForm = document.getElementById('newLocation');
userForm.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    event.preventDefault();
          
    var newLocationName = e.target.elementLocationName.value;
      
    var newMinCustPerHour = parseInt(e.target.elementnewMinCustPerHour.value);
    var newMaxCustPerHour = parseInt(e.target.elementnewMaxCustPerHour.value);
    var newAvgCookiePerCust = parseFloat(e.target.elementnewAvgCookiePerCust.value);
    grandTotalPerHour = [];
      
    new Store(newLocationName, newMinCustPerHour, newMaxCustPerHour, newAvgCookiePerCust, [], 0);

    for (var x = allStores.length-1; x > allStores.length-2; x--) {
      allStores[x].cookiesPerHour();
      allStores[x].rederData();
    }

    //delete 14 td elements in the footer 
    for (var t=0; t<hoursOperation.length+2; t++){  
      var elem = document.querySelector('td');
      elem.parentNode.removeChild(elem);
    };

    //call hourlyTotals function to calculate the totals and append it to the footer
    hourlyTotals();
    
    e.target.elementLocationName.value = null;
    e.target.elementnewMinCustPerHour.value = null;
    e.target.elementnewMaxCustPerHour.value = null;
    e.target.elementnewAvgCookiePerCust.value = null; 
}

//CALCULATIONS SECTION
//generate random customers per hour
Store.prototype.custPerHour = function() {
  return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; 
};

//calculates total cookies sold per hour and daily totals 
Store.prototype.cookiesPerHour = function() {
  for (var j = 0; j < hoursOperation.length; j++) {
    this.soldCookiesPerHour[j] = Math.round(this.soldCookiesPerHour[j] = this.avgCookiePerCust * this.custPerHour());
    this.totalCookies += this.soldCookiesPerHour[j];
  }
}

//RENDERING SECTION
//renderInfo function is used to pass info to the sales.html page using 2 parameters: create.element and text.content
var renderInfo = function(tableElement, textContent) {
  var tableMain = document.getElementById('sales');
  var tableData = document.createElement(tableElement);
  tableData.textContent = textContent;
  tableMain.appendChild(tableData);  
};

//render table header and footer
renderInfo('th') //appends table header 
for (var iHeaders = 0; iHeaders < hoursOperation.length; iHeaders++) {
  renderInfo('th', hoursOperation[iHeaders]);
}
renderInfo('th', 'Daily Location Total'); //appends header for daily totals

//Render cookies per hour per Location and daily totals
Store.prototype.rederData = function() {
  renderInfo('tr');
  for (var i = 0; i < hoursOperation.length; i++) {
    if (i === 0) {
      renderInfo('td', this.Location); //appends location name to table
    }
    renderInfo('td', this.soldCookiesPerHour[i]); //appends total cookies sold per hour per store
  }
  renderInfo('td', this.totalCookies); //appends total daily cookies per store
};

//render info calculated in the prototypes
for (var renderAllStores = 0; renderAllStores < allStores.length; renderAllStores++) {
  allStores[renderAllStores].cookiesPerHour();
  allStores[renderAllStores].rederData();
}

var hourlyTotals = function () { 
  var tableMain = document.getElementById('footer');
  var tableData = document.createElement('td');
  tableData.textContent = 'Totals';
  tableMain.appendChild(tableData);
  
  var grandTotal = 0;
  for (var a = 0; a < hoursOperation.length; a++) {
    var hourlyTotalForAllStores = 0;  
    for (var b = 0; b < allStores.length; b++) {
      totalsPerHour[a] = allStores[b].soldCookiesPerHour[a]; 
      hourlyTotalForAllStores += totalsPerHour[a];
      
    } 
    grandTotalPerHour.push(hourlyTotalForAllStores);
      console.log(grandTotalPerHour);
    grandTotal += hourlyTotalForAllStores;
    var tableMain = document.getElementById('footer');
    var tableData = document.createElement('tfoot');
    var tableData = document.createElement('td');
    tableData.textContent = grandTotalPerHour[a];
    tableMain.appendChild(tableData); 
    
  }
  var tableData = document.createElement('td');
  tableData.textContent = grandTotal;
  tableMain.appendChild(tableData);
}
hourlyTotals();