export interface ITarefa {
    id: number;
    titulo: string;
    data_criacao: Date;
    data_entrega_desejada: Date;
    data_entrega_real: Date;
    estado: string;
}

export interface ISchedule {
    id: number;
    title: string;
    description: string;
    timeStart: Date;
    timeEnd: Date;
    location: string;
    type: string;
    status: string;
    dateCreated: Date;
    dateUpdated: Date;
    creator: string;
    creatorId: number;
    attendees: number[];
}


export interface IProjecto {
    id: number;
    nome: string;
    data_inicio: Date;
    data_fim: Date;
    estado: string;
}

export interface IProjectoDetails {
    id: number;
    nome: string;
    data_inicio: Date;
    data_fim: Date;
    estado: string;
    tarefas: ITarefa[];
    estados: string[];
    types: string[];
}

export interface Pagination {
    CurrentPage: number;
    ItemsPerPage: number;
    TotalItems: number;
    TotalPages: number;
}

export class PaginatedResult<T> {
    result: T;
    pagination: Pagination;
}

export interface Predicate<T> {
    (item: T): boolean
}