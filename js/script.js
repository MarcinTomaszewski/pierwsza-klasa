'use strict';
(function(){

    function Phone(brand, price, color, weight) {   //funkcja konstrukcyjna
        this.brand = brand;                 //używając this, właściwość brand obiektu przyjmie wrotość argumentu brand.
        this.price = price;                 //j.w.
        this.color = color;                 //j.w.
        this.weight = weight;
    }

    Phone.prototype.printInfo = function() {
        console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
    }
    Phone.prototype.printInfoWeight = function() {
        console.log("The weight of the " + this.brand + " is " + this.weight + ".");
    }

    var iPhone6s = new Phone("Apple", 2250, "silver", 162);
    var samsungGalaxyS6 = new Phone("Samsung", 2130, "black", 153);
    var onePlusOne = new Phone("OnePlus", 2500, "white", 162);

    iPhone6s.printInfo();
    samsungGalaxyS6.printInfo();
    onePlusOne.printInfo();

    iPhone6s.printInfoWeight();
    samsungGalaxyS6.printInfoWeight();
    onePlusOne.printInfoWeight();
})();