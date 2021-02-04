/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "./";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

//Gallery


__webpack_require__(1);

__webpack_require__(2);

__webpack_require__(3);

__webpack_require__(4);

__webpack_require__(5);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener("DOMContentLoaded", function () {
    var Main = function () {
        function Main() {
            _classCallCheck(this, Main);

            this.menuBtn = document.getElementById('mobile-burger-menu');
            this.mobileMenu = document.getElementById('mobile-menu');
            this.historyBtn = document.getElementById('history-button');
            this.historyPart = document.getElementById('history-part');
            this.appBtn = document.getElementById('app-btn');
            this.appPart = document.getElementById('app-part-2');
        }

        _createClass(Main, [{
            key: 'openHideMenu',
            value: function openHideMenu() {
                var _this = this;

                this.menuBtn.addEventListener('click', function () {
                    var add = function add() {
                        _this.mobileMenu.classList.remove('hidden-menu');
                        _this.menuBtn.classList.add('button-closed');
                    };

                    var remove = function remove() {
                        _this.mobileMenu.classList.add('hidden-menu');
                        _this.menuBtn.classList.remove('button-closed');
                    };

                    _this.mobileMenu.classList.contains('hidden-menu') ? add() : remove();
                });
            }
        }, {
            key: 'historyhideShow',
            value: function historyhideShow() {
                var _this2 = this;

                this.historyBtn.addEventListener('click', function () {

                    var add = function add() {
                        _this2.historyPart.classList.remove('history-hidden');
                        _this2.historyBtn.innerHTML = 'Скрыть историю';
                    };

                    var remove = function remove() {
                        _this2.historyPart.classList.add('history-hidden');
                        _this2.historyBtn.innerHTML = 'Читать полностью';
                    };

                    _this2.historyPart.classList.contains('history-hidden') ? add() : remove();
                });
            }
        }, {
            key: 'apperanceHideShow',
            value: function apperanceHideShow() {
                var _this3 = this;

                this.appBtn.addEventListener('click', function () {
                    var add = function add() {
                        _this3.appPart.classList.remove('app-desc-hidden');
                        _this3.appBtn.innerHTML = 'Скрыть описание';
                    };

                    var remove = function remove() {
                        _this3.appPart.classList.add('app-desc-hidden');
                        _this3.appBtn.innerHTML = 'Читать полностью';
                    };

                    _this3.appPart.classList.contains('app-desc-hidden') ? add() : remove();
                });
            }
        }, {
            key: 'collectData',
            value: function collectData() {
                var _this4 = this;

                var formValues = document.forms["form"].elements;
                var Send = document.getElementsByClassName("send_button")[0];

                Send.addEventListener('click', function () {

                    var obj = JSON.stringify({
                        name: formValues[0].value,
                        phone: formValues[1].value,
                        email: formValues[2].value,
                        description: formValues[3].value
                    });

                    _this4.serverRequest(obj);
                });
            }
        }, {
            key: 'serverRequest',
            value: function serverRequest(data) {
                var serverLink = "http://localhost:8000/";

                var xhr = new XMLHttpRequest();
                xhr.open("POST", serverLink, false);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(data);

                if (xhr.status != 200) {
                    alert("Данные от сервера не получены. Ошибка: 404.");
                } else {}
            }
        }]);

        return Main;
    }();

    var createObj = new Main();

    createObj.openHideMenu();
    createObj.historyhideShow();
    createObj.apperanceHideShow();
    //createObj.collectData();
    //createObj.validation();

});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


