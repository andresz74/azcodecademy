app.controller('MainController', ['$scope', function($scope) {
  $scope.today = new Date();

  $scope.appetizers = [
    {
      name: 'Caprese',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 4.95
    },
    {
      name: 'Mozzarella Sticks',
      description: 'Served with marinara sauce.',
      price: 3.95
    },
    {
      name: 'Bruschetta',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 4.95
    }
  ];
  
  $scope.mains = [
    {
      name: 'Aj de Gallina',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 14.95
    },
    {
      name: 'Lomo Saltado',
      description: 'Served with marinara sauce.',
      price: 13.95
    },
    {
      name: 'Pollo a la brasa',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 14.95
    }
  ];
  
  $scope.extras = [
    {
      name: 'Ceviche de conchas negras',
      description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
      price: 14.95
    },
    {
      name: 'Tacu tacu de mariscos',
      description: 'Served with marinara sauce.',
      price: 13.95
    },
    {
      name: 'Chupe de camarones',
      description: 'Grilled bread garlic, tomatoes, olive oil.',
      price: 14.95
    }
  ];

}]);