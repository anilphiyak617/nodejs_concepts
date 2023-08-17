const PizzaShop = require("./event-module-part-2");

let dominos = new PizzaShop();

dominos.on("order", (size, topping) => {
  console.log(`Order recieved! Baking a ${size} pizza with ${topping}`);
});

// dominos.emit("order", "medium", "coke");
dominos.order("large","cheese")
console.log(dominos);
