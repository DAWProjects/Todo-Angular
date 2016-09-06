<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tarefa extends Model
{
    protected $table = "tarefas";
    protected $fillable = [
        'titulo',
        'estado',
        'data_criacao',
        'data_entrega_desejada',
        'data_entrega_real',
        'membro_id'
    ];


    public function membro(){
        return $this->belongsTo('App\Membro');
    }
}
