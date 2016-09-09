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
var tarefa_service_1 = require('../tarefas/shared/tarefa.service');
var membro_service_1 = require('../membros/shared/membro.service');
var router_1 = require('@angular/router');
var projecto_service_1 = require("../projectos/shared/projecto.service");
var search_pipe_component_1 = require('../shared/utils/search-pipe.component');
var DashboardComponent = (function () {
    function DashboardComponent(router, tarefaService, membroService, projectoService) {
        this.router = router;
        this.tarefaService = tarefaService;
        this.membroService = membroService;
        this.projectoService = projectoService;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tarefaService.getTarefas()
            .then(function (tarefas) { return _this.tarefas = tarefas; });
        this.membroService.getMembros()
            .then(function (membros) { return _this.membros = membros; });
        this.projectoService.getProjectos()
            .then(function (projectos) { return _this.projectos = projectos; });
    };
    DashboardComponent.prototype.gotoDetail = function (tipo, id) {
        var link = ['/' + tipo, id];
        this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            templateUrl: 'app/dashboard/dashboard.component.html',
            styleUrls: ['app/dashboard/dashboard.component.css'],
            pipes: [search_pipe_component_1.FilterArrayPipe]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof router_1.Router !== 'undefined' && router_1.Router) === 'function' && _a) || Object, tarefa_service_1.TarefaService, membro_service_1.MembroService, projecto_service_1.ProjectoService])
    ], DashboardComponent);
    return DashboardComponent;
    var _a;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map