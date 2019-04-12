webpackJsonp([1],{

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(63);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { MainPage } from '../';
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        // The account fields for the login form.
        // If you're using the username field with or without email, make
        // sure to add it to the type
        this.account = {
            username: 'testrestorer',
            password: 'test'
        };
    }
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        var toast = this.toastCtrl.create({
            message: 'Login Success',
            duration: 500,
            position: 'top'
        });
        toast.present();
        this.account['type'] = this.account.username.substring(4);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["d" /* DashboardPage */], {
            account: this.account,
        });
        // this.navCtrl.push(ResizablePage);
        // this.user.login(this.account).subscribe((resp) => {
        //   this.navCtrl.push(MainPage);
        // }, (err) => {
        //   this.navCtrl.push(MainPage);
        //   // Unable to log in
        //   let toast = this.toastCtrl.create({
        //     message: this.loginErrorString,
        //     duration: 3000,
        //     position: 'top'
        //   });
        //   toast.present();
        // });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/login/login.html"*/'<ion-content>\n<ion-grid>\n  <ion-row>\n    <ion-col col-4 align-self-center offset-4>\n    	<div class="wrap">\n    		<ion-card>\n  <ion-card-header>\n    		<h4>Login</h4>\n  </ion-card-header>\n  <ion-card-content>\n  <form (submit)="doLogin()">\n    <ion-list>\n<!-- 		  <ion-item>\n		    <ion-label fixed>Profile Type</ion-label>\n		    <ion-select [(ngModel)]="account.type" name="type">\n		      <ion-option value="JG">Judge</ion-option>\n		      <ion-option value="CS">Court Staff</ion-option>\n		      <ion-option value="LR">LR</ion-option>\n		    </ion-select>\n		  </ion-item> -->\n\n      <ion-item>\n        <ion-label fixed>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n      </ion-item>\n\n      <!--\n      Want to use a Username instead of an Email? Here you go:\n\n      <ion-item>\n        <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n      </ion-item>\n      -->\n\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>Login\n        </button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-card-content>\n</ion-card>\n</div>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 160:
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
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/test/test.module": [
		678,
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
webpackAsyncContext.id = 205;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(148);
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
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    WelcomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
    };
    WelcomePage.prototype.signup = function () {
        this.navCtrl.push('SignupPage');
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/welcome/welcome.html"*/'<ion-content scroll="false">\n	<ion-grid>\n  <ion-row>\n    <ion-col col-4 align-self-center offset-4>\n    	<div class="wrap">\n    		<ion-card>\n  <ion-card-content>\n			  <!-- <div class="splash-bg"></div> -->\n			  <div class="splash-info">\n			    <div class="splash-logo"></div>\n			    <div class="splash-intro" ngDraggable>\n			      Court Desk\n			    </div>\n			  </div>\n			  <div padding>\n			    <!-- <button ion-button block (click)="login()">Sign Up</button> -->\n			    <button ion-button block (click)="login()" class="login">Getting Started</button>\n			  </div>\n			</ion-card-content>\n		</ion-card>\n			  </div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 344:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(349);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 349:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobiscroll_angular__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular_resizable_element__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(672);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_casefile_casefile__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_resizable_resizable__ = __webpack_require__(677);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(343);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { MaterializeModule } from "angular2-materialize";












// import { ItemDetailsPage } from '../pages/item-details/item-details';
// import { ListPage } from '../pages/list/list';


// import { AngularDraggableModule } from 'angular2-draggable';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["d" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_casefile_casefile__["a" /* CaseFilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["c" /* CourtStaffModal */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* BulkUploadModal */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["b" /* CalendarModal */],
                __WEBPACK_IMPORTED_MODULE_10__pages_casefile_casefile__["d" /* UploadCaselawModal */],
                __WEBPACK_IMPORTED_MODULE_10__pages_casefile_casefile__["e" /* UploadLegislationModal */],
                __WEBPACK_IMPORTED_MODULE_10__pages_casefile_casefile__["c" /* DraftPeshiModal */],
                __WEBPACK_IMPORTED_MODULE_10__pages_casefile_casefile__["b" /* DraftOrderModal */],
                __WEBPACK_IMPORTED_MODULE_11__pages_resizable_resizable__["a" /* ResizablePage */]
                // PdfViewerModule
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_5_angular_resizable_element__["a" /* ResizableModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__mobiscroll_angular__["a" /* MbscModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                // AngularDraggableModule,
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["d" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_casefile_casefile__["a" /* CaseFilePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["c" /* CourtStaffModal */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["a" /* BulkUploadModal */],
                __WEBPACK_IMPORTED_MODULE_9__pages_dashboard_dashboard__["b" /* CalendarModal */],
                __WEBPACK_IMPORTED_MODULE_10__pages_casefile_casefile__["d" /* UploadCaselawModal */],
                __WEBPACK_IMPORTED_MODULE_10__pages_casefile_casefile__["e" /* UploadLegislationModal */],
                __WEBPACK_IMPORTED_MODULE_10__pages_casefile_casefile__["c" /* DraftPeshiModal */],
                __WEBPACK_IMPORTED_MODULE_10__pages_casefile_casefile__["b" /* DraftOrderModal */],
                __WEBPACK_IMPORTED_MODULE_11__pages_resizable_resizable__["a" /* ResizablePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseFilePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return UploadCaselawModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return UploadLegislationModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return DraftPeshiModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DraftOrderModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_uuid__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_uuid__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * Generated class for the CasepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CaseFilePage = /** @class */ (function () {
    function CaseFilePage(navCtrl, navParams, sanitizer, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.modalCtrl = modalCtrl;
        this.currentPageIndex = 0;
        this.currentPageIndexForFlag = 0;
        this.caselaws = false;
        this.legislation = false;
        this.peshi = false;
        this.showFlag = false;
        this.casefile = this.navParams.get('casefile');
        this.court = this.navParams.get('court');
        this.account = this.navParams.get('account');
        this.currentDoc = 'Case File';
        console.log(this.casefile, this.casefile['caseNo']);
        this.baseUrl = 'https://courtdesk.github.io';
        // this.baseUrl = 'http://127.0.0.1:8080';
        this.removedItems = ["pan", "ink-signature", "text", "image", "stamp", "line", "rectangle", "arrow", "ellipse", "polygon", "polyline"];
        this.additionalRemovedItems = ["annotate", "ink", "highlighter", "note"];
        if (this.account.type == "cs" || this.account.type == "restorer") {
            this.removedItems = this.removedItems.concat(this.additionalRemovedItems);
        }
        this.orderType = ["Final", "Draft"];
        if (this.account.type == 'judge')
            this.welcomeString = 'HMJ SB';
        else if (this.account.type == 'cs') {
            this.orderType.pop();
            this.welcomeString = 'Court Staff';
        }
        else if (this.account.type == 'lr')
            this.welcomeString = 'LR';
        else if (this.account.type == 'steno')
            this.welcomeString = 'Steno';
        else if (this.account.type == 'restorer') {
            this.orderType.pop();
            this.welcomeString = 'Restorer';
        }
        this.options = [
            {
                name: "Case File",
                submenus: [],
                icon: this.baseUrl + "/assets/icon/" + "casefile.svg"
            },
            {
                name: "Peshi",
                submenus: [],
                icon: this.baseUrl + "/assets/icon/" + "peshi.png"
            },
            {
                name: "Case Laws",
                submenus: this.casefile.caselaws,
                icon: this.baseUrl + "/assets/icon/" + "caselaws.png"
            },
            {
                name: "Legislations",
                submenus: this.casefile.legislations,
                icon: this.baseUrl + "/assets/icon/" + "legislation.png"
            },
            {
                name: "Orders",
                submenus: this.orderType,
                icon: this.baseUrl + "/assets/icon/" + "peshi.png"
            }
        ];
        // console.dir(PSPDFKit);
    }
    CaseFilePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad CasepagePage');
        this.init();
    };
    CaseFilePage.prototype.initPath = function () {
        this.paths = ["Court Room " + this.court.courtNumber, this.casefile['caseNo']];
    };
    CaseFilePage.prototype.init = function () {
        this.initPath();
        this.caselaws = false;
        this.legislation = false;
        this.peshi = false;
        this.loadPDF("casefile.pdf");
    };
    CaseFilePage.prototype.loadPDF = function (file) {
        var _this = this;
        var $this = this;
        this.clearPDF();
        var filePath = encodeURI(this.casefile['caseNo']) + "/" + file;
        var defaultItems = PSPDFKit.defaultToolbarItems;
        if (file === "casefile.pdf" && this.account.type == "lr") {
            this.removedItems = this.removedItems.concat(this.additionalRemovedItems);
        }
        PSPDFKit.load({
            container: "#pspdfkit",
            pdf: this.baseUrl + "/assets/docs/" + filePath,
            instantJSON: JSON.parse(localStorage.getItem(filePath)),
            licenseKey: "Q9diEIjbVwUtQKYioXpPO5TY-_uZcFJN1CfxpoEazlC0EvN9BpMSe_KSvgNrOYr39D2Got3XhvpvIjayZPsyQQNrPlLilbKxSkrc-_dZ_OAxucdWJMiGaSQWNAgOOWLwYAPv3ssjsNMupdNIer37PY-zvtXRqtK_aNoHfZnfx5eZI7CdQP5BZWbxMSM-rZYGxgXxHMKajEWP5H_uXihdZWCcNrFymnOd2qsGP8b04vh_SP3STVJ61C7VnB9CRsqJsBF46OBKWluz7vpebSlSxeqZBCZh1sMfQbd_C3hRHgJSUif9Nn35878_JEFYeYUbD_pu9NGMeWYGjCGAWHxv_DTRFd9-wCevJ8FlDN5P7ZTHSOdUHEgUfkUP_8upLJvp8eCdv4U4-m0Jwt1G_YTiaW03YQVS_QFjsaAgrtMVvuvmh7fyk5USsT5xLuuJ1of1",
            disableWebAssemblyStreaming: true
        })
            .then(function (instance) {
            instance.setViewState(function (viewState) {
                return viewState.set("sidebarMode", PSPDFKit.SidebarMode.ANNOTATIONS);
            });
            if (file === "casefile.pdf") {
                instance.setViewState(function (viewState) {
                    return viewState.set("currentPageIndex", _this.currentPageIndex);
                });
            }
            var toolbarItems = PSPDFKit.defaultToolbarItems;
            var index = toolbarItems.findIndex(function (item) { return item.type === "annotate"; });
            var flagButton = document.getElementById("flag-button");
            flagButton.classList.add("show-flag");
            flagButton.onclick = function () {
                var bookmark = new PSPDFKit.Bookmark({
                    name: 'Flagged-' + ($this.currentPageIndexForFlag + 1),
                    action: new PSPDFKit.Actions.GoToAction({ pageIndex: $this.currentPageIndexForFlag })
                });
                instance.createBookmark(bookmark);
            };
            instance.setToolbarItems(function (items) {
                return items.map(function (item) {
                    console.log(item);
                    if (_this.removedItems.indexOf(item.type) > -1)
                        item.mediaQueries = ['(min-width: 8000px)'];
                    else
                        item.mediaQueries = ['(min-width: 10px)'];
                    if (item.type == "ink" || item.type == "highlighter")
                        item['dropdownGroup'] = __WEBPACK_IMPORTED_MODULE_3_angular2_uuid__["UUID"].UUID();
                    item['responsiveGroup'] = __WEBPACK_IMPORTED_MODULE_3_angular2_uuid__["UUID"].UUID();
                    return item;
                });
            });
            console.log(toolbarItems[index].onPress);
            console.log(instance);
            instance.addEventListener("viewState.change", function (viewState) {
                if (file === "casefile.pdf")
                    _this.currentPageIndex = viewState.get('currentPageIndex');
            });
            instance.addEventListener("viewState.currentPageIndex.change", function (pageIndex) {
                _this.currentPageIndexForFlag = pageIndex;
            });
            instance.addEventListener("annotations.didSave", function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // const instantJSON = await instance.exportInstantJSON();
                    // console.log(JSON.stringify(instantJSON));
                    // await fetch("http://127.0.0.1:8001", {
                    //   method: "POST",
                    //   headers: {
                    //     "Content-Type": "application/json"
                    //   },
                    //   body: JSON.stringify(instantJSON)
                    // });
                    instance.exportInstantJSON().then(function (instantJSON) {
                        localStorage.setItem(filePath, JSON.stringify(instantJSON));
                    });
                    return [2 /*return*/];
                });
            }); });
            instance.addEventListener("bookmarks.didSave", function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    // const instantJSON = await instance.exportInstantJSON();
                    // console.log(JSON.stringify(instantJSON));
                    // await fetch("http://127.0.0.1:8001", {
                    //   method: "POST",
                    //   headers: {
                    //     "Content-Type": "application/json"
                    //   },
                    //   body: JSON.stringify(instantJSON)
                    // });
                    instance.exportInstantJSON().then(function (instantJSON) {
                        localStorage.setItem(filePath, JSON.stringify(instantJSON));
                    });
                    return [2 /*return*/];
                });
            }); });
        })
            .catch(function (error) {
            console.error(error.message);
        });
    };
    CaseFilePage.prototype.close = function () {
        this.navCtrl.pop();
    };
    CaseFilePage.prototype.hideBar = function () {
        this.caselaws = false;
        this.legislation = false;
        this.init();
    };
    CaseFilePage.prototype.showBar = function (type) {
        if (type == 'caselaws') {
            this.caselaws = true;
            this.legislation = false;
        }
        else {
            this.legislation = true;
            this.caselaws = false;
        }
    };
    CaseFilePage.prototype.openCaseLaw = function (caselaw) {
        this.peshi = false;
        this.loadPDF("Caselaw/" + caselaw);
    };
    CaseFilePage.prototype.openLegislation = function (legislation) {
        this.peshi = false;
        this.loadPDF("Legislations/" + legislation);
    };
    CaseFilePage.prototype.viewPeshi = function () {
        this.loadPDF("peshi.pdf");
        this.peshi = true;
    };
    CaseFilePage.prototype.clearPDF = function () {
        var parent = document.getElementById("pspdfkit");
        while (parent.firstChild) {
            parent.firstChild['remove']();
        }
    };
    CaseFilePage.prototype.fullscreen = function () {
        var elem = document.getElementById("pspdfkit");
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        }
        else if (elem['mozRequestFullScreen']) {
            elem['mozRequestFullScreen']();
        }
        else if (elem['webkitRequestFullscreen']) {
            elem['webkitRequestFullscreen']();
        }
        else if (elem['msRequestFullscreen']) {
            elem['msRequestFullscreen']();
        }
    };
    CaseFilePage.prototype.uploadCaseLaw = function () {
        var modal = this.modalCtrl.create(UploadCaselawModal, { casefile: this.casefile });
        modal.present();
    };
    CaseFilePage.prototype.uploadLegislation = function () {
        var modal = this.modalCtrl.create(UploadLegislationModal, { casefile: this.casefile });
        modal.present();
    };
    CaseFilePage.prototype.draftPeshi = function () {
        var modal = this.modalCtrl.create(DraftPeshiModal, { casefile: this.casefile });
        modal.present();
    };
    CaseFilePage.prototype.draftOrder = function (order) {
        var modal = this.modalCtrl.create(DraftOrderModal, { account: this.account, order: order });
        console.log('yoo');
        modal.present();
    };
    CaseFilePage.prototype.hideAll = function (currEle) {
        var allEls = Array.from(document.querySelectorAll('p.header'));
        allEls.forEach(function (el) {
            if (el != currEle) {
                var innerWrapper = el.nextElementSibling;
                el.classList.remove('active');
                innerWrapper.classList.remove('visible-items');
            }
        });
    };
    CaseFilePage.prototype.ngIfCtrl = function (ev, name) {
        this.initPath();
        this.currentDoc = name;
        var currEle = ev.target.closest('.header');
        this.hideAll(currEle);
        var innerWrapper = currEle.nextElementSibling;
        currEle.classList.toggle('active');
        innerWrapper.classList.toggle('visible-items');
        if (name == 'Peshi')
            this.viewPeshi();
        else if (name == 'Case File')
            this.init();
    };
    CaseFilePage.prototype.openDocument = function (doc, name) {
        this.initPath();
        this.currentDoc = doc;
        if (name == 'Case Laws') {
            this.openCaseLaw(doc);
            this.paths.push(name);
        }
        else if (name == 'Legislations') {
            this.openLegislation(doc);
            this.paths.push(name);
        }
        else if (name == 'Orders') {
            this.draftOrder(doc);
        }
    };
    CaseFilePage.prototype.uploadNew = function (name) {
        if (name == 'Case Laws') {
            this.uploadCaseLaw();
        }
        else if (name == 'Legislations') {
            this.uploadLegislation();
        }
    };
    CaseFilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-casefile',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/casefile.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n	<ion-grid class="page-grid">\n  <ion-row >\n    <!-- <ion-col col-3 class="sidepane" *ngIf="caselaws || legislation">\n         <ion-icon name="arrow-round-back" class="back-icon" (click) = "hideBar()"></ion-icon>\n        <ion-grid>\n          <ion-row class="profile">\n            <ion-col class=\'sidepane-menu\'>\n              <ion-card >\n  <ion-card-header>\n    <span *ngIf="caselaws">Case Laws</span>\n    <span *ngIf="legislation">Legislations</span>\n  </ion-card-header>\n      <ion-list *ngIf="caselaws">\n        <button  ion-item *ngFor ="let caselaw of casefile.caselaws" (click)="openCaseLaw(caselaw)">\n         {{caselaw}}\n        </button>\n      </ion-list>\n      <ion-list *ngIf="legislation">\n        <button  ion-item *ngFor ="let legislation of casefile.legislations" (click)="openLegislation(legislation)">\n         {{legislation}}\n        </button>\n      </ion-list>\n      <button ion-fab *ngIf="caselaws && account.type==\'lr\' " (click)="uploadCaseLaw()"><ion-icon name="add"></ion-icon></button>\n      <button ion-fab *ngIf="legislation && account.type==\'lr\'" (click)="uploadLegislation()"><ion-icon name="add"></ion-icon></button>\n</ion-card>\n  				  </ion-col>\n  				</ion-row>\n  			</ion-grid>\n    </ion-col> -->\n    <ion-col col-1 class="sidemain">\n      <div class="icon-panel">\n          <div class="logo">\n            <img src="./assets/imgs/appicon.png">\n          </div>\n          <div class="logout" (click)="logout()">\n            <ion-icon name="log-out"></ion-icon>\n          </div>\n      </div>\n    </ion-col>\n    <ion-col col-2 class="sidepane">\n        <ion-grid>\n          <ion-row class="profile">\n            <ion-col>\n              <!-- <img src="./assets/imgs/default_bl.png"> -->\n              <h4> {{ welcomeString }} </h4>\n              <!-- <p>Advocate</p> -->\n            </ion-col>\n          </ion-row>\n          <ion-row class=\'sidepane-menu\'  >\n            <ion-col >\n              <div class = "sidepane-menu-items">\n                <div class="item-wrapper" *ngFor="let option of options">\n                <p class="header" (click)="ngIfCtrl($event,option.name)">\n                  <span class="icon">\n                    <!-- <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" role="presentation"><g fill="currentColor" fill-rule="evenodd"><path d="M5 19h14V5H5v14zM3 4.995C3 3.893 3.893 3 4.995 3h14.01C20.107 3 21 3.893 21 4.995v14.01A1.995 1.995 0 0 1 19.005 21H4.995A1.995 1.995 0 0 1 3 19.005V4.995z" fill-rule="nonzero"></path><path d="M9.17 17H4v1.5A1.5 1.5 0 0 0 5.505 20h12.99c.838 0 1.505-.672 1.505-1.5V17h-5.17a3.001 3.001 0 0 1-5.66 0zM7 12h10v2H7zm0-4h10v2H7z"></path></g>\n                    </svg> -->\n                    <img src="{{ option.icon }}">\n                  </span>\n                  <span class="name">\n                    {{ option.name }}\n                  </span>\n                  <span class="icon right-icon" *ngIf="(option.name == \'Case Laws\' || option.name == \'Legislations\') && account.type == \'lr\'" (click)="uploadNew(option.name)">\n                    <svg width="24" height="24" viewBox="0 0 512 512"><path d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"/></svg>\n                  </span>\n                  <span class="icon right-icon" *ngIf="option.name == \'Peshi\' && (account.type == \'lr\' || account.type == \'judge\')" (click)="draftPeshi()">\n                    <svg width="24" height="24" viewBox="0 0 512 512"><path d="M64 368v80h80l235.727-235.729-79.999-79.998L64 368zm377.602-217.602c8.531-8.531 8.531-21.334 0-29.865l-50.135-50.135c-8.531-8.531-21.334-8.531-29.865 0l-39.468 39.469 79.999 79.998 39.469-39.467z"/></svg>\n                  </span>\n                  </p>\n                  <div class="inner-wrapper">\n                   <p class="header-item" *ngFor ="let submenu of option.submenus" (click)="openDocument(submenu,option.name)" >\n                    <!-- <span class="item-title">Roster:</span> -->\n                    <span>{{submenu}}</span>\n                  </p>\n                </div>\n                </div>\n              </div>\n             <!--  <ion-card *ngFor="let court of caseData" (click)="openCourt(court)">\n                <ion-card-header>\n                  Court Room {{court.courtNumber}}\n                </ion-card-header>\n                    <ion-list>\n                      <button ion-item>\n                        <strong>Roster</strong> : {{court.roster}}\n                      </button>\n\n                      <button ion-item>\n                         <strong>Bench</strong> : {{court.bench}}\n                      </button>\n\n                    </ion-list>\n              </ion-card> -->\n            </ion-col>\n          </ion-row>\n         <!--  <ion-row class="bulk-upload">\n            <ion-col>\n             \n              </ion-col>\n          </ion-row>  --> \n        </ion-grid>\n    </ion-col>\n    <ion-col col-9 class="main-pane"> \n    <!-- <ion-col col-12> -->\n    	<div class="toolbar">\n    		<ion-grid style="padding:0">\n          <ion-row>\n            <ion-col col-11 style="padding: 0; ">\n              <div class="breadcrumbs">\n                <p>\n                  <span *ngFor = "let path of paths">\n                  <span class="path">{{ path }}</span>\n                  /\n                </span>\n                </p>\n              </div>\n            </ion-col>\n        <!--     <ion-col col-6 *ngIf="!(account.type==\'lr\')">\n              \n\n              <button ion-button *ngIf="peshi" (click)="init()" >View Case File</button>\n              <button ion-button *ngIf="!peshi" (click)="viewPeshi()">View Peshi</button>\n              <button ion-button *ngIf="!caselaws" (click)="showBar(\'caselaws\')">Case Laws</button>\n              <button ion-button *ngIf="!legislation" (click)="showBar(\'legislation\')">Legislation</button>\n            </ion-col>\n\n            <ion-col col-6 *ngIf="account.type==\'lr\'">\n              \n\n              <button ion-button (click)="draftPeshi()">Draft Peshi</button>\n              <button ion-button *ngIf="!caselaws" (click)="showBar(\'caselaws\')">Upload Case Laws</button>\n              <button ion-button *ngIf="!legislation" (click)="showBar(\'legislation\')">Upload Legislation</button>\n            </ion-col> -->\n       <!--   \n            <ion-col col-6 push-6 *ngIf="account.type==\'CS\'">\n              <button ion-button float-right (click)="close()">Close</button>\n              <button ion-button float-right (click)="fullscreen()">Fullscreen</button>\n            </ion-col> -->\n\n            <ion-col col-1 style="padding: 0; " >\n               <div class="right-corner">\n              <!-- <div float-right (click)="close()"> -->\n              <!-- <div ion-button float-right (click)="fullscreen()"> -->\n              <p (click)="fullscreen()">\n                <ion-icon name="qr-scanner"></ion-icon>\n              </p>\n              <p (click)="close()">\n                <ion-icon name="close"></ion-icon>\n              </p>\n            </div>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-10>\n              <h5 class="current-doc">{{ currentDoc }}</h5>\n            </ion-col>\n            <ion-col col-2>\n              <div id="flag-button">\n                  <button ion-button color="primary" block>Add Flag\n                  </button>\n              </div>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    	</div>\n    	<div class="pdf-view">\n    		<ion-card>\n\n  <ion-card-content>\n   <div class="viewer">\n     <!--  <pdf-viewer [src]="./assets/docs/example.pdf" [render-text]="true" style="display: block;">\n      </pdf-viewer> -->\n    <!--   <object [data]="filePath | safe" width="100%" height="100%" type=\'application/pdf\'>\n   <p>Sorry, the PDF couldn\'t be displayed :(</p>\n </object> -->\n    <div id="pspdfkit" style="width: 100%; height: 100%;"></div>\n   </div>\n  </ion-card-content>\n\n</ion-card>\n    	</div>\n    </ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/casefile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], CaseFilePage);
    return CaseFilePage;
}());

