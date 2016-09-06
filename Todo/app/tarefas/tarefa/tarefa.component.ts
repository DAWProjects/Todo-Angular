import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';


import {Tarefa, TarefaService} from '../shared/index';
import {Projecto} from "../../projectos/shared/projecto.model";
import {Membro} from "../../membros/shared/membro.model";
import {MembroService} from "../../membros/shared/membro.service";

@Component({
    moduleId: module.id,
    selector: 'show-tarefa',
    templateUrl: 'tarefa.component.html',
    styleUrls: ['tarefa.component.css']


})

export class TarefaComponent implements OnInit {
    @Input()
    tarefa: Tarefa;
    creating = false;
    membros: Membro[];

    constructor(private tarefaService: TarefaService,
                private route: ActivatedRoute,
                private membroService: MembroService) {
    };

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.tarefaService.getTarefa(id)
                .then(tarefa => this.tarefa = tarefa);
        });
        this.getMembros();
    }


    voltar(): void {
        window.history.back();
    };


    save(): void {
        this.tarefaService.update(this.tarefa)
        // .then(Materialize.toast("Actualizado",5000,'grey accent-8'))
            .then(this.voltar);

    }


    add(titulo: string,
        data_criacao: Date,
        data_entrega_desejada: Date,
        estado: string, membro: number): void {
        this.creating = true;
        if (titulo == '')
            return;

        this.tarefa = new Tarefa(membro, titulo, data_criacao, data_entrega_desejada, null,
            estado);
        this.tarefa.membro_id = membro;

        this.tarefaService.create(this.tarefa).then(this.voltar);
    }

    getMembros(): void {
        this.membroService.getMembros().then(membros => this.membros = membros);
    }


}