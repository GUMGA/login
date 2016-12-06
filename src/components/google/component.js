let Facebook = {
  bindings: {
    appKey: '@',
    clientId: '@',
    scopes: '@?',
    onLogin: '&'
  },
  template: `

        <button class="button-google" data-ng-click="$ctrl.submit()">
          Entrar com o Google+
        </button>

  `,
  controller: ['GooglePlus', function(GooglePlus) {
    let ctrl = this;
    let scopes = ctrl.scopes
    || 'https://www.googleapis.com/auth/plus.login https://www.googleapis.com/auth/plus.me https://www.googleapis.com/auth/userinfo.email';

    GooglePlus.init({
        clientId: ctrl.clientId,
        apiKey: ctrl.appKey,
        scopes: scopes
     });

    ctrl.submit = () => {
      GooglePlus.login().then(function (authResult) {
            GooglePlus.getUser().then(function (user) {
                var response = {};
                response['authResponse'] = authResult;
                response['user'] = user;
                ctrl.onLogin({data: response});
            });
        }, function (err) {
            console.error(err);
        });
    }

  }]
}

export default Facebook