var UploadCaselawModal = /** @class */ (function () {
    function UploadCaselawModal(navCtrl, navParams, viewCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.caselaw = {
            title: '',
            citation: ''
        };
        this.casefile = this.navParams.get('casefile');
    }
    UploadCaselawModal.prototype.ionViewDidLoad = function () {
        var $this = this;
        this.fileInput = document.querySelector('input[type=file]');
        this.fileWrapper = document.querySelector('#fileUpload .input-wrapper');
        this.fileWrapper.onclick = function () {
            $this.fileInput.click();
        };
        this.fileInput.onchange = function () {
            $this.file = $this.fileInput.files[0];
            $this.caseLawName = $this.file.name;
        };
    };
    UploadCaselawModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    UploadCaselawModal.prototype.save = function ($event) {
        $event.preventDefault();
        this.casefile.caselaws.push(this.caselaw.title);
        var toast = this.toastCtrl.create({
            message: 'Login Success',
            duration: 3000,
            position: 'top'
        });
        toast.present();
        this.dismiss();
        // console.log(this.fileInput.files[0]);
    };
    UploadCaselawModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload-caselaw',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/upload-caselaw.html"*/'\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Upload New Case Law\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <!-- <span ion-text color="primary" showWhen="ios">Cancel</span> -->\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (submit)="save($event)">\n    <div class="form-wrapper">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Case Title</ion-label>\n        <ion-input type="text" [(ngModel)]="caselaw.title" name="title" placeholder="Enter Case Title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Citation</ion-label>\n        <ion-input type="text" [(ngModel)]="caselaw.citation" name="citation" placeholder="Enter Citation"></ion-input>\n      </ion-item>\n\n\n       <ion-item id="fileUpload">\n        <ion-label><button ion-button (click)="uploadFile()">Upload</button></ion-label>\n        <ion-input type="text" [(ngModel)]="caseLawName" name="caseLawName" readonly></ion-input>\n        <!-- <p id="caseFileName">C:\fakepath\adas</p> -->\n         <ion-input id="fileInput" type="file" name="file" accept="application/pdf" hidden></ion-input>\n      </ion-item>\n    </ion-list>\n  </div>\n      <div padding>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-3 offset-6 >\n              <button ion-button color="primary"  type="submit" block>Save\n              </button>\n            </ion-col>\n            <ion-col col-3>\n              <button ion-button color="primary"  (click)="dismiss()" block>Cancel\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/upload-caselaw.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], UploadCaselawModal);
    return UploadCaselawModal;
}());

