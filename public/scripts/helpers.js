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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data.json":
/*!*******************!*\
  !*** ./data.json ***!
  \*******************/
/*! exports provided: characters, weapons, default */
/***/ (function(module) {

eval("module.exports = {\"characters\":[{\"name\":\"Alliance Infiltration Unit Infiltrator\"},{\"name\":\"Asari Adept\"},{\"name\":\"Asari Huntress Infiltrator\"},{\"name\":\"Asari Justicar Adept\"},{\"name\":\"Asari Valkyrie Sentinel\"},{\"name\":\"Asari Vanguard\"},{\"name\":\"Awakened Collector Adept\"},{\"name\":\"Batarian Brawler Vanguard\"},{\"name\":\"Batarian Enforcer Sentinel\"},{\"name\":\"Batarian Enforcer Soldier\"},{\"name\":\"Batarian Slasher Adept\"},{\"name\":\"Battlefield 3 Soldier\"},{\"name\":\"Cabal Vanguard\"},{\"name\":\"Drell Adept\"},{\"name\":\"Drell Assassin Infiltrator\"},{\"name\":\"Drell Vanguard\"},{\"name\":\"Geth Engineer\"},{\"name\":\"Geth Hunter Infiltrator\"},{\"name\":\"Geth Juggernaut Soldier\"},{\"name\":\"Geth Trooper Soldier\"},{\"name\":\"Human Adept\"},{\"name\":\"Human Engineer\"},{\"name\":\"Human Infiltrator\"},{\"name\":\"Human Sentinel\"},{\"name\":\"Human Soldier\"},{\"name\":\"Human Vanguard\"},{\"name\":\"Krogan Battlemaster Vanguard\"},{\"name\":\"Krogan Sentinel\"},{\"name\":\"Krogan Shaman Adept\"},{\"name\":\"Krogan Soldier\"},{\"name\":\"Krogan Warlord Sentinel\"},{\"name\":\"N7 Demolisher Engineer\"},{\"name\":\"N7 Destroyer Soldier\"},{\"name\":\"N7 Fury Adept\"},{\"name\":\"N7 Paladin Sentinel\"},{\"name\":\"N7 Shadow Infiltrator\"},{\"name\":\"N7 Slayer Vanguard\"},{\"name\":\"Project Phoenix Adept\"},{\"name\":\"Project Phoenix Vanguard\"},{\"name\":\"Quarian Engineer\"},{\"name\":\"Quarian Infiltrator\"},{\"name\":\"Quarian Male Engineer\"},{\"name\":\"Quarian Male Infiltrator\"},{\"name\":\"Quarian Marksman Soldier\"},{\"name\":\"Salarian Engineer\"},{\"name\":\"Salarian Infiltrator\"},{\"name\":\"Talon Mercenary Engineer\"},{\"name\":\"Turian Ghost Infiltrator\"},{\"name\":\"Turian Havoc Soldier\"},{\"name\":\"Turian Saboteur Engineer\"},{\"name\":\"Turian Sentinel\"},{\"name\":\"Turian Soldier\"},{\"name\":\"Volus Adept\"},{\"name\":\"Volus Engineer\"},{\"name\":\"Volus Mercenary Sentinel\"},{\"name\":\"Volus Protector Vanguard\"},{\"name\":\"Vorcha Hunter Engineer\"},{\"name\":\"Vorcha Sentinel\"},{\"name\":\"Vorcha Soldier\"}],\"weapons\":[{\"type\":\"assaultRifles\",\"members\":[{\"name\":\"M-8 Avenger\"},{\"name\":\"M-15 Vindicator\"},{\"name\":\"M-96 Mattock\"},{\"name\":\"Phaeston\"},{\"name\":\"Geth Pulse Rifle\"},{\"name\":\"Collector Rifle\"},{\"name\":\"M-37 Falcon\"},{\"name\":\"M-76 Revenant\"},{\"name\":\"Striker Assault Rifle\"},{\"name\":\"M-55 Argus\"},{\"name\":\"Adas Anti-Synthetic Rifle\"},{\"name\":\"M-99 Saber\"},{\"name\":\"Cerberus Harrier\"},{\"name\":\"Particle Rifle\"},{\"name\":\"N7 Typhoon\"},{\"name\":\"N7 Valkyrie\"},{\"name\":\"Geth Spitfire\"},{\"name\":\"M-7 Lancer\"}]},{\"type\":\"sniperRifles\",\"members\":[{\"name\":\"M-92 Mantis\"},{\"name\":\"M-13 Raptor\"},{\"name\":\"M-29 Incisor\"},{\"name\":\"M-97 Viper\"},{\"name\":\"M-98 Widow\"},{\"name\":\"Kishock Harpoon Gun\"},{\"name\":\"Krysae Sniper Rifle\"},{\"name\":\"Collector Sniper Rifle\"},{\"name\":\"Black Widow\"},{\"name\":\"Javelin\"},{\"name\":\"M-90 Indra\"},{\"name\":\"N7 Valiant\"}]},{\"type\":\"heavyPistols\",\"members\":[{\"name\":\"M-3 Predator\"},{\"name\":\"M-5 Phalanx\"},{\"name\":\"Arc Pistol\"},{\"name\":\"M-6 Carnifex\"},{\"name\":\"Acolyte\"},{\"name\":\"Executioner Pistol\"},{\"name\":\"M-11 Suppressor\"},{\"name\":\"M-77 Paladin\"},{\"name\":\"Scorpion\"},{\"name\":\"M-358 Talon\"},{\"name\":\"N7 Eagle\"}]},{\"type\":\"shotguns\",\"members\":[{\"name\":\"M-23 Katana\"},{\"name\":\"M-22 Eviscerator\"},{\"name\":\"M-27 Scimitar\"},{\"name\":\"Disciple\"},{\"name\":\"Geth Plasma Shotgun\"},{\"name\":\"Graal Spike Thrower\"},{\"name\":\"M-300 Claymore\"},{\"name\":\"Reegar Carbine\"},{\"name\":\"N7 Piranha\"},{\"name\":\"AT-12 Raider\"},{\"name\":\"M-11 Wraith\"},{\"name\":\"N7 Crusader\"},{\"name\":\"Venom Shotgun\"}]},{\"type\":\"subMachineGuns\",\"members\":[{\"name\":\"M-4 Shuriken\"},{\"name\":\"M-12 Locust\"},{\"name\":\"M-9 Tempest\"},{\"name\":\"M-25 Hornet\"},{\"name\":\"Geth Plasma SMG\"},{\"name\":\"N7 Hurricane\"},{\"name\":\"Collector SMG\"},{\"name\":\"Blood Pack Punisher\"}]}]};\n\n//# sourceURL=webpack:///./data.json?");

/***/ }),

