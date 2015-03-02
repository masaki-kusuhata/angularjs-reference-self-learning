(function () {
  var MyController = function ($scope, addService) {
    $scope.x = addService(12, 34);
  };
  angular.module('app').controller('myController', MyController);
})();
