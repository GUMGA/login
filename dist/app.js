(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HeaderComponent = {
  bindings: {
    register: '<',
    login: '<',
    background: '@',
    logo: '@',
    title: '@'
  },
  template: '\n    <header class="header-login" style="background-image: url({{$ctrl.background}})">\n      <nav class="login-nav">\n        <ul>\n          <li>\n            <a ui-srref="{{$ctrl.login}}" ui-sref-active="selected" title="Login" class="login"">Login</a>\n          </li>\n          <li>\n            <a ui-srref="{{$ctrl.register}}" ui-sref-active="selected" title="Cadastro" class="register">Cadastro</a>\n          </li>\n        </ul>\n      </nav>\n      <div class="logo-box">\n        <img data-ng-src="{{$ctrl.logo}}" title="{{$ctrl.title}}">\n      </div>\n    </header>\n  '
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
    onSubmit: '&',
    forgot: '@'
  },
  template: '\n    <section class="login-box">\n      <form name="login-form" class="login-form" data-ng-submit="$ctrl.submit($ctrl.login)" novalidate>\n        <label for="username">\n          <input type="email" name="username" placeholder="E-mail" data-ng-model="$ctrl.login.username">\n        </label>\n        <label for="password">\n          <input type="password" name="password" placeholder="Senha" data-ng-model="$ctrl.login.password">\n        </label>\n        <label for="do-login">\n          <button type="submit" name="do-login" class="do-login">Entrar</button>\n        </label>\n        <label for="do-register">\n          <button type="button" name="do-register" class="do-register">Registrar</button>\n        </label>\n        <a class="forgot-password" ui-sref="{{$ctrl.forgot}}">Esqueceu a senha?</a>\n      </form>\n    </section>\n  ',
  controller: [function () {
    var ctrl = this;

    ctrl.submit = function (login) {
      ctrl.onSubmit({ login: login });
    };
  }]
};

