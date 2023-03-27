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
var flower_1 = require('./flower');
var FlowerFeaturesComponent = (function () {
    function FlowerFeaturesComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', flower_1.Flower)
    ], FlowerFeaturesComponent.prototype, "flower", void 0);
    FlowerFeaturesComponent = __decorate([
        core_1.Component({
            selector: 'flower-features',
            template: "\n    <div *ngIf=\"flower\">\n      <h2>{{flower.flower_name}} Features!</h2>\n      <div><label>id: </label>{{flower.flower_id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"flower.flower_name\" placeholder=\"flower_name\"/>\n      </div>\n      <div><label>Price: </label>{{flower.flower_Price}}</div>\n    </div>\n    \n  ",
        }), 
        __metadata('design:paramtypes', [])
    ], FlowerFeaturesComponent);
    return FlowerFeaturesComponent;
}());
exports.FlowerFeaturesComponent = FlowerFeaturesComponent;
//# sourceMappingURL=flower-features.component.js.map