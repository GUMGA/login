let LoginComponent = {
  bindings: {
    onSubmit: '&',
    forgot: '@',
    register: '@',
    type: '@',
    username: '@',
    password: '@'
  },
  transclude: true,
  template: `
    <section class="login-box">

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

        <a class="forgot-password" ng-if="!$ctrl.isUrl($ctrl.forgot)" ui-sref="{{$ctrl.forgot}}">Esqueceu a senha?</a>
        <a class="forgot-password" ng-if="$ctrl.isUrl($ctrl.forgot)" href="{{$ctrl.forgot}}">Esqueceu a senha?</a>

        <label for="do-register" style="margin: 10px;">
            Não tem uma conta?
            <a type="button" ng-if="!$ctrl.isUrl($ctrl.register)" ui-sref="{{$ctrl.register}}" name="do-register" class="do-register">Inscreva-se</a>
            <a type="button" ng-if="$ctrl.isUrl($ctrl.register)" href="{{$ctrl.register}}" name="do-register" class="do-register">Inscreva-se</a>
        </label>
        <div style="margin: 25px 35px;" ng-transclude></div>
      </form>
    </section>
  `,
  controller: [function() {
    let ctrl = this;



    ctrl.submit = login => {
      ctrl.onSubmit({login: login})
    }

    ctrl.isUrl = url => {
        return /^(https?:\/\/)?((([a-z\d]([a-z\d-]*[a-z\d])*)\.)+[a-z]{2,}|((\d{1,3}\.){3}\d{1,3}))(\:\d+)?(\/[-a-z\d%_.~+]*)*(\?[;&a-z\d%_.~+=-]*)?(\#[-a-z\d_]*)?$/i.test(url);
    }

  }]
}

export default LoginComponent
