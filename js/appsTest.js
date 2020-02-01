'use strict';
var hoursOperation = [' 6am:',' 7am:',' 8am:',' 9am:','10am:','11am:','12pm:',' 1pm:',' 2pm:',' 3pm:',' 4pm:',' 5pm:',' 6pm:',' 7pm:'];

//Object SEATTLE
var seattleLocation = {
  Location: 'Seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerCust: 6.3,
  soldCookiesPerHour: [],
  totalCookies: 0,
  custPerHour: function getRandomInt() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; 
  },
  cookiesPerHour: function() {    
    var locationElement = document.getElementById('seattle')
    var listLocationElement = document.createElement('h2');
    listLocationElement.textContent = this.Location;
    locationElement.appendChild(listLocationElement);
    for (var i = 0; i < hoursOperation.length; i++) {
      this.soldCookiesPerHour[i] = Math.ceil(this.soldCookiesPerHour[i] = this.avgCookiePerCust * this.custPerHour());
      this.totalCookies = this.totalCookies + this.soldCookiesPerHour[i]; 
      var listElement = document.createElement('li');
      listElement.textContent = `${hoursOperation[i]} ${this.soldCookiesPerHour[i]} cookies`;
      locationElement.appendChild(listElement);
    }
    listElement.textContent = `Total: ${this.totalCookies} cookies`;
    locationElement.appendChild(listElement);
    return this.soldCookiesPerHour;
  }
};
seattleLocation.cookiesPerHour();

//Object TOKYO
var tokyoLocation = {
  Location: 'Tokyo',
  minCustPerHour: 3,
  maxCustPerHour: 24,
  avgCookiePerCust: 1.2,
  soldCookiesPerHour: [],
  totalCookies: 0,
  custPerHour: function getRandomInt() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; 
  },
  cookiesPerHour: function() {    
    var locationElement = document.getElementById('tokyo')
    var listLocationElement = document.createElement('h2');
    listLocationElement.textContent = this.Location;
    locationElement.appendChild(listLocationElement);
    for (var i = 0; i < hoursOperation.length; i++) {
      this.soldCookiesPerHour[i] = Math.ceil(this.soldCookiesPerHour[i] = this.avgCookiePerCust * this.custPerHour());
      this.totalCookies = this.totalCookies + this.soldCookiesPerHour[i]; 
      var listElement = document.createElement('li');
      listElement.textContent = `${hoursOperation[i]} ${this.soldCookiesPerHour[i]} cookies`;
      locationElement.appendChild(listElement);
    }
    listElement.textContent = `Total: ${this.totalCookies} cookies`;
    locationElement.appendChild(listElement);
    return this.soldCookiesPerHour;
  }
};
tokyoLocation.cookiesPerHour();

//Object DUBAI
var dubaiLocation = {
  Location: 'Dubai',
  minCustPerHour: 11,
  maxCustPerHour: 38,
  avgCookiePerCust: 3.7,
  soldCookiesPerHour: [],
  totalCookies: 0,
  custPerHour: function getRandomInt() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; 
  },
  cookiesPerHour: function() {    
    var locationElement = document.getElementById('dubai')
    var listLocationElement = document.createElement('h2');
    listLocationElement.textContent = this.Location;
    locationElement.appendChild(listLocationElement);
    for (var i = 0; i < hoursOperation.length; i++) {
      this.soldCookiesPerHour[i] = Math.ceil(this.soldCookiesPerHour[i] = this.avgCookiePerCust * this.custPerHour());
      this.totalCookies = this.totalCookies + this.soldCookiesPerHour[i]; 
      var listElement = document.createElement('li');
      listElement.textContent = `${hoursOperation[i]} ${this.soldCookiesPerHour[i]} cookies`;
      locationElement.appendChild(listElement);
    }
    listElement.textContent = `Total: ${this.totalCookies} cookies`;
    locationElement.appendChild(listElement);
    return this.soldCookiesPerHour;
  }
};
dubaiLocation.cookiesPerHour();

// Object PARIS
var parisLocation = {
  Location: 'Paris',
  minCustPerHour: 20,
  maxCustPerHour: 37,
  avgCookiePerCust: 2.3,
  soldCookiesPerHour: [],
  totalCookies: 0,
  custPerHour: function getRandomInt() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; 
  },
  cookiesPerHour: function() {    
    var locationElement = document.getElementById('paris')
    var listLocationElement = document.createElement('h2');
    listLocationElement.textContent = this.Location;
    locationElement.appendChild(listLocationElement);
    for (var i = 0; i < hoursOperation.length; i++) {
      this.soldCookiesPerHour[i] = Math.ceil(this.soldCookiesPerHour[i] = this.avgCookiePerCust * this.custPerHour());
      this.totalCookies = this.totalCookies + this.soldCookiesPerHour[i]; 
      var listElement = document.createElement('li');
      listElement.textContent = `${hoursOperation[i]} ${this.soldCookiesPerHour[i]} cookies`;
      locationElement.appendChild(listElement);
    }
    listElement.textContent = `Total: ${this.totalCookies} cookies`;
    locationElement.appendChild(listElement);
    return this.soldCookiesPerHour;
  }
};
parisLocation.cookiesPerHour();

//Object LIMA
var limaLocation = {
  Location: 'Lima',
  minCustPerHour: 2,
  maxCustPerHour: 16,
  avgCookiePerCust: 4.6,
  soldCookiesPerHour: [],
  totalCookies: 0,
  custPerHour: function getRandomInt() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; 
  },
  cookiesPerHour: function() {    
    var locationElement = document.getElementById('lima')
    var listLocationElement = document.createElement('h2');
    listLocationElement.textContent = this.Location;
    locationElement.appendChild(listLocationElement);
    for (var i = 0; i < hoursOperation.length; i++) {
      this.soldCookiesPerHour[i] = Math.ceil(this.soldCookiesPerHour[i] = this.avgCookiePerCust * this.custPerHour());
      this.totalCookies = this.totalCookies + this.soldCookiesPerHour[i]; 
      var listElement = document.createElement('li');
      listElement.textContent = `${hoursOperation[i]} ${this.soldCookiesPerHour[i]} cookies`;
      locationElement.appendChild(listElement);
    }
    listElement.textContent = `Total: ${this.totalCookies} cookies`;
    locationElement.appendChild(listElement);
    return this.soldCookiesPerHour;
  }
};
limaLocation.cookiesPerHour();
