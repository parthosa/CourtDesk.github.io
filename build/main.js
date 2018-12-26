webpackJsonp([1],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DashboardPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourtStaffModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__casefile_casefile__ = __webpack_require__(50);
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
    function DashboardPage(navCtrl, navParams, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.caseData = [{
                "courtNumber": "23",
                "roster": "Banking Writs and Petition",
                "bench": "HMJ SM",
                "casefiles": [
                    {
                        "fileUploaded": true,
                        "number": "01",
                        "name": "CM(M) 671 of 2016",
                        "lastHearingDate": "04-08-2018",
                        "advocates": "Sanjeev Bhandari,Advocate; Amit Dhali,Advocate",
                        "caselaws": [
                            "CS(OS) No. 4095 OF 2014 GOLF TECHNOLOGIES (P) LTD VS AXIS BANK LTD. _ ORS.pdf",
                            "Maya Devi vs Lalta Prasad .pdf",
                            " UNITED BANK OF INDIA VS SATYAWATI TONDON AND OTHERS.pdf"
                        ],
                        "legislations": [
                            " UNITED BANK OF INDIA VS SATYAWATI TONDON AND OTHERS.pdf"
                        ]
                    },
                    {
                        "fileUploaded": false,
                        "number": "02",
                        "name": "WP (C) No. 613 of 2018",
                        "lastHearingDate": "13-09-2018",
                        "advocates": "Rajeeve Mehra,Advocate; Pushkar Sood,Advocate",
                        "caselaws": [
                            "LPA 699 OF 2015 AGARWAL TRACOM PVT LTD VS PUNJAB NATIONAL BANK AND ORS.pdf"
                        ],
                        "legislations": [
                            "Maya Devi vs Lalta Prasad .pdf"
                        ]
                    },
                    {
                        "fileUploaded": false,
                        "number": "03",
                        "name": "SLP(C) NO. 18713 OF 2016",
                        "lastHearingDate": "21-10-2018",
                        "advocates": "Sanjeev Bhandari,Advocate; Amit Dhali,Advocate",
                        "caselaws": [
                            "Maya Devi vs Lalta Prasad .pdf"
                        ],
                        "legislations": [
                            "CS(OS) No. 4095 OF 2014 GOLF TECHNOLOGIES (P) LTD VS AXIS BANK LTD. _ ORS.pdf",
                        ]
                    },
                    {
                        "fileUploaded": true,
                        "number": "04",
                        "name": "WP (C) No. 854 of 2018",
                        "lastHearingDate": "10-10-2018",
                        "advocates": "Rajeeve Mehra,Advocate; Pushkar Sood,Advocate",
                        "caselaws": [
                            "CIVIL APPEAL NO. 5990 OF 2010 UNITED BANK OF INDIA VS SATYAWATI TONDON AND OTHERS.pdf",
                            "CS(OS) No. 4095 OF 2014 GOLF TECHNOLOGIES (P) LTD VS AXIS BANK LTD. _ ORS.pdf",
                            "W.P(C) 4344 OF 2015 ONIL SADH VS FEDERAL BANK LTD AND ORS.pdf"
                        ],
                        "legislations": [
                            "CS(OS) No. 4095 OF 2014 GOLF TECHNOLOGIES (P) LTD VS AXIS BANK LTD. _ ORS.pdf",
                        ]
                    }
                ]
            },
            {
                "courtNumber": "34",
                "roster": "Criminal Cases",
                "bench": "HMJ SB,HMJ SM",
                "casefiles": []
            }
        ];
        this.currentCourt = this.caseData[0];
        this.account = this.navParams.get('account');
        console.log(this.account);
        if (this.account.type == 'JG')
            this.welcomeString = 'HMJ SB';
        else if (this.account.type == 'CS')
            this.welcomeString = 'Court Staff';
        else
            this.welcomeString = 'LR';
    }
    DashboardPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DashboardPage');
        var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        var today = new Date(2019, 5, 14);
        this.date = today.toLocaleDateString("en-US", options);
    };
    DashboardPage.prototype.openCaseFile = function (casefile) {
        console.log('name ' + casefile);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__casefile_casefile__["a" /* CaseFilePage */], {
            'casefile': casefile,
            'account': this.account
        });
    };
    DashboardPage.prototype.openCourt = function (court) {
        this.currentCourt = court;
    };
    DashboardPage.prototype.openCourtStaffModal = function (casefile) {
        var modal = this.modalCtrl.create(CourtStaffModal, { casefile: casefile, account: this.account });
        modal.present();
    };
    DashboardPage.prototype.open = function (casefile) {
        if (this.account.type == "JG" || this.account.type == "LR" || casefile.fileUploaded)
            this.openCaseFile(casefile);
        else if (this.account.type == "CS" && !casefile.fileUploaded)
            this.openCourtStaffModal(casefile);
    };
    DashboardPage.prototype.logout = function () {
        this.navCtrl.popToRoot();
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/dashboard/dashboard.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n	<ion-grid class="page-grid">\n  <ion-row class="page-row">\n    <ion-col col-3 class="sidepane">\n    		<ion-grid>\n  				<ion-row class="profile">\n  					<ion-col>\n							<img src="./assets/imgs/default_bl.png">\n  						<h4>Welcome, <strong>{{ welcomeString }}</strong></h4>\n  						<!-- <p>Advocate</p> -->\n  				  </ion-col>\n  				</ion-row>\n  				<ion-row>\n  					<ion-col class=\'sidepane-menu\'>\n              <ion-card *ngFor="let court of caseData" (click)="openCourt(court)">\n                <ion-card-header>\n                  Court Room No. {{court.courtNumber}}\n                </ion-card-header>\n                    <ion-list>\n                      <button ion-item>\n                        <strong>Roster</strong> : {{court.roster}}\n                      </button>\n\n                      <button ion-item>\n                         <strong>Bench</strong> : {{court.bench}}\n                      </button>\n\n                    </ion-list>\n              </ion-card>\n  				  </ion-col>\n  				</ion-row>\n  			</ion-grid>\n    </ion-col>\n    <ion-col col-9>\n      <div class="logout-button">\n        <p id="date">\n          {{ date }}\n        </p>\n       <button ion-button (click)="logout()">Logout</button>\n     </div>\n      <h3 class="heading">Court Room {{ currentCourt.courtNumber }}</h3>\n    	<div class=\'document-list\'>\n    		<ion-card>\n <ion-card-header>\n    Supplementary Cases\n  </ion-card-header>\n  <ion-list>\n    <button ion-item>\n      <div class="title doc-list">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-1>\n                <p>Case No.</p>\n            </ion-col>\n            <ion-col col-3>\n                <p>Case Name</p>\n            </ion-col>\n            <ion-col col-5>\n              <p>Advocates Appearing</p>\n            </ion-col>\n            <ion-col col-2>\n                <p>Last Date of Hearing</p>\n            </ion-col>\n</ion-row>\n</ion-grid>\n      </div>\n    </button>\n\n     <button ion-item *ngFor ="let casefile of currentCourt.casefiles" [ngClass]="{\'uploaded\': casefile.fileUploaded && account.type==\'CS\' , \'not-uploaded\':!casefile.fileUploaded && account.type==\'CS\', \'hidden\': !casefile.fileUploaded && !(account.type==\'CS\') }" (click)="open(casefile)">\n      <div class="doc-list">\n         <ion-grid>\n          <ion-row >\n       <ion-col col-1>\n                <p> {{casefile.number}} </p>\n            </ion-col>\n            <ion-col col-3>\n                <p> {{casefile.name}} </p>\n            </ion-col>\n            <ion-col col-5>\n              <p>\n                {{casefile.advocates}}\n                <!-- <span *ngFor="let advocate of data.advocates;let isLast=last">\n                  {{advocate}}{{isLast ? \'\' : \'; \'}}\n                </span> -->\n              </p>\n            </ion-col>\n            <ion-col col-2>\n                <p> {{casefile.lastHearingDate}} </p>\n            </ion-col>\n      </ion-row>\n    </ion-grid>\n      </div>\n    </button>\n    <button ion-item *ngIf="currentCourt.casefiles.length == 0">\n          <div class="no-files">\n            <p>No CaseFiles</p> \n            </div>\n    </button>\n\n  </ion-list>\n</ion-card>\n\n  <ion-card>\n <ion-card-header>\n    Advance Cases\n  </ion-card-header>\n  <ion-list>\n    <button ion-item>\n      <div class="title doc-list">\n        <ion-grid>\n          <ion-row>\n            <ion-col col-1>\n                <p>Case No.</p>\n            </ion-col>\n            <ion-col col-3>\n                <p>Case Name</p>\n            </ion-col>\n            <ion-col col-5>\n              <p>Advocates Appearing</p>\n            </ion-col>\n            <ion-col col-2>\n                <p>Last Date of Hearing</p>\n            </ion-col>\n</ion-row>\n</ion-grid>\n      </div>\n    </button>\n\n     <button ion-item *ngFor ="let casefile of currentCourt.casefiles" [ngClass]="{\'hidden\': !casefile.fileUploaded }" (click)="open(casefile)">\n      <div class="doc-list">\n         <ion-grid>\n          <ion-row >\n       <ion-col col-1>\n                <p> {{casefile.number}} </p>\n            </ion-col>\n            <ion-col col-3>\n                <p> {{casefile.name}} </p>\n            </ion-col>\n            <ion-col col-5>\n              <p>\n                {{casefile.advocates}}\n                <!-- <span *ngFor="let advocate of casefile.advocates;let isLast=last">\n                  {{advocate}}{{isLast ? \'\' : \'; \'}}\n                </span> -->\n              </p>\n            </ion-col>\n            <ion-col col-2>\n                <p> {{casefile.lastHearingDate}} </p>\n            </ion-col>\n      </ion-row>\n    </ion-grid>\n      </div>\n    </button>\n    <button ion-item *ngIf="currentCourt.casefiles.length == 0">\n          <div class="no-files">\n            <p>No CaseFiles</p> \n            </div>\n    </button>\n\n  </ion-list>\n</ion-card>\n\n</div>\n    </ion-col>\n  </ion-row>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/dashboard/dashboard.html"*/,
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
        this.casefile = this.navParams.get('casefile');
        this.account = this.navParams.get('account');
        // this.caseFileName = this.casefile.name + '.pdf';
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
            $this.caseFileName = $this.file.name;
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
            'casefile': this.casefile,
            'account': this.account
        });
    };
    CourtStaffModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-court-staff',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/dashboard/court-staff-modal.html"*/'\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Verify the Case File Details\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <!-- <span ion-text color="primary" showWhen="ios">Cancel</span> -->\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (submit)="save($event)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Case Number</ion-label>\n        <ion-input type="text" [(ngModel)]="casefile.number" name="number"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Case Name</ion-label>\n        <ion-input type="text" [(ngModel)]="casefile.name" name="name"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Last Hearing Date</ion-label>\n        <ion-input type="text" [(ngModel)]="casefile.lastHearingDate" name="lastHearingDate"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Advocates Appearing</ion-label>\n        <ion-input type="text" [(ngModel)]="casefile.advocates" name="advocates"></ion-input>\n      </ion-item>\n\n       <ion-item>\n        <ion-label fixed>Notes</ion-label>\n        <ion-textarea type="text" [(ngModel)]="casefile.notes" name="notes" placeholder="Type your notes here"></ion-textarea>\n      </ion-item>\n\n       <ion-item id="fileUpload">\n        <ion-label><button ion-button (click)="uploadFile()">Upload</button></ion-label>\n        <ion-input type="text" [(ngModel)]="caseFileName" name="caseFileName" readonly></ion-input>\n        <!-- <p id="caseFileName">C:\fakepath\adas</p> -->\n         <ion-input id="fileInput" type="file" name="file" accept="application/pdf" hidden></ion-input>\n      </ion-item>\n\n      <div padding>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-3 offset-6 >\n              <button ion-button color="primary"  type="submit" block>Save\n              </button>\n            </ion-col>\n            <ion-col col-3>\n              <button ion-button color="primary"  (click)="dismiss()" block>Cancel\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/dashboard/court-staff-modal.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], CourtStaffModal);
    return CourtStaffModal;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 111:
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
webpackEmptyAsyncContext.id = 111;

