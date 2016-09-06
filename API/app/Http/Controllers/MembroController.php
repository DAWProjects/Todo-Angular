<?php

namespace App\Http\Controllers;

use App\Membro;
use Illuminate\Http\Request;

use App\Http\Requests;

class MembroController extends Controller
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
        $membros = Membro::with('tarefas')->get();
        return response()->json($membros->toArray());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $membro = Membro::create($request->all());
        $membro->save();
        return response()->json(["mensagem"=>"membro Registado com sucesso"]);
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
        $membro = Membro::find($id);
        $membro->fill($request->all());
        $membro->save();
        return response()->json(["mensagem"=>"membro Actualizado com sucesso"]);
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
