<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TrainingTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "type" => "Opleiding op locatie",
                "slug" => str()->slug("Opleiding op locatie"),
            ],
            [
                "type" => "Virtual classroom",
                "slug" => str()->slug("Virtual classroom"),
            ],
            [
                "type" => "On demand webinar",
                "slug" => str()->slug("On demand webinar"),
            ],
        ];

        DB::table("training_types")->insert($data);
    }
}
