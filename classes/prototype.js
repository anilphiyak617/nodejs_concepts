/* Prototyping */
function Bike() {
  this.name = "ramu";
  this.number = 2332;
  this.getName = () => {
    console.log(this.name);
  };
}

console.log(Bike);
console.log(Bike.prototype);
// prototype pro[ertyassciated  with constructor function how ? ????
Bike.prototype.getNumber = function () {
  console.log(this.number);
};
// console.log(Bike);
const ducati = new Bike();
ducati.getNumber();
