webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <router-outlet></router-outlet>\n    <app-copyright></app-copyright>\n</div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ".container {\n  text-align: center; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routing_module__ = __webpack_require__("./src/app/routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__more_more_component__ = __webpack_require__("./src/app/more/more.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__copyright_copyright_component__ = __webpack_require__("./src/app/copyright/copyright.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__knockout_knockout_component__ = __webpack_require__("./src/app/knockout/knockout.component.ts");
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
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__more_more_component__["a" /* MoreComponent */],
                __WEBPACK_IMPORTED_MODULE_6__copyright_copyright_component__["a" /* CopyrightComponent */],
                __WEBPACK_IMPORTED_MODULE_7__knockout_knockout_component__["a" /* KnockoutComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__routing_module__["a" /* RoutingModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/copyright/copyright.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"copyright\">\r\n    Copyright &copy; 2018. All rights reserved\r\n</div>"

/***/ }),

/***/ "./src/app/copyright/copyright.component.scss":
/***/ (function(module, exports) {

module.exports = ".copyright {\n  text-align: center;\n  font-size: 0.8em;\n  color: #99411F;\n  padding: 40px 0 10px 0;\n  margin: 0; }\n"

/***/ }),

/***/ "./src/app/copyright/copyright.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CopyrightComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CopyrightComponent = /** @class */ (function () {
    function CopyrightComponent() {
    }
    CopyrightComponent.prototype.ngOnInit = function () {
    };
    CopyrightComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-copyright',
            template: __webpack_require__("./src/app/copyright/copyright.component.html"),
            styles: [__webpack_require__("./src/app/copyright/copyright.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CopyrightComponent);
    return CopyrightComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <h1>Labs</h1>\n  \n  <ul>\n    <li>\n      <a href=\"https://yve5.github.com/pairs\" target=\"blank\">Pairs Game</a>\n    </li>\n    <li>\n      <a href=\"https://yve5.github.com/lipstickcss\" target=\"blank\">Lipstick CSS</a>\n    </li>\n    <li>\n      <a routerLink=\"/more\">More...</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal {\n  background-color: #fff;\n  display: inline-block;\n  min-width: 300px;\n  margin: 10px 0;\n  -webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2); }\n  .modal h1 {\n    margin: 0;\n    padding: 40px;\n    text-align: center; }\n  .modal ul {\n    list-style: none;\n    margin: 0 0 40px 0;\n    padding: 0; }\n  .modal ul li {\n      text-align: center;\n      padding: 0;\n      margin: 0; }\n  .modal ul li a {\n        display: block;\n        padding: 10px 40px 10px 40px;\n        text-decoration: none;\n        color: #000;\n        -webkit-transition: background 250ms ease;\n        transition: background 250ms ease; }\n  .modal ul li a:active, .modal ul li a:hover {\n          background: #F5F5F5; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/knockout/knockout.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <h1>Tutoriel KnockoutJS</h1>\n\n  <p>\n    Cette page référence les bonnes pratiques autour de l'intégration \n    de la bibliothèque KnockoutJS au sein des infrastrutures de la DSI.\n  </p>\n  \n  <ul>\n    <li>\n      <a routerLink=\"/more\">Back to home</a>\n    </li>\n  </ul>\n\n  <hr>\n  <h2 id=\"anchor-intro\">Introduction</h2>\n\n  <h3>Ajouter du JavaScript</h3>\n  <p>La logique d'interface est à mettre au plus bas.</p>\n  <pre>\n&lt;script type=\"text/javascript\"&gt;\n    function (a, b) &#123;\n        return a + b;\n    &#125;\n&lt;/script&gt;\n</pre>\n  \n  <p>Les bibliothèques JavaScript sont également à inclure au plus bas dans le document HTML.</p>\n  <pre>\n&lt;script src=\"Scripts/jquery-1.5.1.js\" type=\"text/javascript\"&gt;&lt;/script&gt;\n</pre>\n  \n  <h3>Les fonctions</h3>\n  <h4>Nommée</h4>\n  <pre>\nfunction addition (a, b) &#123;\n    return a + b;\n&#125;\n</pre>\n\n  <h4>Anonyme</h4>\n  <pre>\nfunction (a, b) &#123;\n    return a + b;\n&#125;\n</pre>\n  \n  <h4>Une fonction est un objet.</h4>\n  <pre>\nvar ajouter = function addition (a, b) &#123;\n    return a + b;\n&#125;\n\nvar resultat = ajouter(2, 3);\n</pre>\n\n  <h3>Bonnes pratiques</h3>\n  <p>\n    Les guillements simples <code>'</code> sont préconisés dans du code JavaScript.\n    À l'inverse, les doubles guillements <code>\"</code> sont à proscrire.\n  </p>\n  <p>\n    Afin de faciliter le débogage, il est conseillé de coder en utilisant les conventions stricts du JavaScript.\n    Pour ce faire, il faut écrire le code suivant en début de fichier : <code>'use strict'</code>\n  </p>\n  <p>\n    Il est conseillé d'utiliser une copie de <code>this</code> (<code>var self = this;</code>), \n    afin d'éviter les conflits entre différentes instances de <code>this</code>.\n  </p>\n  <p>\n    Les noms de variables et de fonctions doivent repescter la convention &laquo; casse de chameau &raquo; (CamelCase, en anglais).\n    <a href=\"https://fr.wikipedia.org/wiki/CamelCase\">Plus d'information.</a>\n  </p>\n  \n  <p><s>LENOMDELAFONCTION</s> : Tout en majuscule</p>\n  <p><s>lenomdelafonction</s> : Tout en minuscule</p>\n  <p><s>LeNomDeLaFonction</s> : UpperCamelCase</p>\n  <p>leNomDeLaFonction : lowerCamelCase</p>\n  \n  <h3>Débogage</h3>\n  <ul>\n    <li>Chrome, Edge, Firefox : F12</li>\n    <li>Point d'arrêt : clic dans la marage ou F9</li>\n    <li>Espions :\n      <ul>\n        <li>affichage des variables locales et globales</li>\n        <li>ajout de vos variables</li>\n      </ul>\n    </li>\n    <li>Console : évaluation d'un expression</li>\n  </ul>\n  \n  <hr>\n  \n  <h2 id=\"anchor-base\">Knockout : utilisation de base</h2>\n  <h3>Pourquoi l'utiliser ?</h3>\n  <ul>\n    <li>Une seule dépendance, un seul objectif</li>\n    <li>jQuery : limité à des écrans simples</li>\n    <li>MVVM : la praticité du Databinding</li>\n    <li>\n      Multi-navigateurs :\n      <ul>\n        <li>Microsoft Edge</li>\n        <li>Firefox 2+</li>\n        <li>Chrome</li>\n        <li>Safari</li>\n        <li>IE 6+</li>\n        <li>etc.</li>\n      </ul>\n    </li>\n  </ul>\n  \n  <h3>Créer un ViewModel et l'appliquer</h3>\n  <pre>\nvar personViewModel = function () &#123;\n    ...\n&#125;\n\nko.applyBindings(new personViewModel());\n</pre>\n  \n  <h3>Ajouter des propriétés</h3>\n  <pre>\nvar personViewModel = function () &#123;\n    var self = this;\n    <strong>self.firstName = 'Jean';</strong>\n    <strong>self.lastName = 'Dupont';</strong>\n&#125;\n</pre>\n  \n  <h3>Databinding</h3>\n  <h4>Les propriétés</h4>\n  <ul>\n    <li>Attribut data-bind</li>\n    <li>text, value, visible, checked, ...</li>\n  </ul>\n  <pre>\n&lt;div&gt;\n    Nom : &lt;input data-bind=\"value: firstName\" type=\"text\" /&gt;\n&lt;/div&gt;\n&lt;div&gt;\n    Prénom : &lt;input data-bind=\"value: lastName\" type=\"text\" /&gt;\n&lt;/div&gt;\n</pre>\n\n  <h4>Le texte</h4>\n  <ul>\n    <li>Appelle . toString() si l'objet n'est pas une chaîne de caractères</li>\n    <li>Protège contre l'injection de script</li>\n  </ul>\n  <pre>\n&lt;span <strong>data-bind=\"value: firstName\"</strong>&gt;&lt;/span&gt;\n</pre>\n  \n  <h4>La visibilité</h4>\n  <ul>\n    <li>Masque l'élément si false-like (display : none)</li>\n    <li>Affiche l'élément si true-like (supprime l'attribut display)</li>\n  </ul>\n  <pre>\n&lt;span <strong>data-bind=\"visible: isHot\"</strong>&gt;Il fait chaud !&lt;/span&gt;\n</pre>\n  \n  <h4>Les conditions</h4>\n  <ul>\n    <li>Contrairement à visible, l'élément est physiquement supprimé ou présent dans le DOM</li>\n  </ul>\n  <pre>\n&lt;span <strong>data-bind=\"if: isHot\"</strong>&gt;Il fait chaud !&lt;/span&gt;\n</pre>\n  \n  <ul>\n    <li>Et son contraire</li>\n  </ul>\n  <pre>\n&lt;span <strong>data-bind=\"ifnot: isHot\"</strong>&gt;Il fait froid !&lt;/span&gt;\n</pre>\n  \n  <h4>Les classes CSS</h4>\n  <ul>\n    <li>Applique la classe si true-like</li>\n  </ul>\n  <pre>\n&lt;style&gt;\n    .important &#123; ... &#125;\n&lt;/style&gt;\n&lt;span data-bind=\"css: &#123; important: isHot &#125;\"&gt;\n    Température\n&lt;/span&gt;\n</pre>\n  \n  <h3>Débogage Knockout</h3>\n  <ul>\n    <li>Erreur courante : pourquoi un binding ne fonctionne pas ?</li>\n    <li>Affichage du contexte de binding :</li>\n  </ul>\n  <pre>\n&lt;pre data-bind=\"text: ko.toJSON($data, null, 2)\"&gt;&lt;/pre&gt;\n</pre>\n  <ul>\n    <li>Knockout Context Debugger (pour Chrome)</li>\n  </ul>\n  \n  <hr>\n  \n  <h2 id=\"anchor-avancee\">Knockout : utilisation avancée</h2>\n  <h3>Les observables</h3>\n  <h4>Utiliser des propriétés observables</h4>\n  <pre>\nvar personViewModel = function () &#123;\n  var self = this;\n  <strong>self.firstName = ko.observable('');</strong>\n  <strong>self.lastName =  ko.observable('');</strong>\n&#125;\n</pre>\n  \n  <h4>Syntaxe du data-bind</h4>\n  <ul>\n    <li>Propriété du modèle</li>\n  </ul>\n  <pre>\n&lt;span <strong>data-bind=\"text: firstName\"</strong>&gt;&lt;/span&gt;\n</pre>\n  <ul>\n    <li>Comparaison</li>\n  </ul>\n  <pre>\n&lt;span <strong>data-bind=\"visible: firstName().length > 0\"</strong>&gt;&lt;/span&gt;\n</pre>\n  <ul>\n    <li>Multiple</li>\n  </ul>\n  <pre>\n&lt;span <strong>data-bind=\"text: firstName, visible: isMale\"</strong>&gt;&lt;/span&gt;\n</pre>\n  <ul>\n    <li>Appel de fonction</li>\n  </ul>\n  <pre>\n&lt;span <strong>data-bind=\"text: makeUpper(firstName())\"</strong>&gt;&lt;/span&gt;\n</pre>\n  \n  <h4>Lire et écrire des observables</h4>\n  <ul>\n    <li>Un ko.observable est un objet complexe.</li>\n    <li>Pour lire :</li>\n  </ul>\n  <pre>\nvar nomSaisi = self.firstName();\n</pre>\n  <ul>\n    <li>Pour écrire :</li>\n  </ul>\n  <pre>\nself.firstName('Nouvelle valeur');\n</pre>\n  \n  <h3>Propriétés calculées</h3>\n  <ul>\n    <li>La gestion des dépendances (et le recalcul) est automatique.</li>\n  </ul>\n  <pre>\nvar personViewModel = function () &#123;\n    this.fullNameLength = ko.computed( function () &#123;\n        return this.fullName().length();\n    &#125;, this);\n&#125;\n</pre>\n  <ul>\n    <li>Le <code>this</code> définit quel sera le <code>this</code> dans la fonction.</li>\n    <li>La pratique du self évite de succomber aux changements de contexte</li>\n  </ul>\n  <pre>\nvar personViewModel = function () &#123;\n    <strong>var self = this;</strong>\n    self.fullNameLength = ko.computed( function () &#123;\n        return <strong>self</strong>.fullName().length();\n    &#125;);\n&#125;\n</pre>\n  <ul>\n    <li>Quand la valeur calculée peut être saisie par l'utilisateur, il est nécessaire d'activer l'option d'écriture.</li>\n  </ul>\n  <pre>\nvar personViewModel = function () &#123;\n    var self = this;\n    self.fullName = ko.computed( function () &#123;<strong>\n        read:   function() &#123; ... &#125;,\n        write:  function() &#123; ... &#125;</strong>\n    &#125;);\n&#125;\n</pre>\n    \n    <h3>Performance</h3>\n    <h4>Pure</h4>\n    <ul>\n      <li>Pure : la fonction d'évaluation ne modifie aucune valeur</li>\n      <li>Amélioration de performance et usage RAM avec pureComputed</li>\n    </ul>\n    <pre>\nvar personViewModel = function () &#123;\n    var self = this;\n    self.fullNameLength = ko.<strong>pureComputed</strong>( function () &#123;\n        return self.fullName().length();\n    &#125;);\n&#125;\n</pre>\n    <div class=\"alert alert-danger\" role=\"alert\">\n      La fonction pureComputed est une fonctionnalité récente de Knockout.\n      Il est nécessaire de vérifier son existence.\n    </div>\n    \n    <h4>rateLimit</h4>\n    <ul>\n      <li>Si beaucoup de dépendances, évaluation fréquente</li>\n    </ul>\n    <pre>\nvar personViewModel = function () &#123;\n    var self = this;\n    self.fullNameLength = ko.computed( function () &#123;\n        return self.fullName().length();\n    &#125;)<strong>.extend(&#123; rateLimit : 50 &#125;)</strong>;\n&#125;\n</pre>\n    <ul>\n      <li>Fonctionne aussi bien sur observable que sur computed</li>\n    </ul>\n    \n    <h3>Les méthodes</h3>\n    <h4>Ajouter des méthodes</h4>\n    <ul>\n      <li>Quand la valeur calculée peut être saisie par l'utilisateur</li>\n    </ul>\n    <pre>\nvar personViewModel = function () &#123;\n    var self = this;\n    ...\n    self.makeNameUppercase = function() &#123;\n        ...\n    &#125;\n&#125;\n</pre>\n    <pre>\n&lt;button <strong>data-bind=\"click: makeNameUppercase\"</strong>&gt;Majuscules&lt;/button&gt;\n</pre>\n    \n    <h4>Le Binding Click</h4>\n    <ul>\n      <li>\n        Knockout passe à la fonction :\n        <ul>\n          <li>Les paramètres d'évènement</li>\n          <li>Le contexte courant</li>\n        </ul>\n      </li>\n    </ul>\n    <pre>\n&lt;button <strong>data-bind=\"click: makeNameUppercase\"</strong>&gt;Majuscules&lt;/button&gt;\n      \nvar personViewModel = function () &#123;\n    var self = this;\n    self.<strong>makeNameUppercase</strong> = function() &#123;\n        ...\n    &#125;\n&#125;\n</pre>\n    \n    <h4>Passer des paramètres choisis</h4>\n    <ul>\n      <li>Syntaxe 1</li>\n    </ul>\n    <pre>\n&lt;button <strong>data-bind=\"click: function(data, event) &#123;\n    myFunction('param1', 'param2, data, event)\n&#125;\"</strong>&gt;Majuscules&lt;/button&gt;\n</pre>\n    <ul>\n      <li>Syntaxe 2</li>\n    </ul>\n    <pre>\n&lt;button <strong>data-bind=\"click: myFunction.bind($data, 'param1', 'param2')\"</strong>&gt;Majuscules&lt;/button&gt;\n</pre>\n        \n        <h4>Gérer d'autres évènements</h4>\n        <ul>\n          <li>Pour tous les évènements JavaScript</li>\n        </ul>\n        <pre>\n&lt;button <strong>data-bind=\"event: &#123; mouseover: MakeItBold &#125;\"</strong>&gt;Survolez-moi&lt;/button&gt;\n</pre>\n        <ul>\n          <li>Mêmes paramètres que pour le binding click</li>\n        </ul>\n        \n        <h3>Les collections</h3>\n        <h4>Énumérer une collection</h4>\n        <ul>\n          <li>Le binding foreach repète les éléments enfants dans le DOM</li>\n        </ul>\n        <pre>\n&lt;ul <strong>data-bind=\"foreach: elements\"</strong>&gt;\n    &lt;li <strong>data-bind=\"text: title\"</strong>&gt;&lt;/li&gt;\n&lt;/ul&gt;\n</pre>\n        \n        <h4>Contexte dans une collection</h4>\n        <pre>\n&lt;ul data-bind=\"foreach: elements\"&gt;\n    &lt;li data-bind=\"text: title\"&gt;&lt;/li&gt;\n&lt;/ul&gt;\n</pre>\n        <ul>\n          <li>Title est un contexte <code>element</code></li>\n          <li>\n            Pour sortir du contexte :\n            <ul>\n              <li>$index</li>\n              <li>$parent: collection</li>\n              <li>$root: le ViewModel principal</li>\n            </ul>\n          </li>\n        </ul>\n        <h4>Sortie du contexte : exemple</h4>\n        <pre>\n&lt;ul data-bind=\"foreach: elements\"&gt;\n    &lt;li data-bind=\"text: title<strong>, click : $parent.remove</strong>\"&gt;&lt;/li&gt;\n&lt;/ul&gt;\n</pre>\n        \n        <h3>Tableaux observables</h3>\n        <ul>\n          <li>\n            Notification de la vue lorsque les éléments changent : ajout, suppression, déplacement\n          </li>\n        </ul>\n        <pre>\nthis.elements = ko.observableArray();\n\nthis.elements.push(...);\n</pre>\n        \n        <ul>\n          <li>\n            Limitation\n            <ul>\n              <li>observableArray suit les modifications du tableau, pas les modifications de chaque élément du tableau</li>\n              <li>Si nécessaire, chaque élément doit avoir des propriétés ko.observable</li>\n            </ul>\n          </li>\n          <li>\n            Fonctions de ko.observableArray\n            <ul>\n              <li>Construction : éléments initiaux</li>\n              <li>\n                Comme les tableaux JavaScript : push / unshift, pop / shift, indexOf, reverse, splice, slice, sort\n              </li>\n              <li>\n                En plus : remove, removeAll\n              </li>\n            </ul>\n          </li>\n        </ul>\n        \n        \n        <h3>Composants</h3>\n        <h4>Intérêts</h4>\n        <ul>\n          <li>Permettent d'étendre la syntaxe HTML avec des nouveaux éléments</li>\n          <li>Factorisation du HTML et du ViewModel</li>\n          <li>Réutilisable</li>\n        </ul>\n        <pre>\n&lt;div&gt;\n  &lt;div data-bind=\"text: firstName\"&gt;&lt;/div&gt;\n  <strong>&lt;numero-secu params=\"value: ssn\"&gt;&lt;/numero-secu&gt;</strong>\n&lt;/div&gt;\n</pre>\n        \n        <h4>Définition</h4>\n        <pre>\n&lt;template id='numero-secu-template'&gt;\n    ...\n&lt;/template&gt;\n</pre>\n        <pre>\nnsViewModel = function (params) &#123;...&#125;\n\nko.components.register('numero-secu', &#123;\n    viewModel: nsViewModel,\n    template: &#123; element: 'numero-secu-template' &#125;\n&#125;\n</pre>\n        \n        <h4>Définition avec un chargeur de module</h4>\n        <ul>\n          <li>Knockout appelle les deux require sur le chargeur AMD (exemple: RequireJS)</li>\n        </ul>\n        <pre>\nnsViewModel = function (params) &#123;...&#125;\n\nko.components.register('numero-secu', &#123;\n    viewModel: &#123; require: 'js/num-secu' &#125;,\n    template: &#123; require: 'text!num-secu.html' &#125;\n&#125;\n</pre>\n        \n        <h3>Custom Bindings</h3>\n        <h4>Intérêts</h4>\n        <ul>\n          <li>\n            Extension de la syntaxe des bindings\n            <ul>\n              <li>Nom personnalisé</li>\n              <li>Accès à l'élément DOM</li>\n              <li>Accès à la valeur de binding et à toutes les valeurs de binding</li>\n            </ul>\n          </li>\n        </ul>\n        <pre>\n&lt;div data-bind=\"text: firstName<strong>, graph: ageData</strong>\"&gt;&lt;/div&gt;\n</pre>\n        \n        <h4>Définition</h4>\n        <pre>\n&lt;div data-bind=\"text: firstName<strong>, graph: ageData</strong>\"&gt;&lt;/div&gt;\n</pre>\n        <pre>\nko.bindingHandlers.graph = &#123;\n    init : function (element, valueAccessor, allBindings) &#123;\n        ...\n    &#125;,\n    update : function (element, valueAccessor, allBindings) &#123;\n        ...\n    &#125;\n&#125;\n</pre>\n        \n        <h4>Fonctions</h4>\n        <ul>\n          <li>init : appelée une fois</li>\n          <li>update : appelée au début puis dès qu'une valeur observée par update change</li>\n        </ul>\n        <pre>\nko.bindingHandlers.graph = &#123;\n    init : function (element, valueAccessor, allBindings) &#123;\n        ...\n    &#125;,\n    update : function (element, valueAccessor, allBindings) &#123;\n        ...\n    &#125;\n&#125;\n</pre>\n        \n        <h4>Paramètres des fonctions</h4>\n        <ul>\n          <li>element : élément DOM</li>\n          <li>valueAccessor : fonction pour valeur passée au Binding</li>\n          <li>allBindings : autres Bindings</li>\n        </ul>\n        <pre>\nko.bindingHandlers.graph = &#123;\n    ...\n    update: function (\n        element,\n        valueAccessor,\n        allBindings,\n        viewModel,\n        bindingContext)\n    &#123;\n        ...\n    &#125;\n&#125;\n</pre>\n        \n    <hr>\n\n    <h2 id=\"anchor-reference\">Références</h2>\n    <ul>\n      <li><a href=\"https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference\">Fondation Mozilla · Support JavaScript</a></li>\n      <li><a href=\"http://knockoutjs.com/documentation/introduction.html\">Documentation officielle Knockout</a></li>\n      <li>Arnaud Weil · formateur Knockout</li>\n      <li><a href=\"https://fr.wikipedia.org/\">Wikipedia</a></li>\n    </ul>\n\n    <a href=\"\">Back to top</a>\n</div>"

/***/ }),

