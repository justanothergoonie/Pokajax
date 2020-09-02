"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

console.log('hello');

var Main = /*#__PURE__*/function () {
  function Main() {
    var _this = this;

    _classCallCheck(this, Main);

    _defineProperty(this, "handleGotGeocode", function (event) {
      _this.currentLocation = event.detail;
      console.log(_this.currentLocation);
      var location = new google.maps.LatLng(_this.currentLocation.lat, _this.currentLocation.lng);
      var placeEvent = new CustomEvent('get-places', {
        detail: {
          location: location,
          radius: 5000
        }
      });
      document.querySelector('body').dispatchEvent(placeEvent);
    });

    _defineProperty(this, "handleGotPlaces", function (event) {
      _this.currentPlaces = event.detail;
      console.log(_this.currentPlaces);
    });

    _defineProperty(this, "handleSearch", function (event) {
      event.preventDefault();
      var locationEl = document.querySelector('[name="location"]');
      var locationTerm = locationEl.value;
      console.log('searching..', locationTerm);
      var evt = new CustomEvent('get-geocode', {
        detail: locationTerm
      });
      document.querySelector('body').dispatchEvent(evt);
    });

    this.setupEventListeners();
  }

  _createClass(Main, [{
    key: "setupEventListeners",
    value: function setupEventListeners() {
      var buttonEl = document.querySelector('[name="search"]');
      buttonEl.addEventListener('click', this.handleSearch);
      var bodyEl = document.querySelector('body');
      bodyEl.addEventListener('got-geocode', this.handleGotGeocode);
      bodyEl.addEventListener('got-places', this.handleGotPlaces);
      bodyEl.addEventListener('got-results', this.handleResults);
      bodyEl.addEventListener('got-error', this.handleSearchError);
    }
  }]);

  return Main;
}();

new Main();
//# sourceMappingURL=main.js.map
