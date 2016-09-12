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
var search_pipe_component_1 = require('../shared/utils/search-pipe.component');
var MembrosComponent = (function () {
    function MembrosComponent(router, membroService) {
        this.router = router;
        this.membroService = membroService;
    }
    MembrosComponent.prototype.onSelect = function (membro) {
        this.selectedMembro = membro;
        this.gotoDetail();
    };
    MembrosComponent.prototype.getMembros = function () {
        var _this = this;
        this.membroService.getMembros().then(function (membros) { return _this.membros = membros; });
    };
    MembrosComponent.prototype.ngOnInit = function () {
        this.getMembros();
    };
    MembrosComponent.prototype.gotoDetail = function () {
        this.router.navigate(['/membro', this.selectedMembro.id]);
    };
    MembrosComponent.prototype.create = function () {
        this.router.navigate(['/membro']);
    };
    MembrosComponent = __decorate([
        core_1.Component({
            styleUrls: ['app/membros/membros.component.css'],
            selector: 'show-membros',
            templateUrl: 'app/membros/membros.component.html',
            pipes: [search_pipe_component_1.FilterArrayPipe]
        }), 
        __metadata('design:paramtypes', [router_1.Router, index_1.MembroService])
    ], MembrosComponent);
    return MembrosComponent;
}());
exports.MembrosComponent = MembrosComponent;
//# sourceMappingURL=membros.component.js.map