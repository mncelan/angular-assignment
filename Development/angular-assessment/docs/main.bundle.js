webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <nav class=\"col-sm-3 col-md-2 hidden-xs-down bg-faded sidebar\">\n      <ul class=\"nav nav-pills flex-column\">\n        <li class=\"nav-item\">\n          <div class=\"navbar navbar-dark bg-dark\">Select Crocery Category\n            <span class=\"sr-only\">(current)</span>\n          </div>\n        </li>\n        <li class=\"nav-item\" *ngFor=\"let crocery of croceries\">\n          <a class=\"nav-link\" data-toggle=\"tab\" [routerLink]=\"['/categories/view/',crocery.id]\">\n             {{crocery.description}}\n          </a>\n         \n        </li>\n      </ul>\n    </nav>\n  </div>\n\n  <router-outlet></router-outlet>\n\n\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_crocery_service__ = __webpack_require__("../../../../../src/app/services/crocery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(croceryService, router) {
        this.croceryService = croceryService;
        this.router = router;
        this.croceries = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getCrocery();
    };
    AppComponent.prototype.getCrocery = function () {
        var _this = this;
        this.croceryService.getCroceries().subscribe(function (croceryData) {
            _this.croceries = croceryData.slice(0, 6);
            console.log("Getting groceries");
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_crocery_service__["a" /* CroceryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_crocery_service__["a" /* CroceryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular_in_memory_web_api__ = __webpack_require__("../../../../angular-in-memory-web-api/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_in_memory_catery_service__ = __webpack_require__("../../../../../src/app/services/in-memory-catery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_crocery_service__ = __webpack_require__("../../../../../src/app/services/crocery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__category_category_module__ = __webpack_require__("../../../../../src/app/category/category.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClientModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_7__category_category_module__["a" /* CategoryModule */],
            __WEBPACK_IMPORTED_MODULE_3_angular_in_memory_web_api__["a" /* HttpClientInMemoryWebApiModule */].forRoot(__WEBPACK_IMPORTED_MODULE_4__services_in_memory_catery_service__["a" /* InMemoryCategoryService */], { dataEncapsulation: false })
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__services_crocery_service__["a" /* CroceryService */],
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/category/category-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__category_component__ = __webpack_require__("../../../../../src/app/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_category_view_category_component__ = __webpack_require__("../../../../../src/app/category/view-category/view-category.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    {
        path: 'categories', component: __WEBPACK_IMPORTED_MODULE_2__category_component__["a" /* CategoryComponent */],
        children: [
            { path: "", redirectTo: 'categories', pathMatch: "full" },
            { path: "view/:id", component: __WEBPACK_IMPORTED_MODULE_3__view_category_view_category_component__["a" /* ViewCategoryComponent */] },
        ]
    }
];
var CategoryRoutingModule = (function () {
    function CategoryRoutingModule() {
    }
    return CategoryRoutingModule;
}());
CategoryRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
    })
], CategoryRoutingModule);

//# sourceMappingURL=category-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/category/category.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/category/category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category/category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CategoryComponent = (function () {
    function CategoryComponent() {
    }
    return CategoryComponent;
}());
CategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        template: __webpack_require__("../../../../../src/app/category/category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/category/category.component.scss")]
    })
], CategoryComponent);

//# sourceMappingURL=category.component.js.map

/***/ }),

/***/ "../../../../../src/app/category/category.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__view_category_view_category_component__ = __webpack_require__("../../../../../src/app/category/view-category/view-category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__category_component__ = __webpack_require__("../../../../../src/app/category/category.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__category_routing_module__ = __webpack_require__("../../../../../src/app/category/category-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__input_component__ = __webpack_require__("../../../../../src/app/input.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var CategoryModule = (function () {
    function CategoryModule() {
    }
    return CategoryModule;
}());
CategoryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["e" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_4__category_routing_module__["a" /* CategoryRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["a" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_forms__["b" /* FormsModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__category_component__["a" /* CategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_2__view_category_view_category_component__["a" /* ViewCategoryComponent */],
            __WEBPACK_IMPORTED_MODULE_5__input_component__["a" /* InputComponent */]
        ]
    })
], CategoryModule);

//# sourceMappingURL=category.module.js.map

/***/ }),

/***/ "../../../../../src/app/category/view-category/view-category.component.html":
/***/ (function(module, exports) {

module.exports = "<main class=\"col-sm-9 offset-sm-3 col-md-10 offset-md-2 pt-3\">\n    <h2>{{ crocery?.description }} </h2>\n    <div class=\"d-flex flex-row-reverse\">\n        <a class=\"p-2\" href=\"javascript:void(0)\" title=\"deleting this category, can't be undone\" (click)=\"deleteCategory()\">Delete Category</a>\n\n    </div>\n  \n    <input-comp (addRowEvent)=\"addRow($event)\" [editing]=\"editableItem\" (editRowEvent)=\"edit($event)\"></input-comp>\n\n    <table class=\"table\">\n        <thead>\n            <tr>\n                <th>Item</th>\n                <th>Quantity</th>\n                <th>Price</th>\n                <th>&nbsp;</th>\n            </tr>\n        </thead>\n        <tbody>\n            <tr *ngFor=\"let item of items; let index=index;\">\n                <td>{{item.item}} </td>\n                <td>{{item.quantity}} </td>\n                <td>{{item.price}} </td>\n                <td>\n                    <button class=\"btn btn-primary mb-2\" title=\"edit item\" (click)=\"doEdit(index)\">Edit</button>\n                    <button class=\"btn btn-primary mb-2\" title=\"delete item\" (click)=\"delete(index)\">Delete</button>\n                </td>\n            </tr>\n        </tbody>\n    </table>\n\n    <button class=\"btn btn-primary mb-2\" (click)=\"save()\" [disabled]=\"!canSave\">Save</button>\n</main>"

/***/ }),