var UploadLegislationModal = /** @class */ (function () {
    function UploadLegislationModal(navCtrl, navParams, viewCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.legislation = {
            title: '',
            section: '',
            notes: ''
        };
        this.casefile = this.navParams.get('casefile');
    }
    UploadLegislationModal.prototype.ionViewDidLoad = function () {
        var $this = this;
        this.fileInput = document.querySelector('input[type=file]');
        this.fileWrapper = document.querySelector('#fileUpload .input-wrapper');
        this.fileWrapper.onclick = function () {
            $this.fileInput.click();
        };
        this.fileInput.onchange = function () {
            $this.file = $this.fileInput.files[0];
            $this.legislationName = $this.file.name;
        };
    };
    UploadLegislationModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    UploadLegislationModal.prototype.save = function ($event) {
        $event.preventDefault();
        this.casefile.legislations.push(this.legislation.title);
        var toast = this.toastCtrl.create({
            message: 'Login Success',
            duration: 3000,
            position: 'top'
        });
        toast.present();
        this.dismiss();
        // console.log(this.fileInput.files[0]);
    };
    UploadLegislationModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload-legislation',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/upload-legislation.html"*/'\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Upload New Legislation\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <!-- <span ion-text color="primary" showWhen="ios">Cancel</span> -->\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (submit)="save($event)">\n    <div class="form-wrapper">\n\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Title</ion-label>\n        <ion-input type="text" [(ngModel)]="legislation.title" name="title" placeholder="Enter Title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Section</ion-label>\n        <ion-input type="text" [(ngModel)]="legislation.citation" name="citation" placeholder="Enter Section"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Notes</ion-label>\n        <ion-textarea type="text" [(ngModel)]="legislation.notes" name="notes" placeholder="Type your notes here"></ion-textarea>\n      </ion-item>\n\n       <ion-item id="fileUpload">\n        <ion-label><button ion-button (click)="uploadFile()">Upload</button></ion-label>\n        <ion-input type="text" [(ngModel)]="legislationName" name="legislationName" readonly></ion-input>\n        <!-- <p id="caseFileName">C:\fakepath\adas</p> -->\n         <ion-input id="fileInput" type="file" name="file" accept="application/pdf" hidden></ion-input>\n      </ion-item>\n\n    </ion-list>\n  </div>\n      <div padding>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-3 offset-6 >\n              <button ion-button color="primary"  type="submit" block>Save\n              </button>\n            </ion-col>\n            <ion-col col-3>\n              <button ion-button color="primary"  (click)="dismiss()" block>Cancel\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/upload-legislation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], UploadLegislationModal);
    return UploadLegislationModal;
}());

