webpackJsonp([10],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AccountPage');
    };
    AccountPage.prototype.goToTabsPage3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    AccountPage.prototype.goToTabsPage8 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */]);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/account/account.html"*/'<!--\n  Generated template for the AccountPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <div class="logo-tobbar">\n      <img src="../../assets/imgs/logo-home.png">\n</div>\n\n      <ion-buttons class="search-direct" end>\n          <button ion-button icon-only (click)="goToTabsPage3()">\n    \n            <ion-icon name="search"></ion-icon>\n    \n          </button>\n        </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-list>\n        \n      <ion-item>\n          <ion-icon name="person" item-start></ion-icon>\n\n        <span item-start>Acessa sua conta!</span>\n        <button ion-button icon-start clear item-end (click)="goToTabsPage8()">\n          Entrar\n        </button>\n      </ion-item>\n        \n      \n        <ion-item>\n            <ion-icon name="ios-add" item-start></ion-icon>\n\n          <span item-start>Não possui conta?</span>\n          <button ion-button icon-start clear item-end (click)="goToTabsPage8()">\n            Registrar\n          </button>\n        </ion-item>\n      \n        <ion-item>\n          <ion-icon name="ios-book" item-start></ion-icon>\n            Histórico\n        </ion-item>\n      \n          <ion-item>\n            <ion-icon name="leaf" item-start></ion-icon>\n              Herbology\n            <ion-icon name="rose" item-end></ion-icon>\n          </ion-item>\n          \n        </ion-list>\n\n\n</ion-content>'/*ion-inline-end:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/account/account.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 102:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DepartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the DepartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DepartPage = /** @class */ (function () {
    function DepartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DepartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DepartPage');
    };
    DepartPage.prototype.goToTabsPage3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    DepartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-depart',template:/*ion-inline-start:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/depart/depart.html"*/'<!--\n  Generated template for the DepartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <div class="logo-tobbar">\n            <img src="../../assets/imgs/logo-home.png">\n      </div>\n  \n        <ion-buttons class="search-direct" end>\n            <button ion-button icon-only (click)="goToTabsPage3()">\n      \n              <ion-icon name="search"></ion-icon>\n      \n            </button>\n          </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n\n    <ion-list>\n            <ion-item>\n                        <h1>Categorias</h1>\n                    \n                </ion-item>\n        <ion-item>\n          <ion-avatar item-start>\n              <img src="../../assets/imgs/uauburger.png">\n\n          </ion-avatar>\n          <h2>Moda Feminina</h2>\n        \n        </ion-item>\n        <ion-item>\n            <ion-avatar item-start>\n                <img src="../../assets/imgs/uauburger.png">\n\n            </ion-avatar>\n            <h2>Moda Masculina</h2>\n           \n          </ion-item>\n          <ion-item>\n              <ion-avatar item-start>\n                  <img src="../../assets/imgs/uauburger.png">\n\n              </ion-avatar>\n              <h2>Mamãe e Bebê</h2>\n         \n            </ion-item>\n            <ion-item>\n                <ion-avatar item-start>\n                    <img src="../../assets/imgs/uauburger.png">\n\n                </ion-avatar>\n                <h2>Bolsas e Sapatos</h2>\n            \n              </ion-item>\n              <ion-item>\n                  <ion-avatar item-start>\n                      <img src="../../assets/imgs/uauburger.png">\n\n                  </ion-avatar>\n                  <h2>Esporte e Lazer</h2>\n              \n                </ion-item>\n                <ion-item>\n                    <ion-avatar item-start>\n                        <img src="../../assets/imgs/uauburger.png">\n\n                    </ion-avatar>\n                    <h2>Jóias e Relógios</h2>\n                \n                  </ion-item>\n                  <ion-item>\n                        <ion-avatar item-start>\n                            <img src="../../assets/imgs/uauburger.png">\n    \n                        </ion-avatar>\n                        <h2>Telefones e Acessórios</h2>\n                    \n                      </ion-item>\n                      <ion-item>\n                            <ion-avatar item-start>\n                                <img src="../../assets/imgs/uauburger.png">\n        \n                            </ion-avatar>\n                            <h2>Eletrônicos</h2>\n                        \n                          </ion-item>\n                          <ion-item>\n                                <ion-avatar item-start>\n                                    <img src="../../assets/imgs/uauburger.png">\n            \n                                </ion-avatar>\n                                <h2>Casa e Jardim</h2>\n                            \n                              </ion-item>\n                              <ion-item>\n                                    <ion-avatar item-start>\n                                        <img src="../../assets/imgs/uauburger.png">\n                \n                                    </ion-avatar>\n                                    <h2>Computadores e Redes</h2>\n                                \n                                  </ion-item>\n                                  <ion-item>\n                                        <ion-avatar item-start>\n                                            <img src="../../assets/imgs/uauburger.png">\n                    \n                                        </ion-avatar>\n                                        <h2>Beleza e Saúde</h2>\n                                    \n                                      </ion-item>\n                                      <ion-item>\n                                            <ion-avatar item-start>\n                                                <img src="../../assets/imgs/uauburger.png">\n                        \n                                            </ion-avatar>\n                                            <h2>Automóveis e Motocicletas</h2>\n                                        \n                                          </ion-item>\n                                          <ion-item>\n                                                <ion-avatar item-start>\n                                                    <img src="../../assets/imgs/uauburger.png">\n                            \n                                                </ion-avatar>\n                                                <h2>Ferramentas e Equipamentos</h2>\n                                            \n                                              </ion-item>\n      </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/depart/depart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DepartPage);
    return DepartPage;
}());

