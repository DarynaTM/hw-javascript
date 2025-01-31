function calculateGoodsPrice (cart){
    let totalPrice = 0;
    for (let i = 0; i < cart.length; i++) {
      totalPrice += cart[i].price * cart[i].quantity;
    }
    if (totalPrice >= 100) {
      totalPrice *= 0.9;
    }
    return totalPrice;
}
const cart1 = [
     {name: "Apple", price: 1, quantity: 10},
     {name: "Banana", price: 3, quantity: 5},
     {name: "Milk", price: 10, quantity: 2},
];
console.log(calculateGoodsPrice(cart1));

const cart2 = [
  {name: "Sushi", price: 20, quantity: 4},
  {name: "Burger Max", price: 30, quantity: 1},
 ]
 console.log(calculateGoodsPrice(cart2));

 const cart3 = [
  {name: "Notepads", price: 40, quantity: 5},
  {name: "Pens", price: 20, quantity: 5},
  {name: "Pencils", price: 15, quantity: 5}
]
console.log(calculateGoodsPrice(cart3));