/***/ "./src/app/knockout/knockout.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal {\n  background-color: #fff;\n  display: inline-block;\n  margin: 10px 0;\n  min-width: 300px;\n  max-width: 700px;\n  text-align: left;\n  -webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2); }\n  .modal h1 {\n    text-align: center;\n    padding: 40px;\n    margin: 0; }\n  .modal h3 {\n    padding: 20px 40px 0 40px; }\n  .modal h2, .modal h4,\n  .modal p {\n    padding: 0 40px 0 40px; }\n  .modal h4 {\n    font-weight: bold; }\n  .modal hr {\n    border-width: 1px 0 0 0;\n    border-style: solid;\n    border-color: #eee; }\n  .modal pre {\n    background: #333;\n    color: #fff;\n    font-family: consolas;\n    font-size: 13px;\n    padding: 10px 40px; }\n  .modal ul {\n    padding: 0;\n    margin: 0 40px 0 60px; }\n  .modal ul li {\n      padding: 0;\n      margin: 0; }\n  .modal a {\n    color: #000; }\n  .modal a:active, .modal a:hover {\n      color: #666; }\n  .modal ul.nav {\n    list-style: none;\n    padding: 0; }\n  .modal ul.nav li {\n      text-align: center;\n      padding: 0;\n      margin: 0; }\n  .modal ul.nav li a {\n        display: block;\n        padding: 10px 40px 10px 40px;\n        text-decoration: none;\n        color: #000;\n        -webkit-transition: background 250ms ease;\n        transition: background 250ms ease; }\n  .modal ul.nav li a:active, .modal ul.nav li a:hover {\n          background: #F5F5F5; }\n"