var DraftPeshiModal = /** @class */ (function () {
    function DraftPeshiModal(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
    }
    DraftPeshiModal.prototype.ionViewDidLoad = function () {
        this.quill = new Quill('#editor', {
            theme: 'snow'
        });
        this.quill.on('text-change', function (delta, oldDelta, source) {
        });
    };
    DraftPeshiModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DraftPeshiModal.prototype.save = function ($event) {
        $event.preventDefault();
        var textEL = document.querySelector('#editor .ql-editor');
        console.log(textEL.innerHTML);
    };
    DraftPeshiModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-draft-peshi',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/draft-peshi.html"*/'\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Draft Peshi\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <!-- <span ion-text color="primary" showWhen="ios">Cancel</span> -->\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n	<div id="editor-wrapper">\n	<!-- Create the editor container -->\n	<div id="editor">\n	  <p>Draft the Peshi <strong> here! </strong></p>\n	  <p><br></p>\n	</div>\n	</div>\n	<div padding id="buttons">\n        <ion-grid>\n          <ion-row >\n            <ion-col col-3 offset-6 >\n              <button ion-button color="primary"  (click)="save($event)" block>Save\n              </button>\n            </ion-col>\n            <ion-col col-3>\n              <button ion-button color="primary"  (click)="dismiss()" block>Cancel\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n</ion-content>\n\n\n\n<!-- Initialize Quill editor -->\n<script>\n</script>'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/draft-peshi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], DraftPeshiModal);
    return DraftPeshiModal;
}());

var DraftOrderModal = /** @class */ (function () {
    function DraftOrderModal(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.account = this.navParams.get('account');
        this.order = this.navParams.get('order');
        console.log(this.order);
    }
    DraftOrderModal.prototype.ionViewDidLoad = function () {
        if (this.order == 'Final') {
            var textEL = document.querySelector('#editor-wrapper');
            textEL.classList.add('add-padding');
            return;
        }
        this.quill = new Quill('#editor', {
            theme: 'snow'
        });
        this.quill.on('text-change', function (delta, oldDelta, source) {
        });
    };
    DraftOrderModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    DraftOrderModal.prototype.save = function ($event) {
        $event.preventDefault();
        var textEL = document.querySelector('#editor .ql-editor');
        console.log(textEL.innerHTML);
    };
    DraftOrderModal.prototype.sendForReview = function ($event) {
        var textEL = document.querySelector('#editor .ql-editor');
        console.log(textEL.innerHTML);
        this.viewCtrl.dismiss();
    };
    DraftOrderModal.prototype.final = function ($event) {
        var textEL = document.querySelector('#editor .ql-editor');
        console.log(textEL.innerHTML);
        this.viewCtrl.dismiss();
    };
    DraftOrderModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-draft-order',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/draft-order.html"*/'\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Order\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <!-- <span ion-text color="primary" showWhen="ios">Cancel</span> -->\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n	<div id="editor-wrapper">\n	<!-- Create the editor container -->\n	<div id="editor">\n	  <p>Dummy Order <strong> here! </strong></p>\n	  <p><br></p>\n	</div>\n	</div>\n	<div padding id="buttons">\n        <ion-grid>\n          <ion-row >\n            <ion-col col-3 offset-2 *ngIf="order != \'Final\' && account.type!=\'judge\'"  >\n              <button ion-button color="primary" (click)="save($event)" block>Save\n              </button>\n            </ion-col>\n            <ion-col col-3 offset-2 *ngIf="order != \'Final\' && account.type==\'judge\'" >\n              <button ion-button color="primary"  (click)="final($event)" block>Final\n              </button>\n            </ion-col>\n            <ion-col col-4 *ngIf="order != \'Final\' && account.type==\'steno\' || account.type ==\'lr\'" >\n              <button ion-button color="primary"  (click)="sendForReview($event)" block>Send For Review\n              </button>\n            </ion-col>\n             <ion-col col-4 *ngIf="order != \'Final\' && account.type==\'judge\'" >\n              <button ion-button color="primary"  (click)="sendForReview($event)" block>Send For Correction\n              </button>\n            </ion-col>\n            <ion-col col-3>\n              <button ion-button color="primary"  (click)="dismiss()" block>Close\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n</ion-content>\n\n\n\n<!-- Initialize Quill editor -->\n<script>\n</script>'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/draft-order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], DraftOrderModal);
    return DraftOrderModal;
}());

