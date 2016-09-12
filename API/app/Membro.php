<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Membro extends Model
{
    protected $table = "membros";

    protected $fillable = [
        'nome',
        'idade',
        'sexo',
        'cargo',
        'grau_academico',
        'endereco',
        'telefone',
        'email',
        'projecto_id',
        'tarefa_id'];

    public function projecto(){
        return $this->belongsToMany('App\Projecto', 'tarefas')->
        withPivot('titulo','estado','data_criacao','data_entrega_desejada','data_entrega_real')->withTimestamps();
    }


}