/***/ }),

/***/ 152:
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
webpackAsyncContext.id = 152;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(99);
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mobiscroll_angular__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_login_login__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_casefile_casefile__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__ = __webpack_require__(196);
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
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["b" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_casefile_casefile__["a" /* CaseFilePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* CourtStaffModal */],
                __WEBPACK_IMPORTED_MODULE_9__pages_casefile_casefile__["b" /* UploadCaselawModal */],
                __WEBPACK_IMPORTED_MODULE_9__pages_casefile_casefile__["c" /* UploadLegislationModal */]
                // PdfViewerModule
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_1__mobiscroll_angular__["a" /* MbscModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/test/test.module#TestPageModule', name: 'TestPage', segment: 'test', priority: 'low', defaultHistory: [] }
                    ]
                }),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["b" /* DashboardPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_casefile_casefile__["a" /* CaseFilePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_dashboard_dashboard__["a" /* CourtStaffModal */],
                __WEBPACK_IMPORTED_MODULE_9__pages_casefile_casefile__["b" /* UploadCaselawModal */],
                __WEBPACK_IMPORTED_MODULE_9__pages_casefile_casefile__["c" /* UploadLegislationModal */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_3__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_welcome_welcome__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_login_login__ = __webpack_require__(99);
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

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CaseFilePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return UploadCaselawModal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return UploadLegislationModal; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_uuid__ = __webpack_require__(265);
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
        this.caselaws = false;
        this.legislation = false;
        this.peshi = false;
        this.casefile = this.navParams.get('casefile');
        this.account = this.navParams.get('account');
        console.log(this.casefile);
        this.baseUrl = 'https://courtdesk.github.io';
        // this.baseUrl = 'http://127.0.0.1:7070';
        this.removedItems = ["pan", "ink-signature", "image", "stamp", "line", "rectangle", "arrow", "ellipse", "polygon", "polyline"];
        // console.dir(PSPDFKit);
    }
    CaseFilePage.prototype.ionViewDidLoad = function () {
        // console.log('ionViewDidLoad CasepagePage');
        this.init();
    };
    CaseFilePage.prototype.init = function () {
        this.caselaws = false;
        this.legislation = false;
        this.peshi = false;
        this.loadPDF("casefile.pdf");
    };
    CaseFilePage.prototype.loadPDF = function (file) {
        var _this = this;
        this.clearPDF();
        var filePath = encodeURI(this.casefile['name']) + "/" + file;
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
        this.loadPDF("Caselaw/" + legislation);
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
    CaseFilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-casefile',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/casefile.html"*/'<!--\n  Generated template for the DashboardPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-content>\n	<ion-grid class="page-grid">\n  <ion-row >\n    <ion-col col-3 class="sidepane" *ngIf="caselaws || legislation">\n         <ion-icon name="arrow-round-back" class="back-icon" (click) = "hideBar()"></ion-icon>\n        <ion-grid>\n          <ion-row class="profile">\n            <ion-col class=\'sidepane-menu\'>\n              <ion-card >\n  <ion-card-header>\n    <span *ngIf="caselaws">Case Laws</span>\n    <span *ngIf="legislation">Legislations</span>\n  </ion-card-header>\n      <ion-list *ngIf="caselaws">\n        <button  ion-item *ngFor ="let caselaw of casefile.caselaws" (click)="openCaseLaw(caselaw)">\n         {{caselaw}}\n        </button>\n      </ion-list>\n      <ion-list *ngIf="legislation">\n        <button  ion-item *ngFor ="let legislation of casefile.legislations" (click)="openLegislation(legislation)">\n         {{legislation}}\n        </button>\n      </ion-list>\n      <button ion-fab *ngIf="caselaws && account.type==\'LR\' " (click)="uploadCaseLaw()"><ion-icon name="add"></ion-icon></button>\n      <button ion-fab *ngIf="legislation && account.type==\'LR\'" (click)="uploadLegislation()"><ion-icon name="add"></ion-icon></button>\n</ion-card>\n  				  </ion-col>\n  				</ion-row>\n  			</ion-grid>\n    </ion-col>\n    <!-- <ion-col col-12> -->\n    <ion-col class="content-area" [ngClass]="{\'full-width\': sidepane==false}">\n    	<div class="toolbar">\n    		<ion-grid>\n          <ion-row>\n            <ion-col col-6 *ngIf="account.type==\'JG\'">\n              \n\n              <button ion-button *ngIf="peshi" (click)="init()" >View Case File</button>\n              <button ion-button *ngIf="!peshi" (click)="viewPeshi()">View Peshi</button>\n              <button ion-button *ngIf="!caselaws" (click)="showBar(\'caselaws\')">Case Laws</button>\n              <button ion-button *ngIf="!legislation" (click)="showBar(\'legislation\')">Legislation</button>\n            </ion-col>\n\n            <ion-col col-6 *ngIf="account.type==\'LR\'">\n              \n\n              <!-- <button ion-button *ngIf="peshi" (click)="init()" >View Case File</button> -->\n              <button ion-button (click)="viewPeshi()">Draft Peshi</button>\n              <button ion-button *ngIf="!caselaws" (click)="showBar(\'caselaws\')">Upload Case Laws</button>\n              <button ion-button *ngIf="!legislation" (click)="showBar(\'legislation\')">Upload Legislation</button>\n            </ion-col>\n         \n            <ion-col col-6 push-6 *ngIf="account.type==\'CS\'">\n              <button ion-button float-right (click)="close()">Close</button>\n              <button ion-button float-right (click)="fullscreen()">Fullscreen</button>\n            </ion-col>\n\n            <ion-col col-6 *ngIf="!(account.type==\'CS\')">\n              <button ion-button float-right (click)="close()">Close</button>\n              <button ion-button float-right (click)="fullscreen()">Fullscreen</button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-12>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n    	</div>\n    	<div class="pdf-view">\n    		<ion-card>\n\n  <ion-card-content>\n   <div class="viewer">\n     <!--  <pdf-viewer [src]="./assets/docs/example.pdf" [render-text]="true" style="display: block;">\n      </pdf-viewer> -->\n    <!--   <object [data]="filePath | safe" width="100%" height="100%" type=\'application/pdf\'>\n   <p>Sorry, the PDF couldn\'t be displayed :(</p>\n </object> -->\n    <div id="pspdfkit" style="width: 100%; height: 100%;"></div>\n   </div>\n  </ion-card-content>\n\n</ion-card>\n    	</div>\n    </ion-col>\n  </ion-row>\n </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/casefile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
    ], CaseFilePage);
    return CaseFilePage;
}());

