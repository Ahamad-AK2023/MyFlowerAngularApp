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
var Flower = (function () {
    function Flower() {
    }
    return Flower;
}());
exports.Flower = Flower;
var FLOWERS = [
    {
        flower_id: 1,
        flower_name: 'Rose',
        flower_Desc: ' Roses have been naturally growing for over 35 million years! However, they were not known to be cultivated until about 5,000 years ago.',
    },
    {
        flower_id: 2,
        flower_name: 'Sunflower',
        flower_Desc: 'Sunflowers are one of the most popular flower types and are best known for their dazzling yellow color and large size.',
    },
    {
        flower_id: 3,
        flower_name: 'Lavender',
        flower_Desc: 'Lavender are sweet herb garden favorites that provide soothing fragrances, flavorings, and beauty all together in little floral packages.',
    },
    {
        flower_id: 4,
        flower_name: 'Orchid',
        flower_Desc: 'Orchids are one of the oldest flowering plants known to man? Scientists speculate that orchids have been around as long as 100 million years.',
    },
    {
        flower_id: 5,
        flower_name: 'Tulip',
        flower_Desc: 'Like most common flowers, tulips come in a wide variety of colors and shapes, each of which has its own meaning.',
    },
    {
        flower_id: 6,
        flower_name: 'Marigold',
        flower_Desc: 'Beautifully orange and gold in color, marigolds symbolize a desire for wealth and success.',
    },
    {
        flower_id: 7,
        flower_name: 'Peony',
        flower_Desc: 'Peonies, a beloved flower that blooms in late spring/early summer, come in a wide variety of colors.',
    },
    {
        flower_id: 8,
        flower_name: 'Dahlia',
        flower_Desc: 'These attractive blooms come in a wide range of colors and can be easily incorporated into any existing or new garden',
    },
    {
        flower_id: 9,
        flower_name: 'Daffodil',
        flower_Desc: 'Daffodils go by many names depending on the species and variety — narcissus, jonquils, or paperwhites — but they are all daffodils and they all belong to the genus Narcissus.',
    },
    {
        flower_id: 10,
        flower_name: 'Zinnia ',
        flower_Desc: 'Colorful, easy-to-grow zinnias are a beginner gardener’s dream. ',
    },
];
var AppComponent = (function () {
    function AppComponent() {
        this.MyPageHeader = 'Tour of Beautiful flowers';
        this.flower = {
            flower_id: 1,
            flower_name: 'Jasmine',
            flower_Desc: 'The main reason jasmine is so famous is its strong fragrance.',
        };
        this.flowers = FLOWERS;
    }
    AppComponent.prototype.onSelect = function (flower) {
        this.selectedFlower = flower;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n    <h1>{{MyPageHeader}}</h1>\n    <h2>{{flower.flower_name}} details!</h2>\n    <div><label>id: </label>{{flower.flower_id}}</div>\n    <div>\n      <label>name: </label>\n      <input [(ngModel)]=\"flower.flower_name\" placeholder=\"flower_name\"><br>\n      \n    </div>\n    <div>\n    <label>Decription: {{flower.flower_Desc}}</label>\n    </div>\n\n    <h2>My Flowers</h2>\n    <ul class=\"flowers\">\n      <li *ngFor=\"let flower of flowers\"\n        [class.selected]=\"flower === selectedFlower\"\n        (click)=\"onSelect(flower)\">\n        <span class=\"badge\">{{flower.flower_id}}</span> {{flower.flower_name}}\n      </li>\n    </ul>\n    <div *ngIf=\"selectedFlower\">\n      <h2>{{selectedFlower.flower_name}} details!</h2>\n      <div><label>id: </label>{{selectedFlower.flower_id}}</div>\n      <div>\n        <label>name: </label>\n        <input [(ngModel)]=\"selectedFlower.flower_name\" placeholder=\"flower_name2\"/>\n      </div>\n      <h2>Description : {{selectedFlower.flower_Desc}}</h2>\n    </div>\n   \n    ", styles: ["\n    .selected {\n      background-color: #CFD8DC !important;\n      color: white;\n    }\n    .flowers {\n      margin: 0 0 2em 0;\n      list-style-type: none;\n      padding: 0;\n      width: 15em;\n    }\n    .flowers li {\n      cursor: pointer;\n      position: relative;\n      left: 0;\n      background-color: #EEE;\n      margin: .5em;\n      padding: .3em 0;\n      height: 1.6em;\n      border-radius: 4px;\n    }\n    .flowers li.selected:hover {\n      background-color: #BBD8DC !important;\n      color: white;\n    }\n    .flowers li:hover {\n      color: #607D8B;\n      background-color: #DDD;\n      left: .1em;\n    }\n    .flowers .text {\n      position: relative;\n      top: -3px;\n    }\n    .flowers .badge {\n      display: inline-block;\n      font-size: small;\n      color: white;\n      padding: 0.8em 0.7em 0 0.7em;\n      background-color: #607D8B;\n      line-height: 1em;\n      position: relative;\n      left: -1px;\n      top: -4px;\n      height: 1.8em;\n      margin-right: .8em;\n      border-radius: 4px 0 0 4px;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map