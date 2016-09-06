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
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var app_component_1 = require('./app.component');
var http_1 = require('@angular/http');
var app_routing_1 = require('./app.routing');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var tarefas_component_1 = require('./tarefas/tarefas.component');
var tarefa_component_1 = require('./tarefas/tarefa/tarefa.component');
var tarefa_service_1 = require('./tarefas/shared/tarefa.service');
var config_service_1 = require('./shared/utils/config.service');
var membro_component_1 = require('./membros/membro/membro.component');
var membros_component_1 = require('./membros/membros.component');
var membro_service_1 = require('./membros/shared/membro.service');
var projecto_component_1 = require('./projectos/projecto/projecto.component');
var projectos_component_1 = require('./projectos/projectos.component');
var index_1 = require('./projectos/shared/index');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                membro_component_1.MembroComponent,
                membros_component_1.MembrosComponent,
                dashboard_component_1.DashboardComponent,
                tarefas_component_1.TarefasComponent,
                tarefa_component_1.TarefaComponent,
                projecto_component_1.ProjectoComponent,
                projectos_component_1.ProjectosComponent
            ],
            providers: [
                membro_service_1.MembroService,
                tarefa_service_1.TarefaService,
                index_1.ProjectoService,
                config_service_1.ConfigService
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map