//# sourceMappingURL=casefile.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return DashboardPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return CourtStaffModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BulkUploadModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return CalendarModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__casefile_casefile__ = __webpack_require__(44);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { data  } from '../../data';
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.caseData = [{
                "courtNumber": "23",
                "roster": "Banking Writs and Petition",
                "bench": "HMJ SM",
                "casefiles": {
                    "supplementary": [
                        {
                            "fileUploaded": true,
                            "itemNo": "01",
                            "caseNo": "CM(M) 671 of 2016",
                            "prevHearingDate": "23/02/2019",
                            "nextHearingDate": "15/08/2019",
                            "isUrgent": false,
                            "orderStatus": "Draft",
                            "special": "Reserved",
                            "matter": "Fresh Matter",
                            "party": "Joginder Singh Vs. Rekha Gupta",
                            // "lastHearingDate": "04-08-2018",
                            "petitionerAdvocate": "Sanjeev Bhandari,Advocate",
                            "respondentAdvocate": "Amit Dhali,Advocate",
                            "caselaws": [
                                "CS(OS) No. 4095 OF 2014 GOLF TECHNOLOGIES (P) LTD VS AXIS BANK LTD. _ ORS.pdf",
                                "Maya Devi vs Lalta Prasad .pdf",
                                " UNITED BANK OF INDIA VS SATYAWATI TONDON AND OTHERS.pdf"
                            ],
                            "legislations": [
                                "Ammendment to SARFAESI Act.pdf",
                                "Securitisation-Act.pdf"
                            ],
                            "notes": "Tenant under SARFAESI."
                        },
                        {
                            "fileUploaded": false,
                            "itemNo": "02",
                            "caseNo": "WP (C) No. 613 of 2018",
                            "prevHearingDate": "05/01/2019",
                            "nextHearingDate": "23/08/2019",
                            "isUrgent": true,
                            "orderStatus": "Final",
                            "special": "Reserved",
                            "matter": "Fresh Matter",
                            "party": "Rahul Anand Vs. Corporation Bank",
                            // "lastHearingDate": "13-09-2018",
                            "petitionerAdvocate": "Rajeeve Mehra,Advocate",
                            "respondentAdvocate": "Pushkar Sood,Advocate",
                            "caselaws": [
                                "LPA 699 OF 2015 AGARWAL TRACOM PVT LTD VS PUNJAB NATIONAL BANK AND ORS.pdf"
                            ],
                            "legislations": [
                                "Ammendment to SARFAESI Act.pdf",
                                "Securitisation-Act.pdf"
                            ],
                            "notes": ""
                        },
                        {
                            "fileUploaded": false,
                            "itemNo": "03",
                            "caseNo": "SLP(C) NO. 18713 OF 2016",
                            "prevHearingDate": "20/02/2019",
                            "nextHearingDate": "03/08/2019",
                            "isUrgent": false,
                            "orderStatus": "Final",
                            "special": "Reserved",
                            "matter": "Fresh Matter",
                            "party": "Maninder Singh Vs. Rajinder Kumar Malhotra &amp; ors.",
                            // "lastHearingDate": "21-10-2018",
                            "petitionerAdvocate": "Sanjeev Bhandari,Advocate",
                            "respondentAdvocate": "Amit Dhali,Advocate",
                            "caselaws": [
                                "Maya Devi vs Lalta Prasad .pdf"
                            ],
                            "legislations": [
                                "Ammendment to SARFAESI Act.pdf",
                                "Securitisation-Act.pdf"
                            ],
                            "notes": ""
                        },
                        {
                            "fileUploaded": true,
                            "itemNo": "04",
                            "caseNo": "WP (C) No. 854 of 2018",
                            "prevHearingDate": "03/02/2019",
                            "nextHearingDate": "24/06/2019",
                            "isUrgent": false,
                            "orderStatus": "Draft",
                            "special": "Reserved",
                            "matter": "Fresh Matter",
                            "party": "Ambica Timber Trade P. Ltd. Vs. Corporation Bank",
                            // "lastHearingDate": "10-10-2018",
                            "petitionerAdvocate": "Rajeeve Mehra,Advocate",
                            "respondentAdvocate": "Pushkar Sood,Advocate",
                            "caselaws": [
                                "CIVIL APPEAL NO. 5990 OF 2010 UNITED BANK OF INDIA VS SATYAWATI TONDON AND OTHERS.pdf",
                                "CS(OS) No. 4095 OF 2014 GOLF TECHNOLOGIES (P) LTD VS AXIS BANK LTD. _ ORS.pdf",
                                "W.P(C) 4344 OF 2015 ONIL SADH VS FEDERAL BANK LTD AND ORS.pdf"
                            ],
                            "legislations": [
                                "Ammendment to SARFAESI Act.pdf",
                                "Securitisation-Act.pdf"
                            ],
                            "notes": ""
                        }
                    ],
                    "advance": [
                        {
                            "fileUploaded": true,
                            "itemNo": "01",
                            "caseNo": "WP(C) NO. 5878 OF 2017",
                            "prevHearingDate": "23/2/2019",
                            "nextHearingDate": "23/08/2019",
                            "isUrgent": true,
                            "orderStatus": "Final",
                            "special": "Reserved",
                            "matter": "For Direction",
                            "party": "Rajesh Manchanda Vs. Canara Bank & ORS.",
                            // "lastHearingDate": "04-08-2018",
                            "petitionerAdvocate": "Sanjeev Bhandari,Advocate",
                            "respondentAdvocate": "Amit Dhali,Advocate",
                            "caselaws": [],
                            "legislations": [
                                "Ammendment to SARFAESI Act.pdf",
                                "Securitisation-Act.pdf"
                            ],
                            "notes": "Tenant under SARFAESI."
                        },
                        {
                            "fileUploaded": true,
                            "itemNo": "02",
                            "caseNo": "WP(C) NO. 6653 OF 2017",
                            "prevHearingDate": "23/2/2019",
                            "nextHearingDate": "23/08/2019",
                            "isUrgent": true,
                            "orderStatus": "Final",
                            "special": "Reserved",
                            "matter": "After Notice",
                            "party": "Rajesh Gems And Jewels P. LTD. Vs. Indian Overseas Bank",
                            // "lastHearingDate": "04-08-2018",
                            "petitionerAdvocate": "Rajeeve Mehra,Advocate",
                            "respondentAdvocate": "Pushkar Sood,Advocate",
                            "caselaws": [],
                            "legislations": [
                                "Ammendment to SARFAESI Act.pdf",
                                "Securitisation-Act.pdf"
                            ],
                            "notes": ""
                        },
                        {
                            "fileUploaded": true,
                            "itemNo": "03",
                            "caseNo": "WP(C) NO. 6742 OF 2018",
                            "prevHearingDate": "28/03/2019",
                            "nextHearingDate": "30/08/2019",
                            "isUrgent": false,
                            "orderStatus": "Final",
                            "special": "Reserved",
                            "matter": "For Direction",
                            "party": "Sonu Grover & Anr. Vs. Allahabad Bank",
                            // "lastHearingDate": "04-08-2018",
                            "petitionerAdvocate": "Sanjeev Bhandari,Advocate",
                            "respondentAdvocate": "Amit Dhali,Advocate",
                            "caselaws": [],
                            "legislations": [
                                "Ammendment to SARFAESI Act.pdf",
                                "Securitisation-Act.pdf"
                            ],
                            "notes": "Tenant under SARFAESI."
                        },
                    ]
                }
            },
            {
                "courtNumber": "34",
                "roster": "Criminal Appeals",
                "bench": "HMJ SB,HMJ SM",
                "casefiles": {
                    "supplementary": [],
                    "advance": []
                }
            }
        ];
        this.eventData = [
            // your event source
            {
                events: [
                    {
                        title: 'WP (C) No. 613 of 2018',
                        start: '2019-04-02',
                    },
                    {
                        title: 'WP (C) No. 854 of 2018',
                        start: '2019-04-02',
                    },
                    {
                        title: 'WP (C) No. 613 of 2018',
                        start: '2019-04-15',
                    },
                    {
                        title: 'WP (C) No. 854 of 2018',
                        start: '2019-04-26',
                    },
                    {
                        title: 'WP (C) No. 613 of 2018',
                        start: '2019-04-26',
                    },
                ],
                color: '#448144',
                textColor: 'white' // an option!
            },
            {
                events: [
                    {
                        title: 'SLP(C) NO. 18713 OF 2016',
                        start: '2019-04-08',
                    },
                    {
                        title: 'WP (C) No. 613 of 2018',
                        start: '2019-04-16',
                    },
                    {
                        title: 'WP (C) No. 613 of 2018',
                        start: '2019-04-20',
                    },
                    {
                        title: 'SLP(C) NO. 18713 OF 2016',
                        start: '2019-04-28',
                    }
                ],
                color: '#d63825',
                textColor: 'white' // an option!
            },
            {
                events: [
                    {
                        title: 'WP (C) No. 613 of 2018',
                        start: '2019-03-11',
                        rendering: 'background'
                    },
                    {
                        title: 'WP (C) No. 613 of 2018',
                        start: '2019-03-06',
                        rendering: 'background'
                    },
                    {
                        title: 'WP (C) No. 613 of 2018',
                        start: '2019-02-05',
                        rendering: 'background'
                    },
                    {
                        title: 'WP (C) No. 613 of 2018',
                        start: '2019-03-25',
                        rendering: 'background'
                    },
                ],
                color: '#f4bf2e',
                textColor: 'green' // an option!
            }
        ];
        this.getTodaysCases();
        this.currentCourt = this.caseData[0];
        this.account = this.navParams.get('account');
        console.log(this.account);
        if (this.account.type == 'judge')
            this.welcomeString = 'HMJ SB';
        else if (this.account.type == 'cs')
            this.welcomeString = 'Court Staff';
        else if (this.account.type == 'lr')
            this.welcomeString = 'LR';
        else if (this.account.type == 'steno')
            this.welcomeString = 'Steno';
        else if (this.account.type == 'restorer')
            this.welcomeString = 'Restorer';
        console.log(this.currentCourt.casefiles.supplementary);
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today = new Date();
        this.date = today.toLocaleDateString("en-US", options);
    };
    DashboardPage.prototype.openCaseFile = function (casefile) {
        console.log('name ' + casefile);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__casefile_casefile__["a" /* CaseFilePage */], {
            'casefile': casefile,
            'court': this.currentCourt,
            'account': this.account
        });
    };
    DashboardPage.prototype.getTodaysCases = function () {
        var today = '2019-04-14';
        this.todaysCases = 0;
        for (var i = 0; i < this.eventData.length; i++) {
            this.todaysCases += this.eventData[i].events.filter(function (event) { return event.start == today; }).length;
        }
    };
    DashboardPage.prototype.openCourtStaffModal = function (casefile) {
        var modal = this.modalCtrl.create(CourtStaffModal, { casefile: casefile, account: this.account });
        modal.present();
    };
    DashboardPage.prototype.bulkUpload = function () {
        var modal = this.modalCtrl.create(BulkUploadModal, { account: this.account });
        modal.present();
    };
    DashboardPage.prototype.openCalendarModal = function () {
        var modal = this.modalCtrl.create(CalendarModal, { account: this.account, eventData: this.eventData });
        modal.present();
    };
    DashboardPage.prototype.open = function (casefile) {
        if (this.account.type == "judge" || this.account.type == "lr" || casefile.fileUploaded)
            this.openCaseFile(casefile);
        else if (this.account.type == "cs" && !casefile.fileUploaded)
            this.openCourtStaffModal(casefile);
    };
    DashboardPage.prototype.hideAll = function (currEle) {
        var allEls = Array.from(document.querySelectorAll('p.header'));
        allEls.forEach(function (el) {
            if (el != currEle) {
                var innerWrapper = el.nextElementSibling;
                el.classList.remove('active');
                innerWrapper.classList.remove('visible-items');
            }
        });
    };
    DashboardPage.prototype.ngIfCtrl = function (ev, court) {
        this.currentCourt = court;
        var currEle = ev.target.closest('.header');
        this.hideAll(currEle);
        var innerWrapper = currEle.nextElementSibling;
        currEle.classList.toggle('active');
        innerWrapper.classList.toggle('visible-items');
        console.log(court);
    };
    DashboardPage.prototype.casefileUrgentUpdate = function (casefile) {
        console.log(casefile.caseNo, casefile.isUrgent);
    };
    DashboardPage.prototype.logout = function () {
        this.navCtrl.popToRoot();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n	<ion-grid class="page-grid">\n  <ion-row class="page-row">\n    <ion-col col-1 class="sidemain">\n      <div class="icon-panel">\n          <div class="logo">\n            <img src="./assets/imgs/appicon.png">\n          </div>\n          <div class="logout" (click)="logout()">\n            <ion-icon name="log-out"></ion-icon>\n          </div>\n      </div>\n    </ion-col>\n    <ion-col col-2 class="sidepane">\n    		<ion-grid>\n  				<ion-row class="profile">\n  					<ion-col>\n							<!-- <img src="./assets/imgs/default_bl.png"> -->\n  						<h4>{{ welcomeString }}</h4>\n  						<!-- <p>Advocate</p> -->\n  				  </ion-col>\n  				</ion-row>\n  				<ion-row class=\'sidepane-menu\'  >\n  					<ion-col >\n              <div class = "sidepane-menu-items">\n                <div class="item-wrapper" *ngFor="let court of caseData">\n                <p class="header" (click)="ngIfCtrl($event,court)">\n                  <span class="icon">\n                    <img src="./assets/icon/court.png">\n                  </span>\n                  <span class="name">\n                    Court Room {{court.courtNumber}}\n                  </span>\n                  </p>\n                  <div class="inner-wrapper">\n                   <p class="header-item">\n                    <span class="item-title">Roster: </span>\n                    <span>{{court.roster}}</span>\n                  </p>\n                  <p class="header-item">\n                    <span class="item-title">Bench:</span>\n                    <span>{{court.bench}}</span>\n                  </p>\n                </div>\n                </div>\n              </div>\n             <!--  <ion-card *ngFor="let court of caseData" (click)="openCourt(court)">\n                <ion-card-header>\n                  Court Room {{court.courtNumber}}\n                </ion-card-header>\n                    <ion-list>\n                      <button ion-item>\n                        <strong>Roster</strong> : {{court.roster}}\n                      </button>\n\n                      <button ion-item>\n                         <strong>Bench</strong> : {{court.bench}}\n                      </button>\n\n                    </ion-list>\n              </ion-card> -->\n  				  </ion-col>\n  				</ion-row>\n          <ion-row class="additional-option">\n            <ion-col>\n             <div *ngIf="account.type==\'cs\'" class = "sidepane-menu-items" (click)="bulkUpload()">\n                <p>\n                  <span class="icon">\n                    <svg width="24" height="24" viewBox="0 0 512 512"><path d="M416 277.333H277.333V416h-42.666V277.333H96v-42.666h138.667V96h42.666v138.667H416v42.666z"/></svg>\n                  </span>\n                  <span class="name">\n                    Bulk Upload Casefiles\n                  </span>\n                  </p>\n                </div>\n              </ion-col>\n          </ion-row>  \n  			</ion-grid>\n    </ion-col>\n    <ion-col col-9 class="main-pane">\n\n      <div class="right-corner">\n        <div class="tooltip">\n        <p id="date" (click)="openCalendarModal()">\n          <span>\n            <ion-icon id="calendar-icon" name="calendar"></ion-icon>\n          </span>\n          <span>\n            {{ date }}\n          </span>\n        </p>\n        <span class="tooltiptext">Today\'s Cases: {{ todaysCases }}</span>\n      </div>\n       <p id="logout" (click)="logout()">Logout</p>\n     </div>\n      <h3 class="heading">Court Room {{ currentCourt.courtNumber }}</h3>\n    	<div class=\'document-list\'>\n    		<ion-card>\n   <ion-card-header>\n    <span class="case-type-header">\n      Supplementary Cases\n    </span>\n    <div id="legend" style="float:right;">\n      <p *ngIf="account.type==\'cs\'"> <span class="color-pallet not-uploaded"></span> <span class="color-pallet-name">Casefile not uploaded</span></p>\n      <p> <span class="color-pallet urgent"></span>  <span class="color-pallet-name">Casefile is Urgent </span></p>\n    </div>\n    <!-- <div id="bulk-upload" style="float: right;">\n     <button ion-button (click)="bulkUpload()">Bulk Upload Casefiles</button>\n   </div> -->\n  </ion-card-header>\n  <ion-list>\n    <ion-item class="doc-list-header" >\n      <div class="title doc-list">\n        <ion-grid style="flex-direction: row;align-items: center;">\n          <ion-row *ngIf="account.type!=\'restorer\'"  style="width:97%" align-items-start>\n            <ion-col col-3>\n                <p>Case Number</p>\n            </ion-col>\n            <ion-col col-1>\n              <p>Matter</p>\n            </ion-col>\n            <ion-col col-4>\n                <p>Party</p>\n            </ion-col>\n            <ion-col col-2>\n                <p>Petitioner Advocate</p>\n            </ion-col>\n            <ion-col col-2>\n                <p>Respondent Advocate</p>\n            </ion-col>\n           <!--  <ion-col col-1>\n                <p>Notes</p>\n            </ion-col> -->\n        </ion-row>\n         <ion-row *ngIf="account.type==\'restorer\'" style="width:97%" align-items-start>\n            <ion-col col-3>\n                <p>Case Number</p>\n            </ion-col>\n            <ion-col col-3>\n              <p>Previous Hearing Date</p>\n            </ion-col>\n            <ion-col col-2>\n               <p>Next Hearing Date</p>\n            </ion-col>\n            <ion-col col-1>\n                <p>Urgent</p>\n            </ion-col>\n            <ion-col col-2>\n                <p>Order Status</p>\n            </ion-col>\n            <ion-col col-1>\n                <p>Special</p>\n            </ion-col>\n           <!--  <ion-col col-1>\n                <p>Notes</p>\n            </ion-col> -->\n        </ion-row>\n        <ion-row style="width:3%" align-items-start>\n             <ion-col *ngIf="account.type==\'cs\'">\n                <!-- <p>Edit</p> -->\n            </ion-col>\n        </ion-row>\n      </ion-grid>\n      </div>\n    </ion-item>\n     <ion-item *ngFor ="let casefile of currentCourt.casefiles.supplementary" [ngClass]="{\'uploaded\': (casefile.fileUploaded && account.type==\'cs\'),\'urgent\': (casefile.isUrgent) , \'not-uploaded\':!casefile.fileUploaded && account.type==\'cs\', \'hidden\': !casefile.fileUploaded && !(account.type==\'cs\') }">\n\n      <div class="doc-list">\n         <ion-grid style="flex-direction: row;align-items: start;">\n          <ion-row *ngIf="account.type!=\'restorer\'" class="details" style="width:97%" align-items-start (click)="open(casefile)">\n            <ion-col col-3>\n                <p> {{casefile.caseNo}} </p>\n            </ion-col>\n            <ion-col col-1>\n              <p> {{casefile.matter}} </p>\n            </ion-col>\n            <ion-col col-4>\n                <p> {{casefile.party}} </p>\n            </ion-col>\n            <ion-col col-2>\n                <p> {{casefile.petitionerAdvocate}} </p>\n            </ion-col>\n            <ion-col col-2>\n                <p> {{casefile.respondentAdvocate}} </p>\n            </ion-col>\n           <!--  <ion-col col-1>\n                <p> {{casefile.notes}} </p>\n            </ion-col> -->\n          </ion-row>\n\n           <ion-row *ngIf="account.type==\'restorer\'" class="details" style="width:97%" align-items-start >\n             <ion-col col-3 (click)="open(casefile)">\n                <p> {{casefile.caseNo}} </p>\n            </ion-col>\n            <ion-col col-3>\n                <p> {{casefile.prevHearingDate}} </p>\n            </ion-col>\n            <ion-col col-2>\n              <p> {{casefile.nextHearingDate}} </p>\n            </ion-col>\n            <ion-col col-1>\n                <p>\n                  <input type="checkbox" [(ngModel)]="casefile.isUrgent" name="isUrgent" (change)="casefileUrgentUpdate(casefile)">\n                </p>\n            </ion-col>\n            <ion-col col-2>\n                <p> {{casefile.orderStatus}} </p>\n            </ion-col>\n            <ion-col col-1>\n                <p> {{casefile.special}} </p>\n            </ion-col>\n           <!--  <ion-col col-1>\n                <p> {{casefile.notes}} </p>\n            </ion-col> -->\n          </ion-row>\n        <ion-row class="options" style="width:3%;" align-items-start>\n          <ion-col col *ngIf="account.type==\'cs\'">\n              <p style="color: black"> \n                <ion-icon *ngIf="casefile.fileUploaded" style="font-size: 1.8em; margin-left: 7px;" name="more"></ion-icon>\n                <ion-icon *ngIf="!casefile.fileUploaded" style="font-size: 1.8em; margin-left: 7px;" name="add" (click)="openCourtStaffModal(casefile)"></ion-icon>\n              </p>\n          </ion-col>\n      </ion-row>\n    </ion-grid>\n      </div>\n    </ion-item>\n    <ion-item *ngIf="currentCourt.casefiles.supplementary.length == 0">\n          <div class="no-files">\n            <p>No CaseFiles</p> \n            </div>\n    </ion-item>\n\n  </ion-list>\n</ion-card>\n\n  <ion-card>\n <ion-card-header>\n  <span class="case-type-header">\n    Advance Cases\n  </span>\n  </ion-card-header>\n  <ion-list>\n    <ion-item class="doc-list-header">\n      <div class="title doc-list">\n        <ion-grid>\n          <ion-row *ngIf="account.type!=\'restorer\'" align-items-center style="width:97%" >\n           <!--  <ion-col col-1>\n                <p>Item No.</p>\n            </ion-col> -->\n            <ion-col col-3>\n                <p>Case Number</p>\n            </ion-col>\n            <ion-col col-1>\n              <p>Matter</p>\n            </ion-col>\n            <ion-col col-4>\n                <p>Party</p>\n            </ion-col>\n            <ion-col col-2>\n                <p>Petitioner Advocate</p>\n            </ion-col>\n            <ion-col col-2>\n                <p>Respondent Advocate</p>\n            </ion-col>\n           <!--  <ion-col col-2>\n                <p>Notes</p>\n            </ion-col> -->\n</ion-row>\n         <ion-row *ngIf="account.type==\'restorer\'" style="width:97%" align-items-start>\n            <ion-col col-3>\n                <p>Case Number</p>\n            </ion-col>\n            <ion-col col-3>\n              <p>Previous Hearing Date</p>\n            </ion-col>\n            <ion-col col-2>\n               <p>Next Hearing Date</p>\n            </ion-col>\n            <ion-col col-1>\n                <p>Urgent</p>\n            </ion-col>\n            <ion-col col-2>\n                <p>Order Status</p>\n            </ion-col>\n            <ion-col col-1>\n                <p>Special</p>\n            </ion-col>\n           <!--  <ion-col col-1>\n                <p>Notes</p>\n            </ion-col> -->\n        </ion-row>\n</ion-grid>\n      </div>\n    </ion-item>\n\n     <ion-item class="uploaded" *ngFor ="let casefile of currentCourt.casefiles.advance" [ngClass]="{\'hidden\': !casefile.fileUploaded }" (click)="open(casefile)">\n      <div class="doc-list">\n         <ion-grid>\n                   <ion-row *ngIf="account.type!=\'restorer\'" class="details" style="width:97%" align-items-start >\n            <ion-col col-3 (click)="open(casefile)">\n                <p> {{casefile.caseNo}} </p>\n            </ion-col>\n            <ion-col col-1>\n              <p> {{casefile.matter}} </p>\n            </ion-col>\n            <ion-col col-4>\n                <p> {{casefile.party}} </p>\n            </ion-col>\n            <ion-col col-2>\n                <p> {{casefile.petitionerAdvocate}} </p>\n            </ion-col>\n            <ion-col col-2>\n                <p> {{casefile.respondentAdvocate}} </p>\n            </ion-col>\n           <!--  <ion-col col-1>\n                <p> {{casefile.notes}} </p>\n            </ion-col> -->\n          </ion-row>\n\n           <ion-row *ngIf="account.type==\'restorer\'" class="details" style="width:97%" align-items-start (click)="open(casefile)">\n             <ion-col col-3>\n                <p> {{casefile.caseNo}} </p>\n            </ion-col>\n            <ion-col col-3>\n                <p> {{casefile.prevHearingDate}} </p>\n            </ion-col>\n            <ion-col col-2>\n              <p> {{casefile.nextHearingDate}} </p>\n            </ion-col>\n            <ion-col col-1>\n                <p>\n                  <input type="checkbox" [checked]="casefile.isUrgent" name="isUrgent">\n                  <!-- <ion-checkbox slot="end" [(ngModel)]="casefile.isUrgent"></ion-checkbox> -->\n                </p>\n            </ion-col>\n            <ion-col col-2>\n                <p> {{casefile.orderStatus}} </p>\n            </ion-col>\n            <ion-col col-1>\n                <p> {{casefile.special}} </p>\n            </ion-col>\n           <!--  <ion-col col-1>\n                <p> {{casefile.notes}} </p>\n            </ion-col> -->\n          </ion-row>\n    </ion-grid>\n      </div>\n    </ion-item>\n    <ion-item *ngIf="currentCourt.casefiles.advance.length == 0">\n          <div class="no-files">\n            <p>No CaseFiles</p> \n            </div>\n    </ion-item>\n\n  </ion-list>\n</ion-card>\n\n</div>\n    </ion-col>\n  </ion-row>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], DashboardPage);
    return DashboardPage;
}());

