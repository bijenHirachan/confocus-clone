<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreSessionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "name" => "required",
            "date" => "required|date",
            "start_time" => "required",
            "end_time" => "required",
            "min_participants" =>  "required|numeric",
            "max_participants" => "required|numeric",
            "price" => "required|numeric",
            "excerpt" => "required",
            "seminar_id" => "required|exists:seminars,id",
            "speaker_id" => "required|exists:speakers,id",
            "sector_id" => "required|exists:sectors,id",
            "functie_id" => "nullable|exists:functies,id",
            "specialisation_id" => "nullable|exists:specialisations,id",
            "training_type_id" => "required|exists:training_types,id",
            "location_id" => "required|exists:locations,id"
        ];
    }
}
