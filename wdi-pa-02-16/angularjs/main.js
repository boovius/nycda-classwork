(function(angular) {
  'use strict';

  var myApp = angular.module('myApp', []);

  myApp.controller('MainController', ['$scope', function($scope) {
      $scope.names = [
      'nancy',
      'brittany',
      'steve',
      'sam',
      'austin',
      'rick',
      'diego',
      'zach',
      ];

      $scope.removeMe = function() {
        var index = $scope.names.indexOf(this.name);
        $scope.names.splice(index, 1);
      }
  }]);

})(window.angular);
