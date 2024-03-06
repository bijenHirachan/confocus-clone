<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RegisterTraineeRequest extends FormRequest
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
            "company_name" => "required",
            "company_email" => "required|email",
            "company_phone" => "required",
            "company_address" => "required",
            "company_post_code" => "required",
            "company_city" => "required",
            "company_country" => "required",
            "company_vat_number" => "nullable",
            "company_business_number" => "nullable",
            "company_billing_name" => "required",
            "company_billing_email" => "required|email",
            "company_billing_vat_number" => "nullable",
            "company_billing_business_number" => "nullable",
            "company_billing_address" => "required",
            "company_billing_post_code" => "required",
            "company_billing_city" => "required",
            "company_billing_country" => "required",
            "company_remarks" => "nullable",
            "trainees.*.name" => "required",
            "trainees.*.email" => "required|email",
            "trainees.*.phone" => "required",
            "trainees.*.functie" => "required",
            "trainees.*.gender" => "required",
            "trainees.*.sector" => "required",
            "sessions.*" => "required|exists:sessions,id"
        ];
    }
}
