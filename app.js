angular
  .module('app',['gumga.login'])
  .controller('LoginController', ['$scope',function($scope) {

    $scope.loginGumga = function(login) {
      console.log(login)
    }

    $scope.login = function(dados){
       console.log(dados)
    }

    $scope.meumenu = [
      {
        label: 'Pagina inicial',
        link: true,
        icon: '<i class="fa fa-etsy" aria-hidden="true"></i>',
        url: 'https://www.gumga.io/'
      }
    ]

  }])
