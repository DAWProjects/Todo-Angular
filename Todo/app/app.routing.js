"use strict";
var router_1 = require('@angular/router');
var membros_component_1 = require('./membros/membros.component');
var membro_component_1 = require('./membros/membro/membro.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var tarefas_component_1 = require('./tarefas/tarefas.component');
var tarefa_component_1 = require('./tarefas/tarefa/tarefa.component');
var projectos_component_1 = require("./projectos/projectos.component");
var projecto_component_1 = require("./projectos/projecto/projecto.component");
var appRoutes = [
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'tarefa/:id',
        component: tarefa_component_1.TarefaComponent
    },
    {
        path: 'tarefas',
        component: tarefas_component_1.TarefasComponent
    },
    {
        path: 'tarefa',
        component: tarefa_component_1.TarefaComponent
    },
    {
        path: 'membros',
        component: membros_component_1.MembrosComponent
    },
    {
        path: 'membro/:id',
        component: membro_component_1.MembroComponent
    },
    {
        path: 'membro',
        component: membro_component_1.MembroComponent
    },
    {
        path: 'projectos',
        component: projectos_component_1.ProjectosComponent
    },
    {
        path: 'projecto/:id',
        component: projecto_component_1.ProjectoComponent
    },
    {
        path: 'projecto',
        component: projecto_component_1.ProjectoComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map