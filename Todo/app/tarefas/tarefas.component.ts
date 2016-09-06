import {Component,OnInit} from '@angular/core';
import {Tarefa,TarefaService } from './shared/index';

import { Router } from '@angular/router';


@Component({
    styleUrls:['app/tarefas/tarefas.component.css'],
    selector: 'todas-tarefas',
    templateUrl:'app/tarefas/tarefas.component.html',
})
export class TarefasComponent implements OnInit{

    constructor(
        private router: Router,
        private tarefaService: TarefaService) { }

    selectedTarefa: Tarefa;
    tarefas: Tarefa[];

    onSelect(tarefa: Tarefa): void {
        this.selectedTarefa = tarefa;
        this.gotoDetail();
    }

    getTarefas(): void {
        this.tarefaService.getTarefas().then(tarefas => this.tarefas = tarefas);
    }

    ngOnInit(): void {
        this.getTarefas();
    }

    gotoDetail(): void {
        this.router.navigate(['/tarefa', this.selectedTarefa.id]);
    }


    create(): void{
        this.router.navigate(['/tarefa'])
    }
}
