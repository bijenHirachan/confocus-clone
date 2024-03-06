<?php

namespace Database\Seeders;

use App\Models\Sector;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FunctieSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $data1 = [
            [
                "name" => "Advocaat",
                "sector_id" => 1,
                "slug" => str()->slug("Advocaat")
            ],
            [
                "name" => "Notaris",
                "sector_id" => 1,
                "slug" => str()->slug("Notaris")
            ],
            [
                "name" => "Gerechtsdeurwaarder",
                "sector_id" => 1,
                "slug" => str()->slug("Gerechtsdeurwaarder")
            ]
        ];

        DB::table("functies")->insert($data1);


        $data2 = [
            [
                "name" => "Arts",
                "sector_id" => 2,
                "slug" => str()->slug("Arts")
            ],
            [
                "name" => "Gerechtsdeskundige",
                "sector_id" => 2,
                "slug" => str()->slug("Gerechtsdeskundige")
            ]
        ];

        DB::table("functies")->insert($data2);


        $data3 = [
            [
                "name" => "FAVV",
                "sector_id" => 3,
                "slug" => str()->slug("FAVV")
            ],
            [
                "name" => "NGROD",
                "sector_id" => 3,
                "slug" => str()->slug("NGROD")
            ]
        ];

        DB::table("functies")->insert($data3);

    }
}
