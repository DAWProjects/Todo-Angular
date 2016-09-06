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


    public function membros(){
        return $this->hasMany('App\Membro');
    }
}
