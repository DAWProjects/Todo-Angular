import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';


import { AppComponent }        from './app.component';


import { HttpModule }    from '@angular/http';

import { routing } from './app.routing';

import {DashboardComponent} from './dashboard/dashboard.component'

import {TarefasComponent} from './tarefas/tarefas.component';
import {TarefaComponent} from './tarefas/tarefa/tarefa.component';
import {TarefaService} from './tarefas/shared/tarefa.service';

import {ConfigService} from './shared/utils/config.service';


import {MembroComponent} from './membros/membro/membro.component';
import { MembrosComponent }     from './membros/membros.component';
import {MembroService} from './membros/shared/membro.service';

import {ProjectoComponent} from './projectos/projecto/projecto.component';
import {ProjectosComponent} from './projectos/projectos.component';
import {ProjectoService} from './projectos/shared/index';



@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,

        MembroComponent,
        MembrosComponent,

        DashboardComponent,

        TarefasComponent,
        TarefaComponent,

        ProjectoComponent,
        ProjectosComponent
    ],
    providers: [
        MembroService,
        TarefaService,
        ProjectoService,
        ConfigService
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