/***/ "../../../../../src/app/category/view-category/view-category.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category/view-category/view-category.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_crocery__ = __webpack_require__("../../../../../src/app/services/crocery.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_crocery_service__ = __webpack_require__("../../../../../src/app/services/crocery.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewCategoryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ViewCategoryComponent = (function () {
    function ViewCategoryComponent(activateRoute, router, croceryService, formBuilder) {
        this.activateRoute = activateRoute;
        this.router = router;
        this.croceryService = croceryService;
        this.formBuilder = formBuilder;
        this.crocery = new __WEBPACK_IMPORTED_MODULE_2__services_crocery__["a" /* Crocery */]();
        this.canSave = false;
    }
    ViewCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.debug("params", this.activateRoute.params);
        this.activateRoute.params.subscribe(function (params) {
            _this.getCategoryByID(+params['id']);
        });
        this.formArray = this.formBuilder.array([]);
        this.formArray.valueChanges.subscribe(function (value) {
            console.debug("vlaues > ", value);
            _this.canSave = (_this.formArray.valid && _this.formArray.length > 0) ? true : false;
        });
    };
    //Adding items to a table row
    ViewCategoryComponent.prototype.addRow = function (rowData) {
        var formGroup = this.formBuilder.group({
            item: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            quantity: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            price: [null]
        });
        formGroup.patchValue(rowData);
        this.formArray.push(formGroup);
        console.debug("logic to add row, item >> ", formGroup.value, " values >>", this.formArray.value);
        this.items = this.formArray.value;
    };
    ViewCategoryComponent.prototype.getCategoryByID = function (id) {
        var _this = this;
        console.debug("find category by id", id);
        this.croceryService.getCroceryByID(id).subscribe(function (crocery) {
            console.log("category > ", crocery);
            _this.crocery = crocery;
        });
    };
    ViewCategoryComponent.prototype.save = function () {
        if (this.formArray.valid && this.formArray.length > 0) {
            console.debug("saving items >>", this.formArray.value);
            this.crocery.items = this.formArray.value;
            this.croceryService.updateHero(this.crocery).subscribe(function (crocery) {
                console.debug("saved", crocery);
            });
        }
    };
    ViewCategoryComponent.prototype.delete = function (index) {
        var _this = this;
        this.formArray.value.forEach(function (item, itemIndex) {
            if (index === itemIndex) {
                var removedItem = _this.items[itemIndex];
                _this.items.splice(index, 1);
                _this.formArray.removeAt(index);
                console.debug("removed item ", removedItem);
            }
        });
    };
    ViewCategoryComponent.prototype.doEdit = function (index) {
        var _this = this;
        this.formArray.value.forEach(function (item, itemIndex) {
            if (index === itemIndex) {
                _this.editableItem = { index: itemIndex, item: _this.items[itemIndex] };
            }
        });
    };
    ViewCategoryComponent.prototype.edit = function (item) {
        console.debug("edited ", "new ", item, " old ", this.editableItem);
        this.formArray.at(item.index).patchValue(item.item);
        this.items = this.formArray.value;
        this.editableItem = null;
    };
    ViewCategoryComponent.prototype.deleteCategory = function () {
        var _this = this;
        var r = confirm("Are you sure you want to delete this crocery :" + this.crocery.description);
        if (r == true) {
            this.croceryService.deleteCrocery(this.crocery).subscribe(function (response) {
                _this.router.navigate(["/"]);
            }, function (error) {
                alert("Failed to delete crocery error" + error.errorMessage);
            });
        }
        else {
        }
        //TODO:refresh the nav bar when deleting a category
    };
    return ViewCategoryComponent;
}());
ViewCategoryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        template: __webpack_require__("../../../../../src/app/category/view-category/view-category.component.html"),
        styles: [__webpack_require__("../../../../../src/app/category/view-category/view-category.component.scss")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["b" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__services_crocery_service__["a" /* CroceryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_crocery_service__["a" /* CroceryService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _d || Object])
], ViewCategoryComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=view-category.component.js.map

/***/ }),

/***/ "../../../../../src/app/input.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InputComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InputComponent = (function () {
    function InputComponent(formBuilder) {
        this.formBuilder = formBuilder;
        //using get/set so I can trakc changes to the @input since the parent container has the array of items captured by child
        //could have used a service or expanded element to manage it's self, but wanted to expirement with other ideas
        this._editing = null;
        this.addRowEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]();
        this.editRowEvent = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]();
        this.formGroup = this.formBuilder.group({
            item: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            quantity: [null, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            price: [null]
        });
    }
    Object.defineProperty(InputComponent.prototype, "editing", {
        get: function () {
            return this._editing;
        },
        set: function (item) {
            this._editing = item;
            if (this._editing != undefined && this._editing != null) {
                this.formGroup.patchValue(this._editing.item);
            }
        },
        enumerable: true,
        configurable: true
    });
    InputComponent.prototype.addRow = function () {
        console.debug("emit > ", this.formGroup);
        this.addRowEvent.emit(this.formGroup.value);
        this.formGroup.reset();
    };
    InputComponent.prototype.editRow = function () {
        this.editRowEvent.emit({ index: this._editing.index, item: this.formGroup.value });
        this.formGroup.reset();
    };
    return InputComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]) === "function" && _a || Object)
], InputComponent.prototype, "addRowEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Output */])(),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["h" /* EventEmitter */]) === "function" && _b || Object)
], InputComponent.prototype, "editRowEvent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["q" /* Input */])(),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [Object])
], InputComponent.prototype, "editing", null);
InputComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Component */])({
        selector: "input-comp",
        template: "\n    \n  <form class=\"form-inline\" [formGroup]='formGroup'>\n        <div class=\"form-group mb-2\">\n            <label for=\"item\" class=\"sr-only\">Item</label>\n            <input type=\"text\" formControlName=\"item\" class=\"form-control\" id=\"item\" placeholder=\"Item\">\n        </div>\n        <div class=\"form-group mb-1\">\n        <label for=\"quantity\" class=\"sr-only\">Quantity</label>\n        <input type=\"number\" formControlName=\"quantity\" class=\"form-control\" id=\"quantity\" placeholder=\"Quantity\">\n        </div> \n        <div class=\"form-group mx-sm-3 mb-2\">\n            <label for=\"price\" class=\"sr-only\">Price</label>\n            <input type=\"number\" formControlName=\"price\" class=\"form-control\" id=\"price\" placeholder=\"Price\">\n        </div>\n\n  <button type=\"button\" class=\"btn btn-primary mb-2\" [disabled]=\"!formGroup.valid\" (click)=\"addRow()\" *ngIf='editing==null'>Add Item</button>\n  <button type=\"button\" class=\"btn btn-primary mb-2\" [disabled]=\"!formGroup.valid\" (click)=\"editRow()\" *ngIf='editing!=null'>Edit Item</button>\n\n</form>\n\n\n  "
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _c || Object])
], InputComponent);

