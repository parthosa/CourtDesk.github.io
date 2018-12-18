webpackJsonp([1],{

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
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/test/test.module": [
		273,
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
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
            selector: 'page-welcome',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/welcome/welcome.html"*/'<ion-content scroll="false">\n	<ion-grid>\n  <ion-row>\n    <ion-col col-4 align-self-center offset-4>\n    	<div class="wrap">\n    		<ion-card>\n  <ion-card-content>\n			  <!-- <div class="splash-bg"></div> -->\n			  <div class="splash-info">\n			    <div class="splash-logo"></div>\n			    <div class="splash-intro">\n			      Courtdesk\n			    </div>\n			  </div>\n			  <div padding>\n			    <button ion-button block (click)="login()">Sign Up</button>\n			    <button ion-button block (click)="login()" class="login">Login</button>\n			  </div>\n			</ion-card-content>\n		</ion-card>\n			  </div>\n			</ion-col>\n		</ion-row>\n	</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/welcome/welcome.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
        this.caseData = [{
                "courtNumber": "23",
                "roster": "Banking Writs and Petition",
                "bench": "HMJ SM",
                "data": [
                    {
                        "number": "01",
                        "name": "CM(M) 671 of 2016",
                        "lastHearingDate": "04-08-2018",
                        "advocates": [
                            "Sanjeev Bhandari,Advocate",
                            "Amit Dhali,Advocate"
                        ],
                        "caselaws": [
                            "CS(OS) No. 4095 OF 2014 GOLF TECHNOLOGIES (P) LTD VS AXIS BANK LTD. _ ORS.pdf",
                            "Maya Devi vs Lalta Prasad .pdf",
                            " UNITED BANK OF INDIA VS SATYAWATI TONDON AND OTHERS.pdf"
                        ]
                    },
                    {
                        "number": "02",
                        "name": "WP (C) No. 613 of 2018",
                        "lastHearingDate": "13-09-2018",
                        "advocates": [
                            "Rajeeve Mehra,Advocate",
                            "Pushkar Sood,Advocate"
                        ],
                        "caselaws": [
                            "LPA 699 OF 2015 AGARWAL TRACOM PVT LTD VS PUNJAB NATIONAL BANK AND ORS.pdf"
                        ]
                    },
                    {
                        "number": "03",
                        "name": "SLP(C) NO. 18713 OF 2016",
                        "lastHearingDate": "21-10-2018",
                        "advocates": [
                            "Sanjeev Bhandari,Advocate",
                            "Amit Dhali,Advocate"
                        ],
                        "caselaws": [
                            "Maya Devi vs Lalta Prasad .pdf"
                        ]
                    },
                    {
                        "number": "04",
                        "name": "WP (C) No. 854 of 2018",
                        "lastHearingDate": "10-10-2018",
                        "advocates": [
                            "Rajeeve Mehra,Advocate",
                            "Pushkar Sood,Advocate"
                        ],
                        "caselaws": [
                            "CIVIL APPEAL NO. 5990 OF 2010 UNITED BANK OF INDIA VS SATYAWATI TONDON AND OTHERS.pdf",
                            "CS(OS) No. 4095 OF 2014 GOLF TECHNOLOGIES (P) LTD VS AXIS BANK LTD. _ ORS.pdf",
                            "W.P(C) 4344 OF 2015 ONIL SADH VS FEDERAL BANK LTD AND ORS.pdf"
                        ]
                    }
                ]
            },
            {
                "courtNumber": "34",
                "roster": "Banking Writs and Petition",
                "bench": "HMJ SM",
                "data": []
            }
        ];
        this.currentCourt = this.caseData[0];
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
    };
    DashboardPage.prototype.openCaseFile = function (data) {
        console.log('name ' + data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__casefile_casefile__["a" /* CaseFilePage */], {
            'data': data
        });
    };
    DashboardPage.prototype.openCourt = function (court) {
        this.currentCourt = court;
    };
    DashboardPage.prototype.logout = function () {
        this.navCtrl.popToRoot();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n	<ion-grid class="page-grid">\n  <ion-row class="page-row">\n    <ion-col col-3 class="sidepane">\n    		<ion-grid>\n  				<ion-row class="profile">\n  					<ion-col>\n							<img src="./assets/imgs/default_bl.png">\n  						<h4>Welcome, <strong>HMJ SB</strong></h4>\n  						<!-- <p>Advocate</p> -->\n  				  </ion-col>\n  				</ion-row>\n  				<ion-row>\n  					<ion-col class=\'sidepane-menu\'>\n              <ion-card *ngFor="let court of caseData" (click)="openCourt(court)">\n                <ion-card-header>\n                  Court Room No. {{court.courtNumber}}\n                </ion-card-header>\n                    <ion-list>\n                      <button ion-item>\n                        <strong>Roster</strong> : {{court.roster}}\n                      </button>\n\n                      <button ion-item>\n                         <strong>Bench</strong> : {{court.bench}}\n                      </button>\n\n                    </ion-list>\n              </ion-card>\n  				  </ion-col>\n  				</ion-row>\n  			</ion-grid>\n    </ion-col>\n    <ion-col col-9>\n      <div class="logout-button">\n       <button ion-button (click)="logout()">Logout</button>\n     </div>\n      <h3 class="heading">Court Room {{ currentCourt.courtNumber }}</h3>\n    	<div class=\'document-list\'>\n    		<ion-card>\n\n  <ion-list>\n    <button ion-item>\n      <div class="title doc-list">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-1>\n                <p>Case No.</p>\n            </ion-col>\n            <ion-col col-3>\n                <p>Case Name</p>\n            </ion-col>\n            <ion-col col-5>\n              <p>Advocates Appearing</p>\n            </ion-col>\n            <ion-col col-2>\n                <p>Last Date of Hearing</p>\n            </ion-col>\n</ion-row>\n</ion-grid>\n      </div>\n    </button>\n\n     <button ion-item *ngFor ="let data of currentCourt.data" (click)="openCaseFile(data)">\n      <div class="doc-list">\n         <ion-grid>\n          <ion-row >\n       <ion-col col-1>\n                <p> {{data.number}} </p>\n            </ion-col>\n            <ion-col col-3>\n                <p> {{data.name}} </p>\n            </ion-col>\n            <ion-col col-5>\n              <p>\n                <span *ngFor="let advocate of data.advocates;let isLast=last">\n                  {{advocate}}{{isLast ? \'\' : \'; \'}}\n                </span>\n              </p>\n            </ion-col>\n            <ion-col col-2>\n                <p> {{data.lastHearingDate}} </p>\n            </ion-col>\n      </ion-row>\n    </ion-grid>\n      </div>\n    </button>\n    <button ion-item *ngIf="currentCourt.data.length == 0">\n          <div class="no-files">\n            <p>No CaseFiles</p> \n            </div>\n    </button>\n\n  </ion-list>\n</ion-card>\n</div>\n    </ion-col>\n  </ion-row>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_uuid__ = __webpack_require__(264);
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
    function CaseFilePage(navCtrl, navParams, sanitizer) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.sanitizer = sanitizer;
        this.currentPageIndex = 0;
        this.sidepane = false;
        this.peshi = false;
        this.data = this.navParams.get('data');
        this.baseUrl = 'https://courtdesk.github.io';
        // this.baseUrl = 'http://127.0.0.1:7070';
        this.removedItems = ["annotate", "pan", "ink-signature", "image", "stamp", "line", "rectangle", "arrow", "ellipse", "polygon", "polyline"];
        // console.dir(PSPDFKit);
    }
    CaseFilePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad CasepagePage');
        this.init();
    };
    CaseFilePage.prototype.init = function () {
        this.sidepane = false;
        this.peshi = false;
        this.loadPDF("casefile.pdf");
    };
    CaseFilePage.prototype.loadPDF = function (file) {
        var _this = this;
        this.clearPDF();
        var filePath = encodeURI(this.data['name']) + "/" + file;
        var defaultItems = PSPDFKit.defaultToolbarItems;
        console.log(defaultItems);
        PSPDFKit.load({
            container: "#pspdfkit",
            pdf: this.baseUrl + "/assets/docs/" + filePath,
            instantJSON: JSON.parse(localStorage.getItem(filePath)),
            licenseKey: "pSLTHKcz8tUcSuxxJyXqcCLSnzofPGJDFriLSprnRoDPK7S0F1jO9we4TB0KlG9DKTK2dx-_V8tQVXT_BvnYstUmUI2747YjeyyCh4yFS0hTvDOnkihuaDcX3MQZohJIKcT7GUZmtkmSkF_BlaGhGC8ustuTm45Dl5m1c8gxITdeWmf84LD3RAlqmQlB1JxdjED1ZbPsCt3kHQRXNR0D7vfRBY-YxQz3rxh6YUXMX1UMUBoMMdpeMRBAfCpF_jKDO5tULMA-8fs7ru5gTy-48o2l9UT1lLqEU32nCsyKldkoNopQ7JF5ezry74iw7uGEE2aIT3UApmFYoNYqi_FZy4zDCcy0RmKBrCHAIW6Q3U_FO-_8rJuhSoVSv6fTw7nGERFxh-FuoaNgPIBpC0QFGjkEZ5RhG2QnSY1-h1RWGayqEaEkja1XrQpBtvqizbxs",
            disableWebAssemblyStreaming: true
        })
            .then(function (instance) {
            console.log(instance);
            instance.setViewState(function (viewState) {
                return viewState.set("sidebarMode", PSPDFKit.SidebarMode.ANNOTATIONS);
            });
            if (file === "casefile.pdf") {
                instance.setViewState(function (viewState) {
                    return viewState.set("currentPageIndex", _this.currentPageIndex);
                });
            }
            instance.setToolbarItems(function (items) {
                return items.map(function (item) {
                    console.log(item, item.dropdownGroup);
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
            instance.addEventListener("viewState.change", function (viewState) {
                if (file === "casefile.pdf")
                    _this.currentPageIndex = viewState.get('currentPageIndex');
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
        this.sidepane = false;
        this.init();
    };
    CaseFilePage.prototype.showBar = function () {
        this.sidepane = true;
    };
    CaseFilePage.prototype.openCaseLaw = function (caselaw) {
        this.peshi = false;
        this.loadPDF("Caselaw/" + caselaw);
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
    CaseFilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-casefile',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/casefile.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n	<ion-grid class="page-grid">\n  <ion-row >\n    <ion-col col-3 class="sidepane" *ngIf="sidepane">\n         <ion-icon name="arrow-round-back" class="back-icon" (click) = "hideBar()"></ion-icon>\n        <ion-grid>\n          <ion-row class="profile">\n            <ion-col class=\'sidepane-menu\'>\n              <ion-card >\n  <ion-card-header>\n    Case Laws:\n  </ion-card-header>\n      <ion-list>\n        <button ion-item *ngFor ="let caselaw of data.caselaws" (click)="openCaseLaw(caselaw)">\n         {{caselaw}}\n        </button>\n\n\n      </ion-list>\n</ion-card>\n  				  </ion-col>\n  				</ion-row>\n  			</ion-grid>\n    </ion-col>\n    <!-- <ion-col col-12> -->\n    <ion-col class="content-area" [ngClass]="{\'full-width\': sidepane==false}">\n    	<div class="toolbar">\n    		<ion-grid>\n          <ion-row>\n            <ion-col col-6>\n              \n\n              <button ion-button *ngIf="peshi" (click)="init()" >View Case File</button>\n              <button ion-button *ngIf="!peshi" (click)="viewPeshi()">View Peshi</button>\n              <button ion-button *ngIf="!sidepane" (click)="showBar()">Case Laws</button>\n            </ion-col>\n         \n            <ion-col col-6>\n              <button ion-button float-right (click)="close()">Close</button>\n              <button ion-button float-right (click)="fullscreen()">Fullscreen</button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    	</div>\n    	<div class="pdf-view">\n    		<ion-card>\n\n  <ion-card-content>\n   <div class="viewer">\n     <!--  <pdf-viewer [src]="./assets/docs/example.pdf" [render-text]="true" style="display: block;">\n      </pdf-viewer> -->\n    <!--   <object [data]="filePath | safe" width="100%" height="100%" type=\'application/pdf\'>\n   <p>Sorry, the PDF couldn\'t be displayed :(</p>\n </object> -->\n    <div id="pspdfkit" style="width: 100%; height: 100%;"></div>\n   </div>\n  </ion-card-content>\n\n</ion-card>\n    	</div>\n    </ion-col>\n  </ion-row>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/casefile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]])
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_welcome_welcome__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_dashboard_dashboard__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_casefile_casefile__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__safe_pipe__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(196);
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
                __WEBPACK_IMPORTED_MODULE_7__pages_casefile_casefile__["a" /* CaseFilePage */],
                __WEBPACK_IMPORTED_MODULE_8__safe_pipe__["a" /* SafePipe */]
                // PdfViewerModule
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] }
                    ]
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
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Pages</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SafePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SafePipe = /** @class */ (function () {
    function SafePipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    SafePipe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    SafePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Pipe */])({ name: 'safe' }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]])
    ], SafePipe);
    return SafePipe;
}());

//# sourceMappingURL=safe-pipe.js.map

/***/ }),

/***/ 98:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
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
            type: 'Judge',
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
            selector: 'page-login',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/login/login.html"*/'<ion-content>\n<ion-grid>\n  <ion-row>\n    <ion-col col-4 align-self-center offset-4>\n    	<div class="wrap">\n    		<ion-card>\n  <ion-card-header>\n    		<h4>Login</h4>\n  </ion-card-header>\n  <ion-card-content>\n  <form (submit)="doLogin()">\n    <ion-list>\n		  <ion-item>\n		    <ion-label fixed>Profile Type</ion-label>\n		    <ion-select [(ngModel)]="account.type" name="type">\n		      <ion-option value="Judge">Judge</ion-option>\n		      <ion-option value="Court Staff">Court Staff</ion-option>\n		      <ion-option value="LR">LR</ion-option>\n		    </ion-select>\n		  </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Email</ion-label>\n        <ion-input type="email" [(ngModel)]="account.email" name="email"></ion-input>\n      </ion-item>\n\n      <!--\n      Want to use a Username instead of an Email? Here you go:\n\n      <ion-item>\n        <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n      </ion-item>\n      -->\n\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>Login\n        </button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-card-content>\n</ion-card>\n</div>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map