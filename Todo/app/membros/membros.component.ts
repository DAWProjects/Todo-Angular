import {Component} from '@angular/core';
import { MembroService, Membro } from './shared/index';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
    styleUrls:['app/membros/membros.component.css'],
    selector: 'show-membros',
    templateUrl:'app/membros/membros.component.html',
})
export class MembrosComponent implements OnInit{

    constructor(
        private router: Router,
        private membroService: MembroService) { }

    selectedMembro: Membro;
    membros: Membro[];

    onSelect(membro: Membro): void {
        this.selectedMembro = membro;
        this.gotoDetail();
    }

    getMembros(): void {
        this.membroService.getMembros().then(membros => this.membros = membros);
    }

    ngOnInit(): void {
        this.getMembros();
    }

    gotoDetail(): void {
        this.router.navigate(['/membro', this.selectedMembro.id]);
    }

    create(): void{
        this.router.navigate(['/membro'])
    }
}
