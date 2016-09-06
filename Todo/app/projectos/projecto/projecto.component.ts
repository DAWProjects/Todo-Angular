import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';


import {Projecto, ProjectoService} from '../shared/index';
import {Membro} from "../../membros/shared/membro.model";
import {MembroService} from "../../membros/shared/membro.service";

@Component({
    moduleId: module.id,
    selector: 'show-projecto',
    templateUrl: 'projecto.component.html',
    styleUrls: ['projecto.component.css']


})

export class ProjectoComponent implements OnInit {
    @Input()
    projecto: Projecto;
    creating = false;
    membros: Membro[];

    constructor(private projectoService: ProjectoService,
                private route: ActivatedRoute,
                private membroService: MembroService) {
    };

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.projectoService.getProjecto(id)
                .then(projecto => this.projecto = projecto);
        });
        this.getMembros();
    }


    voltar(): void {
        window.history.back();
    };


    save(): void {
        this.projectoService.update(this.projecto)
        // .then(Materialize.toast("Actualizado",5000,'grey accent-8'))
            .then(this.voltar);

    }


    add(nome:string,data_inicio:Date,data_fim:Date,estado:string): void {
        this.creating = true;

        this.projecto = new Projecto(nome,data_inicio,data_fim,estado);
        this.projectoService.create(this.projecto).then(this.voltar);
        this.creating=false;
    }

    getMembros(): void {
        this.membroService.getMembros().then(membros => this.membros = membros);
    }


}