/***/ }),

/***/ "./src/app/knockout/knockout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KnockoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KnockoutComponent = /** @class */ (function () {
    function KnockoutComponent() {
    }
    KnockoutComponent.prototype.ngOnInit = function () {
    };
    KnockoutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-knockout',
            template: __webpack_require__("./src/app/knockout/knockout.component.html"),
            styles: [__webpack_require__("./src/app/knockout/knockout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], KnockoutComponent);
    return KnockoutComponent;
}());



/***/ }),

/***/ "./src/app/more/more.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"modal\">\n  <h1>More...</h1>\n  \n  <ul>\n    <li>\n      <a routerLink=\"/knockout\">KnockoutJS Tutorial</a>\n    </li>\n    <li>\n      <a href=\"https://yve5.github.com/tiles\" target=\"blank\">Tiles</a>\n    </li>\n    <li>\n        <a href=\"https://yve5.github.com/showcase\" target=\"blank\">Showcase</a>\n      </li>\n    <li>\n      <a routerLink=\"/home\">Return to home</a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/more/more.component.scss":
/***/ (function(module, exports) {

module.exports = ".modal {\n  background-color: #fff;\n  display: inline-block;\n  min-width: 300px;\n  margin: 10px 0;\n  -webkit-box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);\n          box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2); }\n  .modal h1 {\n    margin: 0;\n    padding: 40px;\n    text-align: center; }\n  .modal ul {\n    list-style: none;\n    margin: 0 0 40px 0;\n    padding: 0; }\n  .modal ul li {\n      text-align: center;\n      padding: 0;\n      margin: 0; }\n  .modal ul li a {\n        display: block;\n        padding: 10px 40px 10px 40px;\n        text-decoration: none;\n        color: #000;\n        -webkit-transition: background 250ms ease;\n        transition: background 250ms ease; }\n  .modal ul li a:active, .modal ul li a:hover {\n          background: #F5F5F5; }\n"

/***/ }),

/***/ "./src/app/more/more.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MoreComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MoreComponent = /** @class */ (function () {
    function MoreComponent() {
    }
    MoreComponent.prototype.ngOnInit = function () {
    };
    MoreComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-more',
            template: __webpack_require__("./src/app/more/more.component.html"),
            styles: [__webpack_require__("./src/app/more/more.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MoreComponent);
    return MoreComponent;
}());



/***/ }),

/***/ "./src/app/routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__more_more_component__ = __webpack_require__("./src/app/more/more.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__knockout_knockout_component__ = __webpack_require__("./src/app/knockout/knockout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'knockout', component: __WEBPACK_IMPORTED_MODULE_4__knockout_knockout_component__["a" /* KnockoutComponent */] },
    { path: 'more', component: __WEBPACK_IMPORTED_MODULE_3__more_more_component__["a" /* MoreComponent */] }
];
var RoutingModule = /** @class */ (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], RoutingModule);
    return RoutingModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map