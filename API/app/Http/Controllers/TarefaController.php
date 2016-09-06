<?php

namespace App\Http\Controllers;

use App\Membro;
use App\Tarefa;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;

use App\Http\Requests;

class TarefaController extends Controller
{
//    public function __construct()
//    {
//        $this->middleware('cors');
//    }


    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {

        $tarefas = Tarefa::with('membro')->get();
        return response()->json($tarefas->toArray());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

//        $tarefa = Tarefa::create(request(['titulo',
//            'estado',
//            'data_criacao',
//            'data_entrega_desejada',
//            'data_entrega_real',
//            'membro_id','projecto_id']));


        $tarefa = Tarefa::create(request(['titulo',
            'estado',
            'data_criacao',
            'data_entrega_desejada',
            'data_entrega_real',
            'membro_id']));


        $tarefa->save();

        return response()->json(["mensagem"=>"Tarefa Registada com sucesso"]);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $tarefa = Tarefa::find($id);
        $tarefa->fill(request(['titulo','estado','data_criacao','data_entrega_desejada','data_entrega_real']));
        $tarefa->save();
        return response()->json(["mensagem"=>"Tarefa Actualizada com sucesso"]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