//# sourceMappingURL=depart.js.map

/***/ }),

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PromoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PromoPage = /** @class */ (function () {
    function PromoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PromoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PromoPage');
    };
    PromoPage.prototype.goToTabsPage3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    PromoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-promo',template:/*ion-inline-start:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/promo/promo.html"*/'<!--\n  Generated template for the PromoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n        <div class="logo-tobbar">\n            <img src="../../assets/imgs/logo-home.png">\n      </div>\n  \n        <ion-buttons class="search-direct" end>\n            <button ion-button icon-only (click)="goToTabsPage3()">\n      \n              <ion-icon name="search"></ion-icon>\n      \n            </button>\n          </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n \n\n        <div padding>\n                <ion-segment  [(ngModel)]="promo">\n                  <ion-segment-button value="ofertas">\n                <p class="segment-promotion">Ofertas</p>\n                 </ion-segment-button>\n                  <ion-segment-button value="vendidos">\n                    <p class="segment-promotion">+ Vendidos</p>\n                  </ion-segment-button>\n                  <ion-segment-button value="patrocinados">\n                        <p class="segment-promotion">Patrocinados</p>\n                      </ion-segment-button>\n                </ion-segment>\n              </div>\n              \n              <div [ngSwitch]="promo">\n                <ion-list *ngSwitchCase="\'ofertas\'">\n                  <ion-item>\n                    <ion-thumbnail item-start>\n                        <img src="../../assets/imgs/uauburger.png">\n                      </ion-thumbnail>\n                    <h2>Ruby</h2>\n                  </ion-item>\n                  \n\n                </ion-list>\n              \n                <ion-list *ngSwitchCase="\'vendidos\'">\n                  <ion-item>\n                    <ion-thumbnail item-start>\n                        <img src="../../assets/imgs/uauburger.png">\n                      </ion-thumbnail>\n                    <h2>Luna</h2>\n                  </ion-item>\n\n                </ion-list>\n                <ion-list *ngSwitchCase="\'patrocinados\'">\n                        <ion-item>\n                          <ion-thumbnail item-start>\n                            <img src="../../assets/imgs/uauburger.png">\n                          </ion-thumbnail>\n                          <h2>Luna</h2>\n                        </ion-item>\n\n                      </ion-list>\n              </div>\n\n</ion-content>\n\n\n\n\n'/*ion-inline-end:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/promo/promo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], PromoPage);
    return PromoPage;
}());

