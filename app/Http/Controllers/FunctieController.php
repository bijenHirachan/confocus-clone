<?php

namespace App\Http\Controllers;

use App\Models\Functie;
use App\Models\Specialisation;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FunctieController extends Controller
{
    public function show(Functie $functie)
    {
        return Inertia::render("TargetGroups/Functies/ShowFunctie", [
            "functie" => $functie->load("specialisations", "sector")
        ]);
    }

    public function update(Functie $functie, Request $request)
    {
        $validated = $request->validate([
            "name" => "required|unique:specialisations,name"
        ]);

        Specialisation::create([
            "name" => $validated["name"],
            "slug" => str()->slug($validated["name"]),
            "functie_id" => $functie->id
        ]);
    }
}
