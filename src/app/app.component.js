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
var flower_service_1 = require('./flower.service');
var AppComponent = (function () {
    function AppComponent(flowerService) {
        this.flowerService = flowerService;
        this.MyPageHeader = 'Tour of Beautiful flowers';
        this.flower = {
            flower_id: 1,
            flower_name: 'Jasmine',
            flower_Desc: 'The main reason jasmine is so famous is its strong fragrance.',
            flower_Price: '8$'
        };
    }
    AppComponent.prototype.getFlowers = function () {
        var _this = this;
        this.flowerService.getFlowers().then(function (flowers) { return _this.flowers = flowers; });
    };
    AppComponent.prototype.ngOnInit = function () {
        this.getFlowers();
    };
    AppComponent.prototype.onSelect = function (flower) {
        this.selectedFlower = flower;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{MyPageHeader}}</h1>\n    <h2>{{flower.flower_name}} details!</h2>\n    <div><label>id: </label>{{flower.flower_id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"flower.flower_name\" placeholder=\"flower_name\"><br>\n      \n    </div>\n    <div>\n    <label>Decription: {{flower.flower_Desc}}</label>\n    </div>\n\n    <h2>My Flowers</h2>\n    <ul class=\"flowers\">\n      <li *ngFor=\"let flower of flowers\"\n        [class.selected]=\"flower === selectedFlower\"\n        (click)=\"onSelect(flower)\">\n        <span class=\"badge\">{{flower.flower_id}}</span> {{flower.flower_name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedFlower\">\n      <h2>{{selectedFlower.flower_name}} details!</h2>\n      <div><label>id: </label>{{selectedFlower.flower_id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedFlower.flower_name\" placeholder=\"flower_name2\"/>\n      </div>\n      <h2>Description : {{selectedFlower.flower_Desc}}</h2>\n    </div>\n    <flower-features [flower]=\"selectedFlower\"></flower-features>\n   \n    ",
            styles: [
                "\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .flowers {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .flowers li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .flowers li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .flowers li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .flowers .text {\n      position: relative;\n      top: -3px;\n    }\n    .flowers .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  ",
            ],
            providers: [flower_service_1.FlowerService]
        }), 
        __metadata('design:paramtypes', [flower_service_1.FlowerService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map