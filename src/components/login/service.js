export default function GumgaLoginService($http, $window){
    const Service = {};

    Service.login = (email, password) => {
        return $http.get(Service.configuration['appURL'].concat('/public/token/create/'.concat(email).concat('/').concat(password)));
    }

    Service.getOrganizations = (token) => {
        return $http.get(Service.configuration['appURL'].concat('/public/token/organizations/'.concat(token)));
    }

    Service.changeOrganization = (token, organization) => {
      return $http.get(Service.configuration['appURL'].concat('/public/token/changeorganization/'.concat(token).concat('/').concat(organization.id)));
    }

    Service.setItemInSession = (key, value) => $window.sessionStorage.setItem(key, JSON.stringify(value));

    Service.initConfiguration = _configuration => Service.configuration = _configuration;

    return Service;
}

GumgaLoginService.$inject = ['$http', '$window'];
