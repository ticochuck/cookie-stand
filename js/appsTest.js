'use strict';

var hoursOperation = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'];

var seattleLocation = {
  Location: 'Seattle',
  minCustPerHour: 23,
  maxCustPerHour: 65,
  avgCookiePerCust: 6.3,
  custPerHour: function getRandomInt() {
    return Math.floor(Math.random() * (this.maxCustPerHour - this.minCustPerHour + 1)) + this.minCustPerHour; 
  },
  cookiesPerHour: function() {
    var hoursOperation = ['6am:','7am:','8am:','9am:','10am:','11am:','12pm:','1pm:','2pm:','3pm:','4pm:','5pm:','6pm:','7pm:'];
    var totalCookiesPerHour = 0;
    var string = totalCookiesPerHour + ' cookies'
    for (var i = 0; i < hoursOperation.length; i++) {
      totalCookiesPerHour = Math.ceil(this.avgCookiePerCust * this.custPerHour());
      return [hoursOperation[i], totalCookiesPerHour];
    }
     
  }
};

console.log('total cookies per hour: ' + seattleLocation.cookiesPerHour() );

var seattleElement = document.getElementById('seattle');

var cookiesPerHourElement = document.getElementById('cookiesPerHour');

var listSeattleElement = document.createElement('h2');
listSeattleElement.textContent = seattleLocation.Location;
seattleElement.appendChild(listSeattleElement);



//calculates the number of cookies per around, and appends it to the each object, inside the hourOperation Array

// for (var i = 0; i < seattleLocation.hourOperation.length; i++) {
//   seattleLocation.hourOperation[i].totalcookies = Math.ceil(seattleLocation.hourOperation[i].totalcookies = seattleLocation.avgCookiePerCust * seattleLocation.custPerHour());
//   seattleLocation.hourOperation.grandTotal = seattleLocation.hourOperation.grandTotal + seattleLocation.hourOperation[i].totalcookies;
//   var listElement = document.createElement('li');
//   // give it conent
//   listElement.textContent = seattleLocation.hourOperation[i].time + seattleLocation.hourOperation[i].totalcookies;
//   // append the elemnt to the dom
//   cookiesPerHourElement.appendChild(listElement);
//   if (i > 13) {
//     listElement.textContent = seattleLocation.hourOperation[i].total + seattleLocation.hourOperation.grandTotal;
//   }
// }



// for(var i = 0; i < seattleLocation.hourOperation.length; i++){
//     // create the element
//     var listElement = document.createElement('li');
//     // give it conent
//     listElement.textContent = seattleLocation.hourOperation[i].time + seattleLocation.hourOperation[i].totalcookies;
//     // append the elemnt to the dom
//     cookiesPerHourElement.appendChild(listElement);
//     if (i > 13) {
//       listElement.textContent = seattleLocation.hourOperation[i].total + seattleLocation.hourOperation.grandTotal;
//     }
// }



