let cart = [];
console.log(cart);
let sum = 0;

function addBananas() {
  cart.push(["Bananas", 5.9]);
  updateSum(5.9);
}

function addApples() {
  cart.push(["Apples", 8.9]);
  updateSum(8.9);
}

function addOranges() {
  cart.push(["Oranges", 4.9]);
  updateSum(4.9);
}

function removeBananas() {
  let i = 0;
  while (cart[i][0] != "Bananas" && i < cart.length) {
    i++;
  }
  cart.splice(i, 1);
  updateSum(-5.9);
}

function removeApples() {
  let i = 0;
  while (cart[i][0] != "Apples" && i < cart.length) {
    i++;
  }
  cart.splice(i, 1);
  updateSum(-8.9);
}

function removeOranges() {
  let i = 0;
  while (cart[i][0] != "Oranges" && i < cart.length) {
    i++;
  }
  cart.splice(i, 1);
  updateSum(-4.9);
}

function updateSum(x) {
  sum += x;
  console.log(sum);
  document.getElementById("addedToCart").innerHTML = sum + "₪";
}
