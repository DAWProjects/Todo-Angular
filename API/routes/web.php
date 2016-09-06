<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});



Route::get('todas-tarefas', 'TarefaController@index')->middleware('cors');


Route::put('todas-tarefas/{id}', 'TarefaController@update')->middleware('cors');

Route::post('criar-tarefa', 'TarefaController@store')->middleware('cors');



Route::get('todos-membros', 'MembroController@index')->middleware('cors');


Route::put('todos-membros/{id}', 'MembroController@update')->middleware('cors');

Route::post('criar-membro', 'MembroController@store')->middleware('cors');



Route::get('todos-projectos', 'ProjectoController@index')->middleware('cors');


Route::put('todos-projectos/{id}', 'ProjectoController@update')->middleware('cors');

Route::post('criar-projecto', 'ProjectoController@store')->middleware('cors');


Route::resource('membros', 'MembroController');


Route::resource('projectos', 'ProjectoController');