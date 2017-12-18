webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<app-headline></app-headline>\n<app-about></app-about>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'My first application';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_shared_navbar_navbar_component__ = __webpack_require__("../../../../../src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_shared_footer_footer_component__ = __webpack_require__("../../../../../src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_headline_headline_component__ = __webpack_require__("../../../../../src/app/components/headline/headline.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nicky_lenaers_ngx_scroll_to__ = __webpack_require__("../../../../@nicky-lenaers/ngx-scroll-to/@nicky-lenaers/ngx-scroll-to.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_shared_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_4__components_shared_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_headline_headline_component__["a" /* HeadlineComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_about_about_component__["a" /* AboutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__nicky_lenaers_ngx_scroll_to__["a" /* ScrollToModule */].forRoot()
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/components/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"about\" class=\"animated fadeInDown\">\n  <div class=\"jumbotron\">\n    <h3>About me</h3>\n    <h2><strong>Let me introduce myself.</strong></h2>\n  </div>\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-8 col-sm-offset-2\">\n        <div class=\"media\">\n          <div class=\"media-left\">\n            <img class=\"media-object media-middle img-circle\" src=\"../assets/img/link-picture-profile.jpg\" alt=\"Picture Profile\">\n          </div>\n          <div class=\"media-body\">\n            <div class=\"container\">\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\n                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt\n                in culpa qui officia deserunt mollit anim id est laborum.\n              </p>\n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut\n                labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit\n                esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt\n                in culpa qui officia deserunt mollit anim id est laborum.\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-sm-6\">\n            <h4><strong>PROFILE</strong></h4>\n            <p>\n              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris\n              nisi ut aliquip ex ea commodo consequat.\n            </p>\n            <br>\n            <ul class=\"list-unstyled\">\n              <li>\n                <label>Full Name:</label><br>\n                <span>Miguel Angel Marin Encina</span>\n              </li>\n              <li>\n                <label>Birth Day:</label><br>\n                <span>January 29th</span>\n              </li>\n              <li>\n                <label>Job:</label><br>\n                <span>SysAdmin, Frontend Developer, DBA, Python Developer, Java Developer, Angular Ninja</span>\n              </li>\n              <li>\n                <label>Skype:</label><br>\n                <span>xxyagami2xx</span>\n              </li>\n              <li>\n                <label>Email:</label><br>\n                <span>marin.miguelangel96@gmail.com</span>\n              </li>\n            </ul>\n          </div>\n          <div class=\"col-sm-6\">\n            <h4><strong>SKILLS</strong></h4>\n            <p>Duis aute irure dolor in reprehenderit\n              in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur\n              sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt\n              mollit anim id est laborum.</p>\n          </div>\n          <br>\n          <div class=\"progress\">\n            <div class=\"progress-bar progress-bar-striped active\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%;\">\n              60%\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/components/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/about/about.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/headline/headline.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#headline {\n  background-image: url(" + __webpack_require__("../../../../../src/assets/img/futuristic-city.jpg") + ");\n  background-repeat: no-repeat;\n  background-position: bottom;\n  background-size: cover;\n  background-attachment: fixed;\n}\n\n@media (max-height: 480px) {\n  #headline {\n    height: 300px;\n  }\n  #headline .jumbotron {\n    padding-top: 50px;\n  }\n}\n\n@media (min-height: 480px) and (max-height: 720px) {\n  #headline {\n    height: 480px;\n  }\n  #headline .jumbotron {\n    padding-top: 100px;\n  }\n}\n\n@media (min-height: 720px) and (max-height: 1080px) {\n  #headline {\n    height: 720px;\n  }\n  #headline .jumbotron {\n    padding-top: 200px;\n  }\n}\n\n@media (min-height: 1080px) {\n  #headline {\n    height: 1080px;\n  }\n  #headline .jumbotron {\n    padding-top: 300px;\n  }\n}\n\n#headline .jumbotron {\n  background: transparent;\n  text-align: center;\n  color: white;\n}\n\n#headline hr {\n  color: white;\n  border-width: 2px;\n  border-color: white;\n  width: 50%;\n}\n\n@media (max-width: 575px) {\n  #headline .employment_id {\n    font-size: .70em;\n  }\n}\n\n@media (min-width: 575px) and (max-width: 767px) {\n  #headline .employment_id {\n    font-size: .80em;\n  }\n}\n\n@media (min-width: 767px) and (max-width: 991px) {\n  #headline .employment_id {\n    font-size: .90em;\n  }\n}\n\n@media (min-width: 991px) and (max-width: 1199px) {\n  #headline .employment_id {\n    font-size: 1em;\n  }\n}\n\n#headline .employment_id {\n  overflow: hidden;\n  margin: 0 auto;\n  padding: 0;\n  letter-spacing: .10em;\n}\n\n#headline .jumbotron a {\n  border-radius: 50%;\n  width: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/headline/headline.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"headline\">\n  <div class=\"container-fluid mt-5\">\n    <div class=\"jumbotron\">\n      <p>Hi, I am</p>\n      <h1><strong>ANGEL MARIN</strong></h1>\n      <hr class=\"d-none d-md-block \">\n      <h2>\n        <p class=\"employment_id\" [ngClass]=\"{'animated fadeInDown': employment_in }\">\n          I am a <strong>{{employment_display}}</strong>\n        </p>\n      </h2>\n      <a href=\"https://www.facebook.com/angel.yagami.16\" target=\"_blank\" class=\"btn btn-outline-secondary d-none d-md-inline-block\">\n        <i class=\"fa fa-facebook\" aria-hidden=\"true\"></i>\n      </a>\n      <a href=\"#\" target=\"_blank\" class=\"btn btn-outline-secondary d-none d-md-inline-block\">\n        <i class=\"fa fa-twitter\" aria-hidden=\"true\"></i>\n      </a>\n      <a href=\"mailto:marin.miguelangel96@gmail.com\" target=\"_blank\" class=\"btn btn-outline-secondary\">\n        <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n      </a>\n      <a href=\"skype:marin.miguelangel96@outlook.com?chat\" class=\"btn btn-outline-secondary\">\n        <i class=\"fa fa-skype\" aria-hidden=\"true\"></i>\n      </a>\n      <a href=\"https://www.linkedin.com/in/miguel-angel-marin-encina-aa9a8a130/\" target=\"_blank\" class=\"btn btn-outline-secondary\">\n        <i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i>\n      </a>\n      <a href=\"https://www.youtube.com/channel/UCFK1jlKyZ_583dAnzfEHE-g\" target=\"_blank\" class=\"btn btn-outline-secondary d-none d-md-inline-block\">\n        <i class=\"fa fa-youtube-play\" aria-hidden=\"true\"></i>\n      </a>\n      <a href=\"https://github.com/AngelMarinWolf\" target=\"_blank\" class=\"btn btn-outline-secondary d-none d-md-inline-block\">\n        <i class=\"fa fa-github-alt\" aria-hidden=\"true\"></i>\n      </a>\n    </div>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/headline/headline.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadlineComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeadlineComponent = (function () {
    function HeadlineComponent() {
        var _this = this;
        this.employment_in = true;
        this.employment = ['SysAdmin', 'DevOps', 'AWS Engineer'];
        this.employment_display = "SysAdmin";
        this.num = 0;
        setInterval(function () {
            _this.employment_display = _this.employment[_this.num.valueOf()];
            _this.employment_in = true;
            setTimeout(function () {
                _this.employment_in = false;
            }, 1000);
            if (_this.num == _this.employment.length - 1) {
                _this.num = -1;
            }
            _this.num += 1;
        }, 2000);
    }
    HeadlineComponent.prototype.ngOnInit = function () {
    };
    HeadlineComponent.prototype.ngAfterViewInit = function () {
    };
    HeadlineComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-headline',
            template: __webpack_require__("../../../../../src/app/components/headline/headline.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/headline/headline.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], HeadlineComponent);
    return HeadlineComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".footer {\n  color: white;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"footer\">\n  <footer class=\"fixed-bottom footer bg-dark\">\n    <div class=\"container\">\n      <p align=\"center\" class=\"mb-0\">\n        Angel Marin | <strong>System Administrator</strong>\n      </p>\n    </div>\n  </footer>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/components/shared/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/footer/footer.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/shared/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "nav {\n  background-color: #222;\n  color: white;\n}\n\n.btn-outline-light:hover,\n.btn-outline-light:focus {\n  color: black;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<section id=\"navbar\">\n  <nav class=\"navbar fixed-top navbar-expand-lg navbar-dark\">\n    <a class=\"navbar-brand\" [ngx-scroll-to]=\"'headline'\">\n      <img src=\"./assets/img/wolf.png\" alt=\"Wolf Logo\" height=\"45px\" class=\"mr-2\">\n      <strong>Angel Marin</strong>\n    </a>\n    <div class=\"collapse navbar-collapse mt-0 mb-0\" id=\"navbar-sections\">\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item\" *ngFor=\"let section of sections\">\n          <a [ngx-scroll-to]=\"section.value\" class=\"nav-link pr-3 pl-3\">\n            {{ change_lenguage ? section.key_en : section.key_es }}\n          </a>\n        </li>\n      </ul>\n      <div class=\"btn-group mt-0 mb-2 mb-lg-0 ml-3 ml-lg-1\" data-toggle=\"buttons\">\n        <a class=\"btn btn-outline-light pl-3 pr-3 pl-lg-2 pr-lg-2\" (click)=\"change_lenguage = !change_lenguage\">\n          <span>{{ change_lenguage ? 'ES' : 'EN'}}</span>\n        </a>\n      </div>\n    </div>\n    <button class=\"navbar-toggler ml-3\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar-sections\" aria-controls=\"navbar-sections\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n  </nav>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/components/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
        this.sections = [
            { key_en: "About", key_es: "Acerca de", value: "about" },
            { key_en: "Expirience", key_es: "Experiencia", value: "expirience" },
            { key_en: "Education", key_es: "Educación", value: "education" },
            { key_en: "Projects", key_es: "Proyectos", value: "projects" },
            { key_en: "Blog", key_es: "Blog", value: "blog" },
            { key_en: "Contact", key_es: "Contacto", value: "contact" }
        ];
        this.change_lenguage = true;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/components/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/shared/navbar/navbar.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_2" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/assets/img/futuristic-city.jpg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "futuristic-city.aa4609d4b13d8223cce4.jpg";

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map