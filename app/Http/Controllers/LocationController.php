<?php

namespace App\Http\Controllers;

use App\Models\Location;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LocationController extends Controller
{
    public function index()
    {
        return Inertia::render("Locations/LocationIndex", [
            "locations" => Location::all()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            "name" => "required",
            "street" => "required",
            "post_code" => "required",
            "city" => "required",
            "country" => "required"
        ]);

        Location::create($validated);
    }
}