exports.default = LoginComponent;

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvY29tcG9uZW50cy9oZWFkZXIvY29tcG9uZW50LmpzIiwic3JjL2NvbXBvbmVudHMvaW5kZXguanMiLCJzcmMvY29tcG9uZW50cy9sb2dpbi9jb21wb25lbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQ0FBLElBQUksa0JBQWtCO0FBQ3BCLFlBQVU7QUFDUixjQUFVLEdBREY7QUFFUixXQUFPLEdBRkM7QUFHUixnQkFBWSxHQUhKO0FBSVIsVUFBTSxHQUpFO0FBS1IsV0FBTztBQUxDLEdBRFU7QUFRcEI7QUFSb0IsQ0FBdEI7O2tCQTJCZSxlOzs7OztBQzNCZjs7OztBQUNBOzs7Ozs7QUFFQSxRQUNHLE1BREgsQ0FDVSxhQURWLEVBQ3lCLEVBRHpCLEVBRUcsU0FGSCxDQUVhLFNBRmIsdUJBR0csU0FISCxDQUdhLGVBSGI7Ozs7Ozs7O0FDSEEsSUFBSSxpQkFBaUI7QUFDbkIsWUFBVTtBQUNSLGNBQVUsR0FERjtBQUVSLFlBQVE7QUFGQSxHQURTO0FBS25CLDgxQkFMbUI7QUF3Qm5CLGNBQVksQ0FBQyxZQUFXO0FBQ3RCLFFBQUksT0FBTyxJQUFYOztBQUVBLFNBQUssTUFBTCxHQUFjLGlCQUFTO0FBQ3JCLFdBQUssUUFBTCxDQUFjLEVBQUMsT0FBTyxLQUFSLEVBQWQ7QUFDRCxLQUZEO0FBR0QsR0FOVztBQXhCTyxDQUFyQjs7a0JBaUNlLGMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwibGV0IEhlYWRlckNvbXBvbmVudCA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICByZWdpc3RlcjogJzwnLFxuICAgIGxvZ2luOiAnPCcsXG4gICAgYmFja2dyb3VuZDogJ0AnLFxuICAgIGxvZ286ICdAJyxcbiAgICB0aXRsZTogJ0AnXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPGhlYWRlciBjbGFzcz1cImhlYWRlci1sb2dpblwiIHN0eWxlPVwiYmFja2dyb3VuZC1pbWFnZTogdXJsKHt7JGN0cmwuYmFja2dyb3VuZH19KVwiPlxuICAgICAgPG5hdiBjbGFzcz1cImxvZ2luLW5hdlwiPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgdWktc3JyZWY9XCJ7eyRjdHJsLmxvZ2lufX1cIiB1aS1zcmVmLWFjdGl2ZT1cInNlbGVjdGVkXCIgdGl0bGU9XCJMb2dpblwiIGNsYXNzPVwibG9naW5cIlwiPkxvZ2luPC9hPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPGxpPlxuICAgICAgICAgICAgPGEgdWktc3JyZWY9XCJ7eyRjdHJsLnJlZ2lzdGVyfX1cIiB1aS1zcmVmLWFjdGl2ZT1cInNlbGVjdGVkXCIgdGl0bGU9XCJDYWRhc3Ryb1wiIGNsYXNzPVwicmVnaXN0ZXJcIj5DYWRhc3RybzwvYT5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgICAgPC9uYXY+XG4gICAgICA8ZGl2IGNsYXNzPVwibG9nby1ib3hcIj5cbiAgICAgICAgPGltZyBkYXRhLW5nLXNyYz1cInt7JGN0cmwubG9nb319XCIgdGl0bGU9XCJ7eyRjdHJsLnRpdGxlfX1cIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvaGVhZGVyPlxuICBgXG59XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlckNvbXBvbmVudCIsImltcG9ydCBMb2dpbiAgICAgICAgZnJvbSAnLi9sb2dpbi9jb21wb25lbnQuanMnXG5pbXBvcnQgTG9naW5IZWFkZXIgIGZyb20gJy4vaGVhZGVyL2NvbXBvbmVudC5qcydcblxuYW5ndWxhclxuICAubW9kdWxlKCdndW1nYS5sb2dpbicsIFtdKVxuICAuY29tcG9uZW50KCdnbExvZ2luJywgTG9naW4pXG4gIC5jb21wb25lbnQoJ2dsTG9naW5IZWFkZXInLCBMb2dpbkhlYWRlcilcbiIsImxldCBMb2dpbkNvbXBvbmVudCA9IHtcbiAgYmluZGluZ3M6IHtcbiAgICBvblN1Ym1pdDogJyYnLFxuICAgIGZvcmdvdDogJ0AnXG4gIH0sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJsb2dpbi1ib3hcIj5cbiAgICAgIDxmb3JtIG5hbWU9XCJsb2dpbi1mb3JtXCIgY2xhc3M9XCJsb2dpbi1mb3JtXCIgZGF0YS1uZy1zdWJtaXQ9XCIkY3RybC5zdWJtaXQoJGN0cmwubG9naW4pXCIgbm92YWxpZGF0ZT5cbiAgICAgICAgPGxhYmVsIGZvcj1cInVzZXJuYW1lXCI+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJlbWFpbFwiIG5hbWU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwiRS1tYWlsXCIgZGF0YS1uZy1tb2RlbD1cIiRjdHJsLmxvZ2luLnVzZXJuYW1lXCI+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJwYXNzd29yZFwiPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwicGFzc3dvcmRcIiBuYW1lPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlNlbmhhXCIgZGF0YS1uZy1tb2RlbD1cIiRjdHJsLmxvZ2luLnBhc3N3b3JkXCI+XG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxsYWJlbCBmb3I9XCJkby1sb2dpblwiPlxuICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIG5hbWU9XCJkby1sb2dpblwiIGNsYXNzPVwiZG8tbG9naW5cIj5FbnRyYXI8L2J1dHRvbj5cbiAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPGxhYmVsIGZvcj1cImRvLXJlZ2lzdGVyXCI+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgbmFtZT1cImRvLXJlZ2lzdGVyXCIgY2xhc3M9XCJkby1yZWdpc3RlclwiPlJlZ2lzdHJhcjwvYnV0dG9uPlxuICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8YSBjbGFzcz1cImZvcmdvdC1wYXNzd29yZFwiIHVpLXNyZWY9XCJ7eyRjdHJsLmZvcmdvdH19XCI+RXNxdWVjZXUgYSBzZW5oYT88L2E+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9zZWN0aW9uPlxuICBgLFxuICBjb250cm9sbGVyOiBbZnVuY3Rpb24oKSB7XG4gICAgbGV0IGN0cmwgPSB0aGlzXG4gICAgXG4gICAgY3RybC5zdWJtaXQgPSBsb2dpbiA9PiB7XG4gICAgICBjdHJsLm9uU3VibWl0KHtsb2dpbjogbG9naW59KVxuICAgIH1cbiAgfV1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9naW5Db21wb25lbnQiXX0=
