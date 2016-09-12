import {Projecto} from "../../projectos/shared/projecto.model";
import {Tarefa} from "../../tarefas/shared/tarefa.model";
export class Membro {
    id: number;
    nome : string;
    idade: number;
    sexo: string;
    cargo: string;
    grau_academico: string;
    endereco: string;
    telefone: string;
    email: string;
    projecto: Projecto;
    tarefas: Tarefa[];
    projecto_id:number;


    constructor(nome: string, idade: number, sexo: string, cargo: string, grau_academico: string, telefone: string, email: string, projecto_id: number) {
        this.nome = nome;
        this.idade = idade;
        this.sexo = sexo;
        this.cargo = cargo;
        this.grau_academico = grau_academico;
        this.telefone = telefone;
        this.email = email;
        this.projecto_id = projecto_id;
    }
}