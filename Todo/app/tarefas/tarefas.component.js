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
var search_pipe_component_1 = require('../shared/utils/search-pipe.component');
var router_1 = require('@angular/router');
var TarefasComponent = (function () {
    function TarefasComponent(router, tarefaService) {
        this.router = router;
        this.tarefaService = tarefaService;
    }
    TarefasComponent.prototype.onSelect = function (tarefa) {
        this.selectedTarefa = tarefa;
        this.gotoDetail();
    };
    TarefasComponent.prototype.getTarefas = function () {
        var _this = this;
        this.tarefaService.getTarefas().then(function (tarefas) { return _this.tarefas = tarefas; });
    };
    TarefasComponent.prototype.ngOnInit = function () {
        this.getTarefas();
    };
    TarefasComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/tarefa', this.selectedTarefa.id]);
    };
    TarefasComponent.prototype.create = function () {
        this.router.navigate(['/tarefa']);
    };
    TarefasComponent = __decorate([
        core_1.Component({
            styleUrls: ['app/tarefas/tarefas.component.css'],
            selector: 'todas-tarefas',
            templateUrl: 'app/tarefas/tarefas.component.html',
            pipes: [search_pipe_component_1.FilterArrayPipe],
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.TarefaService])
    ], TarefasComponent);
    return TarefasComponent;
}());
exports.TarefasComponent = TarefasComponent;
//# sourceMappingURL=tarefas.component.js.map