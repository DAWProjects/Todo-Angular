<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMembrosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('membros', function (Blueprint $table) {
            $table->increments('id');
            $table->string('nome');
            $table->integer('idade');
            $table->string('sexo');
            $table->string('cargo');
            $table->string('grau_academico')->nullable();
            $table->string('endereco')->nullable();
            $table->string('telefone');
            $table->string('email')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('membros');
    }
}
