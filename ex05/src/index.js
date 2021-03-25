// Only change code below this line
let shopingList = new Map();

shopingList.set("Banana", 3);
shopingList.set("Pineapple", 5);
shopingList.set("Pear", 2);
shopingList.set("Carrot", 10);
shopingList.set("Apple", 1.5);

let arrKey = [];
for (let key of shopingList.keys()) {
  arrKey = key;
  console.log(`grocerise: ${arrKey}`);
}

let arrValue = [];
for (let value of shopingList.values()) {
  arrValue = value;
  console.log(`amount: ${arrValue}`);
}

for (let [key, value] of shopingList.entries()) {
  console.log([key, value]);
}

// Only change code above this line
module.exports = { shopingList, arrKey, arrValue };
