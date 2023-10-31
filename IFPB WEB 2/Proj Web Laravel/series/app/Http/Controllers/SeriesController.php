<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB; 
use App\Models\Serie;

class SeriesController extends Controller
{
    public function index(Request $req){        
        $series = Serie::all();
        $mensagemSucesso = $req->session()->get('mensagem.sucesso');
        return view('series.index')
        ->with('series', $series)->with('mensagemSucesso', $mensagemSucesso);
    }

    public function capturaParametro(Request $req){
        echo $req->query('nome');
        echo $req->query('sobreNome');

    }

    public function create(){
        return view('series.create');
    }

    public function store(Request $req){        
        #$serie = new Serie;
        #$serie->nome =$req->input('nome'); 
        #$serie->save();
        $nomeSerie =  $req->input('nome');     
        Serie::create($req->all());
        $series = Serie::all();
        return to_route('series.index')->with('mensagem.sucesso', 
        "Serie $nomeSerie inserida com sucesso");     
    }

    public function destroy(Request $req){
        $id = $req->serie;
        $serie = Serie::find($id);
        $nomeSerie = $serie->nome;
        $serie->delete();
        return to_route('series.index')->with('mensagem.sucesso', 
        "Serie $nomeSerie removida com sucesso");
    }

    public function edit(Request $req){
        $id = $req->serie;
        $serie = Serie::find($id);
        return view('series.edit')->with('serie', $serie);
    }

    public function update(Request $req){
        $id = $req->input('id');     
        $serie = Serie::find($id);
        $serie->nome = $req->input('nome');        
        $serie->update();
        return to_route('series.index')->with('mensagem.sucesso', 
        "Serie $serie->nome atualizada com sucesso");
    }
}
