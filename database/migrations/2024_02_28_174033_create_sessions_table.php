<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('sessions', function (Blueprint $table) {
            $table->id();
            $table->string("name");
            $table->string("excerpt");
            $table->string("slug")->nullable();
            $table->date("date");
            $table->integer("price");
            $table->time("start_time");
            $table->time("end_time");
            $table->integer("min_participants");
            $table->integer("max_participants");
            $table->foreignId("seminar_id")->constrained();
            $table->foreignId("speaker_id")->constrained();
            $table->foreignId("sector_id")->constrained();
            $table->foreignId("functie_id")->nullable()->constrained();
            $table->foreignId("specialisation_id")->nullable()->constrained();
            $table->foreignId("location_id")->nullable()->constrained();
            $table->foreignId("training_type_id")->constrained("training_types");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('sessions');
    }
};
