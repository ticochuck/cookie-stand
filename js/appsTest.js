'use strict';
var hoursOperation = [' 6am:',' 7am:',' 8am:',' 9am:','10am:','11am:','12pm:',' 1pm:',' 2pm:',' 3pm:',' 4pm:',' 5pm:',' 6pm:',' 7pm:'];

var cookiesPerHourElement = document.getElementById('cookiesPerHour');
var seattleElement = document.getElementById('seattle');

// var dubaiElement = document.getElementById('seattle');
// var parisElement = document.getElementById('seattle');
// var limaElement = document.getElementById('seattle');


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
    var listLocationElement = document.createElement('h2');
    listLocationElement.textContent = this.Location;
    seattleElement.appendChild(listLocationElement);
    for (var i = 0; i < hoursOperation.length; i++) {
      console.log('i is: ' + i);
      this.soldCookiesPerHour[i] = Math.ceil(this.soldCookiesPerHour[i] = this.avgCookiePerCust * this.custPerHour());
      this.totalCookies = this.totalCookies + this.soldCookiesPerHour[i]; 
      console.log(`${hoursOperation[i]} ${this.soldCookiesPerHour[i]} cookies`);
      console.log('total cookies: ' + this.totalCookies);
      var listElement = document.createElement('li');
      listElement.textContent = `${hoursOperation[i]} ${this.soldCookiesPerHour[i]} cookies.`;
      cookiesPerHourElement.appendChild(listElement);
    }
    //this.soldCookiesPerHour.push(`Total: ${this.totalCookies} cookies`);
    console.log(this.soldCookiesPerHour)
    var listElement = document.createElement('li');
    listElement.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesPerHourElement.appendChild(listElement);
    
    return this.soldCookiesPerHour;
  }
};

seattleLocation.cookiesPerHour();

var cookiesPerHourTokyoElement = document.getElementById('cookiesPerHourTokio');
var tokyoElement = document.getElementById('tokyo');

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
    var listLocationElement = document.createElement('h2');
    listLocationElement.textContent = this.Location;
    tokyoElement.appendChild(listLocationElement);
    for (var i = 0; i < hoursOperation.length; i++) {
      this.soldCookiesPerHour[i] = Math.ceil(this.soldCookiesPerHour[i] = this.avgCookiePerCust * this.custPerHour());
      this.totalCookies = this.totalCookies + this.soldCookiesPerHour[i]; 
      var listElement = document.createElement('li');
      listElement.textContent = `${hoursOperation[i]} ${this.soldCookiesPerHour[i]} cookies.`;
      cookiesPerHourTokyoElement.appendChild(listElement);
    }
    var listElement = document.createElement('li');
    listElement.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesPerHourTokyoElement.appendChild(listElement);
    
    return this.soldCookiesPerHour;
  }
};

tokyoLocation.cookiesPerHour();

var cookiesPerHourDubaiElement = document.getElementById('cookiesPerHourDubai');
var dubaiElement = document.getElementById('dubai');

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
    var listLocationElement = document.createElement('h2');
    listLocationElement.textContent = this.Location;
    dubaiElement.appendChild(listLocationElement);
    for (var i = 0; i < hoursOperation.length; i++) {
      this.soldCookiesPerHour[i] = Math.ceil(this.soldCookiesPerHour[i] = this.avgCookiePerCust * this.custPerHour());
      this.totalCookies = this.totalCookies + this.soldCookiesPerHour[i]; 
      var listElement = document.createElement('li');
      listElement.textContent = `${hoursOperation[i]} ${this.soldCookiesPerHour[i]} cookies.`;
      cookiesPerHourDubaiElement.appendChild(listElement);
    }
    var listElement = document.createElement('li');
    listElement.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesPerHourDubaiElement.appendChild(listElement);
    
    return this.soldCookiesPerHour;
  }
};

dubaiLocation.cookiesPerHour();

var cookiesPerHourDubaiElement = document.getElementById('cookiesPerHourParis');
var dubaiElement = document.getElementById('paris');

var parisLocation = {
  Location: 'Paris',
  minCustPerHour: 20,
  maxCustPerHour: 38,
  avgCookiePerCust: 2.3,
  soldCookiesPerHour: [],
  totalCookies: 0,
  custPerHour: function getRandomInt() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; 
  },
  cookiesPerHour: function() {  
    var listLocationElement = document.createElement('h2');
    listLocationElement.textContent = this.Location;
    dubaiElement.appendChild(listLocationElement);
    for (var i = 0; i < hoursOperation.length; i++) {
      this.soldCookiesPerHour[i] = Math.ceil(this.soldCookiesPerHour[i] = this.avgCookiePerCust * this.custPerHour());
      this.totalCookies = this.totalCookies + this.soldCookiesPerHour[i]; 
      var listElement = document.createElement('li');
      listElement.textContent = `${hoursOperation[i]} ${this.soldCookiesPerHour[i]} cookies.`;
      cookiesPerHourDubaiElement.appendChild(listElement);
    }
    var listElement = document.createElement('li');
    listElement.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesPerHourDubaiElement.appendChild(listElement);
    
    return this.soldCookiesPerHour;
  }
};

parisLocation.cookiesPerHour();

var cookiesPerHourDubaiElement = document.getElementById('cookiesPerHourLima');
var dubaiElement = document.getElementById('lima');

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
    var listLocationElement = document.createElement('h2');
    listLocationElement.textContent = this.Location;
    dubaiElement.appendChild(listLocationElement);
    for (var i = 0; i < hoursOperation.length; i++) {
      this.soldCookiesPerHour[i] = Math.ceil(this.soldCookiesPerHour[i] = this.avgCookiePerCust * this.custPerHour());
      this.totalCookies = this.totalCookies + this.soldCookiesPerHour[i]; 
      var listElement = document.createElement('li');
      listElement.textContent = `${hoursOperation[i]} ${this.soldCookiesPerHour[i]} cookies.`;
      cookiesPerHourDubaiElement.appendChild(listElement);
    }
    var listElement = document.createElement('li');
    listElement.textContent = `Total: ${this.totalCookies} cookies`;
    cookiesPerHourDubaiElement.appendChild(listElement);
    
    return this.soldCookiesPerHour;
  }
};

limaLocation.cookiesPerHour();
