<?php

namespace App\Http\Controllers;

use App\Models\Functie;
use App\Models\Sector;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SectorController extends Controller
{
    public function index()
    {
        return Inertia::render("TargetGroups/Sectors/SectorIndex", [
            "sectors" => Sector::all()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            "name" => "required|unique:sectors,name"
        ]);

        Sector::create([
            "name" => $validated["name"],
            "slug" => str()->slug($validated["name"])
        ]);

        return to_route("sectors.index");
    }

    public function show(Sector $sector)
    {
        return Inertia::render("TargetGroups/Sectors/ShowSector", [
            "sector" => $sector->load("functies")
        ]); 
    }

    public function update(Sector $sector, Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|unique:functies,name'
        ]);

        Functie::create([
            "name" => $validated["name"],
            "slug" => str()->slug($validated["name"]),
            "sector_id" => $sector->id
        ]);

    }
}