/***/ "./helpers/randomizer.js":
/*!*******************************!*\
  !*** ./helpers/randomizer.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _data = __webpack_require__(/*! ../data.json */ \"./data.json\");\n\nvar _data2 = _interopRequireDefault(_data);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Randomizer = function () {\n    function Randomizer() {\n        _classCallCheck(this, Randomizer);\n    }\n\n    _createClass(Randomizer, null, [{\n        key: \"getRandomClass\",\n        value: function getRandomClass() {\n            return {\n                \"character\": this.getRandomCharacter(),\n                \"weapon\": this.getRandomWeapon()\n            };\n        }\n    }, {\n        key: \"getRandomCharacter\",\n        value: function getRandomCharacter() {\n            return this._getRandomItemFromCollection(_data2.default.characters);\n        }\n    }, {\n        key: \"getRandomWeapon\",\n        value: function getRandomWeapon() {\n            var weaponClass = this._getRandomItemFromCollection(_data2.default.weapons);\n            return this._getRandomItemFromCollection(weaponClass.members);\n        }\n    }, {\n        key: \"_getRandomItemFromCollection\",\n        value: function _getRandomItemFromCollection(collection) {\n            var numberOfItems = collection.length >>> 0;\n            return collection[Math.floor(Math.random() * numberOfItems)];\n        }\n    }]);\n\n    return Randomizer;\n}();\n\nexports.default = Randomizer;\n\n//# sourceURL=webpack:///./helpers/randomizer.js?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _randomizer = __webpack_require__(/*! ./helpers/randomizer */ \"./helpers/randomizer.js\");\n\nvar _randomizer2 = _interopRequireDefault(_randomizer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar Index = function Index() {\n    _classCallCheck(this, Index);\n\n    var randomClass = _randomizer2.default.getRandomClass();\n    console.log(randomClass);\n};\n\nexports.default = Index;\n\n\nnew Index();\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

/******/ });