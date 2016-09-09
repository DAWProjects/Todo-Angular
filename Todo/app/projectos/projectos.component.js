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
var index_1 = require('./shared/index');
var router_1 = require('@angular/router');
var ProjectosComponent = (function () {
    function ProjectosComponent(router, tarefaService) {
        this.router = router;
        this.tarefaService = tarefaService;
    }
    ProjectosComponent.prototype.onSelect = function (projecto) {
        this.selectedProjecto = projecto;
        this.gotoDetail('projecto', projecto.id);
    };
    ProjectosComponent.prototype.getProjectos = function () {
        var _this = this;
        this.tarefaService.getProjectos().then(function (projectos) { return _this.projectos = projectos; });
    };
    ProjectosComponent.prototype.ngOnInit = function () {
        this.getProjectos();
    };
    ProjectosComponent.prototype.gotoDetail = function (tipo, id) {
        this.router.navigate(['/' + tipo, id]);
    };
    ProjectosComponent.prototype.create = function () {
        this.router.navigate(['/projecto']);
    };
    ProjectosComponent.prototype.onSelectMembro = function (membro) {
        this.selectedMembro = membro;
        this.gotoDetail('membro', membro.id);
    };
    ProjectosComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            styleUrls: ['projectos.component.css'],
            selector: 'todos-projectos',
            templateUrl: 'projectos.component.html',
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, index_1.ProjectoService])
    ], ProjectosComponent);
    return ProjectosComponent;
    var _a;
}());
exports.ProjectosComponent = ProjectosComponent;
//# sourceMappingURL=projectos.component.js.map