<?php

namespace App\Models;

use Cviebrock\EloquentSluggable\Sluggable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Session extends Model
{
    use HasFactory, Sluggable;

    protected $fillable = [
        'name',
        'excerpt',
        'slug',
        'date',
        'price',
        'start_time',
        'end_time',
        'min_participants',
        'max_participants',
        'seminar_id',
        'speaker_id',
        'sector_id',
        'functie_id',
        'specialisation_id',
        'location_id',
        'training_type_id'
    ];

    public function sluggable(): array
    {
        return [
            "slug" => [
                "source" => "name"
            ]
        ];
    }

    public function getRouteKeyName(): string
    {
        return "slug";
    }

    public function speaker(): BelongsTo
    {
        return $this->belongsTo(Speaker::class);
    }

    public function seminar(): BelongsTo
    {
        return $this->belongsTo(Seminar::class);
    }

    public function sector(): BelongsTo
    {
        return $this->belongsTo(Sector::class);
    }

    public function functie(): BelongsTo
    {
        return $this->belongsTo(Functie::class);
    }

    public function specialisation(): BelongsTo
    {
        return $this->belongsTo(Specialisation::class);
    }

    public function trainingType(): BelongsTo
    {
        return $this->belongsTo(TrainingType::class);
    }

    public function location(): BelongsTo
    {
        return $this->belongsTo(Location::class);
    }

    public function trainees(): HasMany
    {
        return $this->hasMany(Trainee::class);
    }
}
