webpackJsonp([0],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(98);
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
            selector: 'page-welcome',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/welcome/welcome.html"*/'<ion-content scroll="false">\n	<ion-grid>\n  <ion-row>\n    <ion-col col-4 align-self-center offset-4>\n    	<div class="wrap">\n    		<ion-card>\n  <ion-card-content>\n			  <!-- <div class="splash-bg"></div> -->\n			  <div class="splash-info">\n			    <div class="splash-logo"></div>\n			    <div class="splash-intro">\n			      Court Desk App\n			    </div>\n			  </div>\n			  <div padding>\n			    <button ion-button block (click)="signup()">Sign Up</button>\n			    <button ion-button block (click)="login()" class="login">Login</button>\n			  </div>\n			</ion-card-content>\n		</ion-card>\n			  </div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__casefile_casefile__ = __webpack_require__(192);
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
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DashboardPage = /** @class */ (function () {
    function DashboardPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.caseData = [
            {
                'name': 'MANU/DE/9116/2007',
                'filingDate': '31-03-2007',
                'nextHearingDate': '27-02-2019'
            }, {
                'name': 'MANU/WB/0332/1970',
                'filingDate': '31-03-1970',
                'nextHearingDate': '27-02-2019'
            }, {
                'name': 'MANU/RJ/8826/2010',
                'filingDate': '31-03-2010',
                'nextHearingDate': '27-02-2019'
            }, {
                'name': 'MANU/DE/9116/2007',
                'filingDate': '31-03-2007',
                'nextHearingDate': '27-02-2019'
            },
        ];
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.openCaseFile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__casefile_casefile__["a" /* CaseFilePage */]);
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n	<ion-grid class="page-grid">\n  <ion-row >\n    <ion-col col-3 class="sidepane">\n    		<ion-grid>\n  				<ion-row class="profile">\n  					<ion-col>\n							<img src="./assets/imgs/default_bl.png">\n  						<h4>HMJ Lorem Ipsum</h4>\n  						<p>Dolor Sit Amet</p>\n  				  </ion-col>\n  				</ion-row>\n  				<ion-row>\n  					<ion-col class=\'sidepane-menu\'>\n              <ion-card >\n  <ion-card-header>\n    Profile Details\n  </ion-card-header>\n      <ion-list>\n        <button ion-item>\n          Lorem\n        </button>\n\n        <button ion-item>\n          Ipsum\n        </button>\n\n        <button ion-item>\n          Dolor\n        </button>\n\n        <button ion-item>\n          Sit Amet\n        </button>\n\n        <button ion-item>\n          Lorem\n        </button>\n\n        <button ion-item>\n          Space\n        </button>\n\n      </ion-list>\n</ion-card>\n  				  </ion-col>\n  				</ion-row>\n  			</ion-grid>\n    </ion-col>\n    <ion-col col-9>\n    	<h3 class="heading">Documents List</h3>\n    	<div class=\'document-list\'>\n    		<ion-card>\n\n  <ion-list>\n    <button ion-item>\n      <div class="title doc-list">\n        <p>Case Name<p>\n        <p>Filing Date<p>\n        <p>Next Hearing Date<p>\n      </div>\n    </button>\n\n     <button ion-item *ngFor ="let data of caseData" (click)="openCaseFile()">\n      <div class="doc-list">\n        <p>{{data.name}}<p>\n        <p>{{data.filingDate}}<p>\n        <p>{{data.nextHearingDate}}<p>\n      </div>\n    </button>\n\n  </ion-list>\n</ion-card>\n</div>\n    </ion-col>\n  </ion-row>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseFilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
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
 * Generated class for the CasepagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CaseFilePage = /** @class */ (function () {
    function CaseFilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CaseFilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CasepagePage');
    };
    CaseFilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-casefile',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/casefile.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n	<ion-grid class="page-grid">\n  <ion-row >\n    <ion-col col-3 class="sidepane">\n    		<ion-grid>\n  				<ion-row class="profile">\n  					<ion-col>\n							<img src="./assets/imgs/default_bl.png">\n  						<h4>HMJ Lorem Ipsum</h4>\n  						<p>Dolor Sit Amet</p>\n  				  </ion-col>\n  				</ion-row>\n  				<ion-row>\n  					<ion-col class=\'sidepane-menu\'>\n              <ion-card >\n  <ion-card-header>\n    Index\n  </ion-card-header>\n      <ion-list>\n        <button ion-item>\n          Lorem\n        </button>\n\n        <button ion-item>\n          Ipsum\n        </button>\n\n        <button ion-item>\n          Dolor\n        </button>\n\n        <button ion-item>\n          Sit Amet\n        </button>\n\n        <button ion-item>\n          Lorem\n        </button>\n\n        <button ion-item>\n          Space\n        </button>\n\n      </ion-list>\n</ion-card>\n  				  </ion-col>\n  				</ion-row>\n  			</ion-grid>\n    </ion-col>\n    <ion-col col-9>\n    	<div class="toolbar">\n    		<ion-grid>\n          <ion-row>\n            <ion-col col-3>\n              <button ion-button>View Peshi</button>\n              <button ion-button>CL</button>\n            </ion-col>\n            <ion-col col-5>\n              <button ion-button>Highlight</button>\n              <button ion-button>Underline</button>\n              <button ion-button>Add Flag</button>\n            </ion-col>\n            <ion-col col-4>\n              <button ion-button float-right>Close</button>\n              <button ion-button float-right>Fullscreen</button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    	</div>\n    	<div class="pdf-view">\n    		<ion-card>\n\n  <ion-card-content>\n   <div class="viewer">\n    <img src="./assets/imgs/code.png">\n   </div>\n  </ion-card-content>\n\n</ion-card>\n    	</div>\n    </ion-col>\n  </ion-row>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/casefile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], CaseFilePage);
    return CaseFilePage;
}());

//# sourceMappingURL=casefile.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(220);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_casefile_casefile__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(196);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




// import { MaterializeModule } from "angular2-materialize";




// import { ItemDetailsPage } from '../pages/item-details/item-details';
// import { ListPage } from '../pages/list/list';


var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_casefile_casefile__["a" /* CaseFilePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__["a" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_casefile_casefile__["a" /* CaseFilePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_welcome_welcome__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__ = __webpack_require__(196);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(191);
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
            type: 'Lawyer',
            email: 'test@example.com',
            password: 'test'
        };
    }
    // Attempt to login in through our User service
    LoginPage.prototype.doLogin = function () {
        var toast = this.toastCtrl.create({
            message: 'Login Success',
            duration: 3000,
            position: 'top'
        });
        toast.present();
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["a" /* DashboardPage */]);
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
            selector: 'page-login',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/login/login.html"*/'<ion-content>\n<ion-grid>\n  <ion-row>\n    <ion-col col-4 align-self-center offset-4>\n    	<div class="wrap">\n    		<ion-card>\n  <ion-card-header>\n    		<h4>Login</h4>\n  </ion-card-header>\n  <ion-card-content>\n  <form (submit)="doLogin()">\n    <ion-list>\n		  <ion-item>\n		    <ion-label fixed>Profile Type</ion-label>\n		    <ion-select [(ngModel)]="account.type" name="type">\n		      <ion-option value="Lawyer">Lawyer</ion-option>\n		      <ion-option value="Court Staff">Court Staff</ion-option>\n		      <ion-option value="LR">LR</ion-option>\n		    </ion-select>\n		  </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n      </ion-item>\n\n      <!--\n      Want to use a Username instead of an Email? Here you go:\n\n      <ion-item>\n        <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n      </ion-item>\n      -->\n\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>Login\n        </button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-card-content>\n</ion-card>\n</div>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map