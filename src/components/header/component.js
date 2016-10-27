let HeaderComponent = {
  bindings: {
    register: '<',
    login: '<',
    background: '@',
    logo: '@',
    title: '@'
  },
  template: `
    <header class="header-login" style="background-image: url({{$ctrl.background}})">
      <nav class="login-nav">
        <ul>
          <li>
            <a ui-srref="{{$ctrl.login}}" ui-sref-active="selected" title="Login" class="login"">Login</a>
          </li>
          <li>
            <a ui-srref="{{$ctrl.register}}" ui-sref-active="selected" title="Cadastro" class="register">Cadastro</a>
          </li>
        </ul>
      </nav>
      <div class="logo-box">
        <img data-ng-src="{{$ctrl.logo}}" title="{{$ctrl.title}}">
      </div>
    </header>
  `
}

export default HeaderComponent