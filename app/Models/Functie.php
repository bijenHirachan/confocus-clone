<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Functie extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'slug',
        'sector_id'
    ];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function sector(): BelongsTo
    {
        return $this->belongsTo(Sector::class);
    }

    public function specialisations(): HasMany
    {
        return $this->hasMany(Specialisation::class);
    }
}
