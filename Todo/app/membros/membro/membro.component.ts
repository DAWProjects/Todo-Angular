import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { MembroService, Membro } from '../shared/index';
import {Projecto} from "../../projectos/shared/projecto.model";
import {ProjectoService} from "../../projectos/shared/projecto.service";

@Component({
    selector: 'membro-detail',
    templateUrl: 'app/membros/membro/membro.component.html',
    styleUrls:['app/membros/membro/membro.component.css']


})

export class MembroComponent implements OnInit {
    @Input()
    membro: Membro;
    projectos: Projecto[];
    creating = false;
    constructor(
        private membroService: MembroService,
        private route: ActivatedRoute,
        private projectoService: ProjectoService) {
    };

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.membroService.getMembro(id)
                .then(hero => this.membro = hero);
        });
        this.getProjectos();
    }

    goBack(): void {
        window.history.back();
    };



    add(nome: string,
        sexo: string,
        idade: number,
        projecto: number,
        grau_academico:string,
        cargo:string,
        telefone:string,
        email:string): void {
        this.creating = true;
        if (nome == '')
            return;

        this.membro = new Membro(nome,idade,sexo,cargo,grau_academico,telefone,email,projecto);

        this.membroService.create(this.membro).then(this.voltar);
    }


    voltar(): void {
        window.history.back();
    };

    getProjectos(): void{
        this.projectoService.getProjectos().then(projectos => this.projectos = projectos);
    }

}