//# sourceMappingURL=promo.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CartPage = /** @class */ (function () {
    function CartPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CartPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CartPage');
    };
    CartPage.prototype.goToTabsPage3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/cart/cart.html"*/'<!--\n  Generated template for the CartPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n    <ion-navbar>\n      <div class="logo-tobbar">\n        <img src="../../assets/imgs/logo-home.png">\n  </div>\n  \n        <ion-buttons class="search-direct" end>\n            <button ion-button icon-only (click)="goToTabsPage3()">\n      \n              <ion-icon name="search"></ion-icon>\n      \n            </button>\n          </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n        <img class="img-car" src="../../assets/imgs/carrinho_vazio.png">\n        \n\n</ion-content>\n'/*ion-inline-end:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/register/register.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n   \n  \n      <ion-buttons class="search-direct" end>\n       \n      </ion-buttons>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n\n    <ion-list inset>\n\n        <ion-item>\n          <ion-label floating>Nome completo</ion-label>\n          <ion-input clearInput type="text" #username></ion-input>\n        </ion-item>\n\n      \n        <ion-item>\n          <ion-label floating>Senha</ion-label>\n          <ion-input  clearInput type="password" #password></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input  clearInput type="e-mail" #email></ion-input>\n          </ion-item>\n\n              <ion-item>\n                <ion-label>Sexo</ion-label>\n                <ion-select [(ngModel)]="toppings" multiple="false">\n                  <ion-option value="Masculino" selected="true">Masculino</ion-option>\n                  <ion-option value="Feminino">Feminino</ion-option>\n                \n                </ion-select>\n              </ion-item>\n      \n              <ion-item>\n                  <ion-label floating>CPF</ion-label>\n                  <ion-input  clearInput type="number" #cpf></ion-input>\n                </ion-item>\n<div class="date-nasciment">\n                <p >Data de nascimento</p>\n              </div>\n                <ion-item>\n                    <ion-input type="date" #date></ion-input>\n                  </ion-item>\n\n                  <ion-item>\n                      <ion-label floating>CEP</ion-label>\n                      <ion-input  clearInput type="number" #date></ion-input>\n                    </ion-item>\n              \n                  <ion-item>\n                      <ion-label floating>Telefone</ion-label>\n                      <ion-input  clearInput type="number" #date></ion-input>\n                    </ion-item>\n\n                        <ion-item>\n                            <ion-label>Ofertas por e-mail</ion-label>\n                            <ion-checkbox [(ngModel)]="Ativar"></ion-checkbox>\n\n                          </ion-item>\n\n      </ion-list>\n<br>\n <!-- Verificar esse botao para fazer a ação de alertar -->\n <div>\n <button ion-button block outline (click)="registerUser()">REGISTRAR</button>\n</div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 115:
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
webpackEmptyAsyncContext.id = 115;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/account/account.module": [
		278,
		9
	],
	"../pages/cart/cart.module": [
		279,
		8
	],
	"../pages/depart/depart.module": [
		280,
		7
	],
	"../pages/favorite/favorite.module": [
		281,
		6
	],
	"../pages/login/login.module": [
		282,
		5
	],
	"../pages/logo/logo.module": [
		283,
		4
	],
	"../pages/promo/promo.module": [
		284,
		3
	],
	"../pages/register/register.module": [
		285,
		2
	],
	"../pages/search/search.module": [
		286,
		1
	],
	"../pages/tabs/tabs.module": [
		287,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_search__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, viewCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.splash = true;
        this.secondPage = __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */];
        this.HomePage = true;
        this.SearchPage = true;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () { return _this.splash = false; }, 4000);
    };
    HomePage.prototype.goToTabsPage3 = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_search__["a" /* SearchPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/home/home.html"*/'<div id="custom-overlay" ng-hide="$root.hideTabs" [style.display]="splash ? \'flex\': \'none\'">\n  <div class="flb">\n    <div class="Aligner-item Aligner-item--top"></div>\n    <img src="../../assets/imgs/logo2.png">\n    <div class="Aligner-item Aligner-item--bottom"></div>\n  </div>\n</div>\n\n\n<ion-header>\n\n  <ion-navbar>\n  <div class="logo-tobbar">\n      <img src="../../assets/imgs/logo-home.png">\n</div>\n\n    <ion-buttons class="search-direct" end>\n      <button ion-button icon-only (click)="goToTabsPage3()">\n\n        <ion-icon name="search"></ion-icon>\n\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n\n\n<ion-content padding>\n\n\n\n\n  <ion-slides class="slides-home-primary" autoplay="5000" loop="true" speed="500" pager="true">\n    <ion-slide>\n      <img src="../../assets/imgs/promo.jpg">\n    </ion-slide>\n    <ion-slide>\n      <img src="../../assets/imgs/promo.jpg">\n\n    </ion-slide>\n    <ion-slide>\n      <img src="../../assets/imgs/promo.jpg">\n\n    </ion-slide>\n  </ion-slides>\n\n  \n\n<ion-item>\n    <div class="h3-home">\n        <h1>As melhores ofertas</h1>\n      </div>\n</ion-item>\n\n\n\n  <ion-slides class="slider-shop" autoplay="5000" loop="true" speed="500" pager="true">\n\n\n    <ion-slide >\n<div>\n      <ion-card>\n        <img src="../../assets/imgs/uauburger.png">\n        <ion-card-content>\n          <ion-card-title>\n            Nine Inch Nails Live\n          </ion-card-title>\n          <p>\n            The most popular industrial group ever, and largely\n            responsible for bringing the music to a mass audience.\n          </p>\n        </ion-card-content>\n      </ion-card>\n    </div>\n  </ion-slide>\n  </ion-slides>\n\n\n\n  <ion-slides autoplay="5000" loop="true" speed="500" pager="true">\n\n      <ion-slide>\n          <div>\n              <ion-item>\n                  <ion-thumbnail item-start>\n                      <img src="../../assets/imgs/uauburger.png">\n                    </ion-thumbnail>\n                  <h2>My Neighbor Totoro</h2>\n                  <p>Hayao Miyazaki • 1988</p>\n                  <button ion-button clear item-end>View</button>\n                </ion-item>\n                <ion-item>\n                    <ion-thumbnail item-start>\n                        <img src="../../assets/imgs/uauburger.png">\n                      </ion-thumbnail>\n                    <h2>My Neighbor Totoro</h2>\n                    <p>Hayao Miyazaki • 1988</p>\n                    <button ion-button clear item-end>View</button>\n                  </ion-item>\n                 \n              </div>\n            </ion-slide>\n            <ion-slide>\n                <div>\n                    <ion-item>\n                        <ion-thumbnail item-start>\n                            <img src="../../assets/imgs/uauburger.png">\n                          </ion-thumbnail>\n                        <h2>My Neighbor Totoro</h2>\n                        <p>Hayao Miyazaki • 1988</p>\n                        <button ion-button clear item-end>View</button>\n                      </ion-item>\n                      <ion-item>\n                          <ion-thumbnail item-start>\n                              <img src="../../assets/imgs/uauburger.png">\n                            </ion-thumbnail>\n                          <h2>My Neighbor Totoro</h2>\n                          <p>Hayao Miyazaki • 1988</p>\n                          <button ion-button clear item-end>View</button>\n                        </ion-item>\n                       \n                    </div>\n                  </ion-slide>\n    </ion-slides>\n\n    <ion-item>\n        <div class="h3-home">\n            <h1>Os mais vendidos</h1>\n          </div>\n    </ion-item>\n\n    <ion-slides class="slider-shop" autoplay="5000" loop="true" speed="500" pager="true">\n\n\n        <ion-slide >\n    <div>\n          <ion-card>\n            <img src="../../assets/imgs/uauburger.png">\n            <ion-card-content>\n              <ion-card-title>\n                Nine Inch Nails Live\n              </ion-card-title>\n              <p>\n                The most popular industrial group ever, and largely\n                responsible for bringing the music to a mass audience.\n              </p>\n            </ion-card-content>\n          </ion-card>\n        </div>\n      </ion-slide>\n      </ion-slides>\n    \n    \n    \n      <ion-slides autoplay="5000" loop="true" speed="500" pager="true">\n    \n          <ion-slide>\n              <div>\n                  <ion-item>\n                      <ion-thumbnail item-start>\n                          <img src="../../assets/imgs/uauburger.png">\n                        </ion-thumbnail>\n                      <h2>My Neighbor Totoro</h2>\n                      <p>Hayao Miyazaki • 1988</p>\n                      <button ion-button clear item-end>View</button>\n                    </ion-item>\n                    <ion-item>\n                        <ion-thumbnail item-start>\n                            <img src="../../assets/imgs/uauburger.png">\n                          </ion-thumbnail>\n                        <h2>My Neighbor Totoro</h2>\n                        <p>Hayao Miyazaki • 1988</p>\n                        <button ion-button clear item-end>View</button>\n                      </ion-item>\n                     \n                  </div>\n                </ion-slide>\n                <ion-slide>\n                    <div>\n                        <ion-item>\n                            <ion-thumbnail item-start>\n                                <img src="../../assets/imgs/uauburger.png">\n                              </ion-thumbnail>\n                            <h2>My Neighbor Totoro</h2>\n                            <p>Hayao Miyazaki • 1988</p>\n                            <button ion-button clear item-end>View</button>\n                          </ion-item>\n                          <ion-item>\n                              <ion-thumbnail item-start>\n                                  <img src="../../assets/imgs/uauburger.png">\n                                </ion-thumbnail>\n                              <h2>My Neighbor Totoro</h2>\n                              <p>Hayao Miyazaki • 1988</p>\n                              <button ion-button clear item-end>View</button>\n                            </ion-item>\n                           \n                        </div>\n                      </ion-slide>\n        </ion-slides>\n    \n        <ion-item>\n            <div class="h3-home">\n                <h1>Patrocinados</h1>\n              </div>\n        </ion-item>\n    \n        <ion-slides class="slider-shop" autoplay="5000" loop="true" speed="500" pager="true">\n    \n    \n            <ion-slide >\n        <div>\n              <ion-card>\n                <img src="../../assets/imgs/uauburger.png">\n                <ion-card-content>\n                  <ion-card-title>\n                    Nine Inch Nails Live\n                  </ion-card-title>\n                  <p>\n                    The most popular industrial group ever, and largely\n                    responsible for bringing the music to a mass audience.\n                  </p>\n                </ion-card-content>\n              </ion-card>\n            </div>\n          </ion-slide>\n          </ion-slides>\n        \n        \n        \n          <ion-slides autoplay="5000" loop="true" speed="500" pager="true">\n        \n              <ion-slide>\n                  <div>\n                      <ion-item>\n                          <ion-thumbnail item-start>\n                              <img src="../../assets/imgs/uauburger.png">\n                            </ion-thumbnail>\n                          <h2>My Neighbor Totoro</h2>\n                          <p>Hayao Miyazaki • 1988</p>\n                          <button ion-button clear item-end>View</button>\n                        </ion-item>\n                        <ion-item>\n                            <ion-thumbnail item-start>\n                                <img src="../../assets/imgs/uauburger.png">\n                              </ion-thumbnail>\n                            <h2>My Neighbor Totoro</h2>\n                            <p>Hayao Miyazaki • 1988</p>\n                            <button ion-button clear item-end>View</button>\n                          </ion-item>\n                         \n                      </div>\n                    </ion-slide>\n                    <ion-slide>\n                        <div>\n                            <ion-item>\n                                <ion-thumbnail item-start>\n                                    <img src="../../assets/imgs/uauburger.png">\n                                  </ion-thumbnail>\n                                <h2>My Neighbor Totoro</h2>\n                                <p>Hayao Miyazaki • 1988</p>\n                                <button ion-button clear item-end>View</button>\n                              </ion-item>\n                              <ion-item>\n                                  <ion-thumbnail item-start>\n                                      <img src="../../assets/imgs/uauburger.png">\n                                    </ion-thumbnail>\n                                  <h2>My Neighbor Totoro</h2>\n                                  <p>Hayao Miyazaki • 1988</p>\n                                  <button ion-button clear item-end>View</button>\n                                </ion-item>\n                               \n                            </div>\n                          </ion-slide>\n            </ion-slides>\n    \n\n</ion-content>'/*ion-inline-end:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FavoritePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the FavoritePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var FavoritePage = /** @class */ (function () {
    function FavoritePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    FavoritePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad FavoritePage');
    };
    FavoritePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-favorite',template:/*ion-inline-start:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/favorite/favorite.html"*/'<!--\n  Generated template for the FavoritePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n  \n    <div class="logo-tobbar">\n      <img src="../../assets/imgs/logo-home.png">\n</div>\n    <ion-buttons end>\n      <button ion-button icon-only>\n        <ion-icon name="search"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/favorite/favorite.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], FavoritePage);
    return FavoritePage;
}());

