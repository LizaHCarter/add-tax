var prompt = require('sync-prompt').prompt;

item1 = prompt('Enter item cost: $');
item1 = parseInt(item1);
tax1 = prompt('Enter sales tax: ');
tax1 = parseInt(tax1);

function addTax(cost,tax){
  return cost + (cost * (tax/100));
}

var z;
z = addTax(item1,tax1);
console.log('total cost: $'+z);


