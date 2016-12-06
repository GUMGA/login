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

  <gl-login on-submit="loginGumga(login)" type="email" username="email" password="senha"></gl-login>
</body>
```

| Atributo | Descrição |
| --- | --- |
| register | Rota que será chamado o menu cadastrar |
| login | Rota que será chamado o menu login |
| background | Caminho da imagem que será usada de background |
| logo | Caminho da imagem que será usada de logo |
| title | Usado no atributo title da logo |


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

## Adicionando Menus a Header
```html
<body ng-controller="LoginController">
  <gl-login-header
    register="home.login"
    login="home.login"
    background="/images/gumga-login-bg.jpg"
    logo="/images/gumga-logo-vertical-negative.svg"
    title="Gumga Studio"
    menus="meumenu"
    ></gl-login-header>
</body>
```
```js
angular
  .module('app',['gumga.login'])
  .controller('LoginController', ['$scope',function($scope) {
      $scope.meumenu = [
        {
          label: 'Pagina inicial',
          link: true, // SE FOR URL DEIXAR TRUE, CASO FOR UM ESTADO DO ANGULAR DEIXAR FALSE
          icon: '<i class="fa fa-etsy" aria-hidden="true"></i>',
          url: 'https://www.gumga.io/'
        }
      ]
  }])
```

## Login com redes sociais
```html
<body ng-controller="LoginController">
  <gl-login-header
    register="home.login"
    login="home.login"
    background="/images/gumga-login-bg.jpg"
    logo="/images/gumga-logo-vertical-negative.svg"
    title="Gumga Studio"
    ></gl-login-header>

  <gl-login on-submit="loginGumga(login)" type="email" username="email" password="senha">
      <div class="divider"><strong class="divider-title">ou entre com</strong></div>
      <gl-login-facebook app-key="" on-login="login(data)"></gl-login-facebook>
      <gl-login-google app-key=""
                       on-login="login(data)"
                       client-id="">
      </gl-login-google>
  </gl-login>
</body>
```
