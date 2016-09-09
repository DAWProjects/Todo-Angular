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
var ProjectoService = (function () {
    function ProjectoService(http, configService) {
        this.http = http;
        this.configService = configService;
        this.headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        this.projectosUrl = '';
        this.projectosUrl = configService.getApiURI();
    }
    ProjectoService.prototype.getProjectos = function () {
        return this.http.get(this.projectosUrl + 'todos-projectos')
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ;
    ProjectoService.prototype.update = function (projecto) {
        var url = this.projectosUrl + "todos-projectos/" + projecto.id;
        return this.http
            .put(url, JSON.constructor(projecto), { headers: this.headers })
            .toPromise()
            .then(function () { return projecto; })
            .catch(this.handleError);
    };
    ProjectoService.prototype.create = function (projecto) {
        var url = "" + (this.projectosUrl + 'criar-projecto');
        return this.http
            .post(url, JSON.constructor(projecto), { headers: this.headers })
            .toPromise()
            .then(function () { return projecto; })
            .catch(this.handleError);
    };
    ProjectoService.prototype.getProjectosSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            return setTimeout(resolve, 2000);
        }) // delay 2 seconds
            .then(function () { return _this.getProjectos(); });
    };
    ;
    ProjectoService.prototype.getProjecto = function (id) {
        return this.getProjectos()
            .then(function (projectos) { return projectos.find(function (projecto) { return projecto.id === id; }); });
    };
    ;
    ProjectoService.prototype.handleError = function (error) {
        console.error('Ocorreu um erro', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    ProjectoService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object, config_service_1.ConfigService])
    ], ProjectoService);
    return ProjectoService;
    var _a;
}());
exports.ProjectoService = ProjectoService;
//# sourceMappingURL=projecto.service.js.map