'use strict';
let workHours= ['6am', '7am', '8am','9am','10am','11am','12am' ,'1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm'];

const parentElement = document.getElementById( 'Sales' );
const tableElement = document.getElementById( 'Table' );

function City ( name, min, max, avgCookieSale ) {
    this.name = name;
    this.min = min;
    this.max = max;
    this.avgCookieSale = avgCookieSale;
    this.cookiesPerHour =[];
    this.customerPerHour=[];
    this.Total=0;
    City.allCity.push( this );
  }
  City.allCity = [];


  City.prototype.getCookies= function() {
    for( let i = 0; i< workHours.length; i++) {
      let hourlyCustomers= randomNoOfCustomers( this.min, this.max );
      let cookiesNo=Math.ceil( ( hourlyCustomers )*this.avgCookieSale );
      this.Total+=cookiesNo;
      this.cookiesPerHour.push( cookiesNo );
      this.customerPerHour.push( hourlyCustomers );
    }
    console.log(this.cookiesPerHour, this.Total);



    
  
  };
  
  City.prototype.render = function () {

    const tableElement = document.getElementById( 'Table' );
    parentElement.appendChild(tableElement);

    const tr = document.createElement( 'tr' );
    tableElement.appendChild( tr );

    const td = document.createElement( 'td' );
    tr.appendChild( td );
    td.textContent = `${this.name}`;
    
    for( let i = 0; i < workHours.length; i++ ) {
      const tContent = document.createElement( 'td' );
      tr.appendChild( tContent );
      tContent.textContent = `${this.cookiesPerHour[i]}`;
    }
    const td1=document.createElement( 'td' );
    tr.appendChild( td1 );
    td1.textContent = `${this.Total}`;
}
  


function heading() {
let trElement = document.createElement('tr');
Table.appendChild(trElement);
let thElement = document.createElement('th');
thElement.textContent = ' ';

trElement.appendChild(thElement);

for (let i =0; i < workHours.length; i++) {
  let thElement = document.createElement('th');
  trElement.appendChild(thElement);
  thElement.textContent = workHours[i];
}
let th1Element = document.createElement('th');
trElement.appendChild(th1Element);
th1Element.textContent = 'Total Daily';
}

function footer() {
let trfoot = document.createElement('tr');
tableElement.appendChild(trfoot);
let thElement = document.createElement('th');
trfoot.appendChild(thElement);
thElement.textContent = 'Total';

let totalOfTotal;
for (let i = 0; i < workHours.length; i++) {
  let total = 0
 totalOfTotal = 0
for (let j = 0; j < City.allCity.length; j++){
total+= City.allCity[j].cookiesPerHour[i];
totalOfTotal+=City.allCity[j].Total;
}
  let thElement = document.createElement('th');
  trfoot.appendChild(thElement);
  thElement.textContent = total;
}

let th1 = document.createElement('th');
trfoot.appendChild(th1);
th1.textContent = totalOfTotal;
}


  
function randomNoOfCustomers(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
  }


heading();

let Seattle = new City( 'Seattle', 23, 65, 6.3 );
Seattle.getCookies();
Seattle.render();

let Tokyo = new City( 'tokyo', 3, 24, 1.2 );
Tokyo.getCookies();
Tokyo.render();

let Dubai = new City( 'Dubai', 11, 38, 3.7 );
Dubai.getCookies();
Dubai.render();

let Paris = new City( 'Paris', 20, 38, 2.3 );
Paris.getCookies();
Paris.render();

let Lima = new City( 'Lima', 2, 16, 4.6 );
Lima.getCookies();
Lima.render();

footer();


// let Seattle = {
//     name : 'Seattle',
//     min : 23,
//     max : 65,
//     avgCookieSale : 6.3,
//     cookiesPerHour : [],
//     customerPerHour : [],
//     Total : 0,
//     getcookies : function(){
//         for (let i = 0; i< workHours.length; i++) {
//             let hourlyCustomers = randomNoOfCustomers( this.min, this.max );
//             let cookiesNo = Math.ceil( ( hourlyCustomers )*this.avgCookieSale );

//             console.log(cookiesNo);
//             this.cookiesPerHour.push(cookiesNo);
//             this.Total += cookiesNo;
//             this.customerPerHour.push(hourlyCustomers);
//         }
//     },


// render: function () {
//         const parentElement = document.getElementById( 'Sales' );
    
//         const articleElement = document.createElement( 'article' );
//         parentElement.appendChild( articleElement );
    
//         const h2Element = document.createElement( 'h2' );
//         articleElement.appendChild( h2Element );
//         h2Element.textContent= this.name;
    
//         const ulElement = document.createElement( 'ul' );
//         articleElement.appendChild( ulElement );
    
//         for( let i = 0; i < workHours.length; i++ ) {
//           const liElement = document.createElement( 'li' );
//           ulElement.appendChild( liElement );
//           liElement.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    
//         }
//         const li2Element = document.createElement( 'li' );
//         ulElement.appendChild( li2Element );
//         li2Element.textContent = `Total: ${this.Total} cookies`; 
//     }

// };


// let Tokyo = {
//     name : 'Tokyo',
//     min : 3,
//     max : 24,
//     avgCookieSale : 1.2,
//     cookiesPerHour : [],
//     customerPerHour : [],
//     Total : 0,
//     getcookies : function(){
//         for (let i = 0; i< workHours.length; i++) {
//             let hourlyCustomers = randomNoOfCustomers( this.min, this.max );
//             let cookiesNo = Math.ceil( hourlyCustomers *(this.avgCookieSale ));
//             console.log(hourlyCustomers);
//         console.log(cookiesNo);
//             this.cookiesPerHour.push(cookiesNo);
//             this.Total += cookiesNo;
//             this.customerPerHour.push(hourlyCustomers);
//         }
//     },

