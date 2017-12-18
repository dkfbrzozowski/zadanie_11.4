function Phone(brand, price, color, quantity) {
	this.brand = brand;
	this.price = price;
	this.color = color;
	this.quantity = quantity;
};

Phone.prototype.printInfo = function() {
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price + ", " + this.quantity + " pcs" + ".");
};

var apple = new Phone("Iphone 6S", 3500, "silver", 0);
var samsung = new Phone("Samsung Galaxy 6S", 2800, "black", 50);
var oneplus = new Phone("OnePlus One", 800, "silver", 10);

Phone.prototype.printAlert = function() {
	if (this.quantity > 0) {
		console.log("You can order " + this.brand + ", color is " + this.color + " and the price is " + this.price + ".");
	} else {
		console.log("We don't have " + this.brand + ", color is " + this.color + " in stock. You must wait for the next delivery.");
	}
}

apple.printInfo();
apple.printAlert();
samsung.printInfo();
samsung.printAlert();
oneplus.printInfo();
oneplus.printAlert();