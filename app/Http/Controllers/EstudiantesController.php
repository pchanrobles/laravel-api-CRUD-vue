<?php

namespace App\Http\Controllers;


use App\Models\Estudiante;

use Illuminate\Http\Request;

class EstudiantesController extends Controller
{
    public function index(){
        $estudiantes = Estudiante::all();
        return $estudiantes;
    }

   
    public function store(Request $request){

        // validar

        $datos_validados = $request->validate([

            'nombre' => 'required|min:3',
            'email' => 'required',
        ]);
    
        //crear
       
        Estudiante::create($datos_validados);
        return ['mensaje'=> 'Usuario creado'];
    }


    public function show($id){

        
        //buscar un estudiante

        $estudiante = Estudiante::find($id);

        //encontrar estudiante existente

        if(!$estudiante){
            return ['error'=> 'estudiante no encontrado'];

        }

        //return ['datos'=>$estudiante];


        return ['datos'=>$estudiante];


    }


    public function update($id, Request $request){
        //validar datos
        
        $datos_validados = $request->validate([

            'nombre' => 'min:3',
            'email' => 'min:8',
        ]);
    
        //buscar estudiante

        $actualizar = Estudiante::find($id);

        //comprobar estudiante existente

        if(!$actualizar){
            return ['error'=> 'estudiante no encontrado'];

        }
        // actualizar datos
        $actualizar->update($datos_validados);

        return ['mensaje'=>'Estudiante Actializado'];


    }


    
    public function destroy($id){
        
    
        //buscar estudiante

        $borrar = Estudiante::find($id);

        //comprobar estudiante existente

        if(!$borrar){
            return ['error'=> 'estudiante no encontrado'];

        }
// actualizar datos
        $borrar->destroy($id);

        return ['mensaje'=>'Estudiante Eliminado'];

    }

    
}
