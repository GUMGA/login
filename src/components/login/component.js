let LoginComponent = {
  bindings: {
    onLogin: '&',
    configuration: '=',
    register: '='
  },
  transclude: true,
  template: `
    <section class="login-box">

      <form name="login-form" class="login-form" data-ng-submit="$ctrl.submit(email, password)" novalidate ng-if="$ctrl.step == 'LOGIN'">
        <label for="username">
          <input type="email" name="username" placeholder="E-mail" data-ng-model="email">
        </label>
        <label for="password">
          <input type="password" name="password" placeholder="Senha" data-ng-model="password">
        </label>
        <label for="do-login">
          <button type="submit" name="do-login" class="do-login">{{$ctrl.loginText}}</button>
        </label>

        <a class="forgot-password" ng-if="$ctrl.forgot && !$ctrl.isUrl($ctrl.forgot)" ui-sref="{{$ctrl.forgot}}">Esqueceu a senha?</a>
        <a class="forgot-password" ng-if="$ctrl.forgot && $ctrl.isUrl($ctrl.forgot)" href="{{$ctrl.forgot}}">Esqueceu a senha?</a>

        <label for="do-register" style="margin: 10px;" ng-if="$ctrl.registerFields">
            Não tem uma conta?
            <a  type="button"
                style="cursor:pointer;"
                data-ng-click="$ctrl.updateStep('REGISTER')"
                name="do-register" class="do-register">Inscreva-se</a>
        </label>
        <div style="margin: 25px 35px;" ng-transclude></div>
      </form>

      <form name="login-form" class="login-form" ng-show="$ctrl.step == 'CHANGE_ORGANIZATION'">

        <img style="width: 100px;
        height: 100px;
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 50%;" data-ng-src="{{$ctrl.user.profileImage}}"/>

        <br>
        <br>
        <label>Atualmente em {{$ctrl.organizations.length}} organizações.</label>

        <label for="organization">
          <input type="text" autocomplete="off" name="username"
          placeholder="Qual organização deseja entrar?" ng-init="$ctrl.organizationFilter = ''" data-ng-model="$ctrl.organizationFilter">
        </label>

        <div style="background:#f5f5f5;margin-bottom:10px;padding: 10px;cursor: pointer;"
          data-ng-click="$ctrl.organizationSelected = organization"
          data-ng-repeat="organization in $ctrl.organizations | filter:{ name: $ctrl.organizationFilter } | limitTo: 5">
          <span class="text text-muted">{{organization.name}}</span>
          <span ng-show="$ctrl.organizationSelected.id == organization.id" class="glyphicon glyphicon-ok" aria-hidden="true"></span>
        </div>

        <label for="do-login">
          <button type="button"
                  ng-disabled="!$ctrl.organizationSelected"
                  data-ng-click="$ctrl.changeOrganization($ctrl.organizationSelected)" name="do-login" class="do-login">{{$ctrl.changeOrganizationText}}</button>
        </label>

      </form>

      <form name="login-form" class="login-form" ng-show="$ctrl.step == 'REGISTER'">
        <label data-ng-repeat="field in $ctrl.registerFields" for="{{field.field}}">
          <input type="{{field.type}}" name="{{field.field}}" id="{{field.field}}" placeholder="{{field.placeholder}}" data-ng-model="field.value">
        </label>
        <label for="do-login">
          <button type="button"
          ng-disabled="!$ctrl.registerIsValid()"
          name="do-login"
          ng-click="$ctrl.submitRegister()"
          class="do-login">{{$ctrl.registerText}}</button>
        </label>
      </form>

    </section>
  `,
  controller: ['GumgaLoginService', function(GumgaLoginService) {
    let ctrl = this;
    ctrl.loginText = 'Entrar';
    ctrl.changeOrganizationText = 'Continuar';
    ctrl.registerText = 'Inscrever';
    if(ctrl.register){
      ctrl.registerFields = ctrl.register.fields;
    }
    ctrl.organizationFilter = '';

    ctrl.updateStep = _step => ctrl.step = _step;

    ctrl.updateStep('LOGIN');

    if(!ctrl.configuration){
      throw "Please enter the setup object for the gumga login.";
    }

    ctrl.back = (step) => {
        switch (step) {
          case 'LOGIN':
            ctrl.updateStep(step);
            delete ctrl.password;
            break;
        }
    }

    GumgaLoginService.initConfiguration(ctrl.configuration);

    const createUserImage = (user) => {
        if(user.picture){
            user.profileImage = 'data:' + user.picture.mimeType + ';base64,' + user.picture.bytes;
            return;
        }
        user.profileImage = 'src/images/user-without-image.png';
    }

    ctrl.submit = (email, password) => {
      ctrl.loginText = 'Aguarde...';
      GumgaLoginService.login(email, password)
        .then(resp=>{
          ctrl.user = resp.data;
          createUserImage(ctrl.user);
          GumgaLoginService.setItemInSession('user', resp.data);
          GumgaLoginService.getOrganizations(resp.data.token)
            .then(organizations => {
                GumgaLoginService.setItemInSession('organizations', organizations.data);
                if(organizations.data.length == 1){
                    ctrl.onLogin({user: resp.data, organizations: organizations.data});
                }
                if(organizations.data.length > 1){
                    ctrl.updateStep('CHANGE_ORGANIZATION');
                    ctrl.organizations = organizations.data;
                }
            }, error => {
                ctrl.onLogin({user: resp.data, organizations: undefined});
            });
        });
    }

    ctrl.changeOrganization = organization => {
      ctrl.changeOrganizationText = 'Aguarde...';
      GumgaLoginService.changeOrganization(ctrl.user.token, organization)
        .then(resp=>{
            ctrl.user['organization'] = resp.data['name'];
            ctrl.user['organizationHierarchyCode'] = resp.data['hierarchyCode'];
            ctrl.user['softwareHouse'] = resp.data['isSoftwareHouse'];
            ctrl.user['securityManager'] = resp.data['securityManager'];
            GumgaLoginService.setItemInSession('user', ctrl.user);
            ctrl.onLogin({user: ctrl.user, organizations: ctrl.organizations});
            ctrl.loginText = 'Entrar';
            ctrl.updateStep('LOGIN');
        }, error=> {
          ctrl.changeOrganizationText = 'Erro :(';
        });
    }

    ctrl.isUrl = url => {
        return /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/.test(url);
    }

    const getRegisterFieldByName = name => {
      return ctrl.registerFields.filter(field => field.field == name)[0];
    }

    const handlingErrorRegister = (field, comparatorField, valid) => {
        var inputComparator = document.getElementById(comparatorField.field)
        var input = document.getElementById(field.field)
        if(inputComparator && input){
          inputComparator.classList[valid?'remove':'add']('gumga-login-input-error');
          input.classList[valid?'remove':'add']('gumga-login-input-error');
        }
    }

    ctrl.registerIsValid = () => {
      let valid = true;
      if(!ctrl.registerFields){return}
      ctrl.registerFields.forEach(field => {
        if(field.conditions){
          field.conditions.forEach(condition=>{
            if(condition.operation && condition.field){
               var comparatorField = getRegisterFieldByName(condition.field)
               if(valid){
                  valid = eval("'"+field.value+"' "+condition.operation+" '"+comparatorField.value+"'");
                  handlingErrorRegister(field, comparatorField, valid);
               }
            }
          })
        }
      });
      return valid;
    }

    ctrl.submitRegister = () => {
      ctrl.registerText = 'Aguarde...';
      if(!ctrl.registerFields){return}
      var toReturn = {};
      ctrl.registerFields.forEach(field => {
        toReturn[field.field] = field.value;
      });
      ctrl.register.submit(toReturn);
      ctrl.loginText = 'Entrar';
      ctrl.updateStep('LOGIN');
    }

  }]
}

export default LoginComponent
