import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MembroService, Membro } from '../shared/index';

@Component({
    selector: 'membro-detail',
    templateUrl: 'app/membros/membro/membro.component.html',
    styleUrls:['app/membros/membro/membro.component.css']


})

export class MembroComponent implements OnInit {
    @Input()
    membro: Membro;
    constructor(
        private membroService: MembroService,
        private route: ActivatedRoute) {
    };

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.membroService.getMembro(id)
                .then(hero => this.membro = hero);
        });
    }

    goBack(): void {
        window.history.back();
    };



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


    voltar(): void {
        window.history.back();
    };
}