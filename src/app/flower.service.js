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
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var FlowerService = (function () {
    function FlowerService(http) {
        this.http = http;
        this.flowersUrl = 'api/flowers'; // URL to web api
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
    }
    FlowerService.prototype.getFlowers = function () {
        return this.http.get(this.flowersUrl)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    FlowerService.prototype.getFlowersSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simulate server latency with 2 second delay
            setTimeout(function () { return resolve(_this.getFlowers()); }, 2000);
        });
    };
    FlowerService.prototype.getFlower = function (flower_id) {
        var url = this.flowersUrl + "/" + flower_id;
        return this.http.get(url)
            .toPromise()
            .then(function (response) { return response.json().data; })
            .catch(this.handleError);
    };
    FlowerService.prototype.handleError = function (error) {
        console.error('An error occurred my flower application In memory service', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    FlowerService.prototype.update = function (flower) {
        var url = this.flowersUrl + "/" + flower.flower_id;
        return this.http
            .put(url, JSON.stringify(flower), { headers: this.headers })
            .toPromise()
            .then(function () { return flower; })
            .catch(this.handleError);
    };
    FlowerService.prototype.create = function (flower_name) {
        return this.http
            .post(this.flowersUrl, JSON.stringify({ flower_name: flower_name }), { headers: this.headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    FlowerService.prototype.delete = function (flower_id) {
        var url = this.flowersUrl + "/" + flower_id;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(function () { return null; })
            .catch(this.handleError);
    };
    FlowerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], FlowerService);
    return FlowerService;
}());
exports.FlowerService = FlowerService;
//# sourceMappingURL=flower.service.js.map