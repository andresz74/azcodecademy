// app.factory('myphotos', ['$http', function($http) {
//   return $http.get('https://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json')
//          .success(function(data) {
//            return data;
//          })
//          .error(function(data) {
//            return data;
//          });
// }]);

app.factory('myphotos', ['$http', function($http) {
  return $http.get('js/photos.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);

app.factory('myphotos2', ['$http', function($http) {
  return $http.get('js/photos2.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);