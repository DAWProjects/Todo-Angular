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
var TarefaComponent = (function () {
    function TarefaComponent(tarefaService, route, membroService) {
        this.tarefaService = tarefaService;
        this.route = route;
        this.membroService = membroService;
        this.creating = false;
    }
    ;
    TarefaComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.tarefaService.getTarefa(id)
                .then(function (tarefa) { return _this.tarefa = tarefa; });
        });
        this.getMembros();
    };
    TarefaComponent.prototype.voltar = function () {
        window.history.back();
    };
    ;
    TarefaComponent.prototype.save = function () {
        this.tarefaService.update(this.tarefa)
            .then(this.voltar);
    };
    TarefaComponent.prototype.add = function (titulo, data_criacao, data_entrega_desejada, estado, membro) {
        this.creating = true;
        if (titulo == '')
            return;
        this.tarefa = new index_1.Tarefa(membro, titulo, data_criacao, data_entrega_desejada, null, estado);
        this.tarefa.membro_id = membro;
        this.tarefaService.create(this.tarefa).then(this.voltar);
    };
    TarefaComponent.prototype.getMembros = function () {
        var _this = this;
        this.membroService.getMembros().then(function (membros) { return _this.membros = membros; });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Tarefa)
    ], TarefaComponent.prototype, "tarefa", void 0);
    TarefaComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'show-tarefa',
            templateUrl: 'tarefa.component.html',
            styleUrls: ['tarefa.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.TarefaService, (typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object, membro_service_1.MembroService])
    ], TarefaComponent);
    return TarefaComponent;
    var _a;
}());
exports.TarefaComponent = TarefaComponent;
//# sourceMappingURL=tarefa.component.js.map