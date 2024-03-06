<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Company extends Model
{
    use HasFactory;

    protected $fillable = [
        "name",
        "email",
        "phone",
        "address",
        "post_code",
        "city",
        "country",
        "vat_number",
        "business_number",
        "billing_name",
        "billing_email",
        "billing_vat_number",
        "billing_business_number",
        "billing_address",
        "billing_post_code",
        "billing_city",
        "billing_country",
        "remarks"
    ];

    public function trainees(): HasMany
    {
        return $this->hasMany(Trainee::class);
    }
}
