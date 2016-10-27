# Gumga Login

### Dependências

- Angular

```
bower install angular
```
```html
// Adicione no seu projeto
<script src="/bower_components/angular/angular.min.js"></script>
```

## Instalação
```
bower install gumga-login
```

## Exemplo de uso
```html
// Adicione no seu projeto
<script src="/dist/gumga-login.min.js"></script>
```

### View
```html
<body ng-controller="LoginController">
  <gl-login-header
    register="home.login"
    login="home.login"
    background="/images/gumga-login-bg.jpg"
    logo="/images/gumga-logo-vertical-negative.svg"
    title="Gumga Studio"
    ></gl-login-header>

  <gl-login on-submit="loginGumga(login)"></gl-login>
</body>
```

### Controller
```js
angular
  .module('app',['gumga.login'])
  .controller('LoginController', ['$scope',function($scope) {
    $scope.loginGumga = function(login) {
      console.log(login)
      // Execute seu service de login
    }
  }])
```