(function() {
  var app = angular.module('store', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('PanelController', function(){

  });

  var gems = [
    {
      name: 'Dodecahedron',
      price: 2.95,
      description: "....",
      // images: {
      //   {
      //     full:
      //     thumb:
      //   }
      // }
      canPurchase: true,
      soldOut: true
    },
    {
      name: 'Blah',
      price: 2.95,
      description: "....",
      // images: {
      //   {
      //     full:
      //     thumb:
      //   }
      // }
      canPurchase: true,
      soldOut: true
    }
  ];
})();
