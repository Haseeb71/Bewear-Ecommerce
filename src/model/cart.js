
module.exports = function Cart(odlCart, item, id) {
    //console.log("OLD-Cart");
    //console.log(odlCart.items);
    this.items = odlCart.items || {};
    //console.log("This is the this.items");
    //console.log(this.items);
    this.totalQty = odlCart.items || 0;
    console.log("totalQty");
    console.log(odlCart.items);
    this.totalPrice = odlCart.items || 0;
     var storedItem = this.items[id];
   // console.log("this is the Stored Items");
   // console.log(storedItem);
    if (!storedItem) {
        storedItem = this.items[id] = { item: item, qty: 0, price: 0 };
    };
    console.log("QTY");
    console.log(this.totalQty);
    storedItem.qty++;
    storedItem.price = storedItem.item.price * storedItem.qty;
    this.totalQty++;
    this.totalPrice += storedItem.item.price;

    // var arr = [ ];
    // for (var id in this.items) {
    //     arr.push(this.items[id]);        
    // };
    // return arr;
}; 