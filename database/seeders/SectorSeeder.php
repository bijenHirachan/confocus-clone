<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class SectorSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
            [
                "name" => "Juridisch",
                "slug" => str()->slug("Juridisch")
            ],
            [
                "name" => "Healthcare",
                "slug" => str()->slug("Healthcare")
            ],
            [
                "name" => "Dierengeneeskunde",
                "slug" => str()->slug("Dierengeneeskunde")
            ]
        ];
      
        DB::table("sectors")->insert($data);
    }
}
