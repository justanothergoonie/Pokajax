"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var WeatherApi = /*#__PURE__*/function () {
  function WeatherApi() {
    _classCallCheck(this, WeatherApi);

    _defineProperty(this, "BASE_URL", 'http://api.weatherstack.com/current');

    _defineProperty(this, "API_KEY", '5017834a08316be9d1d802e71ee54e10');
  }

  _createClass(WeatherApi, [{
    key: "weatherSearch",
    value: function weatherSearch(term, params) {
      axios.get(this.BASE_URL, {
        params: _objectSpread({
          access_key: this.API_KEY,
          query: term
        }, params)
      }).then(this.handleResponse).catch(this.handleError);
    }
  }, {
    key: "handleResponse",
    value: function handleResponse(response) {
      console.log('got a response', response);
      var event = new CustomEvent('got-results', {
        detail: response
      });
      document.querySelector('body').dispatchEvent(event);
    }
  }]);

  return WeatherApi;
}();
//# sourceMappingURL=weather-api.js.map
