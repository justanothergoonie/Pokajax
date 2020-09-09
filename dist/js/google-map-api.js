"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var GoogleApi = /*#__PURE__*/function () {
  function GoogleApi() {
    var _this = this;

    _classCallCheck(this, GoogleApi);

    _defineProperty(this, "geocode", function (address) {
      var geocoder = new google.maps.Geocoder();
      geocoder.geocode({
        address: address
      }, function (results, status) {
        if (status == 'OK') {
          console.log(results);

          _this.map.setCenter(results[0].geometry.location);

          var event = new CustomEvent('got-geocode', {
            detail: {
              lat: results[0].geometry.location.lat(),
              lng: results[0].geometry.location.lng()
            }
          });
          document.querySelector('body').dispatchEvent(event);
        }
      });
    });

    _defineProperty(this, "handleGetGeocode", function (event) {
      _this.geocode(event.detail);
    });

    _defineProperty(this, "searchPlaces", function (request) {
      var service = new google.maps.places.PlacesService(_this.map);
      service.nearbySearch(request, function (results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          // for (var i = 0; i < results.length; i++) {
          // 	createMarker(results[i]);
          // }
          var evt = new CustomEvent('got-places', {
            detail: results
          });
          document.querySelector('body').dispatchEvent(evt);
        } else {
          console.warn('google maps places status NOT OK', status);
        }
      });
    });

    _defineProperty(this, "handleGetPlaces", function (event) {
      _this.searchPlaces(event.detail);
    });

    this.setupMap();
    var bodyEl = document.querySelector('body');
    bodyEl.addEventListener('get-geocode', this.handleGetGeocode);
    bodyEl.addEventListener('get-places', this.handleGetPlaces);
  }

  _createClass(GoogleApi, [{
    key: "setupMap",
    value: function setupMap() {
      var circusLatLng = {
        lat: 33.749,
        lng: -84.388
      };
      this.map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: circusLatLng
      });
    }
  }]);

  return GoogleApi;
}();

function initMap() {
  new GoogleApi(document.getElementById('#map'));
}
//# sourceMappingURL=google-map-api.js.map
