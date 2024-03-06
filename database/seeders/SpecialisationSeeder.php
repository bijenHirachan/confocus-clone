<?php

namespace Database\Seeders;

use App\Models\Functie;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SpecialisationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "name" => "Arbeidsrecht",
                "functie_id" => 1,
                "slug" => str()->slug("Arbeidsrecht")
            ],
            [
                "name" => "Bouwrecht",
                "functie_id" => 1,
                "slug" => str()->slug("Bouwrecht")
            ],
        ];

        DB::table("specialisations")->insert($data);
    }
}