var CourtStaffModal = /** @class */ (function () {
    function CourtStaffModal(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.account = this.navParams.get('account');
        this.casefile = this.navParams.get('casefile');
        this.caseFileName = this.casefile['name'] + '.pdf';
    }
    CourtStaffModal.prototype.ionViewDidLoad = function () {
        var $this = this;
        this.fileInput = document.querySelector('input[type=file]');
        this.fileWrapper = document.querySelector('#fileUpload .input-wrapper');
        this.fileWrapper.onclick = function () {
            $this.fileInput.click();
        };
        this.fileInput.onchange = function () {
            $this.file = $this.fileInput.files[0];
            $this.caseFileName = $this.file['name'];
        };
    };
    CourtStaffModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CourtStaffModal.prototype.save = function ($event) {
        $event.preventDefault();
        // console.log(this.fileInput.files[0]);
    };
    CourtStaffModal.prototype.openCaseFile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__casefile_casefile__["a" /* CaseFilePage */], {
            'account': this.account
        });
    };
    CourtStaffModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-court-staff',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/dashboard/court-staff-modal.html"*/'\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Verify the Case File Details\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <!-- <span ion-text color="primary" showWhen="ios">Cancel</span> -->\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (submit)="save($event)">\n  <div class="form-wrapper">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Case Number</ion-label>\n        <ion-input type="text" [(ngModel)]="casefile.caseNo" name="caseNo"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Matter</ion-label>\n        <ion-input type="text" [(ngModel)]="casefile.matter" name="matter"></ion-input>\n      </ion-item>\n       <ion-item>\n        <ion-label fixed>Party</ion-label>\n        <ion-input type="text" [(ngModel)]="casefile.party" name="party"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Petitioner Advocate</ion-label>\n        <ion-input type="text" [(ngModel)]="casefile.petitionerAdvocate" name="petitionerAdvocate"></ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label fixed>Respondent Advocate</ion-label>\n        <ion-input type="text" [(ngModel)]="casefile.respondentAdvocate" name="respondentAdvocate"></ion-input>\n      </ion-item>\n\n       <ion-item>\n        <ion-label fixed>Notes</ion-label>\n        <ion-textarea type="text" [(ngModel)]="casefile.notes" name="notes" placeholder="Type your notes here"></ion-textarea>\n      </ion-item>\n\n       <ion-item id="fileUpload">\n        <ion-label><button ion-button (click)="uploadFile()">Upload</button></ion-label>\n        <ion-input type="text" [(ngModel)]="caseFileName" name="caseFileName" readonly></ion-input>\n        <!-- <p id="caseFileName">C:\fakepath\adas</p> -->\n         <ion-input id="fileInput" type="file" name="file" accept="application/pdf" hidden></ion-input>\n      </ion-item>\n\n\n    </ion-list>\n  </div>\n      <div padding>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-3 offset-6 >\n              <button ion-button color="primary"  type="submit" block>Save\n              </button>\n            </ion-col>\n            <ion-col col-3>\n              <button ion-button color="primary"  (click)="dismiss()" block>Cancel\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/dashboard/court-staff-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], CourtStaffModal);
    return CourtStaffModal;
}());