var _a, _b, _c;
//# sourceMappingURL=input.component.js.map

/***/ }),

/***/ "../../../../../src/app/services/crocery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/@angular/common/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CroceryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var CroceryService = (function () {
    function CroceryService(http) {
        this.http = http;
        this.croceryUrl = 'api/croceries';
    }
    /** GET heroes from the server */
    CroceryService.prototype.getCroceries = function () {
        return this.http.get(this.croceryUrl);
    };
    CroceryService.prototype.getCroceryByID = function (id) {
        // debugger;
        return this.http.get(this.croceryUrl + "/" + id);
    };
    /** POST: add crocery*/
    CroceryService.prototype.addCrocery = function (crocery) {
        return this.http.post(this.croceryUrl, crocery, httpOptions);
    };
    /** DELETE crocery */
    CroceryService.prototype.deleteCrocery = function (crocery) {
        var id = typeof crocery === 'number' ? crocery : crocery.id;
        var url = this.croceryUrl + "/" + id;
        return this.http.delete(url, httpOptions);
    };
    /** PUT: insert crocery */
    CroceryService.prototype.updateHero = function (crocery) {
        return this.http.put(this.croceryUrl, crocery, httpOptions);
    };
    return CroceryService;
}());
CroceryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpClient */]) === "function" && _a || Object])
], CroceryService);

var _a;
//# sourceMappingURL=crocery.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/crocery.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Crocery; });
var Crocery = (function () {
    function Crocery() {
    }
    return Crocery;
}());

//# sourceMappingURL=crocery.js.map

/***/ }),

/***/ "../../../../../src/app/services/in-memory-catery.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InMemoryCategoryService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var InMemoryCategoryService = (function () {
    function InMemoryCategoryService() {
    }
    /**
     * Retrieve list of crocery category
     */
    InMemoryCategoryService.prototype.createDb = function () {
        var croceries = [
            { id: 1,
                description: 'Kitchen Items' },
            { id: 2,
                description: 'Cosmetics' },
            { id: 3,
                description: 'Cleaning' },
            { id: 4,
                description: 'Toiletries' },
            { id: 5,
                description: 'Clothing' },
            { id: 6, description: 'Fruits and Veg'
            },
        ];
        return { croceries: croceries };
    };
    return InMemoryCategoryService;
}());
InMemoryCategoryService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], InMemoryCategoryService);

//# sourceMappingURL=in-memory-catery.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map