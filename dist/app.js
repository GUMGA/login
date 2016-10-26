(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HeaderComponent = {
  bindings: {
    register: '<',
    login: '<',
    logo: '@',
    title: '@'
  },
  template: '\n    <header class="header-login">\n      <nav class="login-nav">\n        <ul>\n          <li>\n            <a ui-srref="{{$ctrl.login}}" ui-sref-active="selected" title="Login" class="login"">Login</a>\n          </li>\n          <li>\n            <a ui-srref="{{$ctrl.register}}" ui-sref-active="selected" title="Cadastro" class="register">Cadastro</a>\n          </li>\n        </ul>\n      </nav>\n      <div class="logo-box">\n        <img data-ng-src="{{$ctrl.logo}}" title="{{$ctrl.title}}">\n      </div>\n    </header>\n  '
};

exports.default = HeaderComponent;

},{}],2:[function(require,module,exports){
'use strict';

var _component = require('./login/component.js');

var _component2 = _interopRequireDefault(_component);

var _component3 = require('./header/component.js');

var _component4 = _interopRequireDefault(_component3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

angular.module('gumga.login', []).component('glLogin', _component2.default).component('glLoginHeader', _component4.default);

},{"./header/component.js":1,"./login/component.js":3}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var LoginComponent = {
  bindings: {
    onSubmit: '&'
  },
  template: '\n    <section class="login-box">\n      <form name="login-form" class="login-form" data-ng-submit="$ctrl.submit($ctrl.login)" novalidate>\n        <label for="username">\n          <input type="email" name="username" placeholder="E-mail" data-ng-model="$ctrl.login.username">\n        </label>\n        <label for="password">\n          <input type="password" name="password" placeholder="Senha" data-ng-model="$ctrl.login.password">\n        </label>\n        <label for="do-login">\n          <button type="submit" name="do-login" class="do-login">Entrar</button>\n        </label>\n        <label for="do-register">\n          <button type="button" name="do-register" class="do-register">Registrar</button>\n        </label>\n        <a class="forgot-password" href="#">Esqueceu a senha?</a>\n      </form>\n    </section>\n  ',
  controller: [function () {
    var ctrl = this;

    ctrl.submit = function (login) {
      ctrl.onSubmit({ login: login });
    };
  }]
};

exports.default = LoginComponent;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9oZWFkZXIvY29tcG9uZW50LmpzIiwic3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJzcmMvY29tcG9uZW50cy9sb2dpbi9jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLElBQUksa0JBQWtCO0FBQ3BCLFlBQVU7QUFDUixjQUFVLEdBREY7QUFFUixXQUFPLEdBRkM7QUFHUixVQUFNLEdBSEU7QUFJUixXQUFPO0FBSkMsR0FEVTtBQU9wQjtBQVBvQixDQUF0Qjs7a0JBMEJlLGU7Ozs7O0FDMUJmOzs7O0FBQ0E7Ozs7OztBQUVBLFFBQ0csTUFESCxDQUNVLGFBRFYsRUFDeUIsRUFEekIsRUFFRyxTQUZILENBRWEsU0FGYix1QkFHRyxTQUhILENBR2EsZUFIYjs7Ozs7Ozs7QUNIQSxJQUFJLGlCQUFpQjtBQUNuQixZQUFVO0FBQ1IsY0FBVTtBQURGLEdBRFM7QUFJbkIsNDBCQUptQjtBQXVCbkIsY0FBWSxDQUFDLFlBQVc7QUFDdEIsUUFBSSxPQUFPLElBQVg7O0FBRUEsU0FBSyxNQUFMLEdBQWMsaUJBQVM7QUFDckIsV0FBSyxRQUFMLENBQWMsRUFBQyxPQUFPLEtBQVIsRUFBZDtBQUNELEtBRkQ7QUFHRCxHQU5XO0FBdkJPLENBQXJCOztrQkFnQ2UsYyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgSGVhZGVyQ29tcG9uZW50ID0ge1xuICBiaW5kaW5nczoge1xuICAgIHJlZ2lzdGVyOiAnPCcsXG4gICAgbG9naW46ICc8JyxcbiAgICBsb2dvOiAnQCcsXG4gICAgdGl0bGU6ICdAJ1xuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxoZWFkZXIgY2xhc3M9XCJoZWFkZXItbG9naW5cIj5cbiAgICAgIDxuYXYgY2xhc3M9XCJsb2dpbi1uYXZcIj5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIHVpLXNycmVmPVwie3skY3RybC5sb2dpbn19XCIgdWktc3JlZi1hY3RpdmU9XCJzZWxlY3RlZFwiIHRpdGxlPVwiTG9naW5cIiBjbGFzcz1cImxvZ2luXCJcIj5Mb2dpbjwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgIDxhIHVpLXNycmVmPVwie3skY3RybC5yZWdpc3Rlcn19XCIgdWktc3JlZi1hY3RpdmU9XCJzZWxlY3RlZFwiIHRpdGxlPVwiQ2FkYXN0cm9cIiBjbGFzcz1cInJlZ2lzdGVyXCI+Q2FkYXN0cm88L2E+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvbmF2PlxuICAgICAgPGRpdiBjbGFzcz1cImxvZ28tYm94XCI+XG4gICAgICAgIDxpbWcgZGF0YS1uZy1zcmM9XCJ7eyRjdHJsLmxvZ299fVwiIHRpdGxlPVwie3skY3RybC50aXRsZX19XCI+XG4gICAgICA8L2Rpdj5cbiAgICA8L2hlYWRlcj5cbiAgYFxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJDb21wb25lbnQiLCJpbXBvcnQgTG9naW4gICAgICAgIGZyb20gJy4vbG9naW4vY29tcG9uZW50LmpzJ1xuaW1wb3J0IExvZ2luSGVhZGVyICBmcm9tICcuL2hlYWRlci9jb21wb25lbnQuanMnXG5cbmFuZ3VsYXJcbiAgLm1vZHVsZSgnZ3VtZ2EubG9naW4nLCBbXSlcbiAgLmNvbXBvbmVudCgnZ2xMb2dpbicsIExvZ2luKVxuICAuY29tcG9uZW50KCdnbExvZ2luSGVhZGVyJywgTG9naW5IZWFkZXIpXG4iLCJsZXQgTG9naW5Db21wb25lbnQgPSB7XG4gIGJpbmRpbmdzOiB7XG4gICAgb25TdWJtaXQ6ICcmJ1xuICB9LFxuICB0ZW1wbGF0ZTogYFxuICAgIDxzZWN0aW9uIGNsYXNzPVwibG9naW4tYm94XCI+XG4gICAgICA8Zm9ybSBuYW1lPVwibG9naW4tZm9ybVwiIGNsYXNzPVwibG9naW4tZm9ybVwiIGRhdGEtbmctc3VibWl0PVwiJGN0cmwuc3VibWl0KCRjdHJsLmxvZ2luKVwiIG5vdmFsaWRhdGU+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJ1c2VybmFtZVwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cIkUtbWFpbFwiIGRhdGEtbmctbW9kZWw9XCIkY3RybC5sb2dpbi51c2VybmFtZVwiPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgZm9yPVwicGFzc3dvcmRcIj5cbiAgICAgICAgICA8aW5wdXQgdHlwZT1cInBhc3N3b3JkXCIgbmFtZT1cInBhc3N3b3JkXCIgcGxhY2Vob2xkZXI9XCJTZW5oYVwiIGRhdGEtbmctbW9kZWw9XCIkY3RybC5sb2dpbi5wYXNzd29yZFwiPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8bGFiZWwgZm9yPVwiZG8tbG9naW5cIj5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBuYW1lPVwiZG8tbG9naW5cIiBjbGFzcz1cImRvLWxvZ2luXCI+RW50cmFyPC9idXR0b24+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkby1yZWdpc3RlclwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG5hbWU9XCJkby1yZWdpc3RlclwiIGNsYXNzPVwiZG8tcmVnaXN0ZXJcIj5SZWdpc3RyYXI8L2J1dHRvbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGEgY2xhc3M9XCJmb3Jnb3QtcGFzc3dvcmRcIiBocmVmPVwiI1wiPkVzcXVlY2V1IGEgc2VuaGE/PC9hPlxuICAgICAgPC9mb3JtPlxuICAgIDwvc2VjdGlvbj5cbiAgYCxcbiAgY29udHJvbGxlcjogW2Z1bmN0aW9uKCkge1xuICAgIGxldCBjdHJsID0gdGhpc1xuICAgIFxuICAgIGN0cmwuc3VibWl0ID0gbG9naW4gPT4ge1xuICAgICAgY3RybC5vblN1Ym1pdCh7bG9naW46IGxvZ2lufSlcbiAgICB9XG4gIH1dXG59XG5cbmV4cG9ydCBkZWZhdWx0IExvZ2luQ29tcG9uZW50Il19
