"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var common_1 = require('@angular/common');
require('rxjs/add/operator/switchMap');
var flower_service_1 = require('./flower.service');
var FlowerFeaturesComponent = (function () {
    function FlowerFeaturesComponent(flowerService, route, location) {
        this.flowerService = flowerService;
        this.route = route;
        this.location = location;
    }
    FlowerFeaturesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.flowerService.getFlower(+params['flower_id']); })
            .subscribe(function (flower) { return _this.flower = flower; });
    };
    FlowerFeaturesComponent.prototype.goBack = function () {
        this.location.back();
    };
    FlowerFeaturesComponent.prototype.save = function () {
        var _this = this;
        this.flowerService.update(this.flower)
            .then(function () { return _this.goBack(); });
    };
    FlowerFeaturesComponent = __decorate([
        core_1.Component({
            selector: 'flower-features',
            templateUrl: './flower-features.component.html',
            styleUrls: ['./flower-features.component.css']
        }), 
        __metadata('design:paramtypes', [flower_service_1.FlowerService, router_1.ActivatedRoute, common_1.Location])
    ], FlowerFeaturesComponent);
    return FlowerFeaturesComponent;
}());
exports.FlowerFeaturesComponent = FlowerFeaturesComponent;
//# sourceMappingURL=flower-features.component.js.map