var UploadCaselawModal = /** @class */ (function () {
    function UploadCaselawModal(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
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
        this.dismiss();
        // console.log(this.fileInput.files[0]);
    };
    UploadCaselawModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload-caselaw',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/upload-caselaw.html"*/'\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Upload New Case Law\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <!-- <span ion-text color="primary" showWhen="ios">Cancel</span> -->\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (submit)="save($event)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Case Title</ion-label>\n        <ion-input type="text" [(ngModel)]="caselaw.title" name="title" placeholder="Enter Case Title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Citation</ion-label>\n        <ion-input type="text" [(ngModel)]="caselaw.citation" name="citation" placeholder="Enter Citation"></ion-input>\n      </ion-item>\n\n\n       <ion-item id="fileUpload">\n        <ion-label><button ion-button (click)="uploadFile()">Upload</button></ion-label>\n        <ion-input type="text" [(ngModel)]="caseLawName" name="caseLawName" readonly></ion-input>\n        <!-- <p id="caseFileName">C:\fakepath\adas</p> -->\n         <ion-input id="fileInput" type="file" name="file" accept="application/pdf" hidden></ion-input>\n      </ion-item>\n\n      <div padding>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-3 offset-6 >\n              <button ion-button color="primary"  type="submit" block>Save\n              </button>\n            </ion-col>\n            <ion-col col-3>\n              <button ion-button color="primary"  (click)="dismiss()" block>Cancel\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/upload-caselaw.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], UploadCaselawModal);
    return UploadCaselawModal;
}());

