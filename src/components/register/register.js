
let RegisterComponent = {
    bindings: {
    },
    template: require('./register.html'),
    controller: ['GumgaLoginService', '$timeout', '$scope', function (GumgaLoginService, $timeout, $scope) {
        let ctrl = this;
        const params = GumgaLoginService.getUrlVars();

        ctrl.config = {
            titleStepOne: angular.element('gl-login').attr('register-title-step-one') || 'Ebaaa!!!',
            subTitleStepOne : angular.element('gl-login').attr('register-subtitle-step-one') || 'Estamos muitos felizes por você topar o desafio ;)',
            textBtnStepOne: angular.element('gl-login').attr('register-text-btn-step-one') || 'Bora lá se registrar',

            titleStepTwo: angular.element('gl-login').attr('register-title-step-two') || 'agora você é quase parte da familia',
            subTitleStepTwo : angular.element('gl-login').attr('register-subtitle-step-two') || 'Seu ambiente virtual na Kigi vai ser incrível',
            textBtnStepTwo: angular.element('gl-login').attr('register-text-btn-step-two') || 'Continuar',

            logo : angular.element('gl-login').attr('register-logo')
        }

        ctrl.$onInit = () => {
            ctrl.step = 5;
            ctrl.user = {
                email: params['email']
            }
        }

        ctrl.getFirstName = () => {
            return (ctrl.user.name || '').split(' ')[0];
        }

        ctrl.getOrganizationName = () => {
            return (ctrl.user.organization||'').charAt(0).toUpperCase() + (ctrl.user.organization||'').slice(1);
        }

        ctrl.isValidEmail = email => {
            return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
        }

        ctrl.setTypePerson = (type) => {
            ctrl.user.typePerson = type;
            if(ctrl.user.typePerson == 'JURIDICA'){
                ctrl.continue();
            }
            if(ctrl.user.typePerson == 'FISICA'){
                ctrl.step = 6;
            }
        }

        ctrl.setQntPerson = (op) => {
            ctrl.user.organizationSize = op;
            ctrl.continue();
        }

        ctrl.isValidContinue = () => {
            let valid = true;
            if(ctrl.step == 1){
                if(!ctrl.user.name) valid = false;
                if(!ctrl.user.email || !ctrl.isValidEmail(ctrl.user.email)) valid = false;
                if(!ctrl.user.password || !ctrl.user.confirmPassword) valid = false;
                if(ctrl.user.password != ctrl.user.confirmPassword) valid = false;
                if((ctrl.user.password && ctrl.user.password.length < 3) || (ctrl.user.confirmPassword && ctrl.user.confirmPassword.length < 3)) valid = false;
            }
            if(ctrl.step == 2){
                if(!ctrl.user.organization) valid = false;
            }
            return valid;
        };

        ctrl.blurEmail = () => {
            GumgaLoginService.verifiedUser(ctrl.user.email).then(resp => {
                console.log(resp);
            }, err => {
            });
        };

        ctrl.continue = () => {
            ctrl.step++;
        }

    }]
}

export default RegisterComponent
