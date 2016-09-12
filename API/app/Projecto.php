<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Projecto extends Model
{
    protected $table = "projectos";

    protected $fillable = [
        'nome',
        'data_inicio',
        'data_fim',
        'estado'
    ];



    public function membro(){
        return $this->belongsToMany('App\Membro', 'tarefas')->
         withPivot('titulo','estado','data_criacao','data_entrega_desejada','data_entrega_real')->withTimestamps();
    }
}