var BulkUploadModal = /** @class */ (function () {
    function BulkUploadModal(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.account = this.navParams.get('account');
        this.casefiles = [{ caseNo: "", caseFileName: "", file: "" }];
        for (var i = 1; i < 5; i++) {
            this.casefiles.push({ caseNo: "", caseFileName: "", file: "" });
        }
        // this.caseFileName = this.casefile.name + '.pdf';
    }
    BulkUploadModal.prototype.init = function () {
        var $this = this;
        for (var i = 1; i < this.casefiles.length; i++) {
            this.fileInput = document.querySelector('#casefile-' + i + ' input[type=file]');
            this.fileWrapper = document.querySelector('#casefile-' + i + ' .fileUpload .input-wrapper');
            this.fileWrapper.onclick = function (ev) {
                ev.preventDefault();
                console.log(this.fileWrapper + 1);
                $this.fileInput.click();
            };
            this.fileInput.onchange = function (ev) {
                console.log(this.fileInput + 1);
                var element = ev.srcElement.parentElement;
                var elId = element.getAttribute("id").split("-")[1];
                $this.casefiles[elId].file = $this.fileInput.files[0];
                $this.casefiles[elId].caseFileName = $this.fileInput.files[0].name;
            };
            console.log(this.fileWrapper.onclick);
            console.log(this.fileInput.onchange);
        }
    };
    BulkUploadModal.prototype.ionViewDidLoad = function () {
        this.init();
    };
    BulkUploadModal.prototype.dismiss = function () {
        console.log(this.casefiles);
        this.viewCtrl.dismiss();
    };
    BulkUploadModal.prototype.save = function ($event) {
        console.log(this.casefiles);
        $event.preventDefault();
        // console.log(this.fileInput.files[0]);
    };
    BulkUploadModal.prototype.openCaseFile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__casefile_casefile__["a" /* CaseFilePage */], {
            'account': this.account
        });
    };
    BulkUploadModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bulk-upload',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/dashboard/bulk-upload-casefile-modal.html"*/'\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Verify the Case File Details\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <!-- <span ion-text color="primary" showWhen="ios">Cancel</span> -->\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (submit)="save($event)">\n  <div class="form-wrapper">\n    <ion-list *ngFor="let casefile of casefiles,let ix = index" id="{{ \'casefile-\' + ix }}">\n       <ion-item>\n        <ion-label fixed>Case Number</ion-label>\n        <ion-input type="text" [(ngModel)]="casefile.caseNo" name="caseNo"></ion-input>\n      </ion-item>\n\n      <ion-item class="fileUpload">\n        <ion-label><button ion-button (click)="uploadFile()">Upload</button></ion-label>\n        <ion-input type="text" [(ngModel)]="casefile.caseFileName" name="caseFileName" readonly></ion-input>\n        <!-- <p id="caseFileName">C:\fakepath\adas</p> -->\n         <ion-input id="{{ \'casefileInput-\' + ix }}" class="fileInput" type="file" name="file" accept="application/pdf" hidden></ion-input>\n      </ion-item>\n\n\n    </ion-list>\n  </div>\n      <div padding>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-3 offset-6 >\n              <button ion-button color="primary"  type="submit" block>Save\n              </button>\n            </ion-col>\n            <ion-col col-3>\n              <button ion-button color="primary"  (click)="dismiss()" block>Cancel\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n  </form>\n</ion-content>'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/dashboard/bulk-upload-casefile-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], BulkUploadModal);
    return BulkUploadModal;
}());

