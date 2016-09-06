<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTarefasTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tarefas', function (Blueprint $table) {
            $table->increments('id');
            $table->string('titulo');
            $table->date('data_criacao');
            $table->date('data_entrega_desejada')->nullable();
            $table->date('data_entrega_real')->nullable();
            $table->string('estado')->nullable();
            $table->softDeletes();
            $table->integer('membro_id')->unsigned();
            $table->foreign('membro_id')->references('id')->on('membros')->onDelete('cascade')
                ->onUpdate('cascade');
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
        Schema::drop('tarefas');
    }
}
