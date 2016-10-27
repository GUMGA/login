angular
  .module('app',['gumga.login'])
  .controller('LoginController', ['$scope',function($scope) {
    console.log('LoginController')
    $scope.loginGumga = function(login) {
      console.log(login)
    }
  }])