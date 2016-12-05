angular
  .module('app',['gumga.login'])
  .controller('LoginController', ['$scope',function($scope) {

    $scope.loginGumga = function(login) {
      console.log(login)
    }

    $scope.login = function(dados){
       console.log('jesusssssss', dados)
    }

  }])