console.log('Компонент!');

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener("DOMContentLoaded", function () {
  var Gallery = function () {
    function Gallery() {
      _classCallCheck(this, Gallery);

      this.galleryWrapper = document.getElementById('show-more-gallery');
      this.galleryContainer = document.getElementById('gallery-wrapper');
      this.wholeGalleryWrapper = document.getElementById('whole-gallery');
      this.galleryClose = document.getElementById('galleryClose');
      this.arrowNext = document.getElementById('arrow-next');
      this.arrowPrev = document.getElementById('arrow-prev');
      this.arrowPre = document.getElementById('arrow-prev');
    }

    _createClass(Gallery, [{
      key: 'addImgMobile',
      value: function addImgMobile() {
        this.galleryWrapper.onclick = function () {
          var images = document.getElementsByClassName('gallery-pic-other');
          var button = document.getElementById('show-more-gallery');
          var imagesArray = Array.from(images);

          imagesArray.length ? imagesArray.slice(0, 3).map(function (item) {
            item.classList.remove('gallery-pic-other');
          }) : button.classList.add('hidden');
        };
      }
    }, {
      key: 'openGalleryTablets',
      value: function openGalleryTablets() {
        var _this = this;

        this.galleryContainer.addEventListener('click', function (e) {
          var srcImg = e.target.src;

          srcImg ? _this.wholeGalleryWrapper.classList.remove('hidden') : null;
          srcImg ? _this.galleryContainer.querySelector('.block-img').src = srcImg : null;
        });
      }
    }, {
      key: 'closeGalleryTablets',
      value: function closeGalleryTablets() {
        var _this2 = this;

        this.galleryClose.addEventListener('click', function () {
          _this2.wholeGalleryWrapper.classList.add('hidden');
        });
      }
    }, {
      key: 'changeGalleryPic',
      value: function changeGalleryPic(symbol) {
        var currentImg = this.galleryContainer.querySelector('.block-img').src;
        var arrayIMG = Array.from(this.galleryContainer.getElementsByTagName('img'));

        var res = [];
        arrayIMG.find(function (item, index) {
          item.src == currentImg ? res.push(index) : null;
        });

        if (arrayIMG.length - 2 == res[0]) {
          this.galleryContainer.querySelector('.block-img').src = arrayIMG[0].src;
        } else {
          if (symbol) {
            this.galleryContainer.querySelector('.block-img').src = arrayIMG[res[0] + 1].src;
          } else {
            res[0] == 0 ? null : this.galleryContainer.querySelector('.block-img').src = arrayIMG[res[0] - 1].src;
          }
        }
      }
    }, {
      key: 'nextImg',
      value: function nextImg(symbol) {
        var _this3 = this;

        this.arrowNext.addEventListener('click', function (e) {
          _this3.changeGalleryPic(symbol);
        });
      }
    }, {
      key: 'prevImg',
      value: function prevImg(symbol) {
        var _this4 = this;

        this.arrowPrev.addEventListener('click', function (e) {
          _this4.changeGalleryPic(symbol);
        });
      }
    }]);

    return Gallery;
  }();

  var Ga = new Gallery();

  Ga.addImgMobile();
  Ga.openGalleryTablets();
  Ga.closeGalleryTablets();
  Ga.nextImg(true);
  Ga.prevImg(false);
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

document.addEventListener("DOMContentLoaded", function () {
    var Validation = function () {
        function Validation() {
            _classCallCheck(this, Validation);
        }

        _createClass(Validation, [{
            key: 'checkForm',
            value: function checkForm() {
                var _this = this;

                var form = document.getElementById('form');

                form.addEventListener('submit', function (e) {
                    e.preventDefault();

                    //Delete Errors Labels
                    var lbl = form.querySelectorAll('label');
                    lbl.length != 0 ? lbl.forEach(function (item) {
                        return item.remove();
                    }) : null;

                    //Errors messages
                    var messages = {
                        'name': 'Введите имя. Не менее 3 букв.',
                        'phone': 'Введите телефон. Не менее 7 цифр.',
                        'email': 'Введите верный email. <br> Пример: example@gmail.com'

                        //Add Error Tag to input
                    };var action = function action(node, field) {

                        var errorTag = document.createElement('label');
                        errorTag.className = 'from-error';
                        errorTag.innerHTML = field;
                        node.after(errorTag);
                    };

                    //Check Email

                    var emailValid = function emailValid() {
                        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
                        var emailAdr = form[2].value;

                        if (reg.test(emailAdr) == false && form[2].value.length > 0) {
                            action(form[2], messages.email);
                            return false;
                        }
                    };

                    //Final check all inputs

                    if (form[0].value != true && form[0].value.length < 3) {
                        action(form[0], messages.name);
                    }

                    if (form[1].value != true && form[1].value.length < 7) {
                        action(form[1], messages.phone);
                    }

                    emailValid();

                    //Когда кол-во ошибок 0 запускаем отправку формы
                    var secondCheck = form.querySelectorAll('label');
                    secondCheck.length == 0 ? _this.collectData() : null;
                });
            }
        }, {
            key: 'collectData',
            value: function collectData() {
                var formValues = document.forms["form"].elements;

                var obj = JSON.stringify({
                    name: formValues[0].value,
                    phone: formValues[1].value,
                    email: formValues[2].value,
                    description: formValues[3].value
                });

                this.serverRequest(obj);
            }
        }, {
            key: 'serverRequest',
            value: function serverRequest(data) {
                var serverLink = "http://localhost:8000/";

                var xhr = new XMLHttpRequest();
                xhr.open("POST", serverLink, false);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(data);

                if (xhr.status != 200) {
                    alert("Данные не отправлены. Повторите попыткку позже или позвоните по телефону.");
                } else {
                    var form = document.getElementById('form');
                    [].concat(_toConsumableArray(form)).forEach(function (item) {
                        return item.value = '';
                    });

                    var successTab = document.querySelector('.success-sent');
                    successTab.classList.remove('hidden');

                    setTimeout(function () {
                        successTab.classList.add('hidden');
                    }, 3000);
                }
            }
        }]);

        return Validation;
    }();

    var FormValidation = new Validation();

    FormValidation.checkForm();
});

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTczMmMyOTgyMTNjMmRjYjQ3N2UiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdHlsZS9pbmRleC5zY3NzPzk2YWYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NvbXBvbmVudHMvaGVhZGVyLWZ1bmMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlL2NvbXBvbmVudHMvZ2FsbGVyeS1zdHlsZXMuc2Nzcz9iZmNiIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL2dhbGxlcnktc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9jb21wb25lbnRzL3ZhbGlkYXRpb24uanMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiTWFpbiIsIm1lbnVCdG4iLCJnZXRFbGVtZW50QnlJZCIsIm1vYmlsZU1lbnUiLCJoaXN0b3J5QnRuIiwiaGlzdG9yeVBhcnQiLCJhcHBCdG4iLCJhcHBQYXJ0IiwiYWRkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiY29udGFpbnMiLCJpbm5lckhUTUwiLCJmb3JtVmFsdWVzIiwiZm9ybXMiLCJlbGVtZW50cyIsIlNlbmQiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwib2JqIiwiSlNPTiIsInN0cmluZ2lmeSIsIm5hbWUiLCJ2YWx1ZSIsInBob25lIiwiZW1haWwiLCJkZXNjcmlwdGlvbiIsInNlcnZlclJlcXVlc3QiLCJkYXRhIiwic2VydmVyTGluayIsInhociIsIlhNTEh0dHBSZXF1ZXN0Iiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJzZW5kIiwic3RhdHVzIiwiYWxlcnQiLCJjcmVhdGVPYmoiLCJvcGVuSGlkZU1lbnUiLCJoaXN0b3J5aGlkZVNob3ciLCJhcHBlcmFuY2VIaWRlU2hvdyIsImNvbnNvbGUiLCJsb2ciLCJHYWxsZXJ5IiwiZ2FsbGVyeVdyYXBwZXIiLCJnYWxsZXJ5Q29udGFpbmVyIiwid2hvbGVHYWxsZXJ5V3JhcHBlciIsImdhbGxlcnlDbG9zZSIsImFycm93TmV4dCIsImFycm93UHJldiIsImFycm93UHJlIiwib25jbGljayIsImltYWdlcyIsImJ1dHRvbiIsImltYWdlc0FycmF5IiwiQXJyYXkiLCJmcm9tIiwibGVuZ3RoIiwic2xpY2UiLCJtYXAiLCJpdGVtIiwiZSIsInNyY0ltZyIsInRhcmdldCIsInNyYyIsInF1ZXJ5U2VsZWN0b3IiLCJzeW1ib2wiLCJjdXJyZW50SW1nIiwiYXJyYXlJTUciLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInJlcyIsImZpbmQiLCJpbmRleCIsInB1c2giLCJjaGFuZ2VHYWxsZXJ5UGljIiwiR2EiLCJhZGRJbWdNb2JpbGUiLCJvcGVuR2FsbGVyeVRhYmxldHMiLCJjbG9zZUdhbGxlcnlUYWJsZXRzIiwibmV4dEltZyIsInByZXZJbWciLCJWYWxpZGF0aW9uIiwiZm9ybSIsInByZXZlbnREZWZhdWx0IiwibGJsIiwicXVlcnlTZWxlY3RvckFsbCIsImZvckVhY2giLCJtZXNzYWdlcyIsImFjdGlvbiIsIm5vZGUiLCJmaWVsZCIsImVycm9yVGFnIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsImFmdGVyIiwiZW1haWxWYWxpZCIsInJlZyIsImVtYWlsQWRyIiwidGVzdCIsInNlY29uZENoZWNrIiwiY29sbGVjdERhdGEiLCJzdWNjZXNzVGFiIiwic2V0VGltZW91dCIsIkZvcm1WYWxpZGF0aW9uIiwiY2hlY2tGb3JtIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLEtBQUs7UUFDTDtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEy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OiJqcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTczMmMyOTgyMTNjMmRjYjQ3N2UiLCJpbXBvcnQgJy4uL3N0eWxlL2luZGV4LnNjc3MnO1xuaW1wb3J0ICcuL2NvbXBvbmVudHMvaGVhZGVyLWZ1bmMnO1xuXG4vL0dhbGxlcnlcbmltcG9ydCAnLi4vc3R5bGUvY29tcG9uZW50cy9nYWxsZXJ5LXN0eWxlcy5zY3NzJztcbmltcG9ydCAnLi4vanMvY29tcG9uZW50cy9nYWxsZXJ5LXNjcmlwdCc7XG5pbXBvcnQgJy4uL2pzL2NvbXBvbmVudHMvdmFsaWRhdGlvbic7XG5cblxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG4gICAgY2xhc3MgTWFpbiB7XG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICAgICAgdGhpcy5tZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZS1idXJnZXItbWVudScpO1xuICAgICAgICAgICAgdGhpcy5tb2JpbGVNZW51ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vYmlsZS1tZW51Jyk7XG4gICAgICAgICAgICB0aGlzLmhpc3RvcnlCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeS1idXR0b24nKTtcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yeVBhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGlzdG9yeS1wYXJ0Jyk7XG4gICAgICAgICAgICB0aGlzLmFwcEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAtYnRuJyk7XG4gICAgICAgICAgICB0aGlzLmFwcFBhcnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwLXBhcnQtMicpO1xuICAgICAgICB9XG5cblxuICAgICAgICBvcGVuSGlkZU1lbnUoKSB7XG4gICAgICAgICAgICB0aGlzLm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGFkZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2JpbGVNZW51LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbi1tZW51Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudUJ0bi5jbGFzc0xpc3QuYWRkKCdidXR0b24tY2xvc2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgbGV0IHJlbW92ZSA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2JpbGVNZW51LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbi1tZW51Jyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubWVudUJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b24tY2xvc2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5tb2JpbGVNZW51LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuLW1lbnUnKSA/IGFkZCgpIDogcmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgaGlzdG9yeWhpZGVTaG93KCkge1xuICAgICAgICAgICAgdGhpcy5oaXN0b3J5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IGFkZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaXN0b3J5UGFydC5jbGFzc0xpc3QucmVtb3ZlKCdoaXN0b3J5LWhpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3RvcnlCdG4uaW5uZXJIVE1MID0gJ9Ch0LrRgNGL0YLRjCDQuNGB0YLQvtGA0LjRjidcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpc3RvcnlQYXJ0LmNsYXNzTGlzdC5hZGQoJ2hpc3RvcnktaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGlzdG9yeUJ0bi5pbm5lckhUTUwgPSAn0KfQuNGC0LDRgtGMINC/0L7Qu9C90L7RgdGC0YzRjidcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmhpc3RvcnlQYXJ0LmNsYXNzTGlzdC5jb250YWlucygnaGlzdG9yeS1oaWRkZW4nKSA/IGFkZCgpIDogcmVtb3ZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgYXBwZXJhbmNlSGlkZVNob3coKSB7XG4gICAgICAgICAgICB0aGlzLmFwcEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgYWRkID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFBhcnQuY2xhc3NMaXN0LnJlbW92ZSgnYXBwLWRlc2MtaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwQnRuLmlubmVySFRNTCA9ICfQodC60YDRi9GC0Ywg0L7Qv9C40YHQsNC90LjQtSdcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBsZXQgcmVtb3ZlID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcFBhcnQuY2xhc3NMaXN0LmFkZCgnYXBwLWRlc2MtaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwQnRuLmlubmVySFRNTCA9ICfQp9C40YLQsNGC0Ywg0L/QvtC70L3QvtGB0YLRjNGOJ1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuYXBwUGFydC5jbGFzc0xpc3QuY29udGFpbnMoJ2FwcC1kZXNjLWhpZGRlbicpID8gYWRkKCkgOiByZW1vdmUoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sbGVjdERhdGEoKSB7XG4gICAgICAgICAgICBsZXQgZm9ybVZhbHVlcyA9IGRvY3VtZW50LmZvcm1zW1wiZm9ybVwiXS5lbGVtZW50cztcbiAgICAgICAgICAgIGxldCBTZW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcInNlbmRfYnV0dG9uXCIpWzBdO1xuXG4gICAgICAgICAgICBTZW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogZm9ybVZhbHVlc1swXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgcGhvbmU6IGZvcm1WYWx1ZXNbMV0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGVtYWlsOiBmb3JtVmFsdWVzWzJdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZm9ybVZhbHVlc1szXS52YWx1ZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2ZXJSZXF1ZXN0KG9iaik7XG4gICAgICAgICAgICB9KTtcbiAgIFxuICAgICAgICB9XG5cblxuICAgICAgICBzZXJ2ZXJSZXF1ZXN0KGRhdGEpIHtcbiAgICAgICAgICAgIGxldCBzZXJ2ZXJMaW5rID0gXCJodHRwOi8vbG9jYWxob3N0OjgwMDAvXCI7XG5cbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIHhoci5vcGVuKFwiUE9TVFwiLCBzZXJ2ZXJMaW5rLCBmYWxzZSk7XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcignQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcbiAgICAgICAgICAgIHhoci5zZW5kKGRhdGEpO1xuXG4gICAgICAgICAgICBpZiAoeGhyLnN0YXR1cyAhPSAyMDApIHtcbiAgICAgICAgICAgICAgICBhbGVydChcItCU0LDQvdC90YvQtSDQvtGCINGB0LXRgNCy0LXRgNCwINC90LUg0L/QvtC70YPRh9C10L3Riy4g0J7RiNC40LHQutCwOiA0MDQuXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgbGV0IGNyZWF0ZU9iaiA9IG5ldyBNYWluKCk7XG5cbiAgICBjcmVhdGVPYmoub3BlbkhpZGVNZW51KCk7XG4gICAgY3JlYXRlT2JqLmhpc3RvcnloaWRlU2hvdygpO1xuICAgIGNyZWF0ZU9iai5hcHBlcmFuY2VIaWRlU2hvdygpO1xuICAgIC8vY3JlYXRlT2JqLmNvbGxlY3REYXRhKCk7XG4gICAgLy9jcmVhdGVPYmoudmFsaWRhdGlvbigpO1xuXG5cbn0pO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc3R5bGUvaW5kZXguc2Nzc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJjb25zb2xlLmxvZygn0JrQvtC80L/QvtC90LXQvdGCIScpO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9qcy9jb21wb25lbnRzL2hlYWRlci1mdW5jLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zdHlsZS9jb21wb25lbnRzL2dhbGxlcnktc3R5bGVzLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCkgPT4ge1xuICBcbiAgY2xhc3MgR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICB0aGlzLmdhbGxlcnlXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Nob3ctbW9yZS1nYWxsZXJ5Jyk7XG4gICAgICB0aGlzLmdhbGxlcnlDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FsbGVyeS13cmFwcGVyJyk7XG4gICAgICB0aGlzLndob2xlR2FsbGVyeVdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2hvbGUtZ2FsbGVyeScpO1xuICAgICAgdGhpcy5nYWxsZXJ5Q2xvc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FsbGVyeUNsb3NlJyk7XG4gICAgICB0aGlzLmFycm93TmV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvdy1uZXh0Jyk7XG4gICAgICB0aGlzLmFycm93UHJldiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcnJvdy1wcmV2Jyk7XG4gICAgICB0aGlzLmFycm93UHJlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Fycm93LXByZXYnKTtcbiAgICB9XG4gIFxuICAgIGFkZEltZ01vYmlsZSgpIHtcbiAgICAgIHRoaXMuZ2FsbGVyeVdyYXBwZXIub25jbGljayA9ICgpID0+IHtcbiAgICAgICAgbGV0IGltYWdlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2dhbGxlcnktcGljLW90aGVyJyk7XG4gICAgICAgIGxldCBidXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2hvdy1tb3JlLWdhbGxlcnknKTtcbiAgICAgICAgbGV0IGltYWdlc0FycmF5ID0gQXJyYXkuZnJvbShpbWFnZXMpO1xuXG4gICAgICAgIGltYWdlc0FycmF5Lmxlbmd0aCA/IGltYWdlc0FycmF5LnNsaWNlKDAsMykubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdnYWxsZXJ5LXBpYy1vdGhlcicpO1xuICAgICAgICB9KSA6IGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgb3BlbkdhbGxlcnlUYWJsZXRzKCkge1xuICAgICAgdGhpcy5nYWxsZXJ5Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgbGV0IHNyY0ltZyA9IGUudGFyZ2V0LnNyYztcblxuICAgICAgICBzcmNJbWcgPyB0aGlzLndob2xlR2FsbGVyeVdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJykgOiBudWxsO1xuICAgICAgICBzcmNJbWcgPyB0aGlzLmdhbGxlcnlDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJsb2NrLWltZycpLnNyYyA9IHNyY0ltZyA6IG51bGw7XG5cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlR2FsbGVyeVRhYmxldHMoKSB7XG4gICAgICB0aGlzLmdhbGxlcnlDbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgdGhpcy53aG9sZUdhbGxlcnlXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hhbmdlR2FsbGVyeVBpYyhzeW1ib2wpe1xuICAgICAgbGV0IGN1cnJlbnRJbWcgPSB0aGlzLmdhbGxlcnlDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJsb2NrLWltZycpLnNyYztcbiAgICAgIGxldCBhcnJheUlNRyA9IEFycmF5LmZyb20odGhpcy5nYWxsZXJ5Q29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpbWcnKSk7XG4gICAgICBcbiAgICAgIGxldCByZXMgPSBbXTtcbiAgICAgIGFycmF5SU1HLmZpbmQoIChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICBpdGVtLnNyYyA9PSBjdXJyZW50SW1nID8gcmVzLnB1c2goaW5kZXgpIDogbnVsbDtcbiAgICAgIH0pO1xuXG4gICAgICBpZihhcnJheUlNRy5sZW5ndGggLSAyID09IHJlc1swXSkge1xuICAgICAgICB0aGlzLmdhbGxlcnlDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJsb2NrLWltZycpLnNyYyA9IGFycmF5SU1HWzBdLnNyYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChzeW1ib2wpIHtcbiAgICAgICAgICB0aGlzLmdhbGxlcnlDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJsb2NrLWltZycpLnNyYyA9IGFycmF5SU1HW3Jlc1swXSArIDFdLnNyYztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNbMF0gPT0gMCA/IG51bGwgOiB0aGlzLmdhbGxlcnlDb250YWluZXIucXVlcnlTZWxlY3RvcignLmJsb2NrLWltZycpLnNyYyA9IGFycmF5SU1HW3Jlc1swXSAtIDFdLnNyYztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIG5leHRJbWcoc3ltYm9sKSB7XG4gICAgICB0aGlzLmFycm93TmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIHRoaXMuY2hhbmdlR2FsbGVyeVBpYyhzeW1ib2wpO1xuICAgIH0pXG4gIH07XG5cbiAgcHJldkltZyhzeW1ib2wpIHtcbiAgICB0aGlzLmFycm93UHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICB0aGlzLmNoYW5nZUdhbGxlcnlQaWMoc3ltYm9sKTtcbiAgfSlcbn07XG59XG4gIFxuICBsZXQgR2EgPSBuZXcgR2FsbGVyeSgpO1xuICBcbiAgR2EuYWRkSW1nTW9iaWxlKCk7XG4gIEdhLm9wZW5HYWxsZXJ5VGFibGV0cygpO1xuICBHYS5jbG9zZUdhbGxlcnlUYWJsZXRzKCk7XG4gIEdhLm5leHRJbWcodHJ1ZSk7XG4gIEdhLnByZXZJbWcoZmFsc2UpO1xuXG5cbn0pO1xuXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvZ2FsbGVyeS1zY3JpcHQuanMiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XG5cbiAgICBjbGFzcyBWYWxpZGF0aW9uIHtcblxuICAgICAgICBjaGVja0Zvcm0oKSB7XG4gICAgICAgICAgICBsZXQgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJyk7XG5cbiAgICAgICAgICAgIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGUpID0+IHtcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICAgICAvL0RlbGV0ZSBFcnJvcnMgTGFiZWxzXG4gICAgICAgICAgICAgICAgbGV0IGxibCA9IGZvcm0ucXVlcnlTZWxlY3RvckFsbCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICBsYmwubGVuZ3RoICE9IDAgPyBsYmwuZm9yRWFjaChpdGVtID0+IGl0ZW0ucmVtb3ZlKCkpIDogbnVsbDtcblxuICAgICAgICAgICAgICAgIC8vRXJyb3JzIG1lc3NhZ2VzXG4gICAgICAgICAgICAgICAgbGV0IG1lc3NhZ2VzID0ge1xuICAgICAgICAgICAgICAgICAgICAnbmFtZScgIDogJ9CS0LLQtdC00LjRgtC1INC40LzRjy4g0J3QtSDQvNC10L3QtdC1IDMg0LHRg9C60LIuJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Bob25lJyA6ICfQktCy0LXQtNC40YLQtSDRgtC10LvQtdGE0L7QvS4g0J3QtSDQvNC10L3QtdC1IDcg0YbQuNGE0YAuJyxcbiAgICAgICAgICAgICAgICAgICAgJ2VtYWlsJyA6ICfQktCy0LXQtNC40YLQtSDQstC10YDQvdGL0LkgZW1haWwuIDxicj4g0J/RgNC40LzQtdGAOiBleGFtcGxlQGdtYWlsLmNvbSdcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL0FkZCBFcnJvciBUYWcgdG8gaW5wdXRcbiAgICAgICAgICAgICAgICBsZXQgYWN0aW9uID0gKG5vZGUsIGZpZWxkKSA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgbGV0IGVycm9yVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JUYWcuY2xhc3NOYW1lID0gJ2Zyb20tZXJyb3InO1xuICAgICAgICAgICAgICAgICAgICBlcnJvclRhZy5pbm5lckhUTUwgPSBmaWVsZDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5hZnRlcihlcnJvclRhZyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9DaGVjayBFbWFpbFxuXG4gICAgICAgICAgICAgICAgbGV0IGVtYWlsVmFsaWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByZWcgPSAvXihbQS1aYS16MC05X1xcLVxcLl0pK1xcQChbQS1aYS16MC05X1xcLVxcLl0pK1xcLihbQS1aYS16XXsyLDR9KSQvO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW1haWxBZHIgPSBmb3JtWzJdLnZhbHVlO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmKHJlZy50ZXN0KGVtYWlsQWRyKSA9PSBmYWxzZSAmJiBmb3JtWzJdLnZhbHVlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbihmb3JtWzJdLCBtZXNzYWdlcy5lbWFpbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9GaW5hbCBjaGVjayBhbGwgaW5wdXRzXG5cbiAgICAgICAgICAgICAgICBpZiAoZm9ybVswXS52YWx1ZSAhPSB0cnVlICYmIGZvcm1bMF0udmFsdWUubGVuZ3RoIDwgMykge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb24oZm9ybVswXSwgbWVzc2FnZXMubmFtZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGZvcm1bMV0udmFsdWUgIT0gdHJ1ZSAmJiBmb3JtWzFdLnZhbHVlLmxlbmd0aCA8IDcpIHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uKGZvcm1bMV0sIG1lc3NhZ2VzLnBob25lKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbWFpbFZhbGlkKCk7IFxuXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgLy/QmtC+0LPQtNCwINC60L7Quy3QstC+INC+0YjQuNCx0L7QuiAwINC30LDQv9GD0YHQutCw0LXQvCDQvtGC0L/RgNCw0LLQutGDINGE0L7RgNC80YtcbiAgICAgICAgICAgICAgICBsZXQgc2Vjb25kQ2hlY2sgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xhYmVsJyk7ICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgc2Vjb25kQ2hlY2subGVuZ3RoID09IDAgPyB0aGlzLmNvbGxlY3REYXRhKCkgOiBudWxsO1xuXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29sbGVjdERhdGEoKSB7XG4gICAgICAgICAgICBsZXQgZm9ybVZhbHVlcyA9IGRvY3VtZW50LmZvcm1zW1wiZm9ybVwiXS5lbGVtZW50cztcblxuICAgICAgICAgICAgICAgIGxldCBvYmogPSBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGZvcm1WYWx1ZXNbMF0udmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIHBob25lOiBmb3JtVmFsdWVzWzFdLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICBlbWFpbDogZm9ybVZhbHVlc1syXS52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGZvcm1WYWx1ZXNbM10udmFsdWVcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRoaXMuc2VydmVyUmVxdWVzdChvYmopO1xuICAgXG4gICAgICAgIH1cblxuXG4gICAgICAgIHNlcnZlclJlcXVlc3QoZGF0YSkge1xuICAgICAgICAgICAgbGV0IHNlcnZlckxpbmsgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9cIjtcblxuICAgICAgICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgICAgICAgeGhyLm9wZW4oXCJQT1NUXCIsIHNlcnZlckxpbmssIGZhbHNlKTtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgICAgICAgeGhyLnNlbmQoZGF0YSk7XG5cbiAgICAgICAgICAgIGlmICh4aHIuc3RhdHVzICE9IDIwMCkge1xuICAgICAgICAgICAgICAgIGFsZXJ0KFwi0JTQsNC90L3Ri9C1INC90LUg0L7RgtC/0YDQsNCy0LvQtdC90YsuINCf0L7QstGC0L7RgNC40YLQtSDQv9C+0L/Ri9GC0LrQutGDINC/0L7Qt9C20LUg0LjQu9C4INC/0L7Qt9Cy0L7QvdC40YLQtSDQv9C+INGC0LXQu9C10YTQvtC90YMuXCIpXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Zvcm0nKTtcbiAgICAgICAgICAgICAgICBbLi4uZm9ybV0uZm9yRWFjaChpdGVtID0+IGl0ZW0udmFsdWUgPSAnJyk7XG5cbiAgICAgICAgICAgICAgICBsZXQgc3VjY2Vzc1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWNjZXNzLXNlbnQnKTtcbiAgICAgICAgICAgICAgICBzdWNjZXNzVGFiLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKT0+e3N1Y2Nlc3NUYWIuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7fSwgMzAwMClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGxldCBGb3JtVmFsaWRhdGlvbiA9IG5ldyBWYWxpZGF0aW9uKCk7XG5cbiAgICBGb3JtVmFsaWRhdGlvbi5jaGVja0Zvcm0oKTtcblxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2pzL2NvbXBvbmVudHMvdmFsaWRhdGlvbi5qcyJdLCJzb3VyY2VSb290IjoiIn0=