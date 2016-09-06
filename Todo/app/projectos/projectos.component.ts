import {Component,OnInit} from '@angular/core';
import {Projecto,ProjectoService } from './shared/index';

import { Router } from '@angular/router';
import {Membro} from "../membros/shared/membro.model";


@Component({
    moduleId: module.id,
    styleUrls:['projectos.component.css'],
    selector: 'todos-projectos',
    templateUrl:'projectos.component.html',
})



export class ProjectosComponent implements OnInit{

    constructor(
        private router: Router,
        private tarefaService: ProjectoService) { }

    selectedProjecto: Projecto;
    selectedMembro : Membro;
    projectos: Projecto[];

    onSelect(projecto: Projecto): void {
        this.selectedProjecto = projecto;
        this.gotoDetail('projecto',projecto.id);
    }

    getProjectos(): void {
        this.tarefaService.getProjectos().then(projectos => this.projectos = projectos);
    }

    ngOnInit(): void {
        this.getProjectos();
    }

    gotoDetail(tipo: string,id:number): void {
        this.router.navigate(['/'+tipo, id]);
    }


    create(): void{
        this.router.navigate(['/projecto'])
    }

    onSelectMembro(membro: Membro): void {
        this.selectedMembro = membro;
        this.gotoDetail('membro',membro.id);
    }

}
