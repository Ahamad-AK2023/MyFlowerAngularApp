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
var flower_service_1 = require('./flower.service');
var FlowersComponent = (function () {
    function FlowersComponent(router, flowerService) {
        this.router = router;
        this.flowerService = flowerService;
    }
    FlowersComponent.prototype.getFlowers = function () {
        var _this = this;
        this.flowerService.getFlowers().then(function (flowers) { return _this.flowers = flowers; });
    };
    FlowersComponent.prototype.ngOnInit = function () {
        this.getFlowers();
    };
    FlowersComponent.prototype.onSelect = function (flower) {
        this.selectedFlower = flower;
    };
    FlowersComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/detail', this.selectedFlower.flower_id]);
    };
    FlowersComponent.prototype.add = function (flower_name) {
        var _this = this;
        flower_name = flower_name.trim();
        if (!flower_name) {
            return;
        }
        this.flowerService.create(flower_name)
            .then(function (flower) {
            _this.flowers.push(flower);
            _this.selectedFlower = null;
        });
    };
    FlowersComponent.prototype.delete = function (flower) {
        var _this = this;
        this.flowerService
            .delete(flower.flower_id)
            .then(function () {
            _this.flowers = _this.flowers.filter(function (fl) { return fl !== flower; });
            if (_this.selectedFlower === flower) {
                _this.selectedFlower = null;
            }
        });
    };
    FlowersComponent = __decorate([
        core_1.Component({
            selector: 'my-flowers',
            templateUrl: './flowers.component.html',
            styleUrls: ['./flowers.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, flower_service_1.FlowerService])
    ], FlowersComponent);
    return FlowersComponent;
}());
exports.FlowersComponent = FlowersComponent;
//# sourceMappingURL=flowers.component.js.map