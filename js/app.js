'use strict';
let workHours= ['6am', '7am', '8am','9am','10am','11am','12am' ,'1pm', '2pm', '3pm', '4pm', '5pm','6pm','7pm'];

let Seattle = {
    name : 'Seattle',
    min : 23,
    max : 65,
    avgCookieSale : 6.3,
    cookiesPerHour : [],
    customerPerHour : [],
    Total : 0,
    getcookies : function(){
        for (let i = 0; i< workHours.length; i++) {
            let hourlyCustomers = randomNoOfCustomers( this.min, this.max );
            let cookiesNo = Math.ceil( ( hourlyCustomers )*this.avgCookieSale );

            console.log(cookiesNo);
            this.cookiesPerHour.push(cookiesNo);
            this.Total += cookiesNo;
            this.customerPerHour.push(hourlyCustomers);
        }
    },


render: function () {
        const parentElement = document.getElementById( 'Sales' );
    
        const articleElement = document.createElement( 'article' );
        parentElement.appendChild( articleElement );
    
        const h2Element = document.createElement( 'h2' );
        articleElement.appendChild( h2Element );
        h2Element.textContent= this.name;
    
        const ulElement = document.createElement( 'ul' );
        articleElement.appendChild( ulElement );
    
        for( let i = 0; i < workHours.length; i++ ) {
          const liElement = document.createElement( 'li' );
          ulElement.appendChild( liElement );
          liElement.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    
        }
        const li2Element = document.createElement( 'li' );
        ulElement.appendChild( li2Element );
        li2Element.textContent = `Total: ${this.Total} cookies`; 
    }

};


let Tokyo = {
    name : 'Tokyo',
    min : 3,
    max : 24,
    avgCookieSale : 1.2,
    cookiesPerHour : [],
    customerPerHour : [],
    avgCustomerConsuming : 0,
    getcookies : function(){
        for (let i = 0; i< workHours.length; i++) {
            let hourlyCustomers = randomNoOfCustomers( this.min, this.max );
            let cookiesNo = Math.ceil( hourlyCustomers *(this.avgCookieSale ));
            console.log(hourlyCustomers);
        console.log(cookiesNo);
            this.cookiesPerHour.push(cookiesNo);
            this.Total += cookiesNo;
            this.customerPerHour.push(hourlyCustomers);
        }
    },

render: function () {
        const parentElement = document.getElementById( 'Sales' );
    
        const articleElement = document.createElement( 'article' );
        parentElement.appendChild( articleElement );
    
        const h2Element = document.createElement( 'h2' );
        articleElement.appendChild( h2Element );
        h2Element.textContent= this.name;
    
        const ulElement = document.createElement( 'ul' );
        articleElement.appendChild( ulElement );
    
        for( let i = 0; i < workHours.length; i++ ) {
          const liElement = document.createElement( 'li' );
          ulElement.appendChild( liElement );
          liElement.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    
        }
        const li2Element = document.createElement( 'li' );
        ulElement.appendChild( li2Element );
        li2Element.textContent = `Total: ${this.Total} cookies`; 
    }

};


let Dubai = {
    name : 'Dubai',
    min : 11,
    max : 38,
    avgCookieSale : 3.7,
    cookiesPerHour : [],
    customerPerHour : [],
    avgCustomerConsuming : 0,
    getcookies : function(){
        for (let i = 0; i< workHours.length; i++) {
            let hourlyCustomers = randomNoOfCustomers( this.min, this.max );
            let cookiesNo = Math.ceil( ( hourlyCustomers )*this.avgCookieSale );

        console.log(cookiesNo);
            this.cookiesPerHour.push(cookiesNo);
            this.Total += cookiesNo;
            this.customerPerHour.push(hourlyCustomers);
        }
    },


render: function () {
        const parentElement = document.getElementById( 'Sales' );
    
        const articleElement = document.createElement( 'article' );
        parentElement.appendChild( articleElement );
    
        const h2Element = document.createElement( 'h2' );
        articleElement.appendChild( h2Element );
        h2Element.textContent= this.name;
    
        const ulElement = document.createElement( 'ul' );
        articleElement.appendChild( ulElement );
    
        for( let i = 0; i < workHours.length; i++ ) {
          const liElement = document.createElement( 'li' );
          ulElement.appendChild( liElement );
          liElement.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    
        }
        const li2Element = document.createElement( 'li' );
        ulElement.appendChild( li2Element );
        li2Element.textContent = `Total: ${this.Total} cookies`; 
    }

};


let Paris = {
    name : 'Paris',
    min : 20,
    max : 38,
    avgCookieSale : 2.3,
    cookiesPerHour : [],
    customerPerHour : [],
    avgCustomerConsuming : 0,
    getcookies : function(){
        for (let i = 0; i< workHours.length; i++) {
            let hourlyCustomers = randomNoOfCustomers( this.min, this.max );
            let cookiesNo = Math.ceil( ( hourlyCustomers )*this.avgCookieSale );

        console.log(cookiesNo);
            this.cookiesPerHour.push(cookiesNo);
            this.Total += cookiesNo;
            this.customerPerHour.push(hourlyCustomers);
        }
    },


render: function () {
        const parentElement = document.getElementById( 'Sales' );
    
        const articleElement = document.createElement( 'article' );
        parentElement.appendChild( articleElement );
    
        const h2Element = document.createElement( 'h2' );
        articleElement.appendChild( h2Element );
        h2Element.textContent= this.name;
    
        const ulElement = document.createElement( 'ul' );
        articleElement.appendChild( ulElement );
    
        for( let i = 0; i < workHours.length; i++ ) {
          const liElement = document.createElement( 'li' );
          ulElement.appendChild( liElement );
          liElement.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    
        }
        const li2Element = document.createElement( 'li' );
        ulElement.appendChild( li2Element );
        li2Element.textContent = `Total: ${this.Total} cookies`; 
    }

};


let Lima = {
    name : 'Lima',
    min : 2,
    max : 16,
    avgCookieSale : 4.6,
    cookiesPerHour : [],
    customerPerHour : [],
    avgCustomerConsuming : 0,
    getcookies : function(){
        for (let i = 0; i< workHours.length; i++) {
            let hourlyCustomers = randomNoOfCustomers( this.min, this.max );
            let cookiesNo = Math.ceil( ( hourlyCustomers )*this.avgCookieSale );

        console.log(cookiesNo);
            this.cookiesPerHour.push(cookiesNo);
            this.Total += cookiesNo;
            this.customerPerHour.push(hourlyCustomers);
        }
    },


render: function () {
        const parentElement = document.getElementById( 'Sales' );
    
        const articleElement = document.createElement( 'article' );
        parentElement.appendChild( articleElement );
    
        const h2Element = document.createElement( 'h2' );
        articleElement.appendChild( h2Element );
        h2Element.textContent= this.name;
    
        const ulElement = document.createElement( 'ul' );
        articleElement.appendChild( ulElement );
    
        for( let i = 0; i < workHours.length; i++ ) {
          const liElement = document.createElement( 'li' );
          ulElement.appendChild( liElement );
          liElement.textContent = `${workHours[i]}: ${this.cookiesPerHour[i]} cookies`;
    
        }
        const li2Element = document.createElement( 'li' );
        ulElement.appendChild( li2Element );
        li2Element.textContent = `Total: ${this.Total} cookies`; 
    }

};


function randomNoOfCustomers(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    }


Seattle.getcookies();
Seattle.render();
Tokyo.getcookies();
Tokyo.render();
Dubai.getcookies();
Dubai.render(); 
Paris.getcookies();
Paris.render();
Lima.getcookies();
Lima.render();