//# sourceMappingURL=favorite.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n\n    <ion-list inset>\n\n        <ion-item>\n          <ion-label floating>Username</ion-label>\n          <ion-input type="text" #username></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label floating>Password</ion-label>\n          <ion-input type="password" #password></ion-input>\n        </ion-item>\n      \n      </ion-list>\n<br>\n <!-- Verificar esse botao para fazer a ação de alertar -->\n <div class="ion-full">\n  <button ion-button block outline (click)="signIn()">LOG IN</button>\n </div>\n<br>\n<br>\n<div class="ion-full">\n <button ion-button block outline>Google</button>\n <button ion-button block outline>Facebook</button>\n</div>\n\n<br>\n <div class="ion-full">\n  <button ion-button small outline (click)="goToTabsPage7()">Criar uma conta</button>\n  <button (click)="goToTabsPage6()" ion-button small outline>Termos de uso</button>\n </div>\n\n</ion-content>\n'/*ion-inline-end:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LogoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the LogoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LogoPage = /** @class */ (function () {
    function LogoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    LogoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LogoPage');
    };
    LogoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-logo',template:/*ion-inline-start:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/logo/logo.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n      <div class="logo-tobbar">\n          <img src="../../assets/imgs/logo-home.png">\n    </div>\n    <ion-title>logo</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/logo/logo.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], LogoPage);
    return LogoPage;
}());

