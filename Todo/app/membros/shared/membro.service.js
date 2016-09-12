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
var config_service_1 = require("../../shared/utils/config.service");
var MembroService = (function () {
    function MembroService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.membrosUrl = '';
        this.membrosUrl = configService.getApiURI();
    }
    MembroService.prototype.getMembros = function () {
        return this.http.get(this.membrosUrl + 'todos-membros')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    MembroService.prototype.update = function (membro) {
        var url = this.membrosUrl + "todos-membros/" + membro.id;
        return this.http
            .put(url, JSON.constructor(membro), { headers: this.headers })
            .toPromise()
            .then(function () { return membro; })
            .catch(this.handleError);
    };
    MembroService.prototype.create = function (membro) {
        var url = "" + (this.membrosUrl + 'criar-membro');
        return this.http
            .post(url, JSON.constructor(tarefa), { headers: this.headers })
            .toPromise()
            .then(function () { return tarefa; })
            .catch(this.handleError);
    };
    MembroService.prototype.getMembroSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 seconds
            .then(function () { return _this.getMembros(); });
    };
    ;
    MembroService.prototype.getMembro = function (id) {
        return this.getMembros()
            .then(function (membros) { return membros.find(function (membro) { return membro.id === id; }); });
    };
    ;
    MembroService.prototype.handleError = function (error) {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    MembroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, config_service_1.ConfigService])
    ], MembroService);
    return MembroService;
}());
exports.MembroService = MembroService;
//# sourceMappingURL=membro.service.js.map