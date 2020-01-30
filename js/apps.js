'use strict';

var seattleLocation = {
  Location: 'Seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerCust: 6.3,
  custPerHour: function getRandomInt() {
    this.minCustPerHour = Math.ceil(this.minCustPerHour);
    this.maxCustPerHour = Math.floor(this.maxCustPerHour);
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; 
  },
  hourOperation: [
    {time: '6am: ', totalcookies: 0},
    {time: '7am: ', totalcookies: 0},
    {time: '8am: ', totalcookies: 0},
    {time: '9am: ', totalcookies: 0},
    {time: '10am: ', totalcookies: 0},
    {time: '11am: ', totalcookies: 0},
    {time: '12pm: ', totalcookies: 0},
    {time: '1pm: ', totalcookies: 0},
    {time: '2pm: ', totalcookies: 0},
    {time: '3pm: ', totalcookies: 0},
    {time: '4pm: ', totalcookies: 0},
    {time: '5pm: ', totalcookies: 0},
    {time: '6pm: ', totalcookies: 0},
    {time: '7pm: ', totalcookies: 0},
    {total: 'Total: ', grandTotal: 0}
  ]
};

var cookiesPerHourElement = document.getElementById('cookiesPerHour');

//calculates the number of cookies per around, and appends it to the each object, inside the hourOperation Array
seattleLocation.hourOperation.grandTotal = 0;
for (var i = 0; i < seattleLocation.hourOperation.length; i++) {
  seattleLocation.hourOperation[i].totalcookies = Math.ceil(seattleLocation.hourOperation[i].totalcookies = seattleLocation.avgCookiePerCust * seattleLocation.custPerHour());
  seattleLocation.hourOperation.grandTotal = seattleLocation.hourOperation.grandTotal + seattleLocation.hourOperation[i].totalcookies;
}

//prints each object in the hourOperarion Array in sales.html
for(var i = 0; i < seattleLocation.hourOperation.length; i++){
    // create the element
    var listElement = document.createElement('li');
    // give it conent
    listElement.textContent = seattleLocation.hourOperation[i].time + seattleLocation.hourOperation[i].totalcookies;
    // append the elemnt to the dom
    cookiesPerHourElement.appendChild(listElement);
    if (i > 13) {
      listElement.textContent = seattleLocation.hourOperation[i].total + seattleLocation.hourOperation.grandTotal;
    }
}



