<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class LocationSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data = [
                    [
                        "name" => "Location One",
                        "slug" => str()->slug("Location One"),
                        "street" => "Brusselsestraat 78",
                        "post_code" => "3000",
                        "city" => "Leuven",
                        "country" => "belgium"
                    ],
                    [
                        "name" => "Location Two",
                        "slug" => str()->slug("Location Two"),
                        "street" => "Fonteinstraat 56",
                        "post_code" => "3000",
                        "city" => "Leuven",
                        "country" => "belgium"
                    ],
                    [
                        "name" => "Location Three",
                        "slug" => str()->slug("Location Three"),
                        "street" => "Processiestraat 100",
                        "post_code" => "1000",
                        "city" => "Brussels",
                        "country" => "belgium"
                    ],
                ];

        DB::table("locations")->insert($data);
    }
}
