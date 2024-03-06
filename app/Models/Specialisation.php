<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Specialisation extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'functie_id'
    ];

    public function functie(): BelongsTo
    {
        return $this->belongsTo(Functie::class);
    }
}
