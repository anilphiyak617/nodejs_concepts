const EventEmitter = require("events");

class PizzaShop extends EventEmitter {
  constructor() {
    // to call the parent constructor
    super();
    this.orderNumber = 0;
  }

  order(size, topping) {
    this.orderNumber++;
    this.emit("order", size, topping);
  }

  displayOrderNumber() {
    console.log(`Current order number: ${this.orderNumber}`);
  }
}

module.exports = PizzaShop;
