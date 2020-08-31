"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var GoogleApi = /*#__PURE__*/function () {
  function GoogleApi() {
    _classCallCheck(this, GoogleApi);

    this.setupMap();
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
