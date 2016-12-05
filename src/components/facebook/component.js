let Facebook = {
  bindings: {
    appKey: '@',
    onLogin: '&'
  },
  template: `

        <button class="button-facebook" data-ng-click="$ctrl.submit()">
          Entrar com o facebook
        </button>

  `,
  controller: ['FacebookFactory', '$transclude', function(FacebookFactory, $transclude) {
    let ctrl = this;

    FacebookFactory.setLang('pt_BR') // set lang
    FacebookFactory.init({
        appId: ctrl.appKey, // required, default = null
        status: true, // optional, default = true
        cookie: false, // optional, default = false
        xfbml: false, // optional, default = false
        version: 'v2.4' // optional, default = v2.4
    })

    ctrl.me = facebookStatus => {
        FacebookFactory.api('/me', {
            fields: 'name,email,gender,birthday'
        }, function(userResponse) {
            var response = {};
            response['authResponse'] = facebookStatus.authResponse;
            response['user'] = userResponse;
            ctrl.onLogin({data: response});
        })
    }

    ctrl.submit = () => {
      FacebookFactory.getLoginStatus(function(response) {
          if (response.status === 'connected') {
              ctrl.me(response);
          } else {
              FacebookFactory.login(function(response) {
                if (response.status === 'connected') {
                    ctrl.me(response);
                }
              }, {
                  scope: 'public_profile,email,user_birthday'
              })
          }
      })

    }

  }]
}

export default Facebook
