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
var MembroComponent = (function () {
    function MembroComponent(membroService, route) {
        this.membroService = membroService;
        this.route = route;
    }
    ;
    MembroComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.forEach(function (params) {
            var id = +params['id'];
            _this.membroService.getMembro(id)
                .then(function (hero) { return _this.membro = hero; });
        });
    };
    MembroComponent.prototype.goBack = function () {
        window.history.back();
    };
    ;
    // add(titulo: string,
    //     data_criacao: Date,
    //     data_entrega_desejada: Date,
    //     estado: string, membro: number): void {
    //     this.creating = true;
    //     if (titulo == '')
    //         return;
    //
    //     this.tarefa = new Tarefa(membro, titulo, data_criacao, data_entrega_desejada, null,
    //         estado);
    //     this.tarefa.membro_id = membro;
    //
    //     this.tarefaService.create(this.tarefa).then(this.voltar);
    // }
    MembroComponent.prototype.voltar = function () {
        window.history.back();
    };
    ;
    __decorate([
        core_1.Input(), 
        __metadata('design:type', index_1.Membro)
    ], MembroComponent.prototype, "membro", void 0);
    MembroComponent = __decorate([
        core_1.Component({
            selector: 'membro-detail',
            templateUrl: 'app/membros/membro/membro.component.html',
            styleUrls: ['app/membros/membro/membro.component.css']
        }), 
        __metadata('design:paramtypes', [index_1.MembroService, (typeof (_a = typeof router_1.ActivatedRoute !== 'undefined' && router_1.ActivatedRoute) === 'function' && _a) || Object])
    ], MembroComponent);
    return MembroComponent;
    var _a;
}());
exports.MembroComponent = MembroComponent;
//# sourceMappingURL=membro.component.js.map