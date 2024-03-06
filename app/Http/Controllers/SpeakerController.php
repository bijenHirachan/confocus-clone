<?php

namespace App\Http\Controllers;

use App\Models\Speaker;
use App\Http\Requests\StoreSpeakerRequest;
use App\Http\Requests\UpdateSpeakerRequest;
use Inertia\Inertia;

class SpeakerController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render("Speakers/SpeakerIndex", [
            "speakers" => Speaker::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render("Speakers/CreateSpeaker");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreSpeakerRequest $request)
    {
        $validated = $request->validated();

        Speaker::create([
            "name" => $validated["name"],
            "email" => $validated["email"],
            "phone" => $validated["phone"],
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Speaker $speaker)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Speaker $speaker)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateSpeakerRequest $request, Speaker $speaker)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Speaker $speaker)
    {
        //
    }
}
