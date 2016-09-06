import {ModuleWithProviders}  from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {MembrosComponent}  from './membros/membros.component';
import {MembroComponent}  from './membros/membro/membro.component';
import {DashboardComponent} from './dashboard/dashboard.component'
import {TarefasComponent} from './tarefas/tarefas.component';
import {TarefaComponent} from './tarefas/tarefa/tarefa.component';
import {ProjectosComponent} from "./projectos/projectos.component";
import {ProjectoComponent} from "./projectos/projecto/projecto.component";

const appRoutes: Routes = [

    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },


    {
        path: 'tarefa/:id',
        component: TarefaComponent
    },

    {
        path: 'tarefas',
        component: TarefasComponent
    },

    {
        path: 'tarefa',
        component: TarefaComponent
    },


    {
        path: 'membros',
        component: MembrosComponent
    },

    {
        path: 'membro/:id',
        component: MembroComponent
    },

    {
        path: 'membro',
        component: MembroComponent
    },


    {
        path: 'projectos',
        component: ProjectosComponent
    },

    {
        path: 'projecto/:id',
        component: ProjectoComponent
    },

    {
        path: 'projecto',
        component: ProjectoComponent
    }


];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