//# sourceMappingURL=logo.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(227);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_register_register__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_logo_logo__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_favorite_favorite__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_depart_depart__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_account_account__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_promo_promo__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_search_search__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_cart_cart__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_logo_logo__["a" /* LogoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_favorite_favorite__["a" /* FavoritePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_depart_depart__["a" /* DepartPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_promo_promo__["a" /* PromoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cart_cart__["a" /* CartPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {
                    mode: 'ios'
                }, {
                    links: [
                        { loadChildren: '../pages/account/account.module#AccountPageModule', name: 'AccountPage', segment: 'account', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cart/cart.module#CartPageModule', name: 'CartPage', segment: 'cart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/depart/depart.module#DepartPageModule', name: 'DepartPage', segment: 'depart', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/favorite/favorite.module#FavoritePageModule', name: 'FavoritePage', segment: 'favorite', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/logo/logo.module#LogoPageModule', name: 'LogoPage', segment: 'logo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/promo/promo.module#PromoPageModule', name: 'PromoPage', segment: 'promo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/search/search.module#SearchPageModule', name: 'SearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs/tabs.module#TabsPageModule', name: 'TabsPage', segment: 'tabs', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_logo_logo__["a" /* LogoPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_favorite_favorite__["a" /* FavoritePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_depart_depart__["a" /* DepartPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_promo_promo__["a" /* PromoPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_search_search__["a" /* SearchPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_cart_cart__["a" /* CartPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/matheus/Documentos/Projetos/criatividads-app/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/matheus/Documentos/Projetos/criatividads-app/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(41);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SearchPage = /** @class */ (function () {
    function SearchPage(navCtrl, navParams, viewCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
        this.HomePage = true;
        this.SearchPage = true;
        if (this.SearchPage == true && this.HomePage == false) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
        }
    }
    SearchPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SearchPage');
    };
    SearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-search',template:/*ion-inline-start:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/search/search.html"*/'<!--\n  Generated template for the BuscarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    \n    <ion-title></ion-title>\n  </ion-navbar>\n\n  <ion-searchbar class="searchbar-class"></ion-searchbar>\n\n\n</ion-header>\n\n\n<ion-content padding>\n\n  \n    <ion-list>\n     <h5> Historico</h5>\n     <ion-item>\n        <ion-avatar item-start>\n            <img src="../../assets/imgs/uauburger.png">\n\n        </ion-avatar>\n        <h2>Finn</h2>\n        <h3>Don\'t Know What To Do!</h3>\n        <p>I\'ve had a pretty messed up day. If we just...</p>\n      </ion-item>\n      </ion-list>\n\n     \n\n</ion-content>\n'/*ion-inline-end:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/search/search.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
    ], SearchPage);
    return SearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__depart_depart__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__account_account__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__promo_promo__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cart_cart__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the TabsPage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabsPage = /** @class */ (function () {
    function TabsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__depart_depart__["a" /* DepartPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_5__promo_promo__["a" /* PromoPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_6__cart_cart__["a" /* CartPage */];
        this.tab5Root = __WEBPACK_IMPORTED_MODULE_4__account_account__["a" /* AccountPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-tabs',template:/*ion-inline-start:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/tabs/tabs.html"*/'\n<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="Início" tabIcon="home"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="Categorias" tabIcon="ios-apps"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="Promoções" tabIcon="ios-basket"></ion-tab>\n    <ion-tab [root]="tab4Root" tabTitle="Carrinho" tabIcon="ios-cart"></ion-tab>\n    <ion-tab [root]="tab5Root" tabTitle="Conta" tabIcon="ios-person"></ion-tab>\n    \n  </ion-tabs>\n  '/*ion-inline-end:"/home/matheus/Documentos/Projetos/criatividads-app/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ })

},[204]);
//# sourceMappingURL=main.js.map