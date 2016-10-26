let LoginComponent = {
  bindings: {
    onSubmit: '&'
  },
  template: `
    <section class="login-box">
      <form name="login-form" class="login-form" data-ng-submit="$ctrl.submit($ctrl.login)" novalidate>
        <label for="username">
          <input type="email" name="username" placeholder="E-mail" data-ng-model="$ctrl.login.username">
        </label>
        <label for="password">
          <input type="password" name="password" placeholder="Senha" data-ng-model="$ctrl.login.password">
        </label>
        <label for="do-login">
          <button type="submit" name="do-login" class="do-login">Entrar</button>
        </label>
        <label for="do-register">
          <button type="button" name="do-register" class="do-register">Registrar</button>
        </label>
        <a class="forgot-password" href="#">Esqueceu a senha?</a>
      </form>
    </section>
  `,
  controller: [function() {
    let ctrl = this
    
    ctrl.submit = login => {
      ctrl.onSubmit({login: login})
    }
  }]
}

export default LoginComponent