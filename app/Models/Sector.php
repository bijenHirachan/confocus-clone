<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Sector extends Model
{
    protected $fillable = [
        'name',
        'slug'
    ];

    public function getRouteKeyName(): string
    {
        return 'slug';
    }

    public function functies(): HasMany
    {
        return $this->hasMany(Functie::class, "sector_id");
    }

   
}
