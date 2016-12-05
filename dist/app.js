(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HeaderComponent = {
  bindings: {
    register: '@',
    login: '@',
    background: '@',
    logo: '@',
    title: '@'
  },
  template: '\n    <header class="header-login" style="background-image: url({{$ctrl.background}})">\n      <nav class="login-nav">\n        <ul>\n          <li>\n            <a ui-srref="{{$ctrl.login}}" ui-sref-active="selected" title="Login" class="login"">Login</a>\n          </li>\n          <li>\n            <a ui-sref="{{$ctrl.register}}" ui-sref-active="selected" title="Cadastro" class="register">Cadastro</a>\n          </li>\n        </ul>\n      </nav>\n      <div class="logo-box">\n        <img data-ng-src="{{$ctrl.logo}}" title="{{$ctrl.title}}">\n      </div>\n    </header>\n  '
};

exports.default = HeaderComponent;

},{}],2:[function(require,module,exports){
'use strict';

var _component = require('./login/component.js');

var _component2 = _interopRequireDefault(_component);

var _component3 = require('./header/component.js');

var _component4 = _interopRequireDefault(_component3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import FacebookFactory  from './facebook/component.js'

angular.module('gumga.login', []).component('glLogin', _component2.default).component('glLoginHeader', _component4.default);
// .factory('FacebookFactory', FacebookFactory.facebookFactory)

},{"./header/component.js":1,"./login/component.js":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LoginComponent = {
  bindings: {
    onSubmit: '&',
    forgot: '@',
    type: '@',
    username: '@',
    password: '@'
  },
  template: '\n    <section class="login-box">\n      <form name="login-form" class="login-form" data-ng-submit="$ctrl.submit($ctrl.login)" novalidate>\n        <label for="username">\n          <input type="{{$ctrl.type}}" name="username" placeholder="E-mail" data-ng-model="$ctrl.login[$ctrl.username]">\n        </label>\n        <label for="password">\n          <input type="password" name="password" placeholder="Senha" data-ng-model="$ctrl.login[$ctrl.password]">\n        </label>\n        <label for="do-login">\n          <button type="submit" name="do-login" class="do-login">Entrar</button>\n        </label>\n        <label for="do-register">\n          <button type="button" name="do-register" class="do-register">Registrar</button>\n        </label>\n        <a class="forgot-password" ui-sref="{{$ctrl.forgot}}">Esqueceu a senha?</a>\n      </form>\n    </section>\n  ',
  controller: [function () {
    var ctrl = this;

    ctrl.submit = function (login) {
      ctrl.onSubmit({ login: login });
    };
  }]
};

exports.default = LoginComponent;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9oZWFkZXIvY29tcG9uZW50LmpzIiwic3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJzcmMvY29tcG9uZW50cy9sb2dpbi9jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLElBQUksa0JBQWtCO0FBQ3BCLFlBQVU7QUFDUixjQUFVLEdBREY7QUFFUixXQUFPLEdBRkM7QUFHUixnQkFBWSxHQUhKO0FBSVIsVUFBTSxHQUpFO0FBS1IsV0FBTztBQUxDLEdBRFU7QUFRcEI7QUFSb0IsQ0FBdEI7O2tCQTJCZSxlOzs7OztBQzNCZjs7OztBQUNBOzs7Ozs7QUFDQTs7QUFFQSxRQUNHLE1BREgsQ0FDVSxhQURWLEVBQ3lCLEVBRHpCLEVBRUcsU0FGSCxDQUVhLFNBRmIsdUJBR0csU0FISCxDQUdhLGVBSGI7QUFJRTs7Ozs7Ozs7QUNSRixJQUFJLGlCQUFpQjtBQUNuQixZQUFVO0FBQ1IsY0FBVSxHQURGO0FBRVIsWUFBUSxHQUZBO0FBR1IsVUFBTSxHQUhFO0FBSVIsY0FBVSxHQUpGO0FBS1IsY0FBVTtBQUxGLEdBRFM7QUFRbkIscTNCQVJtQjtBQTJCbkIsY0FBWSxDQUFDLFlBQVc7QUFDdEIsUUFBSSxPQUFPLElBQVg7O0FBRUEsU0FBSyxNQUFMLEdBQWMsaUJBQVM7QUFDckIsV0FBSyxRQUFMLENBQWMsRUFBQyxPQUFPLEtBQVIsRUFBZDtBQUNELEtBRkQ7QUFHRCxHQU5XO0FBM0JPLENBQXJCOztrQkFvQ2UsYyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgSGVhZGVyQ29tcG9uZW50ID0ge1xuICBiaW5kaW5nczoge1xuICAgIHJlZ2lzdGVyOiAnQCcsXG4gICAgbG9naW46ICdAJyxcbiAgICBiYWNrZ3JvdW5kOiAnQCcsXG4gICAgbG9nbzogJ0AnLFxuICAgIHRpdGxlOiAnQCdcbiAgfSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8aGVhZGVyIGNsYXNzPVwiaGVhZGVyLWxvZ2luXCIgc3R5bGU9XCJiYWNrZ3JvdW5kLWltYWdlOiB1cmwoe3skY3RybC5iYWNrZ3JvdW5kfX0pXCI+XG4gICAgICA8bmF2IGNsYXNzPVwibG9naW4tbmF2XCI+XG4gICAgICAgIDx1bD5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSB1aS1zcnJlZj1cInt7JGN0cmwubG9naW59fVwiIHVpLXNyZWYtYWN0aXZlPVwic2VsZWN0ZWRcIiB0aXRsZT1cIkxvZ2luXCIgY2xhc3M9XCJsb2dpblwiXCI+TG9naW48L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgICA8bGk+XG4gICAgICAgICAgICA8YSB1aS1zcmVmPVwie3skY3RybC5yZWdpc3Rlcn19XCIgdWktc3JlZi1hY3RpdmU9XCJzZWxlY3RlZFwiIHRpdGxlPVwiQ2FkYXN0cm9cIiBjbGFzcz1cInJlZ2lzdGVyXCI+Q2FkYXN0cm88L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzcz1cImxvZ28tYm94XCI+XG4gICAgICAgIDxpbWcgZGF0YS1uZy1zcmM9XCJ7eyRjdHJsLmxvZ299fVwiIHRpdGxlPVwie3skY3RybC50aXRsZX19XCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgYFxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDb21wb25lbnQiLCJpbXBvcnQgTG9naW4gICAgICAgIGZyb20gJy4vbG9naW4vY29tcG9uZW50LmpzJ1xuaW1wb3J0IExvZ2luSGVhZGVyICBmcm9tICcuL2hlYWRlci9jb21wb25lbnQuanMnXG4vLyBpbXBvcnQgRmFjZWJvb2tGYWN0b3J5ICBmcm9tICcuL2ZhY2Vib29rL2NvbXBvbmVudC5qcydcblxuYW5ndWxhclxuICAubW9kdWxlKCdndW1nYS5sb2dpbicsIFtdKVxuICAuY29tcG9uZW50KCdnbExvZ2luJywgTG9naW4pXG4gIC5jb21wb25lbnQoJ2dsTG9naW5IZWFkZXInLCBMb2dpbkhlYWRlcilcbiAgLy8gLmZhY3RvcnkoJ0ZhY2Vib29rRmFjdG9yeScsIEZhY2Vib29rRmFjdG9yeS5mYWNlYm9va0ZhY3RvcnkpXG4iLCJsZXQgTG9naW5Db21wb25lbnQgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgb25TdWJtaXQ6ICcmJyxcbiAgICBmb3Jnb3Q6ICdAJyxcbiAgICB0eXBlOiAnQCcsXG4gICAgdXNlcm5hbWU6ICdAJyxcbiAgICBwYXNzd29yZDogJ0AnXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJsb2dpbi1ib3hcIj5cbiAgICAgIDxmb3JtIG5hbWU9XCJsb2dpbi1mb3JtXCIgY2xhc3M9XCJsb2dpbi1mb3JtXCIgZGF0YS1uZy1zdWJtaXQ9XCIkY3RybC5zdWJtaXQoJGN0cmwubG9naW4pXCIgbm92YWxpZGF0ZT5cbiAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ7eyRjdHJsLnR5cGV9fVwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgZGF0YS1uZy1tb2RlbD1cIiRjdHJsLmxvZ2luWyRjdHJsLnVzZXJuYW1lXVwiPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJTZW5oYVwiIGRhdGEtbmctbW9kZWw9XCIkY3RybC5sb2dpblskY3RybC5wYXNzd29yZF1cIj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRvLWxvZ2luXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgbmFtZT1cImRvLWxvZ2luXCIgY2xhc3M9XCJkby1sb2dpblwiPkVudHJhcjwvYnV0dG9uPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZG8tcmVnaXN0ZXJcIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBuYW1lPVwiZG8tcmVnaXN0ZXJcIiBjbGFzcz1cImRvLXJlZ2lzdGVyXCI+UmVnaXN0cmFyPC9idXR0b24+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxhIGNsYXNzPVwiZm9yZ290LXBhc3N3b3JkXCIgdWktc3JlZj1cInt7JGN0cmwuZm9yZ290fX1cIj5Fc3F1ZWNldSBhIHNlbmhhPzwvYT5cbiAgICAgIDwvZm9ybT5cbiAgICA8L3NlY3Rpb24+XG4gIGAsXG4gIGNvbnRyb2xsZXI6IFtmdW5jdGlvbigpIHtcbiAgICBsZXQgY3RybCA9IHRoaXNcbiAgICBcbiAgICBjdHJsLnN1Ym1pdCA9IGxvZ2luID0+IHtcbiAgICAgIGN0cmwub25TdWJtaXQoe2xvZ2luOiBsb2dpbn0pXG4gICAgfVxuICB9XVxufVxuXG5leHBvcnQgZGVmYXVsdCBMb2dpbkNvbXBvbmVudCJdfQ==
