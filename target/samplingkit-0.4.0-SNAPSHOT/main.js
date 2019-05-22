(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'OBS';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gaurds/auth.guard */ "./src/app/gaurds/auth.guard.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _index_index_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index/index.module */ "./src/app/index/index.module.ts");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.module */ "./src/app/home/home.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _index_index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index/index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./no-page/no-page.component */ "./src/app/no-page/no-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./app.router */ "./src/app/app.router.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_6__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _index_index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _no_page_no_page_component__WEBPACK_IMPORTED_MODULE_12__["NoPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _home_home_module__WEBPACK_IMPORTED_MODULE_4__["HomeModule"],
                _index_index_module__WEBPACK_IMPORTED_MODULE_3__["IndexModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_app_router__WEBPACK_IMPORTED_MODULE_14__["routes"], { useHash: true }),
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_16__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_16__["HashLocationStrategy"] }, _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_1__["AuthGuard"], _services_data_service__WEBPACK_IMPORTED_MODULE_15__["DataService"],],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.router.ts":
/*!*******************************!*\
  !*** ./src/app/app.router.ts ***!
  \*******************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _index_index_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index/index.router */ "./src/app/index/index.router.ts");
/* harmony import */ var _home_home_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.router */ "./src/app/home/home.router.ts");
/* harmony import */ var _no_page_no_page_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./no-page/no-page.router */ "./src/app/no-page/no-page.router.ts");



var routes = _home_home_router__WEBPACK_IMPORTED_MODULE_1__["HomeRoutes"].concat(_index_index_router__WEBPACK_IMPORTED_MODULE_0__["Indexroutes"], _no_page_no_page_router__WEBPACK_IMPORTED_MODULE_2__["NoPageRoute"]);


/***/ }),

/***/ "./src/app/gaurds/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/gaurds/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, routerNavigate) {
        this.authService = authService;
        this.routerNavigate = routerNavigate;
    }
    AuthGuard.prototype.canActivate = function () {
        if (!this.authService.isAuthenticate()) {
            this.routerNavigate.navigate(["login"]);
            return false;
        }
        return true;
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/gaurds/login.guard.ts":
/*!***************************************!*\
  !*** ./src/app/gaurds/login.guard.ts ***!
  \***************************************/
/*! exports provided: LoginGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginGuard", function() { return LoginGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var LoginGuard = /** @class */ (function () {
    function LoginGuard(authService, routerNavigate) {
        this.authService = authService;
        this.routerNavigate = routerNavigate;
    }
    LoginGuard.prototype.canActivate = function () {
        if (this.authService.isAuthenticate()) {
            this.routerNavigate.navigate(['dashboard']);
            return false;
        }
        return true;
    };
    LoginGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], LoginGuard);
    return LoginGuard;
}());



/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.html":
/*!*********************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"app-title\">\n    <div>\n      <h1><i class=\"fa fa-dashboard\"></i> Dashboard</h1>\n      <p>Medintu Web Application</p>\n    </div>\n    <ul class=\"app-breadcrumb breadcrumb\">\n      <li class=\"breadcrumb-item\"><i class=\"fa fa-home fa-lg\"></i></li>\n      <li class=\"breadcrumb-item\"><a href=\"#\">Dashboard</a></li>\n    </ul>\n  </div>\n\n\n  <!-- <div *ngIf=\"role=='ADMIN'\">\n    <h1>Welcome to {{role}}</h1>\n  </div> -->\n<!---For Super admin part-->\n  <div *ngIf=\"role=='SUPERADMIN'\">\n    <h3> Welcome to {{role}}</h3>\n    <!-- <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"tile\">\n            <button type=\"button\" class=\"btn btn-primary float-right\">Add</button>\n          <h3 class=\"tile-title\">Users</h3>\n          <div>\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n                  <th>Firstname</th>\n                  <th>Lastname</th>\n                  <th>Email</th>\n                  <th>Role</th>\n                  <th>Phone No</th>\n                  <th>Status</th>\n                  <th>Edit</th>\n                  <th>Delete</th>\n                  \n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let x of data\">\n                <td>{{x.first_name}}</td>\n                <td>{{x.last_name}}</td>\n                <td>{{x.email}}</td>\n                <td>Admin</td>\n                <td>{{x.phoneno}}</td>\n                <td>{{x.status}}</td>\n                <td>\n                    <span>\n                        <span (click)=\"edit(x)\" class=\"glyphicon glyphicon-pencil\" >\n                          <i class=\"fa fa-edit\" style=\"font-size:24px;color:rgb(49, 17, 233)\"></i>\n                        </span>\n                    </span>\n                </td>\n                <td>\n                    <span>\n                        <span (click)=\"delete(x.id)\" value=\"delete\">\n                          <i class=\"fa fa-trash\" style=\"font-size:24px;color:red\"></i>\n                        </span>\n                    </span>\n                </td>\n                \n                </tr>\n              </tbody>\n            </table>\n        </div>\n        </div>\n      </div>\n    </div> -->\n  </div>\n\n  <div *ngIf=\"role=='SPONSORUSER'\">\n    <h3> Welcome to {{role}}</h3>\n    \n  </div>\n  <div *ngIf=\"role=='SUPPORTUSER'\">\n    <h3> Welcome to {{role}}</h3>\n    \n  </div>\n  \n  \n  \n  <!-- {{userData|json}} -->\n\n  <!-- <div class=\"row\">\n    <div class=\"col-md-6 col-lg-3\">\n      <div class=\"widget-small primary coloured-icon\"><i class=\"icon fa fa-users fa-3x\"></i>\n        <div class=\"info\">\n          <h4>Users</h4>\n          <p><b>5</b></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-lg-3\">\n      <div class=\"widget-small info coloured-icon\"><i class=\"icon fa fa-thumbs-o-up fa-3x\"></i>\n        <div class=\"info\">\n          <h4>Likes</h4>\n          <p><b>25</b></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-lg-3\">\n      <div class=\"widget-small warning coloured-icon\"><i class=\"icon fa fa-files-o fa-3x\"></i>\n        <div class=\"info\">\n          <h4>Uploades</h4>\n          <p><b>10</b></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-lg-3\">\n      <div class=\"widget-small danger coloured-icon\"><i class=\"icon fa fa-star fa-3x\"></i>\n        <div class=\"info\">\n          <h4>Stars</h4>\n          <p><b>500</b></p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"tile\">\n        <h3 class=\"tile-title\">Monthly Sales</h3>\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <canvas class=\"embed-responsive-item\" id=\"lineChartDemo\"></canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"tile\">\n        <h3 class=\"tile-title\">Support Requests</h3>\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <canvas class=\"embed-responsive-item\" id=\"pieChartDemo\"></canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"tile\">\n        <h3 class=\"tile-title\">Features</h3>\n        <ul>\n          <li>Built with Bootstrap 4, SASS and PUG.js</li>\n          <li>Fully responsive and modular code</li>\n          <li>Seven pages including login, user profile and print friendly invoice page</li>\n          <li>Smart integration of forgot password on login page</li>\n          <li>Chart.js integration to display responsive charts</li>\n          <li>Widgets to effectively display statistics</li>\n          <li>Data tables with sort, search and paginate functionality</li>\n          <li>Custom form elements like toggle buttons, auto-complete, tags and date-picker</li>\n          <li>A inbuilt toast library for providing meaningful response messages to user's actions</li>\n        </ul>\n        <p>Vali is a free and responsive admin theme built with Bootstrap 4, SASS and PUG.js. It's fully customizable and modular.</p>\n        <p>Vali is is light-weight, expendable and good looking theme. The theme has all the features required in a dashboard theme but this features are built like plug and play module. Take a look at the <a href=\"http://pratikborsadiya.in/blog/vali-admin\" target=\"_blank\">documentation</a> about customizing the theme colors and functionality.</p>\n        <p class=\"mt-4 mb-4\"><a class=\"btn btn-primary mr-2 mb-2\" href=\"http://pratikborsadiya.in/blog/vali-admin\" target=\"_blank\"><i class=\"fa fa-file\"></i>Webs</a><a class=\"btn btn-info mr-2 mb-2\" href=\"https://github.com/pratikborsadiya/vali-admin\" target=\"_blank\"><i class=\"fa fa-github\"></i>Hubs</a><a class=\"btn btn-success mr-2 mb-2\" href=\"https://github.com/pratikborsadiya/vali-admin/archive/master.zip\" target=\"_blank\"><i class=\"fa fa-download\"></i>Rules</a></p>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"tile\">\n        <h3 class=\"tile-title\">Compatibility with frameworks</h3>\n        <p>This theme is not built for a specific framework or technology like Angular or React etc. But due to it's modular nature it's very easy to incorporate it into any front-end or back-end framework like Angular, React or Laravel.</p>\n        <p>Go to <a href=\"http://pratikborsadiya.in/blog/vali-admin\" target=\"_blank\">documentation</a> for more details about integrating this theme with various frameworks.</p>\n        <p>The source code is available on GitHub. If anything is missing or weird please report it as an issue on <a href=\"https://github.com/pratikborsadiya/vali-admin\" target=\"_blank\">GitHub</a>. If you want to contribute to this theme pull requests are always welcome.</p>\n      </div>\n    </div>\n  </div> -->\n\n\n  <!-- <form [formGroup]=\"myForm\">\n  \n    <div formArrayName=\"phones\">\n  \n        <div *ngFor=\"let phone of phoneForms.controls; let i=index\" \n              [formGroupName]=\"i\">\n  \n            <input formControlName=\"area\">\n            <input formControlName=\"prefix\">\n            <input formControlName=\"line\">\n  \n            <button (click)=\"deletePhone(i)\">Delete</button>\n  \n        </div>\n    </div>\n  \n    <button (click)=\"addPhone()\">Add Phone Number</button>\n  \n  </form> -->\n\n  <!-- <form [formGroup]=\"myForm\" style=\"border:1px solid black\">\n\n    <div>\n        <input type=\"email\" placeholder=\"email\" formControlName=\"email\"><br>\n        <input type=\"text\" placeholder=\"name\" formControlName=\"name\"><br>\n        <input type=\"number\" placeholder=\"phone\" formControlName=\"phone\"><br>\n        <input type=\"text\" placeholder=\"budget\" formControlName=\"budget\"><br>\n        <input type=\"number\" placeholder=\"postCode\" formControlName=\"postCode\"><br>\n    </div>\n  \n    <div formArrayName=\"addressList\">\n  \n        <div *ngFor=\"let phone of addressForm.controls; let i=index\" \n              [formGroupName]=\"i\">\n  \n            <input type=\"text\" formControlName=\"streetNumber\">\n            <input type=\"text\" formControlName=\"streetName1\">\n            <input type=\"text\" formControlName=\"streetName2\">\n            <input type=\"text\" formControlName=\"suit\">\n            <input type=\"text\" formControlName=\"city\">\n            <input type=\"text\" formControlName=\"country\">\n            <input type=\"text\" formControlName=\"district\">\n            <input type=\"text\" formControlName=\"region\">\n            <input type=\"text\" formControlName=\"state\">\n            <input type=\"number\" formControlName=\"zipcode\">\n  \n            <button (click)=\"deleteAddress(i)\">Delete</button>\n  \n        </div>\n    </div>\n    <!--Add RuleList-----------\n    <div formArrayName=\"ruleList\">\n  \n        <div *ngFor=\"let phone of ruleListForm.controls; let i=index\" \n              [formGroupName]=\"i\">\n  \n            <input type=\"text\" formControlName=\"ruleName\">\n            <input type=\"number\" formControlName=\"ruleValue\"> \n\n            <button (click)=\"deleteRulelist(i)\">Delete</button>\n  \n        </div>\n    </div>\n    <!--Add TestCodeList---\n   \n    <div formArrayName=\"testCodeList\">\n  \n        <div *ngFor=\"let phone of testCodeListForm.controls; let i=index\" \n              [formGroupName]=\"i\">\n  \n            <input type=\"text\" formControlName=\"testCode\">\n            <input type=\"number\" formControlName=\"description\"> \n            <input type=\"number\" formControlName=\"testName\"> \n            <input type=\"number\" formControlName=\"testPrice\"> \n             \n            <button (click)=\"deletetestCodeList(i)\">Delete</button>\n  \n        </div>\n    </div>\n  \n    <button (click)=\"addAddress()\">Add Address</button><br><br>\n    <button (click)=\"addRuleList()\">Add Rulelist</button><br><br>\n    <button (click)=\"addTestCodeList()\">Add TestCodeList</button><br><br>\n\n    <button type=\"submit\"  (click)=\"submitForm()\">Save</button>\n  \n  </form> -->\n<!-- \n  <div class=\"app-title\">\n    <div>\n      <h1><i class=\"fa fa-dashboard\"></i> Dashboard</h1>\n      <p>Ojas Bussness Rules Application</p>\n    </div>\n    <ul class=\"app-breadcrumb breadcrumb\">\n      <li class=\"breadcrumb-item\"><i class=\"fa fa-home fa-lg\"></i></li>\n      <li class=\"breadcrumb-item\"><a href=\"#\">Dashboard</a></li>\n    </ul>\n  </div>\n\n\n  <div *ngIf=\"role=='ADMIN'\">\n    <h1>Welcome to {{role}}</h1>\n  </div>\n<!---For Super admin part--\n  <div *ngIf=\"role=='SUBERADMIN'\">\n    <h1> Welcome to {{role}}</h1>\n    <div class=\"row\">\n      <div class=\"col-md-6 col-lg-3\">\n        <div class=\"widget-small primary coloured-icon\"><i class=\"icon fa fa-users fa-3x\"></i>\n          <div class=\"info\">\n            <h4>Users</h4>\n            <!-- <p><b>5</b></p> --\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <div class=\"widget-small info coloured-icon\"><i class=\"icon fa fa-thumbs-o-up fa-3x\"></i>\n          <div class=\"info\">\n            <h4>Likes</h4>\n            <p><b>25</b></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <div class=\"widget-small warning coloured-icon\"><i class=\"icon fa fa-files-o fa-3x\"></i>\n          <div class=\"info\">\n            <h4>Uploades</h4>\n            <p><b>10</b></p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-6 col-lg-3\">\n        <div class=\"widget-small danger coloured-icon\"><i class=\"icon fa fa-star fa-3x\"></i>\n          <div class=\"info\">\n            <h4>Stars</h4>\n            <p><b>500</b></p>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-12\">\n        <div class=\"tile\">\n          <h3 class=\"tile-title\">Users</h3>\n          <button   type=\"button\" class=\"btn btn-primary float-right\">Add</button>\n          <div>\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n                  <th>Firstname</th>\n                  <th>Lastname</th>\n                  <th>Email</th>\n                  <th>Phone No</th>\n                  <th>Action</th>\n                  <th>Status</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr *ngFor=\"let x of data\">\n                <td>{{x.first_name}}</td>\n                <td>{{x.last_name}}</td>\n                <td>{{x.email}}</td>\n                <td>{{x.phoneno}}</td>\n                <td>\n                    <span>\n                        <button (click)=\"edit(x)\" value=\"edit\" >Edite</button>\n                    </span>\n                    <span>\n                        <button (click)=\"delete(x.id)\" value=\"delete\">Delete</button>\n                    </span>\n                </td>\n                <td>{{x.status}}</td>\n                </tr>\n              </tbody>\n            </table>\n        </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div *ngIf=\"role=='USER'\">\n    <h1> Welcome to {{role}}</h1>\n    \n  </div> -->\n  \n  <!-- {{userData|json}} -->\n\n  <!-- <div class=\"row\">\n    <div class=\"col-md-6 col-lg-3\">\n      <div class=\"widget-small primary coloured-icon\"><i class=\"icon fa fa-users fa-3x\"></i>\n        <div class=\"info\">\n          <h4>Users</h4>\n          <p><b>5</b></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-lg-3\">\n      <div class=\"widget-small info coloured-icon\"><i class=\"icon fa fa-thumbs-o-up fa-3x\"></i>\n        <div class=\"info\">\n          <h4>Likes</h4>\n          <p><b>25</b></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-lg-3\">\n      <div class=\"widget-small warning coloured-icon\"><i class=\"icon fa fa-files-o fa-3x\"></i>\n        <div class=\"info\">\n          <h4>Uploades</h4>\n          <p><b>10</b></p>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6 col-lg-3\">\n      <div class=\"widget-small danger coloured-icon\"><i class=\"icon fa fa-star fa-3x\"></i>\n        <div class=\"info\">\n          <h4>Stars</h4>\n          <p><b>500</b></p>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"tile\">\n        <h3 class=\"tile-title\">Monthly Sales</h3>\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <canvas class=\"embed-responsive-item\" id=\"lineChartDemo\"></canvas>\n        </div>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"tile\">\n        <h3 class=\"tile-title\">Support Requests</h3>\n        <div class=\"embed-responsive embed-responsive-16by9\">\n          <canvas class=\"embed-responsive-item\" id=\"pieChartDemo\"></canvas>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-6\">\n      <div class=\"tile\">\n        <h3 class=\"tile-title\">Features</h3>\n        <ul>\n          <li>Built with Bootstrap 4, SASS and PUG.js</li>\n          <li>Fully responsive and modular code</li>\n          <li>Seven pages including login, user profile and print friendly invoice page</li>\n          <li>Smart integration of forgot password on login page</li>\n          <li>Chart.js integration to display responsive charts</li>\n          <li>Widgets to effectively display statistics</li>\n          <li>Data tables with sort, search and paginate functionality</li>\n          <li>Custom form elements like toggle buttons, auto-complete, tags and date-picker</li>\n          <li>A inbuilt toast library for providing meaningful response messages to user's actions</li>\n        </ul>\n        <p>Vali is a free and responsive admin theme built with Bootstrap 4, SASS and PUG.js. It's fully customizable and modular.</p>\n        <p>Vali is is light-weight, expendable and good looking theme. The theme has all the features required in a dashboard theme but this features are built like plug and play module. Take a look at the <a href=\"http://pratikborsadiya.in/blog/vali-admin\" target=\"_blank\">documentation</a> about customizing the theme colors and functionality.</p>\n        <p class=\"mt-4 mb-4\"><a class=\"btn btn-primary mr-2 mb-2\" href=\"http://pratikborsadiya.in/blog/vali-admin\" target=\"_blank\"><i class=\"fa fa-file\"></i>Webs</a><a class=\"btn btn-info mr-2 mb-2\" href=\"https://github.com/pratikborsadiya/vali-admin\" target=\"_blank\"><i class=\"fa fa-github\"></i>Hubs</a><a class=\"btn btn-success mr-2 mb-2\" href=\"https://github.com/pratikborsadiya/vali-admin/archive/master.zip\" target=\"_blank\"><i class=\"fa fa-download\"></i>Rules</a></p>\n      </div>\n    </div>\n    <div class=\"col-md-6\">\n      <div class=\"tile\">\n        <h3 class=\"tile-title\">Compatibility with frameworks</h3>\n        <p>This theme is not built for a specific framework or technology like Angular or React etc. But due to it's modular nature it's very easy to incorporate it into any front-end or back-end framework like Angular, React or Laravel.</p>\n        <p>Go to <a href=\"http://pratikborsadiya.in/blog/vali-admin\" target=\"_blank\">documentation</a> for more details about integrating this theme with various frameworks.</p>\n        <p>The source code is available on GitHub. If anything is missing or weird please report it as an issue on <a href=\"https://github.com/pratikborsadiya/vali-admin\" target=\"_blank\">GitHub</a>. If you want to contribute to this theme pull requests are always welcome.</p>\n      </div>\n    </div>\n  </div> -->\n\n  <!-- <form [formGroup]=\"myForm\" style=\"border:1px solid black\">\n\n    <div>\n        <input type=\"email\" placeholder=\"email\" formControlName=\"email\"><br>\n        <input type=\"text\" placeholder=\"name\" formControlName=\"name\"><br>\n        <input type=\"number\" placeholder=\"phone\" formControlName=\"phone\"><br>\n        <input type=\"text\" placeholder=\"budget\" formControlName=\"budget\"><br>\n        <input type=\"number\" placeholder=\"postCode\" formControlName=\"postCode\"><br>\n    </div>\n  \n    <div formArrayName=\"addressList\">\n  \n        <div *ngFor=\"let phone of addressForm.controls; let i=index\" \n              [formGroupName]=\"i\">\n  \n            <input type=\"text\" formControlName=\"streetNumber\">\n            <input type=\"text\" formControlName=\"streetName1\">\n            <input type=\"text\" formControlName=\"streetName2\">\n            <input type=\"text\" formControlName=\"suit\">\n            <input type=\"text\" formControlName=\"city\">\n            <input type=\"text\" formControlName=\"country\">\n            <input type=\"text\" formControlName=\"district\">\n            <input type=\"text\" formControlName=\"region\">\n            <input type=\"text\" formControlName=\"state\">\n            <input type=\"number\" formControlName=\"zipcode\">\n  \n            <button (click)=\"deleteAddress(i)\">Delete</button>\n  \n        </div>\n    </div>\n    <!--Add RuleList-----------\n    <div formArrayName=\"ruleList\">\n  \n        <div *ngFor=\"let phone of ruleListForm.controls; let i=index\" \n              [formGroupName]=\"i\">\n  \n            <input type=\"text\" formControlName=\"ruleName\">\n            <input type=\"number\" formControlName=\"ruleValue\"> \n\n            <button (click)=\"deleteRulelist(i)\">Delete</button>\n  \n        </div>\n    </div>\n    <!--Add TestCodeList---\n   \n    <div formArrayName=\"testCodeList\">\n  \n        <div *ngFor=\"let phone of testCodeListForm.controls; let i=index\" \n              [formGroupName]=\"i\">\n  \n            <input type=\"text\" formControlName=\"testCode\">\n            <input type=\"number\" formControlName=\"description\"> \n            <input type=\"number\" formControlName=\"testName\"> \n            <input type=\"number\" formControlName=\"testPrice\"> \n             \n            <button (click)=\"deletetestCodeList(i)\">Delete</button>\n  \n        </div>\n    </div>\n  \n    <button (click)=\"addAddress()\">Add Address</button><br><br>\n    <button (click)=\"addRuleList()\">Add Rulelist</button><br><br>\n    <button (click)=\"addTestCodeList()\">Add TestCodeList</button><br><br>\n\n    <button type=\"submit\"  (click)=\"submitForm()\">Save</button>\n  \n  </form> -->"

/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/dashboard/dashboard.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/home/dashboard/dashboard.component.ts ***!
  \*******************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");


// import { AuthService } from '../../services/auth.service';


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(fb, http) {
        this.fb = fb;
        this.http = http;
        // public userData:object
        this.server = "http://localhost:3000/employees";
        this.getUser();
        this.role = sessionStorage.getItem('userRole');
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.myForm = this.fb.group({
            email: '',
            name: '',
            phone: '',
            budget: '',
            postCode: '',
            addressList: this.fb.array([]),
            ruleList: this.fb.array([]),
            testCodeList: this.fb.array([]),
        });
    };
    Object.defineProperty(DashboardComponent.prototype, "addressForm", {
        get: function () {
            return this.myForm.get('addressList');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "ruleListForm", {
        get: function () {
            return this.myForm.get('ruleList');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DashboardComponent.prototype, "testCodeListForm", {
        get: function () {
            return this.myForm.get('testCodeList');
        },
        enumerable: true,
        configurable: true
    });
    DashboardComponent.prototype.addAddress = function () {
        var address = this.fb.group({
            streetNumber: [],
            streetName1: [],
            streetName2: [],
            suit: [],
            city: [],
            country: [],
            district: [],
            region: [],
            state: [],
            zipcode: []
        });
        this.addressForm.push(address);
    };
    DashboardComponent.prototype.deleteAddress = function (i) {
        this.addressForm.removeAt(i);
    };
    //addRulelist&DeleteRulelist
    DashboardComponent.prototype.addRuleList = function () {
        var ruleList = this.fb.group({
            ruleName: [],
            ruleValue: [],
        });
        this.ruleListForm.push(ruleList);
    };
    DashboardComponent.prototype.deleteRulelist = function (i) {
        this.ruleListForm.removeAt(i);
    };
    //testCodeList Add & Remove
    DashboardComponent.prototype.addTestCodeList = function () {
        var testCodeList = this.fb.group({
            testCode: [],
            description: [],
            testName: [],
            testPrice: [],
        });
        this.testCodeListForm.push(testCodeList);
    };
    DashboardComponent.prototype.deletetestCodeList = function (i) {
        this.testCodeListForm.removeAt(i);
    };
    //Api call for Get employee data
    DashboardComponent.prototype.getUser = function () {
        var _this = this;
        this.http.get(this.server).subscribe(function (data) {
            _this.data = data;
            console.log("ufhsdjf", data);
        });
    };
    DashboardComponent.prototype.edit = function () {
        alert("edit data");
    };
    DashboardComponent.prototype.delete = function () {
        alert("delete data");
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/home/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/home/dashboard/dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/home/ethenicgroup/ethenicgroup.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/ethenicgroup/ethenicgroup.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\n  <div>\n    <h1><i class=\"fa fa-th-list\"></i> Ethenic</h1>\n    <p>Create Ethenic Details</p>\n  </div>\n  <ul class=\"app-breadcrumb breadcrumb\">\n     <li class=\"breadcrumb-item\"><i class=\"fa fa-home fa-lg\"></i></li> \n  </ul>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n        <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\n          </div>\n    </div>\n    <div class=\"col-md-9\">\n        <button class=\"btn btn-danger mr-2 mb-2 pull-right\" data-toggle=\"modal\" data-backdrop=\"static\"  data-target=\"#myModal\"><i class=\"fa fa-plus\"></i>Add Ethenic</button>\n    </div>\n  </div>\n<div class=\"row\">\n \n  <div class=\"col-md-12\">\n    \n    <div class=\"tile\">\n      <h3 class=\"tile-title\">Ethnic Details </h3>\n   \n      <table class=\"table\">\n        <thead>\n          <tr>\n            <th>#</th>\n            <th>Group Name</th>\n            <th>Group Type</th>\n             <th>Action</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let item of ethenicData | filter:term |paginate: { itemsPerPage: 10, currentPage: p }; let i = index\">\n            <td>{{i+1}}</td>\n            <td>\n              <div *ngIf=\"!item.isEditable2\">\n                  {{item.ethnicName}}\n              </div>\n             \n              <select *ngIf=\"item.isEditable2\" class=\"form-control\" [(ngModel)]=\"item.ethnicName\">\n                  <option value=\"white\">White</option>\n                  <option value=\"Mixed\">Mixed</option>\n                  <option value=\"British\">British</option>\n                  <option value=\"Black British\">Black British</option>\n                </select>\n             \n            </td>\n              <td>\n                <div *ngIf=\"!item.isEditable2\">\n                    {{item.ethnicType}}\n                </div>\n                <input type=\"text\" *ngIf=\"item.isEditable2\" class=\"form-control\" [(ngModel)]=\"item.ethnicType\">\n              </td>\n             \n            <td>\n                <button class=\"btn btn-info btn-sm\" (click)=\"item.isEditable2=!item.isEditable2\" *ngIf=\"!item.isEditable2\">Edit</button>\n                <button  class=\"btn btn-success btn-sm\" *ngIf=\"item.isEditable2\" (click)=\"item.isEditable2=!item.isEditable2;updateEthenicData(item)\">Save</button>            \n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    <pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\n  <!-- Modal -->\n\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n    \n      <!-- Modal content-->\n      <form [formGroup]=\"ethenicForm\" (ngSubmit)=\"createEthenic(ethenicForm.value);ethenicForm.reset();\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Ethenic Details</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n            <div class=\"form-group\">\n                <label for=\"groupname\">Group Name:</label>\n                 <select class=\"form-control\"  formControlName=\"ethnicName\">\n                    <option value=\"white\">White</option>\n                    <option value=\"Mixed\">Mixed</option>\n                    <option value=\"British\">British</option>\n                    <option value=\"Black British\">Black British</option>\n                  </select>\n                  <span class=\"text text-danger\" *ngIf=\"ethenicForm.controls['ethnicName'].invalid && ethenicForm.controls['ethnicName'].touched\">Test Name is required</span>\n              </div>\n            <div class=\"form-group\">\n              <label for=\"grouptype\">Group Type:</label>\n              <input type=\"text\" class=\"form-control\" id=\"grouptype\"  formControlName=\"ethnicType\"  required>\n              <span class=\"text text-danger\" *ngIf=\"ethenicForm.controls['ethnicType'].invalid && ethenicForm.controls['ethnicType'].touched\">Test Name is required</span>\n            </div>\n          \n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n          <input type=\"submit\"  class=\"btn btn-success\" [disabled]=\"ethenicForm.invalid\"  value=\"Submit\">\n          </div>\n      </div>\n      </form>\n      \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/ethenicgroup/ethenicgroup.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/ethenicgroup/ethenicgroup.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvZXRoZW5pY2dyb3VwL2V0aGVuaWNncm91cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/ethenicgroup/ethenicgroup.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/ethenicgroup/ethenicgroup.component.ts ***!
  \*************************************************************/
/*! exports provided: EthenicgroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EthenicgroupComponent", function() { return EthenicgroupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var EthenicgroupComponent = /** @class */ (function () {
    function EthenicgroupComponent(dataService, fb) {
        this.dataService = dataService;
        this.fb = fb;
        this.ethenicData = [];
        this.getAllEthenic();
    }
    EthenicgroupComponent.prototype.createEthenic = function (formData) {
        var _this = this;
        $('#myModal').modal('hide');
        this.dataService.setEthenic(formData).subscribe(function (data) {
            _this.getAllEthenic();
        });
    };
    EthenicgroupComponent.prototype.getAllEthenic = function () {
        var _this = this;
        this.dataService.getEthenic().subscribe(function (data) {
            _this.ethenicData = data.resultData;
            console.log("Ethnic Data", _this.ethenicData);
        });
    };
    EthenicgroupComponent.prototype.updateEthenicData = function (item) {
        delete item['isEditable2'];
        this.dataService.updateEthenicData(item).subscribe(function (data) {
        });
    };
    EthenicgroupComponent.prototype.ngOnInit = function () {
        this.ethenicForm = this.fb.group({
            'ethnicType': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'ethnicName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    EthenicgroupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-ethenicgroup',
            template: __webpack_require__(/*! ./ethenicgroup.component.html */ "./src/app/home/ethenicgroup/ethenicgroup.component.html"),
            styles: [__webpack_require__(/*! ./ethenicgroup.component.scss */ "./src/app/home/ethenicgroup/ethenicgroup.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], EthenicgroupComponent);
    return EthenicgroupComponent;
}());



/***/ }),

/***/ "./src/app/home/help/help.component.html":
/*!***********************************************!*\
  !*** ./src/app/home/help/help.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  help works!\n</p>\n"

/***/ }),

/***/ "./src/app/home/help/help.component.scss":
/*!***********************************************!*\
  !*** ./src/app/home/help/help.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaGVscC9oZWxwLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/help/help.component.ts":
/*!*********************************************!*\
  !*** ./src/app/home/help/help.component.ts ***!
  \*********************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HelpComponent = /** @class */ (function () {
    function HelpComponent() {
    }
    HelpComponent.prototype.ngOnInit = function () {
    };
    HelpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-help',
            template: __webpack_require__(/*! ./help.component.html */ "./src/app/home/help/help.component.html"),
            styles: [__webpack_require__(/*! ./help.component.scss */ "./src/app/home/help/help.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HelpComponent);
    return HelpComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"app sidebar-mini rtl\">\n    <header class=\"app-header\">\t\n      \n      <div class=\"logo logo_three\">\n        <a href=\"#\"><img src=\"assets/img/img/logo.png\" style=\"width: 98px;\" alt=\"\"></a>\n      </div>\n      \n      <!-- Sidebar toggle button--><a class=\"app-sidebar__toggle\" href=\"#\" style=\"margin-left: 195px;\" data-toggle=\"sidebar\" aria-label=\"Hide Sidebar\"></a>\n      <!-- Navbar Right Menu-->\n      <ul class=\"app-nav\">\n        <li class=\"app-search\">\n          <input class=\"app-search__input\" type=\"search\" placeholder=\"Search\">\n          <button class=\"app-search__button\"><i class=\"fa fa-search\"></i></button>\n        </li>\n        <!--Notification Menu-->\n        <li class=\"dropdown\"><a class=\"app-nav__item\" href=\"#\" data-toggle=\"dropdown\" aria-label=\"Show notifications\"><i class=\"fa fa-bell-o fa-lg\"></i></a>\n          <ul class=\"app-notification dropdown-menu dropdown-menu-right\">\n            <li class=\"app-notification__title\">You have 4 new notifications.</li>\n            <div class=\"app-notification__content\">\n              <li><a class=\"app-notification__item\" href=\"javascript:;\"><span class=\"app-notification__icon\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x text-primary\"></i><i class=\"fa fa-envelope fa-stack-1x fa-inverse\"></i></span></span>\n                  <div>\n                    <p class=\"app-notification__message\">Lisa sent you a mail</p>\n                    <p class=\"app-notification__meta\">2 min ago</p>\n                  </div></a></li>\n              <li><a class=\"app-notification__item\" href=\"javascript:;\"><span class=\"app-notification__icon\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x text-danger\"></i><i class=\"fa fa-hdd-o fa-stack-1x fa-inverse\"></i></span></span>\n                  <div>\n                    <p class=\"app-notification__message\">Mail server not working</p>\n                    <p class=\"app-notification__meta\">5 min ago</p>\n                  </div></a></li>\n              <li><a class=\"app-notification__item\" href=\"javascript:;\"><span class=\"app-notification__icon\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x text-success\"></i><i class=\"fa fa-money fa-stack-1x fa-inverse\"></i></span></span>\n                  <div>\n                    <p class=\"app-notification__message\">Transaction complete</p>\n                    <p class=\"app-notification__meta\">2 days ago</p>\n                  </div></a></li>\n              <div class=\"app-notification__content\">\n                <li><a class=\"app-notification__item\" href=\"javascript:;\"><span class=\"app-notification__icon\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x text-primary\"></i><i class=\"fa fa-envelope fa-stack-1x fa-inverse\"></i></span></span>\n                    <div>\n                      <p class=\"app-notification__message\">Lisa sent you a mail</p>\n                      <p class=\"app-notification__meta\">2 min ago</p>\n                    </div></a></li>\n                <li><a class=\"app-notification__item\" href=\"javascript:;\"><span class=\"app-notification__icon\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x text-danger\"></i><i class=\"fa fa-hdd-o fa-stack-1x fa-inverse\"></i></span></span>\n                    <div>\n                      <p class=\"app-notification__message\">Mail server not working</p>\n                      <p class=\"app-notification__meta\">5 min ago</p>\n                    </div></a></li>\n                <li><a class=\"app-notification__item\" href=\"javascript:;\"><span class=\"app-notification__icon\"><span class=\"fa-stack fa-lg\"><i class=\"fa fa-circle fa-stack-2x text-success\"></i><i class=\"fa fa-money fa-stack-1x fa-inverse\"></i></span></span>\n                    <div>\n                      <p class=\"app-notification__message\">Transaction complete</p>\n                      <p class=\"app-notification__meta\">2 days ago</p>\n                    </div></a></li>\n              </div>\n            </div>\n            <li class=\"app-notification__footer\"><a href=\"#\">See all notifications.</a></li>\n          </ul>\n        </li>\n        <!-- User Menu-->\n        <li class=\"dropdown\"><a class=\"app-nav__item\" href=\"#\" data-toggle=\"dropdown\" aria-label=\"Open Profile Menu\"><i class=\"fa fa-user fa-lg\"></i></a>\n          <ul class=\"dropdown-menu settings-menu dropdown-menu-right\">\n            <li><a class=\"dropdown-item\" href=\"page-user.html\"><i class=\"fa fa-cog fa-lg\"></i> Settings</a></li>\n            <li><a class=\"dropdown-item\" href=\"page-user.html\"><i class=\"fa fa-user fa-lg\"></i> Profile</a></li>\n            <li  (click)=\"logoutAction()\"><a class=\"dropdown-item\" href=\"\"><i class=\"fa fa-sign-out fa-lg\"></i> Logout</a></li>\n          </ul>\n        </li>\n      </ul>\n    </header>\n    <!-- Sidebar menu-->\n    <div class=\"app-sidebar__overlay\" data-toggle=\"sidebar\"></div>\n    <aside class=\"app-sidebar\">\n      <div class=\"app-sidebar__user\"><img class=\"app-sidebar__user-avatar\" src=\"https://s3.amazonaws.com/uifaces/faces/twitter/jsa/48.jpg\" alt=\"User Image\">\n        <div>\n          <p class=\"app-sidebar__user-name\">{{role}}</p>\n         \n        </div>\n      </div>\n      <ul class=\"app-menu\" *ngIf=\"role=='SUPERADMIN'\">\n        <li><a class=\"app-menu__item active\"  routerLink=\"/dashboard\" routerLinkActive=\"active\"><i class=\"app-menu__icon fa fa-dashboard\"></i><span class=\"app-menu__label\">Dashboard</span></a></li>\n       \n         <li class=\"treeview\"><a class=\"app-menu__item\" href=\"#\" data-toggle=\"treeview\"><i class=\"app-menu__icon fa fa-edit\"></i><span class=\"app-menu__label\">Management</span><i class=\"treeview-indicator fa fa-angle-right\"></i></a>\n          <ul class=\"treeview-menu\">\n            <li><a class=\"treeview-item\"   routerLink=\"/users\" routerLinkActive=\"active\"><i class=\"icon fa fa-users\"></i>&nbsp;Users</a></li>\n            <li><a class=\"treeview-item\"  routerLink=\"/sponsorUser\" routerLinkActive=\"active\"><i class=\"icon fa fa-user\"></i>&nbsp;Commissioner</a></li>\n            <li><a class=\"treeview-item\"  routerLink=\"/ethenicgroup\" routerLinkActive=\"active\"><i class=\"icon fa fa-users\"></i>&nbsp;Ethnic Group</a></li>\n\t\t\t      <li><a class=\"treeview-item\"  routerLink=\"/status\" routerLinkActive=\"active\"><i class=\"icon fa fa-quora\"></i>&nbsp;Status</a></li>\n\n            <li><a class=\"treeview-item\"  routerLink=\"/specialevent\" routerLinkActive=\"active\"><i class=\"icon fa fa-calendar\"></i>&nbsp;Special Event</a></li>\n             <li><a class=\"treeview-item\"  routerLink=\"/testcode\" routerLinkActive=\"active\"><i class=\"fa fa-hand-o-up\" aria-hidden=\"true\"></i>&nbsp;Test Code</a></li>       \n             <li><a class=\"treeview-item\"  routerLink=\"/postalcode\" routerLinkActive=\"active\"><i class=\"fa fa-hand-o-up\" aria-hidden=\"true\"></i>&nbsp;District Codes</a></li>       \n             <li><a class=\"treeview-item\"  routerLink=\"/servicerequest\" routerLinkActive=\"active\"><i class=\"icon fa fa-user\"></i>Order Request</a></li>\n          </ul>\n          \n        </li><hr>\n        <li><a class=\"app-menu__item\" href=\"\" (click)=\"logoutAction()\"><i class=\"app-menu__icon fa fa-sign-out\"></i><span class=\"app-menu__label\">Logout</span></a></li>\n      </ul>\n      <ul class=\"app-menu\" *ngIf=\"role=='SPONSORUSER'\">\n          <li><a class=\"app-menu__item active\"  routerLink=\"/dashboard\" routerLinkActive=\"active\"><i class=\"app-menu__icon fa fa-dashboard\"></i><span class=\"app-menu__label\">Dashboard</span></a></li>\n         \n           <li class=\"treeview\"><a class=\"app-menu__item\" href=\"#\" data-toggle=\"treeview\"><i class=\"app-menu__icon fa fa-edit\"></i><span class=\"app-menu__label\">Management</span><i class=\"treeview-indicator fa fa-angle-right\"></i></a>\n            <ul class=\"treeview-menu\">\n              <li><a class=\"treeview-item\"   routerLink=\"/userdetail\" routerLinkActive=\"active\"><i class=\"icon fa fa-users\"></i>Users</a></li>\n              <li><a class=\"treeview-item\"  routerLink=\"/sponsordetail\" routerLinkActive=\"active\"><i class=\"icon fa fa-user\"></i>Commissioner</a></li>\n              <li><a class=\"treeview-item\"  routerLink=\"/servicerequest\" routerLinkActive=\"active\"><i class=\"icon fa fa-user\"></i>Order Request</a></li>\n            </ul>\n            \n          </li><hr>\n          <li><a class=\"app-menu__item\" href=\"\" (click)=\"logoutAction()\"><i class=\"app-menu__icon fa fa-sign-out\"></i><span class=\"app-menu__label\">Logout</span></a></li>\n        </ul>\n          \n        <ul class=\"app-menu\" *ngIf=\"role=='SUPPORTUSER'\">\n          <li><a class=\"app-menu__item active\"  routerLink=\"/dashboard\" routerLinkActive=\"active\"><i class=\"app-menu__icon fa fa-dashboard\"></i><span class=\"app-menu__label\">Dashboard</span></a></li>\n         \n           <li class=\"treeview\"><a class=\"app-menu__item\" href=\"#\" data-toggle=\"treeview\"><i class=\"app-menu__icon fa fa-edit\"></i><span class=\"app-menu__label\">Management</span><i class=\"treeview-indicator fa fa-angle-right\"></i></a>\n            <ul class=\"treeview-menu\">\n             <li><a class=\"treeview-item\"  routerLink=\"/servicerequest\" routerLinkActive=\"active\"><i class=\"icon fa fa-user\"></i>Order Request</a></li>\n            </ul>\n            \n          </li><hr>\n          <li><a class=\"app-menu__item\" href=\"\" (click)=\"logoutAction()\"><i class=\"app-menu__icon fa fa-sign-out\"></i><span class=\"app-menu__label\">Logout</span></a></li>\n        </ul>\n\n    </aside>\n    <main  class=\"app-content\">\n      <router-outlet></router-outlet>\n    </main>\n    </div>\n    \n    "

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(authService, routerNavigate) {
        this.authService = authService;
        this.routerNavigate = routerNavigate;
        this.role = sessionStorage.getItem('userRole');
    }
    HomeComponent.prototype.logoutAction = function () {
        if (this.authService.logOutAction()) {
            this.routerNavigate.navigate(['login']);
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $(".push_menu").click(function () {
                $(".wrapper").toggleClass("active");
            });
            (function () {
                "use strict";
                var treeviewMenu = $('.app-menu');
                // Toggle Sidebar
                $('[data-toggle="sidebar"]').click(function (event) {
                    event.preventDefault();
                    $('.app').toggleClass('sidenav-toggled');
                });
                // Activate sidebar treeview toggle
                $("[data-toggle='treeview']").click(function (event) {
                    event.preventDefault();
                    if (!$(this).parent().hasClass('is-expanded')) {
                        treeviewMenu.find("[data-toggle='treeview']").parent().removeClass('is-expanded');
                    }
                    $(this).parent().toggleClass('is-expanded');
                });
                // Set initial active toggle
                $("[data-toggle='treeview.'].is-expanded").parent().toggleClass('is-expanded');
                //Activate bootstrip tooltips
                $("[data-toggle='tooltip']").tooltip();
            })();
        });
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var _report_report_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./report/report.component */ "./src/app/home/report/report.component.ts");
/* harmony import */ var _help_help_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./help/help.component */ "./src/app/home/help/help.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./users/users.component */ "./src/app/home/users/users.component.ts");
/* harmony import */ var _sponsor_user_sponsor_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sponsor-user/sponsor-user.component */ "./src/app/home/sponsor-user/sponsor-user.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ethenicgroup_ethenicgroup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ethenicgroup/ethenicgroup.component */ "./src/app/home/ethenicgroup/ethenicgroup.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./status/status.component */ "./src/app/home/status/status.component.ts");
/* harmony import */ var _specialevent_specialevent_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./specialevent/specialevent.component */ "./src/app/home/specialevent/specialevent.component.ts");
/* harmony import */ var _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./userdetails/userdetails.component */ "./src/app/home/userdetails/userdetails.component.ts");
/* harmony import */ var _sponsordetails_sponsordetails_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./sponsordetails/sponsordetails.component */ "./src/app/home/sponsordetails/sponsordetails.component.ts");
/* harmony import */ var _servicerequest_servicerequest_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./servicerequest/servicerequest.component */ "./src/app/home/servicerequest/servicerequest.component.ts");
/* harmony import */ var _testcode_testcode_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./testcode/testcode.component */ "./src/app/home/testcode/testcode.component.ts");
/* harmony import */ var _postalcode_postalcode_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./postalcode/postalcode.component */ "./src/app/home/postalcode/postalcode.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.es5.js");





















var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _report_report_component__WEBPACK_IMPORTED_MODULE_4__["ReportComponent"], _help_help_component__WEBPACK_IMPORTED_MODULE_5__["HelpComponent"], _users_users_component__WEBPACK_IMPORTED_MODULE_7__["UsersComponent"], _sponsor_user_sponsor_user_component__WEBPACK_IMPORTED_MODULE_8__["SponsorUserComponent"], _ethenicgroup_ethenicgroup_component__WEBPACK_IMPORTED_MODULE_10__["EthenicgroupComponent"], _status_status_component__WEBPACK_IMPORTED_MODULE_11__["StatusComponent"], _specialevent_specialevent_component__WEBPACK_IMPORTED_MODULE_12__["SpecialeventComponent"], _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_13__["UserdetailsComponent"], _sponsordetails_sponsordetails_component__WEBPACK_IMPORTED_MODULE_14__["SponsordetailsComponent"], _servicerequest_servicerequest_component__WEBPACK_IMPORTED_MODULE_15__["ServicerequestComponent"], _testcode_testcode_component__WEBPACK_IMPORTED_MODULE_16__["TestcodeComponent"], _postalcode_postalcode_component__WEBPACK_IMPORTED_MODULE_17__["PostalcodeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_20__["Ng2SearchPipeModule"], ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_18__["NgMultiSelectDropDownModule"].forRoot(), ngx_pagination__WEBPACK_IMPORTED_MODULE_19__["NgxPaginationModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/home/home.router.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.router.ts ***!
  \*************************************/
/*! exports provided: HomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/home/dashboard/dashboard.component.ts");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../gaurds/auth.guard */ "./src/app/gaurds/auth.guard.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./users/users.component */ "./src/app/home/users/users.component.ts");
/* harmony import */ var _sponsor_user_sponsor_user_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./sponsor-user/sponsor-user.component */ "./src/app/home/sponsor-user/sponsor-user.component.ts");
/* harmony import */ var _ethenicgroup_ethenicgroup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ethenicgroup/ethenicgroup.component */ "./src/app/home/ethenicgroup/ethenicgroup.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status/status.component */ "./src/app/home/status/status.component.ts");
/* harmony import */ var _specialevent_specialevent_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./specialevent/specialevent.component */ "./src/app/home/specialevent/specialevent.component.ts");
/* harmony import */ var _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./userdetails/userdetails.component */ "./src/app/home/userdetails/userdetails.component.ts");
/* harmony import */ var _sponsordetails_sponsordetails_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sponsordetails/sponsordetails.component */ "./src/app/home/sponsordetails/sponsordetails.component.ts");
/* harmony import */ var _servicerequest_servicerequest_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./servicerequest/servicerequest.component */ "./src/app/home/servicerequest/servicerequest.component.ts");
/* harmony import */ var _testcode_testcode_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./testcode/testcode.component */ "./src/app/home/testcode/testcode.component.ts");
/* harmony import */ var _postalcode_postalcode_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./postalcode/postalcode.component */ "./src/app/home/postalcode/postalcode.component.ts");













var HomeRoutes = [
    { path: '', component: _home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"], canActivate: [_gaurds_auth_guard__WEBPACK_IMPORTED_MODULE_2__["AuthGuard"]],
        children: [
            { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
            { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__["DashboardComponent"] },
            { path: 'users', component: _users_users_component__WEBPACK_IMPORTED_MODULE_3__["UsersComponent"] },
            { path: 'sponsorUser', component: _sponsor_user_sponsor_user_component__WEBPACK_IMPORTED_MODULE_4__["SponsorUserComponent"] },
            { path: 'ethenicgroup', component: _ethenicgroup_ethenicgroup_component__WEBPACK_IMPORTED_MODULE_5__["EthenicgroupComponent"] },
            { path: 'status', component: _status_status_component__WEBPACK_IMPORTED_MODULE_6__["StatusComponent"] },
            { path: 'specialevent', component: _specialevent_specialevent_component__WEBPACK_IMPORTED_MODULE_7__["SpecialeventComponent"] },
            { path: 'userdetail', component: _userdetails_userdetails_component__WEBPACK_IMPORTED_MODULE_8__["UserdetailsComponent"] },
            { path: 'sponsordetail', component: _sponsordetails_sponsordetails_component__WEBPACK_IMPORTED_MODULE_9__["SponsordetailsComponent"] },
            { path: 'servicerequest', component: _servicerequest_servicerequest_component__WEBPACK_IMPORTED_MODULE_10__["ServicerequestComponent"] },
            { path: 'testcode', component: _testcode_testcode_component__WEBPACK_IMPORTED_MODULE_11__["TestcodeComponent"] },
            { path: 'postalcode', component: _postalcode_postalcode_component__WEBPACK_IMPORTED_MODULE_12__["PostalcodeComponent"] }
        ]
    }
];


/***/ }),

/***/ "./src/app/home/postalcode/postalcode.component.html":
/*!***********************************************************!*\
  !*** ./src/app/home/postalcode/postalcode.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\n    <div>\n      <h1><i class=\"fa fa-th-list\"></i>Postalcode</h1>\n      <p>Create Postalcode</p>\n    </div>\n    <ul class=\"app-breadcrumb breadcrumb\">\n       <li class=\"breadcrumb-item\"><i class=\"fa fa-home fa-lg\"></i></li> \n    </ul>\n  </div>\n  <div class=\"row\">\n      <div class=\"col-md-3\">\n          <div class=\"form-group\">\n              <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\n            </div>\n      </div>\n      <div class=\"col-md-9\">\n          <button type=\"button\" style=\"margin-bottom:8px\" class=\"btn btn-danger pull-right\"  data-backdrop=\"static\" data-toggle=\"modal\" data-target=\"#myModal\"\n          (click)=\"add(regForm)\">Add</button>\n         </div>\n    </div>\n  \n  <div class=\"tile\">  \n <H3>District Code Details</H3>\n  <table class=\"table table-striped\" >\n   <thead>\n     <tr style=\"font-size:15px\">\n       <th>Id</th>\n       <th>District Code</th>\n       <th>Edit</th>\n       <th>Delete</th>\n     </tr>\n   </thead>\n   <tbody>\n     <tr *ngFor = \"let data of postalCodes | filter:term | paginate: { itemsPerPage: 10, currentPage: p }\">\n       <td>{{data.id}}</td>\n       <td>{{data.postalCode}}</td>\n       <td>\n         <span>\n           <span (click)=\"editPostal(data)\" data-toggle=\"modal\" data-target=\"#myModal\"  class=\"glyphicon glyphicon-pencil\">\n             <i class=\"fa fa-edit\" style=\"font-size:24px;color:rgb(49, 17, 233)\"></i>\n           </span>\n         </span>\n       </td>\n       <td>\n         <span>\n           <span (click)=\"deletePostalCode(data.id)\" value=\"delete\">\n             <i class=\"fa fa-trash\" style=\"font-size:24px;color:red\"></i>\n           </span>\n         </span>\n       </td>\n     </tr>\n   </tbody>\n  </table>\n\n  </div>\n\n  <pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\n\n  <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n        <!-- Modal content-->\n        <form #regForm='ngForm'>\n          <div class=\"modal-content\">\n            <div class=\"modal-header\">\n              <h4 class=\"modal-title\">Postal Code</h4>\n              <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        \n            </div>\n            <div class=\"modal-body\">\n        \n              <div class=\"col-md-12\">\n                <input type=\"text\" placeholder=\"Postal Code\" name=\"postalCode\" class=\"form-control\" [(ngModel)]=mpincode>\n              </div>\n        \n        \n            </div>\n            <div class=\"modal-footer\">\n              <button type=\"submit\" data-dismiss=\"modal\" class=\"btn btn-primary float-right\" id=\"register\"\n                (click)=\"savePostaldata(regForm.value)\" *ngIf=\"addfrm\" [disabled]=\"ngForm.invalid\">Submit</button>\n              <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-primary float-right\" id=\"register\"\n                (click)=\"updatePostalData()\" *ngIf=\"updatfrm\">Update</button>\n            </div>\n          </div>\n      </form>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/home/postalcode/postalcode.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/home/postalcode/postalcode.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcG9zdGFsY29kZS9wb3N0YWxjb2RlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/postalcode/postalcode.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/home/postalcode/postalcode.component.ts ***!
  \*********************************************************/
/*! exports provided: PostalcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalcodeComponent", function() { return PostalcodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");



var PostalcodeComponent = /** @class */ (function () {
    function PostalcodeComponent(dataservice) {
        this.dataservice = dataservice;
        this.updatfrm = false;
        this.addfrm = false;
        // this.getEventById(this.id);
    }
    PostalcodeComponent.prototype.ngOnInit = function () {
        this.getPostalcode();
    };
    PostalcodeComponent.prototype.add = function (regForm) {
        regForm.reset();
        this.updatfrm = false;
        this.addfrm = true;
    };
    // Save Postal Code
    PostalcodeComponent.prototype.savePostaldata = function (regForm) {
        var _this = this;
        this.dataservice.postPostalcode(regForm).subscribe(function (res) {
            console.log("savind data is", res);
            _this.getPostalcode();
        });
    };
    //Update Special Event
    PostalcodeComponent.prototype.updatePostalData = function () {
        var _this = this;
        var dt = { id: this.data['id'], postalCode: this.mpincode };
        this.dataservice.updatePostalcode(dt).subscribe(function (res) {
            console.log(res);
            _this.getPostalcode();
        });
    };
    // Get all Special Event
    PostalcodeComponent.prototype.getPostalcode = function () {
        var _this = this;
        this.dataservice.getAllPostalcode().subscribe(function (res) {
            console.log("getting data", res);
            _this.postalCodes = res.resultData;
        });
    };
    PostalcodeComponent.prototype.editPostal = function (data) {
        this.updatfrm = true;
        this.addfrm = false;
        this.data = data;
        this.mpincode = this.data['postalCode'];
        // this.id = this.data.id
    };
    //Delete Special event
    PostalcodeComponent.prototype.deletePostalCode = function (id) {
        var _this = this;
        this.dataservice.deletePostalcode(id).subscribe(function (res) {
            console.log("deleted status", res);
            _this.getPostalcode();
        });
    };
    PostalcodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postalcode',
            template: __webpack_require__(/*! ./postalcode.component.html */ "./src/app/home/postalcode/postalcode.component.html"),
            styles: [__webpack_require__(/*! ./postalcode.component.scss */ "./src/app/home/postalcode/postalcode.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], PostalcodeComponent);
    return PostalcodeComponent;
}());



/***/ }),

/***/ "./src/app/home/report/report.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/report/report.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n      <div class=\"app-title\">\n        <div>\n          <h1><i class=\"fa fa-th-list\"></i> Basic Tables</h1>\n          <p>Basic bootstrap tables</p>\n        </div>\n        <ul class=\"app-breadcrumb breadcrumb\">\n          <li class=\"breadcrumb-item\"><i class=\"fa fa-home fa-lg\"></i></li>\n          <li class=\"breadcrumb-item\">Tables</li>\n          <li class=\"breadcrumb-item active\"><a href=\"#\">Simple Tables</a></li>\n        </ul>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <div class=\"tile\">\n            <h3 class=\"tile-title\">Simple Table</h3>\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>First Name</th>\n                  <th>Last Name</th>\n                  <th>Username</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>1</td>\n                  <td>Mark</td>\n                  <td>Otto</td>\n                  <td>@mdo</td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Jacob</td>\n                  <td>Thornton</td>\n                  <td>@fat</td>\n                </tr>\n                <tr>\n                  <td>3</td>\n                  <td>Larry</td>\n                  <td>the Bird</td>\n                  <td>@twitter</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"tile\">\n            <h3 class=\"tile-title\">Striped Table</h3>\n            <table class=\"table table-striped\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>First Name</th>\n                  <th>Last Name</th>\n                  <th>Username</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>1</td>\n                  <td>Mark</td>\n                  <td>Otto</td>\n                  <td>@mdo</td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Jacob</td>\n                  <td>Thornton</td>\n                  <td>@fat</td>\n                </tr>\n                <tr>\n                  <td>3</td>\n                  <td>Larry</td>\n                  <td>the Bird</td>\n                  <td>@twitter</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"clearfix\"></div>\n        <div class=\"col-md-6\">\n          <div class=\"tile\">\n            <h3 class=\"tile-title\">Bordered Table</h3>\n            <table class=\"table table-bordered\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>First Name</th>\n                  <th>Last Name</th>\n                  <th>Username</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>1</td>\n                  <td>Mark</td>\n                  <td>Otto</td>\n                  <td>@mdo</td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Jacob</td>\n                  <td>Thornton</td>\n                  <td>@fat</td>\n                </tr>\n                <tr>\n                  <td>3</td>\n                  <td>Larry</td>\n                  <td>the Bird</td>\n                  <td>@twitter</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"tile\">\n            <h3 class=\"tile-title\">Table Hover</h3>\n            <table class=\"table table-hover\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>First Name</th>\n                  <th>Last Name</th>\n                  <th>Username</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>1</td>\n                  <td>Mark</td>\n                  <td>Otto</td>\n                  <td>@mdo</td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Jacob</td>\n                  <td>Thornton</td>\n                  <td>@fat</td>\n                </tr>\n                <tr>\n                  <td>3</td>\n                  <td>Larry</td>\n                  <td>the Bird</td>\n                  <td>@twitter</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"clearfix\"></div>\n        <div class=\"col-md-6\">\n          <div class=\"tile\">\n            <h3 class=\"tile-title\">Condensed Table</h3>\n            <table class=\"table table-sm\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>First Name</th>\n                  <th>Last Name</th>\n                  <th>Username</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>1</td>\n                  <td>Mark</td>\n                  <td>Otto</td>\n                  <td>@mdo</td>\n                </tr>\n                <tr>\n                  <td>2</td>\n                  <td>Jacob</td>\n                  <td>Thornton</td>\n                  <td>@fat</td>\n                </tr>\n                <tr>\n                  <td>3</td>\n                  <td>Larry</td>\n                  <td>the Bird</td>\n                  <td>@twitter</td>\n                </tr>\n                <tr>\n                  <td>4</td>\n                  <td>Jacob</td>\n                  <td>Thornton</td>\n                  <td>@fat</td>\n                </tr>\n                <tr>\n                  <td>5</td>\n                  <td>Mark</td>\n                  <td>Otto</td>\n                  <td>@mdo</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"tile\">\n            <h3 class=\"tile-title\">Contextual Classes</h3>\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th>#</th>\n                  <th>First Name</th>\n                  <th>Last Name</th>\n                  <th>Username</th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr class=\"table-info\">\n                  <td>1</td>\n                  <td>Mark</td>\n                  <td>Otto</td>\n                  <td>@mdo</td>\n                </tr>\n                <tr class=\"table-success\">\n                  <td>2</td>\n                  <td>Jacob</td>\n                  <td>Thornton</td>\n                  <td>@fat</td>\n                </tr>\n                <tr class=\"table-danger\">\n                  <td>3</td>\n                  <td>Larry</td>\n                  <td>the Bird</td>\n                  <td>@twitter</td>\n                </tr>\n                <tr class=\"table-warning\">\n                  <td>4</td>\n                  <td>Jacob</td>\n                  <td>Thornton</td>\n                  <td>@fat</td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"clearfix\"></div>\n        <div class=\"col-md-12\">\n          <div class=\"tile\">\n            <h3 class=\"tile-title\">Responsive Table</h3>\n            <div class=\"table-responsive\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th>#</th>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>Username</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>1</td>\n                    <td>Mark</td>\n                    <td>Otto</td>\n                    <td>@mdo</td>\n                  </tr>\n                  <tr>\n                    <td>2</td>\n                    <td>Jacob</td>\n                    <td>Thornton</td>\n                    <td>@fat</td>\n                  </tr>\n                  <tr>\n                    <td>3</td>\n                    <td>Larry</td>\n                    <td>the Bird</td>\n                    <td>@twitter</td>\n                  </tr>\n                  <tr>\n                    <td>4</td>\n                    <td>Jacob</td>\n                    <td>Thornton</td>\n                    <td>@fat</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n "

/***/ }),

/***/ "./src/app/home/report/report.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/report/report.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvcmVwb3J0L3JlcG9ydC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/report/report.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/report/report.component.ts ***!
  \*************************************************/
/*! exports provided: ReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportComponent", function() { return ReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ReportComponent = /** @class */ (function () {
    function ReportComponent() {
    }
    ReportComponent.prototype.ngOnInit = function () {
    };
    ReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-report',
            template: __webpack_require__(/*! ./report.component.html */ "./src/app/home/report/report.component.html"),
            styles: [__webpack_require__(/*! ./report.component.scss */ "./src/app/home/report/report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ReportComponent);
    return ReportComponent;
}());



/***/ }),

/***/ "./src/app/home/servicerequest/servicerequest.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/servicerequest/servicerequest.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\n    <div>\n      <h1><i class=\"fa fa-th-list\"></i> Order Request</h1>\n      <p>Order Details</p>\n    </div>\n    <ul class=\"app-breadcrumb breadcrumb\">\n    </ul>\n  </div>\n    <br>\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <label>Select to Filter</label>\n            <select class=\"form-control\" [(ngModel)]=\"search\">\n                <option></option>\n                <option value=\"date\">Date</option>\n                <option value=\"mobile\">Mobile Number</option>\n                <option value=\"email\">Email Id</option>\n                <option value=\"order\">Order Numbser</option>\n              </select>\n        </div>\n        <div class=\"col-md-4\" *ngIf=\"search=='date'\">\n            <div class=\"form-group\">\n                <label>Start Date:</label>\n                <input type=\"date\" class=\"form-control\">\n              </div>\n        </div>\n        <div class=\"col-md-4\"  *ngIf=\"search=='date'\">\n            <div class=\"form-group\">\n                <label>End Date:</label>\n                <input type=\"date\" class=\"form-control\">\n              </div>\n        </div>\n        <div class=\"col-md-4\"  *ngIf=\"search =='mobile' || search =='email'|| search =='order'\">\n              <div class=\"form-group\">\n                <label>Search with {{search}}:</label>\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search Here..\">\n              </div>\n        </div>\n   </div>\n   <br>\n  <div class=\"tile\">\n      <h3 class=\"tile-title\">Order Details </h3>\n      <table class=\"table\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>First Name</th>\n              <th>Last Name</th>\n              <th>Email</th>\n              <th>Gender</th>\n              <th>Mobile</th>\n              <th>Order Code</th>\n              <th>Post Code</th>\n              <th>PX Code</th>\n              <th>Status</th>\n              <!-- <th>View</th> -->\n\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of sponsorIdData|paginate: { itemsPerPage: 10, currentPage: p };let i=index\">\n               <td>{{i+1}}</td>\n              <td>{{item.firstName}}</td>\n              <td>{{item.lastName}}</td>\n              <td>{{item.email}}</td>\n              <td>{{item.oppositeGender}}</td>\n              <td>{{item.mobile}}</td>\n              <td>{{item.orderCode}}</td>\n              <td>{{item.postCode}}</td>\n              <td>YF45</td>\n              <td>{{item.status}}</td>\n              <!-- <td><button type=\"button\" class=\"btn btn-info btn-sm\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"getNotificationDetails(item)\">Notification Details</button></td> -->\n            </tr>\n          </tbody>\n        </table>\n    </div>\n    <pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\n<!-- Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n  \n      <!-- Modal content-->\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Notification Details</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n           <h4><i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>&nbsp;Delivery Address  : &nbsp; <span style=\"font-size: 18px;\">{{address}}</span></h4> \n           <h4><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>&nbsp;Email Notification:  &nbsp;<span style=\"font-size: 18px;\">{{notificationEmail}}</span></h4>\n           <h4><i class=\"fa fa-phone\" aria-hidden=\"true\"></i>&nbsp; SMS Notification  : &nbsp;<span style=\"font-size: 18px;\">{{notificationPhone}}</span></h4> \n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        </div>\n      </div>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/servicerequest/servicerequest.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/servicerequest/servicerequest.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc2VydmljZXJlcXVlc3Qvc2VydmljZXJlcXVlc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/servicerequest/servicerequest.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/servicerequest/servicerequest.component.ts ***!
  \*****************************************************************/
/*! exports provided: ServicerequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicerequestComponent", function() { return ServicerequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var ServicerequestComponent = /** @class */ (function () {
    function ServicerequestComponent(dataservice) {
        this.dataservice = dataservice;
        this.sponsorIdData = [];
        this.allServiceRequestData = [];
        this.getServiceRequestDetails();
    }
    ServicerequestComponent.prototype.getNotificationDetails = function (data) {
        this.address = data.address;
        this.notificationEmail = data.notificationEmail;
        this.notificationPhone = data.notificationPhone;
    };
    ServicerequestComponent.prototype.getServiceRequestDetails = function () {
        var _this = this;
        if (sessionStorage.getItem('userRole') == 'SPONSORUSER') {
            this.dataservice.getServiceRequestDetails(sessionStorage.getItem('sponsorId')).subscribe(function (response) {
                _this.sponsorIdData = response.resultData;
            });
        }
        if ((sessionStorage.getItem('userRole') == 'SUPPORTUSER') || (sessionStorage.getItem('userRole') == 'SUPERADMIN')) {
            this.dataservice.getAllServiceRequestDetails().subscribe(function (response) {
                _this.sponsorIdData = response.resultData;
            });
        }
    };
    ServicerequestComponent.prototype.ngOnInit = function () {
    };
    ServicerequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-servicerequest',
            template: __webpack_require__(/*! ./servicerequest.component.html */ "./src/app/home/servicerequest/servicerequest.component.html"),
            styles: [__webpack_require__(/*! ./servicerequest.component.scss */ "./src/app/home/servicerequest/servicerequest.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], ServicerequestComponent);
    return ServicerequestComponent;
}());



/***/ }),

/***/ "./src/app/home/specialevent/specialevent.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/specialevent/specialevent.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\n  <div>\n    <h1><i class=\"fa fa-th-list\"></i> Special Event</h1>\n    <p>Special Events Details</p>\n  </div>\n  <ul class=\"app-breadcrumb breadcrumb\">\n  </ul>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n        <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\n          </div>\n    </div>\n    <div class=\"col-md-9\">\n        <button type=\"button\" style=\"margin-bottom:8px\" class=\"btn btn-danger float-right\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#myModal\"\n        (click)=\"add(regForm)\">Add</button>\n            </div>\n  </div>\n<div class=\"tile\">\n  <h5>Special Event</h5>\n\n <table class=\"table\" >\n   <thead>\n     <tr style=\"font-size:15px\">\n       <th>Id</th>\n       <th>Event Name</th>\n       <th>Edit</th>\n       <th>Delete</th>\n     </tr>\n   </thead>\n   <tbody>\n     <tr *ngFor = \"let data of eventData | filter:term |paginate: { itemsPerPage: 10, currentPage: p }\">\n       <td>{{data.id}}</td>\n       <td>{{data.eventName}}</td>\n       <td>\n         <span>\n           <span (click)=\"editSpecialevent(data)\" data-toggle=\"modal\" data-target=\"#myModal\"  class=\"glyphicon glyphicon-pencil\">\n             <i class=\"fa fa-edit\" style=\"font-size:24px;color:rgb(49, 17, 233)\"></i>\n           </span>\n         </span>\n       </td>\n       <td>\n         <span>\n           <span (click)=\"deleteSpecialEvent(data.id)\" value=\"delete\">\n             <i class=\"fa fa-trash\" style=\"font-size:24px;color:red\"></i>\n           </span>\n         </span>\n       </td>\n     </tr>\n   </tbody>\n </table>\n </div>\n <pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\n\n\n <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <form #regForm='ngForm'>\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Special Event</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      \n          </div>\n          <div class=\"modal-body\">\n      \n            <div class=\"col-md-12\">\n      \n              <input type=\"text\" placeholder=\"Special Event\" name=\"eventName\" class=\"form-control\" [(ngModel)]=peventName>\n      \n            </div>\n      \n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"submit\" [disabled]=\"!peventName\" data-dismiss=\"modal\" class=\"btn btn-primary float-right\" id=\"register\"\n              (click)=\"saveEvent(regForm.value)\" *ngIf=\"addfrm\">Submit</button>\n            <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-primary float-right\" id=\"register\"\n              (click)=\"updateEvent()\" *ngIf=\"updatfrm\">Update</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/home/specialevent/specialevent.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/specialevent/specialevent.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3BlY2lhbGV2ZW50L3NwZWNpYWxldmVudC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/specialevent/specialevent.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/specialevent/specialevent.component.ts ***!
  \*************************************************************/
/*! exports provided: SpecialeventComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpecialeventComponent", function() { return SpecialeventComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var SpecialeventComponent = /** @class */ (function () {
    function SpecialeventComponent(dataservice, router, route) {
        var _this = this;
        this.dataservice = dataservice;
        this.router = router;
        this.route = route;
        this.updatfrm = false;
        this.addfrm = false;
        this.route.params.subscribe(function (params) {
            _this.id = +params['id'];
            console.log("Id: ", _this.id);
        });
    }
    SpecialeventComponent.prototype.ngOnInit = function () {
        this.getAllspecialEvent();
        // this.getEventById(this.id);
    };
    SpecialeventComponent.prototype.add = function (regForm) {
        regForm.reset();
        this.updatfrm = false;
        this.addfrm = true;
    };
    // Save Special Event
    SpecialeventComponent.prototype.saveEvent = function (regForm) {
        var _this = this;
        this.dataservice.postspecialEvent(regForm).subscribe(function (res) {
            console.log("savind data is", res);
            _this.getAllspecialEvent();
        });
    };
    //Update Special Event
    SpecialeventComponent.prototype.updateEvent = function () {
        var _this = this;
        var dt = { id: this.data['id'], eventName: this.peventName };
        this.dataservice.updateEvents(dt).subscribe(function (res) {
            console.log(res);
            _this.getAllspecialEvent();
        });
    };
    // Get all Special Event
    SpecialeventComponent.prototype.getAllspecialEvent = function () {
        var _this = this;
        if (this.id != 0) {
            this.dataservice.getSpecialEvent().subscribe(function (res) {
                // console.log("getting data",res)
                _this.eventData = res.resultData;
                console.log("getting data", res.resultData);
            });
        }
    };
    // Get all Special Event By Id
    SpecialeventComponent.prototype.getEventById = function (id) {
        this.dataservice.getSpecialEventById(id).subscribe(function (res) {
            // this.id = res.resultData.id;
            console.log("getting data gfgfd", res);
        });
    };
    SpecialeventComponent.prototype.editSpecialevent = function (data) {
        this.updatfrm = true;
        this.addfrm = false;
        this.data = data;
        console.log("hfdhf", this.data);
        //this.peventName = this.data.eventName
        this.id = this.data['id'];
        this.peventName = data['eventName'];
    };
    //Delete Special event
    SpecialeventComponent.prototype.deleteSpecialEvent = function (id) {
        var _this = this;
        debugger;
        this.dataservice.deleteEvent(id).subscribe(function (res) {
            console.log("deleted status", res);
            _this.getAllspecialEvent();
        });
    };
    SpecialeventComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-specialevent',
            template: __webpack_require__(/*! ./specialevent.component.html */ "./src/app/home/specialevent/specialevent.component.html"),
            styles: [__webpack_require__(/*! ./specialevent.component.scss */ "./src/app/home/specialevent/specialevent.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], SpecialeventComponent);
    return SpecialeventComponent;
}());



/***/ }),

/***/ "./src/app/home/sponsor-user/sponsor-user.component.html":
/*!***************************************************************!*\
  !*** ./src/app/home/sponsor-user/sponsor-user.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\n  <div>\n    <h1><i class=\"fa fa-th-list\"></i> Commissioner</h1>\n    <p>Commissioner Details</p>\n  </div>\n  <ul class=\"app-breadcrumb breadcrumb\">\n    <!-- <li class=\"breadcrumb-item\"><i class=\"fa fa-home fa-lg\"></i></li> -->\n\n\n  </ul>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <input type=\"text\" [(ngModel)]=\"term\" class=\"form-control\" placeholder=\"Search Here...\">\n    </div>\n  </div>\n  <div class=\"col-md-9\">\n    <button class=\"btn btn-danger  pull-right\" data-toggle=\"modal\" data-target=\"#myModal\" data-backdrop=\"static\"  (click)=\"initializeData()\"><i\n        class=\"fa fa-plus\"></i>Add Commissioner</button>\n  </div>\n</div>\n<div class=\"tile\">\n  <h3 class=\"tile-title\">Commissioner Details </h3>\n\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Name</th>\n        <!-- <th>Email</th>\n        <th>Phone</th> -->\n        <th>Budget</th>\n        <th>Edit</th>\n        <th>View</th>\n\n\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let item of SponsorsData| filter:term |paginate: { itemsPerPage: 5, currentPage: p };let i=index \">\n        <td>{{i+1}}</td>\n        <td>{{item.name}}</td>\n        <!-- <td>{{item.email}}</td>\n        <td>{{item.phone}}</td> -->\n        <td>{{item.budget}}</td>\n        <td>\n          <a href=\"\" class=\"btn btn-warning btn-sm\" data-toggle=\"modal\"  data-backdrop=\"static\" data-target=\"#editSponsor\"\n            (click)=\"getPostalCodeforEdit(item.id)\"><i class=\"fa fa-edit\"></i>Edit</a>\n        </td>\n        <td>\n            <a href=\"\" class=\"btn btn-info btn-sm\" data-toggle=\"modal\" data-target=\"#rulemyModal\" data-backdrop=\"static\"  (click)=\"getRulesDetails(item.id)\"><i class=\"fa fa-plus\"></i>Add Rules</a>&nbsp;&nbsp;\n          <a href=\"\" data-backdrop=\"static\"  class=\"btn btn-success btn-sm\" data-toggle=\"modal\" data-target=\"#postCodeslist\"\n            (click)=\"getPostCodeList(item.id)\"><i class=\"fa fa-edit\"></i>District Codes</a>&nbsp;&nbsp;<a class=\"btn btn-primary btn-sm\" href=\"\"\n            data-toggle=\"modal\" data-target=\"#addressDetails\"\n            (click)=\"getAddressDetails(item.id)\" data-backdrop=\"static\" ><i class=\"fa fa-edit\"></i>Contacts</a>&nbsp;&nbsp;<a href=\"\" class=\"btn btn-info btn-sm\"\n            data-toggle=\"modal\" data-target=\"#ruleDetails\" data-backdrop=\"static\"  (click)=\"getRulesDetails(item.id)\"><i class=\"fa fa-edit\"></i>Rules</a>&nbsp;&nbsp;\n        </td>\n\n      </tr>\n    </tbody>\n  </table>\n\n</div>\n<pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\n<!-- edit sponsor popup -->\n<div id=\"editSponsor\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Edit Commissioner Details</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n\n        <div class=\"form-group\">\n          <label for=\"name\">Name:</label>\n          <input type=\"text\" [(ngModel)]=\"updateSponsor.name\" class=\"form-control\" id=\"name\">\n        </div>\n        <!-- <div class=\"form-group\">\n          <label for=\"email\">Email:</label>\n          <input type=\"email\" [(ngModel)]=\"updateSponsor.email\" class=\"form-control\" id=\"email\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phone\">Phone:</label>\n          <input type=\"text\" [(ngModel)]=\"updateSponsor.phone\" class=\"form-control\" id=\"phone\">\n        </div> -->\n        <div class=\"form-group\">\n          <label for=\"phone\">Budget:</label>\n          <input type=\"text\" [(ngModel)]=\"updateSponsor.budget\" class=\"form-control\" id=\"budget\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"phone\">District Codes:</label>\n          <div>\n            <ng-multiselect-dropdown [placeholder]=\"'Select Post Code'\" [data]=\"dropdownList\"\n              [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\"\n              (onSelectAll)=\"onSelectAll($event)\">\n            </ng-multiselect-dropdown>\n          </div>\n        </div>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n        <button type=\"submit\" class=\"btn btn-success\" data-dismiss=\"modal\"\n          (click)=\"updateSponsorDetails(updateSponsor,selectedItems)\">Submit</button>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"myModal\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n\n        <h4 class=\"modal-title\">Commissioner Details</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <div class=\"content\">\n          <div class=\"main\">\n\n            <ul id=\"progressbar\">\n              <li class=\"active\">Commissioner Details</li>\n              <li>Contact Details</li>\n              <!-- <li>Rule Details</li> -->\n\n            </ul>\n            <form [formGroup]=\"commissionerform\">\n\n            <fieldset id=\"first\" style=\"margin-left: 2px;\">\n              <label class=\"col-md-4\">Commissioner Name: </label>\n              <input class=\"col-md-5\" formControlName=\"name\" [(ngModel)]=\"name\" name=\"name\" placeholder=\"Name\" type=\"text\">\n              <div class=\"text text-danger\"\n              *ngIf=\"commissionerform.controls['name'].invalid && commissionerform.controls['name'].touched\">Commissioner Name is required</div>\n\n              <!-- <div class=\"clearfix\"></div>\n                                <label class=\"col-md-2\">Email: </label>\n                                <input class=\"col-md-7\"  [(ngModel)]=\"email\"  pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"email\" placeholder=\"Email\" type=\"text\" required>\n                                <div class=\"clearfix\"></div>\n                                <label class=\"col-md-2\">Phone: </label>\n                                <input class=\"col-md-7\"  [(ngModel)]=\"phone\" name=\"phone\" placeholder=\"Phone\" type=\"text\" required> -->\n\n              <div class=\"clearfix\"></div>\n              <label class=\"col-md-4\">Budget: </label>\n              <input class=\"col-md-5\" [(ngModel)]=\"budget\" formControlName=\"budget\" name=\"budget\" placeholder=\"Budget\" type=\"number\">\n              <div class=\"text text-danger\"\n              *ngIf=\"commissionerform.controls['budget'].invalid && commissionerform.controls['budget'].touched\">Budget is required</div>\n              <div class=\"clearfix\"></div>\n              <label class=\"col-md-4\" style=\"margin-top:18px;\">District Codes: </label>\n\n              <div style=\"margin-left:240px; width: 45%;margin-bottom:38px;\">\n                <ng-multiselect-dropdown [placeholder]=\"'Select District Codes'\" [data]=\"dropdownList\"\n                  [(ngModel)]=\"selectedpostCode\" formControlName=\"selectedpostCode\" [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\"\n                  (onSelectAll)=\"onSelectAll($event)\">\n                </ng-multiselect-dropdown>\n                <div class=\"text text-danger\"\n              *ngIf=\"commissionerform.controls['selectedpostCode'].invalid && commissionerform.controls['selectedpostCode'].touched\">District Code is required</div>\n              </div>\n              <input class=\"next_btn btn btn-primary pull-right\" [disabled]=\"(!name || !budget ||!selectedpostCode)\"\n                (click)=\"step1Details(name,budget,selectedpostCode)\" name=\"next\" type=\"button\" value=\"Next\">\n              <!-- [disabled]=\"(!name || !email || !phone || !budget ||!selectedpostCode)\"  -->\n              <!-- step1Details(name,email,phone,budget,selectedpostCode) -->\n            </fieldset>\n\n            <fieldset style=\"margin-left: 2px;\">\n              <div class=\"clearfix\"></div>\n              <label class=\"col-md-2\">Email: </label>\n              <input class=\"col-md-7\"  [(ngModel)]=\"email\" formControlName=\"email\"  pattern=\"^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$\" name=\"email\" placeholder=\"Email\" type=\"text\" required>\n              \n                  <div class=\"text text-danger\"\n                  *ngIf=\"commissionerform.controls['email'].invalid && commissionerform.controls['email'].touched\">Please enter a valid Email</div>  \n                \n              <div class=\"clearfix\"></div>\n              <label class=\"col-md-2\">Phone: </label>\n              <input class=\"col-md-7\"  [(ngModel)]=\"phone\" formControlName=\"phone\" name=\"phone\" placeholder=\"Phone\" type=\"tel\">\n              <div class=\"text text-danger\" *ngIf=\"commissionerform.controls['phone'].errors.required\">\n              <div class=\"text text-danger\"\n              *ngIf=\"commissionerform.controls['phone'].errors.required && (commissionerform.controls['phone'].touched || commissionerform.controls['phone'].dirty)\">\n              Phone is required\n              </div>\n              <div class=\"text text-danger\"\n              *ngIf=\"commissionerform.controls['phone'].errors.maxlength\">\n              Phone number should be only in number format\n            </div>\n          </div>\n              <div class=\"clearfix\"></div>\n              \n              <div class=\"clearfix\"></div>\n              <label class=\"col-md-2\">Street No: </label>\n              <input class=\"col-md-7\" name=\"streetNumber\" [(ngModel)]=\"streetNumber\" formControlName=\"streetNumber\" placeholder=\"Street Number\"\n                type=\"text\">\n                <div class=\"text text-danger\"\n              *ngIf=\"commissionerform.controls['streetNumber'].invalid && commissionerform.controls['streetNumber'].touched\">Street Number is required</div>\n              <div class=\"clearfix\"></div>\n              <label class=\"col-md-2\">Street Name1: </label>\n              <input class=\"col-md-7\" name=\"strename\" [(ngModel)]=\"strname1\" formControlName=\"strname1\" placeholder=\"Street Name\" type=\"text\">\n              <div class=\"text text-danger\"\n              *ngIf=\"commissionerform.controls['strname1'].invalid && commissionerform.controls['strname1'].touched\">Street Name is required</div>\n              <div class=\"clearfix\"></div>\n\n              <!-- <label class=\"col-md-2\">Street Name2: </label>\n              <input class=\"col-md-7\" name=\"streetNumber\" [(ngModel)]=\"strname2\" placeholder=\"Street Name2\" type=\"text\">\n              <div class=\"clearfix\"></div> -->\n\n              <label class=\"col-md-2\">City: </label>\n              <input class=\"col-md-7\" name=\"streetNumber\" [(ngModel)]=\"city\" formControlName=\"city\" placeholder=\"City\" type=\"text\">\n              <div class=\"text text-danger\"\n              *ngIf=\"commissionerform.controls['city'].invalid && commissionerform.controls['city'].touched\">City is required</div>\n\n              <!-- <div class=\"clearfix\"></div>\n              <label class=\"col-md-2\">Country: </label>\n              <input class=\"col-md-7\" name=\"streetNumber\" [(ngModel)]=\"country\" placeholder=\"Country\" type=\"text\"> -->\n\n              <div class=\"clearfix\"></div>\n              <label class=\"col-md-2\">District: </label>\n              <input class=\"col-md-7\" name=\"streetNumber\" [(ngModel)]=\"district\" formControlName=\"district\" placeholder=\"District\" type=\"text\">\n              <div class=\"text text-danger\"\n              *ngIf=\"commissionerform.controls['district'].invalid && commissionerform.controls['district'].touched\">District  is required</div>\n              \n              <!-- <div class=\"clearfix\"></div>\n              <label class=\"col-md-2\">Region: </label>\n              <input class=\"col-md-7\" name=\"streetNumber\" [(ngModel)]=\"region\" placeholder=\"Region\" type=\"text\">\n              <div class=\"clearfix\"></div>\n              <label class=\"col-md-2\">State: </label>\n              <input class=\"col-md-7\" name=\"streetNumber\" [(ngModel)]=\"state\" placeholder=\"State\" type=\"text\"> -->\n\n              <div class=\"clearfix\"></div>\n              <label class=\"col-md-2\">District Codes: </label>\n              <input class=\"col-md-7\" name=\"streetNumber\" [(ngModel)]=\"postCode\" formControlName=\"postCode\" placeholder=\"Post Code\" type=\"text\">\n              <div class=\"text text-danger\"\n              *ngIf=\"commissionerform.controls['postCode'].invalid && commissionerform.controls['postCode'].touched\">District Code is required</div>\n              <br>\n              <input class=\"pre_btn btn btn-info\" name=\"previous\" type=\"button\" value=\"Previous\">\n              <!-- <input class=\"next_btn btn btn-primary\" name=\"next\" type=\"button\"\n                [disabled]='(!streetNumber || !strname1 || !city || !district || !zipcode)'\n                (click)=\"step2Details(streetNumber,strname1,city,district,zipcode)\"\n                value=\"Next\">\n                <br> -->\n                <input class=\"submit_btn btn btn-primary\" [disabled]='(!email || !phone || !streetNumber || !strname1 || !city || !district || !postCode)'  type=\"submit\" (click)=\"step2Details(email,phone,streetNumber,strname1,city,district,postCode);submitSponsorDetails(commissionerform)\" data-dismiss=\"modal\" type=\"Submit\">\n                <!-- (!streetNumber || !strname1 || !strname2 ||!city || !country || !district || !region ||!state || !zipcode) -->\n                <!-- step2Details(streetNumber,strname1,strname2,city,country,district,region,state,zipcode) -->\n\n            </fieldset>\n            <!-- <fieldset style=\"margin-left: 2px;\">\n                             \n                                <p class=\"subtitle\">Step 3</p>\n                                <label class=\"col-md-3\">Ethenic Group: </label>\n          \n                                    <select [(ngModel)]=\"selectedEthenicName\" class=\"col-md-7\">\n                                        <option *ngFor=\"let c of ethenicData\" [ngValue]=\"c\">{{c.ethnicName}}</option>\n                                    </select>\n                                    <div class=\"clearfix\"></div>\n                                    <label class=\"col-md-3\">Gender:</label>\n                                    \n                                    <select class=\"col-md-7\" [(ngModel)]=\"selectedGender\" multiple style=\"height: 60px;\">\n                                        <option value=\"Man\">Man </option>\n                                        <option value=\"Women\">Woman</option>\n                                        <option value=\"Transman \">Transman </option>\n                                        <option value=\"Transwoman \">Transwoman </option>\n                                      </select>\n\n                                      <label class=\"col-md-3\">Test List:</label>  \n                                    <select [(ngModel)]=\"selectedTestName\" class=\"col-md-7\">\n                                        <option *ngFor=\"let c of testCodeData\" [ngValue]=\"c\">{{c.testName}}</option>\n                                    </select>\n\n                                <div class=\"clearfix\"></div>\n                              <label class=\"col-md-3\">Min Age: </label>\n                              <input class=\"col-md-7\" name=\"minage\"  [(ngModel)]=\"minage\" placeholder=\"Min Age\" type=\"text\">\n                              <div class=\"clearfix\"></div>\n                              <label class=\"col-md-3\">Max Age: </label>\n                              <input class=\"col-md-7\" name=\"maxage\"  [(ngModel)]=\"maxage\" placeholder=\"Max Age\" type=\"text\">\n                              <div class=\"clearfix\"></div>\n                              <div class=\"col-md-10\">\n                              <button type=\"button\" [disabled]=\"(!selectedEthenicName || !selectedGender || !minage || !maxage ||!selectedTestName)\"  (click)=\"ruleTable(selectedEthenicName,selectedGender,minage,maxage,selectedTestName)\" class=\"btn btn-success pull-right\">Add Rules</button>\n                              </div>\n                              <div class=\"clearfix\"></div>\n                        \n                         <br><br><hr>\n                      \n                               <h4 class=\"text-center text-primary text-center\"  *ngIf=\"ruleDetails\"> Rule Details</h4>\n                        \n                                <table class=\"table\" *ngIf=\"ruleDetails\">\n                                        <thead>\n                                          <tr>\n                                            <th>Gender</th>\n                                            <th>Ethenic Name</th>\n                                            <th>Test Code Name</th>\n                                            <th>Min Age</th>\n                                            <th>Max Age</th>\n                                    \n                                          </tr>\n                                        </thead>\n                                        <tbody>\n                                          <tr *ngFor=\"let item of ruleList\">\n                                            <td>{{item.gender}}</td>\n                                            <td>{{item.ethnicName}}</td>\n                                            <td>{{item.testName}}</td>\n                                            <td>{{item.maxAgeGroup}}</td>\n                                            <td>{{item.minAgeGroup}}</td>\n                                          \n                                          </tr>\n                            \n                                        </tbody>\n                                      </table>\n                                     \n                                      <br>\n                                      <input class=\"pre_btn\" type=\"button\" value=\"Previous\">\n                                      <input class=\"submit_btn btn btn-primary\" *ngIf=\"ruleDetails\" type=\"submit\" (click)=\"submitSponsorDetails()\" data-dismiss=\"modal\" value=\"Submit\">\n                              \n                                    \n                                </fieldset> -->\n           \n           </form>\n          </div>\n        </div>\n      </div>\n      <!-- <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div> -->\n    </div>\n\n  </div>\n</div>\n\n<!--------Modal ADD Rule Details-->\n\n<div class=\"modal\" id=\"rulemyModal\">\n    <div class=\"modal-dialog\">\n      <div class=\"modal-content\">\n\n        <!-- Modal Header -->\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Add Rule</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <form [formGroup]=\"addRuleform\">\n        <!-- Modal body -->\n        <div class=\"modal-body\">\n          <!-- <p *ngFor=\"let item of rulesData\">{{item.sponsor_id}}</p> -->\n          <p [hidden]=\"true\">{{sponsorId}}</p>\n            <label class=\"col-md-3\">Ethenic Group: </label>\n          \n            <select [(ngModel)]=\"selectedEthenicName\" formControlName=\"selectedEthenicName\" class=\"col-md-7\">\n                <option *ngFor=\"let c of ethenicData\" [ngValue]=\"c\">{{c.ethnicName}}</option>\n            </select>\n            <div class=\"text text-danger\" *ngIf=\"addRuleform.controls['selectedEthenicName'].invalid && addRuleform.controls['selectedEthenicName'].touched\">\n              Please select Ethenic Group\n            </div>\n            <div class=\"clearfix\"></div>\n            <label class=\"col-md-3\">Gender:</label>\n            \n            <select class=\"col-md-7\" [(ngModel)]=\"selectedGender\" formControlName=\"selectedGender\"  multiple style=\"height: 60px;\">\n                <option value=\"Man\">Man </option>\n                <option value=\"Women\">Woman</option>\n                <option value=\"Transman \">Transman </option>\n                <option value=\"Transwoman \">Transwoman </option>\n              </select>\n              <div class=\"text text-danger\" *ngIf=\"addRuleform.controls['selectedGender'].invalid && addRuleform.controls['selectedGender'].touched\">\n                  Please select Gender\n                </div>\n\n              <label class=\"col-md-3\">Test List:</label>  \n            <select [(ngModel)]=\"selectedTestName\" formControlName=\"selectedTestName\" class=\"col-md-7\">\n                <option *ngFor=\"let c of testCodeData\" [ngValue]=\"c\">{{c.testName}}</option>\n            </select>\n            <div class=\"text text-danger\" *ngIf=\"addRuleform.controls['selectedTestName'].invalid && addRuleform.controls['selectedTestName'].touched\">\n                Please select Test\n              </div>\n\n        <div class=\"clearfix\"></div>\n      <label class=\"col-md-3\">Min Age: </label>\n      <input class=\"col-md-7\" name=\"minage\"  [(ngModel)]=\"minage\" formControlName=\"minage\" placeholder=\"Min Age\" type=\"text\">\n      <div class=\"text text-danger\" *ngIf=\"addRuleform.controls['minage'].invalid && addRuleform.controls['minage'].touched\">\n          Minimum Age is Required\n        </div>\n      <div class=\"clearfix\"></div>\n      <label class=\"col-md-3\">Max Age: </label>\n      <input class=\"col-md-7\" name=\"maxage\"  [(ngModel)]=\"maxage\" formControlName=\"maxage\" placeholder=\"Max Age\" type=\"text\">\n      <div class=\"text text-danger\" *ngIf=\"addRuleform.controls['maxage'].invalid && addRuleform.controls['maxage'].touched\">\n          Maximum Age is Required\n        </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"col-md-10\">\n      <button type=\"button\" [disabled]=\"(!selectedEthenicName || !selectedGender || !minage || !maxage || !selectedTestName)\"  (click)=\"ruleTable(selectedEthenicName,selectedGender,minage,maxage,selectedTestName,sponsorId)\" class=\"btn btn-success pull-right\">Add Rules</button>\n      </div>\n      <div class=\"clearfix\"></div>\n\n <br><br><hr>\n\n       <h4 class=\"text-center text-primary text-center\"  *ngIf=\"ruleDetails\"> Rule Details</h4>\n\n        <table class=\"table\" *ngIf=\"ruleDetails\">\n                <thead>\n                  <tr>\n                    <th>Gender</th>\n                    <th>Ethenic Name</th>\n                    <th>Test Code Name</th>\n                    <th>Min Age</th>\n                    <th>Max Age</th>\n                    <th>Delete</th>\n            \n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of ruleList\">\n                    <td>{{item.gender}}</td>\n                    <td>{{item.ethnicName}}</td>\n                    <td>{{item.testName}}</td>\n                    <td>{{item.maxAgeGroup}}</td>\n                    <td>{{item.minAgeGroup}}</td>\n                    <td (click)=\"delete(in)\"><i class=\"fa fa-trash\"></i></td>\n                  </tr>\n    \n                </tbody>\n                <button (click)=\"ruletable2();addRuleform.reset()\" class=\"btn btn-primary pull-right\" data-dismiss=\"modal\">Submit</button>\n              </table>\n        </div>\n        </form>\n  \n        <!-- Modal footer -->\n        <!-- <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\">Close</button>\n        </div> -->\n  \n      </div>\n    </div>\n  </div>\n\n\n<!--------Modal ADD Rule Details-->\n  \n<!-- Modal address details -->\n\n<div id=\"addressDetails\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Contact Details</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n      </div>\n      <div class=\"modal-body\">\n        <table class=\"table table-responsive\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>Email</th>\n              <th>Phone</th>\n              <th>Street No.</th>\n              <th>Street Name1</th>\n              <!-- <th>Street Name2</th> -->\n              <th>City</th>\n              <!-- <th>Country</th> -->\n              <th>District</th>\n              <!-- <th>Region</th>\n              <th>State</th> -->\n              <th>District Codes</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor='let item of addressData let i=index'>\n              <td>{{i+1}}</td>\n              <td>\n                  <div *ngIf=\"!item.isEditable1\">{{item.email}}</div>\n                  <input type=\"text\" *ngIf=\"item.isEditable1\" class=\"form-control\" [(ngModel)]=\"item.email\">\n              </td>\n              <td>\n                  <div *ngIf=\"!item.isEditable1\">{{item.phone}}</div>\n                  <input type=\"text\" *ngIf=\"item.isEditable1\" class=\"form-control\" [(ngModel)]=\"item.phone\">\n              </td>\n              <td>\n                <div *ngIf=\"!item.isEditable1\">{{item.streetNumber}}</div>\n                <input type=\"text\" *ngIf=\"item.isEditable1\" class=\"form-control\" [(ngModel)]=\"item.streetNumber\">\n              </td>\n              <td>\n                <div *ngIf=\"!item.isEditable1\">\n                  {{item.streetName1}}\n                </div>\n                <input type=\"text\" *ngIf=\"item.isEditable1\" class=\"form-control\" [(ngModel)]=\"item.streetName1\">\n              </td>\n              <!-- <td>\n                <div *ngIf=\"!item.isEditable1\">\n                  {{item.streetName2}}\n                </div>\n                <input type=\"text\" *ngIf=\"item.isEditable1\" class=\"form-control\" [(ngModel)]=\"item.streetName2\">\n              </td> -->\n              <td>\n                <div *ngIf=\"!item.isEditable1\">\n                  {{item.city}}\n                </div>\n                <input type=\"text\" *ngIf=\"item.isEditable1\" class=\"form-control\" [(ngModel)]=\"item.city\">\n              </td>\n              <!-- <td>\n                <div *ngIf=\"!item.isEditable1\">\n                  {{item.country}}\n                </div>\n                <input type=\"text\" *ngIf=\"item.isEditable1\" class=\"form-control\" [(ngModel)]=\"item.country\">\n              </td> -->\n              <td>\n                <div *ngIf=\"!item.isEditable1\">\n                  {{item.district}}\n                </div>\n                <input type=\"text\" *ngIf=\"item.isEditable1\" class=\"form-control\" [(ngModel)]=\"item.district\">\n              </td>\n              <!-- <td>\n                <div *ngIf=\"!item.isEditable1\">\n                  {{item.region}}\n                </div>\n                <input type=\"text\" *ngIf=\"item.isEditable1\" class=\"form-control\" [(ngModel)]=\"item.region\">\n              </td>\n              <td>\n                <div *ngIf=\"!item.isEditable1\">\n                  {{item.state}}\n                </div>\n                <input type=\"text\" *ngIf=\"item.isEditable1\" class=\"form-control\" [(ngModel)]=\"item.state\">\n\n              </td> -->\n              <td>\n                <div *ngIf=\"!item.isEditable1\">\n                  {{item.postCode}}\n                </div>\n                <input type=\"text\" *ngIf=\"item.isEditable1\" class=\"form-control\" [(ngModel)]=\"item.postCode\">\n              </td>\n              <td>\n                <button class=\"btn btn-info btn-sm\" (click)=\"item.isEditable1=!item.isEditable1\"\n                  *ngIf=\"!item.isEditable1\">Edit</button>\n                <button class=\"btn btn-success btn-sm\" *ngIf=\"item.isEditable1\"\n                  (click)=\"item.isEditable1=!item.isEditable1;updateSelectedAddress(item)\">Save</button>\n              </td>\n            </tr>\n            <tr>\n\n          </tbody>\n        </table>\n\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<!-- Modal rule details -->\n<div id=\"ruleDetails\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Rule Details</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n      </div>\n      <div class=\"modal-body\">\n\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>#</th>\n\n              <th>Gender</th>\n              <th>Min Age</th>\n              <th>Max Age</th>\n              <th>Ethenics Name</th>\n              <th>Test List</th>\n              <th>Status</th>\n              <th>Action</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor='let item of rulesData let i=index'>\n\n              <td>{{i+1}}</td>\n              <td>\n                <div *ngIf=\"!item.isEditable2\">\n                  {{item.gender}}\n                </div>\n\n                <select class=\"form-control\" *ngIf=\"item.isEditable2\" [(ngModel)]=\"item.gender\" multiple\n                  style=\"height: 60px;\">\n                  <option value=\"Man\">Man </option>\n                  <option value=\"Women\">Woman</option>\n                  <option value=\"Transman \">Transman </option>\n                  <option value=\"Transwoman \">Transwoman </option>\n                </select>\n              </td>\n              <td>\n                <div *ngIf=\"!item.isEditable2\">\n                  {{item.minAgeGroup}}\n                </div>\n                <input type=\"text\" *ngIf=\"item.isEditable2\" class=\"form-control\" [(ngModel)]=\"item.minAgeGroup\">\n              </td>\n              <td>\n                <div *ngIf=\"!item.isEditable2\">\n                  {{item.maxAgeGroup}}\n                </div>\n                <input type=\"text\" *ngIf=\"item.isEditable2\" class=\"form-control\" [(ngModel)]=\"item.maxAgeGroup\">\n              </td>\n              <td>\n                <div>\n                  <select [(ngModel)]=\"item.ethnicGroupId\">\n                    <option *ngFor=\"let c of ethenicData\" [ngValue]=\"c.ethnicGroupId\">{{c.ethnicName}}</option>\n                  </select>\n                </div>\n              </td>\n              <td>\n                <select [(ngModel)]=\"item.testCodeId\">\n                  <option *ngFor=\"let c of testCodeData\" [ngValue]=\"c.testCodeId\">{{c.testName}}</option>\n                </select>\n\n              </td>\n              <td>\n                  <div *ngIf=\"!item.isEditable2\">\n                      {{item.status}}\n                    </div>\n                    <select *ngIf=\"item.isEditable2\"  [(ngModel)]=\"item.status\">\n                        <option value=\"Active\">Active</option>\n                        <option value=\"Inactive\">Inactive</option>\n                      </select>\n                  <!-- <input type=\"text\" *ngIf=\"item.isEditable2\" class=\"form-control\" [(ngModel)]=\"item.minAgeGroup\"> -->\n              </td>\n              <td>\n                <button class=\"btn btn-info btn-sm\" (click)=\"item.isEditable2=!item.isEditable2\"\n                  *ngIf=\"!item.isEditable2\">Edit</button>\n                <button class=\"btn btn-success btn-sm\" *ngIf=\"item.isEditable2\"\n                  (click)=\"item.isEditable2=!item.isEditable2;updateSelectedRule(item)\">Save</button>\n              </td>\n\n\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n<!-- Modal code details -->\n<div id=\"codeDetails\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Modal Header</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n\n      </div>\n      <div class=\"modal-body\">\n\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>Test Name</th>\n              <th>Test Code</th>\n              <th>Test Description</th>\n              <th>IsDefault</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of testCodeDetails;let i=index\">\n              <td>{{i+1}}</td>\n              <td>{{item.testName}}</td>\n              <td>{{item.testCode}}</td>\n              <td>{{item.description}}</td>\n              <td>{{item.isDefalut}}</td>\n\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n\n<!-- Modal -->\n<div id=\"postCodeslist\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">District Codes List</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n\n        <table class=\"table\">\n          <thead>\n            <tr>\n              <th>Id</th>\n              <th>District Codes</th>\n              <!-- <th>Action</th> -->\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let item of testCodeList\">\n              <td>\n                <div>{{item.id}}</div>\n              </td>\n              <td>\n                <div *ngIf=\"!item.isEditable\">{{item.postalCode}}</div>\n                <select [(ngModel)]=\"selectedpostCode\" class=\"form-control\" *ngIf=\"item.isEditable\">\n                  <option *ngFor=\"let c of dropdownList\" [ngValue]=\"c\">{{c.postalCode}}</option>\n                </select>\n              </td>\n              <!-- <td>\n                <button class=\"btn btn-info btn-sm\"\n                  (click)=\"item.isEditable=!item.isEditable;editPostalCode(item.postalCode)\"\n                  *ngIf=\"!item.isEditable\">Edit</button>\n                <button class=\"btn btn-success btn-sm\" *ngIf=\"item.isEditable\"\n                  (click)=\"item.isEditable=!item.isEditable;updateSelectedPostalCode(selectedpostCode)\">Save</button>\n              </td> -->\n            </tr>\n          </tbody>\n        </table>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/home/sponsor-user/sponsor-user.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/home/sponsor-user/sponsor-user.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url(http://fonts.googleapis.com/css?family=Droid+Serif);\n/* Above line is to import google font style */\n#progressbar {\n  margin: 0;\n  padding: 0;\n  font-size: 18px; }\n.active {\n  color: green; }\nfieldset {\n  display: none;\n  padding: 20px;\n  margin-left: 85px;\n  border-radius: 5px; }\n#first {\n  display: block;\n  border-radius: 5px;\n  margin-left: 85px; }\ninput[type=text],\ninput[type=password],\ninput[type=date],\nselect {\n  width: 100%;\n  margin: 10px 0;\n  height: 40px;\n  padding: 5px; }\ntextarea {\n  width: 100%;\n  margin: 10px 0;\n  height: 70px;\n  padding: 5px; }\ninput[type=submit],\ninput[type=button] {\n  width: 120px;\n  margin: 15px 25px;\n  padding: 5px;\n  height: 40px;\n  background-color: green;\n  border: none;\n  color: white;\n  font-family: 'Droid Serif', serif; }\nh2, p {\n  text-align: center;\n  font-family: 'Droid Serif', serif; }\nli {\n  margin-right: 52px;\n  display: inline;\n  color: #c1c5cc;\n  font-family: 'Droid Serif', serif; }\n.multiselect-dropdown[_ngcontent-c3] .dropdown-btn[_ngcontent-c3] {\n  display: inline-block;\n  border: 1px solid #adadad;\n  width: 59% !important;\n  padding: 9px 6px;\n  margin-bottom: 0;\n  font-weight: 400;\n  line-height: 1.52857143;\n  text-align: left;\n  vertical-align: middle;\n  cursor: pointer;\n  background-image: none;\n  border-radius: 4px;\n  margin-left: 119px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zcG9uc29yLXVzZXIvRDpcXExhdGVzdCBPQlNcXE5ldyBmb2xkZXIgKDIpXFxOZXcgZm9sZGVyL3NyY1xcYXBwXFxob21lXFxzcG9uc29yLXVzZXJcXHNwb25zb3ItdXNlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSwrREFBWTtBQUNaLDhDQUFBO0FBR0E7RUFDQSxTQUFRO0VBQ1IsVUFBUztFQUNULGVBQWMsRUFBQTtBQUVkO0VBQ0EsWUFBVyxFQUFBO0FBRVg7RUFDQSxhQUFZO0VBRVosYUFBWTtFQUVaLGlCQUFpQjtFQUNqQixrQkFBaUIsRUFBQTtBQUdqQjtFQUNBLGNBQWE7RUFHYixrQkFBaUI7RUFDakIsaUJBQWlCLEVBQUE7QUFHakI7Ozs7RUFJQSxXQUFVO0VBQ1YsY0FBYTtFQUNiLFlBQVc7RUFDWCxZQUFXLEVBQUE7QUFJWDtFQUNBLFdBQVU7RUFDVixjQUFhO0VBQ2IsWUFBVztFQUNYLFlBQVcsRUFBQTtBQUlYOztFQUVBLFlBQVk7RUFDWixpQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLFlBQVk7RUFDWix1QkFBdUI7RUFDdkIsWUFBWTtFQUVaLFlBQVk7RUFDWixpQ0FBaUMsRUFBQTtBQUVqQztFQUNBLGtCQUFpQjtFQUNqQixpQ0FBaUMsRUFBQTtBQUVqQztFQUNBLGtCQUFpQjtFQUNqQixlQUFjO0VBQ2QsY0FBYTtFQUNiLGlDQUFpQyxFQUFBO0FBTWpDO0VBQ0kscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9ob21lL3Nwb25zb3ItdXNlci9zcG9uc29yLXVzZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuQGltcG9ydCB1cmwoaHR0cDovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RHJvaWQrU2VyaWYpO1xyXG4vKiBBYm92ZSBsaW5lIGlzIHRvIGltcG9ydCBnb29nbGUgZm9udCBzdHlsZSAqL1xyXG5cclxuXHJcbiNwcm9ncmVzc2JhcntcclxubWFyZ2luOjA7XHJcbnBhZGRpbmc6MDtcclxuZm9udC1zaXplOjE4cHg7XHJcbn1cclxuLmFjdGl2ZXtcclxuY29sb3I6Z3JlZW47XHJcbn1cclxuZmllbGRzZXR7XHJcbmRpc3BsYXk6bm9uZTtcclxuXHJcbnBhZGRpbmc6MjBweDtcclxuXHJcbm1hcmdpbi1sZWZ0OiA4NXB4O1xyXG5ib3JkZXItcmFkaXVzOjVweDtcclxuXHJcbn1cclxuI2ZpcnN0e1xyXG5kaXNwbGF5OmJsb2NrO1xyXG5cclxuXHJcbmJvcmRlci1yYWRpdXM6NXB4O1xyXG5tYXJnaW4tbGVmdDogODVweDtcclxuXHJcbn1cclxuaW5wdXRbdHlwZT10ZXh0XSxcclxuaW5wdXRbdHlwZT1wYXNzd29yZF0sXHJcbmlucHV0W3R5cGU9ZGF0ZV0sXHJcbnNlbGVjdHtcclxud2lkdGg6MTAwJTtcclxubWFyZ2luOjEwcHggMDtcclxuaGVpZ2h0OjQwcHg7XHJcbnBhZGRpbmc6NXB4O1xyXG5cclxuXHJcbn1cclxudGV4dGFyZWF7XHJcbndpZHRoOjEwMCU7XHJcbm1hcmdpbjoxMHB4IDA7XHJcbmhlaWdodDo3MHB4O1xyXG5wYWRkaW5nOjVweDtcclxuXHJcblxyXG59XHJcbmlucHV0W3R5cGU9c3VibWl0XSxcclxuaW5wdXRbdHlwZT1idXR0b25de1xyXG53aWR0aDogMTIwcHg7XHJcbm1hcmdpbjoxNXB4IDI1cHg7XHJcbnBhZGRpbmc6IDVweDtcclxuaGVpZ2h0OiA0MHB4O1xyXG5iYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuYm9yZGVyOiBub25lO1xyXG5cclxuY29sb3I6IHdoaXRlO1xyXG5mb250LWZhbWlseTogJ0Ryb2lkIFNlcmlmJywgc2VyaWY7XHJcbn1cclxuaDIscHtcclxudGV4dC1hbGlnbjpjZW50ZXI7XHJcbmZvbnQtZmFtaWx5OiAnRHJvaWQgU2VyaWYnLCBzZXJpZjtcclxufVxyXG5saXtcclxubWFyZ2luLXJpZ2h0OjUycHg7XHJcbmRpc3BsYXk6aW5saW5lO1xyXG5jb2xvcjojYzFjNWNjO1xyXG5mb250LWZhbWlseTogJ0Ryb2lkIFNlcmlmJywgc2VyaWY7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbi5tdWx0aXNlbGVjdC1kcm9wZG93bltfbmdjb250ZW50LWMzXSAuZHJvcGRvd24tYnRuW19uZ2NvbnRlbnQtYzNdIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNhZGFkYWQ7XHJcbiAgICB3aWR0aDogNTklICFpbXBvcnRhbnQ7XHJcbiAgICBwYWRkaW5nOiA5cHggNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS41Mjg1NzE0MztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMTlweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/home/sponsor-user/sponsor-user.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/home/sponsor-user/sponsor-user.component.ts ***!
  \*************************************************************/
/*! exports provided: SponsorUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsorUserComponent", function() { return SponsorUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");




var SponsorUserComponent = /** @class */ (function () {
    function SponsorUserComponent(fb, DataService) {
        this.fb = fb;
        this.DataService = DataService;
        this.ruleDetails = false;
        this.testDetailsFlag = false;
        this.ruleList = [];
        this.testCodeList = [];
        this.addressList = [];
        this.SponsorsData = [];
        this.ethenicData = [];
        this.eventdetail = false;
        this.ruleDataTable = [];
        this.addressData = [];
        this.rulesData = [];
        this.testCodeDetails = [];
        this.testCodeData = [];
        this.multiplepostdata = [];
        this.postCodeData = [];
        this.postalCodes = [];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.updateSponsor = {};
        this.addRuleform = this.fb.group({
            selectedEthenicName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectedGender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectedTestName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            minage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            maxage: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.commissionerform = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            budget: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            selectedpostCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(11)]],
            streetNumber: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            strname1: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            district: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            postCode: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
        this.getSponsorList();
    }
    SponsorUserComponent.prototype.initializeData = function () {
        this.multiplepostcode();
        this.getAllTestCodeDetails();
        this.getAllEthenic();
    };
    SponsorUserComponent.prototype.getPostalCodeforEdit = function (id) {
        var _this = this;
        this.sponsorId = id;
        this.DataService.getSponsorUpdate(id).subscribe(function (data) {
            _this.updateSponsor = data.resultData;
            console.log("Budget Details", _this.updateSponsor.budget);
            console.log("Gender Details", _this.updateSponsor.name);
            _this.selectedItems = _this.updateSponsor.postalCodes;
        });
        this.multiplepostcode();
    };
    SponsorUserComponent.prototype.updateSponsorDetails = function (data, selectedItems) {
        var _this = this;
        var obj = { "name": data.name, "budget": data.budget, postalCodes: selectedItems };
        this.DataService.updateSponsorDetails(obj, this.sponsorId).subscribe(function (data) {
            _this.getSponsorList();
        });
    };
    SponsorUserComponent.prototype.getAllEthenic = function () {
        var _this = this;
        this.DataService.getEthenic().subscribe(function (data) {
            _this.ethenicData = data.resultData;
        });
    };
    SponsorUserComponent.prototype.getSponsorList = function () {
        var _this = this;
        this.DataService.getSponsorsList().subscribe(function (data) {
            _this.SponsorsData = data.resultData;
        });
    };
    SponsorUserComponent.prototype.ruleTable = function (selectedEthenicName, selectedGender, minage, maxage, selectedTestName, sponsorId) {
        this.sponsorId = sponsorId;
        var gender = selectedGender.toString();
        var ruleobj = { gender: gender, minAgeGroup: minage, maxAgeGroup: maxage, tectCodeId: selectedTestName.id, ethnicGroupId: selectedEthenicName.id, ethnicName: selectedEthenicName.ethnicName, testName: selectedTestName.testName };
        //var tableObj={gender:gender,minAgeGroup:minage,maxAgeGroup:maxage,tectCodeId:selectedTestName.id,ethnicGroupId:selectedEthenicName.id,ethnicName:selectedEthenicName.ethnicName,testName:selectedTestName.testName}
        var tableObj = { sponsor_id: sponsorId, gender: gender, minAgeGroup: minage, maxAgeGroup: maxage, tectCodeId: selectedTestName.tectCodeId, ethnicGroupId: selectedEthenicName.ethnicGroupId, ethnicName: selectedEthenicName.ethnicName, testName: selectedTestName.testName };
        this.ruleList.push(tableObj);
        console.log(this.ruleList);
        console.log(ruleobj);
        this.ruleDetails = true;
        gender = "";
        minage = "";
        maxage = "";
        selectedTestName = "";
        selectedEthenicName = "";
    };
    SponsorUserComponent.prototype.ruletable2 = function () {
        var _this = this;
        this.DataService.createRuleDetails(this.ruleList).subscribe(function (data) {
            _this.addressList = [];
            _this.getSponsorList();
            //this.ruleList="";
        });
    };
    SponsorUserComponent.prototype.delete = function (x) {
        //let length=this.ruleList.length;
        this.ruleList.splice(x, 1);
        this.getRulesDetails(x);
    };
    // step1Details(name,email,phone,budget,postcode){
    SponsorUserComponent.prototype.step1Details = function (name, budget, postcode) {
        this.postcode = postcode;
        // this.obj1={name:name,email:email,phone:phone,budget:budget}
        this.obj1 = { name: name, budget: budget };
        // this.SponsorsData.push(obj);
    };
    //step2Details(streetNumber,strname1,strname2,city,country,district,region,state,zipcode)
    //this.obj2={streetNumber:streetNumber,streetName1:strname1,streetName2:strname2,city:city,country:country,district:district,region:region,state:state,zipcode:zipcode}
    SponsorUserComponent.prototype.step2Details = function (email, phone, streetNumber, strname1, city, district, postCode) {
        this.obj2 = { email: email, phone: phone, streetNumber: streetNumber, streetName1: strname1, city: city, district: district, postCode: postCode };
        this.addressList.push(this.obj2);
        // email="";phone="";streetNumber="";strname1="";city="";district="";postCode="";
        //  this.addressList.push(obj);
    };
    SponsorUserComponent.prototype.submitSponsorDetails = function (commissionerform) {
        var _this = this;
        for (var i = 0; i < this.ruleList.length; i++) {
            delete this.ruleList[i]['testName'];
            delete this.ruleList[i]['ethnicName'];
        }
        //this.obj1={name:this.name,email:this.email,phone:this.phone,budget:this.budget,postalCodes:this.postcode,addressList: this.addressList,ruleList:this.ruleList}
        this.obj1 = { name: this.name, budget: this.budget, postalCodes: this.postcode, addressList: this.addressList };
        console.log(this.obj1);
        this.DataService.createSponsorDetails(this.obj1).subscribe(function (data) {
            _this.name = "";
            _this.budget = "";
            _this.postcode = "";
            _this.addressList = [];
            _this.getSponsorList();
        });
        commissionerform.reset();
    };
    SponsorUserComponent.prototype.getAddressDetails = function (id) {
        var _this = this;
        this.DataService.getAddressDetails(id).subscribe(function (data) {
            _this.addressData = data.resultData;
            console.log("Address Details", _this.addressData);
        });
    };
    SponsorUserComponent.prototype.getRulesDetails = function (id) {
        var _this = this;
        this.sponsorId = id;
        this.DataService.getRulesDetails(id).subscribe(function (data) {
            _this.rulesData = data.resultData;
            // this.sponsorId=this.rulesData.sponsor_id;
            console.log("Rules Data", _this.rulesData);
        });
        this.DataService.editEthenicData().subscribe(function (data) {
            _this.ethenicData = data.resultData;
        });
        this.DataService.editTestListData().subscribe(function (data) {
            _this.testCodeData = data.resultData;
        });
    };
    SponsorUserComponent.prototype.getTestCodeDetails = function (id) {
        var _this = this;
        this.DataService.getTestCodeDetails(id).subscribe(function (data) {
            _this.testCodeDetails = data.resultData;
        });
    };
    SponsorUserComponent.prototype.getAllTestCodeDetails = function () {
        var _this = this;
        this.DataService.getAllTestCodeDetails().subscribe(function (response) {
            _this.testCodeData = response.resultData;
        });
    };
    SponsorUserComponent.prototype.multiplepostcode = function () {
        var _this = this;
        this.DataService.getMultiplepostCode().subscribe(function (response) {
            _this.dropdownList = response.resultData;
        });
        /*
       this.dropdownList = [
        { item_id: 1, item_text: 'Mumbai' },
        { item_id: 2, item_text: 'Bangaluru' },
        { item_id: 3, item_text: 'Pune' },
        { item_id: 4, item_text: 'Navsari' },
        { item_id: 5, item_text: 'New Delhi' }
      ];
    */
    };
    SponsorUserComponent.prototype.getPostCodeList = function (id) {
        var _this = this;
        this.sponsorId = id;
        this.DataService.getPostCodeList(id).subscribe(function (response) {
            _this.testCodeList = response.resultData;
            _this.multiplepostcode();
        });
    };
    SponsorUserComponent.prototype.updatePostalCode = function (postalId) {
    };
    SponsorUserComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    SponsorUserComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    //post rule data
    SponsorUserComponent.prototype.postRuleDetails = function (item) {
        var ruledata = {};
    };
    //editPostalCode(postalCodeName){
    //this.selectedpostCode=postalCodeName;
    //}
    SponsorUserComponent.prototype.updateSelectedPostalCode = function (postalId) {
        var _this = this;
        var postCode = { id: postalId.id };
        this.DataService.updateSelectedPostalCode(postCode, this.sponsorId).subscribe(function (res) {
            _this.getPostCodeList(_this.sponsorId);
        });
    };
    SponsorUserComponent.prototype.updateSelectedAddress = function (formData) {
        var _this = this;
        delete formData['isEditable1'];
        this.DataService.updateSelectedAddress(formData).subscribe(function (data) {
            _this.getPostCodeList(_this.sponsorId);
        });
    };
    SponsorUserComponent.prototype.updateSelectedRule = function (formData) {
        delete formData['isEditable2'];
        var gender = formData.gender.toString();
        formData.gender = gender;
        this.DataService.updateSelectedRule(formData).subscribe(function (data) {
        });
    };
    SponsorUserComponent.prototype.ngOnInit = function () {
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'postalCode',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
        //next form
        $(document).ready(function () {
            var count = 0; // To Count Blank Fields
            /*------------ Validation Function-----------------*/
            $(".submit_btn").click(function (event) {
                var radio_check = $('.rad'); // Fetching Radio Button By Class Name
                var input_field = $('.text_field'); // Fetching All Inputs With Same Class Name text_field & An HTML Tag textarea
                var text_area = $('textarea');
                // Validating Radio Button
                if (radio_check[0].checked == false && radio_check[1].checked == false) {
                    var y = 0;
                }
                else {
                    var y = 1;
                }
                // For Loop To Count Blank Inputs
                for (var i = input_field.length; i > count; i--) {
                    if (input_field[i - 1].value == '' || text_area.value == '') {
                        count = count + 1;
                    }
                    else {
                        count = 0;
                    }
                }
                // Notifying Validation
                if (count != 0 || y == 0) {
                    alert("*All Fields are mandatory*");
                    event.preventDefault();
                }
                else {
                    return true;
                }
            });
            /*---------------------------------------------------------*/
            $(".next_btn").click(function () {
                $(this).parent().next().fadeIn('slow');
                $(this).parent().css({
                    'display': 'none'
                });
                // Adding Class Active To Show Steps Forward;
                $('.active').next().addClass('active');
            });
            $(".pre_btn").click(function () {
                $(this).parent().prev().fadeIn('slow');
                $(this).parent().css({
                    'display': 'none'
                });
                // Removing Class Active To Show Steps Backward;
                $('.active:last').removeClass('active');
            });
            // Validating All Input And Textarea Fields
            $(".submit_btn").click(function (e) {
                if ($('input').val() == "" || $('textarea').val() == "") {
                    alert("*All Fields are mandatory*");
                    return false;
                }
                else {
                    return true;
                }
            });
        });
    };
    SponsorUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sponsor-user',
            template: __webpack_require__(/*! ./sponsor-user.component.html */ "./src/app/home/sponsor-user/sponsor-user.component.html"),
            styles: [__webpack_require__(/*! ./sponsor-user.component.scss */ "./src/app/home/sponsor-user/sponsor-user.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], SponsorUserComponent);
    return SponsorUserComponent;
}());



/***/ }),

/***/ "./src/app/home/sponsordetails/sponsordetails.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/home/sponsordetails/sponsordetails.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\n  <div>\n    <h1><i class=\"fa fa-th-list\"></i> Commissioner</h1>\n    <p>Commissioner Details</p>\n  </div>\n  <ul class=\"app-breadcrumb breadcrumb\">\n  </ul>\n</div>\n\n<div class=\"row\">\n\n  <div class=\"col-xs-12 col-sm-12\">\n\n    <!-- User info -->\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n\n\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"tile\">\n          <h4 class=\"panel-title\">&nbsp;&nbsp;Commissioner Info</h4>\n\n          <table class=\"table profile__table\">\n            <tbody>\n              <tr>\n                <th><strong>Name</strong></th>\n                <th><strong>Budget</strong></th>\n                <th><strong>District Codes</strong></th>\n                <th><strong>Edit</strong></th>\n              </tr>\n              <tr>\n                <td>\n                  <div *ngIf=\"!isEditable1\">{{name}}</div>\n                  <input type=\"text\" *ngIf=\"isEditable1\" class=\"form-control\" [(ngModel)]=\"name\">\n                </td>\n                <td>\n                  <div *ngIf=\"!isEditable1\">{{budget}}</div>\n                  <input type=\"text\" *ngIf=\"isEditable1\" class=\"form-control\" [(ngModel)]=\"budget\">\n                </td>\n                <td >\n                  <span *ngIf=\"!isEditable1\">\n                    <span *ngFor=\"let i of postalCodesDetails\">\n                      {{i.postalCode}}\n                    </span>\n                  </span>\n                    <div *ngIf=\"isEditable1\" >\n                      <ng-multiselect-dropdown [placeholder]=\"'Select Post Code'\" [data]=\"dropdownList\"\n                        [(ngModel)]=\"selectedItems\" [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\"\n                        (onSelectAll)=\"onSelectAll($event)\">\n                      </ng-multiselect-dropdown>\n                    </div>\n                </td>\n                <td>\n                    <button class=\"btn btn-info btn-sm \" (click)=\"isEditable1=!isEditable1;getPostalCodeforEdit(id)\"\n                      *ngIf=\"!isEditable1\"><i class=\"fa fa-edit\"></i>Edit</button>\n                    <button class=\"btn btn-success btn-sm\" *ngIf=\"isEditable1\"\n                      (click)=\"isEditable1=!isEditable1;updateSponsorDetails(name,budget,selectedItems)\">Save</button>\n                  </td>\n              </tr>\n            </tbody>\n            <!-- <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Name</th>\n                  <th>Budget</th>\n                  <th>Edit</th>\n                  <th>View</th>\n                </tr>\n              </thead>\n            <tbody>\n                <tr *ngFor=\"let item of SponsorsData| filter:term |paginate: { itemsPerPage: 5, currentPage: p };let i=index \">\n                  <td>{{i+1}}</td>\n                  <td>{{item.name}}</td>\n                  <td>{{item.budget}}</td>\n                  <td>\n                    <a href=\"\" class=\"btn btn-warning btn-sm\" data-toggle=\"modal\"  data-backdrop=\"static\" data-target=\"#editSponsor\"\n                      (click)=\"getPostalCodeforEdit(item.id)\"><i class=\"fa fa-edit\"></i>Edit</a>\n                  </td>\n                  <td>\n                      <a href=\"\" class=\"btn btn-info btn-sm\" data-toggle=\"modal\" data-target=\"#rulemyModal\" data-backdrop=\"static\"  (click)=\"getRulesDetails(item.id)\"><i class=\"fa fa-plus\"></i>Add Rules</a>&nbsp;&nbsp;\n                    <a href=\"\" data-backdrop=\"static\"  class=\"btn btn-success btn-sm\" data-toggle=\"modal\" data-target=\"#postCodeslist\"\n                      (click)=\"getPostCodeList(item.id)\"><i class=\"fa fa-edit\"></i>District Codes</a>&nbsp;&nbsp;<a class=\"btn btn-primary btn-sm\" href=\"\"\n                      data-toggle=\"modal\" data-target=\"#addressDetails\"\n                      (click)=\"getAddressDetails(item.id)\" data-backdrop=\"static\" ><i class=\"fa fa-edit\"></i>Contacts</a>&nbsp;&nbsp;<a href=\"\" class=\"btn btn-info btn-sm\"\n                      data-toggle=\"modal\" data-target=\"#ruleDetails\" data-backdrop=\"static\"  (click)=\"getRulesDetails(item.id)\"><i class=\"fa fa-edit\"></i>Rules</a>&nbsp;&nbsp;\n                  </td>\n                </tr>\n              </tbody> -->\n          </table>\n        </div>\n      </div>\n    </div>\n\n    <!-- Community -->\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"tile\">\n          <h4 class=\"panel-title\">&nbsp;&nbsp;Address Details</h4>\n          <table class=\"table profile__table\">\n            <tbody>\n              <tr>\n                <th><strong>Email Id</strong></th>\n\n                <td>\n                  <div *ngIf=\"!isEditable3\">{{address.email}}</div>\n                  <input type=\"text\" *ngIf=\"isEditable3\" class=\"form-control\" [(ngModel)]=\"address.email\">\n                </td>\n\n              </tr>\n              <tr>\n                <th><strong>Phone Number</strong></th>\n                <td>\n                  <div *ngIf=\"!isEditable3\">{{address.phone}}</div>\n                  <input type=\"text\" *ngIf=\"isEditable3\" class=\"form-control\" [(ngModel)]=\"address.phone\">\n                </td>\n\n              </tr>\n              <tr *ngIf=\"!isEditable3\">\n                  <th><strong>Address</strong></th>\n                  <td>\n                  <div >Street Number #{{address.streetNumber}}, {{streetName1}}<br>\n                    City: {{address.city}}, District: {{address.district}} - Postal Code: {{address.postCode}}\n                  </div>\n                </td>\n              </tr>\n              <tr *ngIf=\"isEditable3\">\n                <th *ngIf=\"isEditable3\"><strong>Street Number:</strong></th>\n\n                <td>\n                  <!-- <div *ngIf=\"!isEditable3\">{{address.streetNumber}}</div> -->\n                  <input type=\"text\" *ngIf=\"isEditable3\" class=\"form-control\" [(ngModel)]=\"address.streetNumber\">\n                </td>\n\n              </tr>\n              <tr *ngIf=\"isEditable3\">\n                <th *ngIf=\"isEditable3\"><strong>Street Name1</strong></th>\n\n                <td>\n                  <!-- <div *ngIf=\"!isEditable3\">{{address.streetName1}}</div> -->\n                  <input type=\"text\" *ngIf=\"isEditable3\" class=\"form-control\" [(ngModel)]=\"address.streetName1\">\n                </td>\n\n              </tr>\n              <tr *ngIf=\"isEditable3\">\n                <th *ngIf=\"isEditable3\"><strong>City</strong></th>\n\n                <td>\n                  <!-- <div *ngIf=\"!isEditable3\">{{address.city}}</div> -->\n                  <input type=\"text\" *ngIf=\"isEditable3\" class=\"form-control\" [(ngModel)]=\"address.city\">\n                </td>\n\n              </tr>\n              <tr *ngIf=\"isEditable3\">\n                <th *ngIf=\"isEditable3\"><strong>District</strong></th>\n\n                <td>\n                  <!-- <div *ngIf=\"!isEditable3\">{{address.district}}</div> -->\n                  <input type=\"text\" *ngIf=\"isEditable3\" class=\"form-control\" [(ngModel)]=\"address.district\">\n                </td>\n\n              </tr>\n              <tr *ngIf=\"isEditable3\">\n                <th *ngIf=\"isEditable3\"><strong>Postal Code</strong></th>\n                <td>\n                  <!-- <div *ngIf=\"!isEditable3\">{{address.postCode}}</div> -->\n                  <input type=\"text\" *ngIf=\"isEditable3\" class=\"form-control\" [(ngModel)]=\"address.postCode\">\n                </td>\n\n              </tr>\n              <tr>\n                <td></td>\n                <td>\n                  <button class=\"btn btn-info btn-sm pull-right\" (click)=\"isEditable3=!isEditable3\" *ngIf=\"!isEditable3\"><i\n                      class=\"fa fa-edit\"></i>Edit</button>\n                  <button class=\"btn btn-success btn-sm pull-right\" *ngIf=\"isEditable3\"\n                    (click)=\"isEditable3=!isEditable3;updateSelectedAddress(address)\">Save</button>\n                </td>\n              </tr>\n            </tbody>\n            <!-- <thead>\n                <tr>\n                  <th>#</th>\n                  <th>Email</th>\n                  <th>Phone</th>\n                  <th>Street No.</th>\n                  <th>Street Name1</th>\n                  <th>City</th>\n                  <th>District</th>\n                  <th>District Codes</th>\n                  <th>Action</th>\n                </tr>\n              </thead>\n            <tbody>\n                \n              <tr *ngFor='let item of address let i=index'>\n                  <td>{{i+1}}</td>\n                <td>\n                  <div *ngIf=\"!item.isEditable9\">{{address.email}}</div>\n                  <input type=\"text\" *ngIf=\"item.isEditable9\" class=\"form-control\" [(ngModel)]=\"address.email\">\n                </td>\n                <td>\n                  <div *ngIf=\"!item.isEditable9\">{{address.phone}}</div>\n                  <input type=\"text\" *ngIf=\"item.isEditable9\" class=\"form-control\" [(ngModel)]=\"address.phone\">\n                </td>\n                <td>\n                  <div *ngIf=\"!item.isEditable9\">{{address.streetNumber}}</div>\n                  <input type=\"text\" *ngIf=\"item.isEditable9\" class=\"form-control\" [(ngModel)]=\"address.streetNumber\">\n                </td>\n                <td>\n                  <div *ngIf=\"!item.isEditable9\">\n                    {{address.streetName1}}\n                  </div>\n                  <input type=\"text\" *ngIf=\"item.isEditable9\" class=\"form-control\" [(ngModel)]=\"address.streetName1\">\n                </td>\n\n                <td>\n                  <div *ngIf=\"!item.isEditable9\">\n                    {{address.city}}\n                  </div>\n                  <input type=\"text\" *ngIf=\"item.isEditable9\" class=\"form-control\" [(ngModel)]=\"address.city\">\n                </td>\n\n                <td>\n                  <div *ngIf=\"!item.isEditable9\">\n                    {{address.district}}\n                  </div>\n                  <input type=\"text\" *ngIf=\"item.isEditable9\" class=\"form-control\" [(ngModel)]=\"address.district\">\n                </td>\n\n                <td>\n                  <div *ngIf=\"!item.isEditable9\">\n                    {{address.postCode}}\n                  </div>\n                  <input type=\"text\" *ngIf=\"item.isEditable9\" class=\"form-control\" [(ngModel)]=\"address.postCode\">\n                </td>\n                <td>\n                  <button class=\"btn btn-info btn-sm\" (click)=\"item.isEditable9=!item.isEditable9\"\n                    *ngIf=\"!item.isEditable9\">Edit</button>\n                  <button class=\"btn btn-success btn-sm\" *ngIf=\"item.isEditable9\"\n                    (click)=\"item.isEditable9=!item.isEditable9;updateSelectedAddress(item)\">Save</button>\n                </td>\n              </tr>\n              <tr>\n\n            </tbody> -->\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"tile\">\n          <h4 class=\"panel-title\">&nbsp;&nbsp;Rule Details</h4>\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Ethinic Name</th>\n                <th>Test Name</th>\n                <th>Gender</th>\n                <th>Max Age</th>\n                <th>Min Age</th>\n                <th>Status</th>\n                <th>Edit</th>\n\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of sponsorDetailsRule;let i=index\">\n                <td>\n                  <span *ngIf=\"!isEditable10\">{{i+1}}</span>\n                </td>\n                <td>\n                    <span *ngIf=\"!isEditable10\">{{item.ethnicName}}</span>\n                    <!-- <input type=\"text\" *ngIf=\"isEditable10\" class=\"\" [(ngModel)]=\"item.ethnicName\"> -->\n                    <div>\n                        <select [(ngModel)]=\"item.ethnicGroupId\" *ngIf=\"isEditable10\">\n                          <option *ngFor=\"let c of ethenicData\" [ngValue]=\"c.id\">{{c.ethnicName}}</option>\n                        </select>\n                      </div>\n                </td>\n                <td>\n                    <span *ngIf=\"!isEditable10\">{{item.testName}}</span>\n                    <select [(ngModel)]=\"item.testCodeId\" *ngIf=\"isEditable10\">\n                        <option *ngFor=\"let c of testCodeData\" [ngValue]=\"c.testCodeId\">{{c.testName}}</option>\n                      </select>\n                    \n                    <!-- <input type=\"text\" *ngIf=\"isEditable10\" class=\"\" [(ngModel)]=\"item.testName\"> -->\n                    <!-- <select [(ngModel)]=\"item.testName\">\n                        <option *ngFor=\"let c of ethenicData\" [ngValue]=\"c.testCodeId\"><span *ngIf=\"isEditable10\">{{c.testName}}</span></option>\n                      </select> -->\n                </td>\n                <!-- <td>\n                    <span *ngIf=\"!isEditable10\">{{item.ethnicName}}</span>\n                    <div *ngIf=\"isEditable10\">\n                        \n                      <select [(ngModel)]=\"item.ethnicGroupId\">\n                        <option *ngFor=\"let c of ethenicData\" [ngValue]=\"c.ethnicGroupId\"><span *ngIf=\"isEditable10\">{{c.ethnicName}}</span></option>\n                      </select>\n                    </div>\n                  </td>\n                  <td>\n                    <select [(ngModel)]=\"item.testCodeId\">\n                      <option *ngFor=\"let c of testCodeData\" [ngValue]=\"c.testCodeId\">{{c.testName}}</option>\n                    </select>\n    \n                  </td> -->\n                <td>\n                  <span *ngIf=\"!isEditable10\">{{item.gender}}</span>\n                  <select class=\"form-control\"  *ngIf=\"isEditable10\" [(ngModel)]=\"item.gender\" multiple\n                  style=\"height: 60px;\">\n                  <option value=\"Man\">Man </option>\n                  <option value=\"Women\">Woman</option>\n                  <option value=\"Transman \">Transman </option>\n                  <option value=\"Transwoman \">Transwoman </option>\n                </select>\n                  <!-- <input type=\"text\" *ngIf=\"isEditable10\" class=\"\" [(ngModel)]=\"item.gender\"> -->\n                </td>\n                <td>\n                  <span *ngIf=\"!isEditable10\">{{item.maxAgeGroup}}</span>\n                  <input type=\"text\" *ngIf=\"isEditable10\" class=\"\" [(ngModel)]=\"item.maxAgeGroup\">\n                </td>\n                <td>\n                  <span *ngIf=\"!isEditable10\">{{item.minAgeGroup}}</span>\n                  <input type=\"text\" *ngIf=\"isEditable10\" class=\"\" [(ngModel)]=\"item.minAgeGroup\">\n                </td>\n                <td>\n                  <span *ngIf=\"!isEditable10\">{{item.status}}</span>\n                  <!-- <input type=\"text\" *ngIf=\"isEditable10\" class=\"\" [(ngModel)]=\"item.status\"> -->\n                  <select *ngIf=\"isEditable10\" class=\"\" [(ngModel)]=\"item.status\">\n                    <option value=\"Active\">Active</option>\n                    <option value=\"Inactive\">Inactive</option>\n                  </select>\n                </td>\n                <td>\n                  <button class=\"btn btn-info btn-sm\" (click)=\"isEditable10=!isEditable10\" *ngIf=\"!isEditable10\"><i\n                      class=\"fa fa-edit\"></i>Edit</button>\n                  <button class=\"btn btn-success btn-sm\" *ngIf=\"isEditable10\"\n                    (click)=\"isEditable10=!isEditable10;updateSelectedRule(item)\">Save</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel panel-default\">\n      <div class=\"panel-heading\">\n\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"tile\">\n          <h4 class=\"panel-title\">&nbsp;&nbsp;District Code Details</h4>\n          <table class=\"table profile__table\">\n            <tbody>\n              <tr>\n                <th><strong>District Code</strong></th>\n\n                <td>\n                  <span *ngFor=\"let item of postalCodesDetails\">\n                    <span *ngIf=\"!isEditable12\"> {{item.postalCode}}</span>\n                    &nbsp;&nbsp;\n                    <!-- <input type=\"text\" *ngIf=\"isEditable12\" class=\"\" [(ngModel)]=\"item.postalCode\"> -->\n                  </span>\n                </td>\n\n                <!-- <td>\n                  <button class=\"btn btn-info btn-sm\" (click)=\"isEditable12=!isEditable12\" *ngIf=\"!isEditable12\"><i\n                      class=\"fa fa-edit\"></i>Edit</button>\n                  <button class=\"btn btn-success btn-sm\" *ngIf=\"isEditable12\"\n                    (click)=\"isEditable12=!isEditable12;updateSelectedAddress(zipcode)\">Save</button>\n                </td> -->\n\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n    <div class=\"panel panel-default\" *ngIf=\"false\">\n      <div class=\"panel-heading\">\n\n      </div>\n      <div class=\"panel-body\">\n        <div class=\"tile\">\n          <h4 class=\"panel-title\">&nbsp;&nbsp;Test Codes Details</h4>\n          <table class=\"table\">\n            <thead>\n              <tr>\n                <th>Test Name</th>\n                <th>Description</th>\n                <th>Test Code</th>\n                <th>Edit</th>\n\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let item of testcodeDetails\">\n                <td>\n                  <span *ngIf=\"!isEditable13\">{{item.testName}}</span>\n                  <input type=\"text\" *ngIf=\"isEditable13\" class=\"\" [(ngModel)]=\"item.testName\">\n                </td>\n                <td>\n                  <span *ngIf=\"!isEditable13\">{{item.description}}</span>\n                  <input type=\"text\" *ngIf=\"isEditable13\" class=\"\" [(ngModel)]=\"item.description\">\n                </td>\n                <td>\n                  <span *ngIf=\"!isEditable13\">{{item.testCode}}</span>\n                  <input type=\"text\" *ngIf=\"isEditable13\" class=\"\" [(ngModel)]=\"item.testCode\">\n                </td>\n                <td>\n                  <button class=\"btn btn-info btn-sm\" (click)=\"isEditable13=!isEditable13\" *ngIf=\"!isEditable13\"><i\n                      class=\"fa fa-edit\"></i>Edit</button>\n                  <button class=\"btn btn-success btn-sm\" *ngIf=\"isEditable13\"\n                    (click)=\"isEditable13=!isEditable13;updatetestcodeDetails(item)\">Save</button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/sponsordetails/sponsordetails.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/home/sponsordetails/sponsordetails.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/**\r\n * Panels\r\n */\n/*** General styles ***/\n.panel {\n  box-shadow: none; }\n.panel-heading {\n  border-bottom: 0; }\n.panel-title {\n  font-size: 17px; }\n.panel-title > small {\n  font-size: .75em;\n  color: #999999; }\n.panel-body *:first-child {\n  margin-top: 0; }\n.panel-footer {\n  border-top: 0; }\n.panel-default > .panel-heading {\n  color: #333333;\n  background-color: transparent;\n  border-color: rgba(0, 0, 0, 0.07); }\n/**\r\n   * Profile\r\n   */\n/*** Profile: Header  ***/\n.profile__avatar {\n  float: left;\n  width: 60px;\n  height: 60px;\n  border-radius: 50%;\n  margin-right: 20px;\n  overflow: hidden; }\n@media (min-width: 768px) {\n  .profile__avatar {\n    width: 100px;\n    height: 100px; } }\n.profile__avatar > img {\n  width: 100%;\n  height: auto; }\n.profile__header {\n  overflow: hidden; }\n.profile__header p {\n  margin: 20px 0; }\n/*** Profile: Table ***/\n@media (min-width: 992px) {\n  .profile__table tbody th {\n    width: 200px; } }\n/*** Profile: Recent activity ***/\n.profile-comments__item {\n  position: relative;\n  padding: 15px 16px;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05); }\n.profile-comments__item:last-child {\n  border-bottom: 0; }\n.profile-comments__item:hover,\n.profile-comments__item:focus {\n  background-color: #f5f5f5; }\n.profile-comments__item:hover .profile-comments__controls,\n.profile-comments__item:focus .profile-comments__controls {\n  visibility: visible; }\n.profile-comments__controls {\n  position: absolute;\n  top: 0;\n  right: 0;\n  padding: 5px;\n  visibility: hidden; }\n.profile-comments__controls > a {\n  display: inline-block;\n  padding: 2px;\n  color: #999999; }\n.profile-comments__controls > a:hover,\n.profile-comments__controls > a:focus {\n  color: #333333; }\n.profile-comments__avatar {\n  display: block;\n  float: left;\n  margin-right: 20px;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  overflow: hidden; }\n.profile-comments__avatar > img {\n  width: 100%;\n  height: auto; }\n.profile-comments__body {\n  overflow: hidden; }\n.profile-comments__sender {\n  color: #333333;\n  font-weight: 500;\n  margin: 5px 0; }\n.profile-comments__sender > small {\n  margin-left: 5px;\n  font-size: 12px;\n  font-weight: 400;\n  color: #999999; }\n@media (max-width: 767px) {\n  .profile-comments__sender > small {\n    display: block;\n    margin: 5px 0 10px; } }\n.profile-comments__content {\n  color: #999999; }\n/*** Profile: Contact ***/\n.profile__contact-btn {\n  padding: 12px 20px;\n  margin-bottom: 20px; }\n.profile__contact-hr {\n  position: relative;\n  border-color: rgba(0, 0, 0, 0.1);\n  margin: 40px 0; }\n.profile__contact-hr:before {\n  content: \"OR\";\n  display: block;\n  padding: 10px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n  transform: translate(-50%, -50%);\n  background-color: #f5f5f5;\n  color: #c6c6cc; }\n.profile__contact-info-item {\n  margin-bottom: 30px; }\n.profile__contact-info-item:before,\n.profile__contact-info-item:after {\n  content: \" \";\n  display: table; }\n.profile__contact-info-item:after {\n  clear: both; }\n.profile__contact-info-item:before,\n.profile__contact-info-item:after {\n  content: \" \";\n  display: table; }\n.profile__contact-info-item:after {\n  clear: both; }\n.profile__contact-info-icon {\n  float: left;\n  font-size: 18px;\n  color: #999999; }\n.profile__contact-info-body {\n  overflow: hidden;\n  padding-left: 20px;\n  color: #999999; }\n.profile__contact-info-body a {\n  color: #999999; }\n.profile__contact-info-body a:hover,\n.profile__contact-info-body a:focus {\n  color: #999999;\n  text-decoration: none; }\n.profile__contact-info-heading {\n  margin-top: 2px;\n  margin-bottom: 5px;\n  font-weight: 500;\n  color: #999999; }\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zcG9uc29yZGV0YWlscy9EOlxcTGF0ZXN0IE9CU1xcTmV3IGZvbGRlciAoMilcXE5ldyBmb2xkZXIvc3JjXFxhcHBcXGhvbWVcXHNwb25zb3JkZXRhaWxzXFxzcG9uc29yZGV0YWlscy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvaG9tZS9zcG9uc29yZGV0YWlscy9zcG9uc29yZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTs7RUNDRTtBREVGLHVCQUFBO0FBQ0E7RUFDSSxnQkFBZ0IsRUFBQTtBQUVsQjtFQUNFLGdCQUFnQixFQUFBO0FBRWxCO0VBQ0UsZUFBZSxFQUFBO0FBRWpCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGFBQWEsRUFBQTtBQUVmO0VBQ0UsYUFBYSxFQUFBO0FBR2Y7RUFDSSxjQUFjO0VBQ2QsNkJBQTZCO0VBQzdCLGlDQUFpQyxFQUFBO0FBR3JDOztJQ0RFO0FESUYseUJBQUE7QUFDQTtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7QUFFbEI7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhLEVBQUEsRUFDZDtBQUVIO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQTtBQUVkO0VBQ0UsZ0JBQWdCLEVBQUE7QUFFbEI7RUFDRSxjQUFjLEVBQUE7QUFFaEIsdUJBQUE7QUFDQTtFQUNFO0lBQ0UsWUFBWSxFQUFBLEVBQ2I7QUFFSCxpQ0FBQTtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQiw0Q0FBNEMsRUFBQTtBQUU5QztFQUNFLGdCQUFnQixFQUFBO0FBRWxCOztFQUVFLHlCQUF5QixFQUFBO0FBRTNCOztFQUVFLG1CQUFtQixFQUFBO0FBRXJCO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixRQUFRO0VBQ1IsWUFBWTtFQUNaLGtCQUFrQixFQUFBO0FBRXBCO0VBQ0UscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixjQUFjLEVBQUE7QUFFaEI7O0VBRUUsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZ0JBQWdCLEVBQUE7QUFFbEI7RUFDRSxXQUFXO0VBQ1gsWUFBWSxFQUFBO0FBRWQ7RUFDRSxnQkFBZ0IsRUFBQTtBQUVsQjtFQUNFLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsYUFBYSxFQUFBO0FBRWY7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixjQUFjLEVBQUE7QUFFaEI7RUFDRTtJQUNFLGNBQWM7SUFDZCxrQkFBa0IsRUFBQSxFQUNuQjtBQUVIO0VBQ0UsY0FBYyxFQUFBO0FBRWhCLHlCQUFBO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7QUFFckI7RUFDRSxrQkFBa0I7RUFDbEIsZ0NBQWdDO0VBQ2hDLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULHdDQUF3QztFQUN4QyxnQ0FBZ0M7RUFDaEMseUJBQXlCO0VBQ3pCLGNBQWMsRUFBQTtBQUVoQjtFQUNFLG1CQUFtQixFQUFBO0FBRXJCOztFQUVFLFlBQVk7RUFDWixjQUFjLEVBQUE7QUFFaEI7RUFDRSxXQUFXLEVBQUE7QUFFYjs7RUFFRSxZQUFZO0VBQ1osY0FBYyxFQUFBO0FBRWhCO0VBQ0UsV0FBVyxFQUFBO0FBRWI7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGNBQWMsRUFBQTtBQUVoQjtFQUNFLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBO0FBRWhCO0VBQ0UsY0FBYyxFQUFBO0FBRWhCOztFQUVFLGNBQWM7RUFDZCxxQkFBcUIsRUFBQTtBQUV2QjtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGNBQWMsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3BvbnNvcmRldGFpbHMvc3BvbnNvcmRldGFpbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLyoqXHJcbiAqIFBhbmVsc1xyXG4gKi9cclxuLyoqKiBHZW5lcmFsIHN0eWxlcyAqKiovXHJcbi5wYW5lbCB7XHJcbiAgICBib3gtc2hhZG93OiBub25lO1xyXG4gIH1cclxuICAucGFuZWwtaGVhZGluZyB7XHJcbiAgICBib3JkZXItYm90dG9tOiAwO1xyXG4gIH1cclxuICAucGFuZWwtdGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gIH1cclxuICAucGFuZWwtdGl0bGUgPiBzbWFsbCB7XHJcbiAgICBmb250LXNpemU6IC43NWVtO1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgfVxyXG4gIC5wYW5lbC1ib2R5ICo6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICB9XHJcbiAgLnBhbmVsLWZvb3RlciB7XHJcbiAgICBib3JkZXItdG9wOiAwO1xyXG4gIH1cclxuICBcclxuICAucGFuZWwtZGVmYXVsdCA+IC5wYW5lbC1oZWFkaW5nIHtcclxuICAgICAgY29sb3I6ICMzMzMzMzM7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4wNyk7XHJcbiAgfVxyXG4gIFxyXG4gIC8qKlxyXG4gICAqIFByb2ZpbGVcclxuICAgKi9cclxuICAvKioqIFByb2ZpbGU6IEhlYWRlciAgKioqL1xyXG4gIC5wcm9maWxlX19hdmF0YXIge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogNjBweDtcclxuICAgIGhlaWdodDogNjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMjBweDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnByb2ZpbGVfX2F2YXRhciB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnByb2ZpbGVfX2F2YXRhciA+IGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICB9XHJcbiAgLnByb2ZpbGVfX2hlYWRlciB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAucHJvZmlsZV9faGVhZGVyIHAge1xyXG4gICAgbWFyZ2luOiAyMHB4IDA7XHJcbiAgfVxyXG4gIC8qKiogUHJvZmlsZTogVGFibGUgKioqL1xyXG4gIEBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkge1xyXG4gICAgLnByb2ZpbGVfX3RhYmxlIHRib2R5IHRoIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAvKioqIFByb2ZpbGU6IFJlY2VudCBhY3Rpdml0eSAqKiovXHJcbiAgLnByb2ZpbGUtY29tbWVudHNfX2l0ZW0ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTVweCAxNnB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7XHJcbiAgfVxyXG4gIC5wcm9maWxlLWNvbW1lbnRzX19pdGVtOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICB9XHJcbiAgLnByb2ZpbGUtY29tbWVudHNfX2l0ZW06aG92ZXIsXHJcbiAgLnByb2ZpbGUtY29tbWVudHNfX2l0ZW06Zm9jdXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcclxuICB9XHJcbiAgLnByb2ZpbGUtY29tbWVudHNfX2l0ZW06aG92ZXIgLnByb2ZpbGUtY29tbWVudHNfX2NvbnRyb2xzLFxyXG4gIC5wcm9maWxlLWNvbW1lbnRzX19pdGVtOmZvY3VzIC5wcm9maWxlLWNvbW1lbnRzX19jb250cm9scyB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxuICAucHJvZmlsZS1jb21tZW50c19fY29udHJvbHMge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgfVxyXG4gIC5wcm9maWxlLWNvbW1lbnRzX19jb250cm9scyA+IGEge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMnB4O1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgfVxyXG4gIC5wcm9maWxlLWNvbW1lbnRzX19jb250cm9scyA+IGE6aG92ZXIsXHJcbiAgLnByb2ZpbGUtY29tbWVudHNfX2NvbnRyb2xzID4gYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzMzMzMzMztcclxuICB9XHJcbiAgLnByb2ZpbGUtY29tbWVudHNfX2F2YXRhciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgd2lkdGg6IDQwcHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAucHJvZmlsZS1jb21tZW50c19fYXZhdGFyID4gaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gIH1cclxuICAucHJvZmlsZS1jb21tZW50c19fYm9keSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIH1cclxuICAucHJvZmlsZS1jb21tZW50c19fc2VuZGVyIHtcclxuICAgIGNvbG9yOiAjMzMzMzMzO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgfVxyXG4gIC5wcm9maWxlLWNvbW1lbnRzX19zZW5kZXIgPiBzbWFsbCB7XHJcbiAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gIH1cclxuICBAbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcclxuICAgIC5wcm9maWxlLWNvbW1lbnRzX19zZW5kZXIgPiBzbWFsbCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW46IDVweCAwIDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5wcm9maWxlLWNvbW1lbnRzX19jb250ZW50IHtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gIH1cclxuICAvKioqIFByb2ZpbGU6IENvbnRhY3QgKioqL1xyXG4gIC5wcm9maWxlX19jb250YWN0LWJ0biB7XHJcbiAgICBwYWRkaW5nOiAxMnB4IDIwcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gIH1cclxuICAucHJvZmlsZV9fY29udGFjdC1ociB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIG1hcmdpbjogNDBweCAwO1xyXG4gIH1cclxuICAucHJvZmlsZV9fY29udGFjdC1ocjpiZWZvcmUge1xyXG4gICAgY29udGVudDogXCJPUlwiO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG4gICAgY29sb3I6ICNjNmM2Y2M7XHJcbiAgfVxyXG4gIC5wcm9maWxlX19jb250YWN0LWluZm8taXRlbSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIH1cclxuICAucHJvZmlsZV9fY29udGFjdC1pbmZvLWl0ZW06YmVmb3JlLFxyXG4gIC5wcm9maWxlX19jb250YWN0LWluZm8taXRlbTphZnRlciB7XHJcbiAgICBjb250ZW50OiBcIiBcIjtcclxuICAgIGRpc3BsYXk6IHRhYmxlO1xyXG4gIH1cclxuICAucHJvZmlsZV9fY29udGFjdC1pbmZvLWl0ZW06YWZ0ZXIge1xyXG4gICAgY2xlYXI6IGJvdGg7XHJcbiAgfVxyXG4gIC5wcm9maWxlX19jb250YWN0LWluZm8taXRlbTpiZWZvcmUsXHJcbiAgLnByb2ZpbGVfX2NvbnRhY3QtaW5mby1pdGVtOmFmdGVyIHtcclxuICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgZGlzcGxheTogdGFibGU7XHJcbiAgfVxyXG4gIC5wcm9maWxlX19jb250YWN0LWluZm8taXRlbTphZnRlciB7XHJcbiAgICBjbGVhcjogYm90aDtcclxuICB9XHJcbiAgLnByb2ZpbGVfX2NvbnRhY3QtaW5mby1pY29uIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgfVxyXG4gIC5wcm9maWxlX19jb250YWN0LWluZm8tYm9keSB7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM5OTk5OTk7XHJcbiAgfVxyXG4gIC5wcm9maWxlX19jb250YWN0LWluZm8tYm9keSBhIHtcclxuICAgIGNvbG9yOiAjOTk5OTk5O1xyXG4gIH1cclxuICAucHJvZmlsZV9fY29udGFjdC1pbmZvLWJvZHkgYTpob3ZlcixcclxuICAucHJvZmlsZV9fY29udGFjdC1pbmZvLWJvZHkgYTpmb2N1cyB7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICB9XHJcbiAgLnByb2ZpbGVfX2NvbnRhY3QtaW5mby1oZWFkaW5nIHtcclxuICAgIG1hcmdpbi10b3A6IDJweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBjb2xvcjogIzk5OTk5OTtcclxuICB9IiwiLyoqXHJcbiAqIFBhbmVsc1xyXG4gKi9cbi8qKiogR2VuZXJhbCBzdHlsZXMgKioqL1xuLnBhbmVsIHtcbiAgYm94LXNoYWRvdzogbm9uZTsgfVxuXG4ucGFuZWwtaGVhZGluZyB7XG4gIGJvcmRlci1ib3R0b206IDA7IH1cblxuLnBhbmVsLXRpdGxlIHtcbiAgZm9udC1zaXplOiAxN3B4OyB9XG5cbi5wYW5lbC10aXRsZSA+IHNtYWxsIHtcbiAgZm9udC1zaXplOiAuNzVlbTtcbiAgY29sb3I6ICM5OTk5OTk7IH1cblxuLnBhbmVsLWJvZHkgKjpmaXJzdC1jaGlsZCB7XG4gIG1hcmdpbi10b3A6IDA7IH1cblxuLnBhbmVsLWZvb3RlciB7XG4gIGJvcmRlci10b3A6IDA7IH1cblxuLnBhbmVsLWRlZmF1bHQgPiAucGFuZWwtaGVhZGluZyB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMDcpOyB9XG5cbi8qKlxyXG4gICAqIFByb2ZpbGVcclxuICAgKi9cbi8qKiogUHJvZmlsZTogSGVhZGVyICAqKiovXG4ucHJvZmlsZV9fYXZhdGFyIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIHdpZHRoOiA2MHB4O1xuICBoZWlnaHQ6IDYwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAucHJvZmlsZV9fYXZhdGFyIHtcbiAgICB3aWR0aDogMTAwcHg7XG4gICAgaGVpZ2h0OiAxMDBweDsgfSB9XG5cbi5wcm9maWxlX19hdmF0YXIgPiBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiBhdXRvOyB9XG5cbi5wcm9maWxlX19oZWFkZXIge1xuICBvdmVyZmxvdzogaGlkZGVuOyB9XG5cbi5wcm9maWxlX19oZWFkZXIgcCB7XG4gIG1hcmdpbjogMjBweCAwOyB9XG5cbi8qKiogUHJvZmlsZTogVGFibGUgKioqL1xuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gIC5wcm9maWxlX190YWJsZSB0Ym9keSB0aCB7XG4gICAgd2lkdGg6IDIwMHB4OyB9IH1cblxuLyoqKiBQcm9maWxlOiBSZWNlbnQgYWN0aXZpdHkgKioqL1xuLnByb2ZpbGUtY29tbWVudHNfX2l0ZW0ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDE1cHggMTZweDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNSk7IH1cblxuLnByb2ZpbGUtY29tbWVudHNfX2l0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDA7IH1cblxuLnByb2ZpbGUtY29tbWVudHNfX2l0ZW06aG92ZXIsXG4ucHJvZmlsZS1jb21tZW50c19faXRlbTpmb2N1cyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZjU7IH1cblxuLnByb2ZpbGUtY29tbWVudHNfX2l0ZW06aG92ZXIgLnByb2ZpbGUtY29tbWVudHNfX2NvbnRyb2xzLFxuLnByb2ZpbGUtY29tbWVudHNfX2l0ZW06Zm9jdXMgLnByb2ZpbGUtY29tbWVudHNfX2NvbnRyb2xzIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTsgfVxuXG4ucHJvZmlsZS1jb21tZW50c19fY29udHJvbHMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIHBhZGRpbmc6IDVweDtcbiAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XG5cbi5wcm9maWxlLWNvbW1lbnRzX19jb250cm9scyA+IGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDJweDtcbiAgY29sb3I6ICM5OTk5OTk7IH1cblxuLnByb2ZpbGUtY29tbWVudHNfX2NvbnRyb2xzID4gYTpob3Zlcixcbi5wcm9maWxlLWNvbW1lbnRzX19jb250cm9scyA+IGE6Zm9jdXMge1xuICBjb2xvcjogIzMzMzMzMzsgfVxuXG4ucHJvZmlsZS1jb21tZW50c19fYXZhdGFyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGZsb2F0OiBsZWZ0O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIHdpZHRoOiA0MHB4O1xuICBoZWlnaHQ6IDQwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjsgfVxuXG4ucHJvZmlsZS1jb21tZW50c19fYXZhdGFyID4gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bzsgfVxuXG4ucHJvZmlsZS1jb21tZW50c19fYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47IH1cblxuLnByb2ZpbGUtY29tbWVudHNfX3NlbmRlciB7XG4gIGNvbG9yOiAjMzMzMzMzO1xuICBmb250LXdlaWdodDogNTAwO1xuICBtYXJnaW46IDVweCAwOyB9XG5cbi5wcm9maWxlLWNvbW1lbnRzX19zZW5kZXIgPiBzbWFsbCB7XG4gIG1hcmdpbi1sZWZ0OiA1cHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgY29sb3I6ICM5OTk5OTk7IH1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5wcm9maWxlLWNvbW1lbnRzX19zZW5kZXIgPiBzbWFsbCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luOiA1cHggMCAxMHB4OyB9IH1cblxuLnByb2ZpbGUtY29tbWVudHNfX2NvbnRlbnQge1xuICBjb2xvcjogIzk5OTk5OTsgfVxuXG4vKioqIFByb2ZpbGU6IENvbnRhY3QgKioqL1xuLnByb2ZpbGVfX2NvbnRhY3QtYnRuIHtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XG5cbi5wcm9maWxlX19jb250YWN0LWhyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgbWFyZ2luOiA0MHB4IDA7IH1cblxuLnByb2ZpbGVfX2NvbnRhY3QtaHI6YmVmb3JlIHtcbiAgY29udGVudDogXCJPUlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y1ZjVmNTtcbiAgY29sb3I6ICNjNmM2Y2M7IH1cblxuLnByb2ZpbGVfX2NvbnRhY3QtaW5mby1pdGVtIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDsgfVxuXG4ucHJvZmlsZV9fY29udGFjdC1pbmZvLWl0ZW06YmVmb3JlLFxuLnByb2ZpbGVfX2NvbnRhY3QtaW5mby1pdGVtOmFmdGVyIHtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IHRhYmxlOyB9XG5cbi5wcm9maWxlX19jb250YWN0LWluZm8taXRlbTphZnRlciB7XG4gIGNsZWFyOiBib3RoOyB9XG5cbi5wcm9maWxlX19jb250YWN0LWluZm8taXRlbTpiZWZvcmUsXG4ucHJvZmlsZV9fY29udGFjdC1pbmZvLWl0ZW06YWZ0ZXIge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogdGFibGU7IH1cblxuLnByb2ZpbGVfX2NvbnRhY3QtaW5mby1pdGVtOmFmdGVyIHtcbiAgY2xlYXI6IGJvdGg7IH1cblxuLnByb2ZpbGVfX2NvbnRhY3QtaW5mby1pY29uIHtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM5OTk5OTk7IH1cblxuLnByb2ZpbGVfX2NvbnRhY3QtaW5mby1ib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICBjb2xvcjogIzk5OTk5OTsgfVxuXG4ucHJvZmlsZV9fY29udGFjdC1pbmZvLWJvZHkgYSB7XG4gIGNvbG9yOiAjOTk5OTk5OyB9XG5cbi5wcm9maWxlX19jb250YWN0LWluZm8tYm9keSBhOmhvdmVyLFxuLnByb2ZpbGVfX2NvbnRhY3QtaW5mby1ib2R5IGE6Zm9jdXMge1xuICBjb2xvcjogIzk5OTk5OTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XG5cbi5wcm9maWxlX19jb250YWN0LWluZm8taGVhZGluZyB7XG4gIG1hcmdpbi10b3A6IDJweDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzk5OTk5OTsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/home/sponsordetails/sponsordetails.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/home/sponsordetails/sponsordetails.component.ts ***!
  \*****************************************************************/
/*! exports provided: SponsordetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SponsordetailsComponent", function() { return SponsordetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var SponsordetailsComponent = /** @class */ (function () {
    function SponsordetailsComponent(dataservice, fb) {
        this.dataservice = dataservice;
        this.fb = fb;
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = {};
        this.getSponsorbyId();
        this.getAllEthenic();
        this.getAllTestCodedata();
        this.sponsorId = sessionStorage.getItem('sponsorId');
        this.updateAddressForm = this.fb.group({
            'email': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'phone': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'streetNumber': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'streetName1': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'city': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'district': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'postCode': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    }
    SponsordetailsComponent.prototype.initializeData = function () {
        this.multiplepostcode();
        this.getAllTestCodeDetails();
        this.getAllEthenic();
    };
    SponsordetailsComponent.prototype.updateSelectedAddress = function (formData) {
        var _this = this;
        console.log(formData);
        delete formData['isEditable3'];
        this.dataservice.updateSelectedAddress(formData).subscribe(function (data) {
            console.log("Update data", data);
            _this.getPostCodeList(_this.sponsorId);
        });
    };
    SponsordetailsComponent.prototype.getPostCodeList = function (id) {
        var _this = this;
        this.sponsorId = id;
        this.dataservice.getPostCodeList(id).subscribe(function (response) {
            _this.testCodeList = response.resultData;
            _this.multiplepostcode();
        });
    };
    SponsordetailsComponent.prototype.getPostalCodeforEdit = function (id) {
        var _this = this;
        id = this.sponsorId;
        this.dataservice.getSponsorUpdate(id).subscribe(function (data) {
            _this.updateSponsor = data.resultData;
            _this.selectedItems = _this.updateSponsor.postalCodes;
        });
        this.multiplepostcode();
    };
    SponsordetailsComponent.prototype.updateSelectedRule = function (formData) {
        var _this = this;
        delete formData['isEditable10'];
        delete formData['ethnicType'];
        delete formData['description'];
        delete formData['testCode'];
        var gender = formData.gender.toString();
        formData.gender = gender;
        this.dataservice.updateSelectedRule(formData).subscribe(function (data) {
            _this.getAllEthenic();
            _this.getAllTestCodedata();
        });
    };
    SponsordetailsComponent.prototype.getAllEthenic = function () {
        var _this = this;
        this.dataservice.getEthenic().subscribe(function (data) {
            _this.ethenicData = data.resultData;
            console.log("Ethnic Details", _this.ethenicData);
        });
    };
    SponsordetailsComponent.prototype.getAllTestCodedata = function () {
        var _this = this;
        this.dataservice.editTestListData().subscribe(function (data) {
            _this.testCodeData = data.resultData;
        });
    };
    SponsordetailsComponent.prototype.getSponsorList = function () {
        var _this = this;
        this.dataservice.getSponsorsList().subscribe(function (data) {
            _this.SponsorsData = data.resultData;
            console.log("Test Code Details", _this.SponsorsData);
        });
    };
    SponsordetailsComponent.prototype.updateSponsorDetails = function (name, budget, selectedItems) {
        var _this = this;
        console.log(selectedItems);
        var datarequest = { "name": name, "budget": budget, "postalCodes": selectedItems };
        this.dataservice.updateSponsorDetails(datarequest, this.sponsorId).subscribe(function (data) {
            _this.getSponsorList();
        });
    };
    SponsordetailsComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    SponsordetailsComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    SponsordetailsComponent.prototype.getSponsorbyId = function () {
        var _this = this;
        this.dataservice.getSponsorbyId(sessionStorage.getItem('sponsorId')).subscribe(function (data) {
            _this.sponsorDetails = data.resultData;
            console.log("Complete Api Details", _this.sponsorDetails);
            //Sponsor user details
            _this.sponsorDetailsuser = _this.sponsorDetails.sponsor;
            _this.name = _this.sponsorDetailsuser.name;
            _this.budget = _this.sponsorDetailsuser.budget;
            console.log("sponser name", _this.name);
            console.log(_this.sponsorDetailsuser);
            //rules
            _this.sponsorDetailsRule = _this.sponsorDetails.rules;
            //console.log("sponsorDetailsRule",this.sponsorDetailsRule);
            _this.postalCodesDetails = data.resultData.postalCodes;
            _this.testcodeDetails = data.resultData.testCodes;
            //address details
            _this.address = data.resultData.addresses[0];
            // this.streetNumber=this.sponsorDetails.addresses.streetNumber;
            // this.streetName1=this.sponsorDetails.addresses[0].streetName1;
            // this.streetName2=this.sponsorDetails.addresses[0].streetName2;
            // this.city=this.sponsorDetails.addresses[0].city;
            // this.country=this.sponsorDetails.addresses[0].country;
            // this.district=this.sponsorDetails.addresses[0].district;
            // this.region=this.sponsorDetails.addresses[0].region;
            // this.state=this.sponsorDetails.addresses[0].state;
            // this.zipcode=this.sponsorDetails.addresses[0].zipcode;
            // this.sponsorDetails=data.resultData.sponsor;
            // this.name=this.sponsorDetails=data.resultData.sponsor.name;
            // console.log("sponser name",this.sponsorDetails.name);
            // this.phone=this.sponsorDetails=data.resultData.sponsor.phone;
            // this.email=this.sponsorDetails=data.resultData.sponsor.email;
            // this.budget=this.sponsorDetails=data.resultData.sponsor.budget;
        });
    };
    SponsordetailsComponent.prototype.multiplepostcode = function () {
        var _this = this;
        this.dataservice.getMultiplepostCode().subscribe(function (response) {
            _this.dropdownList = response.resultData;
        });
        /*
       this.dropdownList = [
        { item_id: 1, item_text: 'Mumbai' },
        { item_id: 2, item_text: 'Bangaluru' },
        { item_id: 3, item_text: 'Pune' },
        { item_id: 4, item_text: 'Navsari' },
        { item_id: 5, item_text: 'New Delhi' }
      ];
    */
    };
    SponsordetailsComponent.prototype.ngOnInit = function () {
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'id',
            textField: 'postalCode',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 3,
            allowSearchFilter: true
        };
    };
    SponsordetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sponsordetails',
            template: __webpack_require__(/*! ./sponsordetails.component.html */ "./src/app/home/sponsordetails/sponsordetails.component.html"),
            styles: [__webpack_require__(/*! ./sponsordetails.component.scss */ "./src/app/home/sponsordetails/sponsordetails.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], SponsordetailsComponent);
    return SponsordetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/status/status.component.html":
/*!***************************************************!*\
  !*** ./src/app/home/status/status.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\n  <div>\n    <h1><i class=\"fa fa-th-list\"></i> Status</h1>\n    <p>Status Details</p>\n  </div>\n  <ul class=\"app-breadcrumb breadcrumb\">\n  </ul>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-3\">\n        <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\n          </div>\n    </div>\n    <div class=\"col-md-9\">\n        <button type=\"button\" style=\"margin-bottom:8px\" class=\"btn btn-danger float-right\" data-toggle=\"modal\" data-backdrop=\"static\" data-target=\"#myModal\"\n        (click)=\"addStatus(regForm)\">Add</button>  \n        </div>\n  </div>\n<div class=\"tile\">\n <h5>Status</h5>\n\n\n<table class=\"table\" >\n  <thead>\n    <tr style=\"font-size:15px\">\n      <th>Id</th>\n      <th>Status</th>\n      <th>Edit</th>\n      <th>Delete</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let data of statusData | filter:term |paginate: { itemsPerPage: 10, currentPage: p }\">\n      <td>{{data.id}}</td>\n      <td>{{data.nameOfTheStatus}}</td>\n      <td>\n        <span>\n          <span (click)=\"editStatus(data)\" data-toggle=\"modal\" data-target=\"#myModal\"  class=\"glyphicon glyphicon-pencil\">\n            <i class=\"fa fa-edit\" style=\"font-size:24px;color:rgb(49, 17, 233)\"></i>\n          </span>\n        </span>\n      </td>\n      <td>\n        <span>\n          <span (click)=\"deleteStatus(data.id)\" value=\"delete\">\n            <i class=\"fa fa-trash\" style=\"font-size:24px;color:red\"></i>\n          </span>\n        </span>\n      </td>\n    </tr>\n  </tbody>\n</table>\n</div>\n<pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n    <div class=\"modal-dialog\">\n  \n      <!-- Modal content-->\n      <form #regForm='ngForm'>\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h4 class=\"modal-title\">Status</h4>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      \n          </div>\n          <div class=\"modal-body\">\n      \n            <div class=\"col-md-12\">\n              <input type=\"text\" placeholder=\"Status\" name=\"nameOfTheStatus\" class=\"form-control\" [(ngModel)]=pstatus>\n            </div>\n      \n          </div>\n          <div class=\"modal-footer\">\n            <button type=\"submit\" [disabled]=\"!pstatus\" data-dismiss=\"modal\" class=\"btn btn-primary float-right\" id=\"register\"\n              (click)=\"save(regForm.value)\" *ngIf=\"addfrm\">Submit</button>\n            <button type=\"button\" data-dismiss=\"modal\" class=\"btn btn-primary float-right\" id=\"register\"\n              (click)=\"updateStatusData()\" *ngIf=\"updatfrm\">Update</button>\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./src/app/home/status/status.component.scss":
/*!***************************************************!*\
  !*** ./src/app/home/status/status.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvc3RhdHVzL3N0YXR1cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/home/status/status.component.ts":
/*!*************************************************!*\
  !*** ./src/app/home/status/status.component.ts ***!
  \*************************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var StatusComponent = /** @class */ (function () {
    function StatusComponent(dataservice, http) {
        this.dataservice = dataservice;
        this.http = http;
        this.updatfrm = false;
        this.addfrm = false;
    }
    StatusComponent.prototype.ngOnInit = function () {
        this.getAllstatus();
    };
    StatusComponent.prototype.addStatus = function (regForm) {
        regForm.reset();
        this.updatfrm = false;
        this.addfrm = true;
    };
    // Save status data
    StatusComponent.prototype.save = function (regForm) {
        var _this = this;
        this.dataservice.postStatus(regForm).subscribe(function (res) {
            console.log("save data", res);
            _this.getAllstatus();
        });
    };
    // Get request for status
    StatusComponent.prototype.getAllstatus = function () {
        var _this = this;
        this.dataservice.getStatusData().subscribe(function (data) {
            _this.statusData = data.resultData;
            console.log("status data", _this.statusData);
        });
    };
    //Post request for status
    StatusComponent.prototype.saveStatus = function (formData) {
        this.dataservice.postStatus(formData).subscribe(function (data) {
            console.log("adding data", data);
        });
    };
    StatusComponent.prototype.editStatus = function (data) {
        this.updatfrm = true;
        this.addfrm = false;
        console.log("hfdhf", data);
        this.data = data;
        this.pstatus = this.data.nameOfTheStatus;
        this.id = this.data.id;
    };
    //Update Status
    // updateStatusData(){
    // var dt = { id: this.data.id, nameOfTheStatus: this.pstatus }
    //   this.dataservice.editStatusData(this.id,dt).subscribe((res)=>{
    //     console.log("updating data",res)
    //   })
    // }
    StatusComponent.prototype.updateStatusData = function () {
        var _this = this;
        var dt = { id: this.data.id, nameOfTheStatus: this.pstatus };
        this.http.put('rest/Status/updateStatus' + "/" + this.id, dt).subscribe(function (data) {
            _this.getAllstatus();
        });
    };
    //Delete Status
    StatusComponent.prototype.deleteStatus = function (id) {
        var _this = this;
        this.dataservice.deleteStatus(id).subscribe(function (res) {
            console.log("deleted status", res);
            _this.getAllstatus();
        });
    };
    StatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/home/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.scss */ "./src/app/home/status/status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/app/home/testcode/testcode.component.html":
/*!*******************************************************!*\
  !*** ./src/app/home/testcode/testcode.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\n  <div>\n    <h1><i class=\"fa fa-th-list\"></i> Test Code</h1>\n    <p>Test Code Details</p>\n  </div>\n  <ul class=\"app-breadcrumb breadcrumb\">\n  </ul>\n</div>\n<div class=\"row\">\n  <div class=\"col-md-3\">\n    <div class=\"form-group\">\n      <input type=\"text\" class=\"form-control\" [(ngModel)]=\"term\" placeholder=\"Search Here...\">\n    </div>\n  </div>\n  <div class=\"col-md-9\">\n    <button type=\"button\" class=\"btn btn-danger pull-right\" style=\"margin-bottom: 10px;\" data-backdrop=\"static\" data-toggle=\"modal\"\n      data-target=\"#myModal\"><i class=\"fa fa-plus\"></i>Add Test</button>\n  </div>\n</div>\n<div class=\"tile\">\n  <span style=\"font-size: 25px;\">Test Code Details</span>\n  <table class=\"table\">\n    <thead>\n      <tr>\n        <th>#</th>\n        <th>Test Name</th>\n        <th>Test Code</th>\n        <th>Test Code Description</th>\n        <th>Is Default Test</th>\n        <th>Edit</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor='let item of testCodeData | filter:term |paginate: { itemsPerPage: 10, currentPage: p };let i=index'>\n        <td>\n          <div>{{i+1}}</div>\n        </td>\n        <td>\n          <div *ngIf=\"!item.isEditable\">{{item.testName}}</div>\n          <input [(ngModel)]=\"item.testName\" *ngIf=\"item.isEditable\" type=\"text\" class=\"form-control\">\n        </td>\n        <td>\n          <div *ngIf=\"!item.isEditable\">{{item.testCode}}\n          </div>\n          <input [(ngModel)]=\"item.testCode\" type=\"text\" *ngIf=\"item.isEditable\" class=\"form-control\">\n        </td>\n        <td>\n          <div *ngIf=\"!item.isEditable\">{{item.description}}</div>\n          <input type=\"text\" [(ngModel)]=\"item.description\" *ngIf=\"item.isEditable\" class=\"form-control\">\n        </td>\n        <td>\n          <div *ngIf=\"!item.isEditable\">{{item.defaultTest}}</div>\n          <input type=\"text\" [(ngModel)]=\"item.defaultTest\" *ngIf=\"item.isEditable\" class=\"form-control\">\n        </td>\n        <td>\n          <button type=\"button\" class=\"btn btn-info btn-sm\" (click)=\"item.isEditable=!item.isEditable\"\n            *ngIf=\"!item.isEditable\">Edit</button>\n          <button type=\"button\" class=\"btn btn-success\" *ngIf=\"item.isEditable\"\n            (click)=\"item.isEditable=!item.isEditable;updateTestCode(item.testName,item.testCode,item.description,item.id,item.defaultTest)\">Save</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n</div>\n<pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\n\n\n<!-- Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog\">\n\n    <!-- Modal content-->\n    <form [formGroup]=\"testCodeForm\" (ngSubmit)=\"creattestDetails(testCodeForm.value)\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <h4 class=\"modal-title\">Test Details Form</h4>\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n        </div>\n        <div class=\"modal-body\">\n\n          <div class=\"form-group\">\n            <label for=\"name\">Test Name:</label>\n            <input type=\"text\" formControlName=\"testName\" class=\"form-control\" id=\"name\">\n            <span class=\"text text-danger\"\n              *ngIf=\"testCodeForm.controls['testName'].invalid && testCodeForm.controls['testName'].touched\">Test Name\n              is required</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"code\">Test Code:</label>\n            <input type=\"text\" formControlName=\"testCode\" class=\"form-control\" id=\"code\">\n            <span class=\"text text-danger\"\n              *ngIf=\"testCodeForm.controls['testCode'].invalid && testCodeForm.controls['testCode'].touched\">Test Code\n              is required</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"desc\">Test Description:</label>\n            <textarea type=\"text\" formControlName=\"description\" rows=\"4\" class=\"form-control\" id=\"desc\"></textarea>\n            <span class=\"text text-danger\"\n              *ngIf=\"testCodeForm.controls['description'].invalid && testCodeForm.controls['description'].touched\">Test Code\n              is required</span>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"default\">Is Default: </label>&nbsp;\n            <input type=\"checkbox\"  class=\".form-check-inline\" formControlName=\"defalut\" id=\"defalut\">\n            <span class=\"text text-danger\"\n              *ngIf=\"testCodeForm.controls['defalut'].invalid && testCodeForm.controls['defalut'].touched\">Please check the box </span>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\">Close</button>\n          <input type=\"submit\" class=\"btn btn-info\" [disabled]=\"testCodeForm.invalid\" value=\"Submit\">\n        </div>\n      </div>\n    </form>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/testcode/testcode.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/home/testcode/testcode.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdGVzdGNvZGUvdGVzdGNvZGUuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/testcode/testcode.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/home/testcode/testcode.component.ts ***!
  \*****************************************************/
/*! exports provided: TestcodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestcodeComponent", function() { return TestcodeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var TestcodeComponent = /** @class */ (function () {
    function TestcodeComponent(dataservice, fb) {
        this.dataservice = dataservice;
        this.fb = fb;
        this.getAllTestCodeDetails();
    }
    TestcodeComponent.prototype.creattestDetails = function (formData) {
        var _this = this;
        $(document).ready(function () {
            $('#myModal').modal('hide');
        });
        this.dataservice.createTestDetails(formData).subscribe(function (data) {
            _this.getAllTestCodeDetails();
        });
    };
    TestcodeComponent.prototype.getAllTestCodeDetails = function () {
        var _this = this;
        this.dataservice.getAllTestCodeDetails().subscribe(function (response) {
            _this.testCodeData = response.resultData;
        });
    };
    TestcodeComponent.prototype.updateTestCode = function (testName, testCode, description, id, defaultTest) {
        var _this = this;
        var obj = { testCode: testCode, description: description, testName: testName, id: id, defalut: defaultTest };
        this.dataservice.updateTestCodeDetails(obj).subscribe(function (data) {
            _this.getAllTestCodeDetails();
            $('#StudentModal').modal('hide');
        });
    };
    TestcodeComponent.prototype.ngOnInit = function () {
        this.testCodeForm = this.fb.group({
            'testName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'testCode': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'description': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'defalut': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    TestcodeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-testcode',
            template: __webpack_require__(/*! ./testcode.component.html */ "./src/app/home/testcode/testcode.component.html"),
            styles: [__webpack_require__(/*! ./testcode.component.scss */ "./src/app/home/testcode/testcode.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], TestcodeComponent);
    return TestcodeComponent;
}());



/***/ }),

/***/ "./src/app/home/userdetails/userdetails.component.html":
/*!*************************************************************!*\
  !*** ./src/app/home/userdetails/userdetails.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"app-title\">\n    <div>\n      <h1><i class=\"fa fa-th-list\"></i> Users</h1>\n      <p>Users Details</p>\n    </div>\n    <ul class=\"app-breadcrumb breadcrumb\">\n    </ul>\n  </div>\n<div class=\"panel-body\">\n    <div class=\"tile\">\n    <h4 class=\"panel-title\">&nbsp;&nbsp;Contact Info</h4>\n   <table class=\"table profile__table\">\n      <thead>\n        <tr>\n          <th>#</th>\n          <th>First Name</th>\n          <th>Last Name</th>\n          <th>Email Id</th>\n          <th>Mobile Number</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of userDetails;let i=index\">\n          <td>{{i+1}}</td>\n          <td>{{item.firstName}}</td>\n          <td>{{item.lastName}}</td>\n          <td>{{item.emailId}}</td>\n          <td>{{item.mobileNum}}</td>\n        </tr>\n      </tbody>\n    </table>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/userdetails/userdetails.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/home/userdetails/userdetails.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdXNlcmRldGFpbHMvdXNlcmRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/userdetails/userdetails.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/home/userdetails/userdetails.component.ts ***!
  \***********************************************************/
/*! exports provided: UserdetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdetailsComponent", function() { return UserdetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/data.service */ "./src/app/services/data.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var UserdetailsComponent = /** @class */ (function () {
    function UserdetailsComponent(dataservice) {
        this.dataservice = dataservice;
        this.getusersByid();
    }
    UserdetailsComponent.prototype.getusersByid = function () {
        var _this = this;
        this.dataservice.getuserByid(sessionStorage.getItem('sponsorId')).subscribe(function (data) {
            _this.userDetails = data.resultData;
        });
    };
    UserdetailsComponent.prototype.ngOnInit = function () {
    };
    UserdetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-userdetails',
            template: __webpack_require__(/*! ./userdetails.component.html */ "./src/app/home/userdetails/userdetails.component.html"),
            styles: [__webpack_require__(/*! ./userdetails.component.scss */ "./src/app/home/userdetails/userdetails.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"]])
    ], UserdetailsComponent);
    return UserdetailsComponent;
}());



/***/ }),

/***/ "./src/app/home/users/users.component.html":
/*!*************************************************!*\
  !*** ./src/app/home/users/users.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app-title\">\n  <div>\n    <h1><i class=\"fa fa-th-list\"></i> Users</h1>\n    <p>Users Details</p>\n  </div>\n  <ul class=\"app-breadcrumb breadcrumb\">\n    <!-- <li class=\"breadcrumb-item\"><i class=\"fa fa-home fa-lg\"></i></li> -->\n\n\n  </ul>\n</div>\n\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <!-- Trigger the modal with a button -->\n    <!-- Modal -->\n    <div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n      <div class=\"modal-dialog\">\n        <!-- Modal content-->\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <h5 class=\"modal-title\">User Details</h5>\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n          </div>\n          <!-- Radio Buttons Started-->\n          <div class=\"modal-body\">\n\n            <div>\n              <form [formGroup]=\"profileForm\">\n\n                <div class=\"form-group row\">\n                  <div class=\"col-md-12\">\n                    <label>\n                      Roles:\n                      <input type=\"radio\" name=\"role\" value=\"SPONSORUSER\" (change)=\"changeUser()\"\n                        formControlName=\"role\">Sponsor User\n                    </label>&nbsp;&nbsp;\n                    <label>\n                      <input type=\"radio\" name=\"role\" value=\"SUPPORTUSER\" formControlName=\"role\">Support User\n                    </label>\n                    &nbsp;&nbsp;\n                    <label>\n                      <input type=\"radio\" name=\"role\" value=\"CLINISHUSER\" formControlName=\"role\">Clinish User\n                    </label>\n\n                  </div>\n                  <div class=\"clearfix\"></div>\n                  <div class=\"col-md-6\">\n                    <label>\n                      First Name:\n                      <input type=\"text\" class=\"form-control\" formControlName=\"firstName\">\n                      <span class=\"text text-danger\"\n                        *ngIf=\"profileForm.controls['firstName'].invalid && profileForm.controls['firstName'].touched\">Test\n                        Name is required</span>\n\n                    </label>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label>\n                      Last Name:\n                      <input type=\"text\" class=\"form-control\" formControlName=\"lastName\">\n                      <span class=\"text text-danger\"\n                        *ngIf=\"profileForm.controls['lastName'].invalid && profileForm.controls['lastName'].touched\">Test\n                        Name is required</span>\n                    </label>\n                  </div>\n                </div>\n\n                <div class=\"form-group row\">\n                  <div class=\"col-md-6\">\n                    <label>\n                      Email:\n                      <input type=\"email\" class=\"form-control\" formControlName=\"emailId\">\n                      <span class=\"text text-danger\"\n                        *ngIf=\"profileForm.controls['emailId'].invalid && profileForm.controls['emailId'].touched\">Test\n                        Name is required</span>\n\n                    </label>\n                  </div>\n                  <div class=\"col-md-6\">\n                    <label>\n                      Username:\n                      <input type=\"text\" class=\"form-control\" formControlName=\"userName\">\n                      <span class=\"text text-danger\"\n                      *ngIf=\"profileForm.controls['userName'].invalid && profileForm.controls['userName'].touched\">Test\n                      Name is required</span>\n                    </label>\n                  </div>\n\n                </div>\n                <div class=\"form-group row\">\n                  <div class=\"col-md-6\">\n                    <label>\n                      MobileNo:\n                      <input type=\"text\" class=\"form-control\" formControlName=\"mobileNum\">\n                      <span class=\"text text-danger\"\n                      *ngIf=\"profileForm.controls['mobileNum'].invalid && profileForm.controls['mobileNum'].touched\">Test\n                      Name is required</span>\n                      <span class=\"text text-danger\"\n                      *ngIf=\"profileForm.controls['mobileNum'].pattern\">Phone\n                      No must be in order</span>\n                    </label>\n                  </div>\n\n                  <div class=\"clearfix\"></div>\n\n                  <!-- <div class=\"col-md-6\">\n                    <label>\n                      Password:\n                      <input type=\"password\" class=\"form-control\" formControlName=\"passWord\">\n                    </label>\n                  </div> -->\n                </div>\n                <div class=\"form-group row\">\n\n                  <div class=\"col-md-6\" *ngIf=\"profileForm.value.role=='SPONSORUSER'\">\n                    <label>Sponsor Users</label>\n                    <select class=\"form-control\" formControlName=\"sponsorId\">\n                      <option *ngFor=\"let name of sponserUsers\" [value]=\"name.id\">{{name.name}}</option>\n                    </select>\n                  </div>\n\n                </div>\n                <br>\n              </form>\n            </div>\n          </div>\n          <div class=\"modal-footer\">\n            <button class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n            <input type=\"button\" class=\"btn btn-info float-right\" (click)=\"updateValue()\" *ngIf=\"updatfrm\"\n              value=\"Update\" />\n            <input type=\"submit\" class=\"btn btn-info float-right\" (click)=\"save(profileForm.value)\" *ngIf=\"addfrm\"\n              [disabled]=\"profileForm.invalid\" data-dismiss=\"modal\" value=\"Submit\">\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-md-3\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"term\" placeholder=\"Search Here...\">\n        </div>\n      </div>\n      <div class=\"col-md-9\">\n        <button type=\"button\" class=\"btn btn-danger float-right\" data-toggle=\"modal\" data-target=\"#myModal\" (click)=\"addUsers(profileForm)\" data-backdrop=\"static\">Add</button>\n      </div>\n    </div>\n    <div class=\"tile\">\n\n      <h3 class=\"tile-title\">Users Details</h3>\n      <div>\n        <table class=\"table \">\n          <thead>\n            <tr>\n              <th>Username</th>\n              <th>Firstname</th>\n              <th>Lastname</th>\n              <th>Email</th>\n              <th>Role</th>\n              <th>Phone No</th>\n              <th>Status</th>\n              <th>Edit</th>\n              <th>Delete</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let x of data | filter:term |paginate: { itemsPerPage: 10, currentPage: p }\">\n              <td>{{x.username}}</td>\n              <td>{{x.firstName}}</td>\n              <td>{{x.lastName}}</td>\n              <td>{{x.emailId}}</td>\n              <td>{{x.roles}}</td>\n              <td>{{x.mobileNum}}</td>\n              <td>{{x.status}}</td>\n              <td>\n                <span>\n                  <span (click)=\"editForm(x)\" data-toggle=\"modal\" data-target=\"#myModal\"\n                    class=\"glyphicon glyphicon-pencil\">\n                    <i class=\"fa fa-edit\" style=\"font-size:24px;color:rgb(49, 17, 233)\"></i>\n                  </span>\n                </span>\n              </td>\n              <td>\n                <span>\n                  <span (click)=\"deleteData(x.id)\" value=\"delete\">\n                    <i class=\"fa fa-trash\" style=\"font-size:24px;color:red\"></i>\n                  </span>\n                </span>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n    </div>\n    <pagination-controls (pageChange)=\"p = $event\" class=\"pull-right\"></pagination-controls>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/users/users.component.scss":
/*!*************************************************!*\
  !*** ./src/app/home/users/users.component.scss ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvdXNlcnMvdXNlcnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/users/users.component.ts":
/*!***********************************************!*\
  !*** ./src/app/home/users/users.component.ts ***!
  \***********************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/data.service */ "./src/app/services/data.service.ts");






var UsersComponent = /** @class */ (function () {
    function UsersComponent(http, fb, auth, dataservice) {
        this.http = http;
        this.fb = fb;
        this.auth = auth;
        this.dataservice = dataservice;
        this.updatfrm = false;
        this.addfrm = false;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.profileForm = this.fb.group({
            'firstName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'lastName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'emailId': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email])],
            'role': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'mobileNum': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('[6-9]\\d{9}')])],
            'userName': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'sponsorId': [null]
        });
    };
    UsersComponent.prototype.getUser = function () {
        var _this = this;
        this.dataservice.getUsersData().subscribe(function (data) {
            _this.data = data.resultData;
        });
    };
    UsersComponent.prototype.addUsers = function (profileForm) {
        profileForm.reset();
        this.updatfrm = false;
        this.addfrm = true;
    };
    UsersComponent.prototype.save = function (formData) {
        var _this = this;
        debugger;
        this.dataservice.postUsers(formData).subscribe(function (data) {
            console.log("adding data", data);
            _this.getUser();
        });
    };
    UsersComponent.prototype.changeUser = function () {
        var _this = this;
        this.dataservice.getSponserUser().subscribe(function (data) {
            _this.sponserUsers = data.resultData;
        });
    };
    UsersComponent.prototype.editForm = function (data) {
        console.log("hfdhf", data);
        this.updatfrm = true;
        this.addfrm = false;
        this.profileForm.patchValue({
            'mobileNum': data.mobileNum,
            'role': data.roles[0],
            'emailId': data.emailId,
            'sponsorId': data.sponsorId,
            'firstName': data.firstName,
            'lastName': data.lastName,
            'userName': data.username
        });
    };
    UsersComponent.prototype.deleteData = function (id) {
        var _this = this;
        this.dataservice.deleteUsers(id).subscribe(function (data) {
            console.log("deleting data", data);
            _this.getUser();
        });
    };
    UsersComponent.prototype.updateValue = function (data) {
        var _this = this;
        var dt = {
            id: this.pid,
            firstName: this.pfname,
            lastName: this.plname,
            emailId: this.pemail,
            mobileNum: this.pmobileno,
            userName: this.puserName,
            sponsorId: this.psponsorId
        };
        this.dataservice.updateUsers(dt).subscribe(function (data) {
            console.log("updated", data);
            _this.getUser();
            // this.addfrm = true
            // this.updatfrm = false;
            // this.pid = null;
            // this.pfname = "";
            // this.plname = "";
            // this.pemail = ""
        });
    };
    UsersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/home/users/users.component.html"),
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/home/users/users.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/index/address/address.component.html":
/*!******************************************************!*\
  !*** ./src/app/index/address/address.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper Start -->\n<!--header area start-->\n<header class=\"header_area beader_bg3\">\n  <!--header top start-->\n  <div class=\"header_top header_top_three\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"header_top_inner\">\n            <div class=\"top_left\">\n              <ul>\n                <li class=\"currency\"><a href=\"#\">support@medintu.co.uk</a></li>\n                <li><a href=\"tel:+123123321345\">tel: +44-03300587379</a></li>\n              </ul>\n            </div>\n            <div class=\"top_right\">\n\n              <!---\t<form class=\"inner_form\" [formGroup]=\"OBSLoginForm\" (ngSubmit)=\"LoginAction(OBSLoginForm.value)\">\n                \n                      <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"required\"  formControlName=\"username\">\n                      </div>\n                      <div class=\"form-group\">\n                          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\"  formControlName=\"password\">\n                      </div>\n                      <div class=\"form-group btn-container\">\n                          <button class=\"btn btn-primary btn-block\" [disabled]=\"OBSLoginForm.invalid\">SIGN IN</button>\n                      </div>  \n                   </form>-->\n\n              <button class=\"btn btn-info btn-sm\" style=\"margin-top: 8px;width: auto;\" (click)=\"viewResult()\">Track\n                Results</button>&nbsp;&nbsp;\n              <button class=\"btn btn-success btn-sm\" style=\"margin-top: 8px\" (click)=\"LoginPage()\">Login</button>\n\n            </div>\n\n\n            <div class=\"logo logo_three\">\n              <a href=\"index.html\"><img src=\"assets/img/img/logos2.png\" alt=\"\"></a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!--header top start-->\n  <!--header middel start-->\n  <div class=\"header_middle\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-lg-9 offset-lg-3 offset-md-0\">\n          <div class=\"main_menu menu_three header_position\">\n            <nav>\n              <ul>\n\n                <li><a href=\"#\">home</a></li>\n                <li><a href=\"#\">Aboutus</a></li>\n                <li><a href=\"#\">Business</a></li>\n                <li><a href=\"#\">Individuals</a></li>\n                <li class=\"pull-right google2\">\n                  <div id=\"google_translate_element\"></div>\n                </li>\n              </ul>\n\n            </nav>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--header middel end-->\n\n\n\n</header>\n<!--header area end-->\n\n<!--Offcanvas menu area start-->\n\n<div class=\"off_canvars_overlay\">\n\n</div>\n<div class=\"Offcanvas_menu Offcanvas_three\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"canvas_open\">\n          <span>MENU</span>\n          <a href=\"javascript:void(0)\"><i class=\"ion-navicon\"></i></a>\n        </div>\n        <div class=\"Offcanvas_menu_wrapper\">\n          <div class=\"canvas_close\">\n            <a href=\"javascript:void(0)\"><i class=\"ion-android-close\"></i></a>\n          </div>\n\n          <div id=\"menu\" class=\"text-left \">\n            <ul class=\"offcanvas_main_menu\">\n              <li class=\"menu-item-has-children active\">\n                <a href=\"#\">Home</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">About</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">Gallery</a>\n              </li>\n\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">contact</a>\n              </li>\n\n            </ul>\n          </div>\n\n          <div class=\"Offcanvas_footer\">\n            <span><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> info@yourdomain.com</a></span>\n            <ul>\n              <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n              <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n              <li class=\"pinterest\"><a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a></li>\n              <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n              <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Offcanvas menu area end-->\n\n\n\n<!-- delivery  start -->\n\n<div class=\"about_section padt5\">\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-12 col-md-12\">\n\n        <div class=\"panel\">\n\n          <div class=\"panel_heading\">\n            <h3>Address and Contact Information</h3>\n          </div>\n\n          <div class=\"panel_body\">\n\n            <div class=\"account_form address\">\n\n              <p>Our kits are small, discreet and fit through your letterbox.</p>\n              <p><b>Please note:</b> Kits are pre-completed with your details, so if you are ordering a kit for a friend\n                or partner please enter their details to ensure we can process your test (we may also remove duplicate\n                orders addressed to the same name).</p>\n\n              <form class=\"inner_1\" [formGroup]=\"users\" (ngSubmit)=\"datesends(users.value)\">\n\n                <p>\n                  <label>First Name <span>*</span></label>\n                  <input type=\"text\" placeholder=\"Firstname\" formControlName=\"firstName\" required>\n                  <span *ngIf=\"users.controls['firstName'].invalid && users.controls['firstName'].touched\"\n                    class='text text-danger'>Firstname is\n                    Required</span>\n                </p>\n                <p>\n                  <label>Last Name <span>*</span></label>\n                  <input type=\"text\" placeholder=\"Lastname\" formControlName=\"lastName\" required>\n                  <span *ngIf=\"users.controls['lastName'].invalid && users.controls['lastName'].touched\"\n                    class='text text-danger'>Lastname is\n                    Required</span>\n                </p>\n\n                <p>\n                  <label>Date Of birth <span>*</span></label>\n                  <input type=\"date\" formControlName=\"dob\" required>\n                  <span *ngIf=\"users.controls['dob'].invalid && users.controls['dob'].touched\"\n                    class='text text-danger'>Dob is required</span>\n                </p>\n\n\n                <p>\n                  <label>Address <span>*</span></label>\n                  <select>\n                    <option *ngFor=\"let address of addressDetails\">{{address}}</option>\n                  </select>\n                  <span style=\"color:red;\">Too many requests</span>\n                </p>\n\n                <h2 class=\"btn btn_look look_3\"><i class=\"fa fa-file-o\"></i> &nbsp;\n                  Look up</h2>\n\n\n                <div class=\"notification\">\n\n                  <span class=\"form_6\"><input type=\"checkbox\" class=\"text10\">Textmessage</span>\n                  <span class=\"form_6\"><input type=\"checkbox\" class=\"text11\">Email Notification</span>\n                  <span class=\"form_6\"><input type=\"checkbox\" class=\"text12\">Last Resort Letter</span>\n\n                </div>\n\n                <div class=\"container notification_address\">\n                  <div class=\"row\">\n                    <div class=\"col-md-4\">\n\n\n                      <div class=\"account_form mt-20 first_box\">\n\n                        <div class=\"form_design1\">\n\n                          <p class=\"panel_heading\">Test message</p>\n\n\n                          <p>\n                            <label>Mobile<span>*</span></label>\n                            <input type=\"text\" placeholder=\"Enter Mobile\" formControlName=\"notificationPhone\">\n                            <span\n                              *ngIf=\"users.controls['notificationPhone'].invalid && users.controls['notificationPhone'].touched\"\n                              class='text text-danger'>Firstname is\n                              Required</span>\n                          </p>\n\n                          <p>We will text you as soon as your result is ready..</p>\n\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n\n                    <div class=\"col-md-4\">\n\n\n                      <div class=\"account_form mt-20 second_box\">\n\n\n                        <div class=\"form_design1\">\n\n                          <p class=\"panel_heading\">Email Notification</p>\n\n                          <p>\n                            <label>Email<span>*</span></label>\n                            <input type=\"text\" placeholder=\"Enter Email\" formControlName=\"notificationEmail\">\n                            <span\n                            *ngIf=\"users.controls['notificationEmail'].invalid && users.controls['notificationEmail'].touched\"\n                            class='text text-danger'>Email is\n                            Required</span>\n                          </p>\n\n                          <p>We will e-mail you as soon as your result is ready.</p>\n\n                        </div>\n\n                      </div>\n\n                    </div>\n\n                    <div class=\"col-md-4\">\n\n                      <div class=\"account_form mt-20 third_box\">\n\n                        <div class=\"form_design1\">\n\n                          <p class=\"panel_heading\">Last Resort Letter</p>\n\n                          <p>Sometimes after a number of attempts are made to contact patients, we can't get through\n                            (for\n                            example, a phone number has been disconnected or changed). We would only write to you if\n                            your\n                            test\n                            is reactive, you may need treatment and we're unable to get through to you.</p>\n                          <br />\n\n                          <input type=\"checkbox\" class=\"recort\" formControlName=\"lastResortLetter\">\n                          &nbsp;lastResortLetter\n\n                        </div>\n\n                      </div>\n\n                    </div>\n                  </div>\n                </div>\n\n\n                <!--notification end-->\n\n                <div class=\"buttons button_7\">\n                  <button class=\"btn pull-left questionaries_1\" (click)=\"back()\"> <i\n                      class=\"fa fa-arrow-circle-left\"></i> Back</button>\n                  <button class=\"btn pull-right questionaries_2\" type=\"submit\">Next <i\n                      class=\"fa fa-arrow-circle-right\"></i></button>\n                </div>\n\n                <!---notifiaction end-->\n\n\n              </form>\n\n            </div>\n\n            <!--notification start-->\n\n          </div>\n\n        </div>\n      </div>\n\n\n    </div>\n\n\n\n  </div>\n</div>\n\n<!-- A delivery end -->\n\n\n<!--footer start-->\n\n\n<!--footer area start-->\n<footer class=\"footer_widgets\">\n  <div class=\"container\">\n    <div class=\"footer_top\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 col-sm-7\">\n          <div class=\"widgets_container contact_us\">\n            <h3>Contacts us</h3>\n            <div class=\"footer_contact\">\n              <ul>\n                <li><i class=\"fa fa-home\"></i><span>Addresss:</span> Lorem Ipsum is simply dummy text of the printing\n                  and typesetting industry. Lorem Ipsum</li>\n                <li><i class=\"fa fa-phone\"></i><span>Phone:</span> (+91) 866-540-3229</li>\n                <li><i class=\"fa fa-envelope-square\"></i><span>Email:</span> info@Lorem Ipsum .com</li>\n              </ul>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-6 col-sm-5\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>Information</h3>\n\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-4 col-sm-4\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>My Account</h3>\n            <div class=\"footer_menu\">\n              <div class=\"footer_contact\">\n                <ul>\n                  <li> Proudly operated from Yorkshire by Preventx and MESMAC as the Nationally commissioned provider of\n                    HIV home-sampling screening. </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n  <div class=\"footer_bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n          <div class=\"copyright_area text-center\">\n            <p>Copyright &copy; 2019 <a href=\"#\">Medintu</a> All Right Reserved.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--footer area end-->"

/***/ }),

/***/ "./src/app/index/address/address.component.scss":
/*!******************************************************!*\
  !*** ./src/app/index/address/address.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2FkZHJlc3MvYWRkcmVzcy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/index/address/address.component.ts":
/*!****************************************************!*\
  !*** ./src/app/index/address/address.component.ts ***!
  \****************************************************/
/*! exports provided: AddressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddressComponent", function() { return AddressComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/index.service */ "./src/app/index/services/index.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");






var AddressComponent = /** @class */ (function () {
    function AddressComponent(router, fb, sends, authService, activatedRoute) {
        this.router = router;
        this.fb = fb;
        this.sends = sends;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.detail = "next";
        this.contact = true;
    }
    AddressComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $(".icon_3").click(function () {
                $(".inside_3").toggle();
            });
        });
        $(document).ready(function () {
            $('.text10').click(function () {
                $(".first_box").toggle();
            });
            $('.text11').click(function () {
                $(".second_box").toggle();
            });
            $('.text12').click(function () {
                $(".third_box").toggle();
            });
        });
        this.users = this.fb.group({
            firstName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            lastName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            notificationPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            notificationEmail: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            lastResortLetter: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.OBSLoginForm = this.fb.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        var someobj = this.sends.seconddata;
        this.users.controls.firstName.setValue(someobj['firstName']);
        this.users.controls.lastName.setValue(someobj['lastName']);
        this.users.controls.dob.setValue(someobj['dob']);
        this.users.controls.notificationPhone.setValue(someobj['notificationPhone']);
        this.users.controls.notificationEmail.setValue(someobj['notificationEmail']);
        this.users.controls.lastResortLetter.setValue(someobj['lastResortLetter']);
    };
    AddressComponent.prototype.LoginAction = function (formData) {
        if (this.authService.loginAction(formData)) {
            this.router.navigate(['dashboard']);
        }
    };
    AddressComponent.prototype.datesends = function (formdata) {
        this.contact = false;
        var requestobj = {};
        requestobj = this.sends.seconddata;
        requestobj['dob'] = this.users.value.dob;
        requestobj['firstName'] = this.users.value.firstName;
        requestobj['lastName'] = this.users.value.lastName;
        requestobj['address'] = this.users.value.address;
        requestobj['notificationEmail'] = this.users.value.notificationEmail;
        requestobj['notificationPhone'] = this.users.value.notificationPhone;
        requestobj['lastResortLetter'] = this.users.value.lastResortLetter;
        this.sends.seconddata = requestobj;
        this.router.navigate(['edit']);
    };
    AddressComponent.prototype.first = function () {
        this.router.navigate(['moredetail']);
    };
    AddressComponent.prototype.getAddressDetails = function () {
        var _this = this;
        this.sends.lookup().subscribe(function (data) {
            _this.addressDetails = data.addresses;
            console.log(_this.addressDetails);
        });
    };
    AddressComponent.prototype.back = function () {
        this.router.navigate(['moredetail']);
    };
    AddressComponent.prototype.viewResult = function () {
        this.router.navigate(['viewresults']);
    };
    AddressComponent.prototype.LoginPage = function () {
        this.router.navigate(['loginpageaction']);
    };
    AddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-address',
            template: __webpack_require__(/*! ./address.component.html */ "./src/app/index/address/address.component.html"),
            styles: [__webpack_require__(/*! ./address.component.scss */ "./src/app/index/address/address.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_index_service__WEBPACK_IMPORTED_MODULE_3__["IndexService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], AddressComponent);
    return AddressComponent;
}());



/***/ }),

/***/ "./src/app/index/checkpostal/checkpostal.component.html":
/*!**************************************************************!*\
  !*** ./src/app/index/checkpostal/checkpostal.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper Start -->\n<!--header area start-->\n<header class=\"header_area beader_bg3\">\n  <!--header top start-->\n  <div class=\"header_top header_top_three\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"header_top_inner\">\n            <div class=\"top_left\">\n              <ul>\n                <li class=\"currency\"><a href=\"#\">support@medintu.co.uk</a> </li>\n                <li><a href=\"tel:+123123321345\">tel: +44-03300587379</a></li>\n              </ul>\n            </div>\n            <div class=\"top_right\">\n\n              <!---\t<form class=\"inner_form\" [formGroup]=\"OBSLoginForm\" (ngSubmit)=\"LoginAction(OBSLoginForm.value)\">\n                \n                      <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"required\"  formControlName=\"username\">\n                      </div>\n                      <div class=\"form-group\">\n                          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\"  formControlName=\"password\">\n                      </div>\n                      <div class=\"form-group btn-container\">\n                          <button class=\"btn btn-primary btn-block\" [disabled]=\"OBSLoginForm.invalid\">SIGN IN</button>\n                      </div>  \n                   </form>-->\n\n              <button class=\"btn btn-info btn-sm\" style=\"margin-top: 8px;width: auto;\" (click)=\"viewResult()\">Track\n                Results</button>&nbsp;&nbsp;\n              <button class=\"btn btn-success btn-sm\" style=\"margin-top: 8px\" (click)=\"LoginPage()\">Login</button>\n\n            </div>\n            <div class=\"logo logo_three\">\n              <a href=\"index.html\"><img src=\"assets/img/img/logos2.png\" alt=\"\"></a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!--header top start-->\n  <!--header middel start-->\n  <div class=\"header_middle\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-lg-9 offset-lg-3 offset-md-0\">\n          <div class=\"main_menu menu_three header_position\">\n            <nav>\n              <ul>\n\n                <li><a href=\"#\">home</a></li>\n                <li><a href=\"#\">Aboutus</a></li>\n                <li><a href=\"#\">Business</a></li>\n                <li><a href=\"#\">Individuals</a></li>\n                <li class=\"pull-right google2\">\n                  <div id=\"google_translate_element\"></div>\n                </li>\n              </ul>\n\n            </nav>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--header middel end-->\n\n  <!--popup start-->\n\n  <!-- Modal -->\n\n\n\n  <!--popup end-->\n\n</header>\n<!--header area end-->\n\n<!--Offcanvas menu area start-->\n\n<div class=\"off_canvars_overlay\">\n\n</div>\n<div class=\"Offcanvas_menu Offcanvas_three\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"canvas_open\">\n          <span>MENU</span>\n          <a href=\"javascript:void(0)\"><i class=\"ion-navicon\"></i></a>\n        </div>\n        <div class=\"Offcanvas_menu_wrapper\">\n          <div class=\"canvas_close\">\n            <a href=\"javascript:void(0)\"><i class=\"ion-android-close\"></i></a>\n          </div>\n\n          <div id=\"menu\" class=\"text-left \">\n            <ul class=\"offcanvas_main_menu\">\n              <li class=\"menu-item-has-children active\">\n                <a href=\"#\">Home</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">About</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">Gallery</a>\n              </li>\n\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">contact</a>\n              </li>\n\n            </ul>\n          </div>\n\n          <div class=\"Offcanvas_footer\">\n            <span><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> info@yourdomain.com</a></span>\n            <ul>\n              <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n              <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n              <li class=\"pinterest\"><a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a></li>\n              <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n              <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Offcanvas menu area end-->\n\n\n\n<!-- delivery  start -->\n\n\n<div class=\"about_section check padt2\">\n\n  <div class=\"container\">\n\n    <div class=\"row\">\n\n      <div class=\"col-lg-12 col-md-12\">\n\n        <div class=\"panel\">\n\n          <div class=\"panel_heading\">\n            <h3>Tests</h3>\n          </div>\n\n\n          <div class=\"panel_body\">\n\n            <div class=\"account_form checkpostal\">\n\n  \n              <h2>Current commissioner is providing below test are you willing to take </h2>\n\n              <form [formGroup]=\"customForm\" (ngSubmit)=\"show(customForm)\">\n\n\n                  <ng-container *ngIf=\"firstcodelength.length==1\">\n                     <h4 class=\"testcodes_1\">This is the your comission currently your going to this test  <h3> \" {{firstcodelength[0].testName}} \" </h3></h4>\n                  </ng-container>\n\n                   <ng-container *ngIf=\"firstcodelength.length!=1\">\n                     <span class=\"form_6\" *ngFor=\"let testvalue of firstcodelength;let i=index;\">\n                    <input type=\"checkbox\" formControlName=\"firstcode\" id=\"{{testvalue.id}}\"\n                    [checked]=\"testvalue.defaultTest\" [value]=\"testvalue.id\" (click)=\"onCheckChange(testvalue)\"/>{{testvalue.testName}}\n                   </span>\n                  </ng-container>\n               \n\n                <div class=\"buttons button_7\">\n                  <button class=\"btn pull-left questionaries_1\" (click)=\"back()\"> <i\n                      class=\"fa fa-arrow-circle-left\"></i> Back</button>\n                  <button  class=\"btn pull-right questionaries_2\" type=\"submit\"> Next  <i\n                      class=\"fa fa-arrow-circle-right\"></i> </button>\n                </div>\n\n\n              </form>\n\n            </div>\n          </div>\n\n        </div>\n\n\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n\n<!--footer area start-->\n<footer class=\"footer_widgets\">\n  <div class=\"container\">\n    <div class=\"footer_top\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 col-sm-7\">\n          <div class=\"widgets_container contact_us\">\n            <h3>Contacts us</h3>\n            <div class=\"footer_contact\">\n              <ul>\n                <li><i class=\"fa fa-home\"></i><span>Addresss:</span> Lorem Ipsum is simply dummy text of the printing\n                  and typesetting industry. Lorem Ipsum</li>\n                <li><i class=\"fa fa-phone\"></i><span>Phone:</span> (+91) 866-540-3229</li>\n                <li><i class=\"fa fa-envelope-square\"></i><span>Email:</span> info@Lorem Ipsum .com</li>\n              </ul>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-6 col-sm-5\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>Information</h3>\n\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-4 col-sm-4\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>My Account</h3>\n            <div class=\"footer_menu\">\n              <div class=\"footer_contact\">\n                <ul>\n                  <li> Proudly operated from Yorkshire by Preventx and MESMAC as the Nationally commissioned provider of\n                    HIV home-sampling screening. </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n  <div class=\"footer_bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n          <div class=\"copyright_area text-center\">\n            <p>Copyright &copy; 2019 <a href=\"#\">Medintu</a> All Right Reserved.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--footer area end-->"

/***/ }),

/***/ "./src/app/index/checkpostal/checkpostal.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/index/checkpostal/checkpostal.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2NoZWNrcG9zdGFsL2NoZWNrcG9zdGFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/index/checkpostal/checkpostal.component.ts":
/*!************************************************************!*\
  !*** ./src/app/index/checkpostal/checkpostal.component.ts ***!
  \************************************************************/
/*! exports provided: CheckpostalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckpostalComponent", function() { return CheckpostalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/index.service */ "./src/app/index/services/index.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var CheckpostalComponent = /** @class */ (function () {
    function CheckpostalComponent(router, sends, fb) {
        this.router = router;
        this.sends = sends;
        this.fb = fb;
        this.getdata = [];
    }
    CheckpostalComponent.prototype.ngOnInit = function () {
        this.customForm = this.fb.group({
            'firstcode': ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
        this.firstcodelength = this.sends.testcodes.resultData['testCodes'];
        if (this.firstcodelength.length == 1) {
            var some = {};
            some['id'] = this.firstcodelength[0].id;
            some['testName'] = this.firstcodelength[0].testName;
            this.getdata.push(some);
        }
    };
    CheckpostalComponent.prototype.onCheckChange = function (testvalue) {
        for (var count = 0; count < this.firstcodelength.length; count++) {
            if (this.firstcodelength[count].id == testvalue.id) {
                this.firstcodelength[count]['defaultTest'] = !testvalue['defaultTest'];
            }
        }
        //console.log(this.firstcodelength);
    };
    CheckpostalComponent.prototype.show = function (formdata) {
        this.getdata = [];
        console.log(formdata.value);
        for (var count = 0; count < this.firstcodelength.length; count++) {
            if (this.firstcodelength[count].defaultTest == true) {
                var obj = { 'id': this.firstcodelength[count]['id'], 'testName': this.firstcodelength[count]['testName'] };
                this.getdata.push(obj);
                console.log(this.firstcodelength[count]['id']);
            }
        }
        var requestobj = {};
        requestobj = this.sends.persondetails;
        requestobj['testCodes'] = this.getdata;
        this.sends.seconddata = requestobj;
        //this.sends.checkpostal=requestobj;
        console.log(this.sends.seconddata);
        this.router.navigate(['moredetail']);
    };
    CheckpostalComponent.prototype.next = function () {
        this.router.navigate(['moredetail']);
    };
    CheckpostalComponent.prototype.back = function () {
        this.router.navigate(['test']);
    };
    CheckpostalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkpostal',
            template: __webpack_require__(/*! ./checkpostal.component.html */ "./src/app/index/checkpostal/checkpostal.component.html"),
            styles: [__webpack_require__(/*! ./checkpostal.component.scss */ "./src/app/index/checkpostal/checkpostal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_index_service__WEBPACK_IMPORTED_MODULE_2__["IndexService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], CheckpostalComponent);
    return CheckpostalComponent;
}());



/***/ }),

/***/ "./src/app/index/edit-details/edit-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/index/edit-details/edit-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper Start -->\n<!--header area start-->\n<header class=\"header_area beader_bg3\">\n    <!--header top start-->\n    <div class=\"header_top header_top_three\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"header_top_inner\">\n              <div class=\"top_left\">\n                <ul>\n                  <li class=\"currency\"><a href=\"#\">support@medintu.co.uk</a></li>\n                  <li><a href=\"tel:+123123321345\">tel: +44-03300587379</a></li>\n                </ul>\n              </div>\n              <div class=\"top_right\">\n\n                  <!---\t<form class=\"inner_form\" [formGroup]=\"OBSLoginForm\" (ngSubmit)=\"LoginAction(OBSLoginForm.value)\">\n                \n                      <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"required\"  formControlName=\"username\">\n                      </div>\n                      <div class=\"form-group\">\n                          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\"  formControlName=\"password\">\n                      </div>\n                      <div class=\"form-group btn-container\">\n                          <button class=\"btn btn-primary btn-block\" [disabled]=\"OBSLoginForm.invalid\">SIGN IN</button>\n                      </div>  \n                   </form>-->\n    \n                   <button class=\"btn btn-info btn-sm\"  style=\"margin-top: 8px;width: auto;\" (click)=\"viewResult()\">Track Results</button>&nbsp;&nbsp;\n                   <button class=\"btn btn-success btn-sm\"  style=\"margin-top: 8px\" (click)=\"LoginPage()\">Login</button>\n                   \n                   </div>\n    \n             \n              <div class=\"logo logo_three\">\n                <a href=\"index.html\"><img src=\"assets/img/img/logos2.png\" alt=\"\"></a>\n              </div>\n            </div>\n          </div>\n  \n        </div>\n      </div>\n    </div>\n    <!--header top start-->\n    <!--header middel start-->\n    <div class=\"header_middle\">\n      <div class=\"container\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-lg-9 offset-lg-3 offset-md-0\">\n            <div class=\"main_menu menu_three header_position\">\n              <nav>\n                <ul>\n  \n                  <li><a href=\"#\">home</a></li>\n                  <li><a href=\"#\">Aboutus</a></li>\n                  <li><a href=\"#\">Business</a></li>\n                  <li><a href=\"#\">Individuals</a></li>\n                  <li class=\"pull-right google2\">\n                    <div id=\"google_translate_element\"></div>\n                  </li>\n                </ul>\n  \n              </nav>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--header middel end-->\n  \n    <!--popup start-->\n   \n      <!-- Modal -->\n    \n  \n  \n    <!--popup end-->\n  \n  </header>\n  <!--header area end-->\n  \n  <!--Offcanvas menu area start-->\n  \n  <div class=\"off_canvars_overlay\">\n  \n  </div>\n  <div class=\"Offcanvas_menu Offcanvas_three\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"canvas_open\">\n            <span>MENU</span>\n            <a href=\"javascript:void(0)\"><i class=\"ion-navicon\"></i></a>\n          </div>\n          <div class=\"Offcanvas_menu_wrapper\">\n            <div class=\"canvas_close\">\n              <a href=\"javascript:void(0)\"><i class=\"ion-android-close\"></i></a>\n            </div>\n  \n            <div id=\"menu\" class=\"text-left \">\n              <ul class=\"offcanvas_main_menu\">\n                <li class=\"menu-item-has-children active\">\n                  <a href=\"#\">Home</a>\n  \n                </li>\n                <li class=\"menu-item-has-children\">\n                  <a href=\"#\">About</a>\n  \n                </li>\n                <li class=\"menu-item-has-children\">\n                  <a href=\"#\">Gallery</a>\n                </li>\n  \n                <li class=\"menu-item-has-children\">\n                  <a href=\"#\">contact</a>\n                </li>\n  \n              </ul>\n            </div>\n  \n            <div class=\"Offcanvas_footer\">\n              <span><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> info@yourdomain.com</a></span>\n              <ul>\n                <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                <li class=\"pinterest\"><a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a></li>\n                <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--Offcanvas menu area end-->\n\n\n  <div class=\"about_section padt2\">\n      <div class=\"container\">\n    \n        <h2 class=\"heading_top\">please check the details entered</h2>\n    \n        <div class=\"row padt2\">\n    \n          <div class=\"col-lg-4 col-md-4\">\n    \n            <div class=\"address address_5\">\n    \n               <h4 class=\"link_2\"><span>1</span>Personal Details\n                <a  [routerLink]=\"['/address']\">(edit)</a>\n                </h4>\n              <ul>\n                <li>Name:{{firstname}}</li>\n                <li>sex:{{gender}}</li>\n                <li>Dob:{{dob}}</li>\n              </ul>\n    \n              <h4><span>2</span>Kit and Test Booking</h4>\n              <ul>\n                <li>test:HIV KIT</li>\n                <li>HIV only</li>\n              </ul>\n    \n              <h4><span>3</span>Shipping Address \n                  <p>(edit)<p>\n                </h4>\n              <ul>\n                <li>{{address}}</li>\n                \n              </ul>\n    \n              <h4 class=\"link_2\"><span>1</span>Personal Details\n                <a  [routerLink]=\"['/address']\">(edit)</a>\n              </h4>\n              <ul>\n                <li>{{mobile}}</li>\n                <li>{{email}}</li>\n              </ul>\n    \n            </div>\n    \n          </div>\n    \n          <div class=\"col-lg-4 col-md-4\">\n    \n            <div class=\"address\">\n    \n              <h4><span>5</span>Provider details</h4>\n              <ul>\n                <li>Your details test results will be passed\n                  to our partner charity youshine MESMAC for onward care,such as if you were to require testing or\n                  treatement</li>\n    \n              </ul>\n    \n              <h4><span>6</span>Research</h4>\n              <ul>\n                <li>Sometimes we work with external agencis such as public Health England or selected universities in the UK\n                  on research to improve HIV services.If you would be happy to receive an invitation in research please tick\n                  thi box</li>\n              </ul>\n    \n              <h4><span>7</span>Agree & Consent</h4>\n              <ul>\n                <li>we want you to know exactly how our service works and how we use the information\n                  you provide.please confirm you have read our\n                  terms of use and privacy policy</li>\n                <input type=\"checkbox\"> I agree with the terms of use and privacy policy\n              </ul>\n    \n            </div>\n    \n          </div>\n    \n          <div class=\"col-lg-2 col-md-2\">\n    \n          </div>\n    \n        </div>\n    \n        <div class=\"buttons\">\n         <button class=\"btn pull-left\" [routerLink]=\"['/address']\"> <i class=\"fa fa-arrow-circle-left\"></i> Back</button>\n          <button class=\"btn pull-right\" (click)=\"send()\"> <span *ngIf=\"finish\">Finish</span>  &nbsp; <span *ngIf=\"spin\" class=\"fa fa-spinner fa-spin\"></span> </button>\n        </div>\n    \n      </div>\n    </div>\n    \n    <!-- A delivery end -->\n\n    <!--footer area start-->\n<footer class=\"footer_widgets\">\n    <div class=\"container\">\n      <div class=\"footer_top\">\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-6 col-sm-7\">\n            <div class=\"widgets_container contact_us\">\n              <h3>Contacts us</h3>\n              <div class=\"footer_contact\">\n                <ul>\n                  <li><i class=\"fa fa-home\"></i><span>Addresss:</span> Lorem Ipsum is simply dummy text of the printing\n                    and typesetting industry. Lorem Ipsum</li>\n                  <li><i class=\"fa fa-phone\"></i><span>Phone:</span> (+91) 866-540-3229</li>\n                  <li><i class=\"fa fa-envelope-square\"></i><span>Email:</span> info@Lorem Ipsum .com</li>\n                </ul>\n              </div>\n             \n            </div>\n          </div>\n          <div class=\"col-lg-2 col-md-6 col-sm-5\">\n            <div class=\"widgets_container widget_menu\">\n              <h3>Information</h3>\n  \n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-4 col-sm-4\">\n            <div class=\"widgets_container widget_menu\">\n              <h3>My Account</h3>\n              <div class=\"footer_menu\">\n                <div class=\"footer_contact\">\n                  <ul>\n                    <li> Proudly operated from Yorkshire by Preventx and MESMAC as the Nationally commissioned provider of\n                      HIV home-sampling screening. </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n  \n  \n  \n        </div>\n      </div>\n    </div>\n    <div class=\"footer_bottom\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12\">\n            <div class=\"copyright_area text-center\">\n              <p>Copyright &copy; 2019 <a href=\"#\">Medintu</a> All Right Reserved.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>\n  <!--footer area end-->"

/***/ }),

/***/ "./src/app/index/edit-details/edit-details.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/index/edit-details/edit-details.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2VkaXQtZGV0YWlscy9lZGl0LWRldGFpbHMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/index/edit-details/edit-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/index/edit-details/edit-details.component.ts ***!
  \**************************************************************/
/*! exports provided: EditDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditDetailsComponent", function() { return EditDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/index.service */ "./src/app/index/services/index.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var EditDetailsComponent = /** @class */ (function () {
    function EditDetailsComponent(router, sends, authService, fb) {
        this.router = router;
        this.sends = sends;
        this.authService = authService;
        this.fb = fb;
        this.id = 1;
        this.value = 2;
        this.spin = false;
        this.finish = true;
    }
    EditDetailsComponent.prototype.ngOnInit = function () {
        //  this.router.navigate(['result']);
        this.requestobj = {};
        this.resultobj = this.sends.seconddata;
        this.firstname = this.sends.seconddata['firstName'];
        this.gender = this.sends.seconddata['gender'];
        this.dob = this.sends.seconddata['dob'];
        this.address = this.sends.seconddata['address'];
        this.mobile = this.sends.seconddata['notificationPhone'];
        this.email = this.sends.seconddata['notificationEmail'];
        this.OBSLoginForm = this.fb.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
    };
    EditDetailsComponent.prototype.LoginAction = function (formData) {
        if (this.authService.loginAction(formData)) {
            this.router.navigate(['dashboard']);
        }
        this.sends.another(this.resultobj);
    };
    EditDetailsComponent.prototype.send = function () {
        this.spin = true;
        this.finish = false;
        this.sends.another(this.sends.seconddata);
    };
    EditDetailsComponent.prototype.viewResult = function () {
        this.router.navigate(['viewresults']);
    };
    EditDetailsComponent.prototype.LoginPage = function () {
        this.router.navigate(['loginpageaction']);
    };
    EditDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-details',
            template: __webpack_require__(/*! ./edit-details.component.html */ "./src/app/index/edit-details/edit-details.component.html"),
            styles: [__webpack_require__(/*! ./edit-details.component.scss */ "./src/app/index/edit-details/edit-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_index_service__WEBPACK_IMPORTED_MODULE_3__["IndexService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
    ], EditDetailsComponent);
    return EditDetailsComponent;
}());



/***/ }),

/***/ "./src/app/index/final/final.component.html":
/*!**************************************************!*\
  !*** ./src/app/index/final/final.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper Start -->\n<!--header area start-->\n<header class=\"header_area beader_bg3\">\n    <!--header top start-->\n    <div class=\"header_top header_top_three\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-12\">\n            <div class=\"header_top_inner\">\n              <div class=\"top_left\">\n                <ul>\n                  <li class=\"currency\"><a href=\"#\">support@medintu.co.uk</a></li>\n                 <li><a href=\"tel:+123123321345\">tel: +44-03300587379</a></li>\n                </ul>\n              </div>\n              <div class=\"top_right\">\n\n                  <!---\t<form class=\"inner_form\" [formGroup]=\"OBSLoginForm\" (ngSubmit)=\"LoginAction(OBSLoginForm.value)\">\n                \n                      <div class=\"form-group\">\n                        <input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"required\"  formControlName=\"username\">\n                      </div>\n                      <div class=\"form-group\">\n                          <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\"  formControlName=\"password\">\n                      </div>\n                      <div class=\"form-group btn-container\">\n                          <button class=\"btn btn-primary btn-block\" [disabled]=\"OBSLoginForm.invalid\">SIGN IN</button>\n                      </div>  \n                   </form>-->\n    \n                   <button class=\"btn btn-info btn-sm\"  style=\"margin-top: 8px;width: auto;\" (click)=\"viewResult()\">Track Results</button>&nbsp;&nbsp;\n                   <button class=\"btn btn-success btn-sm\"  style=\"margin-top: 8px\" (click)=\"LoginPage()\">Login</button>\n                   \n                   </div>\n    \n              \n              <div class=\"logo logo_three\">\n                <a href=\"index.html\"><img src=\"assets/img/img/logos2.png\" alt=\"\"></a>\n              </div>\n            </div>\n          </div>\n  \n        </div>\n      </div>\n    </div>\n    <!--header top start-->\n    <!--header middel start-->\n    <div class=\"header_middle\">\n      <div class=\"container\">\n        <div class=\"row align-items-center\">\n          <div class=\"col-lg-9 offset-lg-3 offset-md-0\">\n            <div class=\"main_menu menu_three header_position\">\n              <nav>\n                <ul>\n  \n                  <li><a href=\"#\">home</a></li>\n                  <li><a href=\"#\">Aboutus</a></li>\n                  <li><a href=\"#\">Business</a></li>\n                  <li><a href=\"#\">Individuals</a></li>\n                  <li class=\"pull-right google2\">\n                    <div id=\"google_translate_element\"></div>\n                  </li>\n                </ul>\n  \n              </nav>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!--header middel end-->\n  \n    <!--popup start-->\n   \n      <!-- Modal -->\n    \n  \n  \n    <!--popup end-->\n  \n  </header>\n  <!--header area end-->\n  \n  <!--Offcanvas menu area start-->\n  \n  <div class=\"off_canvars_overlay\">\n  \n  </div>\n  <div class=\"Offcanvas_menu Offcanvas_three\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"canvas_open\">\n            <span>MENU</span>\n            <a href=\"javascript:void(0)\"><i class=\"ion-navicon\"></i></a>\n          </div>\n          <div class=\"Offcanvas_menu_wrapper\">\n            <div class=\"canvas_close\">\n              <a href=\"javascript:void(0)\"><i class=\"ion-android-close\"></i></a>\n            </div>\n  \n            <div id=\"menu\" class=\"text-left \">\n              <ul class=\"offcanvas_main_menu\">\n                <li class=\"menu-item-has-children active\">\n                  <a href=\"#\">Home</a>\n  \n                </li>\n                <li class=\"menu-item-has-children\">\n                  <a href=\"#\">About</a>\n  \n                </li>\n                <li class=\"menu-item-has-children\">\n                  <a href=\"#\">Gallery</a>\n                </li>\n  \n                <li class=\"menu-item-has-children\">\n                  <a href=\"#\">contact</a>\n                </li>\n  \n              </ul>\n            </div>\n  \n            <div class=\"Offcanvas_footer\">\n              <span><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> info@yourdomain.com</a></span>\n              <ul>\n                <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n                <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n                <li class=\"pinterest\"><a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a></li>\n                <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n                <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--Offcanvas menu area end-->\n\n\n\n\n  <div class=\"thanks text-center\">\n\n\n      <h2>Hi {{firstname}}, thank you for ordering your test kit.</h2>\n      \n      <p>your test will be posted shortly via first class mail, and should arrive with you within a few days. if you would like to find out more information about our test kit before it arrives, please see the about the test page.</p>\n      <b>please complete and return your test as soon as you can!</b>\n      <p>Simply follow the instructions in your kit to collect and return your sample for testing. Once we recive your sample, results should be available within 5 working days but are usually much quicker.</p>\n      \n      <h3>Your order code is: {{id}}</h3>\n\n</div>\n\n\n\n<!--footer area start-->\n<footer class=\"footer_widgets\">\n    <div class=\"container\">\n      <div class=\"footer_top\">\n        <div class=\"row\">\n          <div class=\"col-lg-4 col-md-6 col-sm-7\">\n            <div class=\"widgets_container contact_us\">\n              <h3>Contacts us</h3>\n              <div class=\"footer_contact\">\n                <ul>\n                  <li><i class=\"fa fa-home\"></i><span>Addresss:</span> Lorem Ipsum is simply dummy text of the printing\n                    and typesetting industry. Lorem Ipsum</li>\n                  <li><i class=\"fa fa-phone\"></i><span>Phone:</span> (+91) 866-540-3229</li>\n                  <li><i class=\"fa fa-envelope-square\"></i><span>Email:</span> info@Lorem Ipsum .com</li>\n                </ul>\n              </div>\n             \n            </div>\n          </div>\n          <div class=\"col-lg-2 col-md-6 col-sm-5\">\n            <div class=\"widgets_container widget_menu\">\n              <h3>Information</h3>\n  \n            </div>\n          </div>\n          <div class=\"col-lg-6 col-md-4 col-sm-4\">\n            <div class=\"widgets_container widget_menu\">\n              <h3>My Account</h3>\n              <div class=\"footer_menu\">\n                <div class=\"footer_contact\">\n                  <ul>\n                    <li> Proudly operated from Yorkshire by Preventx and MESMAC as the Nationally commissioned provider of\n                      HIV home-sampling screening. </li>\n                  </ul>\n                </div>\n              </div>\n            </div>\n          </div>\n  \n  \n  \n        </div>\n      </div>\n    </div>\n    <div class=\"footer_bottom\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12 col-md-12\">\n            <div class=\"copyright_area text-center\">\n              <p>Copyright &copy; 2019 <a href=\"#\">Medintu</a> All Right Reserved.</p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </footer>"

/***/ }),

/***/ "./src/app/index/final/final.component.scss":
/*!**************************************************!*\
  !*** ./src/app/index/final/final.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2ZpbmFsL2ZpbmFsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/index/final/final.component.ts":
/*!************************************************!*\
  !*** ./src/app/index/final/final.component.ts ***!
  \************************************************/
/*! exports provided: FinalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FinalComponent", function() { return FinalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/index.service */ "./src/app/index/services/index.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var FinalComponent = /** @class */ (function () {
    function FinalComponent(sends, router) {
        this.sends = sends;
        this.router = router;
    }
    FinalComponent.prototype.ngOnInit = function () {
        this.requestobj = {};
        this.firstname = this.sends.seconddata['firstName'];
        this.id = sessionStorage.getItem('message');
    };
    FinalComponent.prototype.viewResult = function () {
        this.router.navigate(['viewresults']);
    };
    FinalComponent.prototype.LoginPage = function () {
        this.router.navigate(['loginpageaction']);
    };
    FinalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-final',
            template: __webpack_require__(/*! ./final.component.html */ "./src/app/index/final/final.component.html"),
            styles: [__webpack_require__(/*! ./final.component.scss */ "./src/app/index/final/final.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_index_service__WEBPACK_IMPORTED_MODULE_1__["IndexService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], FinalComponent);
    return FinalComponent;
}());



/***/ }),

/***/ "./src/app/index/index.component.html":
/*!********************************************!*\
  !*** ./src/app/index/index.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<nav class=\"navbar navbar-default navbar-expand-lg navbar-light\">\n\t<div class=\"navbar-header d-flex col\">\n\t\t<a class=\"navbar-brand\" href=\"#\">OBS<b>HRMS</b></a>\n\t\t<button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\"\n\t\t\tclass=\"navbar-toggle navbar-toggler ml-auto\">\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\n\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t<span class=\"icon-bar\"></span>\n\t\t\t<span class=\"icon-bar\"></span>\n\t\t</button>\n\t</div>\n\t\n\t<div id=\"navbarCollapse\" class=\"collapse navbar-collapse justify-content-start\">\n\t\t<ul class=\"nav navbar-nav navbar-right ml-auto\">\n\t\t\t<li class=\"nav-item dropdown\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/login\"><i class=\"fa fa-user-o\"></i> Login</a>\n\t\t\t</li>\n\t\t\t<li class=\"nav-item dropdown\">\n\t\t\t\t<a class=\"nav-link\" routerLink=\"/sing-up\"><i class=\"fa fa-sign-in\"></i> Sign Up</a>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</nav>\n-->\n   <router-outlet></router-outlet>\n\n  \n\n "

/***/ }),

/***/ "./src/app/index/index.component.scss":
/*!********************************************!*\
  !*** ./src/app/index/index.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*navbar*/\n.navbar-header.col {\n  padding: 0 !important; }\n.navbar {\n  background: #fff;\n  padding-left: 16px;\n  padding-right: 16px;\n  border-bottom: 1px solid #dfe3e8;\n  border-radius: 0; }\n.navbar .navbar-brand {\n  font-size: 20px;\n  padding-left: 0;\n  padding-right: 50px; }\n.navbar .navbar-brand b {\n  font-weight: bold;\n  color: #29c68c; }\n.navbar ul.nav li a {\n  color: #999; }\n.navbar ul.nav li a:hover, .navbar ul.nav li a:focus {\n  color: #29c68c !important; }\n.navbar ul.nav li.active > a, .navbar ul.nav li.open > a {\n  color: #26bb84 !important;\n  background: transparent !important; }\n.navbar .form-inline .input-group-addon {\n  box-shadow: none;\n  border-radius: 2px 0 0 2px;\n  background: #f5f5f5;\n  border-color: #dfe3e8;\n  font-size: 16px; }\n.navbar .form-inline i {\n  font-size: 16px; }\n.navbar .form-inline .btn {\n  border-radius: 2px;\n  color: #fff;\n  border-color: #29c68c;\n  background: #29c68c;\n  outline: none; }\n.navbar .form-inline .btn:hover, .navbar .form-inline .btn:focus {\n  border-color: #26bb84;\n  background: #26bb84; }\n.navbar .search-form {\n  display: inline-block; }\n.navbar .search-form .btn {\n  margin-left: 4px; }\n.navbar .search-form .form-control {\n  border-radius: 2px; }\n.navbar .login-form .input-group {\n  margin-right: 4px;\n  float: left; }\n.navbar .login-form .form-control {\n  max-width: 158px;\n  border-radius: 0 2px 2px 0; }\n.navbar .navbar-right .dropdown-toggle::after {\n  display: none; }\n.navbar .dropdown-menu {\n  border-radius: 1px;\n  border-color: #e5e5e5;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); }\n.navbar .dropdown-menu li a {\n  padding: 6px 20px; }\n.navbar .navbar-right .dropdown-menu {\n  width: 505px;\n  padding: 20px;\n  left: auto;\n  right: 0;\n  font-size: 14px; }\n@media (min-width: 1200px) {\n  .search-form .input-group {\n    width: 300px;\n    margin-left: 30px; } }\n@media (max-width: 768px) {\n  .navbar .navbar-right .dropdown-menu {\n    width: 100%;\n    background: transparent;\n    padding: 10px 20px; }\n  .navbar .input-group {\n    width: 100%;\n    margin-bottom: 15px; }\n  .navbar .input-group .form-control {\n    max-width: none; }\n  .navbar .login-form .btn {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvRDpcXExhdGVzdCBPQlNcXE5ldyBmb2xkZXIgKDIpXFxOZXcgZm9sZGVyL3NyY1xcYXBwXFxpbmRleFxcaW5kZXguY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsU0FBQTtBQUNBO0VBQ0kscUJBQXFCLEVBQUE7QUFFekI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCLEVBQUE7QUFFcEI7RUFDSSxlQUFlO0VBQ2YsZUFBZTtFQUNmLG1CQUFtQixFQUFBO0FBRXZCO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTtBQUVsQjtFQUNJLFdBQVcsRUFBQTtBQUVmO0VBQ0kseUJBQXlCLEVBQUE7QUFFN0I7RUFDSSx5QkFBeUI7RUFDekIsa0NBQWtDLEVBQUE7QUFFdEM7RUFDSSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZSxFQUFBO0FBRW5CO0VBQ0ksZUFBZSxFQUFBO0FBRW5CO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTtBQUVqQjtFQUNJLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTtBQUV2QjtFQUNJLHFCQUFxQixFQUFBO0FBRXpCO0VBQ0ksZ0JBQWdCLEVBQUE7QUFFcEI7RUFDSSxrQkFBa0IsRUFBQTtBQUV0QjtFQUNJLGlCQUFpQjtFQUNqQixXQUFXLEVBQUE7QUFFZjtFQUNJLGdCQUFnQjtFQUNoQiwwQkFBMEIsRUFBQTtBQUU5QjtFQUNJLGFBQWEsRUFBQTtBQUVqQjtFQUNJLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIseUNBQXFDLEVBQUE7QUFFekM7RUFDSSxpQkFBaUIsRUFBQTtBQUVyQjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLFFBQVE7RUFDUixlQUFlLEVBQUE7QUFFbkI7RUFDSTtJQUNJLFlBQVk7SUFDWixpQkFBaUIsRUFBQSxFQUNwQjtBQUVMO0VBQ0k7SUFDSSxXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQixFQUFBO0VBRXRCO0lBQ0ksV0FBVztJQUNYLG1CQUFtQixFQUFBO0VBRXZCO0lBQ0ksZUFBZSxFQUFBO0VBRW5CO0lBQ0ksV0FBVyxFQUFBLEVBQ2QiLCJmaWxlIjoic3JjL2FwcC9pbmRleC9pbmRleC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLypuYXZiYXIqL1xyXG4ubmF2YmFyLWhlYWRlci5jb2wge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHRcclxuLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZlM2U4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4ubmF2YmFyIC5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG4ubmF2YmFyIC5uYXZiYXItYnJhbmQgYiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMjljNjhjO1x0XHRcclxufVxyXG4ubmF2YmFyIHVsLm5hdiBsaSBhIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG59XHJcbi5uYXZiYXIgdWwubmF2IGxpIGE6aG92ZXIsIC5uYXZiYXIgdWwubmF2IGxpIGE6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMyOWM2OGMgIWltcG9ydGFudDtcclxufVxyXG4ubmF2YmFyIHVsLm5hdiBsaS5hY3RpdmUgPiBhLCAubmF2YmFyIHVsLm5hdiBsaS5vcGVuID4gYSB7XHJcbiAgICBjb2xvcjogIzI2YmI4NCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4ubmF2YmFyIC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweCAwIDAgMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGJvcmRlci1jb2xvcjogI2RmZTNlODtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubmF2YmFyIC5mb3JtLWlubGluZSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubmF2YmFyIC5mb3JtLWlubGluZSAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjljNjhjO1xyXG4gICAgYmFja2dyb3VuZDogIzI5YzY4YztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLm5hdmJhciAuZm9ybS1pbmxpbmUgLmJ0bjpob3ZlciwgLm5hdmJhciAuZm9ybS1pbmxpbmUgLmJ0bjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyNmJiODQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjZiYjg0O1xyXG59XHJcbi5uYXZiYXIgLnNlYXJjaC1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubmF2YmFyIC5zZWFyY2gtZm9ybSAuYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuLm5hdmJhciAuc2VhcmNoLWZvcm0gLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLm5hdmJhciAubG9naW4tZm9ybSAuaW5wdXQtZ3JvdXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4ubmF2YmFyIC5sb2dpbi1mb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWF4LXdpZHRoOiAxNThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMnB4IDJweCAwO1xyXG59ICAgIFx0XHJcbi5uYXZiYXIgLm5hdmJhci1yaWdodCAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5uYXZiYXIgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTVlNWU1O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsLjA1KTtcclxufVxyXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51IGxpIGEge1xyXG4gICAgcGFkZGluZzogNnB4IDIwcHg7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLXJpZ2h0IC5kcm9wZG93bi1tZW51IHtcclxuICAgIHdpZHRoOiA1MDVweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XHJcbiAgICAuc2VhcmNoLWZvcm0gLmlucHV0LWdyb3VwIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC5uYXZiYXIgLm5hdmJhci1yaWdodCAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XHRcdFx0XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5sb2dpbi1mb3JtIC5idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/index/index.component.ts":
/*!******************************************!*\
  !*** ./src/app/index/index.component.ts ***!
  \******************************************/
/*! exports provided: IndexComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexComponent", function() { return IndexComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var IndexComponent = /** @class */ (function () {
    function IndexComponent() {
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index',
            template: __webpack_require__(/*! ./index.component.html */ "./src/app/index/index.component.html"),
            styles: [__webpack_require__(/*! ./index.component.scss */ "./src/app/index/index.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IndexComponent);
    return IndexComponent;
}());



/***/ }),

/***/ "./src/app/index/index.module.ts":
/*!***************************************!*\
  !*** ./src/app/index/index.module.ts ***!
  \***************************************/
/*! exports provided: IndexModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexModule", function() { return IndexModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/index/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/index/sign-up/sign-up.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _person_details_person_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./person-details/person-details.component */ "./src/app/index/person-details/person-details.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./test/test.component */ "./src/app/index/test/test.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./address/address.component */ "./src/app/index/address/address.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/index/questions/questions.component.ts");
/* harmony import */ var _more_detail_more_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./more-detail/more-detail.component */ "./src/app/index/more-detail/more-detail.component.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./result/result.component */ "./src/app/index/result/result.component.ts");
/* harmony import */ var _edit_details_edit_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./edit-details/edit-details.component */ "./src/app/index/edit-details/edit-details.component.ts");
/* harmony import */ var _final_final_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./final/final.component */ "./src/app/index/final/final.component.ts");
/* harmony import */ var _postcodeerror_postcodeerror_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./postcodeerror/postcodeerror.component */ "./src/app/index/postcodeerror/postcodeerror.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/index/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _viewresults_viewresults_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./viewresults/viewresults.component */ "./src/app/index/viewresults/viewresults.component.ts");
/* harmony import */ var _login_action_page_login_action_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./login-action-page/login-action-page.component */ "./src/app/index/login-action-page/login-action-page.component.ts");
/* harmony import */ var _checkpostal_checkpostal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./checkpostal/checkpostal.component */ "./src/app/index/checkpostal/checkpostal.component.ts");




















var IndexModule = /** @class */ (function () {
    function IndexModule() {
    }
    IndexModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _login_action_page_login_action_page_component__WEBPACK_IMPORTED_MODULE_18__["LoginActionPageComponent"], _viewresults_viewresults_component__WEBPACK_IMPORTED_MODULE_17__["ViewresultsComponent"], _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_5__["SignUpComponent"], _person_details_person_details_component__WEBPACK_IMPORTED_MODULE_7__["PersonDetailsComponent"], _test_test_component__WEBPACK_IMPORTED_MODULE_8__["TestComponent"], _address_address_component__WEBPACK_IMPORTED_MODULE_9__["AddressComponent"], _questions_questions_component__WEBPACK_IMPORTED_MODULE_10__["QuestionsComponent"], _more_detail_more_detail_component__WEBPACK_IMPORTED_MODULE_11__["MoreDetailComponent"], _result_result_component__WEBPACK_IMPORTED_MODULE_12__["ResultComponent"], _edit_details_edit_details_component__WEBPACK_IMPORTED_MODULE_13__["EditDetailsComponent"], _final_final_component__WEBPACK_IMPORTED_MODULE_14__["FinalComponent"], _postcodeerror_postcodeerror_component__WEBPACK_IMPORTED_MODULE_15__["PostcodeerrorComponent"], _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_16__["PagenotfoundComponent"], _checkpostal_checkpostal_component__WEBPACK_IMPORTED_MODULE_19__["CheckpostalComponent"], _checkpostal_checkpostal_component__WEBPACK_IMPORTED_MODULE_19__["CheckpostalComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ]
        })
    ], IndexModule);
    return IndexModule;
}());



/***/ }),

/***/ "./src/app/index/index.router.ts":
/*!***************************************!*\
  !*** ./src/app/index/index.router.ts ***!
  \***************************************/
/*! exports provided: Indexroutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Indexroutes", function() { return Indexroutes; });
/* harmony import */ var _checkpostal_checkpostal_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkpostal/checkpostal.component */ "./src/app/index/checkpostal/checkpostal.component.ts");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/index/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _postcodeerror_postcodeerror_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./postcodeerror/postcodeerror.component */ "./src/app/index/postcodeerror/postcodeerror.component.ts");
/* harmony import */ var _final_final_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./final/final.component */ "./src/app/index/final/final.component.ts");
/* harmony import */ var _more_detail_more_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more-detail/more-detail.component */ "./src/app/index/more-detail/more-detail.component.ts");
/* harmony import */ var _questions_questions_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./questions/questions.component */ "./src/app/index/questions/questions.component.ts");
/* harmony import */ var _address_address_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./address/address.component */ "./src/app/index/address/address.component.ts");
/* harmony import */ var _test_test_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./test/test.component */ "./src/app/index/test/test.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/login.component */ "./src/app/index/login/login.component.ts");
/* harmony import */ var _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sign-up/sign-up.component */ "./src/app/index/sign-up/sign-up.component.ts");
/* harmony import */ var _index_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.component */ "./src/app/index/index.component.ts");
/* harmony import */ var _gaurds_login_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../gaurds/login.guard */ "./src/app/gaurds/login.guard.ts");
/* harmony import */ var _result_result_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./result/result.component */ "./src/app/index/result/result.component.ts");
/* harmony import */ var _person_details_person_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./person-details/person-details.component */ "./src/app/index/person-details/person-details.component.ts");
/* harmony import */ var _edit_details_edit_details_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./edit-details/edit-details.component */ "./src/app/index/edit-details/edit-details.component.ts");
/* harmony import */ var _viewresults_viewresults_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./viewresults/viewresults.component */ "./src/app/index/viewresults/viewresults.component.ts");
/* harmony import */ var _login_action_page_login_action_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login-action-page/login-action-page.component */ "./src/app/index/login-action-page/login-action-page.component.ts");

















var Indexroutes = [
    { path: '', component: _index_component__WEBPACK_IMPORTED_MODULE_10__["IndexComponent"], canActivate: [_gaurds_login_guard__WEBPACK_IMPORTED_MODULE_11__["LoginGuard"]],
        children: [
            { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
            { path: 'login/:id', component: _login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
            { path: 'sing-up', component: _sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_9__["SignUpComponent"] },
            { path: 'personsdetails', component: _person_details_person_details_component__WEBPACK_IMPORTED_MODULE_13__["PersonDetailsComponent"] },
            { path: 'personsdetails/:id', component: _person_details_person_details_component__WEBPACK_IMPORTED_MODULE_13__["PersonDetailsComponent"] },
            { path: 'test', component: _test_test_component__WEBPACK_IMPORTED_MODULE_7__["TestComponent"] },
            { path: 'address', component: _address_address_component__WEBPACK_IMPORTED_MODULE_6__["AddressComponent"] },
            { path: 'address/:id', component: _address_address_component__WEBPACK_IMPORTED_MODULE_6__["AddressComponent"] },
            { path: 'result/:id', component: _result_result_component__WEBPACK_IMPORTED_MODULE_12__["ResultComponent"] },
            { path: 'question', component: _questions_questions_component__WEBPACK_IMPORTED_MODULE_5__["QuestionsComponent"] },
            { path: 'checkpostal', component: _checkpostal_checkpostal_component__WEBPACK_IMPORTED_MODULE_0__["CheckpostalComponent"] },
            { path: 'moredetail', component: _more_detail_more_detail_component__WEBPACK_IMPORTED_MODULE_4__["MoreDetailComponent"] },
            { path: 'result', component: _result_result_component__WEBPACK_IMPORTED_MODULE_12__["ResultComponent"] },
            { path: 'edit', component: _edit_details_edit_details_component__WEBPACK_IMPORTED_MODULE_14__["EditDetailsComponent"] },
            { path: 'final', component: _final_final_component__WEBPACK_IMPORTED_MODULE_3__["FinalComponent"] },
            { path: 'not', component: _postcodeerror_postcodeerror_component__WEBPACK_IMPORTED_MODULE_2__["PostcodeerrorComponent"] },
            { path: 'pagenotfound', component: _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_1__["PagenotfoundComponent"] },
            { path: 'final', component: _final_final_component__WEBPACK_IMPORTED_MODULE_3__["FinalComponent"] },
            { path: 'viewresults', component: _viewresults_viewresults_component__WEBPACK_IMPORTED_MODULE_15__["ViewresultsComponent"] },
            { path: 'loginpageaction', component: _login_action_page_login_action_page_component__WEBPACK_IMPORTED_MODULE_16__["LoginActionPageComponent"] }
        ]
    }
];


/***/ }),

/***/ "./src/app/index/login-action-page/login-action-page.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/index/login-action-page/login-action-page.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<!--header start-->\n\n\n<!-- Main Wrapper Start -->\n<!--header area start-->\n<header class=\"header_area beader_bg3\">\n\t\t<!--header top start-->\n\t\t<div class=\"header_top header_top_three\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row\">\n\t\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t\t<div class=\"header_top_inner\">\n\t\t\t\t\t\t\t<div class=\"top_left\">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li class=\"currency\"><a href=\"#\">support@medintu.co.uk</a></li>\n\t                <li><a href=\"tel:+123123321345\">tel: +44-03300587379</a></li>\n\t             </ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"top_right\">\n\t\t\t\t\t\t\t\t\n                   <button class=\"btn btn-info btn-sm\"  style=\"margin-top: 8px;width: auto;\" (click)=\"viewResult()\">Track Results</button>&nbsp;&nbsp;\n\t\t\t\t\t\t\t\t\t <button class=\"btn btn-success btn-sm\"  style=\"margin-top: 8px\" (click)=\"LoginPage()\">Login</button>\n\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t<div class=\"logo logo_three\">\n\t\t\t\t\t\t\t\t<a href=\"index.html\"><img src=\"assets/img/img/logo.png\" alt=\"\"></a>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--header top start-->\n\t\t<!--header middel start-->\n\t\t<div class=\"header_middle\">\n\t\t\t<div class=\"container\">\n\t\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t\t<div class=\"col-lg-9 offset-lg-3 offset-md-0\">\n\t\t\t\t\t\t<div class=\"main_menu menu_three header_position\">\n\t\t\t\t\t\t\t<nav>\n\t\t\t\t\t\t\t\t<ul>\n\t\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">home</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Aboutus</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Business</a></li>\n\t\t\t\t\t\t\t\t\t<li><a href=\"#\">Individuals</a></li>\n\t\t\t\t\t\t\t\t\t<li class=\"pull-right google2\">\n\t\t\t\t\t\t\t\t\t\t<div id=\"google_translate_element\"></div>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\n\t\t\t\t\t\t\t</nav>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t<!--header middel end-->\n\t\n\t\n\t\n\t</header>\n\t<!--header area end-->\n\t\n\t<!--Offcanvas menu area start-->\n\t\n\t<div class=\"off_canvars_overlay\">\n\t\n\t</div>\n\t<div class=\"Offcanvas_menu Offcanvas_three\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<div class=\"canvas_open\">\n\t\t\t\t\t\t<span>MENU</span>\n\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ion-navicon\"></i></a>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"Offcanvas_menu_wrapper\">\n\t\t\t\t\t\t<div class=\"canvas_close\">\n\t\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ion-android-close\"></i></a>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t<div id=\"menu\" class=\"text-left \">\n\t\t\t\t\t\t\t<ul class=\"offcanvas_main_menu\">\n\t\t\t\t\t\t\t\t<li class=\"menu-item-has-children active\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Home</a>\n\t\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"menu-item-has-children\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">About</a>\n\t\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li class=\"menu-item-has-children\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">Gallery</a>\n\t\t\t\t\t\t\t\t</li>\n\t\n\t\t\t\t\t\t\t\t<li class=\"menu-item-has-children\">\n\t\t\t\t\t\t\t\t\t<a href=\"#\">contact</a>\n\t\t\t\t\t\t\t\t</li>\n\t\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t<div class=\"Offcanvas_footer\">\n\t\t\t\t\t\t\t<span><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> info@yourdomain.com</a></span>\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t\t\t\t<li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t\t\t\t\t<li class=\"pinterest\"><a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a></li>\n\t\t\t\t\t\t\t\t<li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n\t\t\t\t\t\t\t\t<li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--Offcanvas menu area end-->\n\t\n\t  \n  <!--first page start -->\n\t<div class=\"about_section mt-60\" style=\"margin-left: 40%\">\n      <div class=\"container\">\n        <div class=\"row\">\n        \n            <form class=\"inner_form\" [formGroup]=\"OBSLoginForm\" (ngSubmit)=\"LoginAction(OBSLoginForm.value)\">\n                <H3>Login to the Application</H3>\n                <div class=\"form-group\">\n                  <input type=\"text\" class=\"form-control\" style=\"width: 200%;\" placeholder=\"Username\" required=\"required\"  formControlName=\"username\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" class=\"form-control\" style=\"width: 200%;\" placeholder=\"Password\" required=\"required\"  formControlName=\"password\">\n                </div>\n                <div class=\"form-group btn-container\">\n                    <button class=\"btn btn-primary btn-block\" style=\"width: 200%;\" [disabled]=\"OBSLoginForm.invalid\">SIGN IN</button>\n               </div>  \n            </form>\n        </div>\n      </div>\n    </div>\n<!--footer area start-->\n<footer class=\"footer_widgets\">\n    <div class=\"container\">\n      <div class=\"footer_top\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 col-sm-7\">\n        <div class=\"widgets_container contact_us\">\n          <h3>Contacts us</h3>\n          <div class=\"footer_contact\">\n          <ul>\n            <li><i class=\"fa fa-home\"></i><span>Addresss:</span> Lorem Ipsum is simply dummy text of the printing\n            and typesetting industry. Lorem Ipsum</li>\n            <li><i class=\"fa fa-phone\"></i><span>Phone:</span> (+91) 866-540-3229</li>\n            <li><i class=\"fa fa-envelope-square\"></i><span>Email:</span> info@Lorem Ipsum .com</li>\n          </ul>\n          </div>\n         \n        </div>\n        </div>\n        <div class=\"col-lg-2 col-md-6 col-sm-5\">\n        <div class=\"widgets_container widget_menu\">\n          <h3>Information</h3>\n    \n        </div>\n        </div>\n        <div class=\"col-lg-6 col-md-4 col-sm-4\">\n        <div class=\"widgets_container widget_menu\">\n          <h3>My Account</h3>\n          <div class=\"footer_menu\">\n          <div class=\"footer_contact\">\n            <ul>\n            <li> Proudly operated from Yorkshire by Preventx and MESMAC as the Nationally commissioned provider of\n              HIV home-sampling screening. </li>\n            </ul>\n          </div>\n          </div>\n        </div>\n        </div>\n    \n    \n    \n      </div>\n      </div>\n    </div>\n    <div class=\"footer_bottom\">\n      <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n        <div class=\"copyright_area text-center\">\n          <p>Copyright &copy; 2019 <a href=\"#\">Medintu</a> All Right Reserved.</p>\n        </div>\n        </div>\n      </div>\n      </div>\n    </div>\n    </footer>\n    <!--footer area end-->"

/***/ }),

/***/ "./src/app/index/login-action-page/login-action-page.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/index/login-action-page/login-action-page.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2xvZ2luLWFjdGlvbi1wYWdlL2xvZ2luLWFjdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/index/login-action-page/login-action-page.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/index/login-action-page/login-action-page.component.ts ***!
  \************************************************************************/
/*! exports provided: LoginActionPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginActionPageComponent", function() { return LoginActionPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/index.service */ "./src/app/index/services/index.service.ts");






var LoginActionPageComponent = /** @class */ (function () {
    function LoginActionPageComponent(fb, authService, routerNavigate, sendservice) {
        this.fb = fb;
        this.authService = authService;
        this.routerNavigate = routerNavigate;
        this.sendservice = sendservice;
    }
    LoginActionPageComponent.prototype.LoginAction = function (formData) {
        if (this.authService.loginAction(formData)) {
            this.routerNavigate.navigate(['dashboard']);
        }
    };
    LoginActionPageComponent.prototype.ngOnInit = function () {
        this.OBSLoginForm = this.fb.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginActionPageComponent.prototype.viewResult = function () {
        this.routerNavigate.navigate(['viewresults']);
    };
    LoginActionPageComponent.prototype.LoginPage = function () {
        this.routerNavigate.navigate(['loginpageaction']);
    };
    LoginActionPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-action-page',
            template: __webpack_require__(/*! ./login-action-page.component.html */ "./src/app/index/login-action-page/login-action-page.component.html"),
            styles: [__webpack_require__(/*! ./login-action-page.component.scss */ "./src/app/index/login-action-page/login-action-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_index_service__WEBPACK_IMPORTED_MODULE_5__["IndexService"]])
    ], LoginActionPageComponent);
    return LoginActionPageComponent;
}());



/***/ }),

/***/ "./src/app/index/login/login.component.html":
/*!**************************************************!*\
  !*** ./src/app/index/login/login.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--header start-->\n\n\n<!-- Main Wrapper Start -->\n<!--header area start-->\n<header class=\"header_area beader_bg3\">\n\t<!--header top start-->\n\t<div class=\"header_top header_top_three\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-12\">\n\t\t\t\t\t<div class=\"header_top_inner\">\n\t\t\t\t\t\t<div class=\"top_left\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li class=\"currency\"><a href=\"#\">support@medintu.co.uk</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"tel:+123123321345\">tel: +44-03300587379</a></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"top_right\">\n\n\t\t\t\t\t\t\t<button class=\"btn btn-info btn-sm\" style=\"margin-top: 8px;width: auto;\" (click)=\"viewResult()\">Track\n\t\t\t\t\t\t\t\tResults</button>&nbsp;&nbsp;\n\t\t\t\t\t\t\t<!--\t<button class=\"btn btn-success btn-sm\"  style=\"margin-top: 8px\" (click)=\"LoginPage()\">Login</button>-->\n\t\t\t\t\t\t\t<button class=\"btn btn-success btn-sm\" style=\"margin-top: 8px\" (click)=\"LoginPage()\">Login</button>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"logo logo_three\">\n\t\t\t\t\t\t\t<a href=\"index.html\"><img src=\"assets/img/img/logos2.png\" alt=\"\"></a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--header top start-->\n\t<!--header middel start-->\n\t<div class=\"header_middle\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row align-items-center\">\n\t\t\t\t<div class=\"col-lg-9 offset-lg-3 offset-md-0\">\n\t\t\t\t\t<div class=\"main_menu menu_three header_position\">\n\t\t\t\t\t\t<nav>\n\t\t\t\t\t\t\t<ul>\n\n\t\t\t\t\t\t\t\t<li><a href=\"#\" (click)=\"homePage()\">home</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Aboutus</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Business</a></li>\n\t\t\t\t\t\t\t\t<li><a href=\"#\">Individuals</a></li>\n\t\t\t\t\t\t\t\t<li class=\"pull-right google2\">\n\t\t\t\t\t\t\t\t\t<div id=\"google_translate_element\"></div>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\n\t\t\t\t\t\t</nav>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<!--header middel end-->\n\n\n\n</header>\n<!--header area end-->\n\n<!--Offcanvas menu area start-->\n\n<div class=\"off_canvars_overlay\">\n\n</div>\n<div class=\"Offcanvas_menu Offcanvas_three\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-12\">\n\t\t\t\t<div class=\"canvas_open\">\n\t\t\t\t\t<span>MENU</span>\n\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ion-navicon\"></i></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"Offcanvas_menu_wrapper\">\n\t\t\t\t\t<div class=\"canvas_close\">\n\t\t\t\t\t\t<a href=\"javascript:void(0)\"><i class=\"ion-android-close\"></i></a>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div id=\"menu\" class=\"text-left \">\n\t\t\t\t\t\t<ul class=\"offcanvas_main_menu\">\n\t\t\t\t\t\t\t<li class=\"menu-item-has-children active\">\n\t\t\t\t\t\t\t\t<a href=\"#\">Home</a>\n\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"menu-item-has-children\">\n\t\t\t\t\t\t\t\t<a href=\"#\">About</a>\n\n\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t<li class=\"menu-item-has-children\">\n\t\t\t\t\t\t\t\t<a href=\"#\">Gallery</a>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t\t<li class=\"menu-item-has-children\">\n\t\t\t\t\t\t\t\t<a href=\"#\">contact</a>\n\t\t\t\t\t\t\t</li>\n\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<div class=\"Offcanvas_footer\">\n\t\t\t\t\t\t<span><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> info@yourdomain.com</a></span>\n\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t<li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n\t\t\t\t\t\t\t<li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n\t\t\t\t\t\t\t<li class=\"pinterest\"><a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a></li>\n\t\t\t\t\t\t\t<li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n\t\t\t\t\t\t\t<li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n\t\t\t\t\t\t</ul>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<!--Offcanvas menu area end-->\n\n<!--header end-->\n\n<!--first page start -->\n<div class=\"about_section mt-60\" id=\"age_section\">\n\t<div class=\"container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-lg-12 col-md-12\">\n\n\t\t\t</div>\n\n\t\t\t<div class=\"col-lg-8 col-md-8\">\n\n\t\t\t\t<div class=\"about_content text-left\">\n\t\t\t\t\t<h1>Around 13% of the estimated 100,000 people living with HIV,Syphilis in the UK remain undiagnosed.</h1>\n\t\t\t\t\t<p>Free self-sampling HIV, Syphilis test kits are available in many areas of the country — enter your details\n\t\t\t\t\t\tbelow to\n\t\t\t\t\t\tcheck your eligibility:</p>\n\t\t\t\t</div>\n \n\t\t\t\t\n\n\t\t\t</div>\n\n\t\t\t<div class=\"col-lg-4 col-md-4\">\n\n\t\t\t\t<div class=\"account_form login_form\">\n\n\t\t\t\t\t<!----more details start-->\n\n\t\t\t\t\t<div class=\"panel\">\n\n\t\t\t\t\t\t<div class=\"panel_heading\">\n\n\t\t\t\t\t\t\t<h5 class=\"text-center\">Please Check Your Eligibility</h5>\n\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<div class=\"panel_body\">\n\n\t\t\t\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t\t\t\t<div class=\"col-lg-12 col-md-12\">\n\n\t\t\t\t\t\t\t\t\t<form class=\"inner_21\">\n\n\n\t\t\t\t\t\t\t\t\t\t<label>Enter Your age <span>*</span></label>\n\n\t\t\t\t\t\t\t\t\t\t<p>\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" class=\"age\" required [(ngModel)]=\"age\" name=\"age\" class=\"col-md-7\" required #agevalue=\"ngModel\" />\n\t\t\t\t\t\t\t\t\t\t</p>\n\n\t\t\t\t\t\t\t\t\t\t<div class=\"login_submit1\">\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"button\"  (click)=\"pass(age)\" class=\"btn btn-info btn_another login_button\" value=\"GO\">\n\t\t\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t\t\t<h6 class=\"text text-danger text-center eligible\" *ngIf=\"test\">Sorry - we're not able to offer postal tests to under 16s in your area, but other services are available.</h6>\n\n\n\t\t\t\t\t\t\t\t\t</form>\n\n\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<!--more details end-->\n\n\t\t\t\t</div>\n\n\t\t\t\t<!--enter details start-->\n\n\n\n\t\t\t\t<!--enter details end-->\n\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n\n</div>\n<!--header end-->\n\n<!--person details start-->\n\n\n\n\n\n<!---person details end-->\n\n\n<!--footer area start-->\n<footer class=\"footer_widgets\">\n\t<div class=\"container\">\n\t\t<div class=\"footer_top\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-4 col-md-6 col-sm-7\">\n\t\t\t\t\t<div class=\"widgets_container contact_us\">\n\t\t\t\t\t\t<h3>Contacts us</h3>\n\t\t\t\t\t\t<div class=\"footer_contact\">\n\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-home\"></i><span>Addresss:</span> Lorem Ipsum is simply dummy text of the printing\n\t\t\t\t\t\t\t\t\tand typesetting industry. Lorem Ipsum</li>\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-phone\"></i><span>Phone:</span> (+91) 866-540-3229</li>\n\t\t\t\t\t\t\t\t<li><i class=\"fa fa-envelope-square\"></i><span>Email:</span> info@Lorem Ipsum .com</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-2 col-md-6 col-sm-5\">\n\t\t\t\t\t<div class=\"widgets_container widget_menu\">\n\t\t\t\t\t\t<h3>Information</h3>\n\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"col-lg-6 col-md-4 col-sm-4\">\n\t\t\t\t\t<div class=\"widgets_container widget_menu\">\n\t\t\t\t\t\t<h3>My Account</h3>\n\t\t\t\t\t\t<div class=\"footer_menu\">\n\t\t\t\t\t\t\t<div class=\"footer_contact\">\n\t\t\t\t\t\t\t\t<ul>\n\t\t\t\t\t\t\t\t\t<li> Proudly operated from Yorkshire by Preventx and MESMAC as the Nationally commissioned provider of\n\t\t\t\t\t\t\t\t\t\tHIV home-sampling screening. </li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\n\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<div class=\"footer_bottom\">\n\t\t<div class=\"container\">\n\t\t\t<div class=\"row\">\n\t\t\t\t<div class=\"col-lg-12 col-md-12\">\n\t\t\t\t\t<div class=\"copyright_area text-center\">\n\t\t\t\t\t\t<p>Copyright &copy; 2019 <a href=\"#\">Medintu</a> All Right Reserved.</p>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</footer>\n<!--footer area end-->\n\n\n\n\n\n\n<style>\n\n\n\n</style>"

/***/ }),

/***/ "./src/app/index/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/index/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".form-control {\n  box-shadow: none;\n  border-color: #ddd; }\n\n.form-control:focus {\n  border-color: #19aa8d; }\n\n.login-form {\n  width: 350px;\n  margin: 0 auto;\n  padding: 30px 0; }\n\n.login-form form {\n  color: #434343;\n  border-radius: 1px;\n  margin-bottom: 15px;\n  background: #fff;\n  border: 1px solid #f3f3f3;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n  padding: 30px; }\n\n.login-form h4 {\n  text-align: center;\n  font-size: 22px;\n  margin-bottom: 20px; }\n\n.login-form .avatar {\n  color: #fff;\n  margin: 0 auto 30px;\n  text-align: center;\n  width: 100px;\n  height: 100px;\n  border-radius: 50%;\n  z-index: 9;\n  background: #19aa8d;\n  padding: 15px;\n  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.1); }\n\n.login-form .avatar i {\n  font-size: 62px; }\n\n.login-form .form-group {\n  margin-bottom: 20px; }\n\n.login-form .form-control, .login-form .btn {\n  min-height: 40px;\n  border-radius: 2px;\n  transition: all 0.5s; }\n\n.login-form .close {\n  position: absolute;\n  top: 15px;\n  right: 15px; }\n\n.login-form .btn {\n  background: #19aa8d;\n  border: none;\n  line-height: normal; }\n\n.login-form .btn:hover, .login-form .btn:focus {\n  background: #19aa8d; }\n\n.login-form .checkbox-inline {\n  float: left; }\n\n.login-form input[type=\"checkbox\"] {\n  margin-top: 2px; }\n\n.login-form .forgot-link {\n  float: right; }\n\n.login-form .small {\n  font-size: 13px; }\n\n.login-form a {\n  color: #19aa8d; }\n\n/*forgot password*/\n\n.modal-newsletter {\n  color: #999;\n  font-size: 15px; }\n\n.modal-newsletter .modal-content {\n  padding: 40px;\n  border-radius: 0;\n  border: none; }\n\n.modal-newsletter .modal-header {\n  border-bottom: none;\n  position: relative;\n  text-align: center;\n  border-radius: 5px 5px 0 0; }\n\n.modal-newsletter h4 {\n  color: #000;\n  text-align: center;\n  font-size: 30px;\n  margin: 0 0 25px;\n  font-weight: bold;\n  text-transform: capitalize; }\n\n.modal-newsletter .close {\n  background: #c0c3c8;\n  position: absolute;\n  top: -15px;\n  right: -15px;\n  color: #fff;\n  text-shadow: none;\n  opacity: 0.5;\n  width: 22px;\n  height: 22px;\n  border-radius: 20px;\n  font-size: 16px;\n  padding: 4px; }\n\n.modal-newsletter .close span {\n  position: relative;\n  top: -1px; }\n\n.modal-newsletter .close:hover {\n  opacity: 0.8; }\n\n.modal-newsletter .icon-box {\n  color: #19aa8d;\n  display: inline-block;\n  z-index: 9;\n  text-align: center;\n  position: relative;\n  margin-bottom: 10px;\n  margin-left: 130px; }\n\n.modal-newsletter .icon-box i {\n  font-size: 110px; }\n\n.modal-newsletter .form-control, .modal-newsletter .btn {\n  min-height: 46px;\n  border-radius: 3px; }\n\n.modal-newsletter .form-control {\n  box-shadow: none;\n  border-color: #dbdbdb; }\n\n.modal-newsletter .form-control:focus {\n  border-color: #19aa8d;\n  box-shadow: 0 0 8px #19aa8d; }\n\n.modal-newsletter .btn {\n  color: #fff;\n  border-radius: 4px;\n  background: #19aa8d;\n  text-decoration: none;\n  transition: all 0.4s;\n  line-height: normal;\n  padding: 6px 20px;\n  min-width: 150px;\n  border: none; }\n\n.modal-newsletter .btn:hover, .modal-newsletter .btn:focus {\n  background: #19aa8d;\n  outline: none; }\n\n.modal-newsletter .input-group {\n  margin: 30px 0 15px; }\n\n.hint-text {\n  margin: 100px auto;\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvbG9naW4vRDpcXExhdGVzdCBPQlNcXE5ldyBmb2xkZXIgKDIpXFxOZXcgZm9sZGVyL3NyY1xcYXBwXFxpbmRleFxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQixFQUFBOztBQUVwQjtFQUNFLHFCQUFxQixFQUFBOztBQUV2QjtFQUNNLFlBQVk7RUFDaEIsY0FBYztFQUNkLGVBQWUsRUFBQTs7QUFFZjtFQUNJLGNBQWM7RUFDbEIsa0JBQWtCO0VBQ2hCLG1CQUFtQjtFQUNqQixnQkFBZ0I7RUFDcEIseUJBQXlCO0VBQ3JCLDBDQUEwQztFQUMxQyxhQUFhLEVBQUE7O0FBRW5CO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDWCxtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxXQUFXO0VBQ2YsbUJBQW1CO0VBQ2Ysa0JBQWtCO0VBQ3RCLFlBQVk7RUFDWixhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixtQkFBa0I7RUFDbEIsYUFBYTtFQUNiLDBDQUEwQyxFQUFBOztBQUUxQztFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFFekI7RUFDRSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2Qsb0JBQW9CLEVBQUE7O0FBRTFCO0VBQ00sa0JBQWtCO0VBQ3RCLFNBQVM7RUFDVCxXQUFXLEVBQUE7O0FBRWI7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLG1CQUFtQixFQUFBOztBQUVyQjtFQUNFLG1CQUFtQixFQUFBOztBQUVuQjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxZQUFZLEVBQUE7O0FBRWhCO0VBQ0ksZUFBZSxFQUFBOztBQUVuQjtFQUNJLGNBQWMsRUFBQTs7QUFLbEIsa0JBQUE7O0FBQ0E7RUFDQSxXQUFXO0VBQ1gsZUFBZSxFQUFBOztBQUVoQjtFQUNDLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsWUFBWSxFQUFBOztBQUViO0VBQ0MsbUJBQW1CO0VBQ2Isa0JBQWtCO0VBQ3hCLGtCQUFrQjtFQUNsQiwwQkFBMEIsRUFBQTs7QUFFM0I7RUFDQyxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDBCQUEwQixFQUFBOztBQUUzQjtFQUNDLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFlBQVk7RUFDWixXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNqQixlQUFlO0VBQ2YsWUFBWSxFQUFBOztBQUVmO0VBQ0Msa0JBQWtCO0VBQ2xCLFNBQVMsRUFBQTs7QUFFVjtFQUNDLFlBQVksRUFBQTs7QUFFYjtFQUNDLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDaEIsbUJBQW1CO0VBQ25CLGtCQUFrQixFQUFBOztBQUVyQjtFQUNDLGdCQUFnQixFQUFBOztBQUVqQjtFQUNDLGdCQUFnQjtFQUNoQixrQkFBa0IsRUFBQTs7QUFFbkI7RUFDQyxnQkFBZ0I7RUFDaEIscUJBQXFCLEVBQUE7O0FBRXRCO0VBQ0MscUJBQXFCO0VBQ3JCLDJCQUNELEVBQUE7O0FBQ0c7RUFDSSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ3hCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsb0JBQW9CO0VBQ2QsbUJBQW1CO0VBQ3pCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDVixZQUFZLEVBQUE7O0FBRW5CO0VBQ0MsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFFZDtFQUNDLG1CQUFtQixFQUFBOztBQUVwQjtFQUNDLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2luZGV4L2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gIGJveC1zaGFkb3c6IG5vbmU7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZGRkO1xyXG59XHJcbi5mb3JtLWNvbnRyb2w6Zm9jdXMge1xyXG4gIGJvcmRlci1jb2xvcjogIzE5YWE4ZDsgXHJcbn1cclxuLmxvZ2luLWZvcm0ge1xyXG4gICAgICB3aWR0aDogMzUwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcGFkZGluZzogMzBweCAwO1xyXG59XHJcbiAgLmxvZ2luLWZvcm0gZm9ybSB7XHJcbiAgICAgIGNvbG9yOiAjNDM0MzQzO1xyXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2YzZjNmMztcclxuICAgICAgYm94LXNoYWRvdzogMHB4IDJweCAycHggcmdiYSgwLCAwLCAwLCAwLjMpO1xyXG4gICAgICBwYWRkaW5nOiAzMHB4O1xyXG59XHJcbi5sb2dpbi1mb3JtIGg0IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyMnB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiAgLmxvZ2luLWZvcm0gLmF2YXRhciB7XHJcbiAgICAgIGNvbG9yOiAjZmZmO1xyXG4gIG1hcmdpbjogMCBhdXRvIDMwcHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgei1pbmRleDogOTtcclxuICBiYWNrZ3JvdW5kOiMxOWFhOGQ7XHJcbiAgcGFkZGluZzogMTVweDtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbn1cclxuICAubG9naW4tZm9ybSAuYXZhdGFyIGkge1xyXG4gICAgICBmb250LXNpemU6IDYycHg7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIC5mb3JtLWdyb3VwIHtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICB9XHJcbi5sb2dpbi1mb3JtIC5mb3JtLWNvbnRyb2wsIC5sb2dpbi1mb3JtIC5idG4ge1xyXG4gIG1pbi1oZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4OyBcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbn1cclxuLmxvZ2luLWZvcm0gLmNsb3NlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTVweDtcclxuICByaWdodDogMTVweDtcclxufVxyXG4ubG9naW4tZm9ybSAuYnRuIHtcclxuICBiYWNrZ3JvdW5kOiAjMTlhYThkO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG59XHJcbi5sb2dpbi1mb3JtIC5idG46aG92ZXIsIC5sb2dpbi1mb3JtIC5idG46Zm9jdXMge1xyXG4gIGJhY2tncm91bmQ6ICMxOWFhOGQ7XHJcbn1cclxuICAubG9naW4tZm9ybSAuY2hlY2tib3gtaW5saW5lIHtcclxuICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICAgIG1hcmdpbi10b3A6IDJweDtcclxuICB9XHJcbiAgLmxvZ2luLWZvcm0gLmZvcmdvdC1saW5rIHtcclxuICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gIH1cclxuICAubG9naW4tZm9ybSAuc21hbGwge1xyXG4gICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgfVxyXG4gIC5sb2dpbi1mb3JtIGEge1xyXG4gICAgICBjb2xvcjogIzE5YWE4ZDtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLypmb3Jnb3QgcGFzc3dvcmQqL1xyXG4gIC5tb2RhbC1uZXdzbGV0dGVyIHtcdFxyXG5cdFx0Y29sb3I6ICM5OTk7XHJcblx0XHRmb250LXNpemU6IDE1cHg7XHJcblx0fVxyXG5cdC5tb2RhbC1uZXdzbGV0dGVyIC5tb2RhbC1jb250ZW50IHtcclxuXHRcdHBhZGRpbmc6IDQwcHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAwO1x0XHRcclxuXHRcdGJvcmRlcjogbm9uZTtcclxuXHR9XHJcblx0Lm1vZGFsLW5ld3NsZXR0ZXIgLm1vZGFsLWhlYWRlciB7XHJcblx0XHRib3JkZXItYm90dG9tOiBub25lOyAgIFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xyXG5cdH1cclxuXHQubW9kYWwtbmV3c2xldHRlciBoNCB7XHJcblx0XHRjb2xvcjogIzAwMDtcclxuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHRcdGZvbnQtc2l6ZTogMzBweDtcclxuXHRcdG1hcmdpbjogMCAwIDI1cHg7XHJcblx0XHRmb250LXdlaWdodDogYm9sZDtcclxuXHRcdHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG5cdH1cclxuXHQubW9kYWwtbmV3c2xldHRlciAuY2xvc2Uge1xyXG5cdFx0YmFja2dyb3VuZDogI2MwYzNjODtcclxuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHRcdHRvcDogLTE1cHg7XHJcblx0XHRyaWdodDogLTE1cHg7XHJcblx0XHRjb2xvcjogI2ZmZjtcclxuXHRcdHRleHQtc2hhZG93OiBub25lO1xyXG5cdFx0b3BhY2l0eTogMC41O1xyXG5cdFx0d2lkdGg6IDIycHg7XHJcblx0XHRoZWlnaHQ6IDIycHg7XHJcblx0XHRib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogNHB4O1xyXG5cdH1cclxuXHQubW9kYWwtbmV3c2xldHRlciAuY2xvc2Ugc3BhbiB7XHJcblx0XHRwb3NpdGlvbjogcmVsYXRpdmU7XHJcblx0XHR0b3A6IC0xcHg7XHJcblx0fVxyXG5cdC5tb2RhbC1uZXdzbGV0dGVyIC5jbG9zZTpob3ZlciB7XHJcblx0XHRvcGFjaXR5OiAwLjg7XHJcblx0fVxyXG5cdC5tb2RhbC1uZXdzbGV0dGVyIC5pY29uLWJveCB7XHJcblx0XHRjb2xvcjogIzE5YWE4ZDtcdFx0XHJcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0XHR6LWluZGV4OiA5O1xyXG5cdFx0dGV4dC1hbGlnbjogY2VudGVyO1xyXG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMzBweDtcclxuXHR9XHJcblx0Lm1vZGFsLW5ld3NsZXR0ZXIgLmljb24tYm94IGkge1xyXG5cdFx0Zm9udC1zaXplOiAxMTBweDtcclxuXHR9XHJcblx0Lm1vZGFsLW5ld3NsZXR0ZXIgLmZvcm0tY29udHJvbCwgLm1vZGFsLW5ld3NsZXR0ZXIgLmJ0biB7XHJcblx0XHRtaW4taGVpZ2h0OiA0NnB4O1xyXG5cdFx0Ym9yZGVyLXJhZGl1czogM3B4OyBcclxuXHR9XHJcblx0Lm1vZGFsLW5ld3NsZXR0ZXIgLmZvcm0tY29udHJvbCB7XHJcblx0XHRib3gtc2hhZG93OiBub25lO1xyXG5cdFx0Ym9yZGVyLWNvbG9yOiAjZGJkYmRiO1xyXG5cdH1cclxuXHQubW9kYWwtbmV3c2xldHRlciAuZm9ybS1jb250cm9sOmZvY3VzIHtcclxuXHRcdGJvcmRlci1jb2xvcjogIzE5YWE4ZDtcclxuXHRcdGJveC1zaGFkb3c6IDAgMCA4cHggIzE5YWE4ZFxyXG5cdH1cclxuICAgIC5tb2RhbC1uZXdzbGV0dGVyIC5idG4ge1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHRcdGJhY2tncm91bmQ6ICMxOWFhOGQ7XHJcblx0XHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblx0XHR0cmFuc2l0aW9uOiBhbGwgMC40cztcclxuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xyXG5cdFx0cGFkZGluZzogNnB4IDIwcHg7XHJcblx0XHRtaW4td2lkdGg6IDE1MHB4O1xyXG4gICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgIH1cclxuXHQubW9kYWwtbmV3c2xldHRlciAuYnRuOmhvdmVyLCAubW9kYWwtbmV3c2xldHRlciAuYnRuOmZvY3VzIHtcclxuXHRcdGJhY2tncm91bmQ6ICMxOWFhOGQ7XHJcblx0XHRvdXRsaW5lOiBub25lO1xyXG5cdH1cclxuXHQubW9kYWwtbmV3c2xldHRlciAuaW5wdXQtZ3JvdXAge1xyXG5cdFx0bWFyZ2luOiAzMHB4IDAgMTVweDtcclxuXHR9XHJcblx0LmhpbnQtdGV4dCB7XHJcblx0XHRtYXJnaW46IDEwMHB4IGF1dG87XHJcblx0XHR0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gICJdfQ== */"

/***/ }),

/***/ "./src/app/index/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/index/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../services/index.service */ "./src/app/index/services/index.service.ts");






var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, authService, routerNavigate, sendservice, activatedRoute) {
        this.fb = fb;
        this.authService = authService;
        this.routerNavigate = routerNavigate;
        this.sendservice = sendservice;
        this.activatedRoute = activatedRoute;
        this.agepostCodeFlag = true;
        this.loginTemplate = false;
        this.elgible = true;
        this.requestobj = [];
        this.ethnic = {};
        this.some = {};
        this.test = false;
    }
    LoginComponent.prototype.LoginTemplate = function () {
        this.agepostCodeFlag = false;
        this.loginTemplate = true;
    };
    LoginComponent.prototype.homePage = function () {
        this.agepostCodeFlag = true;
        this.loginTemplate = false;
    };
    LoginComponent.prototype.LoginAction = function (formData) {
        if (this.authService.loginAction(formData)) {
            this.routerNavigate.navigate(['dashboard']);
        }
    };
    LoginComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.login-content [data-toggle="flip"]').click(function () {
                $('.login-box').toggleClass('flipped');
                return false;
            });
            $("#go").click(function () {
                var x = $(".age").val();
                if (x > 18) {
                    this.routerNavigate.naviagateByUrl(['/personsdetails']);
                    $(".eligible").hide();
                }
                else {
                    $(".eligible").show();
                }
            });
            $("#details").click(function () {
                $("#about_section").hide();
                $("#age_section").show();
            });
        });
        this.OBSLoginForm = this.fb.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    LoginComponent.prototype.send = function (formData) {
        //this.sendservice.send(this.user.value);
        var key = formData.age;
        sessionStorage.setItem('age', key);
        this.sendservice.logindata = this.user.value;
        //this.routerNavigate.navigate(['personsdetails'])
    };
    LoginComponent.prototype.pass = function (age) {
        if (this.age > 18) {
            this.routerNavigate.navigate(['/personsdetails']);
            this.sendservice.logindata = age;
        }
        else {
            this.test = true;
        }
    };
    LoginComponent.prototype.getEthenicDetails = function () {
        var _this = this;
        this.sendservice.getethnic().subscribe(function (data) {
            _this.ethenicData = data.resultData;
        });
    };
    LoginComponent.prototype.viewResult = function () {
        this.routerNavigate.navigate(['viewresults']);
    };
    LoginComponent.prototype.LoginPage = function () {
        this.routerNavigate.navigate(['loginpageaction']);
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: "app-login",
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/index/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/index/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_index_service__WEBPACK_IMPORTED_MODULE_5__["IndexService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/index/more-detail/more-detail.component.html":
/*!**************************************************************!*\
  !*** ./src/app/index/more-detail/more-detail.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper Start -->\n<!--header area start-->\n<header class=\"header_area beader_bg3\">\n  <!--header top start-->\n  <div class=\"header_top header_top_three\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"header_top_inner\">\n            <div class=\"top_left\">\n              <ul>\n                <li class=\"currency\"><a href=\"#\">support@medintu.co.uk</a> </li>\n                <li><a href=\"tel:+123123321345\">tel: +44-03300587379</a></li>\n              </ul>\n            </div>\n            <div class=\"top_right\">\n\n                <!---\t<form class=\"inner_form\" [formGroup]=\"OBSLoginForm\" (ngSubmit)=\"LoginAction(OBSLoginForm.value)\">\n              \n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"required\"  formControlName=\"username\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\"  formControlName=\"password\">\n                    </div>\n                    <div class=\"form-group btn-container\">\n                        <button class=\"btn btn-primary btn-block\" [disabled]=\"OBSLoginForm.invalid\">SIGN IN</button>\n                    </div>  \n                 </form>-->\n  \n                 <button class=\"btn btn-info btn-sm\"  style=\"margin-top: 8px;width: auto;\" (click)=\"viewResult()\">Track Results</button>&nbsp;&nbsp;\n                 <button class=\"btn btn-success btn-sm\"  style=\"margin-top: 8px\" (click)=\"LoginPage()\">Login</button>\n                 \n                 </div>\n                 \n            \n            <div class=\"logo logo_three\">\n              <a href=\"index.html\"><img src=\"assets/img/img/logos2.png\" alt=\"\"></a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!--header top start-->\n  <!--header middel start-->\n  <div class=\"header_middle\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-lg-9 offset-lg-3 offset-md-0\">\n          <div class=\"main_menu menu_three header_position\">\n            <nav>\n              <ul>\n\n                <li><a href=\"#\">home</a></li>\n                <li><a href=\"#\">Aboutus</a></li>\n                <li><a href=\"#\">Business</a></li>\n                <li><a href=\"#\">Individuals</a></li>\n                <li class=\"pull-right google2\">\n                  <div id=\"google_translate_element\"></div>\n                </li>\n              </ul>\n\n            </nav>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--header middel end-->\n\n  <!--popup start-->\n \n    <!-- Modal -->\n  \n\n\n  <!--popup end-->\n\n</header>\n<!--header area end-->\n\n<!--Offcanvas menu area start-->\n\n<div class=\"off_canvars_overlay\">\n\n</div>\n<div class=\"Offcanvas_menu Offcanvas_three\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"canvas_open\">\n          <span>MENU</span>\n          <a href=\"javascript:void(0)\"><i class=\"ion-navicon\"></i></a>\n        </div>\n        <div class=\"Offcanvas_menu_wrapper\">\n          <div class=\"canvas_close\">\n            <a href=\"javascript:void(0)\"><i class=\"ion-android-close\"></i></a>\n          </div>\n\n          <div id=\"menu\" class=\"text-left \">\n            <ul class=\"offcanvas_main_menu\">\n              <li class=\"menu-item-has-children active\">\n                <a href=\"#\">Home</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">About</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">Gallery</a>\n              </li>\n\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">contact</a>\n              </li>\n\n            </ul>\n          </div>\n\n          <div class=\"Offcanvas_footer\">\n            <span><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> info@yourdomain.com</a></span>\n            <ul>\n              <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n              <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n              <li class=\"pinterest\"><a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a></li>\n              <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n              <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Offcanvas menu area end-->\n\n\n\n<!---more start-->\n\n\n<!-- A few questions start -->\n\n\n<div class=\"about_section more_detail\">\n\n  <div class=\"container\">\n\n    <div class=\"panel\">\n\n      <div class=\"panel_heading\">\n\n        <h3>A few quick ask questions</h3>\n\n      </div>\n\n       <div class=\"panel_body\">\n\n        <div class=\"row\">\n         \n          <div class=\"col-lg-12 col-md-12\">\n\n           <form  [formGroup]=\"users\" (ngSubmit)=\"datessend(users.value)\">\n\n            <div class=\"text2\">\n              <p>When did you last ahve an HIV test?</p>\n              <label>\n                <input type=\"radio\" name=\"hiv\" value=\"never tested\" formControlName=\"hiv\"  />\n                <span>Never tested</span>\n              </label>\n              <label>\n                <input type=\"radio\" name=\"hiv\" value=\"Over a year ago\" formControlName=\"hiv\"  />\n                <span>Over a year ago</span>\n              </label>\n              <label>\n                <input type=\"radio\" name=\"hiv\" value=\"with in last year\" formControlName=\"hiv\"  />\n                <span>with in last year</span>\n              </label>\n            </div>\n\n\n            <div class=\"text2\">\n              <p>Have you had unprotected sex with in the last 12 months?</p>\n              <label>\n                <input type=\"radio\" name=\"protect\" value=\"No\" formControlName=\"protect\" />\n                <span>No</span>\n              </label>\n              <label>\n                <input type=\"radio\"  name=\"protect\" value=\"Yes with i partner\" formControlName=\"protect\" />\n                <span>Yes with i partner</span>\n              </label>\n              <label>\n                <input type=\"radio\"  name=\"protect\" value=\"yes with 2-5 partners\" formControlName=\"protect\" />\n                <span>yes with 2-5 partners</span>\n              </label>\n              <label>\n                <input type=\"radio\"  name=\"protect\" value=\"yes with 6-12 partners\" formControlName=\"protect\" />\n                <span>yes with 6-12 partners</span>\n              </label>\n              <label>\n                <input type=\"radio\"  name=\"protect\" value=\"yes more than 12 partners\" formControlName=\"protect\" />\n                <span>yes more than 12 partners</span>\n              </label>\n            </div>\n\n\n            <div class=\"text2\">\n              <p>How many partners have you had sex with in the last 12 moths?</p>\n              <label>\n                <input type=\"radio\" name=\"protect2\" value=\"No sexual problem\" formControlName=\"protect2\"  />\n                <span>No sexual problem</span>\n              </label>\n              <label>\n                <input type=\"radio\" name=\"protect2\" value=\"just 1 partner\" formControlName=\"protect2\" />\n                <span>just 1 partner</span>\n              </label>\n              <label>\n                <input type=\"radio\" name=\"protect2\" value=\"2-5 partners\" formControlName=\"protect2\" />\n                <span>2-5 partners</span>\n              </label>\n              <label>\n                <input type=\"radio\" name=\"protect2\" value=\"6-12 partners\" formControlName=\"protect2\" />\n                <span>6-12 partners</span>\n              </label>\n              <label>\n                <input type=\"radio\" name=\"protect2\" value=\"more than 12 partners\" formControlName=\"protect2\"  />\n                <span>more than 12 partners</span>\n              </label>\n            </div>\n\n\n\n            <div class=\"text2\">\n              <p>How oftner have you had sex under in influence of alchol or recreational drugs?</p>\n              <label>\n                <input type=\"radio\" name=\"protect3\" value=\"Never\" formControlName=\"protect3\"  />\n                <span>Never</span>\n              </label>\n              <label>\n                <input type=\"radio\" name=\"protect3\" value=\"Sometime\" formControlName=\"protect3\"  />\n                <span>Sometime</span>\n              </label>\n              <label>\n                <input type=\"radio\" name=\"protect3\" value=\"Usually\" formControlName=\"protect3\"  />\n                <span>Usually</span>\n              </label>\n              <label>\n                <input type=\"radio\" name=\"protect3\" value=\"always\" formControlName=\"protect3\"  />\n                <span>always</span>\n              </label>\n            </div>\n\n          \n\n            <div class=\"buttons button_5\">\n\n                <button class=\"btn btn-success pull-left question_1\"  (click)=\"first()\" ><i class=\"fa fa-arrow-circle-left\"></i>Back</button>\n                <button class=\"btn pull-right question_2\" type=\"submit\">Next <i class=\"fa fa-arrow-circle-right\"></i></button>\n\n            </div>\n\n            \n            </form>\n\n          </div>\n        </div>\n\n      </div>\n    </div>\n\n   \n\n  </div>\n</div>\n\n<!-- A few questions end -->\n\n\n\n\n<!---more end-->\n\n<!--footer area start-->\n<footer class=\"footer_widgets\">\n  <div class=\"container\">\n    <div class=\"footer_top\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 col-sm-7\">\n          <div class=\"widgets_container contact_us\">\n            <h3>Contacts us</h3>\n            <div class=\"footer_contact\">\n              <ul>\n                <li><i class=\"fa fa-home\"></i><span>Addresss:</span> Lorem Ipsum is simply dummy text of the printing\n                  and typesetting industry. Lorem Ipsum</li>\n                <li><i class=\"fa fa-phone\"></i><span>Phone:</span> (+91) 866-540-3229</li>\n                <li><i class=\"fa fa-envelope-square\"></i><span>Email:</span> info@Lorem Ipsum .com</li>\n              </ul>\n            </div>\n           \n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-6 col-sm-5\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>Information</h3>\n\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-4 col-sm-4\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>My Account</h3>\n            <div class=\"footer_menu\">\n              <div class=\"footer_contact\">\n                <ul>\n                  <li> Proudly operated from Yorkshire by Preventx and MESMAC as the Nationally commissioned provider of\n                    HIV home-sampling screening. </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n  <div class=\"footer_bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n          <div class=\"copyright_area text-center\">\n            <p>Copyright &copy; 2019 <a href=\"#\">Medintu</a> All Right Reserved.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--footer area end-->"

/***/ }),

/***/ "./src/app/index/more-detail/more-detail.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/index/more-detail/more-detail.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L21vcmUtZGV0YWlsL21vcmUtZGV0YWlsLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/index/more-detail/more-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/index/more-detail/more-detail.component.ts ***!
  \************************************************************/
/*! exports provided: MoreDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoreDetailComponent", function() { return MoreDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/index.service */ "./src/app/index/services/index.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");






var MoreDetailComponent = /** @class */ (function () {
    function MoreDetailComponent(router, fb, sends, authService) {
        this.router = router;
        this.fb = fb;
        this.sends = sends;
        this.authService = authService;
    }
    MoreDetailComponent.prototype.ngOnInit = function () {
        this.users = this.fb.group({
            hiv: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            protect: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            protect2: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            protect3: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.OBSLoginForm = this.fb.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    MoreDetailComponent.prototype.LoginAction = function (formData) {
        if (this.authService.loginAction(formData)) {
            this.router.navigate(['dashboard']);
        }
    };
    MoreDetailComponent.prototype.datessend = function (formdata) {
        var requestobj = {};
        requestobj = this.sends.seconddata;
        requestobj['quetionary1'] = { '"When did you last ahve an HIV test?"': this.users.value.hiv };
        requestobj['quetionary2'] = { '"Have you had unprotected sex with in the last 12 months?"': this.users.value.protect };
        requestobj['quetionary3'] = { '"How many partners have you had sex with in the last 12 moths?"': this.users.value.protect2 };
        requestobj['quetionary4'] = { '"How oftner have you had sex under in influence of alchol or recreational drugs?"': this.users.value.protect3 };
        this.sends.seconddata = requestobj;
        this.router.navigate(['address']);
        console.log("this is more details" + this.sends.seconddata);
    };
    MoreDetailComponent.prototype.first = function () {
        this.router.navigate(['checkpostal']);
    };
    MoreDetailComponent.prototype.second = function () {
        this.router.navigate(['address']);
    };
    MoreDetailComponent.prototype.viewResult = function () {
        this.router.navigate(['viewresults']);
    };
    MoreDetailComponent.prototype.LoginPage = function () {
        this.router.navigate(['loginpageaction']);
    };
    MoreDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-more-detail',
            template: __webpack_require__(/*! ./more-detail.component.html */ "./src/app/index/more-detail/more-detail.component.html"),
            styles: [__webpack_require__(/*! ./more-detail.component.scss */ "./src/app/index/more-detail/more-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_index_service__WEBPACK_IMPORTED_MODULE_3__["IndexService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]])
    ], MoreDetailComponent);
    return MoreDetailComponent;
}());



/***/ }),

/***/ "./src/app/index/pagenotfound/pagenotfound.component.html":
/*!****************************************************************!*\
  !*** ./src/app/index/pagenotfound/pagenotfound.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper Start -->\n<!--header area start-->\n<header class=\"header_area beader_bg3\">\n  <!--header top start-->\n  <div class=\"header_top header_top_three\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"header_top_inner\">\n            <div class=\"top_left\">\n              <ul>\n                <li class=\"currency\"><a href=\"#\">support@medintu.co.uk</a></li>\n                <li><a href=\"tel:+123123321345\">tel: +44-03300587379</a></li>\n               </ul>\n            </div>\n            <div class=\"top_right\">\n\n                <!---\t<form class=\"inner_form\" [formGroup]=\"OBSLoginForm\" (ngSubmit)=\"LoginAction(OBSLoginForm.value)\">\n              \n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"required\"  formControlName=\"username\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\"  formControlName=\"password\">\n                    </div>\n                    <div class=\"form-group btn-container\">\n                        <button class=\"btn btn-primary btn-block\" [disabled]=\"OBSLoginForm.invalid\">SIGN IN</button>\n                    </div>  \n                 </form>-->\n  \n                 <button class=\"btn btn-info btn-sm\"  style=\"margin-top: 8px;width: auto;\" (click)=\"viewResult()\">Track Results</button>&nbsp;&nbsp;\n                 <button class=\"btn btn-success btn-sm\"  style=\"margin-top: 8px\" (click)=\"LoginPage()\">Login</button>\n                 \n                 </div>\n            \n            <div class=\"logo logo_three\">\n              <a href=\"index.html\"><img src=\"assets/img/img/logos2.png\" alt=\"\"></a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!--header top start-->\n  <!--header middel start-->\n  <div class=\"header_middle\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-lg-9 offset-lg-3 offset-md-0\">\n          <div class=\"main_menu menu_three header_position\">\n            <nav>\n              <ul>\n\n                <li><a href=\"#\">home</a></li>\n                <li><a href=\"#\">Aboutus</a></li>\n                <li><a href=\"#\">Business</a></li>\n                <li><a href=\"#\">Individuals</a></li>\n                <li class=\"pull-right google2\">\n                  <div id=\"google_translate_element\"></div>\n                </li>\n              </ul>\n\n            </nav>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--header middel end-->\n\n  <!--popup start-->\n \n    <!-- Modal -->\n  \n\n\n  <!--popup end-->\n\n</header>\n<!--header area end-->\n\n<!--Offcanvas menu area start-->\n\n<div class=\"off_canvars_overlay\">\n\n</div>\n<div class=\"Offcanvas_menu Offcanvas_three\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"canvas_open\">\n          <span>MENU</span>\n          <a href=\"javascript:void(0)\"><i class=\"ion-navicon\"></i></a>\n        </div>\n        <div class=\"Offcanvas_menu_wrapper\">\n          <div class=\"canvas_close\">\n            <a href=\"javascript:void(0)\"><i class=\"ion-android-close\"></i></a>\n          </div>\n\n          <div id=\"menu\" class=\"text-left \">\n            <ul class=\"offcanvas_main_menu\">\n              <li class=\"menu-item-has-children active\">\n                <a href=\"#\">Home</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">About</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">Gallery</a>\n              </li>\n\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">contact</a>\n              </li>\n\n            </ul>\n          </div>\n\n          <div class=\"Offcanvas_footer\">\n            <span><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> info@yourdomain.com</a></span>\n            <ul>\n              <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n              <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n              <li class=\"pinterest\"><a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a></li>\n              <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n              <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Offcanvas menu area end-->\n\n\n\n\n <!--about section area -->\n <div class=\"about_section mt-60\">\n    <div class=\"container\">  \n      <div class=\"row\">\n         <div class=\"col-lg-12 col-md-12\">\n              <div class=\"about_content text-center error_data1\">\n    \n                  <h1>404</h1>\n                  <p>Page not found component</p>\n                  \n              </div>\n          </div>\n     </div>\n</div>     \n</div>\n<!--about section end-->\n\n\n\n<!--footer area start-->\n<footer class=\"footer_widgets\">\n  <div class=\"container\">\n    <div class=\"footer_top\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 col-sm-7\">\n          <div class=\"widgets_container contact_us\">\n            <h3>Contacts us</h3>\n            <div class=\"footer_contact\">\n              <ul>\n                <li><i class=\"fa fa-home\"></i><span>Addresss:</span> Lorem Ipsum is simply dummy text of the printing\n                  and typesetting industry. Lorem Ipsum</li>\n                <li><i class=\"fa fa-phone\"></i><span>Phone:</span> (+91) 866-540-3229</li>\n                <li><i class=\"fa fa-envelope-square\"></i><span>Email:</span> info@Lorem Ipsum .com</li>\n              </ul>\n            </div>\n           \n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-6 col-sm-5\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>Information</h3>\n\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-4 col-sm-4\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>My Account</h3>\n            <div class=\"footer_menu\">\n              <div class=\"footer_contact\">\n                <ul>\n                  <li> Proudly operated from Yorkshire by Preventx and MESMAC as the Nationally commissioned provider of\n                    HIV home-sampling screening. </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n  <div class=\"footer_bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n          <div class=\"copyright_area text-center\">\n            <p>Copyright &copy; 2019 <a href=\"#\">Medintu</a> All Right Reserved.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/index/pagenotfound/pagenotfound.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/index/pagenotfound/pagenotfound.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/index/pagenotfound/pagenotfound.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/index/pagenotfound/pagenotfound.component.ts ***!
  \**************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent(router) {
        this.router = router;
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent.prototype.viewResult = function () {
        this.router.navigate(['viewresults']);
    };
    PagenotfoundComponent.prototype.LoginPage = function () {
        this.router.navigate(['loginpageaction']);
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/index/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.scss */ "./src/app/index/pagenotfound/pagenotfound.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/index/person-details/person-details.component.html":
/*!********************************************************************!*\
  !*** ./src/app/index/person-details/person-details.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper Start -->\n<!--header area start-->\n<header class=\"header_area beader_bg3\">\n  <!--header top start-->\n  <div class=\"header_top header_top_three\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"header_top_inner\">\n            <div class=\"top_left\">\n              <ul>\n                <li class=\"currency\"><a href=\"#\">support@medintu.co.uk</a></li>\n                <li><a href=\"tel:+123123321345\">tel: +44-03300587379</a></li>\n              </ul>\n            </div>\n            <div class=\"top_right\">\n\n              <!---\t<form class=\"inner_form\" [formGroup]=\"OBSLoginForm\" (ngSubmit)=\"LoginAction(OBSLoginForm.value)\">\n              \n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"required\"  formControlName=\"username\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\"  formControlName=\"password\">\n                    </div>\n                    <div class=\"form-group btn-container\">\n                        <button class=\"btn btn-primary btn-block\" [disabled]=\"OBSLoginForm.invalid\">SIGN IN</button>\n                    </div>  \n                 </form>-->\n\n              <button class=\"btn btn-info btn-sm\" style=\"margin-top: 8px;width: auto;\" (click)=\"viewResult()\">Track\n                Results</button>&nbsp;&nbsp;\n              <button class=\"btn btn-success btn-sm\" style=\"margin-top: 8px\" (click)=\"LoginPage()\">Login</button>\n\n            </div>\n\n            <div class=\"logo logo_three\">\n              <a href=\"index.html\"><img src=\"assets/img/img/logos2.png\" alt=\"\"></a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!--header top start-->\n  <!--header middel start-->\n  <div class=\"header_middle\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-lg-9 offset-lg-3 offset-md-0\">\n          <div class=\"main_menu menu_three header_position\">\n            <nav>\n              <ul>\n\n                <li><a href=\"#\">home</a></li>\n                <li><a href=\"#\">Aboutus</a></li>\n                <li><a href=\"#\">Business</a></li>\n                <li><a href=\"#\">Individuals</a></li>\n                <li class=\"pull-right google2\">\n                  <div id=\"google_translate_element\"></div>\n                </li>\n              </ul>\n\n            </nav>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--header middel end-->\n\n  <!--popup start-->\n\n  <!-- Modal -->\n\n\n\n  <!--popup end-->\n\n</header>\n<!--header area end-->\n\n<!--Offcanvas menu area start-->\n\n<div class=\"off_canvars_overlay\">\n\n</div>\n<div class=\"Offcanvas_menu Offcanvas_three\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"canvas_open\">\n          <span>MENU</span>\n          <a href=\"javascript:void(0)\"><i class=\"ion-navicon\"></i></a>\n        </div>\n        <div class=\"Offcanvas_menu_wrapper\">\n          <div class=\"canvas_close\">\n            <a href=\"javascript:void(0)\"><i class=\"ion-android-close\"></i></a>\n          </div>\n\n          <div id=\"menu\" class=\"text-left \">\n            <ul class=\"offcanvas_main_menu\">\n              <li class=\"menu-item-has-children active\">\n                <a href=\"#\">Home</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">About</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">Gallery</a>\n              </li>\n\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">contact</a>\n              </li>\n\n            </ul>\n          </div>\n\n          <div class=\"Offcanvas_footer\">\n            <span><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> info@yourdomain.com</a></span>\n            <ul>\n              <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n              <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n              <li class=\"pinterest\"><a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a></li>\n              <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n              <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Offcanvas menu area end-->\n\n\n<!--about section area -->\n<div class=\"about_section mt-60\">\n  <div class=\"container\">\n    <div class=\"row\">\n\n\n\n        <div class=\"col-lg-8 col-md-8\">\n\n            <div class=\"about_content text-left\">\n              <h1>Around 13% of the estimated 100,000 people living with HIV,Syphilis in the UK remain undiagnosed.</h1>\n              <p>Free self-sampling HIV, Syphilis test kits are available in many areas of the country — enter your details\n                below to\n                check your eligibility:</p>\n            </div>\n    \n          </div>\n\n          \n\n\n      <div class=\"col-lg-4 col-md-4\">\n\n\n        <!----more details start-->\n\n        <div class=\"account_form form_4\">\n\n          <div class=\"panel\">\n\n            <div class=\"panel_heading\">\n\n              <h5 class=\"text-center\">Please Enter Details</h5>\n\n            </div>\n\n            <div class=\"panel_body\">\n\n              <div class=\"row\">\n\n                <div class=\"col-lg-12 col-md-12\">\n\n                  <form class=\"inner_1\">         \n\n                    <p>\n                        <label>Postal code is <span>*</span></label>\n      \n                        <input type=\"text\" [(ngModel)]=\"postalcode\" name=\"postalcode\" class=\"col-md-7\" required #postal=\"ngModel\">\n                            <span *ngIf=\"postal.invalid && (postal.dirty || postal.touched)\" class=\"error_form\">\n                              <span *ngIf=\"postal.errors.required\" class=\"error_form\">\n                                required this field\n                              </span>\n                         </span>\n                    </p>\n\n                    <p>\n                      <label>I am a <span>*</span></label>\n                      <select [(ngModel)]=\"gender\" name=\"gender\" required #persons=\"ngModel\">\n                        <option value=\"Man\">Man</option>\n                        <option value=\"Female\">Woman</option>\n                        <option value=\"TransMan\">TransMan</option>\n                        <option value=\"TransWoman\">TransWoman</option>\n                      </select>\n                      <span *ngIf=\"persons.invalid && (persons.dirty || persons.touched)\" class=\"error_form\">\n                        <span *ngIf=\"persons.errors.required\" class=\"error_form\">\n                          required this field\n                        </span>\n                      </span>\n\n                    </p>\n\n                    <p>\n                      <label>I have sex with <span>*</span></label>\n\n                      <select [(ngModel)]=\"oppositeGender\" name=\"oppositeGender\" required #people=\"ngModel\">\n                        <option value=\"Men\">Men</option>\n                        <option value=\"Women\">Woman</option>\n                        <option value=\"Men and Women\">Men and Women</option>\n                      </select>\n                      <span *ngIf=\"people.invalid && (people.dirty || people.touched)\" class=\"error_form\">\n                        <span *ngIf=\"people.errors.required\" class=\"error_form\">\n                          required this field\n                        </span>\n                      </span>\n                    </p>\n\n                    <p>\n                      <label>My ethnic group is <span>*</span></label>\n\n                      <select [(ngModel)]=\"selectedEthenicName\" name=\"selectedEthenicName\" class=\"col-md-7\" required #ethinic=\"ngModel\">\n                        <option *ngFor=\"let c of ethenicData\" [ngValue]=\"c\">{{c.ethnicName}}</option>\n                      </select>\n                      <span *ngIf=\"ethinic.invalid && (ethinic.dirty || ethinic.touched)\" class=\"error_form\">\n                        <span *ngIf=\"ethinic.errors.required\" class=\"error_form\">\n                          required this field\n                        </span>\n                      </span>\n\n                    </p>\n\n                    <span class=\"text text-danger\" *ngIf=\"errorvalue\">Sorry - we're not able to offer postal tests under this area, but other services are available. </span>\n\n                    <button class=\"btn btn-info btn_another6\" (click)=\"createGenderEthenic(gender,oppositeGender,selectedEthenicName,dates,postalcode)\">SUBMIT</button>\n\n                    <button class=\"btn btn-info btn_another6\" [routerLink] = \"['/login']\"><i class=\"fa fa-arrow-left fa-2x\"></i> Chek Eligibility</button>\n\n\n                      {{user.invalid}}\n \n                  </form>\n\n\n                </div>\n              </div>\n            </div>\n          </div>\n\n         \n\n        </div>\n\n        <!--more details end-->\n\n\n      </div>\n    </div>\n  </div>\n</div>\n<!--about section end-->\n\n\n\n<!--footer area start-->\n<footer class=\"footer_widgets\">\n  <div class=\"container\">\n    <div class=\"footer_top\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 col-sm-7\">\n          <div class=\"widgets_container contact_us\">\n            <h3>Contacts us</h3>\n            <div class=\"footer_contact\">\n              <ul>\n                <li><i class=\"fa fa-home\"></i><span>Addresss:</span> Lorem Ipsum is simply dummy text of the printing\n                  and typesetting industry. Lorem Ipsum</li>\n                <li><i class=\"fa fa-phone\"></i><span>Phone:</span> (+91) 866-540-3229</li>\n                <li><i class=\"fa fa-envelope-square\"></i><span>Email:</span> info@Lorem Ipsum .com</li>\n              </ul>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-6 col-sm-5\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>Information</h3>\n\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-4 col-sm-4\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>My Account</h3>\n            <div class=\"footer_menu\">\n              <div class=\"footer_contact\">\n                <ul>\n                  <li> Proudly operated from Yorkshire by Preventx and MESMAC as the Nationally commissioned provider of\n                    HIV home-sampling screening. </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n  <div class=\"footer_bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n          <div class=\"copyright_area text-center\">\n            <p>Copyright &copy; 2019 <a href=\"#\">Medintu</a> All Right Reserved.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--footer area end-->"

/***/ }),

/***/ "./src/app/index/person-details/person-details.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/index/person-details/person-details.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L3BlcnNvbi1kZXRhaWxzL3BlcnNvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/index/person-details/person-details.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/index/person-details/person-details.component.ts ***!
  \******************************************************************/
/*! exports provided: PersonDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonDetailsComponent", function() { return PersonDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../services/index.service */ "./src/app/index/services/index.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");







var PersonDetailsComponent = /** @class */ (function () {
    function PersonDetailsComponent(routerNavigate, fb, sendservice, http, authService, activatedRoute) {
        this.routerNavigate = routerNavigate;
        this.fb = fb;
        this.sendservice = sendservice;
        this.http = http;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.submitted = false;
        this.ethnic = {};
        this.some = {};
        this.requestobj = [];
        this.errorvalue = false;
        this.id = 1;
        this.getEthenicDetails();
    }
    PersonDetailsComponent.prototype.ngOnInit = function () {
        this.OBSLoginForm = this.fb.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        var params = this.activatedRoute.snapshot.params;
        if (params.id == 1) {
            this.gender = this.sendservice.persondata['gender'];
            this.oppositeGender = this.sendservice.persondata['oppositeGender'];
        }
    };
    PersonDetailsComponent.prototype.LoginActions = function (formData) {
        if (this.authService.loginAction(formData)) {
            this.routerNavigate.navigate(['dashboard']);
        }
    };
    PersonDetailsComponent.prototype.LoginAction = function (formdata) {
        this.submitted = true;
        // this.sendservice.pass(formdata);
        this.sendservice.persondata = formdata;
        var requestobj = formdata;
        requestobj.age = this.sendservice.logindata['age'];
        requestobj.postCode = this.sendservice.logindata['postCode'];
        this.sendservice.sendone(requestobj);
    };
    PersonDetailsComponent.prototype.createGenderEthenic = function (gender, oppositeGender, selectedEthenicName, dates, postalcode) {
        var id = selectedEthenicName.id;
        // this.sendservice.ethnicGroupId=id;
        sessionStorage.setItem('ethenicGroupId', id);
        var obj = { gender: gender, oppositeGender: oppositeGender, ethnicGroupId: id, postCode: postalcode };
        this.sendservice.persondata['selectedEthenicName'] = selectedEthenicName;
        this.requestobj = obj;
        this.requestobj['age'] = this.sendservice.logindata;
        this.sendservice.persondetails = this.requestobj;
        console.log(this.sendservice.persondetails);
        this.sendservice.sendone(this.requestobj);
        //this.routerNavigate.navigate(['test']);
        this.errorvalue = this.sendservice.testerror;
    };
    PersonDetailsComponent.prototype.send = function () {
        this.routerNavigate.navigate(['login']);
    };
    PersonDetailsComponent.prototype.getEthenicDetails = function () {
        var _this = this;
        this.sendservice.getethnic().subscribe(function (data) {
            _this.ethenicData = data.resultData;
        });
    };
    PersonDetailsComponent.prototype.viewResult = function () {
        this.routerNavigate.navigate(['viewresults']);
    };
    PersonDetailsComponent.prototype.LoginPage = function () {
        this.routerNavigate.navigate(['loginpageaction']);
    };
    PersonDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-person-details',
            template: __webpack_require__(/*! ./person-details.component.html */ "./src/app/index/person-details/person-details.component.html"),
            styles: [__webpack_require__(/*! ./person-details.component.scss */ "./src/app/index/person-details/person-details.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_index_service__WEBPACK_IMPORTED_MODULE_1__["IndexService"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PersonDetailsComponent);
    return PersonDetailsComponent;
}());



/***/ }),

/***/ "./src/app/index/postcodeerror/postcodeerror.component.html":
/*!******************************************************************!*\
  !*** ./src/app/index/postcodeerror/postcodeerror.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper Start -->\n<!--header area start-->\n<header class=\"header_area beader_bg3\">\n  <!--header top start-->\n  <div class=\"header_top header_top_three\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"header_top_inner\">\n            <div class=\"top_left\">\n              <ul>\n                <li class=\"currency\"><a href=\"#\">support@medintu.co.uk</a> </li>\n                <li><a href=\"tel:+123123321345\">tel: +44-03300587379</a></li>\n              </ul>\n            </div>\n            <div class=\"top_right\">\n\n                <!---\t<form class=\"inner_form\" [formGroup]=\"OBSLoginForm\" (ngSubmit)=\"LoginAction(OBSLoginForm.value)\">\n              \n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"required\"  formControlName=\"username\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\"  formControlName=\"password\">\n                    </div>\n                    <div class=\"form-group btn-container\">\n                        <button class=\"btn btn-primary btn-block\" [disabled]=\"OBSLoginForm.invalid\">SIGN IN</button>\n                    </div>  \n                 </form>-->\n  \n                 <button class=\"btn btn-info btn-sm\"  style=\"margin-top: 8px;width: auto;\" (click)=\"viewResult()\">Track Results</button>&nbsp;&nbsp;\n                 <button class=\"btn btn-success btn-sm\"  style=\"margin-top: 8px\" (click)=\"LoginPage()\">Login</button>\n                 \n              </div>\n            \n            <div class=\"logo logo_three\">\n              <a href=\"index.html\"><img src=\"assets/img/img/logos2.png\" alt=\"\"></a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!--header top start-->\n  <!--header middel start-->\n  <div class=\"header_middle\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-lg-9 offset-lg-3 offset-md-0\">\n          <div class=\"main_menu menu_three header_position\">\n            <nav>\n              <ul>\n\n                <li><a href=\"#\">home</a></li>\n                <li><a href=\"#\">Aboutus</a></li>\n                <li><a href=\"#\">Business</a></li>\n                <li><a href=\"#\">Individuals</a></li>\n                <li class=\"pull-right google2\">\n                  <div id=\"google_translate_element\"></div>\n                </li>\n              </ul>\n\n            </nav>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--header middel end-->\n\n  <!--popup start-->\n \n    <!-- Modal -->\n  \n\n\n  <!--popup end-->\n\n</header>\n<!--header area end-->\n\n<!--Offcanvas menu area start-->\n\n<div class=\"off_canvars_overlay\">\n\n</div>\n<div class=\"Offcanvas_menu Offcanvas_three\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"canvas_open\">\n          <span>MENU</span>\n          <a href=\"javascript:void(0)\"><i class=\"ion-navicon\"></i></a>\n        </div>\n        <div class=\"Offcanvas_menu_wrapper\">\n          <div class=\"canvas_close\">\n            <a href=\"javascript:void(0)\"><i class=\"ion-android-close\"></i></a>\n          </div>\n\n          <div id=\"menu\" class=\"text-left \">\n            <ul class=\"offcanvas_main_menu\">\n              <li class=\"menu-item-has-children active\">\n                <a href=\"#\">Home</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">About</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">Gallery</a>\n              </li>\n\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">contact</a>\n              </li>\n\n            </ul>\n          </div>\n\n          <div class=\"Offcanvas_footer\">\n            <span><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> info@yourdomain.com</a></span>\n            <ul>\n              <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n              <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n              <li class=\"pinterest\"><a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a></li>\n              <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n              <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Offcanvas menu area end-->\n\n\n\n\n <!--about section area -->\n <div class=\"about_section mt-60\">\n    <div class=\"container\">  \n      <div class=\"row\">\n         <div class=\"col-lg-12 col-md-12\">\n              <div class=\"about_content text-left error_data\">\n    \n                  <h1>\"This can happen if you're postcode is part of a new build, or happens to be missing from Royal Mail's database.\"</h1>\n                 \n                   <p>We've tried to estimate your location to check if we can provide a service in your area, but we've been unable to.<br/>\n\n                  Please try again ensuring you've entered your postcode correctly, in particular with correct use of letters and numbers (letter O vs. zero 0).<br/>\n\n                  If you continue to see this message, please contact us with your address and we'll update the system.</p>\n              </div>\n          </div>\n     </div>\n</div>     \n</div>\n<!--about section end-->\n\n\n\n<!--footer area start-->\n<footer class=\"footer_widgets\">\n  <div class=\"container\">\n    <div class=\"footer_top\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 col-sm-7\">\n          <div class=\"widgets_container contact_us\">\n            <h3>Contacts us</h3>\n            <div class=\"footer_contact\">\n              <ul>\n                <li><i class=\"fa fa-home\"></i><span>Addresss:</span> Lorem Ipsum is simply dummy text of the printing\n                  and typesetting industry. Lorem Ipsum</li>\n                <li><i class=\"fa fa-phone\"></i><span>Phone:</span> (+91) 866-540-3229</li>\n                <li><i class=\"fa fa-envelope-square\"></i><span>Email:</span> info@Lorem Ipsum .com</li>\n              </ul>\n            </div>\n           \n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-6 col-sm-5\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>Information</h3>\n\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-4 col-sm-4\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>My Account</h3>\n            <div class=\"footer_menu\">\n              <div class=\"footer_contact\">\n                <ul>\n                  <li> Proudly operated from Yorkshire by Preventx and MESMAC as the Nationally commissioned provider of\n                    HIV home-sampling screening. </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n  <div class=\"footer_bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n          <div class=\"copyright_area text-center\">\n            <p>Copyright &copy; 2019 <a href=\"#\">Medintu</a> All Right Reserved.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/index/postcodeerror/postcodeerror.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/index/postcodeerror/postcodeerror.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L3Bvc3Rjb2RlZXJyb3IvcG9zdGNvZGVlcnJvci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/index/postcodeerror/postcodeerror.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/index/postcodeerror/postcodeerror.component.ts ***!
  \****************************************************************/
/*! exports provided: PostcodeerrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostcodeerrorComponent", function() { return PostcodeerrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PostcodeerrorComponent = /** @class */ (function () {
    function PostcodeerrorComponent(router) {
        this.router = router;
    }
    PostcodeerrorComponent.prototype.ngOnInit = function () {
    };
    PostcodeerrorComponent.prototype.viewResult = function () {
        this.router.navigate(['viewresults']);
    };
    PostcodeerrorComponent.prototype.LoginPage = function () {
        this.router.navigate(['loginpageaction']);
    };
    PostcodeerrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-postcodeerror',
            template: __webpack_require__(/*! ./postcodeerror.component.html */ "./src/app/index/postcodeerror/postcodeerror.component.html"),
            styles: [__webpack_require__(/*! ./postcodeerror.component.scss */ "./src/app/index/postcodeerror/postcodeerror.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], PostcodeerrorComponent);
    return PostcodeerrorComponent;
}());



/***/ }),

/***/ "./src/app/index/questions/questions.component.html":
/*!**********************************************************!*\
  !*** ./src/app/index/questions/questions.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper Start -->\n<!--header area start-->\n<header class=\"header_area beader_bg3\">\n  <!--header top start-->\n  <div class=\"header_top header_top_three\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"header_top_inner\">\n            <div class=\"top_left\">\n              <ul>\n                <li class=\"currency\"><a href=\"#\">support@medintu.co.uk</a></li>\n\n                <li><a href=\"tel:+123123321345\">tel: +44-03300587379</a></li>\n\n              </ul>\n            </div>\n            <div class=\"top_right\">\n\n                <!---\t<form class=\"inner_form\" [formGroup]=\"OBSLoginForm\" (ngSubmit)=\"LoginAction(OBSLoginForm.value)\">\n              \n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"required\"  formControlName=\"username\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\"  formControlName=\"password\">\n                    </div>\n                    <div class=\"form-group btn-container\">\n                        <button class=\"btn btn-primary btn-block\" [disabled]=\"OBSLoginForm.invalid\">SIGN IN</button>\n                    </div>  \n                 </form>-->\n  \n                 <button class=\"btn btn-info btn-sm\"  style=\"margin-top: 8px;width: auto;\" (click)=\"viewResult()\">Track Results</button>&nbsp;&nbsp;\n                 <button class=\"btn btn-success btn-sm\"  style=\"margin-top: 8px\" (click)=\"LoginPage()\">Login</button>\n                 \n               </div>\n  \n           \n            <div class=\"logo logo_three\">\n              <a href=\"index.html\"><img src=\"assets/img/img/logos2.png\" alt=\"\"></a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!--header top start-->\n  <!--header middel start-->\n  <div class=\"header_middle\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-lg-9 offset-lg-3 offset-md-0\">\n          <div class=\"main_menu menu_three header_position\">\n            <nav>\n              <ul>\n\n                <li><a href=\"#\">home</a></li>\n                <li><a href=\"#\">Aboutus</a></li>\n                <li><a href=\"#\">Business</a></li>\n                <li><a href=\"#\">Individuals</a></li>\n                <li class=\"pull-right google2\">\n                  <div id=\"google_translate_element\"></div>\n                </li>\n              </ul>\n\n            </nav>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--header middel end-->\n\n  <!--popup start-->\n \n    <!-- Modal -->\n  \n\n\n  <!--popup end-->\n\n</header>\n<!--header area end-->\n\n<!--Offcanvas menu area start-->\n\n<div class=\"off_canvars_overlay\">\n\n</div>\n<div class=\"Offcanvas_menu Offcanvas_three\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"canvas_open\">\n          <span>MENU</span>\n          <a href=\"javascript:void(0)\"><i class=\"ion-navicon\"></i></a>\n        </div>\n        <div class=\"Offcanvas_menu_wrapper\">\n          <div class=\"canvas_close\">\n            <a href=\"javascript:void(0)\"><i class=\"ion-android-close\"></i></a>\n          </div>\n\n          <div id=\"menu\" class=\"text-left \">\n            <ul class=\"offcanvas_main_menu\">\n              <li class=\"menu-item-has-children active\">\n                <a href=\"#\">Home</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">About</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">Gallery</a>\n              </li>\n\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">contact</a>\n              </li>\n\n            </ul>\n          </div>\n\n          <div class=\"Offcanvas_footer\">\n            <span><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> info@yourdomain.com</a></span>\n            <ul>\n              <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n              <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n              <li class=\"pinterest\"><a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a></li>\n              <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n              <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Offcanvas menu area end-->\n\n\n\n<!-- A few questions start -->\n\n\n<div class=\"about_section padt5\">\n\n  <div class=\"container\">\n\n    <div class=\"panel\">\n\n      <div class=\"panel_heading\">\n\n        <h3>A few quick ask questions</h3>\n\n      </div>\n\n      <div class=\"panel_body\">\n\n       \n         <div class=\"account_form\">\n\n             <form  [formGroup]=\"user\" (ngSubmit)=\"datesend(user.value)\">\n\n              <div class=\"row\">\n\n              <div class=\"col-lg-6 col-md-6\">\n\n                <p>\n                  <label>Your Dob <span>*</span></label>\n                  <input type=\"date\" formControlName=\"dob\">\n                  <span *ngIf=\"user.controls['dob'].invalid && user.controls['dob'].touched\" class='text text-danger'>date is Required</span>\n                </p>\n\n                <p>\n                  <label>I am a <span>*</span></label>\n                  <input type=\"text\" formControlName=\"gender\" readonly>\n                  <a class=\"error_form\" [routerLink]=\"['/personsdetails',id]\">(edit)</a>\n                 </p>\n\n                <p>\n                  <label>I have sex with <span>*</span></label>\n                  <input type=\"text\" formControlName=\"sex\" readonly>\n                  <a class=\"error_form\" [routerLink]=\"['/personsdetails',id]\">(edit)</a>\n                </p>\n\n                <p>\n                  <label>My ethnic group is <span>*</span></label>\n                  <input type=\"text\" readonly>\n                  <a class=\"error_form\" [routerLink]=\"['/personsdetails',id]\">(edit)</a>\n                </p>\n\n              </div>\n\n              <div class=\"col-lg-6 col-md-6\">\n\n                  <div class=\"text2 text_3\">\n                      <p>When did you last a hive an HIV test?</p>\n                      <label>\n                        <input type=\"radio\" value=\"never tested\" formControlName=\"hiv\" />\n                        <span>Never tested</span>\n                      </label>\n                      <label>\n                        <input type=\"radio\" value=\"over a year ago\" formControlName=\"hiv\" />\n                        <span>Over a year ago</span>\n                      </label>\n                      <label>\n                        <input type=\"radio\"  value=\"with in last year\" formControlName=\"hiv\" />\n                        <span>with in last year</span>\n                      </label>\n                    </div>\n\n\n                    <div class=\"text2 text_3\">\n                        <p>Have you had unprotected sex with in the last 12 months?</p>\n                        <label>\n                          <input type=\"radio\" value=\"No\" formControlName=\"last\"/>\n                          <span>No</span>\n                        </label>\n                        <label>\n                          <input type=\"radio\" value=\"Yes with i partner\"  formControlName=\"last\" />\n                          <span>Yes with i partner</span>\n                        </label>\n                        <label>\n                          <input type=\"radio\" value=\"yes with 2-5 partners\"  formControlName=\"last\" />\n                          <span>yes with 2-5 partners</span>\n                        </label>\n                        <label>\n                          <input type=\"radio\" value=\"yes with 6-12 partners\" formControlName=\"last\"  />\n                          <span>yes with 6-12 partners</span>\n                        </label>\n                        <label>\n                          <input type=\"radio\" value=\"yes more than 12 partners\"  formControlName=\"last\"/>\n                          <span>yes more than 12 partners</span>\n                        </label>\n                      </div>\n\n                      <div class=\"text2 text_3\">\n                          <p>How many partners have you had sex with in the last 12 moths?</p>\n                          <label>\n                            <input type=\"radio\"  value=\"No sexual problem\" formControlName=\"partner\" />\n                            <span>No sexual problem</span>\n                          </label>\n                          <label>\n                            <input type=\"radio\"  value=\"just 1 partner\" formControlName=\"partner\" />\n                            <span>just 1 partner</span>\n                          </label>\n                          <label>\n                            <input type=\"radio\"  value=\"2-5 partners\" formControlName=\"partner\" />\n                            <span>2-5 partners</span>\n                          </label>\n                          <label>\n                            <input type=\"radio\"  value=\"6-12 partners\" formControlName=\"partner\" />\n                            <span>6-12 partners</span>\n                          </label>\n                          <label>\n                            <input type=\"radio\"  value=\"more than 12 partners\" formControlName=\"partner\" />\n                            <span>more than 12 partners</span>\n                          </label>\n                        </div>\n\n                        \n                      <div class=\"text2 text_3\">\n                     <p>How oftner have you had sex under in influence of alchol or recreational drugs?</p>\n                     <label>\n                     <input type=\"radio\"  value=\"Never\" formControlName=\"under\" />\n                     <span>Never</span>\n                      </label>\n                      <label>\n                      <input type=\"radio\"  value=\"Sometime\" formControlName=\"under\"  />\n                      <span>Sometime</span>\n                      </label>\n                     <label>\n                     <input type=\"radio\"  value=\"Usually\" formControlName=\"under\"  />\n                    <span>Usually</span>\n                    </label>\n                    <label>\n                  <input type=\"radio\"  value=\"always\" formControlName=\"under\"  />\n                  <span>always</span>\n                </label>\n              </div>\n  \n               </div>\n\n              </div>\n           \n              <div class=\"buttons button_3\">\n                  <button class=\"btn btn-success pull-left question_1\"  routerLink=\"/test\"><i class=\"fa fa-arrow-circle-left\"></i>Back</button>\n                  <button type=\"submit\" class=\"btn pull-right question_2\">Next<i class=\"fa fa-arrow-circle-right\"></i></button>\n              </div>\n           \n\n             </form>\n           \n\n             \n          </div>\n      </div>\n    </div>\n\n   \n\n  </div>\n</div>\n\n<!-- A few questions end -->\n\n\n<!--footer area start-->\n<footer class=\"footer_widgets\">\n  <div class=\"container\">\n    <div class=\"footer_top\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 col-sm-7\">\n          <div class=\"widgets_container contact_us\">\n            <h3>Contacts us</h3>\n            <div class=\"footer_contact\">\n              <ul>\n                <li><i class=\"fa fa-home\"></i><span>Addresss:</span> Lorem Ipsum is simply dummy text of the printing\n                  and typesetting industry. Lorem Ipsum</li>\n                <li><i class=\"fa fa-phone\"></i><span>Phone:</span> (+91) 866-540-3229</li>\n                <li><i class=\"fa fa-envelope-square\"></i><span>Email:</span> info@Lorem Ipsum .com</li>\n              </ul>\n            </div>\n           \n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-6 col-sm-5\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>Information</h3>\n\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-4 col-sm-4\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>My Account</h3>\n            <div class=\"footer_menu\">\n              <div class=\"footer_contact\">\n                <ul>\n                  <li> Proudly operated from Yorkshire by Preventx and MESMAC as the Nationally commissioned provider of\n                    HIV home-sampling screening. </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n  <div class=\"footer_bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n          <div class=\"copyright_area text-center\">\n            <p>Copyright &copy; 2019 <a href=\"#\">Medintu</a> All Right Reserved.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--footer area end-->"

/***/ }),

/***/ "./src/app/index/questions/questions.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/index/questions/questions.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L3F1ZXN0aW9ucy9xdWVzdGlvbnMuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/index/questions/questions.component.ts":
/*!********************************************************!*\
  !*** ./src/app/index/questions/questions.component.ts ***!
  \********************************************************/
/*! exports provided: QuestionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionsComponent", function() { return QuestionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/index.service */ "./src/app/index/services/index.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var QuestionsComponent = /** @class */ (function () {
    function QuestionsComponent(router, fb, sends, authService) {
        this.router = router;
        this.fb = fb;
        this.sends = sends;
        this.authService = authService;
        this.id = 1;
    }
    QuestionsComponent.prototype.ngOnInit = function () {
        this.user = this.fb.group({
            dob: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            hiv: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            last: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            partner: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            gender: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            sex: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            myethicgroup: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            under: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.OBSLoginForm = this.fb.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]
        });
        this.user.controls.gender.setValue(this.sends.persondata['gender']);
        this.user.controls.sex.setValue(this.sends.persondata['oppositeGender']);
    };
    QuestionsComponent.prototype.LoginAction = function (formData) {
        if (this.authService.loginAction(formData)) {
            this.router.navigate(['dashboard']);
        }
    };
    QuestionsComponent.prototype.datesend = function (formdata) {
        var requestobj = {};
        requestobj['age'] = this.sends.logindata['age'];
        requestobj['postCode'] = this.sends.logindata['postCode'];
        requestobj['dob'] = this.user.value.dob;
        requestobj['quetionary1'] = { '"When did you last have an HIV test?"': this.user.value.dob },
            requestobj['quetionary2'] = { '"Have you had unprotected sex with in the last 12 months?"': this.user.value.hiv },
            requestobj['quetionary3'] = { '"How many partners have you had sex with in the last 12 moths?"': this.user.value.last },
            requestobj['quetionary4'] = { '"How oftner have you had sex under in influence of alchol or recreational drugs?"': this.user.value.partner };
        requestobj['gender'] = this.sends.persondata['gender'];
        requestobj['oppositeGender'] = this.sends.persondata['oppositeGender'];
        requestobj['ethnicGroup'] = this.sends.persondata['ethnicGroup'];
        this.sends.seconddata = requestobj;
        console.log(requestobj);
        this.router.navigate(['moredetail']);
    };
    QuestionsComponent.prototype.first = function () {
        this.router.navigate(['test']);
    };
    QuestionsComponent.prototype.viewResult = function () {
        this.router.navigate(['viewresults']);
    };
    QuestionsComponent.prototype.LoginPage = function () {
        this.router.navigate(['loginpageaction']);
    };
    QuestionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-questions',
            template: __webpack_require__(/*! ./questions.component.html */ "./src/app/index/questions/questions.component.html"),
            styles: [__webpack_require__(/*! ./questions.component.scss */ "./src/app/index/questions/questions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"], _services_index_service__WEBPACK_IMPORTED_MODULE_3__["IndexService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])
    ], QuestionsComponent);
    return QuestionsComponent;
}());



/***/ }),

/***/ "./src/app/index/result/result.component.html":
/*!****************************************************!*\
  !*** ./src/app/index/result/result.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper Start -->\n<!--header area start-->\n<header class=\"header_area beader_bg3\">\n  <!--header top start-->\n  <div class=\"header_top header_top_three\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"header_top_inner\">\n            <div class=\"top_left\">\n              <ul>\n                <li class=\"currency\"><a href=\"#\">support@medintu.co.uk</a> </li>\n                <li><a href=\"tel:+123123321345\">tel: +44-03300587379</a></li>\n              </ul>\n            </div>\n            <div class=\"top_right\">\n\n                <!---\t<form class=\"inner_form\" [formGroup]=\"OBSLoginForm\" (ngSubmit)=\"LoginAction(OBSLoginForm.value)\">\n              \n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"required\"  formControlName=\"username\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\"  formControlName=\"password\">\n                    </div>\n                    <div class=\"form-group btn-container\">\n                        <button class=\"btn btn-primary btn-block\" [disabled]=\"OBSLoginForm.invalid\">SIGN IN</button>\n                    </div>  \n                 </form>-->\n  \n             <button class=\"btn btn-info btn-sm\"  style=\"margin-top: 8px;width: auto;\" (click)=\"viewResult()\">Track Results</button>&nbsp;&nbsp;\n             <button class=\"btn btn-success btn-sm\"  style=\"margin-top: 8px\" (click)=\"LoginPage()\">Login</button>\n                 \n           </div>\n            <div class=\"logo logo_three\">\n              <a href=\"index.html\"><img src=\"assets/img/img/logos2.png\" alt=\"\"></a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!--header top start-->\n  <!--header middel start-->\n  <div class=\"header_middle\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-lg-9 offset-lg-3 offset-md-0\">\n          <div class=\"main_menu menu_three header_position\">\n            <nav>\n              <ul>\n\n                <li><a href=\"#\">home</a></li>\n                <li><a href=\"#\">Aboutus</a></li>\n                <li><a href=\"#\">Business</a></li>\n                <li><a href=\"#\">Individuals</a></li>\n                <li class=\"pull-right google2\">\n                  <div id=\"google_translate_element\"></div>\n                </li>\n              </ul>\n\n            </nav>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--header middel end-->\n\n  <!--popup start-->\n\n  <!-- Modal -->\n\n\n\n  <!--popup end-->\n\n</header>\n<!--header area end-->\n\n<!--Offcanvas menu area start-->\n\n<div class=\"off_canvars_overlay\">\n\n</div>\n<div class=\"Offcanvas_menu Offcanvas_three\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"canvas_open\">\n          <span>MENU</span>\n          <a href=\"javascript:void(0)\"><i class=\"ion-navicon\"></i></a>\n        </div>\n        <div class=\"Offcanvas_menu_wrapper\">\n          <div class=\"canvas_close\">\n            <a href=\"javascript:void(0)\"><i class=\"ion-android-close\"></i></a>\n          </div>\n\n          <div id=\"menu\" class=\"text-left \">\n            <ul class=\"offcanvas_main_menu\">\n              <li class=\"menu-item-has-children active\">\n                <a href=\"#\">Home</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">About</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">Gallery</a>\n              </li>\n\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">contact</a>\n              </li>\n\n            </ul>\n          </div>\n\n          <div class=\"Offcanvas_footer\">\n            <span><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> info@yourdomain.com</a></span>\n            <ul>\n              <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n              <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n              <li class=\"pinterest\"><a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a></li>\n              <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n              <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Offcanvas menu area end-->\n\n\n\n<!-- delivery  start -->\n\n\n<div class=\"about_section padt5\">\n\n  <div class=\"container\">\n\n    <h2>Result Notification Preference</h2>\n    <p class=\"line\"></p>\n\n    <div class=\"row padt5\">\n\n      <div class=\"col-lg-12 col-md-12\">\n\n        <div class=\"panel\">\n\n          <div class=\"panel_heading\">\n            <h3>Your result notification Preference</h3>\n          </div>\n\n\n          <div class=\"panel_body\">\n\n            <div class=\"account_form\">\n\n              <p>Please choose how you wish to receive your results.</p>\n              <p>We recommend you choose more than one option.</p>\n\n\n\n              <form [formGroup]=\"users\" (ngSubmit)=\"datesends(users.value)\">\n\n                <span class=\"form_6\"><input type=\"checkbox\" class=\"text10\">Textmessage</span>\n                <span class=\"form_6\"><input type=\"checkbox\" class=\"text11\">Email Notification</span>\n                <span class=\"form_6\"><input type=\"checkbox\" class=\"text12\" formControlName=\"lastResortLetter\">Last\n                  Resort Letter</span>\n\n\n\n                <div class=\"account_form mt-20 first_box\">\n\n                  <p class=\"panel_heading\">Test message</p>\n                  <p>We will text you as soon as your results are available.</p>\n                  \n                  <p>\n                    <label>Mobile<span>*</span></label>\n                    <input type=\"text\" placeholder=\"Enter Mobile\" formControlName=\"notificationPhone\">\n                     <span *ngIf=\"users.controls['notificationPhone'].invalid && users.controls['notificationPhone'].touched\" class='text text-danger'>Firstname is\n                      Required</span>\n                  </p>\n                  <p>\n                    <label>Confirm <span>*</span></label>\n                    <input type=\"text\" placeholder=\"Repeat Mobile\" formControlName=\"mobile\">\n                    <span *ngIf=\"users.controls['mobile'].invalid && users.controls['mobile'].touched\" class='text text-danger'>Firstname is\n                      Required</span>\n                  </p>\n\n\n                  <input id=\"remember\" type=\"checkbox\">Remind me to get another test in the future?\n\n\n                </div>\n\n\n                <div class=\"account_form mt-20 second_box\">\n\n\n\n                  <p class=\"panel_heading\">Email Notification</p>\n\n                  <p>We will e-mail you as soon as your result is ready. You will also need to provide a second\n                    notification option, in case you test positive and we can't get though to you.</p>\n\n                  <p>\n                    <label>Email<span>*</span></label>\n                    <input type=\"text\" placeholder=\"Enter Email\" formControlName=\"notificationEmail\">\n                    <span *ngIf=\"users.controls['notificationEmail'].invalid && users.controls['notificationEmail'].touched\" class='text text-danger'>Firstname is\n                      Required</span>\n                  </p>\n                  <p>\n                    <label>Confirm <span>*</span></label>\n                    <input type=\"text\" placeholder=\"Repeat Email\" formControlName=\"email\">\n                    <span *ngIf=\"users.controls['email'].invalid && users.controls['email'].touched\" class='text text-danger'>Firstname is\n                      Required</span>\n                  </p>\n\n\n                  <input id=\"remember\" type=\"checkbox\">Remind me to get another test in the future?\n\n                </div>\n\n                <div class=\"account_form mt-20 third_box\">\n\n                  <form>\n\n                    <p class=\"panel_heading\">Last Resort Letter</p>\n\n                    <p>Sometimes after a number of attempts are made to contact patients, we can't get through (for\n                      example, a phone number has been disconnected or changed). We would only write to you if your test\n                      is reactive, you may need treatment and we're unable to get through to you.</p>\n                  </form>\n\n                </div>\n\n\n                <div class=\"buttons button_7\">\n                  <button class=\"btn pull-left questionaries_1\" [routerLink]=\"['/address',value]\"> <i\n                      class=\"fa fa-arrow-circle-left\"></i> Back</button>\n                  <button class=\"btn pull-right questionaries_2\" type=\"submit\">{{detail}} <i\n                      class=\"fa fa-arrow-circle-right\"></i></button>\n                </div>\n\n\n              </form>\n\n\n            </div>\n          </div>\n\n        </div>\n\n\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n\n<!--footer area start-->\n<footer class=\"footer_widgets\">\n  <div class=\"container\">\n    <div class=\"footer_top\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 col-sm-7\">\n          <div class=\"widgets_container contact_us\">\n            <h3>Contacts us</h3>\n            <div class=\"footer_contact\">\n              <ul>\n                <li><i class=\"fa fa-home\"></i><span>Addresss:</span> Lorem Ipsum is simply dummy text of the printing\n                  and typesetting industry. Lorem Ipsum</li>\n                <li><i class=\"fa fa-phone\"></i><span>Phone:</span> (+91) 866-540-3229</li>\n                <li><i class=\"fa fa-envelope-square\"></i><span>Email:</span> info@Lorem Ipsum .com</li>\n              </ul>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-6 col-sm-5\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>Information</h3>\n\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-4 col-sm-4\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>My Account</h3>\n            <div class=\"footer_menu\">\n              <div class=\"footer_contact\">\n                <ul>\n                  <li> Proudly operated from Yorkshire by Preventx and MESMAC as the Nationally commissioned provider of\n                    HIV home-sampling screening. </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n  <div class=\"footer_bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n          <div class=\"copyright_area text-center\">\n            <p>Copyright &copy; 2019 <a href=\"#\">Medintu</a> All Right Reserved.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--footer area end-->"

/***/ }),

/***/ "./src/app/index/result/result.component.scss":
/*!****************************************************!*\
  !*** ./src/app/index/result/result.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L3Jlc3VsdC9yZXN1bHQuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/index/result/result.component.ts":
/*!**************************************************!*\
  !*** ./src/app/index/result/result.component.ts ***!
  \**************************************************/
/*! exports provided: ResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultComponent", function() { return ResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/index.service */ "./src/app/index/services/index.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");






var ResultComponent = /** @class */ (function () {
    function ResultComponent(router, fb, sends, authService, activatedRoute) {
        this.router = router;
        this.fb = fb;
        this.sends = sends;
        this.authService = authService;
        this.activatedRoute = activatedRoute;
        this.detail = "next";
        this.value = 2;
    }
    ResultComponent.prototype.ngOnInit = function () {
        $(document).ready(function () {
            $('.text10').click(function () {
                $(".first_box").toggle();
            });
            $('.text11').click(function () {
                $(".second_box").toggle();
            });
            $('.text12').click(function () {
                $(".third_box").toggle();
            });
        });
        this.users = this.fb.group({
            lastResortLetter: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            notificationPhone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            notificationEmail: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            mobile: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.OBSLoginForm = this.fb.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        var params = this.activatedRoute.snapshot.params;
        if (params.id == 1) {
            var someobj = this.sends.seconddata;
            this.users.controls.mobile.setValue(someobj['mobile']);
            this.users.controls.email.setValue(someobj['email']);
            this.detail = "submit";
        }
        else {
            this.users.controls.notificationPhone.setValue(this.sends.seconddata['notificationPhone']);
            this.users.controls.notificationEmail.setValue(this.sends.seconddata['notificationEmail']);
            this.users.controls.mobile.setValue(this.sends.seconddata['mobile']);
            this.users.controls.email.setValue(this.sends.seconddata['email']);
        }
    };
    ResultComponent.prototype.LoginAction = function (formData) {
        if (this.authService.loginAction(formData)) {
            this.router.navigate(['dashboard']);
        }
    };
    ResultComponent.prototype.datesends = function (formdata) {
        var requestobj = {};
        requestobj = this.sends.seconddata;
        requestobj['lastResortLetter'] = this.users.value.lastResortLetter;
        requestobj['notificationPhone'] = this.users.value.notificationPhone;
        requestobj['notificationEmail'] = this.users.value.notificationEmail;
        requestobj['mobile'] = this.users.value.mobile;
        requestobj['email'] = this.users.value.email;
        this.sends.seconddata = requestobj;
        console.log(requestobj);
        if (this.detail == "submit") {
            this.router.navigate(['edit']);
        }
        else if (this.detail == "next") {
            this.router.navigate(['edit']);
        }
    };
    ResultComponent.prototype.first = function () {
        this.router.navigate(['address']);
    };
    ResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-result',
            template: __webpack_require__(/*! ./result.component.html */ "./src/app/index/result/result.component.html"),
            styles: [__webpack_require__(/*! ./result.component.scss */ "./src/app/index/result/result.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _services_index_service__WEBPACK_IMPORTED_MODULE_3__["IndexService"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ResultComponent);
    return ResultComponent;
}());



/***/ }),

/***/ "./src/app/index/services/index.service.ts":
/*!*************************************************!*\
  !*** ./src/app/index/services/index.service.ts ***!
  \*************************************************/
/*! exports provided: IndexService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IndexService", function() { return IndexService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var IndexService = /** @class */ (function () {
    function IndexService(http, router) {
        this.http = http;
        this.router = router;
        this.host_url = "";
        this.server = this.host_url + 'rest/endUsers/validateAgeAndPostCode';
        this.sends = this.host_url + 'rest/endUsers/validateGenderAndEthnicGroup';
        this.fourth = this.host_url + 'rest/ethnicGroups/getAllEthnics';
        this.pass_data = [];
        this.user = {};
        this.logindata = {};
        this.persondata = {};
        this.seconddata = {};
        this.thirddata = [];
        this.fourthdata = {};
        this.persondetails = {};
        this.testerror = false;
        this.checkpostal = {};
        this.err = 'internal server error';
    }
    IndexService.prototype.sendone = function (user) {
        var _this = this;
        console.log(user);
        return this.http.post(this.sends, user).subscribe(function (res) {
            //this.testname=res.resultData.testCodes[0].testName
            _this.testcodes = res;
            console.log(_this.testcodes);
            if (res['message'] == "Success") {
                _this.value = res['resultData'].sponsorId;
                sessionStorage.setItem('sponsorId', _this.value);
                _this.router.navigate(['test']);
            }
            else {
                _this.testerror = true;
            }
        }, function (err) {
            alert("something bad happened please try again");
        });
    };
    IndexService.prototype.another = function (data) {
        var _this = this;
        this.thirdone = this.host_url + 'rest/endUsers/create/' + sessionStorage.getItem('sponsorId');
        console.log(data);
        // var obj={EthnicGroupId:sessionStorage.getItem('ethenicGroupId')}
        data.ethnicGroupId = sessionStorage.getItem('ethenicGroupId');
        return this.http.post(this.thirdone, data).subscribe(function (res) {
            _this.message1 = res['message'];
            sessionStorage.setItem('message', _this.message1);
            _this.some = res['status'];
            if (_this.some == "Success") {
                _this.router.navigate(['final']);
            }
        }, function (err) {
            alert("something bad happened please try again");
        });
    };
    IndexService.prototype.anothers = function (data) {
        var _this = this;
        return this.http.post(this.thirdone, data).subscribe(function (res) {
            _this.some = res['status'];
            if (_this.some == "Success") {
                _this.router.navigate(['result']);
            }
        }, function (err) {
            alert("something bad happened please try again");
        });
    };
    IndexService.prototype.anothers1 = function (data) {
        var _this = this;
        console.log(data);
        return this.http.post(this.thirdone, data).subscribe(function (res) {
            _this.some = res['status'];
            if (_this.some == "Success") {
                alert();
                // this.router.navigate(['check']);
            }
            else {
                alert();
            }
        }, function (err) {
            alert("something bad happened please try again");
        });
    };
    IndexService.prototype.getethnic = function () {
        return this.http.get(this.fourth);
    };
    IndexService.prototype.getOrderDetails = function (orderId) {
        return this.http.get(this.host_url + 'rest/endUsers/endUser/' + orderId);
    };
    IndexService.prototype.lookup = function () {
        this.addressid = sessionStorage.getItem('age');
        this.address = 'https://api.getAddress.io/find/' + this.addressid + '/?api-key=x5CPOTrNhkKPq_1PxN6A_w18921';
        return this.http.get(this.address);
    };
    IndexService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], IndexService);
    return IndexService;
}());



/***/ }),

/***/ "./src/app/index/sign-up/sign-up.component.html":
/*!******************************************************!*\
  !*** ./src/app/index/sign-up/sign-up.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section class=\"material-half-bg\">\n\t<div class=\"cover\"></div>\n</section>\n<section class=\"login-content\">\n\t<div class=\"logo\">\n\t\t<h1>Odfsdf fsdfs</h1>\n\t</div>\n\t<div class=\"login-box\">\n\t\t<form class=\"login-form\"  [formGroup]=\"OBSLoginForm\" (ngSubmit)=\"LoginAction(OBSLoginForm.value)\">\n\t\t\t<h3 class=\"login-head\"><i class=\"fa fa-lg fa-fw fa-pencil\"></i>SIGN IN</h3>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label class=\"control-label\">USERNAME</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"required\"  formControlName=\"UserName\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label class=\"control-label\">EMAIL</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"required\"  formControlName=\"UserName\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label class=\"control-label\">PASSWORD</label>\n\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\"  formControlName=\"UserPassword\">\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label class=\"control-label\">CONFIRM PASSWORD</label>\n\t\t\t\t<input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\"  formControlName=\"UserPassword\">\n\t\t\t</div>\n\t\t\t\n\t\t\t<div class=\"form-group btn-container\">\n\t\t\t\t<button class=\"btn btn-primary btn-block\" [disabled]=\"OBSLoginForm.invalid\"><i class=\"fa fa-sign-in fa-lg fa-fw\"></i>SIGN IN</button>\n\t\t\t</div><Br>\n\t\t\t<div class=\"form-group btn-container\">\n\t\t\t\t<button class=\"btn btn-info btn-block\" [disabled]=\"OBSLoginForm.invalid\"><i class=\"fa fa-eraser\" aria-hidden=\"true\"></i>RESET</button>\n\t\t\t</div>\n\t\t</form>\n\t\t\n\t</div>\n</section>\n\n\n<style>\n\t.login-content .login-box {\n\t\tposition: relative;\n\t\tmin-width: 350px;\n\t\tmin-height: 600px;\n\t\tbackground-color: #fff;\n\t\tbox-shadow: 0px 29px 147.5px 102.5px rgba(0, 0, 0, 0.05), 0px 29px 95px 0px rgba(0, 0, 0, 0.16);\n\t\t-webkit-perspective: 800px;\n\t\tperspective: 800px;\n\t\ttransition: all 0.5s ease-in-out;\n\t}\n</style>"

/***/ }),

/***/ "./src/app/index/sign-up/sign-up.component.scss":
/*!******************************************************!*\
  !*** ./src/app/index/sign-up/sign-up.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L3NpZ24tdXAvc2lnbi11cC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/index/sign-up/sign-up.component.ts":
/*!****************************************************!*\
  !*** ./src/app/index/sign-up/sign-up.component.ts ***!
  \****************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent() {
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/index/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/index/sign-up/sign-up.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/index/test/test.component.html":
/*!************************************************!*\
  !*** ./src/app/index/test/test.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Main Wrapper Start -->\n<!--header area start-->\n<header class=\"header_area beader_bg3\">\n  <!--header top start-->\n  <div class=\"header_top header_top_three\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"header_top_inner\">\n            <div class=\"top_left\">\n              <ul>\n                <li class=\"currency\"><a href=\"#\">support@medintu.co.uk</a>\n\n                </li>\n\n                <li><a href=\"tel:+123123321345\">tel: +44-03300587379</a></li>\n\n              </ul>\n            </div>\n            <div class=\"top_right\">\n\n                <!---\t<form class=\"inner_form\" [formGroup]=\"OBSLoginForm\" (ngSubmit)=\"LoginAction(OBSLoginForm.value)\">\n              \n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"required\"  formControlName=\"username\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\"  formControlName=\"password\">\n                    </div>\n                    <div class=\"form-group btn-container\">\n                        <button class=\"btn btn-primary btn-block\" [disabled]=\"OBSLoginForm.invalid\">SIGN IN</button>\n                    </div>  \n                 </form>-->\n  \n                 <button class=\"btn btn-info btn-sm\"  style=\"margin-top: 8px;width: auto;\" (click)=\"viewResult()\">Track Results</button>&nbsp;&nbsp;\n                 <button class=\"btn btn-success btn-sm\"  style=\"margin-top: 8px\" (click)=\"LoginPage()\">Login</button>\n                 \n            </div>\n            \n            <div class=\"logo logo_three\">\n              <a href=\"index.html\"><img src=\"assets/img/img/logos2.png\" alt=\"\"></a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!--header top start-->\n  <!--header middel start-->\n  <div class=\"header_middle\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-lg-9 offset-lg-3 offset-md-0\">\n          <div class=\"main_menu menu_three header_position\">\n            <nav>\n              <ul>\n\n                <li><a href=\"#\">home</a></li>\n                <li><a href=\"#\">Aboutus</a></li>\n                <li><a href=\"#\">Business</a></li>\n                <li><a href=\"#\">Individuals</a></li>\n                <li class=\"pull-right google2\">\n                  <div id=\"google_translate_element\"></div>\n                </li>\n              </ul>\n\n            </nav>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--header middel end-->\n\n  <!--popup start-->\n \n    <!-- Modal -->\n  \n\n\n  <!--popup end-->\n\n</header>\n<!--header area end-->\n\n<!--Offcanvas menu area start-->\n\n<div class=\"off_canvars_overlay\">\n\n</div>\n<div class=\"Offcanvas_menu Offcanvas_three\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"canvas_open\">\n          <span>MENU</span>\n          <a href=\"javascript:void(0)\"><i class=\"ion-navicon\"></i></a>\n        </div>\n        <div class=\"Offcanvas_menu_wrapper\">\n          <div class=\"canvas_close\">\n            <a href=\"javascript:void(0)\"><i class=\"ion-android-close\"></i></a>\n          </div>\n\n          <div id=\"menu\" class=\"text-left \">\n            <ul class=\"offcanvas_main_menu\">\n              <li class=\"menu-item-has-children active\">\n                <a href=\"#\">Home</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">About</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">Gallery</a>\n              </li>\n\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">contact</a>\n              </li>\n\n            </ul>\n          </div>\n\n          <div class=\"Offcanvas_footer\">\n            <span><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> info@yourdomain.com</a></span>\n            <ul>\n              <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n              <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n              <li class=\"pinterest\"><a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a></li>\n              <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n              <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Offcanvas menu area end-->\n\n\n\n<!-- delivery  start -->\n\n\n<div class=\"about_section\">\n\n  <div class=\"container collection_1\">\n\n    <h2 class=\"title_3\">Great news, you're eligible to request a free test kit.</h2>\n   \n    <div class=\"row\">\n\n      <div class=\"col-lg-12 col-md-12\">\n\n        <div class=\"panel\">\n\n          <div class=\"panel_heading\">\n            <h3>collection proces</h3>\n          </div>\n\n          <div class=\"panel_body inside_4\">\n\n            <p> Unlike some STIs such as Chlamydia (which can be tested from a urine sample), the HIV virus is\n              blood-borne and therefore a small blood sample is the most accurate way to test for the infection.</p>\n\n            <p>Please order a kit only if you are happy with this collection process.</p>\n\n            <img src=\"assets/img/img/bloodcollection.gif\" alt=\"path not correct\" class=\"blood_2\" />\n\n            <p>A safety lancet will use a small blade to pierce your finger (they are single-use, but we include\n              spares). You will then need to carefully 'milk' your finger to collect around 10 drops of blood (roughly\n              quarter of a teaspoon) into the tube we provide in the kit.</p>\n\n          </div>\n\n        </div>\n      </div>\n\n    </div>\n\n\n\n    <div class=\"buttons\">\n      <button class=\"btn pull-left\" [routerLink]=\"['/personsdetails']\"><i class=\"fa fa-arrow-circle-left\"></i> Back</button>\n      <button class=\"btn pull-right\" (click)=\"second()\">Next <i class=\"fa fa-arrow-circle-right\"></i></button>\n    </div>\n\n  </div>\n</div>\n\n\n\n<!-- A delivery end -->\n\n\n\n\n<!--footer area start-->\n<footer class=\"footer_widgets\">\n  <div class=\"container\">\n    <div class=\"footer_top\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 col-sm-7\">\n          <div class=\"widgets_container contact_us\">\n            <h3>Contacts us</h3>\n            <div class=\"footer_contact\">\n              <ul>\n                <li><i class=\"fa fa-home\"></i><span>Addresss:</span> Lorem Ipsum is simply dummy text of the printing\n                  and typesetting industry. Lorem Ipsum</li>\n                <li><i class=\"fa fa-phone\"></i><span>Phone:</span> (+91) 866-540-3229</li>\n                <li><i class=\"fa fa-envelope-square\"></i><span>Email:</span> info@Lorem Ipsum .com</li>\n              </ul>\n            </div>\n           \n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-6 col-sm-5\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>Information</h3>\n\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-4 col-sm-4\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>My Account</h3>\n            <div class=\"footer_menu\">\n              <div class=\"footer_contact\">\n                <ul>\n                  <li> Proudly operated from Yorkshire by Preventx and MESMAC as the Nationally commissioned provider of\n                    HIV home-sampling screening. </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n  <div class=\"footer_bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n          <div class=\"copyright_area text-center\">\n            <p>Copyright &copy; 2019 <a href=\"#\">Medintu</a> All Right Reserved.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--footer area end-->"

/***/ }),

/***/ "./src/app/index/test/test.component.scss":
/*!************************************************!*\
  !*** ./src/app/index/test/test.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luZGV4L3Rlc3QvdGVzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/index/test/test.component.ts":
/*!**********************************************!*\
  !*** ./src/app/index/test/test.component.ts ***!
  \**********************************************/
/*! exports provided: TestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestComponent", function() { return TestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var TestComponent = /** @class */ (function () {
    function TestComponent(router, authService, fb) {
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.id = 1;
    }
    TestComponent.prototype.ngOnInit = function () {
        this.OBSLoginForm = this.fb.group({
            'username': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            'password': [null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    TestComponent.prototype.LoginAction = function (formData) {
        if (this.authService.loginAction(formData)) {
            this.router.navigate(['dashboard']);
        }
    };
    TestComponent.prototype.first = function () {
        this.router.navigate(['personsdetails']);
    };
    TestComponent.prototype.second = function () {
        this.router.navigate(['checkpostal']);
    };
    TestComponent.prototype.viewResult = function () {
        this.router.navigate(['viewresults']);
    };
    TestComponent.prototype.LoginPage = function () {
        this.router.navigate(['loginpageaction']);
    };
    TestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-test',
            template: __webpack_require__(/*! ./test.component.html */ "./src/app/index/test/test.component.html"),
            styles: [__webpack_require__(/*! ./test.component.scss */ "./src/app/index/test/test.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "./src/app/index/viewresults/viewresults.component.html":
/*!**************************************************************!*\
  !*** ./src/app/index/viewresults/viewresults.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--header start-->\n\n\n<!-- Main Wrapper Start -->\n<!--header area start-->\n<header class=\"header_area beader_bg3\">\n  <!--header top start-->\n  <div class=\"header_top header_top_three\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-12\">\n          <div class=\"header_top_inner\">\n            <div class=\"top_left\">\n              <ul>\n                <li class=\"currency\"><a href=\"#\">support@medintu.co.uk</a>\n\n                </li>\n\n                <li><a href=\"tel:+123123321345\">tel: +44-03300587379</a></li>\n\n              </ul>\n            </div>\n            <div class=\"top_right\">\n\n              <!---\t<form class=\"inner_form\" [formGroup]=\"OBSLoginForm\" (ngSubmit)=\"LoginAction(OBSLoginForm.value)\">\n              \n                    <div class=\"form-group\">\n                      <input type=\"text\" class=\"form-control\" placeholder=\"Username\" required=\"required\"  formControlName=\"username\">\n                    </div>\n                    <div class=\"form-group\">\n                        <input type=\"password\" class=\"form-control\" placeholder=\"Password\" required=\"required\"  formControlName=\"password\">\n                    </div>\n                    <div class=\"form-group btn-container\">\n                        <button class=\"btn btn-primary btn-block\" [disabled]=\"OBSLoginForm.invalid\">SIGN IN</button>\n                    </div>  \n                 </form>-->\n\n              <button class=\"btn btn-info btn-sm\" style=\"margin-top: 8px;width: auto;\" (click)=\"viewResult()\">Track\n                Results</button>&nbsp;&nbsp;\n              <button class=\"btn btn-success btn-sm\" style=\"margin-top: 8px\" (click)=\"LoginPage()\">Login</button>\n\n            </div>\n\n            <div class=\"logo logo_three\">\n              <a href=\"index.html\"><img src=\"assets/img/img/logo.png\" alt=\"\"></a>\n            </div>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n  <!--header top start-->\n  <!--header middel start-->\n  <div class=\"header_middle\">\n    <div class=\"container\">\n      <div class=\"row align-items-center\">\n        <div class=\"col-lg-9 offset-lg-3 offset-md-0\">\n          <div class=\"main_menu menu_three header_position\">\n            <nav>\n              <ul>\n\n                <li><a href=\"#\">home</a></li>\n                <li><a href=\"#\">Aboutus</a></li>\n                <li><a href=\"#\">Business</a></li>\n                <li><a href=\"#\">Individuals</a></li>\n                <li class=\"pull-right google2\">\n                  <div id=\"google_translate_element\"></div>\n                </li>\n              </ul>\n\n            </nav>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!--header middel end-->\n\n\n\n</header>\n<!--header area end-->\n\n<!--Offcanvas menu area start-->\n\n<div class=\"off_canvars_overlay\">\n\n</div>\n<div class=\"Offcanvas_menu Offcanvas_three\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-12\">\n        <div class=\"canvas_open\">\n          <span>MENU</span>\n          <a href=\"javascript:void(0)\"><i class=\"ion-navicon\"></i></a>\n        </div>\n        <div class=\"Offcanvas_menu_wrapper\">\n          <div class=\"canvas_close\">\n            <a href=\"javascript:void(0)\"><i class=\"ion-android-close\"></i></a>\n          </div>\n\n          <div id=\"menu\" class=\"text-left \">\n            <ul class=\"offcanvas_main_menu\">\n              <li class=\"menu-item-has-children active\">\n                <a href=\"#\">Home</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">About</a>\n\n              </li>\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">Gallery</a>\n              </li>\n\n              <li class=\"menu-item-has-children\">\n                <a href=\"#\">contact</a>\n              </li>\n\n            </ul>\n          </div>\n\n          <div class=\"Offcanvas_footer\">\n            <span><a href=\"#\"><i class=\"fa fa-envelope-o\"></i> info@yourdomain.com</a></span>\n            <ul>\n              <li class=\"facebook\"><a href=\"#\"><i class=\"fa fa-facebook\"></i></a></li>\n              <li class=\"twitter\"><a href=\"#\"><i class=\"fa fa-twitter\"></i></a></li>\n              <li class=\"pinterest\"><a href=\"#\"><i class=\"fa fa-pinterest-p\"></i></a></li>\n              <li class=\"google-plus\"><a href=\"#\"><i class=\"fa fa-google-plus\"></i></a></li>\n              <li class=\"linkedin\"><a href=\"#\"><i class=\"fa fa-linkedin\"></i></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!--Offcanvas menu area end-->\n\n\n<!--header end-->\n\n<!--first page start -->\n<div class=\"about_section mt-60\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 col-md-6\">\n        <div class=\"about_content text-left\">\n          <h1 class=\"text-center\">Track your test results</h1>\n          <p>It's easy to track the status of your test kit online and in many cases access your results and additional\n            information.</p>\n          <p>Please note, you can only track our test.hiv branded test kits that will include your 'PX' Tracking Code\n            and an Access Key on the paperwork.</p>\n          <p>Lost or forgotten your details?\n            You may be able to request a reminder, and we'll text your details.</p>\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-md-6\">\n        <div class=\"about_content text-center\">\n          <h1 class=\"text-center\">Track your test results</h1>\n          <p>Simply enter your tracking code and access key...</p><br>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='orderId' id=\"code\" placeholder=\"PX kit Code\">\n          </div>\n          <div class=\"form-group\">\n            <input type=\"text\" class=\"form-control\" [(ngModel)]='accessKey' id=\"key\" placeholder=\"Access Key\">\n          </div>\n          <button type=\"submit\" class=\"btn btn-success pull-right\" (click)=viewOrderResult(orderId,accessKey)\n            data-toggle=\"modal\" data-target=\"#myModal\">View Results</button>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!--header end-->\n\n\n<!--footer area start-->\n<footer class=\"footer_widgets\">\n  <div class=\"container\">\n    <div class=\"footer_top\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 col-md-6 col-sm-7\">\n          <div class=\"widgets_container contact_us\">\n            <h3>Contacts us</h3>\n            <div class=\"footer_contact\">\n              <ul>\n                <li><i class=\"fa fa-home\"></i><span>Addresss:</span> Lorem Ipsum is simply dummy text of the printing\n                  and typesetting industry. Lorem Ipsum</li>\n                <li><i class=\"fa fa-phone\"></i><span>Phone:</span> (+91) 866-540-3229</li>\n                <li><i class=\"fa fa-envelope-square\"></i><span>Email:</span> info@Lorem Ipsum .com</li>\n              </ul>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"col-lg-2 col-md-6 col-sm-5\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>Information</h3>\n\n          </div>\n        </div>\n        <div class=\"col-lg-6 col-md-4 col-sm-4\">\n          <div class=\"widgets_container widget_menu\">\n            <h3>My Account</h3>\n            <div class=\"footer_menu\">\n              <div class=\"footer_contact\">\n                <ul>\n                  <li> Proudly operated from Yorkshire by Preventx and MESMAC as the Nationally commissioned provider of\n                    HIV home-sampling screening. </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n\n\n\n      </div>\n    </div>\n  </div>\n  <div class=\"footer_bottom\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12 col-md-12\">\n          <div class=\"copyright_area text-center\">\n            <p>Copyright &copy; 2019 <a href=\"#\">Medintu</a> All Right Reserved.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</footer>\n<!--footer area end-->\n\n\n\n<!-- Modal -->\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\n  <div class=\"modal-dialog modal-lg\">\n\n    <!-- Modal content-->\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h4 class=\"modal-title\">Your Order Details</h4>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\n      </div>\n      <div class=\"modal-body\">\n        <h5 class=\"modal-title\">Personal Info</h5>\n        <h4 class=\"text text-danger\" *ngIf=\"ordertrack\">Invalid order Id, if valid order please contact support</h4>\n        <table class=\"table\" *ngIf=\"!ordertrack\">\n          <!-- <thead>\n                  <tr>\n                    <th>#</th>\n                    <th>First Name</th>\n                    <th>Last Name</th>\n                    <th>Email</th>\n                    <th>Gender</th>\n                    <th>Mobile</th>\n                    <th>Order Code</th>\n                    <th>Post Code</th>\n                    <th>PX Code</th>\n                    <th>Status</th>\n\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let item of orderDetailsData;let i=index\">\n                     <td>{{i+1}}</td>\n                    <td>{{item.firstName}}</td>\n                    <td>{{item.lastName}}</td>\n                    <td>{{item.email}}</td>\n                    <td>{{item.oppositeGender}}</td>\n                    <td>{{item.mobile}}</td>\n                    <td>{{item.orderCode}}</td>\n                    <td>{{item.postCode}}</td>\n                    <td>YF45</td>\n                    <td>{{item.status}}</td>\n                  </tr>\n                </tbody> -->\n            <tr *ngFor=\"let item of orderDetailsData;let i=index\">            \n              <td>\n                <strong><label>Name:</label> </strong> &nbsp;&nbsp; {{item.firstName}}<br/>\n                <strong><label>Last Name: </label></strong>  &nbsp;&nbsp; {{item.lastName}}<br/>\n                <strong><label>Email Id: </label></strong> &nbsp;&nbsp;  {{item.email}}<br  />\n                <strong><label>Gender: </label></strong>  &nbsp;&nbsp; {{item.oppositeGender}}<br/>\n              </td>\n              <td>\n                <strong><label>Mobile: </label></strong>  &nbsp;&nbsp; {{item.mobile}}<br/>\n                <strong><label>Last Name: </label></strong>  &nbsp;&nbsp; {{item.orderCode}}<br />\n                <strong><label>Email Id: </label></strong> &nbsp;&nbsp;  {{item.postCode}}<br/>\n                <strong><label>Gender: </label></strong>  &nbsp;&nbsp; YF45<br/>\n              </td>\n              <td>\n            <span><label></label>Status &nbsp;&nbsp;<button class=\"btn round\">{{item.status}}</button></span>\n          </td>\n            </tr>\n        </table>\n        <table>\n          <div class=\"modal-header\">\n              <h5 class=\"modal-title\">Observation Report</h5>\n          </div>\n        </table>\n        <h4 class=\"text text-primary\" *ngIf=\"orderStatus\">Your Order is in Progress, lab test results need to be\n          recieved</h4>\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-info\" data-dismiss=\"modal\">Close</button>\n      </div>\n    </div>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/index/viewresults/viewresults.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/index/viewresults/viewresults.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".round {\n  border-radius: 12px;\n  background-color: green;\n  color: white;\n  font-size: 12px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5kZXgvdmlld3Jlc3VsdHMvRDpcXExhdGVzdCBPQlNcXE5ldyBmb2xkZXIgKDIpXFxOZXcgZm9sZGVyL3NyY1xcYXBwXFxpbmRleFxcdmlld3Jlc3VsdHNcXHZpZXdyZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixZQUFZO0VBQ1osZUFBZSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvaW5kZXgvdmlld3Jlc3VsdHMvdmlld3Jlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm91bmR7XHJcbiAgICBib3JkZXItcmFkaXVzOjEycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/index/viewresults/viewresults.component.ts":
/*!************************************************************!*\
  !*** ./src/app/index/viewresults/viewresults.component.ts ***!
  \************************************************************/
/*! exports provided: ViewresultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewresultsComponent", function() { return ViewresultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/index.service */ "./src/app/index/services/index.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var ViewresultsComponent = /** @class */ (function () {
    function ViewresultsComponent(indexservice, router) {
        this.indexservice = indexservice;
        this.router = router;
        this.orderDetailsData = [];
        this.orderStatus = false;
        this.ordertrack = false;
    }
    ViewresultsComponent.prototype.viewOrderResult = function (orderId, accessKey) {
        var _this = this;
        this.indexservice.getOrderDetails(orderId).subscribe(function (response) {
            _this.orderDetailsData = response.resultData;
            if (_this.orderDetailsData == null) {
                _this.orderStatus = false;
                _this.ordertrack = true;
            }
            else if (_this.orderDetailsData[0].status == 'In Progress') {
                _this.orderStatus = true;
                _this.ordertrack = false;
            }
        });
    };
    ViewresultsComponent.prototype.ngOnInit = function () {
    };
    ViewresultsComponent.prototype.viewResult = function () {
        this.router.navigate(['viewresults']);
    };
    ViewresultsComponent.prototype.LoginPage = function () {
        this.router.navigate(['loginpageaction']);
    };
    ViewresultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-viewresults',
            template: __webpack_require__(/*! ./viewresults.component.html */ "./src/app/index/viewresults/viewresults.component.html"),
            styles: [__webpack_require__(/*! ./viewresults.component.scss */ "./src/app/index/viewresults/viewresults.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_index_service__WEBPACK_IMPORTED_MODULE_2__["IndexService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], ViewresultsComponent);
    return ViewresultsComponent;
}());



/***/ }),

/***/ "./src/app/no-page/no-page.component.html":
/*!************************************************!*\
  !*** ./src/app/no-page/no-page.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-expand-lg navbar-light\">\n  <div class=\"navbar-header d-flex col\">\n    <a class=\"navbar-brand\" href=\"#\">OBS<b>HRMS</b></a>\n    <button type=\"button\" data-target=\"#navbarCollapse\" data-toggle=\"collapse\"\n      class=\"navbar-toggle navbar-toggler ml-auto\">\n      <span class=\"navbar-toggler-icon\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n  </div>\n  <!-- Collection of nav links, forms, and other content for toggling -->\n  <div id=\"navbarCollapse\" class=\"collapse navbar-collapse justify-content-start\">\n    <ul class=\"nav navbar-nav navbar-right ml-auto\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link\" href=\"\" (click)=\"logoutAction()\"><i class=\"fa fa-user-o\"></i> Logout</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<h1 class=\"text-center\">\nPage Not Found !\n</h1>\n<p class=\"mt-4 mb-4 text-center\"><a class=\"btn btn-primary mr-2 mb-2\" routerLink=\"/dashboard\"><i class=\"fa fa-file\"></i>Go to Back</a></p>\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/no-page/no-page.component.scss":
/*!************************************************!*\
  !*** ./src/app/no-page/no-page.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-header.col {\n  padding: 0 !important; }\n\n.navbar {\n  background: #fff;\n  padding-left: 16px;\n  padding-right: 16px;\n  border-bottom: 1px solid #dfe3e8;\n  border-radius: 0; }\n\n.navbar .navbar-brand {\n  font-size: 20px;\n  padding-left: 0;\n  padding-right: 50px; }\n\n.navbar .navbar-brand b {\n  font-weight: bold;\n  color: #29c68c; }\n\n.navbar ul.nav li a {\n  color: #999; }\n\n.navbar ul.nav li a:hover, .navbar ul.nav li a:focus {\n  color: #29c68c !important; }\n\n.navbar ul.nav li.active > a, .navbar ul.nav li.open > a {\n  color: #26bb84 !important;\n  background: transparent !important; }\n\n.navbar .form-inline .input-group-addon {\n  box-shadow: none;\n  border-radius: 2px 0 0 2px;\n  background: #f5f5f5;\n  border-color: #dfe3e8;\n  font-size: 16px; }\n\n.navbar .form-inline i {\n  font-size: 16px; }\n\n.navbar .form-inline .btn {\n  border-radius: 2px;\n  color: #fff;\n  border-color: #29c68c;\n  background: #29c68c;\n  outline: none; }\n\n.navbar .form-inline .btn:hover, .navbar .form-inline .btn:focus {\n  border-color: #26bb84;\n  background: #26bb84; }\n\n.navbar .search-form {\n  display: inline-block; }\n\n.navbar .search-form .btn {\n  margin-left: 4px; }\n\n.navbar .search-form .form-control {\n  border-radius: 2px; }\n\n.navbar .login-form .input-group {\n  margin-right: 4px;\n  float: left; }\n\n.navbar .login-form .form-control {\n  max-width: 158px;\n  border-radius: 0 2px 2px 0; }\n\n.navbar .navbar-right .dropdown-toggle::after {\n  display: none; }\n\n.navbar .dropdown-menu {\n  border-radius: 1px;\n  border-color: #e5e5e5;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); }\n\n.navbar .dropdown-menu li a {\n  padding: 6px 20px; }\n\n.navbar .navbar-right .dropdown-menu {\n  width: 505px;\n  padding: 20px;\n  left: auto;\n  right: 0;\n  font-size: 14px; }\n\n@media (min-width: 1200px) {\n  .search-form .input-group {\n    width: 300px;\n    margin-left: 30px; } }\n\n@media (max-width: 768px) {\n  .navbar .navbar-right .dropdown-menu {\n    width: 100%;\n    background: transparent;\n    padding: 10px 20px; }\n  .navbar .input-group {\n    width: 100%;\n    margin-bottom: 15px; }\n  .navbar .input-group .form-control {\n    max-width: none; }\n  .navbar .login-form .btn {\n    width: 100%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbm8tcGFnZS9EOlxcTGF0ZXN0IE9CU1xcTmV3IGZvbGRlciAoMilcXE5ldyBmb2xkZXIvc3JjXFxhcHBcXG5vLXBhZ2VcXG5vLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixnQ0FBZ0M7RUFDaEMsZ0JBQWdCLEVBQUE7O0FBRXBCO0VBQ0ksZUFBZTtFQUNmLGVBQWU7RUFDZixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxpQkFBaUI7RUFDakIsY0FBYyxFQUFBOztBQUVsQjtFQUNJLFdBQVcsRUFBQTs7QUFFZjtFQUNJLHlCQUF5QixFQUFBOztBQUU3QjtFQUNJLHlCQUF5QjtFQUN6QixrQ0FBa0MsRUFBQTs7QUFFdEM7RUFDSSxnQkFBZ0I7RUFDaEIsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsZUFBZSxFQUFBOztBQUVuQjtFQUNJLGVBQWUsRUFBQTs7QUFFbkI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsYUFBYSxFQUFBOztBQUVqQjtFQUNJLHFCQUFxQjtFQUNyQixtQkFBbUIsRUFBQTs7QUFFdkI7RUFDSSxxQkFBcUIsRUFBQTs7QUFFekI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFFcEI7RUFDSSxrQkFBa0IsRUFBQTs7QUFFdEI7RUFDSSxpQkFBaUI7RUFDakIsV0FBVyxFQUFBOztBQUVmO0VBQ0ksZ0JBQWdCO0VBQ2hCLDBCQUEwQixFQUFBOztBQUU5QjtFQUNJLGFBQWEsRUFBQTs7QUFFakI7RUFDSSxrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLHlDQUFxQyxFQUFBOztBQUV6QztFQUNJLGlCQUFpQixFQUFBOztBQUVyQjtFQUNJLFlBQVk7RUFDWixhQUFhO0VBQ2IsVUFBVTtFQUNWLFFBQVE7RUFDUixlQUFlLEVBQUE7O0FBRW5CO0VBQ0k7SUFDSSxZQUFZO0lBQ1osaUJBQWlCLEVBQUEsRUFDcEI7O0FBRUw7RUFDSTtJQUNJLFdBQVc7SUFDWCx1QkFBdUI7SUFDdkIsa0JBQWtCLEVBQUE7RUFFdEI7SUFDSSxXQUFXO0lBQ1gsbUJBQW1CLEVBQUE7RUFFdkI7SUFDSSxlQUFlLEVBQUE7RUFFbkI7SUFDSSxXQUFXLEVBQUEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL25vLXBhZ2Uvbm8tcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubmF2YmFyLWhlYWRlci5jb2wge1xyXG4gICAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xyXG59XHRcclxuLm5hdmJhciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTZweDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGZlM2U4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4ubmF2YmFyIC5uYXZiYXItYnJhbmQge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gICAgcGFkZGluZy1yaWdodDogNTBweDtcclxufVxyXG4ubmF2YmFyIC5uYXZiYXItYnJhbmQgYiB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGNvbG9yOiAjMjljNjhjO1x0XHRcclxufVxyXG4ubmF2YmFyIHVsLm5hdiBsaSBhIHtcclxuICAgIGNvbG9yOiAjOTk5O1xyXG59XHJcbi5uYXZiYXIgdWwubmF2IGxpIGE6aG92ZXIsIC5uYXZiYXIgdWwubmF2IGxpIGE6Zm9jdXMge1xyXG4gICAgY29sb3I6ICMyOWM2OGMgIWltcG9ydGFudDtcclxufVxyXG4ubmF2YmFyIHVsLm5hdiBsaS5hY3RpdmUgPiBhLCAubmF2YmFyIHVsLm5hdiBsaS5vcGVuID4gYSB7XHJcbiAgICBjb2xvcjogIzI2YmI4NCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgIWltcG9ydGFudDtcclxufVxyXG4ubmF2YmFyIC5mb3JtLWlubGluZSAuaW5wdXQtZ3JvdXAtYWRkb24ge1xyXG4gICAgYm94LXNoYWRvdzogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweCAwIDAgMnB4O1xyXG4gICAgYmFja2dyb3VuZDogI2Y1ZjVmNTtcclxuICAgIGJvcmRlci1jb2xvcjogI2RmZTNlODtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubmF2YmFyIC5mb3JtLWlubGluZSBpIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxufVxyXG4ubmF2YmFyIC5mb3JtLWlubGluZSAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjMjljNjhjO1xyXG4gICAgYmFja2dyb3VuZDogIzI5YzY4YztcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLm5hdmJhciAuZm9ybS1pbmxpbmUgLmJ0bjpob3ZlciwgLm5hdmJhciAuZm9ybS1pbmxpbmUgLmJ0bjpmb2N1cyB7XHJcbiAgICBib3JkZXItY29sb3I6ICMyNmJiODQ7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMjZiYjg0O1xyXG59XHJcbi5uYXZiYXIgLnNlYXJjaC1mb3JtIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxufVxyXG4ubmF2YmFyIC5zZWFyY2gtZm9ybSAuYnRuIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XHJcbn1cclxuLm5hdmJhciAuc2VhcmNoLWZvcm0gLmZvcm0tY29udHJvbCB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbn1cclxuLm5hdmJhciAubG9naW4tZm9ybSAuaW5wdXQtZ3JvdXAge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0cHg7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG4ubmF2YmFyIC5sb2dpbi1mb3JtIC5mb3JtLWNvbnRyb2wge1xyXG4gICAgbWF4LXdpZHRoOiAxNThweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMnB4IDJweCAwO1xyXG59ICAgIFx0XHJcbi5uYXZiYXIgLm5hdmJhci1yaWdodCAuZHJvcGRvd24tdG9nZ2xlOjphZnRlciB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG59XHJcbi5uYXZiYXIgLmRyb3Bkb3duLW1lbnUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXB4O1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjZTVlNWU1O1xyXG4gICAgYm94LXNoYWRvdzogMCAycHggOHB4IHJnYmEoMCwwLDAsLjA1KTtcclxufVxyXG4ubmF2YmFyIC5kcm9wZG93bi1tZW51IGxpIGEge1xyXG4gICAgcGFkZGluZzogNnB4IDIwcHg7XHJcbn1cclxuLm5hdmJhciAubmF2YmFyLXJpZ2h0IC5kcm9wZG93bi1tZW51IHtcclxuICAgIHdpZHRoOiA1MDVweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBsZWZ0OiBhdXRvO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDEyMDBweCl7XHJcbiAgICAuc2VhcmNoLWZvcm0gLmlucHV0LWdyb3VwIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC5uYXZiYXIgLm5hdmJhci1yaWdodCAuZHJvcGRvd24tbWVudSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdmJhciAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5pbnB1dC1ncm91cCAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XHRcdFx0XHJcbiAgICB9XHJcbiAgICAubmF2YmFyIC5sb2dpbi1mb3JtIC5idG4ge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/no-page/no-page.component.ts":
/*!**********************************************!*\
  !*** ./src/app/no-page/no-page.component.ts ***!
  \**********************************************/
/*! exports provided: NoPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPageComponent", function() { return NoPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NoPageComponent = /** @class */ (function () {
    function NoPageComponent() {
    }
    NoPageComponent.prototype.ngOnInit = function () {
    };
    NoPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-no-page',
            template: __webpack_require__(/*! ./no-page.component.html */ "./src/app/no-page/no-page.component.html"),
            styles: [__webpack_require__(/*! ./no-page.component.scss */ "./src/app/no-page/no-page.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NoPageComponent);
    return NoPageComponent;
}());



/***/ }),

/***/ "./src/app/no-page/no-page.router.ts":
/*!*******************************************!*\
  !*** ./src/app/no-page/no-page.router.ts ***!
  \*******************************************/
/*! exports provided: NoPageRoute */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoPageRoute", function() { return NoPageRoute; });
/* harmony import */ var _no_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./no-page.component */ "./src/app/no-page/no-page.component.ts");

var NoPageRoute = [
    { path: '**', component: _no_page_component__WEBPACK_IMPORTED_MODULE_0__["NoPageComponent"] }
];


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.host_url = "";
        this.url = this.host_url + "rest/user/authenticate";
    }
    AuthService.prototype.isAuthenticate = function () {
        //method return true or false based on login credential
        var userData = sessionStorage.getItem('userData');
        if (userData && userData.length > 0) {
            return true;
        }
        else {
            return false;
        }
    };
    AuthService.prototype.loginAction = function (postData) {
        var body = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('username', postData.username)
            .set('password', postData.password);
        this.http
            .post(this.url, body.toString(), {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
                .set('Content-Type', 'application/x-www-form-urlencoded')
        })
            .subscribe(function (res) {
            sessionStorage.setItem('userData', res['resultData']['token']);
            sessionStorage.setItem('userRole', res['resultData']['user'].roles[0]);
            if (res['resultData']['user'].roles[0] == "SPONSORUSER") {
                sessionStorage.setItem('sponsorId', res['resultData']['user'].sponsorId);
            }
            if (res['resultData']['user'].roles[0] == "SUPPORTUSER") {
                sessionStorage.setItem('sponsorId', res['resultData']['user'].sponsorId);
            }
        });
        return true;
    };
    AuthService.prototype.SignUp = function (postData) {
        //registraion api
    };
    AuthService.prototype.logOutAction = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //session/local storage clear
                    return [4 /*yield*/, sessionStorage.removeItem('userData')];
                    case 1:
                        //session/local storage clear
                        _a.sent();
                        return [4 /*yield*/, sessionStorage.clear()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, true];
                }
            });
        });
    };
    AuthService.prototype.getUserdata = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                userData = sessionStorage.getItem('userData');
                return [2 /*return*/, JSON.parse(userData)];
            });
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: "root"
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/data.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.host_url = "";
    }
    DataService.prototype.getUsersData = function () {
        return this.http.get(this.host_url + 'rest/SponsorUser/getAllSponsorUsers');
    };
    DataService.prototype.getSponserUser = function () {
        return this.http.get(this.host_url + "rest/sponsor/showAllSponsors");
    };
    // Post user
    DataService.prototype.postUsers = function (data) {
        return this.http.post(this.host_url + "rest/SponsorUser/createUser", data);
    };
    // Delet User
    DataService.prototype.deleteUsers = function (id) {
        return this.http.delete(this.host_url + 'rest/SponsorUser/deleteSponsorUser' + "/" + id);
    };
    DataService.prototype.updateUsers = function (data) {
        return this.http.put(this.host_url + "rest/SponsorUser/updateSponsorUser", data);
    };
    DataService.prototype.createSponsorDetails = function (sponsorData) {
        return this.http.post(this.host_url + "rest/sponsor/createSponsor", sponsorData);
    };
    DataService.prototype.setEthenic = function (ethenicData) {
        return this.http.post(this.host_url + "rest/ethnicGroups/save", ethenicData);
    };
    DataService.prototype.getEthenic = function () {
        return this.http.get(this.host_url + "rest/ethnicGroups/getAllEthnics");
    };
    //All status 
    DataService.prototype.getStatusData = function () {
        return this.http.get(this.host_url + "rest/Status/getAllStatus");
    };
    DataService.prototype.getSponsorsList = function () {
        return this.http.get(this.host_url + "rest/sponsor/showAllSponsors ");
    };
    // Post Status
    DataService.prototype.postStatus = function (data) {
        return this.http.post(this.host_url + "rest/Status/createStatus", data);
    };
    //Delete Status
    DataService.prototype.deleteStatus = function (id) {
        return this.http.delete(this.host_url + 'rest/Status/getStatusById' + "/" + id);
    };
    //Edit Status
    // editStatusData(data,id):Observable<any>{
    //   return this.http.put(rest/Status/updateStatus' +"/"+ id );
    // }
    //All SpecialEvent 
    DataService.prototype.getSpecialEvent = function () {
        return this.http.get(this.host_url + "rest/SpecialEvent/getSpecialEvents");
    };
    // Get SpecialEvent by Id
    DataService.prototype.getSpecialEventById = function (id) {
        return this.http.get(this.host_url + "rest/SpecialEvent/getSpecialEventById" + '/' + id);
    };
    // Post SpecialEvent
    DataService.prototype.postspecialEvent = function (data) {
        return this.http.post(this.host_url + "rest/SpecialEvent/createSpecialEvent", data);
    };
    //Update SpecialEvent
    DataService.prototype.updateEvents = function (data) {
        return this.http.put(this.host_url + 'rest/SpecialEvent/updateSpecialEvent', data);
    };
    //Delete SpecialEvent
    DataService.prototype.deleteEvent = function (id) {
        return this.http.delete(this.host_url + 'rest/SpecialEvent/deleteSpecialEvent' + "/" + id);
    };
    //sponsors details
    DataService.prototype.getAddressDetails = function (id) {
        return this.http.get(this.host_url + 'rest/sponsor/addresses/' + id);
    };
    DataService.prototype.getRulesDetails = function (id) {
        return this.http.get(this.host_url + 'rest/sponsor/rules/' + id);
    };
    DataService.prototype.getTestCodeDetails = function (id) {
        return this.http.get(this.host_url + 'rest/sponsor/testCodes/' + id);
    };
    DataService.prototype.getServiceRequestDetails = function (sponsorId) {
        return this.http.get(this.host_url + 'rest/endUsers/' + sponsorId);
    };
    DataService.prototype.getAllServiceRequestDetails = function () {
        return this.http.get(this.host_url + 'rest/endUsers/getAll');
    };
    DataService.prototype.createTestDetails = function (testCodeData) {
        return this.http.post(this.host_url + "rest/testCode/createTest", testCodeData);
    };
    DataService.prototype.getAllTestCodeDetails = function () {
        return this.http.get(this.host_url + 'rest/testCode/getAllTestCodes');
    };
    DataService.prototype.updateTestCodeDetails = function (testCodeData) {
        return this.http.put(this.host_url + 'rest/testCode/updateTestCode', testCodeData);
    };
    DataService.prototype.getMultiplepostCode = function () {
        return this.http.get(this.host_url + 'rest/PostalCode/getAllPostalCodes');
    };
    DataService.prototype.createRuleDetails = function (ruledata) {
        return this.http.post(this.host_url + "rest/rules/createRuleList", ruledata);
    };
    //Get All Postalcode 
    DataService.prototype.getAllPostalcode = function () {
        return this.http.get(this.host_url + "rest/PostalCode/getAllPostalCodes");
    };
    // Post Postalcode
    DataService.prototype.postPostalcode = function (data) {
        return this.http.post(this.host_url + "rest/PostalCode/createPostalCode", data);
    };
    //Update Postalcode
    DataService.prototype.updatePostalcode = function (data) {
        return this.http.put(this.host_url + 'rest/PostalCode/updatePostalCode', data);
    };
    //Delete Postalcode
    DataService.prototype.deletePostalcode = function (id) {
        return this.http.delete(this.host_url + 'rest/PostalCode/deletePostalCode' + "/" + id);
    };
    DataService.prototype.getPostCodeList = function (id) {
        return this.http.get(this.host_url + 'rest/sponsor/postCodes/' + id);
    };
    DataService.prototype.updateSelectedPostalCode = function (postCode, sponsorId) {
        return this.http.put(this.host_url + 'rest/sponsor/postCodes/update/' + sponsorId, postCode);
    };
    DataService.prototype.updateSelectedAddress = function (sponsorAddress) {
        return this.http.put(this.host_url + 'rest/sponsor/addresses/update', sponsorAddress);
    };
    //update ethenic
    DataService.prototype.editEthenicData = function () {
        return this.http.get(this.host_url + 'rest/ethnicGroups/getAllEthnicMapper');
    };
    DataService.prototype.editTestListData = function () {
        return this.http.get(this.host_url + 'rest/testCode/getAllTestCodesMapper');
    };
    DataService.prototype.updateEthenicData = function (ethinicData) {
        return this.http.put(this.host_url + 'rest/ethnicGroups/update', ethinicData);
    };
    DataService.prototype.getSponsorbyId = function (id) {
        return this.http.get(this.host_url + 'rest/sponsor/sponsorDetails/' + id);
    };
    DataService.prototype.getuserByid = function (id) {
        return this.http.get(this.host_url + 'rest/SponsorUser/getAllUsersBySponsorId/' + id);
    };
    DataService.prototype.updateSelectedRule = function (data) {
        return this.http.put(this.host_url + 'rest/sponsor/rules/update', data);
    };
    DataService.prototype.getSponsorUpdate = function (id) {
        return this.http.get(this.host_url + 'rest/sponsor/sponsorWithPostalCode/' + id);
    };
    DataService.prototype.updateSponsorDetails = function (data, id) {
        return this.http.put(this.host_url + 'rest/sponsor/sponsorWithPostalCode/' + id, data);
    };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Latest OBS\New folder (2)\New folder\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map