app.controller('HomeController', ['$scope', 'myphotos', function($scope, xphotos) {
  xphotos.success(function(data) {
    $scope.yphotos = data;
  });
}]);