var UploadLegislationModal = /** @class */ (function () {
    function UploadLegislationModal(navCtrl, navParams, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
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
        this.dismiss();
        // console.log(this.fileInput.files[0]);
    };
    UploadLegislationModal = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-upload-legislation',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/upload-legislation.html"*/'\n<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Upload New Legislation\n    </ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <!-- <span ion-text color="primary" showWhen="ios">Cancel</span> -->\n        <ion-icon name="md-close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <form (submit)="save($event)">\n    <ion-list>\n      <ion-item>\n        <ion-label fixed>Title</ion-label>\n        <ion-input type="text" [(ngModel)]="legislation.title" name="title" placeholder="Enter Title"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Section</ion-label>\n        <ion-input type="text" [(ngModel)]="legislation.citation" name="citation" placeholder="Enter Section"></ion-input>\n      </ion-item>\n      <ion-item>\n        <ion-label fixed>Notes</ion-label>\n        <ion-textarea type="text" [(ngModel)]="legislation.notes" name="notes" placeholder="Type your notes here"></ion-textarea>\n      </ion-item>\n\n       <ion-item id="fileUpload">\n        <ion-label><button ion-button (click)="uploadFile()">Upload</button></ion-label>\n        <ion-input type="text" [(ngModel)]="legislationName" name="legislationName" readonly></ion-input>\n        <!-- <p id="caseFileName">C:\fakepath\adas</p> -->\n         <ion-input id="fileInput" type="file" name="file" accept="application/pdf" hidden></ion-input>\n      </ion-item>\n\n      <div padding>\n        <ion-grid>\n          <ion-row>\n            <ion-col col-3 offset-6 >\n              <button ion-button color="primary"  type="submit" block>Save\n              </button>\n            </ion-col>\n            <ion-col col-3>\n              <button ion-button color="primary"  (click)="dismiss()" block>Cancel\n              </button>\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-content>'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/casefile/upload-legislation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */]])
    ], UploadLegislationModal);
    return UploadLegislationModal;
}());

