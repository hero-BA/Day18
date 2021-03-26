// Only change code below this line
let shoppingList = new Map();

shoppingList.set("Banana", 3);
shoppingList.set("Pineapple", 5);
shoppingList.set("Pear", 2);
shoppingList.set("Carrot", 10);
shoppingList.set("Apple", 1.5);

let arrKey = [];
for (let key of shoppingList.keys()) {
  arrKey = key;
  console.log(`grocerise: ${arrKey}`);
}

let arrValue = [];
for (let value of shoppingList.values()) {
  arrValue = value;
  console.log(`amount: ${arrValue}`);
}

for (let [key, value] of shoppingList.entries()) {
  console.log([key, value]);
}

// Only change code above this line
module.exports = { shoppingList, arrKey, arrValue };
