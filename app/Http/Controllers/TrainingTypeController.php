<?php

namespace App\Http\Controllers;

use App\Models\TrainingType;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TrainingTypeController extends Controller
{
    public function index()
    {
        return Inertia::render('TrainingTypes/TrainingTypeIndex', [
            "training_types" => TrainingType::all()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'type' => 'required|unique:training_types,type'
        ]);

        TrainingType::create([
            "type" => $validated["type"],
            "slug" => str()->slug($validated["type"])
        ]);

        return to_route("training-types.index");
    }
}
