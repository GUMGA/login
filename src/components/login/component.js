let LoginComponent = {
  bindings: {
    onSubmit: '&',
    forgot: '@',
    type: '@',
    username: '@',
    password: '@'
  },
  transclude: true,
  template: `
    <section class="login-box">
      <div style="    margin: 25px 35px;" ng-transclude></div>
      <form name="login-form" class="login-form" data-ng-submit="$ctrl.submit($ctrl.login)" novalidate>
        <label for="username">
          <input type="{{$ctrl.type}}" name="username" placeholder="E-mail" data-ng-model="$ctrl.login[$ctrl.username]">
        </label>
        <label for="password">
          <input type="password" name="password" placeholder="Senha" data-ng-model="$ctrl.login[$ctrl.password]">
        </label>
        <label for="do-login">
          <button type="submit" name="do-login" class="do-login">Entrar</button>
        </label>
        <label for="do-register">
          <button type="button" name="do-register" class="do-register">Registrar</button>
        </label>

        <a class="forgot-password" ui-sref="{{$ctrl.forgot}}">Esqueceu a senha?</a>
      </form>
    </section>
  `,
  controller: [function() {
    let ctrl = this;

    ctrl.submit = login => {
      ctrl.onSubmit({login: login})
    }

  }]
}

export default LoginComponent
