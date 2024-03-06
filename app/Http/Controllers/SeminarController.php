<?php

namespace App\Http\Controllers;

use App\Models\Seminar;
use App\Http\Requests\StoreSeminarRequest;
use App\Http\Requests\UpdateSeminarRequest;
use App\Models\Location;
use App\Models\Sector;
use App\Models\Speaker;
use App\Models\TrainingType;
use Inertia\Inertia;

class SeminarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render("Seminars/SeminarIndex", [
            "seminars" => Seminar::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Seminars/CreateSeminar");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSeminarRequest $request)
    {
        $validated = $request->validated();

        Seminar::create([
            "name" => $validated['name'],
            "description" => $validated['description'],
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Seminar $seminar)
    {
        return Inertia::render("Seminars/ShowSeminar", [
            "seminar" => $seminar->load("sessions"),
            "speakers" => Speaker::all(),
            "sectors" => Sector::with("functies.specialisations")->get(),
            "locations" => Location::all(),
            "training_types" => TrainingType::all()
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Seminar $seminar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSeminarRequest $request, Seminar $seminar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Seminar $seminar)
    {
        //
    }
}
