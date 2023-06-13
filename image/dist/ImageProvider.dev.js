"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ImageProvider = void 0;

var _Drawable = require("./Drawable.js");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ImageProvider =
/*#__PURE__*/
function () {
  function ImageProvider() {
    _classCallCheck(this, ImageProvider);
  }

  _createClass(ImageProvider, [{
    key: "getObject",
    value: function getObject(dataBase, map) {
      var drawer = new _Drawable.Drawable();
      dataBase.plantArray.forEach(function (element) {
        drawer.drawObject(map, element);
      });
      drawer.drawCountOfObjects(dataBase);
    }
  }]);

  return ImageProvider;
}(); //Нужен какой-то параметр, по которому будем отслеживать, съели растение или нет. Если съели, то закрашиваем клетку белым, а после этого удаляем объект из базы данных


exports.ImageProvider = ImageProvider;