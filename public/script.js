//We use const here because we don't want the assignment of the root app to change
const app = new Vue({
  el: "#app",
  data:{
    total: 0.00,
    items: [
      {title: 'Item 1'},
      {title: 'Item 2'},
      {title: 'Item 3'}
    ],
    cart:[],
    seen: true
  },
  methods:{
    addItem: function(index){

      let item = this.items[index];

      for (record of this.cart){
        if (record.title == item.title){
          record.qty += 1;
          this.total += 9.99;
          return;
        }
      }

      this.cart.push({
        title: item.title,
        qty: 1
      });
      this.total += 9.99;
    }
  }
});
