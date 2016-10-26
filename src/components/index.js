import Login        from './login/component.js'
import LoginHeader  from './header/component.js'

angular
  .module('gumga.login', [])
  .component('glLogin', Login)
  .component('glLoginHeader', LoginHeader)