// render: function () {
//         const parentElement = document.getElementById( 'Sales' );
    
//         const articleElement = document.createElement( 'article' );
//         parentElement.appendChild( articleElement );
    
//         const h2Element = document.createElement( 'h2' );
//         articleElement.appendChild( h2Element );
//         h2Element.textContent= this.name;
    
//         const ulElement = document.createElement( 'ul' );
//         articleElement.appendChild( ulElement );
    
//         for( let i = 0; i < workHours.length; i++ ) {
//           const liElement = document.createElement( 'li' );
//           ulElement.appendChild( liElement );
//           liElement.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    
//         }
//         const li2Element = document.createElement( 'li' );
//         ulElement.appendChild( li2Element );
//         li2Element.textContent = `Total: ${this.Total} cookies`; 
//     }

// };


// let Dubai = {
//     name : 'Dubai',
//     min : 11,
//     max : 38,
//     avgCookieSale : 3.7,
//     cookiesPerHour : [],
//     customerPerHour : [],
//     Total : 0,
//     getcookies : function(){
//         for (let i = 0; i< workHours.length; i++) {
//             let hourlyCustomers = randomNoOfCustomers( this.min, this.max );
//             let cookiesNo = Math.ceil( ( hourlyCustomers )*this.avgCookieSale );

//         console.log(cookiesNo);
//             this.cookiesPerHour.push(cookiesNo);
//             this.Total += cookiesNo;
//             this.customerPerHour.push(hourlyCustomers);
//         }
//     },


// render: function () {
//         const parentElement = document.getElementById( 'Sales' );
    
//         const articleElement = document.createElement( 'article' );
//         parentElement.appendChild( articleElement );
    
//         const h2Element = document.createElement( 'h2' );
//         articleElement.appendChild( h2Element );
//         h2Element.textContent= this.name;
    
//         const ulElement = document.createElement( 'ul' );
//         articleElement.appendChild( ulElement );
    
//         for( let i = 0; i < workHours.length; i++ ) {
//           const liElement = document.createElement( 'li' );
//           ulElement.appendChild( liElement );
//           liElement.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    
//         }
//         const li2Element = document.createElement( 'li' );
//         ulElement.appendChild( li2Element );
//         li2Element.textContent = `Total: ${this.Total} cookies`; 
//     }

// };


// let Paris = {
//     name : 'Paris',
//     min : 20,
//     max : 38,
//     avgCookieSale : 2.3,
//     cookiesPerHour : [],
//     customerPerHour : [],
//     Total : 0,
//     getcookies : function(){
//         for (let i = 0; i< workHours.length; i++) {
//             let hourlyCustomers = randomNoOfCustomers( this.min, this.max );
//             let cookiesNo = Math.ceil( ( hourlyCustomers )*this.avgCookieSale );

//         console.log(cookiesNo);
//             this.cookiesPerHour.push(cookiesNo);
//             this.Total += cookiesNo;
//             this.customerPerHour.push(hourlyCustomers);
//         }
//     },


// render: function () {
//         const parentElement = document.getElementById( 'Sales' );
    
//         const articleElement = document.createElement( 'article' );
//         parentElement.appendChild( articleElement );
    
//         const h2Element = document.createElement( 'h2' );
//         articleElement.appendChild( h2Element );
//         h2Element.textContent= this.name;
    
//         const ulElement = document.createElement( 'ul' );
//         articleElement.appendChild( ulElement );
    
//         for( let i = 0; i < workHours.length; i++ ) {
//           const liElement = document.createElement( 'li' );
//           ulElement.appendChild( liElement );
//           liElement.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    
//         }
//         const li2Element = document.createElement( 'li' );
//         ulElement.appendChild( li2Element );
//         li2Element.textContent = `Total: ${this.Total} cookies`; 
//     }

// };


// let Lima = {
//     name : 'Lima',
//     min : 2,
//     max : 16,
//     avgCookieSale : 4.6,
//     cookiesPerHour : [],
//     customerPerHour : [],
//     Total : 0,
//     getcookies : function(){
//         for (let i = 0; i< workHours.length; i++) {
//             let hourlyCustomers = randomNoOfCustomers( this.min, this.max );
//             let cookiesNo = Math.ceil( ( hourlyCustomers )*this.avgCookieSale );

//         console.log(cookiesNo);
//             this.cookiesPerHour.push(cookiesNo);
//             this.Total += cookiesNo;
//             this.customerPerHour.push(hourlyCustomers);
//         }
//     },


// render: function () {
//         const parentElement = document.getElementById( 'Sales' );
    
//         const articleElement = document.createElement( 'article' );
//         parentElement.appendChild( articleElement );
    
//         const h2Element = document.createElement( 'h2' );
//         articleElement.appendChild( h2Element );
//         h2Element.textContent= this.name;
    
//         const ulElement = document.createElement( 'ul' );
//         articleElement.appendChild( ulElement );
    
//         for( let i = 0; i < workHours.length; i++ ) {
//           const liElement = document.createElement( 'li' );
//           ulElement.appendChild( liElement );
//           liElement.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    
//         }
//         const li2Element = document.createElement( 'li' );
//         ulElement.appendChild( li2Element );
//         li2Element.textContent = `Total: ${this.Total} cookies`; 
//     }

// };


