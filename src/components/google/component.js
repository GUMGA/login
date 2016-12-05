let Facebook = {
  bindings: {
    appKey: '@',
    clientId: '@',
    onLogin: '&'
  },
  template: `

        <button class="button-google" data-ng-click="$ctrl.submit()">
          Entrar com o Google+
        </button>

  `,
  controller: ['GooglePlus', function(GooglePlus) {
    let ctrl = this;
    console.log(GooglePlus)
    GooglePlus.init({
        clientId: ctrl.clientId,
        apiKey: ctrl.appKey
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
            console.log(err);
        });
    }

  }]
}

export default Facebook
