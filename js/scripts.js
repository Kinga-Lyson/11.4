function mPhone(brand,price,color) {
	this.brand = brand;
	this.price = price;
	this.color = color;
};

var samsungGalaxyS6 = new mPhone ('Samsung' , '3000' , 'black')
var iPhone6S = new mPhone ('iPhone' , '4500' , 'silver')
var onePlusOne = new mPhone ('OnePlus' , '2500' , 'gold')

mPhone.prototype.printInfo = function(){
	console.log("The phone brand is " + this.brand + ", color is " + this.color + " and the price is " + this.price);
}
iPhone6S.printInfo();
onePlusOne.printInfo();
samsungGalaxyS6.printInfo();