var CalendarModal = /** @class */ (function () {
    function CalendarModal(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        // this.caseFileName = this.casefile.name + '.pdf';
        this.eventData = this.navParams.get('eventData');
    }
    CalendarModal.prototype.init = function () {
    };
    CalendarModal.prototype.ionViewDidLoad = function () {
        $('#calendar').fullCalendar({
            header: {
                left: 'month,agendaWeek,agendaDay',
                center: 'title',
                right: 'prev,next'
            },
            eventSources: this.eventData
        });
    };
    CalendarModal.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    CalendarModal.prototype.save = function ($event) {
        $event.preventDefault();
        // console.log(this.fileInput.files[0]);
    };
    CalendarModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-calendar',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/dashboard/calendar-modal.html"*/'\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Calendar\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <!-- <span ion-text color="primary" showWhen="ios">Cancel</span> -->\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n   <div class="calendar-wrapper">\n      <div id=\'calendar\'></div>\n    </div>\n</ion-content>'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/dashboard/calendar-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], CalendarModal);
    return CalendarModal;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 672:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_welcome_welcome__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(343);
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
    function MyApp(platform, menu, statusBar, splashScreen) {
        this.platform = platform;
        this.menu = menu;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        // make HelloIonicPage the root (or first) page
        this.rootPage = __WEBPACK_IMPORTED_MODULE_2__pages_welcome_welcome__["a" /* WelcomePage */];
        this.initializeApp();
        // set our app's pages
        this.pages = [
            { title: 'Court Doc', component: __WEBPACK_IMPORTED_MODULE_2__pages_welcome_welcome__["a" /* WelcomePage */] },
            { title: 'Login', component: __WEBPACK_IMPORTED_MODULE_3__pages_login_login__["a" /* LoginPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 677:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ResizablePage; });
/* unused harmony export ResizablePage2 */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(37);
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
 * Generated class for the ResizablePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ResizablePage = /** @class */ (function () {
    function ResizablePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.style = {};
    }
    ResizablePage.prototype.validate = function (event) {
        var MIN_DIMENSIONS_PX = 50;
        if (event.rectangle.width &&
            event.rectangle.height &&
            (event.rectangle.width < MIN_DIMENSIONS_PX ||
                event.rectangle.height < MIN_DIMENSIONS_PX)) {
            return false;
        }
        return true;
    };
    ResizablePage.prototype.onResizeEnd = function (event) {
        this.style = {
            position: 'fixed',
            left: event.rectangle.left + "px",
            top: event.rectangle.top + "px",
            width: event.rectangle.width + "px",
            height: event.rectangle.height + "px"
        };
    };
    ResizablePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'mwl-demo',
            styles: [
                "\n      .rectangle {\n        position: relative;\n        top: 200px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        width: 300px;\n        height: 150px;\n        background-color: #fd4140;\n        border: solid 1px #121621;\n        color: #121621;\n        margin: auto;\n      }\n      .resize-handle-top,\n      .resize-handle-bottom {\n        position: absolute;\n        height: 5px;\n        cursor: row-resize;\n        width: 100%;\n      }\n      .resize-handle-top {\n        top: 0;\n      }\n      .resize-handle-bottom {\n        bottom: 0;\n      }\n      .resize-handle-left,\n      .resize-handle-right {\n        position: absolute;\n        height: 100%;\n        cursor: col-resize;\n        width: 5px;\n      }\n      .resize-handle-left {\n        left: 0;\n      }\n      .resize-handle-right {\n        right: 0;\n      }\n    "
            ],
            template: "\n    <div class=\"text-center\">\n      <h1>Drag and pull the edges of the rectangle</h1>\n      <div\n        class=\"rectangle\"\n        [ngStyle]=\"style\"\n        mwlResizable\n        [validateResize]=\"validate\"\n        [enableGhostResize]=\"true\"\n        [resizeSnapGrid]=\"{ left: 50, right: 50 }\"\n        (resizeEnd)=\"onResizeEnd($event)\"\n      >\n        <div\n          class=\"resize-handle-top\"\n          mwlResizeHandle\n          [resizeEdges]=\"{ top: true }\"\n        ></div>\n        <div\n          class=\"resize-handle-left\"\n          mwlResizeHandle\n          [resizeEdges]=\"{ left: true }\"\n        ></div>\n        <div\n          class=\"resize-handle-right\"\n          mwlResizeHandle\n          [resizeEdges]=\"{ right: true }\"\n        ></div>\n        <div\n          class=\"resize-handle-bottom\"\n          mwlResizeHandle\n          [resizeEdges]=\"{ bottom: true }\"\n        ></div>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ResizablePage);
    return ResizablePage;
}());

var ResizablePage2 = /** @class */ (function () {
    function ResizablePage2(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ResizablePage2.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ResizablePage');
    };
    ResizablePage2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-resizable',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/resizable/resizable.html"*/'<!--\n  Generated template for the ResizablePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>resizable</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/resizable/resizable.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ResizablePage2);
    return ResizablePage2;
}());

//# sourceMappingURL=resizable.js.map

/***/ })

},[344]);
//# sourceMappingURL=main.js.map