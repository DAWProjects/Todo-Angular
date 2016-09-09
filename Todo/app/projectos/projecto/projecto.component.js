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
var index_1 = require('../shared/index');
var membro_service_1 = require("../../membros/shared/membro.service");
var ProjectoComponent = (function () {
    function ProjectoComponent(projectoService, route, membroService) {
        this.projectoService = projectoService;
        this.route = route;
        this.membroService = membroService;
        this.creating = false;
    }
    ;
    ProjectoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.projectoService.getProjecto(id)
                .then(function (projecto) { return _this.projecto = projecto; });
        });
        this.getMembros();
    };
    ProjectoComponent.prototype.voltar = function () {
        window.history.back();
    };
    ;
    ProjectoComponent.prototype.save = function () {
        this.projectoService.update(this.projecto)
            .then(this.voltar);
    };
    ProjectoComponent.prototype.add = function (nome, data_inicio, data_fim, estado) {
        this.creating = true;
        this.projecto = new index_1.Projecto(nome, data_inicio, data_fim, estado);
        this.projectoService.create(this.projecto).then(this.voltar);
        this.creating = false;
    };
    ProjectoComponent.prototype.getMembros = function () {
        var _this = this;
        this.membroService.getMembros().then(function (membros) { return _this.membros = membros; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Projecto)
    ], ProjectoComponent.prototype, "projecto", void 0);
    ProjectoComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'show-projecto',
            templateUrl: 'projecto.component.html',
            styleUrls: ['projecto.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.ProjectoService, (typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, membro_service_1.MembroService])
    ], ProjectoComponent);
    return ProjectoComponent;
    var _a;
}());
exports.ProjectoComponent = ProjectoComponent;
//# sourceMappingURL=projecto.component.js.map