//# sourceMappingURL=casefile.js.map

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__ = __webpack_require__(100);
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
            type: 'CS',
            username: 'testjudge',
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
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard__["b" /* DashboardPage */], {
            account: this.account,
        });
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
            selector: 'page-login',template:/*ion-inline-start:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/login/login.html"*/'<ion-content>\n<ion-grid>\n  <ion-row>\n    <ion-col col-4 align-self-center offset-4>\n    	<div class="wrap">\n    		<ion-card>\n  <ion-card-header>\n    		<h4>Login</h4>\n  </ion-card-header>\n  <ion-card-content>\n  <form (submit)="doLogin()">\n    <ion-list>\n		  <ion-item>\n		    <ion-label fixed>Profile Type</ion-label>\n		    <ion-select [(ngModel)]="account.type" name="type">\n		      <ion-option value="JG">Judge</ion-option>\n		      <ion-option value="CS">Court Staff</ion-option>\n		      <ion-option value="LR">LR</ion-option>\n		    </ion-select>\n		  </ion-item>\n\n      <ion-item>\n        <ion-label fixed>Username</ion-label>\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n      </ion-item>\n\n      <!--\n      Want to use a Username instead of an Email? Here you go:\n\n      <ion-item>\n        <ion-label floating>{{ \'USERNAME\' | translate }}</ion-label>\n        <ion-input type="text" [(ngModel)]="account.username" name="username"></ion-input>\n      </ion-item>\n      -->\n\n      <ion-item>\n        <ion-label fixed>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="account.password" name="password"></ion-input>\n      </ion-item>\n\n      <div padding>\n        <button ion-button color="primary" block>Login\n        </button>\n      </div>\n\n    </ion-list>\n  </form>\n</ion-card-content>\n</ion-card>\n</div>\n</ion-col>\n</ion-row>\n</ion-grid>\n</ion-content>\n'/*ion-inline-end:"/media/partho/NewDrive/other/lawyer/Lawyer/src/pages/login/login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ })

},[197]);
//# sourceMappingURL=main.js.map