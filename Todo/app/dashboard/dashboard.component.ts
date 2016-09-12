import {Component, OnInit} from '@angular/core';
import {Tarefa} from '../tarefas/shared/tarefa.model';
import {TarefaService} from '../tarefas/shared/tarefa.service';

import {Membro} from '../membros/shared/membro.model';
import {MembroService} from '../membros/shared/membro.service';

import {Router} from '@angular/router';
import {Projecto} from "../projectos/shared/projecto.model";
import {ProjectoService} from "../projectos/shared/projecto.service";
import {FilterArrayPipe} from '../shared/utils/search-pipe.component';

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css'],
    pipes:[FilterArrayPipe]
})
export class DashboardComponent implements OnInit {

    tarefas: Tarefa[];
    membros: Membro[];
    projectos: Projecto[];


    constructor(private router: Router,
                private tarefaService: TarefaService,
                private membroService: MembroService,
                private projectoService: ProjectoService) {
    }

    ngOnInit(): void {
        this.tarefaService.getTarefas()
            .then(tarefas => this.tarefas = tarefas);

        this.membroService.getMembros()
            .then(membros => this.membros = membros);

        this.projectoService.getProjectos()
            .then(projectos => this.projectos = projectos)
    }

    gotoDetail(tipo: string, id: number): void {
        let link = ['/' + tipo, id];
        this.router.navigate(link);
    }
}

